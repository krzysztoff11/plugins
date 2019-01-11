(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{181:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("It's recommended that you go through the "),a("router-link",{attrs:{to:"/quick-start.html"}},[t._v("5 Minute Quick Start")]),t._v(" first to understand how to install and test your plugins.")],1)]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("What if we want a plugin that accepts an arbitrary argument after some key words?")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Let's write a plugin that opens x tab for y minutes so that we can limit it's time wasting-ness. This might be useful if we need to check facebook but don't want to get sucked into the feed for too long.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Use cases include:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("We need to make "),a("code",[t._v("match")]),t._v(" an object of type "),a("router-link",{attrs:{to:"/api-reference/command.html#idynamicmatch"}},[a("code",[t._v("IDynamicMatch")])])],1),t._v(" "),a("p",[t._v("How about a plugin for Gmail that moves the currently selected messages to a folder that the user commands to?")]),t._v(" "),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"dynamic-match-patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-match-patterns","aria-hidden":"true"}},[this._v("#")]),this._v(" Dynamic Match Patterns")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"wildcard-matching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wildcard-matching","aria-hidden":"true"}},[this._v("#")]),this._v(" Wildcard Matching")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Let's make a plugin that shows the weather for any city when user says: "),s("span",{staticClass:"voice-cmd"},[this._v("weather for [city name]")]),this._v(" (eg. "),s("span",{staticClass:"voice-cmd"},[this._v("weather for Chiang Mai")]),this._v(")")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("Easy peasy.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Use "),s("code",[this._v("*")]),this._v(" in your "),s("code",[this._v("match")]),this._v(" string to greedily match any words.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v('/// <reference path="../@types/plugin-interface.d.ts"/>')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PluginBase "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"../PluginBase"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("module")]),t._v(" WeatherPlugin "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" Plugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("assign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PluginBase"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        niceName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Weather'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        match"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/.*accuweather\\.com/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        commands"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Check the Weather'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            description"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Check the weather for a given city.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// say it on any page (not just accuweather domain)")]),t._v("\n            global"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            match"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'weather for *'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'forecast for *'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            pageFn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transcript"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// https://api.accuweather.com/locations/v1/cities/autocomplete?q=chiang%20mai&apikey=d41dfd5e8a1748d0970cba6637647d96&language=en-us&get_param=value")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v('// ex resp: [{"Version":1,"Key":"317505","Type":"City","Rank":41,"LocalizedName":"Chiang Mai","Country":{"ID":"TH","LocalizedName":"Thailand"},"AdministrativeArea":{"ID":"50","LocalizedName":"Chiang Mai"}}]')]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// https://www.accuweather.com/en/th/chiang-mai/317505/weather-forecast/317505")]),t._v("\n                $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`https://api.accuweather.com/locations/v1/cities/autocomplete?q=")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("q"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("&apikey=d41dfd5e8a1748d0970cba6637647d96&language=en-us&get_param=value`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cityId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" resp"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" countryCode "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" resp"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Country"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("ID")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cityName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" resp"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LocalizedName"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("' '")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'-'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`https://www.accuweather.com/en/")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("countryCode"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("/")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("cityName"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("/")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("cityId"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("/weather-forecast/")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("cityId"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"numeral-matching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numeral-matching","aria-hidden":"true"}},[this._v("#")]),this._v(" Numeral Matching")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("Ain't nothin' to it.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Use "),s("code",[this._v("#")]),this._v(" in your "),s("code",[this._v("match")]),this._v(" string to match numerals or ordinals including ones that are spelled-out (ie. "),s("span",{staticClass:"voice-cmd"},[this._v("four-thousand")]),this._v(")")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v('/// <reference path="../@types/plugin-interface.d.ts"/>')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PluginBase "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../PluginBase'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("module")]),t._v(" AntiProcrastinationPlugin "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" Plugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("assign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PluginBase"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        niceName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Anti-procrastination'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        description"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Helpers for overcoming procrastination.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        match"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/.*/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        commands"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Self destructing tab'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            description"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Open a new tab with x website for y minutes. Useful for limiting the time-sucking power of sites like facebook, reddit, twitter etc.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            global"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            match"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'open * for # minutes'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            pageFn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transcript"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" siteStr"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minutes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`site: ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("siteStr"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(", minutes: ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("minutes"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"match-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#match-function","aria-hidden":"true"}},[this._v("#")]),this._v(" Match Function")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("For the most advanced cases, you can write a function that takes in transcripts as they come down the wire and return "),a("code",[t._v("undefined")]),t._v(" when there's "),a("em",[t._v("no match")]),t._v(", or an array of arguments to pass to the "),a("code",[t._v("pageFn")]),t._v(" when there "),a("em",[t._v("is")]),t._v(" a match.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Match based on something on the page")]),this._v(" "),s("li",[this._v("Match based on some internal plugin state")]),this._v(" "),s("li",[this._v("Regex matching")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("Cake walk.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v('We could use the wildcard matching for this (eg. "move to *") but then we cant limit the user\'s choices to valid folders.')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v('/// <reference path="../@types/plugin-interface.d.ts"/>')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PluginBase "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../PluginBase'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("module")]),t._v(" GmailPlugin "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" Plugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("assign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PluginBase"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        niceName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Gmail'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        match"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/.*gmail.com/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        commands"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Move to Folder'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            description"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Move already selected emails to a spoken folder'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            match"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                description"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Say \"move to [folder name]\"'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folderStr"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token comment"}},[t._v("// if (folderStr in folders) {")]),t._v("\n                    "),a("span",{attrs:{class:"token comment"}},[t._v("//    ...")]),t._v("\n                    "),a("span",{attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            pageFn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="dynamic-matching.md";s.default=e.exports}}]);