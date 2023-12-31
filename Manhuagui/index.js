(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":1,"./Tracker":2}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);

},{"./base":3,"./models":47}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],10:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],11:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],12:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],13:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],14:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],15:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],17:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],18:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],19:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],20:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],21:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],22:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],23:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":8,"./Form":9,"./FormRow":10,"./Header":11,"./InputField":12,"./Label":13,"./Link":14,"./MultilineLabel":15,"./NavigationButton":16,"./OAuthButton":17,"./Section":18,"./Select":19,"./Stepper":20,"./Switch":21,"./WebViewButton":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],27:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],28:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],29:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],30:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],31:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],32:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],33:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],34:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],35:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],37:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],41:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],44:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],45:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],46:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);
__exportStar(require("./SearchFilter"), exports);

},{"./Chapter":5,"./ChapterDetails":6,"./Constants":7,"./DynamicUI":23,"./HomeSection":24,"./Languages":25,"./Manga":26,"./MangaTile":27,"./MangaUpdate":28,"./PagedResults":29,"./RawData":30,"./RequestHeaders":31,"./RequestInterceptor":32,"./RequestManager":33,"./RequestObject":34,"./ResponseObject":35,"./SearchField":36,"./SearchFilter":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],48:[function(require,module,exports){
"use strict";
var LZString = (function () {
    var f = String.fromCharCode;
    var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var baseReverseDic = {};
    function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for (var i = 0; i < alphabet.length; i++) {
                baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
        }
        return baseReverseDic[alphabet][character];
    }
    var LZString = {
        decompressFromBase64: function (input) {
            if (input == null)
                return "";
            if (input == "")
                return null;
            return LZString._0(input.length, 32, function (index) {
                return getBaseValue(keyStrBase64, input.charAt(index));
            });
        },
        _0: function (length, resetValue, getNextValue) {
            var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
            for (i = 0; i < 3; i += 1) {
                dictionary[i] = i;
            }
            bits = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
            }
            switch ((next = bits)) {
                case 0:
                    bits = 0;
                    maxpower = Math.pow(2, 8);
                    power = 1;
                    while (power != maxpower) {
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 1:
                    bits = 0;
                    maxpower = Math.pow(2, 16);
                    power = 1;
                    while (power != maxpower) {
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 2:
                    return "";
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            while (true) {
                if (data.index > length) {
                    return "";
                }
                bits = 0;
                maxpower = Math.pow(2, numBits);
                power = 1;
                while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                        data.position = resetValue;
                        data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                switch ((c = bits)) {
                    case 0:
                        bits = 0;
                        maxpower = Math.pow(2, 8);
                        power = 1;
                        while (power != maxpower) {
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 1:
                        bits = 0;
                        maxpower = Math.pow(2, 16);
                        power = 1;
                        while (power != maxpower) {
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 2:
                        return result.join("");
                }
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
                if (dictionary[c]) {
                    entry = dictionary[c];
                }
                else {
                    if (c === dictSize) {
                        entry = w + w.charAt(0);
                    }
                    else {
                        return null;
                    }
                }
                result.push(entry);
                dictionary[dictSize++] = w + entry.charAt(0);
                enlargeIn--;
                w = entry;
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
            }
        },
    };
    return LZString;
})();
const ExtractR18 = function (html) {
    return String(LZString.decompressFromBase64(html));
};
const ExtractPage = function (html) {
    const IMG_BASE = "https://i.hamreus.com";
    var PageList = [];
    String.prototype.splic = function (f) {
        return LZString.decompressFromBase64(this).split(f);
    };
    const patt = /window\[".*?"\](\(.*{}\)\))/;
    const code = html.match(patt)[1];
    const result = JSON.parse(eval(code).match(/{(.*)}/)[0]);
    const e = result.sl.e;
    const m = result.sl.m;
    result.images.forEach((image) => {
        PageList.push(encodeURI(`${IMG_BASE}${image}?e=${e}&m=${m}`));
    });
    return PageList;
};
module.exports = { ExtractPage, ExtractR18 };

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manhuagui = exports.MHGRequestInterceptor = exports.ManhuaguiInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const ManhuaguiParser_1 = require("./ManhuaguiParser");
const RM_DOMAIN = "https://m.manhuagui.com";
const method = "GET";
exports.ManhuaguiInfo = {
    version: "0.1.0",
    name: "Manhuagui",
    icon: "icon.png",
    author: "TimeJunk",
    authorWebsite: "https://heynow.top",
    description: "Manhuagui client extension for Paperback",
    contentRating: paperback_extensions_common_1.ContentRating.EVERYONE,
    websiteBaseURL: "https://m.manhuagui.com",
    sourceTags: [],
};
class MHGRequestInterceptor {
    constructor(stateManager) {
        this.stateManager = stateManager;
    }
    async interceptResponse(response) {
        return response;
    }
    async interceptRequest(request) {
        request.headers = {
            referer: `${RM_DOMAIN}/`,
        };
        request.cookies = [
            createCookie({
                name: "isAdult",
                value: "1",
                domain: "m.manhuagui.com",
            }),
        ];
        return request;
    }
}
exports.MHGRequestInterceptor = MHGRequestInterceptor;
class Manhuagui extends paperback_extensions_common_1.Source {
    constructor() {
        super(...arguments);
        this.stateManager = createSourceStateManager({});
        this.requestManager = createRequestManager({
            requestsPerSecond: 2,
            requestTimeout: 20000,
            interceptor: new MHGRequestInterceptor(this.stateManager),
        });
    }
    async getMangaDetails(mangaId) {
        const request = createRequestObject({
            url: `${RM_DOMAIN}/comic/${mangaId}/`,
            method,
            cookies: [
                createCookie({
                    name: "isAdult",
                    value: "1",
                    domain: "m.manhuagui.com",
                }),
            ],
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        return (0, ManhuaguiParser_1.parseMangaDetails)($, mangaId);
    }
    async getChapters(mangaId) {
        const request = createRequestObject({
            url: `${RM_DOMAIN}/comic/${mangaId}/`,
            method,
            cookies: [
                createCookie({
                    name: "isAdult",
                    value: "1",
                    domain: "m.manhuagui.com",
                }),
            ],
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        return (0, ManhuaguiParser_1.parseChapters)($, mangaId);
    }
    async getChapterDetails(mangaId, chapterId) {
        const request = createRequestObject({
            url: `${RM_DOMAIN}/comic/${mangaId}/${chapterId}.html`,
            method,
            cookies: [
                createCookie({
                    name: "isAdult",
                    value: "1",
                    domain: "m.manhuagui.com",
                }),
            ],
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data, { xmlMode: false });
        return (0, ManhuaguiParser_1.parseChapterDetails)($, mangaId, chapterId);
    }
    async getSearchResults(searchQuery, metadata) {
        let returnTiles = [];
        // This function is also called when the user search in an other source. It should not throw if the server is unavailable.
        if (searchQuery.title) {
            let page = metadata?.page ?? 0;
            page += 1;
            const searchString = searchQuery.title.replace(/ /g, "");
            const searchURL = `${RM_DOMAIN}/s/${encodeURI(searchString)}.html`;
            const request = createRequestObject({
                url: searchURL,
                method: "GET",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-type": "application/x-www-form-urlencoded",
                    referer: searchURL,
                },
                data: `page=${page}&ajax=1&order=0&key=${searchString}`,
            });
            const response = await this.requestManager.schedule(request, 1);
            const $ = this.cheerio.load(response.data);
            returnTiles = (0, ManhuaguiParser_1.parseSearchResult)($);
        }
        return createPagedResults({
            results: returnTiles,
            metadata,
        });
    }
    async getHomePageSections(sectionCallback) {
        const section = createHomeSection({
            id: "update",
            title: "Hot Manga Updates",
            view_more: true,
        });
        const request = createRequestObject({
            url: `${RM_DOMAIN}/update/`,
            method,
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        (0, ManhuaguiParser_1.parseUpdateSections)($, section, sectionCallback);
        const sectionRank = createHomeSection({
            id: "rank",
            title: "Manga Ranking",
            view_more: true,
        });
        const requestRank = createRequestObject({
            url: `${RM_DOMAIN}/rank/`,
            method,
        });
        const responseRank = await this.requestManager.schedule(requestRank, 1);
        const $2 = this.cheerio.load(responseRank.data);
        (0, ManhuaguiParser_1.parseRankSections)($2, sectionRank, sectionCallback);
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        let page = metadata?.page ?? 0;
        page += 1;
        const request = createRequestObject({
            url: `${RM_DOMAIN}/${homepageSectionId}/`,
            param: `?page=${page}&ajax=1&order=1`,
            method: "GET",
        });
        const response = await this.requestManager.schedule(request, 1);
        const $ = this.cheerio.load(response.data);
        const tiles = (0, ManhuaguiParser_1.getMoreUpdate)($);
        metadata = { page: page };
        return createPagedResults({
            results: tiles,
            metadata: metadata,
        });
    }
}
exports.Manhuagui = Manhuagui;

},{"./ManhuaguiParser":50,"paperback-extensions-common":4}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSearchResult = exports.generateSearch = exports.getMoreUpdate = exports.parseRankSections = exports.parseUpdateSections = exports.parseTags = exports.parseChapterDetails = exports.parseChapters = exports.parseMangaDetails = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const ExtractPage_1 = require("./ExtractPage");
//const ExtractPage = require("./ExtractPage.js");
const RM_DOMAIN = "https://m.manhuagui.com";
const parseMangaDetails = ($, mangaId) => {
    let titles = [];
    let image = "";
    let status = paperback_extensions_common_1.MangaStatus.ONGOING;
    let author = "";
    let artist = "";
    let tagSections = [];
    let description = $("div #bookIntro").text();
    titles.push($(".main-bar.bar-bg1 h1").text().trim());
    image = "https:" + $("div .thumb img").attr("src");
    image = image.replace(/^(.+)(\/m).+(\..+)$/, `$1/${mangaId}$3`);
    switch ($("div .thumb i").text().trim()) {
        case "完结":
            status = paperback_extensions_common_1.MangaStatus.COMPLETED;
            break;
        default:
            status = paperback_extensions_common_1.MangaStatus.ONGOING;
    }
    author = $("dl")
        .filter(function (i, el) {
        return $(el).find("dt").text().trim() == "作者：";
    })
        .find("dd")
        .text()
        .trim();
    return createManga({
        id: mangaId,
        titles: titles,
        image,
        rating: 0,
        status: status,
        author: author,
        artist: artist,
        tags: tagSections,
        desc: description,
        hentai: false,
    });
};
exports.parseMangaDetails = parseMangaDetails;
const parseChapters = ($, mangaId) => {
    const chapters = [];
    const isR18 = $("div.warning-bar").length > 0;
    if (isR18) {
        const tempVal = (0, ExtractPage_1.ExtractR18)($("#__VIEWSTATE").attr("value") ?? "");
        $("div#chapterList").append(tempVal);
    }
    $("div #chapterList li").each(function (i, el) {
        const title = $(el).text();
        const rawChapterId = $(el).find("a").attr("href") ?? "";
        const chapterId = /comic\/\d+\/(\d+).html/.test(rawChapterId)
            ? rawChapterId.match(/comic\/\d+\/(\d+).html/)[1]
            : null;
        if (chapterId) {
            const chapterNumber = Number(/(\d+)/.test(title) ? title.match(/(\d+)/)[0] : 0);
            const date = new Date(Date.now());
            chapters.push(createChapter({
                id: chapterId,
                mangaId,
                name: title,
                langCode: paperback_extensions_common_1.LanguageCode.CHINEESE_HONGKONG,
                chapNum: chapterNumber,
                time: date,
            }));
        }
    });
    return chapters;
};
exports.parseChapters = parseChapters;
const parseChapterDetails = ($, mangaId, chapterId) => {
    const pages = (0, ExtractPage_1.ExtractPage)($.html());
    const chapterDetails = createChapterDetails({
        id: chapterId,
        mangaId: mangaId,
        pages: pages,
        longStrip: false,
    });
    return chapterDetails;
};
exports.parseChapterDetails = parseChapterDetails;
const parseTags = ($) => {
    const arrayTags = [];
    for (const tag of $("li", "ul.trending-thisweek.categories").toArray()) {
        const label = $("a", tag).text().trim();
        const id = $("a", tag).attr("href")?.replace("/category/", "") ?? "";
        if (!id || !label)
            continue;
        arrayTags.push({ id: id, label: label });
    }
    const tagSections = [
        createTagSection({
            id: "0",
            label: "genres",
            tags: arrayTags.map((x) => createTag(x)),
        }),
    ];
    return tagSections;
};
exports.parseTags = parseTags;
const parseUpdateSections = ($, section, sectionCallback) => {
    sectionCallback(section);
    //Hot Mango Update
    const hotMangaUpdate = [];
    $("#detail li").each(function (i, el) {
        const title = $(el).find("h3").text();
        const rawId = $(el).find("a").attr("href") ?? "";
        const id = /\w+\/(\d+)\//.test(rawId)
            ? rawId.match(/\w+\/(\d+)\//)[1]
            : "";
        const image = "https:" + $(el).find("img").attr("data-src");
        //const image: string = parseImage ? (RM_DOMAIN + parseImage) : "https://i.imgur.com/GYUxEX8.png";
        const subtitle = $(el)
            .find("dl")
            .filter(function (i, node) {
            return $(node).find("dt").text().trim() == "更新至：";
        })
            .find("dd")
            .text()
            .trim();
        //console.log(obj);
        if (id && title) {
            hotMangaUpdate.push(createMangaTile({
                id: id,
                image: image,
                title: createIconText({ text: title }),
                subtitleText: createIconText({ text: subtitle }),
            }));
        }
    });
    section.items = hotMangaUpdate;
    sectionCallback(section);
};
exports.parseUpdateSections = parseUpdateSections;
const parseRankSections = ($, section, sectionCallback) => {
    sectionCallback(section);
    //Hot Mango Update
    const hotMangaUpdate = [];
    $("#detail li").each(function (i, el) {
        const title = $(el).find("h3").text();
        const rawId = $(el).find("a").attr("href") ?? "";
        const id = /\w+\/(\d+)\//.test(rawId)
            ? rawId.match(/\w+\/(\d+)\//)[1]
            : "";
        const image = "https:" + $(el).find("img").attr("data-src");
        //const image: string = parseImage ? (RM_DOMAIN + parseImage) : "https://i.imgur.com/GYUxEX8.png";
        const subtitle = $(el)
            .find("dl")
            .filter(function (i, node) {
            return $(node).find("dt").text().trim() == "更新至：";
        })
            .find("dd")
            .text()
            .trim();
        //console.log(obj);
        if (id && title) {
            hotMangaUpdate.push(createMangaTile({
                id: id,
                image: image,
                title: createIconText({ text: title }),
                subtitleText: createIconText({ text: subtitle }),
            }));
        }
    });
    section.items = hotMangaUpdate;
    sectionCallback(section);
};
exports.parseRankSections = parseRankSections;
const getMoreUpdate = ($) => {
    let updateManga = [];
    $("li").each(function (i, el) {
        const title = $(el).find("h3").text();
        const rawId = $(el).find("a").attr("href") ?? "";
        const id = /\w+\/(\d+)\//.test(rawId)
            ? rawId.match(/\w+\/(\d+)\//)[1]
            : "";
        const image = "https:" + $(el).find("img").attr("data-src");
        //const image: string = parseImage ? (RM_DOMAIN + parseImage) : "https://i.imgur.com/GYUxEX8.png";
        const subtitle = $(el)
            .find("dl")
            .filter(function (i, node) {
            return $(node).find("dt").text().trim() == "更新至：";
        })
            .find("dd")
            .text()
            .trim();
        //console.log(obj);
        if (id && title) {
            updateManga.push(createMangaTile({
                id: id,
                image: image,
                title: createIconText({ text: title }),
                subtitleText: createIconText({ text: subtitle }),
            }));
        }
    });
    return updateManga;
};
exports.getMoreUpdate = getMoreUpdate;
const generateSearch = (query) => {
    let search = query.title ?? "";
    return encodeURI(search);
};
exports.generateSearch = generateSearch;
const parseSearchResult = ($) => {
    let ManagaList = [];
    $("li").each(function (i, el) {
        const title = $(el).find("h3").text();
        const rawId = $(el).find("a").attr("href") ?? "";
        const id = /\w+\/(\d+)\//.test(rawId)
            ? rawId.match(/\w+\/(\d+)\//)[1]
            : "";
        const image = "https:" + $(el).find("img").attr("data-src");
        //const image: string = parseImage ? (RM_DOMAIN + parseImage) : "https://i.imgur.com/GYUxEX8.png";
        const subtitle = $(el)
            .find("dl")
            .filter(function (i, node) {
            return $(node).find("dt").text().trim() == "更新至：";
        })
            .find("dd")
            .text()
            .trim();
        //console.log(obj);
        if (id && title) {
            ManagaList.push(createMangaTile({
                id: id,
                image: image,
                title: createIconText({ text: title }),
                subtitleText: createIconText({ text: subtitle }),
            }));
        }
    });
    return ManagaList;
};
exports.parseSearchResult = parseSearchResult;

},{"./ExtractPage":48,"paperback-extensions-common":4}]},{},[49])(49)
});
