/// <reference path="../@types/plugin-interface.d.ts"/>
import { PluginBase } from '../PluginBase';

export module DictionaryPlugin {
    export let Plugin: IPlugin = Object.assign({}, PluginBase, {
        niceName: 'Dictionary',
        description: 'Quickly lookup words in an English dictionary. Switch to another language to lookup words in the respective dictionary.',
        version: '1.0.0',
        apiVersion: '1',
        match: [/https?:\/\/www\.merriam-webster\.com/, /https?:\/\/www\.weblio\.jp/],
        homophones: {},
        authors: "Miko",

        commands: [{
            name: 'Lookup Word',
            description: "Lookup a word in the dictionary.",
            global: true,
            match: 'dictionary *',
            pageFn: async (transcript: string, query: string) => {
                PluginBase.util.getLanguage().then(selectedLang => {
                    if (selectedLang.startsWith('en')) {
                        window.location.href = `https://www.merriam-webster.com/dictionary/${query}`;
                    } else {
                        window.location.href = `https://www.weblio.jp/content/${query}`;
                    }
                });
            }
        },
        ],
    });
}
