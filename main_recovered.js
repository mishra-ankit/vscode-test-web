define("client/main", ["vs/workbench/workbench.web.main"], (e => (() => {
    var t = {
        825: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = void 0;
            const r = [];
            for (let e = 0; e < 256; ++e)
                r.push((e + 256).toString(16).substr(1));
            var n = function (e, t) {
                const n = t || 0,
                    o = r;
                return (o[e[n + 0]] + o[e[n + 1]] + o[e[n + 2]] + o[e[n + 3]] + "-" + o[e[n + 4]] + o[e[n + 5]] + "-" + o[e[n + 6]] + o[e[n + 7]] + "-" + o[e[n + 8]] + o[e[n + 9]] + "-" + o[e[n + 10]] + o[e[n + 11]] + o[e[n + 12]] + o[e[n + 13]] + o[e[n + 14]] + o[e[n + 15]]).toLowerCase()
            };
            t.default = n
        },
        593: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                Object.defineProperty(t, "v1", {
                    enumerable: !0,
                    get: function () {
                        return n.default
                    }
                }),
                Object.defineProperty(t, "v3", {
                    enumerable: !0,
                    get: function () {
                        return o.default
                    }
                }),
                Object.defineProperty(t, "v4", {
                    enumerable: !0,
                    get: function () {
                        return i.default
                    }
                }),
                Object.defineProperty(t, "v5", {
                    enumerable: !0,
                    get: function () {
                        return s.default
                    }
                });
            var n = a(r(922)),
                o = a(r(964)),
                i = a(r(711)),
                s = a(r(669));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        489: (e, t) => {
            "use strict";

            function r(e) {
                return 14 + (e + 64 >>> 9 << 4) + 1
            }

            function n(e, t) {
                const r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }

            function o(e, t, r, o, i, s) {
                return n((a = n(n(t, e), n(o, s))) << (c = i) | a >>> 32 - c, r);
                var a, c
            }

            function i(e, t, r, n, i, s, a) {
                return o(t & r | ~t & n, e, t, i, s, a)
            }

            function s(e, t, r, n, i, s, a) {
                return o(t & n | r & ~n, e, t, i, s, a)
            }

            function a(e, t, r, n, i, s, a) {
                return o(t ^ r ^ n, e, t, i, s, a)
            }

            function c(e, t, r, n, i, s, a) {
                return o(r ^ (t | ~n), e, t, i, s, a)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = void 0;
            var u = function (e) {
                if ("string" == typeof e) {
                    const t = unescape(encodeURIComponent(e));
                    e = new Uint8Array(t.length);
                    for (let r = 0; r < t.length; ++r)
                        e[r] = t.charCodeAt(r)
                }
                return function (e) {
                    const t = [],
                        r = 32 * e.length,
                        n = "0123456789abcdef";
                    for (let o = 0; o < r; o += 8) {
                        const r = e[o >> 5] >>> o % 32 & 255,
                            i = parseInt(n.charAt(r >>> 4 & 15) + n.charAt(15 & r), 16);
                        t.push(i)
                    }
                    return t
                }(function (e, t) {
                    e[t >> 5] |= 128 << t % 32,
                        e[r(t) - 1] = t;
                    let o = 1732584193,
                        u = -271733879,
                        l = -1732584194,
                        d = 271733878;
                    for (let t = 0; t < e.length; t += 16) {
                        const r = o,
                            p = u,
                            f = l,
                            h = d;
                        o = i(o, u, l, d, e[t], 7, -680876936),
                            d = i(d, o, u, l, e[t + 1], 12, -389564586),
                            l = i(l, d, o, u, e[t + 2], 17, 606105819),
                            u = i(u, l, d, o, e[t + 3], 22, -1044525330),
                            o = i(o, u, l, d, e[t + 4], 7, -176418897),
                            d = i(d, o, u, l, e[t + 5], 12, 1200080426),
                            l = i(l, d, o, u, e[t + 6], 17, -1473231341),
                            u = i(u, l, d, o, e[t + 7], 22, -45705983),
                            o = i(o, u, l, d, e[t + 8], 7, 1770035416),
                            d = i(d, o, u, l, e[t + 9], 12, -1958414417),
                            l = i(l, d, o, u, e[t + 10], 17, -42063),
                            u = i(u, l, d, o, e[t + 11], 22, -1990404162),
                            o = i(o, u, l, d, e[t + 12], 7, 1804603682),
                            d = i(d, o, u, l, e[t + 13], 12, -40341101),
                            l = i(l, d, o, u, e[t + 14], 17, -1502002290),
                            u = i(u, l, d, o, e[t + 15], 22, 1236535329),
                            o = s(o, u, l, d, e[t + 1], 5, -165796510),
                            d = s(d, o, u, l, e[t + 6], 9, -1069501632),
                            l = s(l, d, o, u, e[t + 11], 14, 643717713),
                            u = s(u, l, d, o, e[t], 20, -373897302),
                            o = s(o, u, l, d, e[t + 5], 5, -701558691),
                            d = s(d, o, u, l, e[t + 10], 9, 38016083),
                            l = s(l, d, o, u, e[t + 15], 14, -660478335),
                            u = s(u, l, d, o, e[t + 4], 20, -405537848),
                            o = s(o, u, l, d, e[t + 9], 5, 568446438),
                            d = s(d, o, u, l, e[t + 14], 9, -1019803690),
                            l = s(l, d, o, u, e[t + 3], 14, -187363961),
                            u = s(u, l, d, o, e[t + 8], 20, 1163531501),
                            o = s(o, u, l, d, e[t + 13], 5, -1444681467),
                            d = s(d, o, u, l, e[t + 2], 9, -51403784),
                            l = s(l, d, o, u, e[t + 7], 14, 1735328473),
                            u = s(u, l, d, o, e[t + 12], 20, -1926607734),
                            o = a(o, u, l, d, e[t + 5], 4, -378558),
                            d = a(d, o, u, l, e[t + 8], 11, -2022574463),
                            l = a(l, d, o, u, e[t + 11], 16, 1839030562),
                            u = a(u, l, d, o, e[t + 14], 23, -35309556),
                            o = a(o, u, l, d, e[t + 1], 4, -1530992060),
                            d = a(d, o, u, l, e[t + 4], 11, 1272893353),
                            l = a(l, d, o, u, e[t + 7], 16, -155497632),
                            u = a(u, l, d, o, e[t + 10], 23, -1094730640),
                            o = a(o, u, l, d, e[t + 13], 4, 681279174),
                            d = a(d, o, u, l, e[t], 11, -358537222),
                            l = a(l, d, o, u, e[t + 3], 16, -722521979),
                            u = a(u, l, d, o, e[t + 6], 23, 76029189),
                            o = a(o, u, l, d, e[t + 9], 4, -640364487),
                            d = a(d, o, u, l, e[t + 12], 11, -421815835),
                            l = a(l, d, o, u, e[t + 15], 16, 530742520),
                            u = a(u, l, d, o, e[t + 2], 23, -995338651),
                            o = c(o, u, l, d, e[t], 6, -198630844),
                            d = c(d, o, u, l, e[t + 7], 10, 1126891415),
                            l = c(l, d, o, u, e[t + 14], 15, -1416354905),
                            u = c(u, l, d, o, e[t + 5], 21, -57434055),
                            o = c(o, u, l, d, e[t + 12], 6, 1700485571),
                            d = c(d, o, u, l, e[t + 3], 10, -1894986606),
                            l = c(l, d, o, u, e[t + 10], 15, -1051523),
                            u = c(u, l, d, o, e[t + 1], 21, -2054922799),
                            o = c(o, u, l, d, e[t + 8], 6, 1873313359),
                            d = c(d, o, u, l, e[t + 15], 10, -30611744),
                            l = c(l, d, o, u, e[t + 6], 15, -1560198380),
                            u = c(u, l, d, o, e[t + 13], 21, 1309151649),
                            o = c(o, u, l, d, e[t + 4], 6, -145523070),
                            d = c(d, o, u, l, e[t + 11], 10, -1120210379),
                            l = c(l, d, o, u, e[t + 2], 15, 718787259),
                            u = c(u, l, d, o, e[t + 9], 21, -343485551),
                            o = n(o, r),
                            u = n(u, p),
                            l = n(l, f),
                            d = n(d, h)
                    }
                    return [o, u, l, d]
                }(function (e) {
                    if (0 === e.length)
                        return [];
                    const t = 8 * e.length,
                        n = new Uint32Array(r(t));
                    for (let r = 0; r < t; r += 8)
                        n[r >> 5] |= (255 & e[r / 8]) << r % 32;
                    return n
                }(e), 8 * e.length))
            };
            t.default = u
        },
        827: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = function () {
                    if (!r)
                        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return r(n)
                };
            const r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
                n = new Uint8Array(16)
        },
        558: (e, t) => {
            "use strict";

            function r(e, t, r, n) {
                switch (e) {
                    case 0:
                        return t & r ^ ~t & n;
                    case 1:
                        return t ^ r ^ n;
                    case 2:
                        return t & r ^ t & n ^ r & n;
                    case 3:
                        return t ^ r ^ n
                }
            }

            function n(e, t) {
                return e << t | e >>> 32 - t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = void 0;
            var o = function (e) {
                const t = [1518500249, 1859775393, 2400959708, 3395469782],
                    o = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                if ("string" == typeof e) {
                    const t = unescape(encodeURIComponent(e));
                    e = [];
                    for (let r = 0; r < t.length; ++r)
                        e.push(t.charCodeAt(r))
                }
                e.push(128);
                const i = e.length / 4 + 2,
                    s = Math.ceil(i / 16),
                    a = new Array(s);
                for (let t = 0; t < s; ++t) {
                    const r = new Uint32Array(16);
                    for (let n = 0; n < 16; ++n)
                        r[n] = e[64 * t + 4 * n] << 24 | e[64 * t + 4 * n + 1] << 16 | e[64 * t + 4 * n + 2] << 8 | e[64 * t + 4 * n + 3];
                    a[t] = r
                }
                a[s - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
                    a[s - 1][14] = Math.floor(a[s - 1][14]),
                    a[s - 1][15] = 8 * (e.length - 1) & 4294967295;
                for (let e = 0; e < s; ++e) {
                    const i = new Uint32Array(80);
                    for (let t = 0; t < 16; ++t)
                        i[t] = a[e][t];
                    for (let e = 16; e < 80; ++e)
                        i[e] = n(i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16], 1);
                    let s = o[0],
                        c = o[1],
                        u = o[2],
                        l = o[3],
                        d = o[4];
                    for (let e = 0; e < 80; ++e) {
                        const o = Math.floor(e / 20),
                            a = n(s, 5) + r(o, c, u, l) + d + t[o] + i[e] >>> 0;
                        d = l,
                            l = u,
                            u = n(c, 30) >>> 0,
                            c = s,
                            s = a
                    }
                    o[0] = o[0] + s >>> 0,
                        o[1] = o[1] + c >>> 0,
                        o[2] = o[2] + u >>> 0,
                        o[3] = o[3] + l >>> 0,
                        o[4] = o[4] + d >>> 0
                }
                return [o[0] >> 24 & 255, o[0] >> 16 & 255, o[0] >> 8 & 255, 255 & o[0], o[1] >> 24 & 255, o[1] >> 16 & 255, o[1] >> 8 & 255, 255 & o[1], o[2] >> 24 & 255, o[2] >> 16 & 255, o[2] >> 8 & 255, 255 & o[2], o[3] >> 24 & 255, o[3] >> 16 & 255, o[3] >> 8 & 255, 255 & o[3], o[4] >> 24 & 255, o[4] >> 16 & 255, o[4] >> 8 & 255, 255 & o[4]]
            };
            t.default = o
        },
        922: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = void 0;
            var n = i(r(827)),
                o = i(r(825));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let s, a, c = 0,
                u = 0;
            var l = function (e, t, r) {
                let i = t && r || 0;
                const l = t || [];
                let d = (e = e || {}).node || s,
                    p = void 0 !== e.clockseq ? e.clockseq : a;
                if (null == d || null == p) {
                    const t = e.random || (e.rng || n.default)();
                    null == d && (d = s = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
                        null == p && (p = a = 16383 & (t[6] << 8 | t[7]))
                }
                let f = void 0 !== e.msecs ? e.msecs : Date.now(),
                    h = void 0 !== e.nsecs ? e.nsecs : u + 1;
                const v = f - c + (h - u) / 1e4;
                if (v < 0 && void 0 === e.clockseq && (p = p + 1 & 16383),
                    (v < 0 || f > c) && void 0 === e.nsecs && (h = 0),
                    h >= 1e4)
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                c = f,
                    u = h,
                    a = p,
                    f += 122192928e5;
                const m = (1e4 * (268435455 & f) + h) % 4294967296;
                l[i++] = m >>> 24 & 255,
                    l[i++] = m >>> 16 & 255,
                    l[i++] = m >>> 8 & 255,
                    l[i++] = 255 & m;
                const y = f / 4294967296 * 1e4 & 268435455;
                l[i++] = y >>> 8 & 255,
                    l[i++] = 255 & y,
                    l[i++] = y >>> 24 & 15 | 16,
                    l[i++] = y >>> 16 & 255,
                    l[i++] = p >>> 8 | 128,
                    l[i++] = 255 & p;
                for (let e = 0; e < 6; ++e)
                    l[i + e] = d[e];
                return t || (0,
                    o.default)(l)
            };
            t.default = l
        },
        964: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = void 0;
            var n = i(r(137)),
                o = i(r(489));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = (0,
                n.default)("v3", 48, o.default);
            t.default = s
        },
        137: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = function (e, t, r) {
                    function n(e, n, i, s) {
                        const a = i && s || 0;
                        if ("string" == typeof e && (e = function (e) {
                            e = unescape(encodeURIComponent(e));
                            const t = [];
                            for (let r = 0; r < e.length; ++r)
                                t.push(e.charCodeAt(r));
                            return t
                        }(e)),
                            "string" == typeof n && (n = function (e) {
                                const t = [];
                                return e.replace(/[a-fA-F0-9]{2}/g, (function (e) {
                                    t.push(parseInt(e, 16))
                                })),
                                    t
                            }(n)),
                            !Array.isArray(e))
                            throw TypeError("value must be an array of bytes");
                        if (!Array.isArray(n) || 16 !== n.length)
                            throw TypeError("namespace must be uuid string or an Array of 16 byte values");
                        const c = r(n.concat(e));
                        if (c[6] = 15 & c[6] | t,
                            c[8] = 63 & c[8] | 128,
                            i)
                            for (let e = 0; e < 16; ++e)
                                i[a + e] = c[e];
                        return i || (0,
                            o.default)(c)
                    }
                    try {
                        n.name = e
                    } catch (e) { }
                    return n.DNS = i,
                        n.URL = s,
                        n
                },
                t.URL = t.DNS = void 0;
            var n, o = (n = r(825)) && n.__esModule ? n : {
                default: n
            };
            const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
            t.DNS = i;
            const s = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
            t.URL = s
        },
        711: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = void 0;
            var n = i(r(827)),
                o = i(r(825));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function (e, t, r) {
                "string" == typeof e && (t = "binary" === e ? new Uint8Array(16) : null,
                    e = null);
                const i = (e = e || {}).random || (e.rng || n.default)();
                if (i[6] = 15 & i[6] | 64,
                    i[8] = 63 & i[8] | 128,
                    t) {
                    const e = r || 0;
                    for (let r = 0; r < 16; ++r)
                        t[e + r] = i[r];
                    return t
                }
                return (0,
                    o.default)(i)
            };
            t.default = s
        },
        669: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = void 0;
            var n = i(r(137)),
                o = i(r(558));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = (0,
                n.default)("v5", 80, o.default);
            t.default = s
        },
        458: (e, t, r) => {
            "use strict";

            function n() {
                return "object" == typeof navigator && "userAgent" in navigator ? navigator.userAgent : "object" == typeof process && "version" in process ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>"
            }
            r.r(t),
                r.d(t, {
                    Octokit: () => D
                });
            var o = r(31);

            function i(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                var t, r;
                return !1 !== i(e) && (void 0 === (t = e.constructor) || !1 !== i(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf"))
            }

            function a(e, t) {
                const r = Object.assign({}, e);
                return Object.keys(t).forEach((n => {
                    s(t[n]) ? n in e ? r[n] = a(e[n], t[n]) : Object.assign(r, {
                        [n]: t[n]
                    }) : Object.assign(r, {
                        [n]: t[n]
                    })
                })),
                    r
            }

            function c(e) {
                for (const t in e)
                    void 0 === e[t] && delete e[t];
                return e
            }

            function u(e, t, r) {
                if ("string" == typeof t) {
                    let [e, n] = t.split(" ");
                    r = Object.assign(n ? {
                        method: e,
                        url: n
                    } : {
                        url: e
                    }, r)
                } else
                    r = Object.assign({}, t);
                var n;
                r.headers = (n = r.headers) ? Object.keys(n).reduce(((e, t) => (e[t.toLowerCase()] = n[t],
                    e)), {}) : {},
                    c(r),
                    c(r.headers);
                const o = a(e || {}, r);
                return e && e.mediaType.previews.length && (o.mediaType.previews = e.mediaType.previews.filter((e => !o.mediaType.previews.includes(e))).concat(o.mediaType.previews)),
                    o.mediaType.previews = o.mediaType.previews.map((e => e.replace(/-preview/, ""))),
                    o
            }
            const l = /\{[^}]+\}/g;

            function d(e) {
                return e.replace(/^\W+|\W+$/g, "").split(/,/)
            }

            function p(e, t) {
                return Object.keys(e).filter((e => !t.includes(e))).reduce(((t, r) => (t[r] = e[r],
                    t)), {})
            }

            function f(e) {
                return e.split(/(%[0-9A-Fa-f]{2})/g).map((function (e) {
                    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")),
                        e
                })).join("")
            }

            function h(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, (function (e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function v(e, t, r) {
                return t = "+" === e || "#" === e ? f(t) : h(t),
                    r ? h(r) + "=" + t : t
            }

            function m(e) {
                return null != e
            }

            function y(e) {
                return ";" === e || "&" === e || "?" === e
            }

            function g(e, t) {
                var r = ["+", "#", ".", "/", ";", "?", "&"];
                return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, (function (e, n, o) {
                    if (n) {
                        let e = "";
                        const o = [];
                        if (-1 !== r.indexOf(n.charAt(0)) && (e = n.charAt(0),
                            n = n.substr(1)),
                            n.split(/,/g).forEach((function (r) {
                                var n = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r);
                                o.push(function (e, t, r, n) {
                                    var o = e[r],
                                        i = [];
                                    if (m(o) && "" !== o)
                                        if ("string" == typeof o || "number" == typeof o || "boolean" == typeof o)
                                            o = o.toString(),
                                                n && "*" !== n && (o = o.substring(0, parseInt(n, 10))),
                                                i.push(v(t, o, y(t) ? r : ""));
                                        else if ("*" === n)
                                            Array.isArray(o) ? o.filter(m).forEach((function (e) {
                                                i.push(v(t, e, y(t) ? r : ""))
                                            })) : Object.keys(o).forEach((function (e) {
                                                m(o[e]) && i.push(v(t, o[e], e))
                                            }));
                                        else {
                                            const e = [];
                                            Array.isArray(o) ? o.filter(m).forEach((function (r) {
                                                e.push(v(t, r))
                                            })) : Object.keys(o).forEach((function (r) {
                                                m(o[r]) && (e.push(h(r)),
                                                    e.push(v(t, o[r].toString())))
                                            })),
                                                y(t) ? i.push(h(r) + "=" + e.join(",")) : 0 !== e.length && i.push(e.join(","))
                                        } else
                                        ";" === t ? m(o) && i.push(h(r)) : "" !== o || "&" !== t && "?" !== t ? "" === o && i.push("") : i.push(h(r) + "=");
                                    return i
                                }(t, e, n[1], n[2] || n[3]))
                            })),
                            e && "+" !== e) {
                            var i = ",";
                            return "?" === e ? i = "&" : "#" !== e && (i = e),
                                (0 !== o.length ? e : "") + o.join(i)
                        }
                        return o.join(",")
                    }
                    return f(o)
                }))
            }

            function b(e) {
                let t, r = e.method.toUpperCase(),
                    n = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"),
                    o = Object.assign({}, e.headers),
                    i = p(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]);
                const s = function (e) {
                    const t = e.match(l);
                    return t ? t.map(d).reduce(((e, t) => e.concat(t)), []) : []
                }(n);
                var a;
                n = (a = n, {
                    expand: g.bind(null, a)
                }).expand(i),
                    /^http/.test(n) || (n = e.baseUrl + n);
                const c = p(i, Object.keys(e).filter((e => s.includes(e))).concat("baseUrl"));
                if (!/application\/octet-stream/i.test(o.accept) && (e.mediaType.format && (o.accept = o.accept.split(/,/).map((t => t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`))).join(",")),
                    e.mediaType.previews.length)) {
                    const t = o.accept.match(/[\w-]+(?=-preview)/g) || [];
                    o.accept = t.concat(e.mediaType.previews).map((t => `application/vnd.github.${t}-preview${e.mediaType.format ? `.${e.mediaType.format}` : "+json"}`)).join(",")
                }
                return ["GET", "HEAD"].includes(r) ? n = function (e, t) {
                    const r = /\?/.test(e) ? "&" : "?",
                        n = Object.keys(t);
                    return 0 === n.length ? e : e + r + n.map((e => "q" === e ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${e}=${encodeURIComponent(t[e])}`)).join("&")
                }(n, c) : "data" in c ? t = c.data : Object.keys(c).length ? t = c : o["content-length"] = 0,
                    o["content-type"] || void 0 === t || (o["content-type"] = "application/json; charset=utf-8"),
                    ["PATCH", "PUT"].includes(r) && void 0 === t && (t = ""),
                    Object.assign({
                        method: r,
                        url: n,
                        headers: o
                    }, void 0 !== t ? {
                        body: t
                    } : null, e.request ? {
                        request: e.request
                    } : null)
            }

            function w(e, t, r) {
                return b(u(e, t, r))
            }
            const R = function e(t, r) {
                const n = u(t, r),
                    o = w.bind(null, n);
                return Object.assign(o, {
                    DEFAULTS: n,
                    defaults: e.bind(null, n),
                    merge: u.bind(null, n),
                    parse: b
                })
            }(null, {
                method: "GET",
                baseUrl: "https://api.github.com",
                headers: {
                    accept: "application/vnd.github.v3+json",
                    "user-agent": `octokit-endpoint.js/6.0.12 ${n()}`
                },
                mediaType: {
                    format: "",
                    previews: []
                }
            });
            var x = r(759),
                k = r.n(x),
                E = r(370);

            function P(e) {
                const t = e.request && e.request.log ? e.request.log : console;
                (s(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
                let r, n, o = {};
                return (e.request && e.request.fetch || k())(e.url, Object.assign({
                    method: e.method,
                    body: e.body,
                    headers: e.headers,
                    redirect: e.redirect
                }, e.request)).then((async i => {
                    n = i.url,
                        r = i.status;
                    for (const e of i.headers)
                        o[e[0]] = e[1];
                    if ("deprecation" in o) {
                        const r = o.link && o.link.match(/<([^>]+)>; rel="deprecation"/),
                            n = r && r.pop();
                        t.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${o.sunset}${n ? `. See ${n}` : ""}`)
                    }
                    if (204 !== r && 205 !== r) {
                        if ("HEAD" === e.method) {
                            if (r < 400)
                                return;
                            throw new E.RequestError(i.statusText, r, {
                                response: {
                                    url: n,
                                    status: r,
                                    headers: o,
                                    data: void 0
                                },
                                request: e
                            })
                        }
                        if (304 === r)
                            throw new E.RequestError("Not modified", r, {
                                response: {
                                    url: n,
                                    status: r,
                                    headers: o,
                                    data: await _(i)
                                },
                                request: e
                            });
                        if (r >= 400) {
                            const t = await _(i);
                            throw new E.RequestError(function (e) {
                                if ("string" == typeof e)
                                    return e;
                                if ("message" in e)
                                    return Array.isArray(e.errors) ? `${e.message}: ${e.errors.map(JSON.stringify).join(", ")}` : e.message;
                                return `Unknown error: ${JSON.stringify(e)}`
                            }(t), r, {
                                response: {
                                    url: n,
                                    status: r,
                                    headers: o,
                                    data: t
                                },
                                request: e
                            })
                        }
                        return _(i)
                    }
                })).then((e => ({
                    status: r,
                    url: n,
                    headers: o,
                    data: e
                }))).catch((t => {
                    if (t instanceof E.RequestError)
                        throw t;
                    throw new E.RequestError(t.message, 500, {
                        request: e
                    })
                }))
            }
            async function _(e) {
                const t = e.headers.get("content-type");
                return /application\/json/.test(t) ? e.json() : !t || /^text\/|charset=utf-8$/.test(t) ? e.text() : function (e) {
                    return e.arrayBuffer()
                }(e)
            }
            const S = function e(t, r) {
                const n = t.defaults(r);
                return Object.assign((function (t, r) {
                    const o = n.merge(t, r);
                    if (!o.request || !o.request.hook)
                        return P(n.parse(o));
                    const i = (e, t) => P(n.parse(n.merge(e, t)));
                    return Object.assign(i, {
                        endpoint: n,
                        defaults: e.bind(null, n)
                    }),
                        o.request.hook(i, o)
                }), {
                    endpoint: n,
                    defaults: e.bind(null, n)
                })
            }(R, {
                headers: {
                    "user-agent": `octokit-request.js/5.6.0 ${n()}`
                }
            });
            class O extends Error {
                constructor(e, t) {
                    super(t.data.errors[0].message),
                        Object.assign(this, t.data),
                        Object.assign(this, {
                            headers: t.headers
                        }),
                        this.name = "GraphqlError",
                        this.request = e,
                        Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
                }
            }
            const C = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"],
                A = ["query", "method", "url"],
                T = /\/api\/v3\/?$/;

            function U(e, t) {
                const r = e.defaults(t);
                return Object.assign(((e, t) => function (e, t, r) {
                    if (r) {
                        if ("string" == typeof t && "query" in r)
                            return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));
                        for (const e in r)
                            if (A.includes(e))
                                return Promise.reject(new Error(`[@octokit/graphql] "${e}" cannot be used as variable name`))
                    }
                    const n = "string" == typeof t ? Object.assign({
                        query: t
                    }, r) : t,
                        o = Object.keys(n).reduce(((e, t) => C.includes(t) ? (e[t] = n[t],
                            e) : (e.variables || (e.variables = {}),
                                e.variables[t] = n[t],
                                e)), {}),
                        i = n.baseUrl || e.endpoint.DEFAULTS.baseUrl;
                    return T.test(i) && (o.url = i.replace(T, "/api/graphql")),
                        e(o).then((e => {
                            if (e.data.errors) {
                                const t = {};
                                for (const r of Object.keys(e.headers))
                                    t[r] = e.headers[r];
                                throw new O(o, {
                                    headers: t,
                                    data: e.data
                                })
                            }
                            return e.data.data
                        }))
                }(r, e, t)), {
                    defaults: U.bind(null, r),
                    endpoint: S.endpoint
                })
            }
            U(S, {
                headers: {
                    "user-agent": `octokit-graphql.js/4.6.4 ${n()}`
                },
                method: "POST",
                url: "/graphql"
            });
            async function j(e) {
                const t = 3 === e.split(/\./).length ? "app" : /^v\d+\./.test(e) ? "installation" : "oauth";
                return {
                    type: "token",
                    token: e,
                    tokenType: t
                }
            }
            async function $(e, t, r, n) {
                const o = t.endpoint.merge(r, n);
                return o.headers.authorization = function (e) {
                    return 3 === e.split(/\./).length ? `bearer ${e}` : `token ${e}`
                }(e),
                    t(o)
            }
            const L = function (e) {
                if (!e)
                    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
                if ("string" != typeof e)
                    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
                return e = e.replace(/^(token|bearer) +/i, ""),
                    Object.assign(j.bind(null, e), {
                        hook: $.bind(null, e)
                    })
            },
                I = "3.5.1";
            class D {
                constructor(e = {}) {
                    const t = new o.Collection,
                        r = {
                            baseUrl: S.endpoint.DEFAULTS.baseUrl,
                            headers: {},
                            request: Object.assign({}, e.request, {
                                hook: t.bind(null, "request")
                            }),
                            mediaType: {
                                previews: [],
                                format: ""
                            }
                        };
                    var i;
                    if (r.headers["user-agent"] = [e.userAgent, `octokit-core.js/3.5.1 ${n()}`].filter(Boolean).join(" "),
                        e.baseUrl && (r.baseUrl = e.baseUrl),
                        e.previews && (r.mediaType.previews = e.previews),
                        e.timeZone && (r.headers["time-zone"] = e.timeZone),
                        this.request = S.defaults(r),
                        this.graphql = (i = this.request,
                            U(i, {
                                method: "POST",
                                url: "/graphql"
                            })).defaults(r),
                        this.log = Object.assign({
                            debug: () => { },
                            info: () => { },
                            warn: console.warn.bind(console),
                            error: console.error.bind(console)
                        }, e.log),
                        this.hook = t,
                        e.authStrategy) {
                        const {
                            authStrategy: r,
                            ...n
                        } = e, o = r(Object.assign({
                            request: this.request,
                            log: this.log,
                            octokit: this,
                            octokitOptions: n
                        }, e.auth));
                        t.wrap("request", o.hook),
                            this.auth = o
                    } else if (e.auth) {
                        const r = L(e.auth);
                        t.wrap("request", r.hook),
                            this.auth = r
                    } else
                        this.auth = async () => ({
                            type: "unauthenticated"
                        });
                    this.constructor.plugins.forEach((t => {
                        Object.assign(this, t(this, e))
                    }))
                }
                static defaults(e) {
                    return class extends (this) {
                        constructor(...t) {
                            const r = t[0] || {};
                            super("function" != typeof e ? Object.assign({}, e, r, r.userAgent && e.userAgent ? {
                                userAgent: `${r.userAgent} ${e.userAgent}`
                            } : null) : e(r))
                        }
                    }
                }
                static plugin(...e) {
                    var t;
                    const r = this.plugins;
                    return (t = class extends (this) { }).plugins = r.concat(e.filter((e => !r.includes(e)))),
                        t
                }
            }
            D.VERSION = I,
                D.plugins = []
        },
        370: (e, t, r) => {
            "use strict";
            r.r(t),
                r.d(t, {
                    RequestError: () => c
                });
            class n extends Error {
                constructor(e) {
                    super(e),
                        Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
                        this.name = "Deprecation"
                }
            }
            var o = r(132),
                i = r.n(o);
            const s = i()((e => console.warn(e))),
                a = i()((e => console.warn(e)));
            class c extends Error {
                constructor(e, t, r) {
                    let o;
                    super(e),
                        Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
                        this.name = "HttpError",
                        this.status = t,
                        "headers" in r && void 0 !== r.headers && (o = r.headers),
                        "response" in r && (this.response = r.response,
                            o = r.response.headers);
                    const i = Object.assign({}, r.request);
                    r.request.headers.authorization && (i.headers = Object.assign({}, r.request.headers, {
                        authorization: r.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
                    })),
                        i.url = i.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"),
                        this.request = i,
                        Object.defineProperty(this, "code", {
                            get: () => (s(new n("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),
                                t)
                        }),
                        Object.defineProperty(this, "headers", {
                            get: () => (a(new n("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),
                                o || {})
                        })
                }
            }
        },
        31: (e, t, r) => {
            var n = r(965),
                o = r(786),
                i = r(509),
                s = Function.bind,
                a = s.bind(s);

            function c(e, t, r) {
                var n = a(i, null).apply(null, r ? [t, r] : [t]);
                e.api = {
                    remove: n
                },
                    e.remove = n,
                    ["before", "error", "after", "wrap"].forEach((function (n) {
                        var i = r ? [t, n, r] : [t, n];
                        e[n] = e.api[n] = a(o, null).apply(null, i)
                    }))
            }

            function u() {
                var e = {
                    registry: {}
                },
                    t = n.bind(null, e);
                return c(t, e),
                    t
            }
            var l = !1;

            function d() {
                return l || (console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),
                    l = !0),
                    u()
            }
            d.Singular = function () {
                var e = {
                    registry: {}
                },
                    t = n.bind(null, e, "h");
                return c(t, e, "h"),
                    t
            }
                .bind(),
                d.Collection = u.bind(),
                e.exports = d,
                e.exports.Hook = d,
                e.exports.Singular = d.Singular,
                e.exports.Collection = d.Collection
        },
        786: e => {
            e.exports = function (e, t, r, n) {
                var o = n;
                e.registry[r] || (e.registry[r] = []);
                "before" === t && (n = function (e, t) {
                    return Promise.resolve().then(o.bind(null, t)).then(e.bind(null, t))
                });
                "after" === t && (n = function (e, t) {
                    var r;
                    return Promise.resolve().then(e.bind(null, t)).then((function (e) {
                        return o(r = e, t)
                    })).then((function () {
                        return r
                    }))
                });
                "error" === t && (n = function (e, t) {
                    return Promise.resolve().then(e.bind(null, t)).catch((function (e) {
                        return o(e, t)
                    }))
                });
                e.registry[r].push({
                    hook: n,
                    orig: o
                })
            }
        },
        965: e => {
            e.exports = function e(t, r, n, o) {
                if ("function" != typeof n)
                    throw new Error("method for before hook must be a function");
                o || (o = {});
                if (Array.isArray(r))
                    return r.reverse().reduce((function (r, n) {
                        return e.bind(null, t, n, r, o)
                    }), n)();
                return Promise.resolve().then((function () {
                    return t.registry[r] ? t.registry[r].reduce((function (e, t) {
                        return t.hook.bind(null, e, o)
                    }), n)() : n(o)
                }))
            }
        },
        509: e => {
            e.exports = function (e, t, r) {
                if (!e.registry[t])
                    return;
                var n = e.registry[t].map((function (e) {
                    return e.orig
                })).indexOf(r);
                if (-1 === n)
                    return;
                e.registry[t].splice(n, 1)
            }
        },
        578: function (e, t, r) {
            "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== r.g && r.g,
                e.exports = function () {
                    "use strict";
                    var e, t = "3.7.1",
                        r = t,
                        n = "function" == typeof atob,
                        o = "function" == typeof btoa,
                        i = "function" == typeof Buffer,
                        s = "function" == typeof TextDecoder ? new TextDecoder : void 0,
                        a = "function" == typeof TextEncoder ? new TextEncoder : void 0,
                        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        u = Array.prototype.slice.call(c),
                        l = (e = {},
                            u.forEach((function (t, r) {
                                return e[t] = r
                            })),
                            e),
                        d = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
                        p = String.fromCharCode.bind(String),
                        f = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (e, t) {
                            return void 0 === t && (t = function (e) {
                                return e
                            }),
                                new Uint8Array(Array.prototype.slice.call(e, 0).map(t))
                        },
                        h = function (e) {
                            return e.replace(/[+\/]/g, (function (e) {
                                return "+" == e ? "-" : "_"
                            })).replace(/=+$/m, "")
                        },
                        v = function (e) {
                            return e.replace(/[^A-Za-z0-9\+\/]/g, "")
                        },
                        m = function (e) {
                            for (var t, r, n, o, i = "", s = e.length % 3, a = 0; a < e.length;) {
                                if ((r = e.charCodeAt(a++)) > 255 || (n = e.charCodeAt(a++)) > 255 || (o = e.charCodeAt(a++)) > 255)
                                    throw new TypeError("invalid character found");
                                i += u[(t = r << 16 | n << 8 | o) >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t]
                            }
                            return s ? i.slice(0, s - 3) + "===".substring(s) : i
                        },
                        y = o ? function (e) {
                            return btoa(e)
                        } :
                            i ? function (e) {
                                return Buffer.from(e, "binary").toString("base64")
                            } :
                                m,
                        g = i ? function (e) {
                            return Buffer.from(e).toString("base64")
                        } :
                            function (e) {
                                for (var t = 4096, r = [], n = 0, o = e.length; n < o; n += t)
                                    r.push(p.apply(null, e.subarray(n, n + t)));
                                return y(r.join(""))
                            },
                        b = function (e, t) {
                            return void 0 === t && (t = !1),
                                t ? h(g(e)) : g(e)
                        },
                        w = function (e) {
                            if (e.length < 2)
                                return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? p(192 | t >>> 6) + p(128 | 63 & t) : p(224 | t >>> 12 & 15) + p(128 | t >>> 6 & 63) + p(128 | 63 & t);
                            var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                            return p(240 | t >>> 18 & 7) + p(128 | t >>> 12 & 63) + p(128 | t >>> 6 & 63) + p(128 | 63 & t)
                        },
                        R = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        x = function (e) {
                            return e.replace(R, w)
                        },
                        k = i ? function (e) {
                            return Buffer.from(e, "utf8").toString("base64")
                        } :
                            a ? function (e) {
                                return g(a.encode(e))
                            } :
                                function (e) {
                                    return y(x(e))
                                },
                        E = function (e, t) {
                            return void 0 === t && (t = !1),
                                t ? h(k(e)) : k(e)
                        },
                        P = function (e) {
                            return E(e, !0)
                        },
                        _ = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                        S = function (e) {
                            switch (e.length) {
                                case 4:
                                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                                    return p(55296 + (t >>> 10)) + p(56320 + (1023 & t));
                                case 3:
                                    return p((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                                default:
                                    return p((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                            }
                        },
                        O = function (e) {
                            return e.replace(_, S)
                        },
                        C = function (e) {
                            if (e = e.replace(/\s+/g, ""),
                                !d.test(e))
                                throw new TypeError("malformed base64.");
                            e += "==".slice(2 - (3 & e.length));
                            for (var t, r, n, o = "", i = 0; i < e.length;)
                                t = l[e.charAt(i++)] << 18 | l[e.charAt(i++)] << 12 | (r = l[e.charAt(i++)]) << 6 | (n = l[e.charAt(i++)]),
                                    o += 64 === r ? p(t >> 16 & 255) : 64 === n ? p(t >> 16 & 255, t >> 8 & 255) : p(t >> 16 & 255, t >> 8 & 255, 255 & t);
                            return o
                        },
                        A = n ? function (e) {
                            return atob(v(e))
                        } :
                            i ? function (e) {
                                return Buffer.from(e, "base64").toString("binary")
                            } :
                                C,
                        T = i ? function (e) {
                            return f(Buffer.from(e, "base64"))
                        } :
                            function (e) {
                                return f(A(e), (function (e) {
                                    return e.charCodeAt(0)
                                }))
                            },
                        U = function (e) {
                            return T($(e))
                        },
                        j = i ? function (e) {
                            return Buffer.from(e, "base64").toString("utf8")
                        } :
                            s ? function (e) {
                                return s.decode(T(e))
                            } :
                                function (e) {
                                    return O(A(e))
                                },
                        $ = function (e) {
                            return v(e.replace(/[-_]/g, (function (e) {
                                return "-" == e ? "+" : "/"
                            })))
                        },
                        L = function (e) {
                            return j($(e))
                        },
                        I = function (e) {
                            return {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        },
                        D = function () {
                            var e = function (e, t) {
                                return Object.defineProperty(String.prototype, e, I(t))
                            };
                            e("fromBase64", (function () {
                                return L(this)
                            })),
                                e("toBase64", (function (e) {
                                    return E(this, e)
                                })),
                                e("toBase64URI", (function () {
                                    return E(this, !0)
                                })),
                                e("toBase64URL", (function () {
                                    return E(this, !0)
                                })),
                                e("toUint8Array", (function () {
                                    return U(this)
                                }))
                        },
                        q = function () {
                            var e = function (e, t) {
                                return Object.defineProperty(Uint8Array.prototype, e, I(t))
                            };
                            e("toBase64", (function (e) {
                                return b(this, e)
                            })),
                                e("toBase64URI", (function () {
                                    return b(this, !0)
                                })),
                                e("toBase64URL", (function () {
                                    return b(this, !0)
                                }))
                        },
                        M = function () {
                            D(),
                                q()
                        },
                        H = {
                            version: t,
                            VERSION: r,
                            atob: A,
                            atobPolyfill: C,
                            btoa: y,
                            btoaPolyfill: m,
                            fromBase64: L,
                            toBase64: E,
                            encode: E,
                            encodeURI: P,
                            encodeURL: P,
                            utob: x,
                            btou: O,
                            decode: L,
                            isValid: function (e) {
                                if ("string" != typeof e)
                                    return !1;
                                var t = e.replace(/\s+/g, "").replace(/=+$/, "");
                                return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t)
                            },
                            fromUint8Array: b,
                            toUint8Array: U,
                            extendString: D,
                            extendUint8Array: q,
                            extendBuiltins: M,
                            Base64: {}
                        };
                    return Object.keys(H).forEach((function (e) {
                        return H.Base64[e] = H[e]
                    })),
                        H
                }()
        },
        759: (e, t) => {
            "use strict";
            var r = function () {
                if ("undefined" != typeof self)
                    return self;
                if ("undefined" != typeof window)
                    return window;
                if (void 0 !== r)
                    return r;
                throw new Error("unable to locate global object")
            }();
            e.exports = t = r.fetch,
                r.fetch && (t.default = r.fetch.bind(r)),
                t.Headers = r.Headers,
                t.Request = r.Request,
                t.Response = r.Response
        },
        132: (e, t, r) => {
            var n = r(477);

            function o(e) {
                var t = function () {
                    return t.called ? t.value : (t.called = !0,
                        t.value = e.apply(this, arguments))
                };
                return t.called = !1,
                    t
            }

            function i(e) {
                var t = function () {
                    if (t.called)
                        throw new Error(t.onceError);
                    return t.called = !0,
                        t.value = e.apply(this, arguments)
                },
                    r = e.name || "Function wrapped with `once`";
                return t.onceError = r + " shouldn't be called more than once",
                    t.called = !1,
                    t
            }
            e.exports = n(o),
                e.exports.strict = n(i),
                o.proto = o((function () {
                    Object.defineProperty(Function.prototype, "once", {
                        value: function () {
                            return o(this)
                        },
                        configurable: !0
                    }),
                        Object.defineProperty(Function.prototype, "onceStrict", {
                            value: function () {
                                return i(this)
                            },
                            configurable: !0
                        })
                }))
        },
        467: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            },
                s = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            n = [r, t, r(777), r(994), r(41), r(55)],
                void 0 === (o = function (e, t, r, n, o, a) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        a = s(a);
                    const c = new Set(["ms-vscode"]),
                        u = new Set(a.default),
                        l = new Set(["vscode-quality"]),
                        d = new Set(["localhost", "127.0.0.1", "[::1]"]),
                        p = /^\/\+([^/]+)(?:\/(.+))?$/,
                        f = /^([a-z0-9][a-z0-9\-]*)\.([a-z0-9][a-z0-9\-]*)(?:@([0-9]+\.[0-9]+\.[0-9]+))?$/;
                    class h {
                        constructor() {
                            this.name = "anything"
                        }
                        route({
                            url: e,
                            quality: t,
                            commit: n,
                            executeCommand: o
                        }) {
                            var s;
                            return i(this, void 0, void 0, (function* () {
                                const i = p.exec(e.pathname);
                                if (!i)
                                    return;
                                const a = i[1],
                                    d = i[2],
                                    f = yield this.getExtensionUrl(a);
                                if (!f)
                                    return;
                                const v = yield this.readPackageJson(f), m = null === (s = v.contributes) || void 0 === s ? void 0 : s.webOpener;
                                if (!c.has(v.publisher))
                                    return;
                                const y = `${v.publisher}.${v.name}`;
                                let g = {
                                    workspaceUri: r.URI.from({
                                        scheme: "tmp",
                                        path: "/default.code-workspace"
                                    })
                                };
                                if ((null == m ? void 0 : m.scheme) && d) {
                                    const t = d.indexOf("/"),
                                        n = new URLSearchParams(document.location.search);
                                    for (const e of l)
                                        n.delete(e);
                                    g = {
                                        folderUri: r.URI.from({
                                            scheme: m.scheme,
                                            authority: -1 === t ? d : d.slice(0, t),
                                            fragment: e.hash.slice(1),
                                            query: n.toString(),
                                            path: -1 === t ? "/" : d.slice(t)
                                        })
                                    }
                                }
                                const b = {
                                    workspace: g,
                                    workbenchOptions: {
                                        configurationDefaults: {
                                            "workbench.startupEditor": "none"
                                        },
                                        additionalBuiltinExtensions: [r.URI.parse(f)],
                                        enabledExtensions: [y]
                                    },
                                    onDidCreateWorkbench: {
                                        runCommands: this.processRunCommands(null == m ? void 0 : m.runCommands)
                                    }
                                };
                                if (u.has(v.publisher) && (null == m ? void 0 : m.import)) {
                                    const e = yield import(`${f}/${m.import}`);
                                    yield e.default(b, {
                                        version: {
                                            quality: t,
                                            commit: n
                                        },
                                        executeCommand: o
                                    })
                                }
                                return h.lastRouted = {
                                    extensionPathPart: a,
                                    scheme: null == m ? void 0 : m.scheme
                                },
                                    b
                            }))
                        }
                        readPackageJson(e) {
                            return i(this, void 0, void 0, (function* () {
                                const t = yield fetch(`${e}/package.json`);
                                if (!t.ok)
                                    throw new Error(`Unexpected ${t.status} from ${e}/package.json`);
                                return yield t.json()
                            }))
                        }
                        processRunCommands(e) {
                            var t;
                            return null !== (t = null == e ? void 0 : e.map((e => Object.assign(Object.assign({}, e), {
                                args: e.args.map((e => "$url" === e ? document.location.href : e))
                            })))) && void 0 !== t ? t : []
                        }
                        getExtensionUrl(e) {
                            return i(this, void 0, void 0, (function* () {
                                const t = f.exec(e);
                                if (t) {
                                    const [, r, n, o = yield this.getLatestExtensionVersion(e)] = t;
                                    return `https://${r}.vscode-unpkg.net/${r}/${n}/${o}/extension`
                                }
                                try {
                                    const t = atob(e),
                                        r = new URL(t);
                                    if (d.has(r.hostname))
                                        return r.toString()
                                } catch (e) { }
                            }))
                        }
                        getLatestExtensionVersion(e) {
                            var t, r;
                            return i(this, void 0, void 0, (function* () {
                                const n = yield fetch("https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        accept: "application/json;api-version=3.0-preview.1",
                                        "x-market-client-id": "vscode-dev"
                                    },
                                    body: JSON.stringify({
                                        filters: [{
                                            criteria: [{
                                                filterType: 7,
                                                value: e
                                            }]
                                        }],
                                        pageNumber: 1,
                                        flags: 1
                                    })
                                });
                                if (!n.ok)
                                    throw new Error(`Unexpected ${n.status} from marketplace search: ${yield n.text()}`);
                                const o = yield n.json();
                                return null === (r = null === (t = o.results[0].extensions[0]) || void 0 === t ? void 0 : t.versions[0]) || void 0 === r ? void 0 : r.version
                            }))
                        }
                    }
                    (0,
                        n.registerRouter)(new h),
                        (0,
                            o.registerWorkspaceResolver)(new class {
                                resolveWorkspace(e) {
                                    if (!h.lastRouted || e.scheme !== h.lastRouted.scheme)
                                        return;
                                    const t = new URL(document.location.href);
                                    t.search = e.query ? `?${e.query}` : "",
                                        t.hash = e.fragment ? `#${e.fragment}` : "",
                                        t.pathname = `/+${h.lastRouted.extensionPathPart}/${e.authority}${e.path}`;
                                    const r = new URLSearchParams(document.location.search);
                                    for (const e of l)
                                        r.has(e) && t.searchParams.set(e, r.get(e));
                                    return t.toString()
                                }
                            })
                }
                    .apply(t, n)) || (e.exports = o)
        },
        299: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(777), r(793), r(994), r(195), r(510), r(57)],
                void 0 === (o = function (e, t, r, n, o, s, a, c) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    const u = /^\/(?<service>azurerepos)(?<indexed>\+idx=?(?<idx>latest|[0-9a-fA-F]{40})?)?(?:\/defaultcollection)?\/(?<organization>[^/]+)(?:\/(?<project>[^_/][^/]*))?(?:\/_git)?\/(?<repo>[^/]+)(?:\/commit\/(?<commit>[0-9a-f]{40})|\/pullrequest\/(?<pull>\d+))?/i;
                    (0,
                        o.registerRouter)(new class {
                            constructor() {
                                this.name = "azurerepos"
                            }
                            route({
                                url: e
                            }) {
                                var t, n, o, a, l, d;
                                return i(this, void 0, void 0, (function* () {
                                    const i = u.exec(e.pathname);
                                    if (void 0 === (null == i ? void 0 : i.groups))
                                        return;
                                    const {
                                        indexed: p,
                                        idx: f,
                                        organization: h,
                                        project: v,
                                        repo: m,
                                        commit: y,
                                        pull: g
                                    } = i.groups, b = /^GC(?<commit>[0-9a-f]{40})/i.exec(null !== (t = e.searchParams.get("version")) && void 0 !== t ? t : ""), w = /^GB(?<branchName>.+)/i.exec(null !== (n = e.searchParams.get("version")) && void 0 !== n ? n : ""), R = /^GT(?<tagName>.+)/i.exec(null !== (o = e.searchParams.get("version")) && void 0 !== o ? o : "");
                                    let x, k, E = {};
                                    if (w && w.groups) {
                                        const {
                                            branchName: e
                                        } = w.groups;
                                        x = {
                                            v: 1,
                                            ref: {
                                                type: c.RepositoryRefType.Branch,
                                                id: e
                                            }
                                        }
                                    } else if (R && R.groups) {
                                        const {
                                            tagName: e
                                        } = R.groups;
                                        x = {
                                            v: 1,
                                            ref: {
                                                type: c.RepositoryRefType.Tag,
                                                id: e
                                            }
                                        }
                                    } else if (y)
                                        x = {
                                            v: 1,
                                            ref: {
                                                type: c.RepositoryRefType.Commit,
                                                id: y
                                            }
                                        };
                                    else if (b && b.groups) {
                                        const {
                                            commit: e
                                        } = b.groups;
                                        x = {
                                            v: 1,
                                            ref: {
                                                type: c.RepositoryRefType.Commit,
                                                id: e
                                            }
                                        }
                                    } else
                                        g ? x = {
                                            v: 1,
                                            ref: {
                                                type: c.RepositoryRefType.PullRequest,
                                                id: g
                                            }
                                        } : E = {
                                            "workbench.startupEditor": "readme"
                                        };
                                    p && (x || (x = {
                                        v: 1
                                    }),
                                        x.idx = f || "latest");
                                    const P = e.searchParams.get("path");
                                    if (P) {
                                        let t;
                                        if (e.searchParams.get("line")) {
                                            const r = Number(e.searchParams.get("line"));
                                            t = {
                                                start: {
                                                    line: r,
                                                    column: Number(null !== (a = e.searchParams.get("lineStartColumn")) && void 0 !== a ? a : 0)
                                                },
                                                end: {
                                                    line: Number(null !== (l = e.searchParams.get("lineEnd")) && void 0 !== l ? l : r + 1),
                                                    column: Number(null !== (d = e.searchParams.get("lineEndColumn")) && void 0 !== d ? d : 0)
                                                }
                                            }
                                        }
                                        k = {
                                            force: !0,
                                            editors: [{
                                                uri: {
                                                    scheme: "vscode-vfs",
                                                    authority: (0,
                                                        c.encodeAuthority)("azurerepos", x),
                                                    path: `/${h}/${null != v ? v : m}/${m}${P.startsWith("/") ? P : `/${P}`}`
                                                },
                                                selection: t,
                                                openOnlyIfExists: !0
                                            }]
                                        }
                                    }
                                    return {
                                        workspace: {
                                            folderUri: r.URI.from({
                                                scheme: "vscode-vfs",
                                                authority: (0,
                                                    c.encodeAuthority)("azurerepos", x),
                                                path: `/${h}/${null != v ? v : m}/${m}`
                                            })
                                        },
                                        workbenchOptions: {
                                            configurationDefaults: Object.assign({
                                                "remoteHub.richNavigation.enabled": !0,
                                                "workbench.startupEditor": "none"
                                            }, E),
                                            defaultLayout: k,
                                            additionalBuiltinExtensions: [s.BuiltinExtensions.AzureRepos]
                                        }
                                    }
                                }))
                            }
                        }),
                        (0,
                            c.registerRemoteHubWorkspaceResolver)("azurerepos", new class {
                                resolveRemoteHubWorkspace(e, t) {
                                    var r, n;
                                    const o = new URL(document.location.href),
                                        i = u.exec(`/azurerepos${e.path}`);
                                    if (void 0 === (null == i ? void 0 : i.groups))
                                        throw new Error(`RemoteHub uri not supported: ${e.toString()}`);
                                    const {
                                        organization: s,
                                        project: a,
                                        repo: l
                                    } = i.groups, d = new URLSearchParams(e.query);
                                    let p = null !== (r = d.get("vscode-experience")) && void 0 !== r ? r : "azurerepos";
                                    void 0 !== t && ("latest" === t.idx ? p += "+idx" : (0,
                                        c.isSha)(t.idx) && (p += `+idx=${t.idx}`));
                                    let f = `/${p}/${s}/${a}/${l}`;
                                    switch (null === (n = null == t ? void 0 : t.ref) || void 0 === n ? void 0 : n.type) {
                                        case c.RepositoryRefType.Commit:
                                            d.set("version", `GC${t.ref.id}`);
                                            break;
                                        case c.RepositoryRefType.Branch:
                                            d.set("version", `GB${t.ref.id}`);
                                            break;
                                        case c.RepositoryRefType.Tag:
                                            d.set("version", `GT${t.ref.id}`);
                                            break;
                                        case c.RepositoryRefType.PullRequest:
                                            f = `${f}/pullrequest/${t.ref.id}`
                                    }
                                    return o.pathname = f,
                                        o.search = d.toString(),
                                        o.toString()
                                }
                            }),
                        (0,
                            n.registerRedirect)(new a.DomainRedirect("dev.azure.com", "azurerepos")),
                        (0,
                            n.registerRedirect)(new class {
                                constructor(e, t) {
                                    this.service = t,
                                        this.regexp = new RegExp(`^/(?:https?://)?(?<organization>[^.]+)${e.replace(/\./g, "\\.")}(?:/defaultcollection)?/(?<rest>.*)`, "i")
                                }
                                redirect(e) {
                                    const t = this.regexp.exec(e.pathname);
                                    if (!(null == t ? void 0 : t.groups) || !t.groups.organization)
                                        return;
                                    const r = new URL(e.toString());
                                    return r.pathname = `/${this.service}/${t.groups.organization}/${t.groups.rest}`,
                                        r
                                }
                            }
                                (".visualstudio.com", "azurerepos")),
                        (0,
                            n.registerRedirect)(new class {
                                redirect(e) {
                                    const t = u.exec(e.pathname);
                                    if (void 0 === (null == t ? void 0 : t.groups))
                                        return;
                                    const {
                                        organization: r,
                                        project: n,
                                        repo: o,
                                        commit: i,
                                        pull: s
                                    } = t.groups, a = new URL(e.toString());
                                    return a.pathname = `/azurerepos/${r}/${null != n ? n : o}/${o}${i ? `/commit/${i}` : s ? `/pullrequest/${s}` : ""}`,
                                        a
                                }
                            })
                }
                    .apply(t, n)) || (e.exports = o)
        },
        628: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(458), r(777), r(57), r(994), r(793), r(510), r(195), r(370), r(131)],
                void 0 === (o = function (e, t, r, n, o, s, a, c, u, l, d) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    class p {
                        constructor() {
                            this.additionalBuiltinExtensions = [u.BuiltinExtensions.GitHubPullRequest],
                                this.name = "github"
                        }
                        route({
                            url: e,
                            credentialsProvider: t,
                            quality: s
                        }) {
                            return i(this, void 0, void 0, (function* () {
                                const a = p.RX.exec(e.pathname);
                                if (void 0 === (null == a ? void 0 : a.groups))
                                    return;
                                let c, u, {
                                    service: h,
                                    indexed: v,
                                    idx: m,
                                    owner: y,
                                    repo: g,
                                    blob: b,
                                    commit: w,
                                    tree: R,
                                    pull: x
                                } = a.groups,
                                    k = {};
                                const E = yield function (e, t, n, o, s, a) {
                                    return i(this, void 0, void 0, (function* () {
                                        try {
                                            const e = new r.Octokit;
                                            return yield f(e, o, s, a)
                                        } catch (e) {
                                            if (console.error(e),
                                                !a || e instanceof l.RequestError && 404 !== e.status)
                                                return {
                                                    owner: o,
                                                    repo: s
                                                }
                                        }
                                        const i = new d.GitHubAuthentication(e, n),
                                            c = yield i.login(t);
                                        try {
                                            if (void 0 !== c) {
                                                const e = new r.Octokit({
                                                    auth: `token ${c}`
                                                });
                                                return yield f(e, o, s, a)
                                            }
                                        } catch (e) {
                                            console.error(e)
                                        }
                                        return {
                                            owner: o,
                                            repo: s
                                        }
                                    }))
                                }(t, e, s, y, g, null != R ? R : b);
                                if (void 0 === E)
                                    return;
                                let P, _;
                                if (({
                                    owner: y,
                                    repo: g,
                                    ref: _,
                                    path: P
                                } = E),
                                    R || b) {
                                    if (!_ && !P) {
                                        const [e, ...t] = (R || b).split("/");
                                        _ = (0,
                                            o.isSha)(e) ? {
                                            type: o.RepositoryRefType.Commit,
                                            id: e
                                        } : {
                                            type: o.RepositoryRefType.Tree,
                                            id: e
                                        },
                                            P = t.join("/");
                                        try {
                                            P = decodeURIComponent(P)
                                        } catch (e) {
                                            console.log(`Malformed URI component: ${P}`)
                                        }
                                    }
                                    if (u = {
                                        v: 1,
                                        ref: _
                                    },
                                        P && b) {
                                        let t;
                                        if (e.hash) {
                                            const r = /L(?<start>\d+)(?:-L(?<end>\d+))?/.exec(e.hash);
                                            if (null == r ? void 0 : r.groups) {
                                                const {
                                                    start: e,
                                                    end: n
                                                } = r.groups;
                                                void 0 !== e && (t = {
                                                    start: {
                                                        line: Number(e),
                                                        column: 0
                                                    },
                                                    end: {
                                                        line: Number(null != n ? n : e) + 1,
                                                        column: 0
                                                    }
                                                })
                                            }
                                        }
                                        c = {
                                            force: !0,
                                            editors: [{
                                                uri: {
                                                    scheme: "vscode-vfs",
                                                    authority: (0,
                                                        o.encodeAuthority)("github", u),
                                                    path: `/${y}/${g}${(null == P ? void 0 : P.startsWith("/")) ? P : P ? `/${P}` : ""}`
                                                },
                                                selection: t,
                                                openOnlyIfExists: !0
                                            }]
                                        }
                                    }
                                } else
                                    w ? u = {
                                        v: 1,
                                        ref: {
                                            type: o.RepositoryRefType.Commit,
                                            id: w
                                        }
                                    } : x ? u = {
                                        v: 1,
                                        ref: {
                                            type: o.RepositoryRefType.PullRequest,
                                            id: x
                                        }
                                    } : _ ? u = {
                                        v: 1,
                                        ref: _
                                    } : k = {
                                        "workbench.startupEditor": "readme"
                                    };
                                v && (u || (u = {
                                    v: 1
                                }),
                                    u.idx = m || "latest");
                                let S = {
                                    configurationDefaults: Object.assign(Object.assign({}, k), {
                                        "remoteHub.richNavigation.enabled": !0,
                                        "workbench.startupEditor": "none"
                                    }),
                                    additionalBuiltinExtensions: this.additionalBuiltinExtensions,
                                    _tarballProxyEndpoints: {
                                        "github.com": "https://vscode.dev/indexes/github2/{owner}/{repo}/{sha}"
                                    },
                                    defaultLayout: c
                                },
                                    O = {
                                        runCommands: [{
                                            command: "_codespaces.setActiveRepository",
                                            args: [{
                                                owner: y,
                                                name: g
                                            }]
                                        }]
                                    };
                                return "codetour" === h && (S = Object.assign(Object.assign({}, S), {
                                    configurationDefaults: Object.assign(Object.assign({}, S.configurationDefaults), {
                                        "workbench.startupEditor": "none"
                                    }),
                                    additionalBuiltinExtensions: [...S.additionalBuiltinExtensions, "vsls-contrib.codetour"],
                                    enabledExtensions: ["vsls-contrib.codetour"]
                                }),
                                    O = Object.assign(Object.assign({}, O), {
                                        openUri: {
                                            authority: "vsls-contrib.codetour",
                                            path: "/startDefaultTour"
                                        }
                                    })), {
                                    workspace: {
                                        folderUri: n.URI.from({
                                            scheme: "vscode-vfs",
                                            authority: (0,
                                                o.encodeAuthority)("github", u),
                                            path: `/${y}/${g}`
                                        })
                                    },
                                    workbenchOptions: S,
                                    onDidCreateWorkbench: O
                                }
                            }))
                        }
                    }
                    p.RX = /^\/(?<service>github|codetour)(?<indexed>\+idx=?(?<idx>latest|[0-9a-fA-F]{40})?)?\/(?<owner>[^/]+)\/(?<repo>[^/?#]+)(?:|\.git|\/tree\/(?<tree>.+)|\/blob\/(?<blob>.+)|\/commit\/(?<commit>[0-9a-f]{40})|\/pull\/(?<pull>[0-9]+))?/i;

                    function f(e, t, r, n) {
                        return i(this, void 0, void 0, (function* () {
                            const i = yield e.request(`GET /repos/{owner}/{repo}/git/extract-ref/${null != n ? n : "HEAD"}`, {
                                owner: t,
                                repo: r
                            });
                            return [t, r] = i.data.name_with_owner.split("/"),
                                n ? {
                                    owner: t,
                                    repo: r,
                                    ref: {
                                        type: o.RepositoryRefType.Tree,
                                        id: i.data.ref
                                    },
                                    path: i.data.path
                                } : {
                                    owner: t,
                                    repo: r
                                }
                        }))
                    }
                    (0,
                        s.registerRouter)(new p),
                        (0,
                            o.registerRemoteHubWorkspaceResolver)("github", new class {
                                resolveRemoteHubWorkspace(e, t) {
                                    var r, n;
                                    const i = new URL(document.location.href);
                                    let s = null !== (r = new URLSearchParams(e.query).get("vscode-experience")) && void 0 !== r ? r : "github";
                                    switch (void 0 !== t && ("latest" === t.idx ? s += "+idx" : (0,
                                        o.isSha)(t.idx) && (s += `+idx=${t.idx}`)),
                                    i.pathname = `/${s}${e.path}`,
                                    null === (n = null == t ? void 0 : t.ref) || void 0 === n ? void 0 : n.type) {
                                        case o.RepositoryRefType.PullRequest:
                                            i.pathname += `/pull/${t.ref.id}`;
                                            break;
                                        case o.RepositoryRefType.Tree:
                                            i.pathname += `/tree/${t.ref.id}`;
                                            break;
                                        case o.RepositoryRefType.Commit:
                                            i.pathname += `/commit/${t.ref.id}`
                                    }
                                    return i.toString()
                                }
                            }),
                        (0,
                            a.registerRedirect)(new c.DomainRedirect("github.com", "github")),
                        (0,
                            a.registerRedirect)(new class {
                                redirect(e) {
                                    const t = e.searchParams.get("from");
                                    if (null === t)
                                        return;
                                    const r = new URL(e.toString());
                                    return r.searchParams.delete("from"),
                                        "open" === t && (r.pathname = "/github" + r.pathname),
                                        r
                                }
                            })
                }
                    .apply(t, n)) || (e.exports = o)
        },
        131: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(593)],
                void 0 === (o = function (e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.GitHubAuthentication = void 0;
                    const n = ["repo", "workflow"];
                    t.GitHubAuthentication = class {
                        constructor(e, t) {
                            this.credentialsProvider = e,
                                this.AUTH_RELAY_SERVER = "vscode-auth.github.com",
                                this.GITHUB_AUTH_EXTENSION_ID = "vscode.github-authentication",
                                this.CREDENTIAL_PROVIDER_ACCOUNT_ID = "github.auth";
                            let r = "code-oss";
                            switch (t) {
                                case "stable":
                                    r = "vscode";
                                    break;
                                case "insider":
                                    r = "vscode-insiders"
                            }
                            this.CREDENTIAL_PROVIDER_SERVICE_ID = `${r}${this.GITHUB_AUTH_EXTENSION_ID}`
                        }
                        login(e) {
                            return i(this, void 0, void 0, (function* () {
                                let t, o = yield this.getAuthSessions();
                                t = this.findExistingAccessToken(o, n);
                                const i = e.searchParams.get("code");
                                if (void 0 === t && i && (t = yield this.exchangeCodeForAccessToken(i),
                                    void 0 !== t)) {
                                    const i = {
                                        id: (0,
                                            r.v4)(),
                                        accessToken: t,
                                        scopes: n
                                    };
                                    o.push(i),
                                        yield this.credentialsProvider.setPassword(this.CREDENTIAL_PROVIDER_SERVICE_ID, this.CREDENTIAL_PROVIDER_ACCOUNT_ID, JSON.stringify({
                                            extensionId: this.GITHUB_AUTH_EXTENSION_ID,
                                            content: JSON.stringify(o)
                                        })),
                                        e.searchParams.delete("code"),
                                        e.searchParams.delete("state"),
                                        window.history.replaceState(void 0, document.title, e.toString())
                                }
                                if (t)
                                    return t; {
                                    const t = e,
                                        r = `https://${this.AUTH_RELAY_SERVER}/authorize/?callbackUri=${encodeURIComponent(t.toString())}&scope=${n}&responseType=code&authServer=https://github.com`;
                                    window.location.href = r,
                                        yield new Promise((() => { }))
                                }
                            }))
                        }
                        findExistingAccessToken(e, t) {
                            function r(e, t) {
                                return e.reduce(((e, r) => e && t.includes(r)), !0)
                            }
                            for (const n of e)
                                if (r(t, n.scopes))
                                    return n.accessToken
                        }
                        getAuthSessions() {
                            return i(this, void 0, void 0, (function* () {
                                const e = yield this.credentialsProvider.getPassword(this.CREDENTIAL_PROVIDER_SERVICE_ID, this.CREDENTIAL_PROVIDER_ACCOUNT_ID);
                                if (e)
                                    try {
                                        const t = JSON.parse(e);
                                        if ((null == t ? void 0 : t.extensionId) === this.GITHUB_AUTH_EXTENSION_ID)
                                            return JSON.parse(t.content)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                return []
                            }))
                        }
                        exchangeCodeForAccessToken(e) {
                            return i(this, void 0, void 0, (function* () {
                                let t;
                                const r = `https://${this.AUTH_RELAY_SERVER}/token?code=${e}`;
                                try {
                                    const e = yield fetch(r, {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json"
                                        }
                                    });
                                    if (e.ok) {
                                        t = (yield e.json()).access_token
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                                return t
                            }))
                        }
                    }
                }
                    .apply(t, n)) || (e.exports = o)
        },
        510: (e, t, r) => {
            var n, o;
            n = [r, t, r(793)],
                void 0 === (o = function (e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.DomainRedirect = void 0;
                    t.DomainRedirect = class {
                        constructor(e, t) {
                            this.service = t,
                                this.regexp = new RegExp(`^/(?:https?://)?${e.replace(/\./g, "\\.")}/(?<rest>.*)`, "i")
                        }
                        redirect(e) {
                            const t = this.regexp.exec(e.pathname);
                            if (!(null == t ? void 0 : t.groups))
                                return;
                            const r = new URL(e.toString());
                            return r.pathname = `/${this.service}/${t.groups.rest}`,
                                r
                        }
                    };
                    (0,
                        r.registerRedirect)(new class {
                            redirect(e) {
                                const t = /^#(?<rest>https?:\/\/.*)/i.exec(e.hash);
                                if (!(null == t ? void 0 : t.groups))
                                    return;
                                const r = new URL(e.toString());
                                return r.pathname = t.groups.rest,
                                    r.hash = "",
                                    r
                            }
                        })
                }
                    .apply(t, n)) || (e.exports = o)
        },
        997: (e, t, r) => {
            var n, o;
            n = [r, t, r(793)],
                void 0 === (o = function (e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    (0,
                        r.registerRedirect)(new class {
                            redirect(e) {
                                const t = e.searchParams.get("idx");
                                if (null === t)
                                    return;
                                const r = /\/(?<service>[^/]+)\/(?<rest>.*)/.exec(e.pathname);
                                if (!(null == r ? void 0 : r.groups))
                                    return;
                                const n = new URL(e.toString());
                                return n.searchParams.delete("idx"),
                                    "" === t || "latest" === t ? n.pathname = `/${r.groups.service}+idx/${r.groups.rest}` : /^[0-9a-f]{40}$/i.exec(t) && (n.pathname = `/${r.groups.service}+idx=${t}/${r.groups.rest}`),
                                    n
                            }
                        })
                }
                    .apply(t, n)) || (e.exports = o)
        },
        905: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(777), r(994), r(41)],
                void 0 === (o = function (e, t, r, n, o) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    const s = "MS-vsliveshare.vsliveshare";
                    class a {
                        constructor() {
                            this.name = "liveshare"
                        }
                        route({
                            url: e
                        }) {
                            var t;
                            return i(this, void 0, void 0, (function* () {
                                const n = a.RX.exec(e.pathname);
                                if (!(null === (t = null == n ? void 0 : n.groups) || void 0 === t ? void 0 : t.sessionId))
                                    return;
                                const o = new URLSearchParams(e.searchParams);
                                return o.set("sessionId", n.groups.sessionId), {
                                    workspace: {
                                        workspaceUri: r.URI.from({
                                            scheme: "vsls",
                                            authority: "",
                                            path: "/Live Share.code-workspace",
                                            query: o.toString()
                                        })
                                    },
                                    workbenchOptions: {
                                        configurationDefaults: {
                                            "workbench.startupEditor": "none"
                                        },
                                        additionalBuiltinExtensions: [s],
                                        enabledExtensions: [s]
                                    },
                                    onWillDisposeWorkbench: {
                                        runCommands: [{
                                            command: "liveshare.workbench.dispose",
                                            args: []
                                        }]
                                    }
                                }
                            }))
                        }
                    }
                    a.RX = /^\/liveshare\/(?<sessionId>[^/]+)/i;
                    (0,
                        n.registerRouter)(new a),
                        (0,
                            o.registerWorkspaceResolver)(new class {
                                resolveWorkspace(e) {
                                    if ("vsls" === e.scheme && "" === e.authority && "/" === e.path) {
                                        const e = new URL(document.location.href);
                                        return e.pathname = "/liveshare",
                                            e.toString()
                                    }
                                    if ("vsls" !== e.scheme || "" !== e.authority || "/Live Share.code-workspace" !== e.path)
                                        return;
                                    const t = new URLSearchParams(e.query).get("sessionId");
                                    if (!t)
                                        return;
                                    const r = new URL(document.location.href);
                                    return r.pathname = `/liveshare/${t}`,
                                        r.toString()
                                }
                            })
                }
                    .apply(t, n)) || (e.exports = o)
        },
        703: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(777), r(994)],
                void 0 === (o = function (e, t, r, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    const o = "ms-vscode.vscode-marketplace-extension-browser";
                    class s {
                        constructor() {
                            this.name = "marketplace"
                        }
                        route({
                            url: e
                        }) {
                            return i(this, void 0, void 0, (function* () {
                                const t = s.RX.exec(e.pathname);
                                if (null == t ? void 0 : t.groups)
                                    return {
                                        workspace: {
                                            folderUri: r.URI.from({
                                                scheme: "vscode-marketplace",
                                                authority: "",
                                                path: `/${t.groups.owner}/${t.groups.repo}/${t.groups.version}`
                                            })
                                        },
                                        workbenchOptions: {
                                            configurationDefaults: {
                                                "workbench.startupEditor": "none"
                                            },
                                            additionalBuiltinExtensions: [o],
                                            enabledExtensions: [o]
                                        },
                                        onDidCreateWorkbench: {
                                            openUri: {
                                                authority: o,
                                                path: "/open"
                                            }
                                        }
                                    }
                            }))
                        }
                    }
                    s.RX = /^\/(?:marketplace)\/(?<owner>[^/]+)\/(?<repo>[^/]+)\/(?<version>\d+\.\d+\.\d+(-.*)?)$/i,
                        (0,
                            n.registerRouter)(new s)
                }
                    .apply(t, n)) || (e.exports = o)
        },
        129: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(777), r(994), r(497)],
                void 0 === (o = function (e, t, r, n, o) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    class s {
                        constructor() {
                            this.name = "office"
                        }
                        route({
                            url: e
                        }) {
                            return i(this, void 0, void 0, (function* () {
                                if (!s.RX.exec(e.pathname))
                                    return;
                                if ("insider" !== (0,
                                    o.getQuality)(e))
                                    return;
                                const t = window.opener;
                                if (!t)
                                    return;
                                const n = yield new Promise((e => {
                                    const r = t => {
                                        var n;
                                        s.Origins.has(t.origin) ? "vscode.port" === (null === (n = t.data) || void 0 === n ? void 0 : n.type) ? t.data.port ? (window.removeEventListener("message", r),
                                            e(t.data.port)) : console.error("Received unexpected 'vscode.port' event format.") : console.error("Received unexpected event") : console.error(`Received event from unexpected origin: ${t.origin}`)
                                    };
                                    window.addEventListener("message", r),
                                        t.postMessage({
                                            type: "vscode.ready"
                                        }, "*")
                                }));
                                return {
                                    workspace: {
                                        workspaceUri: r.URI.from({
                                            scheme: "tmp",
                                            path: "/default.code-workspace"
                                        })
                                    },
                                    workbenchOptions: {
                                        additionalBuiltinExtensions: [s.ExtensionId],
                                        enabledExtensions: [s.ExtensionId],
                                        messagePorts: new Map([
                                            [s.ExtensionId, n]
                                        ]),
                                        productConfiguration: {
                                            extensionEnabledApiProposals: {
                                                [s.ExtensionId]: ["ipc"]
                                            }
                                        }
                                    }
                                }
                            }))
                        }
                    }
                    s.RX = /^\/office/i,
                        s.ExtensionId = "office-script.office-script-extension",
                        s.Origins = new Set(["https://officenyborg.azurewebsites.net", "https://fa000000043.resources.office.net"]),
                        (0,
                            n.registerRouter)(new s)
                }
                    .apply(t, n)) || (e.exports = o)
        },
        57: (e, t, r) => {
            var n, o;
            n = [r, t, r(41), r(216)],
                void 0 === (o = function (e, t, r, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.registerRemoteHubWorkspaceResolver = t.encodeAuthority = t.isSha = t.RepositoryRefType = void 0,
                        function (e) {
                            e[e.Branch = 0] = "Branch",
                                e[e.Tag = 1] = "Tag",
                                e[e.Commit = 2] = "Commit",
                                e[e.PullRequest = 3] = "PullRequest",
                                e[e.Tree = 4] = "Tree"
                        }(t.RepositoryRefType || (t.RepositoryRefType = {}));
                    const o = /^[0-9a-f]{40}$/i;
                    t.isSha = function (e) {
                        return void 0 !== e && o.test(e)
                    };

                    function i(e) {
                        const [t, r] = e.split("+");
                        let n;
                        if (r)
                            try {
                                n = JSON.parse(function (e) {
                                    const t = e.match(/(\w{2})/g);
                                    if (null === t)
                                        return "";
                                    const r = new Uint8Array(t.map((e => parseInt(e, 16))));
                                    return c.decode(r)
                                }(r))
                            } catch (e) { }
                        return {
                            scheme: t,
                            metadata: n
                        }
                    }
                    t.encodeAuthority = function (e, t) {
                        return `${e}${t ? `+${function (e) {
                            const t = a.encode(e)
                                , r = new Array(t.length);
                            for (let e = 0; e < t.length; ++e)
                                r[e] = s[t[e]];
                            return r.join("")
                        }(JSON.stringify(t))}` : ""}`
                    };
                    const s = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
                        a = new TextEncoder;
                    const c = new TextDecoder;
                    const u = new n.MapRegistry;
                    t.registerRemoteHubWorkspaceResolver = function (e, t) {
                        return u.register(e, t)
                    };
                    (0,
                        r.registerWorkspaceResolver)(new class {
                            resolveWorkspace(e) {
                                if ("vscode-vfs" !== e.scheme)
                                    return;
                                const {
                                    scheme: t,
                                    metadata: r
                                } = i(e.authority), n = u.get(t);
                                if (!n)
                                    throw new Error(`RemoteHub authority not supported: ${e.authority}`);
                                return n.resolveRemoteHubWorkspace(e, r)
                            }
                        })
                }
                    .apply(t, n)) || (e.exports = o)
        },
        174: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(777), r(994)],
                void 0 === (o = function (e, t, r, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    const o = "ms-vscode.theme-tester";
                    class s {
                        constructor() {
                            this.name = "theme"
                        }
                        route({
                            url: e
                        }) {
                            return i(this, void 0, void 0, (function* () {
                                const t = s.RX.exec(e.pathname);
                                if (null == t ? void 0 : t.groups)
                                    return {
                                        workspace: {
                                            folderUri: r.URI.from({
                                                scheme: "vscode-theme-tester",
                                                authority: "",
                                                path: "/"
                                            })
                                        },
                                        workbenchOptions: {
                                            configurationDefaults: {
                                                "workbench.startupEditor": "none"
                                            },
                                            additionalBuiltinExtensions: [o],
                                            enabledExtensions: [o]
                                        },
                                        onDidCreateWorkbench: {
                                            openUri: {
                                                authority: o,
                                                path: "/open"
                                            }
                                        }
                                    }
                            }))
                        }
                    }
                    s.RX = /^\/(?:theme)\/(?<themeExtId>.+)$/i,
                        (0,
                            n.registerRouter)(new s)
                }
                    .apply(t, n)) || (e.exports = o)
        },
        382: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            },
                s = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            n = [r, t, r(777), r(994), r(923), r(497)],
                void 0 === (o = function (e, t, r, n, o, a) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        o = s(o);
                    const c = "Orta.tspl";
                    class u {
                        constructor() {
                            this.name = "tsplay",
                                this.scheme = "playfs"
                        }
                        route({
                            url: e
                        }) {
                            return i(this, void 0, void 0, (function* () {
                                if (!u.RX.exec(e.pathname))
                                    return;
                                const t = (0,
                                    a.getQuality)(e);
                                return e.href.includes("localhost") || "stable" !== t ? {
                                    workspace: {
                                        folderUri: r.URI.from({
                                            scheme: this.scheme,
                                            authority: "",
                                            path: "/"
                                        })
                                    },
                                    workbenchOptions: {
                                        configurationDefaults: {
                                            "scm.alwaysShowProviders": !1,
                                            "workbench.experimental.sidePanel.enabled": !0
                                        },
                                        additionalBuiltinExtensions: [c],
                                        enabledExtensions: [c],
                                        defaultLayout: {
                                            views: [{
                                                id: "ts-playground"
                                            }]
                                        }
                                    },
                                    onDidCreateWorkbench: {
                                        openUri: {
                                            authority: c,
                                            path: e.pathname,
                                            query: e.search,
                                            fragment: e.hash
                                        },
                                        runCommands: [{
                                            command: "workbench.action.focusAuxiliaryBar",
                                            args: []
                                        }]
                                    },
                                    welcomeBanner: {
                                        message: "TypeScript Playground in Code (Preview)",
                                        actions: [{
                                            href: `https://www.typescriptlang.org/play/${e.search}${e.hash}`,
                                            label: "Go back to TypeScript Playground"
                                        }, {
                                            href: "https://privacy.microsoft.com/en-us/privacystatement",
                                            label: o.default.Privacy.toString()
                                        }, {
                                            href: "https://www.microsoft.com/en-us/legal/terms-of-use",
                                            label: o.default.TermsofUse.toString()
                                        }]
                                    },
                                    suppressDefaultRemoteExtensions: !0
                                } : void 0
                            }))
                        }
                    }
                    u.RX = /^\/tsplay/i,
                        (0,
                            n.registerRouter)(new u)
                }
                    .apply(t, n)) || (e.exports = o)
        },
        336: function (e, t, r) {
            var n, o = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            void 0 === (n = function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.LocalStorageCredentialsProvider = void 0;
                class r {
                    constructor(e) {
                        this.crypto = e,
                            this.credentialsPromise = this.load()
                    }
                    load() {
                        return o(this, void 0, void 0, (function* () {
                            const e = window.localStorage.getItem(r.CREDENTIALS_KEY);
                            if (e && "[" == e.charAt(0))
                                try {
                                    const t = JSON.parse(e);
                                    if (Array.isArray(t))
                                        return t
                                } catch (e) {
                                    console.error(e)
                                }
                            else if (e)
                                try {
                                    return JSON.parse(yield this.crypto.decrypt(e))
                                } catch (e) {
                                    console.error("Failed to decrypt credentials from localStorage", e),
                                        window.localStorage.removeItem(r.CREDENTIALS_KEY)
                                }
                            return []
                        }))
                    }
                    save() {
                        return o(this, void 0, void 0, (function* () {
                            try {
                                const e = yield this.crypto.encrypt(JSON.stringify(yield this.credentialsPromise));
                                window.localStorage.setItem(r.CREDENTIALS_KEY, e)
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    }
                    getPassword(e, t) {
                        return o(this, void 0, void 0, (function* () {
                            return this.doGetPassword(e, t)
                        }))
                    }
                    setPassword(e, t, r) {
                        return o(this, void 0, void 0, (function* () {
                            this.deletePassword(e, t);
                            const n = yield this.credentialsPromise;
                            n.push({
                                service: e,
                                account: t,
                                password: r
                            }),
                                this.credentialsPromise = Promise.resolve(n),
                                yield this.save()
                        }))
                    }
                    deletePassword(e, t) {
                        return o(this, void 0, void 0, (function* () {
                            const r = (yield this.credentialsPromise).findIndex((r => r.service === e && r.account === t));
                            if (-1 === r)
                                return !1;
                            const n = yield this.credentialsPromise;
                            return n.splice(r, 1),
                                this.credentialsPromise = Promise.resolve(n),
                                yield this.save(),
                                !0
                        }))
                    }
                    findPassword(e) {
                        return o(this, void 0, void 0, (function* () {
                            return this.doGetPassword(e)
                        }))
                    }
                    findCredentials(e) {
                        return o(this, void 0, void 0, (function* () {
                            return (yield this.credentialsPromise).filter((t => t.service === e)).map((({
                                account: e,
                                password: t
                            }) => ({
                                account: e,
                                password: t
                            })))
                        }))
                    }
                    doGetPassword(e, t) {
                        var r;
                        return o(this, void 0, void 0, (function* () {
                            return null !== (r = (yield this.credentialsPromise).filter((r => r.service === e && ("string" != typeof t || t === r.account))).map((e => e.password))[0]) && void 0 !== r ? r : null
                        }))
                    }
                    clear() {
                        return o(this, void 0, void 0, (function* () {
                            window.localStorage.removeItem(r.CREDENTIALS_KEY),
                                this.credentialsPromise = Promise.resolve(new Array)
                        }))
                    }
                }
                t.LocalStorageCredentialsProvider = r,
                    r.CREDENTIALS_KEY = "credentials.provider"
            }
                .apply(t, [r, t])) || (e.exports = n)
        },
        624: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(578)],
                void 0 === (o = function (e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.AESGCMCrypto = void 0;
                    class n {
                        constructor(e) {
                            this.authEndpoint = function (e) {
                                return /localhost/.test(e) ? "/_auth" : `https://auth.${e}`
                            }(e)
                        }
                        encrypt(e) {
                            return i(this, void 0, void 0, (function* () {
                                const t = window.crypto.getRandomValues(new Uint8Array(n.IV_LENGTH)),
                                    o = yield window.crypto.subtle.generateKey({
                                        name: n.ALGORITHM,
                                        length: n.KEY_LENGTH
                                    }, !0, ["encrypt", "decrypt"]), i = new Uint8Array(yield window.crypto.subtle.exportKey("raw", o)), s = yield this.getKey(i), a = r.Base64.encode(e), c = r.Base64.toUint8Array(a), u = yield window.crypto.subtle.encrypt({
                                        name: n.ALGORITHM,
                                        iv: t
                                    }, s, c), l = new Uint8Array(function* (...e) {
                                        for (const t of e)
                                            for (const e of t)
                                                yield e
                                    }(i, t, new Uint8Array(u)));
                                return r.Base64.fromUint8Array(l)
                            }))
                        }
                        decrypt(e) {
                            return i(this, void 0, void 0, (function* () {
                                const t = r.Base64.toUint8Array(e);
                                if (t.byteLength < 60)
                                    throw Error("Invalid length for the value for credentials.crypto");
                                const o = n.KEY_LENGTH / 8,
                                    i = t.slice(0, o),
                                    s = t.slice(o, o + n.IV_LENGTH),
                                    a = t.slice(o + n.IV_LENGTH),
                                    c = yield this.getKey(i), u = yield window.crypto.subtle.decrypt({
                                        name: n.ALGORITHM,
                                        iv: s
                                    }, c, a), l = r.Base64.fromUint8Array(new Uint8Array(u));
                                return r.Base64.decode(l)
                            }))
                        }
                        getKey(e) {
                            return i(this, void 0, void 0, (function* () {
                                if (!e || e.byteLength != n.KEY_LENGTH / 8)
                                    throw Error("Invalid length for clientKey");
                                const t = yield this.getServerKeyPart(), r = new Uint8Array(n.KEY_LENGTH / 8);
                                for (let n = 0; n < r.byteLength; n++)
                                    r[n] = e[n] ^ t[n];
                                return window.crypto.subtle.importKey("raw", r, {
                                    name: n.ALGORITHM,
                                    length: n.KEY_LENGTH
                                }, !0, ["encrypt", "decrypt"])
                            }))
                        }
                        getServerKeyPart() {
                            return i(this, void 0, void 0, (function* () {
                                if (this._serverKey)
                                    return this._serverKey;
                                let e, t = 0;
                                for (; t <= 3;)
                                    try {
                                        const e = yield fetch(this.authEndpoint, {
                                            credentials: "include",
                                            method: "POST"
                                        });
                                        if (!e.ok)
                                            throw new Error(e.statusText);
                                        const t = yield e.text(), o = r.Base64.toUint8Array(t);
                                        if (o.byteLength != n.KEY_LENGTH / 8)
                                            throw Error(`The key retrieved by the server is not ${n.KEY_LENGTH} bit long.`);
                                        return this._serverKey = o,
                                            this._serverKey
                                    } catch (r) {
                                        e = r,
                                            t++,
                                            yield new Promise((e => setTimeout(e, t * t * 100)))
                                    }
                                throw e
                            }))
                        }
                    }
                    t.AESGCMCrypto = n,
                        n.ALGORITHM = "AES-GCM",
                        n.KEY_LENGTH = 256,
                        n.IV_LENGTH = 12
                }
                    .apply(t, n)) || (e.exports = o)
        },
        793: (e, t, r) => {
            var n, o;
            n = [r, t, r(216)],
                void 0 === (o = function (e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.registerRedirect = void 0;
                    const n = new r.SetRegistry;
                    t.registerRedirect = function (e) {
                        return n.register(e)
                    },
                        t.default = function (e) {
                            var t;
                            for (const r of n)
                                e = null !== (t = r.redirect(e)) && void 0 !== t ? t : e;
                            return e
                        }
                }
                    .apply(t, n)) || (e.exports = o)
        },
        994: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(216)],
                void 0 === (o = function (e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.registerRouter = void 0;
                    const n = new r.SetRegistry;
                    t.registerRouter = function (e) {
                        return n.register(e)
                    },
                        t.default = function (e) {
                            return i(this, void 0, void 0, (function* () {
                                for (const t of n) {
                                    performance.mark(`web/willRoute/${t.name}`);
                                    const r = yield t.route(e);
                                    if (performance.mark(`web/didRoute/${t.name}`),
                                        r)
                                        return r
                                }
                            }))
                        }
                }
                    .apply(t, n)) || (e.exports = o)
        },
        41: (e, t, r) => {
            var n, o;
            n = [r, t, r(216)],
                void 0 === (o = function (e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.registerWorkspaceResolver = void 0;
                    const n = new r.SetRegistry;
                    t.registerWorkspaceResolver = function (e) {
                        return n.register(e)
                    },
                        t.default = function (e) {
                            for (const t of n) {
                                const r = t.resolveWorkspace(e);
                                if (r)
                                    return r
                            }
                            throw new Error(`Workspace URI scheme not supported: ${e.scheme}`)
                        }
                }
                    .apply(t, n)) || (e.exports = o)
        },
        195: (e, t, r) => {
            var n;
            void 0 === (n = function (e, t) {
                "use strict";
                var r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.updateExtensionsUsingQuality = t.BuiltinExtensions = void 0,
                    function (e) {
                        e.GitHubPullRequest = "GitHub.vscode-pull-request-github",
                            e.GitHubRepositories = "GitHub.remotehub",
                            e.AzureRepos = "ms-vscode.azure-repos"
                    }(r = t.BuiltinExtensions || (t.BuiltinExtensions = {}));
                const n = new Map([
                    [r.GitHubPullRequest, new Map([
                        ["dev", {
                            id: "GitHub.vscode-pull-request-github",
                            preRelease: !0
                        }],
                        ["insider", {
                            id: "GitHub.vscode-pull-request-github",
                            preRelease: !0
                        }],
                        ["stable", {
                            id: "GitHub.vscode-pull-request-github",
                            preRelease: !1
                        }]
                    ])],
                    [r.GitHubRepositories, new Map([
                        ["dev", {
                            id: "GitHub.remotehub",
                            preRelease: !0,
                            migrateStorageFrom: "GitHub.remotehub-insiders"
                        }],
                        ["insider", {
                            id: "GitHub.remotehub",
                            preRelease: !0,
                            migrateStorageFrom: "GitHub.remotehub-insiders"
                        }],
                        ["stable", {
                            id: "GitHub.remotehub",
                            preRelease: !1
                        }]
                    ])],
                    [r.AzureRepos, new Map([
                        ["dev", {
                            id: "ms-vscode.azure-repos",
                            preRelease: !0
                        }],
                        ["insider", {
                            id: "ms-vscode.azure-repos",
                            preRelease: !0
                        }],
                        ["stable", {
                            id: "ms-vscode.azure-repos",
                            preRelease: !1
                        }]
                    ])]
                ]);
                t.updateExtensionsUsingQuality = function (e, t) {
                    var r;
                    for (let o = 0; o < e.length; o++) {
                        const i = e[o];
                        if ("string" == typeof i && n.has(i)) {
                            const s = null === (r = n.get(i)) || void 0 === r ? void 0 : r.get(t);
                            s && (e[o] = s)
                        }
                    }
                    return e
                }
            }
                .apply(t, [r, t])) || (e.exports = n)
        },
        923: (e, t, r) => {
            var n;
            void 0 === (n = function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = ["cs", "de", "en", "es", "fr", "it", "ja", "ko", "pl", "pt", "ru", "tr", "zh-Hans", "zh-Hant"];
                class n {
                    constructor(e) {
                        this.strings = e
                    }
                    toString() {
                        return function (e, t) {
                            for (; ;) {
                                const n = r.indexOf(e);
                                if (n > -1)
                                    return t[n];
                                let o = e.replace(/-[^-]*$/, "");
                                o === e && (o = "en"),
                                    e = o
                            }
                        }(window.navigator.language, this.strings)
                    }
                }
                t.default = {
                    Anywhere: new n(["Kdekoli, kdykoli, zcela ve vašem prohlížeči.", "Überall, jederzeit, vollständig in Ihrem Browser.", "Anywhere, anytime, entirely in your browser.", "En cualquier lugar, en cualquier momento, completamente en su navegador.", "N'importe où, n'importe quand, entièrement dans votre navigateur.", "Ovunque, in qualsiasi momento, interamente nel tuo browser.", "いつでもどこでも、完全にブラウザで。", "언제, 어디서나, 전적으로 귀하의 브라우저에서.", "Zawsze i wszędzie, całkowicie w Twojej przeglądarce.", "Em qualquer lugar, a qualquer hora, inteiramente no seu navegador.", "В любом месте, в любое время, полностью в вашем браузере.", "Her yerde, her zaman, tamamen tarayıcınızda.", "随时随地，完全在您的浏览器中。", "隨時隨地，完全在您的瀏覽器中。"]),
                    LearnMore: new n(["Další informace", "Weitere Informationen", "Learn More", "Más información", "En savoir plus", "Altre informazioni", "詳細を表示", "자세한 정보", "Dowiedz się więcej", "Saiba Mais", "Дополнительные сведения", "Daha Fazla Bilgi", "了解详细信息", "深入了解"]),
                    ReadAnnouncement: new n(["Přečtěte si oznámení", "Lesen Sie die Ankündigung", "Read the Announcement", "Leer el anuncio", "Lire l'annonce", "Leggi il bando", "アナウンスを読む", "공지사항 읽기", "Przeczytaj ogłoszenie", "Leia o anúncio", "Прочитайте объявление", "Duyuruyu Okuyun", "阅读公告", "閱讀公告"]),
                    Privacy: new n(["Ochrana osobních údajů", "Datenschutz & Cookies ", "Privacy & Cookies", "Privacidad y cookies", "Confidentialité et cookies", "Privacy e cookie", "プライバシーとクッキー", "개인정보처리방침", "Prywatność i pliki cookie", "Privacidade e cookies", "Конфиденциальность и файлы cookie", "Gizlilik ve Çerezler", "隐私和 Cookie", "隱私和 Cookie"]),
                    TermsofUse: new n(["Podmínky použití", "Nutzungsbedingungen", "Terms of Use", "Condiciones de uso", "Conditions d'utilisation", "Termini di utilizzo", "利用規約", "이용약관", "Warunki korzystania", "Termos de uso", "Условия эксплуатации", "Kullanım Şartları", "使用条款", "使用條款"]),
                    DownloadVSCode: new n(["Stáhněte si VS Code", "VS Code herunterladen", "Download VS Code", "Descargar VS Code", "Télécharger VS Code", "Scarica VS Code", "VS Codeをダウンロードする", "VS Code 다운로드", "Pobierz VS Code", "Descarregar VS Code", "Скачать VS Code", "VS Code İndirin", "下载 VS Code", "下載 VS Code"])
                }
            }
                .apply(t, [r, t])) || (e.exports = n)
        },
        813: function (e, t, r) {
            var n, o, i = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return t[r]
                        }
                    })
            } :
                function (e, t, r, n) {
                    void 0 === n && (n = r),
                        e[n] = t[r]
                }
            ),
                s = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } :
                    function (e, t) {
                        e.default = t
                    }
                ),
                a = this && this.__importStar || function (e) {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && i(t, e, r);
                    return s(t, e),
                        t
                },
                c = this && this.__awaiter || function (e, t, r, n) {
                    return new (r || (r = Promise))((function (o, i) {
                        function s(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value,
                                t instanceof r ? t : new r((function (e) {
                                    e(t)
                                }))).then(s, a)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                },
                u = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            n = [r, t, r(777), r(336), r(624), r(427), r(994), r(41), r(793), r(923), r(195), r(510), r(467), r(299), r(628), r(905), r(382), r(703), r(129), r(57), r(174), r(997)],
                void 0 === (o = function (e, t, r, n, o, i, s, l, d, p, f) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.main = void 0,
                        r = a(r),
                        s = u(s),
                        l = u(l),
                        d = u(d),
                        p = u(p);
                    class h {
                        constructor(e) {
                            this.workspace = e,
                                this.trusted = !0
                        }
                        get payload() {
                            var e;
                            if (void 0 === this._payload) {
                                let e = null;
                                new URL(window.location.href).searchParams.forEach(((t, r) => {
                                    switch (r) {
                                        case h.QUERY_PARAM_PAYLOAD:
                                            try {
                                                e = JSON.parse(t)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                    }
                                })),
                                    this._payload = e
                            }
                            return null !== (e = this._payload) && void 0 !== e ? e : void 0
                        }
                        open(e, t) {
                            return c(this, void 0, void 0, (function* () {
                                let n;
                                if (void 0 === e) {
                                    const e = new URL(window.location.href);
                                    e.pathname = "/",
                                        n = e.toString()
                                } else
                                    (function (e) {
                                        return !!e && e.folderUri instanceof r.URI
                                    })(e) && (n = (0,
                                        l.default)(e.folderUri));
                                if (n) {
                                    if ((null == t ? void 0 : t.payload) && (n += `&${h.QUERY_PARAM_PAYLOAD}=${encodeURIComponent(JSON.stringify(null == t ? void 0 : t.payload))}`),
                                        null == t ? void 0 : t.reuse)
                                        return window.location.href = n,
                                            !0;
                                    let e;
                                    return e = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches ? window.open(n, "_blank", "toolbar=no") : window.open(n),
                                        !!e
                                }
                                throw new Error("Not implemented")
                            }))
                        }
                    }
                    h.QUERY_PARAM_PAYLOAD = "payload";
                    const v = !/Chrome/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent),
                        m = ["https://vscode-auth.github.com/authorize", "https://app.vssps.visualstudio.com/oauth2/authorize", "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"];
                    class y {
                        openExternal(e) {
                            if (v)
                                return !1;
                            for (const t of m)
                                if (e.startsWith(t)) {
                                    const t = Math.floor(window.screenLeft + window.innerWidth / 2 - y.PopupWidth / 2),
                                        r = Math.floor(window.screenTop + window.innerHeight / 2 - y.PopupHeight / 2);
                                    return window.open(e, "_blank", `width=${y.PopupWidth},height=${y.PopupHeight},top=${r},left=${t}`),
                                        !0
                                }
                            return !1
                        }
                    }
                    y.PopupWidth = 780,
                        y.PopupHeight = 640;
                    const g = {
                        workspaceUri: r.URI.from({
                            scheme: "tmp",
                            path: "/default.code-workspace"
                        })
                    },
                        b = [{
                            href: "https://aka.ms/vscode.dev-blog",
                            label: p.default.ReadAnnouncement.toString()
                        }, {
                            href: "https://privacy.microsoft.com/en-us/privacystatement",
                            label: p.default.Privacy.toString()
                        }, {
                            href: "https://www.microsoft.com/en-us/legal/terms-of-use",
                            label: p.default.TermsofUse.toString()
                        }, {
                            href: "https://code.visualstudio.com/download",
                            label: p.default.DownloadVSCode.toString()
                        }];

                    function w(e, t) {
                        return r => {
                            /vscode\.dev$/.test(e.hostname) && !e.searchParams.get("vscode-quality") ? e.hostname = "insider" === r ? "insiders.vscode.dev" : "vscode.dev" : r === t ? e.searchParams.delete("vscode-quality") : e.searchParams.set("vscode-quality", r),
                                window.location.href = e.toString()
                        }
                    }

                    function R(e) {
                        var t;
                        switch (null === (t = e.searchParams.get("vscode-log")) || void 0 === t ? void 0 : t.toLowerCase()) {
                            case "trace":
                                return r.LogLevel.Trace;
                            case "debug":
                                return r.LogLevel.Debug;
                            case "warning":
                                return r.LogLevel.Warning;
                            case "error":
                                return r.LogLevel.Error;
                            case "critical":
                                return r.LogLevel.Critical;
                            case "off":
                                return r.LogLevel.Off;
                            default:
                                return r.LogLevel.Info
                        }
                    }
                    /^de($|-)/i.test(window.navigator.language) && b.push({
                        href: "https://news.microsoft.com/de-ch/impressum/",
                        label: "Impressum"
                    }),
                        t.main = function (e, t, a) {
                            var u, v, x, k, E, P, _, S, O, C, A, T, U, j, $, L, I, D, q, M, H, z, N, B, G;
                            return c(this, void 0, void 0, (function* () {
                                let W = new URL(window.location.href);
                                W = (0,
                                    d.default)(W),
                                    window.history.replaceState(void 0, "", W.toString());
                                const V = new o.AESGCMCrypto(W.host),
                                    F = new n.LocalStorageCredentialsProvider(V),
                                    K = yield (0,
                                        s.default)({
                                            url: W,
                                            credentialsProvider: F,
                                            quality: e,
                                            commit: t,
                                            executeCommand: r.commands.executeCommand
                                        });
                                K || (W = new URL(window.location.href),
                                    W.pathname = "/",
                                    window.history.replaceState(void 0, "", W.toString()));
                                const Y = W.searchParams.get("vscode-remotehub-dev"),
                                    Q = Y ? r.URI.parse(Y) : f.BuiltinExtensions.GitHubRepositories,
                                    J = W.searchParams.get("vscode-azurerepos-dev"),
                                    X = J ? r.URI.parse(J) : f.BuiltinExtensions.AzureRepos,
                                    Z = null == K ? void 0 : K.suppressDefaultRemoteExtensions,
                                    ee = null !== (v = null === (u = null == K ? void 0 : K.workbenchOptions) || void 0 === u ? void 0 : u.additionalBuiltinExtensions) && void 0 !== v ? v : [],
                                    te = null !== (k = null === (x = null == K ? void 0 : K.workbenchOptions) || void 0 === x ? void 0 : x.enabledExtensions) && void 0 !== k ? k : [],
                                    re = Z ? ee : ["ms-vscode.anycode", "GitHub.codespaces", ...(0,
                                        f.updateExtensionsUsingQuality)([...ee, Q, X], e)];
                                let ne = te;
                                if (!Z) {
                                    ne = (0,
                                        f.updateExtensionsUsingQuality)([...te, Q, X], e).reduce(((e, t) => ("string" == typeof t ? e.push(t) : "id" in t && e.push(t.id),
                                            e)), [])
                                }
                                const oe = new h(null !== (E = null == K ? void 0 : K.workspace) && void 0 !== E ? E : g),
                                    ie = [{
                                        id: "vscode.dev:help",
                                        label: "Help: Visual Studio Code for the Web",
                                        handler: () => r.commands.executeCommand("vscode.open", r.URI.parse("https://aka.ms/vscode-web-docs"))
                                    }];
                                (null == K ? void 0 : K.workspace) && ie.push({
                                    id: "vscode.dev:close",
                                    label: "Close Remote Workspace",
                                    menu: [null === (P = r.Menu) || void 0 === P ? void 0 : P.CommandPalette, null === (_ = r.Menu) || void 0 === _ ? void 0 : _.StatusBarWindowIndicatorMenu],
                                    handler: () => oe.open(void 0, {
                                        reuse: !0
                                    })
                                }),
                                    ie.push({
                                        id: "vscode.dev:download",
                                        label: "Download Visual Studio Code",
                                        menu: [null === (S = r.Menu) || void 0 === S ? void 0 : S.CommandPalette, null === (O = r.Menu) || void 0 === O ? void 0 : O.StatusBarWindowIndicatorMenu],
                                        handler: () => r.commands.executeCommand("vscode.open", r.URI.parse("https://code.visualstudio.com/download"))
                                    });
                                const se = function (e) {
                                    const t = {
                                        enableTelemetry: !0,
                                        embedderIdentifier: "vscode.dev",
                                        openToWelcomeMainPage: !0,
                                        documentationUrl: "https://aka.ms/vscode-web-docs",
                                        licenseUrl: "https://www.microsoft.com/en-us/legal/terms-of-use",
                                        keyboardShortcutsUrlMac: "https://aka.ms/vscode-dev-shortcuts-macos",
                                        keyboardShortcutsUrlLinux: "https://aka.ms/vscode-dev-shortcuts-linux",
                                        keyboardShortcutsUrlWin: "https://aka.ms/vscode-dev-shortcuts-win"
                                    };
                                    return "dev" !== e ? t : Object.assign(Object.assign({}, t), {
                                        extensionsGallery: {
                                            serviceUrl: "https://marketplace.visualstudio.com/_apis/public/gallery",
                                            cacheUrl: "https://vscode.blob.core.windows.net/gallery/index",
                                            itemUrl: "https://marketplace.visualstudio.com/items",
                                            resourceUrlTemplate: "https://{publisher}.vscode-unpkg.net/{publisher}/{name}/{version}/{path}",
                                            controlUrl: "https://az764295.vo.msecnd.net/extensions/marketplace.json",
                                            recommendationsUrl: "https://az764295.vo.msecnd.net/extensions/workspaceRecommendations.json.gz"
                                        }
                                    })
                                }(e),
                                    ae = Object.assign(Object.assign({}, null !== (C = null == K ? void 0 : K.workbenchOptions) && void 0 !== C ? C : {}), {
                                        configurationDefaults: Object.assign({
                                            "workbench.colorTheme": "Dark+"
                                        }, null !== (T = null === (A = null == K ? void 0 : K.workbenchOptions) || void 0 === A ? void 0 : A.configurationDefaults) && void 0 !== T ? T : {}),
                                        additionalBuiltinExtensions: re,
                                        enabledExtensions: ne,
                                        assumeGalleryExtensionsAreAddressable: !0,
                                        urlCallbackProvider: new i.LocalStorageURLCallbackProvider(V),
                                        credentialsProvider: F,
                                        productConfiguration: Object.assign(Object.assign(Object.assign({}, se), null !== (j = null === (U = null == K ? void 0 : K.workbenchOptions) || void 0 === U ? void 0 : U.productConfiguration) && void 0 !== j ? j : {}), {
                                            extensionEnabledApiProposals: Object.assign(Object.assign({}, null !== ($ = null == se ? void 0 : se.extensionEnabledApiProposals) && void 0 !== $ ? $ : {}), null !== (D = null === (I = null === (L = null == K ? void 0 : K.workbenchOptions) || void 0 === L ? void 0 : L.productConfiguration) || void 0 === I ? void 0 : I.extensionEnabledApiProposals) && void 0 !== D ? D : {})
                                        }),
                                        initialColorTheme: {
                                            themeType: "dark"
                                        },
                                        welcomeBanner: null !== (q = null == K ? void 0 : K.welcomeBanner) && void 0 !== q ? q : {
                                            message: `Visual Studio Code (Preview). ${p.default.Anywhere}`,
                                            actions: b
                                        },
                                        __uniqueWebWorkerExtensionHostOrigin: !0,
                                        codeExchangeProxyEndpoints: {
                                            microsoft: `${window.location.protocol}//${window.location.host}/codeExchangeProxyEndpoints/microsoft/`,
                                            github: `${window.location.protocol}//${window.location.host}/codeExchangeProxyEndpoints/github/`
                                        },
                                        resolveExternalUri: e => c(this, void 0, void 0, (function* () {
                                            return r.URI.parse((0,
                                                l.default)(e))
                                        })),
                                        commands: null !== (z = null === (H = null === (M = null == K ? void 0 : K.workbenchOptions) || void 0 === M ? void 0 : M.commands) || void 0 === H ? void 0 : H.concat(ie)) && void 0 !== z ? z : ie,
                                        workspaceProvider: oe,
                                        productQualityChangeHandler: w(W, a),
                                        externalURLOpener: new y,
                                        developmentOptions: {
                                            logLevel: R(W)
                                        },
                                        openerAllowedExternalUrlPrefixes: m,
                                        resolveCommonTelemetryProperties: () => ({
                                            "common.isPWAInstalled": String(navigator.standalone || window.matchMedia("(display-mode: standalone)").matches)
                                        })
                                    });
                                if (r.create(document.body, ae),
                                    null === (N = null == K ? void 0 : K.onDidCreateWorkbench) || void 0 === N ? void 0 : N.openUri) {
                                    const e = K.onDidCreateWorkbench.openUri;
                                    r.env.openUri(r.URI.from(Object.assign({
                                        scheme: yield r.env.getUriScheme(),
                                        query: window.location.href
                                    }, e)))
                                }
                                if (null === (B = null == K ? void 0 : K.onDidCreateWorkbench) || void 0 === B ? void 0 : B.runCommands)
                                    for (const e of K.onDidCreateWorkbench.runCommands)
                                        r.commands.executeCommand(e.command, ...e.args);
                                if (null === (G = null == K ? void 0 : K.onWillDisposeWorkbench) || void 0 === G ? void 0 : G.runCommands) {
                                    const e = K.onWillDisposeWorkbench.runCommands;
                                    window.addEventListener("beforeunload", (() => {
                                        for (const t of e)
                                            r.commands.executeCommand(t.command, ...t.args)
                                    }))
                                }
                            }))
                        }
                }
                    .apply(t, n)) || (e.exports = o)
        },
        497: (e, t, r) => {
            var n;
            void 0 === (n = function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.setupQualityHeadLinks = t.getQuality = t.DefaultQuality = void 0;
                const r = new Set(["stable", "insider", "dev"]);
                t.DefaultQuality = "stable",
                    t.getQuality = function (e) {
                        var n, o;
                        let i = e.searchParams.get("vscode-quality");
                        return i || "vscode.dev" !== e.hostname || (i = t.DefaultQuality),
                            i || (i = null === (o = null === (n = /^(?<quality>[^.]+)\.vscode\.dev$/.exec(e.hostname)) || void 0 === n ? void 0 : n.groups) || void 0 === o ? void 0 : o.quality),
                            i || (i = t.DefaultQuality),
                            "insiders" === i ? i = "insider" : r.has(i) || (i = t.DefaultQuality),
                            i
                    },
                    t.setupQualityHeadLinks = function (e) {
                        e = "insider" === e ? "insider" : "stable";
                        const t = document.createElement("link");
                        t.rel = "icon",
                            t.href = `/static/${e}/favicon.ico`,
                            t.type = "image/x-icon",
                            document.head.append(t);
                        const r = document.createElement("link");
                        r.rel = "apple-touch-icon",
                            r.href = `/static/${e}/code-192-apple.png`,
                            document.head.append(r);
                        const n = document.createElement("link");
                        n.rel = "manifest",
                            n.href = `/static/${e}/code.webmanifest`,
                            n.crossOrigin = "use-credentials",
                            document.head.append(n)
                    }
            }
                .apply(t, [r, t])) || (e.exports = n)
        },
        216: (e, t, r) => {
            var n;
            void 0 === (n = function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.MapRegistry = t.SetRegistry = void 0;
                class r {
                    constructor() {
                        this.set = new Set
                    }
                    register(e) {
                        return this.set.add(e), {
                            dispose: () => this.set.delete(e)
                        }
                    }
                    [Symbol.iterator]() {
                        return this.set.values()
                    }
                }
                t.SetRegistry = r;
                class n {
                    constructor() {
                        this.map = new Map
                    }
                    register(e, t) {
                        return this.map.set(e, t), {
                            dispose: () => this.map.delete(e)
                        }
                    }
                    get(e) {
                        return this.map.get(e)
                    }
                    [Symbol.iterator]() {
                        return this.map.values()
                    }
                }
                t.MapRegistry = n
            }
                .apply(t, [r, t])) || (e.exports = n)
        },
        427: function (e, t, r) {
            var n, o, i = this && this.__awaiter || function (e, t, r, n) {
                return new (r || (r = Promise))((function (o, i) {
                    function s(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                            t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            n = [r, t, r(777)],
                void 0 === (o = function (e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                        t.LocalStorageURLCallbackProvider = void 0;
                    class n {
                        constructor(e) {
                            this.crypto = e,
                                this._onCallback = new r.Emitter,
                                this.onCallback = this._onCallback.event,
                                this.pendingCallbacks = new Set,
                                this.lastTimeChecked = Date.now(),
                                this.checkCallbacksTimeout = void 0
                        }
                        create(e = {}) {
                            const t = ++n.REQUEST_ID,
                                o = [`vscode-reqid=${t}`];
                            for (const t of n.KEYS) {
                                const r = e[t];
                                r && o.push(`vscode-${t}=${encodeURIComponent(r)}`)
                            }
                            if ("vscode.github-authentication" !== e.authority || "/dummy" !== e.path) {
                                const e = `vscode-dev.url-callbacks[${t}]`;
                                window.localStorage.removeItem(e),
                                    this.pendingCallbacks.add(t),
                                    this.startListening()
                            }
                            return r.URI.parse(window.location.href).with({
                                path: "/callback",
                                query: o.join("&")
                            })
                        }
                        startListening() {
                            if (this.onDidChangeLocalStorageDisposable)
                                return;
                            const e = () => this.onDidChangeLocalStorage();
                            window.addEventListener("storage", e),
                                this.onDidChangeLocalStorageDisposable = {
                                    dispose: () => window.removeEventListener("storage", e)
                                }
                        }
                        stopListening() {
                            var e;
                            null === (e = this.onDidChangeLocalStorageDisposable) || void 0 === e || e.dispose(),
                                this.onDidChangeLocalStorageDisposable = void 0
                        }
                        onDidChangeLocalStorage() {
                            return i(this, void 0, void 0, (function* () {
                                const e = Date.now() - this.lastTimeChecked;
                                e > 1e3 ? this.checkCallbacks() : void 0 === this.checkCallbacksTimeout && (this.checkCallbacksTimeout = setTimeout((() => {
                                    this.checkCallbacksTimeout = void 0,
                                        this.checkCallbacks()
                                }), 1e3 - e))
                            }))
                        }
                        checkCallbacks() {
                            return i(this, void 0, void 0, (function* () {
                                let e;
                                for (const t of this.pendingCallbacks) {
                                    const n = `vscode-dev.url-callbacks[${t}]`,
                                        o = window.localStorage.getItem(n);
                                    if (null !== o) {
                                        try {
                                            this._onCallback.fire(r.URI.revive(JSON.parse(yield this.crypto.decrypt(o))))
                                        } catch (e) {
                                            console.error(e)
                                        }
                                        e = null != e ? e : new Set(this.pendingCallbacks),
                                            e.delete(t),
                                            window.localStorage.removeItem(n)
                                    }
                                }
                                e && (this.pendingCallbacks = e,
                                    0 === this.pendingCallbacks.size && this.stopListening()),
                                    this.lastTimeChecked = Date.now()
                            }))
                        }
                    }
                    t.LocalStorageURLCallbackProvider = n,
                        n.REQUEST_ID = 0,
                        n.KEYS = ["scheme", "query", "authority", "path", "fragment"]
                }
                    .apply(t, n)) || (e.exports = o)
        },
        477: e => {
            e.exports = function e(t, r) {
                if (t && r)
                    return e(t)(r);
                if ("function" != typeof t)
                    throw new TypeError("need wrapper function");
                return Object.keys(t).forEach((function (e) {
                    n[e] = t[e]
                })),
                    n;

                function n() {
                    for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
                        e[r] = arguments[r];
                    var n = t.apply(this, e),
                        o = e[e.length - 1];
                    return "function" == typeof n && n !== o && Object.keys(o).forEach((function (e) {
                        n[e] = o[e]
                    })),
                        n
                }
            }
        },
        777: t => {
            "use strict";
            t.exports = e
        },
        55: e => {
            "use strict";
            e.exports = ["ms-vscode"]
        }
    },
        r = {};

    function n(e) {
        var o = r[e];
        if (void 0 !== o)
            return o.exports;
        var i = r[e] = {
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, n),
            i.exports
    }
    return n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
            t
    },
        n.d = (e, t) => {
            for (var r in t)
                n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        },
        n.g = function () {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        n.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        n(813)
})()));