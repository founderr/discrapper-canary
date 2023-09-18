"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71402], {
        971402: (n, e, t) => {
            t.d(e, {
                Zy: () => f,
                vq: () => h,
                jW: () => p
            });
            var r = t(744564),
                i = t(26468),
                o = t(120415),
                a = t(73105),
                l = t(2590);

            function u(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function c(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    r.forEach((function(e) {
                        u(n, e, t[e])
                    }))
                }
                return n
            }

            function s(n) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: n
                })
            }

            function f(n) {
                (0, t(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(n)
                    }))
                }))
            }

            function h(n, e, t, r) {
                n.stopPropagation();
                if (null == n.currentTarget.contains || n.currentTarget.contains(n.target)) {
                    var u, f, h = 0,
                        p = 0;
                    if ("pageX" in n) {
                        h = n.pageX;
                        p = n.pageY
                    }
                    if (0 === h && 0 === p) {
                        var g, d = null === (g = n.target) || void 0 === g ? void 0 : g.getBoundingClientRect(),
                            v = null != d ? d : {},
                            b = v.left,
                            y = void 0 === b ? 0 : b,
                            m = v.top,
                            k = void 0 === m ? 0 : m,
                            w = v.width,
                            E = void 0 === w ? 0 : w,
                            _ = v.height;
                        h = y + E / 2;
                        p = k + (void 0 === _ ? 0 : _) / 2
                    }
                    var A = {
                        render: e,
                        renderLazy: r,
                        target: null !== (u = n.target) && void 0 !== u ? u : n.currentTarget,
                        rect: new DOMRect(h, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? l.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : l.IlC.APP
                        }, t)
                    };
                    if ((null == t ? void 0 : t.enableSpellCheck) && (0, o.nI)()) var T = (0, a.RD)((function() {
                        T();
                        s(A)
                    }));
                    else {
                        n.preventDefault();
                        s(A)
                    }
                }
            }

            function p(n, e, t) {
                h(n, void 0, t, e)
            }
        },
        73105: (n, e, t) => {
            t.d(e, {
                RD: () => V,
                WA: () => j,
                f5: () => H,
                Gb: () => P,
                Rs: () => K,
                _2: () => F,
                gL: () => O,
                fG: () => x
            });
            var r = t(306472),
                i = t(737264),
                o = t(496486),
                a = t.n(o),
                l = t(809784),
                u = t(296602),
                c = t(384411),
                s = t(72580),
                f = t(310126);

            function h(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(n, r.key, r)
                }
            }
            var p = function() {
                function n(e, t) {
                    ! function(n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = e;
                    this._languageHint = e;
                    this._onChange = t;
                    t(e)
                }
                var e = n.prototype;
                e.process = function(n) {
                    var e = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(t) {
                            if (t.timeRemaining() <= e._minimumTimeRemaining) e._processEnd();
                            else {
                                n.length > 256 && (n = n.slice(0, 256));
                                (function(n, e) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var t = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, i) {
                                            t.detect(n, {
                                                httpHint: e,
                                                encodingHint: "UTF8"
                                            }, (function(n, e) {
                                                null != n ? i(new Error(n.message)) : !e.reliable || e.languages[0].percent < 90 || e.languages[0].score < 500 ? i(new Error("Not enough reliable text.")) : r(e.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(n, e._languageHint).then((function(n) {
                                    e.language = n;
                                    e._processEnd(t.didTimeout)
                                }), (function() {
                                    e._processEnd(t.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                e._processEnd = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    n && this._minimumTimeRemaining++
                };
                ! function(n, e, t) {
                    e && h(n.prototype, e);
                    t && h(n, t)
                }(n, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(n) {
                        if (this._language !== n) {
                            this._language = n;
                            this._onChange(n)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(n) {
                        this._languageHint = n
                    }
                }]);
                return n
            }();
            const g = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function d(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function v(n, e, t, r, i, o, a) {
                try {
                    var l = n[o](a),
                        u = l.value
                } catch (n) {
                    t(n);
                    return
                }
                l.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function b(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = n.apply(e, t);

                        function a(n) {
                            v(o, r, i, a, l, "next", n)
                        }

                        function l(n) {
                            v(o, r, i, a, l, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }

            function y(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(n, r.key, r)
                }
            }

            function m(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (n) {
                            l = !0;
                            i = n
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return d(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(n, e) {
                    var t, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, a)
                                } catch (n) {
                                    o = [6, n];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                w = new u.Z("Spellchecker"),
                E = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function _(n) {
                var e;
                n = null !== (e = g[n]) && void 0 !== e ? e : n;
                var t = (0, i.Q)(n.replace(/[_-]/g, "-"));
                if (null != t && null != t.langtag.language && null != t.langtag.region) {
                    var r = t.langtag,
                        o = r.language,
                        a = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(a.toUpperCase())
                }
                w.error("".concat(n, " is not a valid locale."))
            }
            var A = function() {
                    function n(e) {
                        var t = this;
                        ! function(n, e) {
                            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = m(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var a = this.getAvailableLanguages(e);
                        this.languageDetector = new p(i, (function(n) {
                            var r = "".concat(n, "-").concat(t.regionPreference);
                            if (-1 !== e.indexOf(r)) t.setLocale(r);
                            else {
                                var o, l = null !== (o = a[n]) && void 0 !== o ? o : g[i];
                                null != l && t.setLocale(l)
                            }
                        }));
                        E.on("spellcheck-result", (function(n, e) {
                            t.misspelledWord = null != n ? n : "";
                            t.corrections = null != e ? e : []
                        }))
                    }
                    var e = n.prototype;
                    e.setLearnedWords = function(n) {
                        E.setLearnedWords(n)
                    };
                    e.setLocale = function(n) {
                        var e;
                        null === (e = E.setLocale(n)) || void 0 === e || e.then((function(e) {
                            w.info("Switching to ".concat(n), e ? "(available)" : "(unavailable)")
                        }))
                    };
                    e.setAppLocale = function(n) {
                        this.regionPreference = n.split("-")[1]
                    };
                    e.detectLanguage = function(n) {
                        this.enabled && this.languageDetector.process(n)
                    };
                    e.getAvailableLanguages = function(n) {
                        var e = {};
                        n.forEach((function(n) {
                            var t, r = m(n.split("-"), 1)[0];
                            e[r] = null !== (t = e[r]) && void 0 !== t ? t : n
                        }));
                        return e
                    };
                    e.isMisspelled = function(n, e) {
                        return "" !== this.misspelledWord && n === this.misspelledWord
                    };
                    e.getCorrectionsForMisspelling = function(n, e) {
                        return this.isMisspelled(n, e) ? this.corrections : []
                    };
                    e.replaceMisspelling = function(n) {
                        E.replaceMisspelling(n)
                    };
                    ! function(n, e, t) {
                        e && y(n.prototype, e);
                        t && y(n, t)
                    }(n, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(n) {
                            this._enabled = n
                        }
                    }]);
                    return n
                }(),
                T = a().debounce((function(n, e) {
                    var t = function(n) {
                        if (null == n) return null;
                        if ((0, l.k)(n, HTMLInputElement) || (0, l.k)(n, HTMLTextAreaElement)) return n.value;
                        if ((0, l.k)(n) && n.hasAttribute("contenteditable")) return n.textContent
                    }(e);
                    null != t && n.detectLanguage(t)
                }), 250);

            function N(n) {
                null != document.body && document.body.addEventListener("beforeinput", (function(e) {
                    return T(n, e.target)
                }), !0)
            }

            function L() {
                return (L = b((function() {
                    var n, e, t, r;
                    return k(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, E.getAvailableDictionaries()];
                            case 1:
                                e = null !== (n = i.sent()) && void 0 !== n ? n : [];
                                t = e.map(_).filter(s.lm);
                                N(r = new A(t));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var S = t(120415);

            function C(n, e, t, r, i, o, a) {
                try {
                    var l = n[o](a),
                        u = l.value
                } catch (n) {
                    t(n);
                    return
                }
                l.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function I(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = n.apply(e, t);

                        function a(n) {
                            C(o, r, i, a, l, "next", n)
                        }

                        function l(n) {
                            C(o, r, i, a, l, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }
            var R = function(n, e) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = e.call(n, a)
                            } catch (n) {
                                o = [6, n];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function M() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function P() {
                return (0, S.nI)() && M()
            }
            var Z = P() ? function() {
                return L.apply(this, arguments)
            }() : null;

            function O(n) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = I((function(n) {
                    var e;
                    return R(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Z];
                            case 1:
                                if (null == (e = t.sent())) return [2];
                                e.enabled = n;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function x(n) {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = I((function(n) {
                    var e;
                    return R(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Z];
                            case 1:
                                if (null == (e = t.sent())) return [2];
                                e.setLearnedWords(n);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function H(n) {
                return D.apply(this, arguments)
            }

            function D() {
                D = I((function(n) {
                    var e, t, r = arguments;
                    return R(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                e = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, Z];
                            case 1:
                                return null == (t = i.sent()) ? [2, !1] : [2, t.isMisspelled(n, e)]
                        }
                    }))
                }));
                return D.apply(this, arguments)
            }

            function j(n) {
                return B.apply(this, arguments)
            }

            function B() {
                B = I((function(n) {
                    var e, t, r, i = arguments;
                    return R(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                e = i.length > 1 && void 0 !== i[1] && i[1], t = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, Z];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(n, e).slice(0, t)]
                        }
                    }))
                }));
                return B.apply(this, arguments)
            }

            function K(n) {
                return z.apply(this, arguments)
            }

            function z() {
                return (z = I((function(n) {
                    var e;
                    return R(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Z];
                            case 1:
                                if (null == (e = t.sent())) return [2];
                                e.replaceMisspelling(n);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function F(n) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = I((function(n) {
                    var e;
                    return R(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Z];
                            case 1:
                                if (null == (e = t.sent())) return [2];
                                e.setAppLocale(n);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(n) {
                if (!M()) return function() {};
                var e = r.Z.spellCheck.on("spellcheck-result", n);
                return null != e ? e : function() {}
            }
        }
    }
]);
//# sourceMappingURL=35dcdbcca7c51cf6b887.js.map