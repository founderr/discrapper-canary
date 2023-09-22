"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7358, 88110, 42643, 71402], {
        737264: e => {
            e.exports.Q = function(e) {
                var n, t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var r = null,
                    o = [];
                if (t[2]) {
                    r = (n = t[2].split("-")).shift();
                    o = n
                }
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var u = [];
                if (t[6]) {
                    (n = t[6].split("-")).shift();
                    for (var a, l = []; n.length;) {
                        var c = n.shift();
                        if (1 === c.length)
                            if (a) {
                                u.push({
                                    singleton: a,
                                    extension: l
                                });
                                a = c;
                                l = []
                            } else a = c;
                        else l.push(c)
                    }
                    u.push({
                        singleton: a,
                        extension: l
                    })
                }
                var s = [];
                if (t[7]) {
                    (s = t[7].split("-")).shift();
                    s.shift()
                }
                var f = [];
                t[8] && (f = t[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: o
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: u,
                        privateuse: s
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        444020: e => {
            var n = "%[a-f0-9]{2}",
                t = new RegExp("(" + n + ")|([^%]+?)", "gi"),
                r = new RegExp("(" + n + ")+", "gi");

            function o(e, n) {
                try {
                    return [decodeURIComponent(e.join(""))]
                } catch (e) {}
                if (1 === e.length) return e;
                n = n || 1;
                var t = e.slice(0, n),
                    r = e.slice(n);
                return Array.prototype.concat.call([], o(t), o(r))
            }

            function i(e) {
                try {
                    return decodeURIComponent(e)
                } catch (i) {
                    for (var n = e.match(t) || [], r = 1; r < n.length; r++) n = (e = o(n, r).join("")).match(t) || [];
                    return e
                }
            }
            e.exports = function(e) {
                if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    e = e.replace(/\+/g, " ");
                    return decodeURIComponent(e)
                } catch (n) {
                    return function(e) {
                        for (var n = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, t = r.exec(e); t;) {
                            try {
                                n[t[0]] = decodeURIComponent(t[0])
                            } catch (e) {
                                var o = i(t[0]);
                                o !== t[0] && (n[t[0]] = o)
                            }
                            t = r.exec(e)
                        }
                        n["%C2"] = "�";
                        for (var u = Object.keys(n), a = 0; a < u.length; a++) {
                            var l = u[a];
                            e = e.replace(new RegExp(l, "g"), n[l])
                        }
                        return e
                    }(e)
                }
            }
        },
        727418: e => {
            var n = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;

            function o(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    e[5] = "de";
                    if ("5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
                    if ("0123456789" !== Object.getOwnPropertyNames(n).map((function(e) {
                            return n[e]
                        })).join("")) return !1;
                    var r = {};
                    "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    }));
                    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, i) {
                for (var u, a, l = o(e), c = 1; c < arguments.length; c++) {
                    u = Object(arguments[c]);
                    for (var s in u) t.call(u, s) && (l[s] = u[s]);
                    if (n) {
                        a = n(u);
                        for (var f = 0; f < a.length; f++) r.call(u, a[f]) && (l[a[f]] = u[a[f]])
                    }
                }
                return l
            }
        },
        517563: (e, n, t) => {
            var r = t(970610),
                o = t(727418),
                i = t(444020);

            function u(e, n) {
                return n.encode ? n.strict ? r(e) : encodeURIComponent(e) : e
            }

            function a(e) {
                return Array.isArray(e) ? e.sort() : "object" == typeof e ? a(Object.keys(e)).sort((function(e, n) {
                    return Number(e) - Number(n)
                })).map((function(n) {
                    return e[n]
                })) : e
            }
            n.extract = function(e) {
                return e.split("?")[1] || ""
            };
            n.parse = function(e, n) {
                var t = function(e) {
                        var n;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, t, r) {
                                    n = /\[(\d*)\]$/.exec(e);
                                    e = e.replace(/\[\d*\]$/, "");
                                    if (n) {
                                        void 0 === r[e] && (r[e] = {});
                                        r[e][n[1]] = t
                                    } else r[e] = t
                                };
                            case "bracket":
                                return function(e, t, r) {
                                    n = /(\[\])$/.exec(e);
                                    e = e.replace(/\[\]$/, "");
                                    n ? void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = [t] : r[e] = t
                                };
                            default:
                                return function(e, n, t) {
                                    void 0 !== t[e] ? t[e] = [].concat(t[e], n) : t[e] = n
                                }
                        }
                    }(n = o({
                        arrayFormat: "none"
                    }, n)),
                    r = Object.create(null);
                if ("string" != typeof e) return r;
                if (!(e = e.trim().replace(/^(\?|#|&)/, ""))) return r;
                e.split("&").forEach((function(e) {
                    var n = e.replace(/\+/g, " ").split("="),
                        o = n.shift(),
                        u = n.length > 0 ? n.join("=") : void 0;
                    u = void 0 === u ? null : i(u);
                    t(i(o), u, r)
                }));
                return Object.keys(r).sort().reduce((function(e, n) {
                    var t = r[n];
                    Boolean(t) && "object" == typeof t && !Array.isArray(t) ? e[n] = a(t) : e[n] = t;
                    return e
                }), Object.create(null))
            };
            n.stringify = function(e, n) {
                var t = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(n, t, r) {
                                return null === t ? [u(n, e), "[", r, "]"].join("") : [u(n, e), "[", u(r, e), "]=", u(t, e)].join("")
                            };
                        case "bracket":
                            return function(n, t) {
                                return null === t ? u(n, e) : [u(n, e), "[]=", u(t, e)].join("")
                            };
                        default:
                            return function(n, t) {
                                return null === t ? u(n, e) : [u(n, e), "=", u(t, e)].join("")
                            }
                    }
                }(n = o({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, n));
                return e ? Object.keys(e).sort().map((function(r) {
                    var o = e[r];
                    if (void 0 === o) return "";
                    if (null === o) return u(r, n);
                    if (Array.isArray(o)) {
                        var i = [];
                        o.slice().forEach((function(e) {
                            void 0 !== e && i.push(t(r, e, i.length))
                        }));
                        return i.join("&")
                    }
                    return u(r, n) + "=" + u(o, n)
                })).filter((function(e) {
                    return e.length > 0
                })).join("&") : ""
            }
        },
        970610: e => {
            e.exports = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }
        },
        971402: (e, n, t) => {
            t.d(n, {
                Zy: () => f,
                vq: () => _,
                jW: () => p
            });
            var r = t(744564),
                o = t(26468),
                i = t(120415),
                u = t(73105),
                a = t(2590);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        l(e, n, t[n])
                    }))
                }
                return e
            }

            function s(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function f(e) {
                (0, t(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function _(e, n, t, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var l, f, _ = 0,
                        p = 0;
                    if ("pageX" in e) {
                        _ = e.pageX;
                        p = e.pageY
                    }
                    if (0 === _ && 0 === p) {
                        var E, O = null === (E = e.target) || void 0 === E ? void 0 : E.getBoundingClientRect(),
                            I = null != O ? O : {},
                            S = I.left,
                            T = void 0 === S ? 0 : S,
                            d = I.top,
                            N = void 0 === d ? 0 : d,
                            y = I.width,
                            h = void 0 === y ? 0 : y,
                            R = I.height;
                        _ = T + h / 2;
                        p = N + (void 0 === R ? 0 : R) / 2
                    }
                    var b = {
                        render: n,
                        renderLazy: r,
                        target: null !== (l = e.target) && void 0 !== l ? l : e.currentTarget,
                        rect: new DOMRect(_, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (f = (0, o.GB)()) && void 0 !== f ? f : a.IlC.APP
                        }, t)
                    };
                    if ((null == t ? void 0 : t.enableSpellCheck) && (0, i.nI)()) var A = (0, u.RD)((function() {
                        A();
                        s(b)
                    }));
                    else {
                        e.preventDefault();
                        s(b)
                    }
                }
            }

            function p(e, n, t) {
                _(e, void 0, t, n)
            }
        },
        735885: (e, n, t) => {
            t.d(n, {
                jN: () => o,
                xf: () => i,
                Ou: () => u
            });
            var r = t(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        810978: (e, n, t) => {
            t.d(n, {
                GZ: () => E,
                Gn: () => I,
                Y2: () => S,
                mE: () => T
            });
            var r = t(281110),
                o = t(744564),
                i = t(973889),
                u = t(615796),
                a = t(264628),
                l = t(673679),
                c = t(2590),
                s = t(203600);

            function f(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function _(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            f(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function E(e, n, t, r, o) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = _((function(e, n, t, s, f) {
                    var _, E, O, I;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                _ = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                E = {};
                                null != n && (E.country_code = n);
                                null != t && (E.payment_source_id = t);
                                null != s && (E.include_unpublished = s);
                                null != f && (E.revenue_surface = f);
                                _.query = E;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(_)];
                            case 4:
                                O = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: O.body
                                });
                                return [3, 6];
                            case 5:
                                I = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(I);
                                throw new i.Z(I);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e, n) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return E(e, n)
                })))
            }

            function S(e, n, t) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return E(r, e, n, void 0, t)
                })))
            }

            function T() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        734691: (e, n, t) => {
            t.d(n, {
                Z: () => S
            });
            var r = t(281110),
                o = t(630631),
                i = t(744564),
                u = t(223219),
                a = t(652591),
                l = t(775173),
                c = t(488110),
                s = t(120415),
                f = t(735885),
                _ = t(2590),
                p = t(473708);

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function O(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        E(e, n, t[n])
                    }))
                }
                return e
            }

            function I(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            const S = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(O({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: e,
                        subsection: n
                    }, t));
                    (0, f.jN)(_.S9g.USER_SETTINGS)
                },
                init: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        t = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(O({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: n
                    }, t))
                },
                close: function() {
                    var e = u.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(O({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: n
                    }, t))
                },
                clearSubsection: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
                    })
                },
                submitComplete: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(e, n) {
                    var t = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var u = e.username,
                        f = e.email,
                        E = e.emailToken,
                        S = e.password,
                        T = e.avatar,
                        d = e.newPassword,
                        N = e.discriminator,
                        y = n.close;
                    return (0, c.Z)((function(e) {
                        var n = I(O({
                                username: u,
                                email: f,
                                email_token: E,
                                password: S,
                                avatar: T,
                                new_password: d
                            }, e), {
                                discriminator: null != N && "" !== N ? N : void 0
                            }),
                            t = o.Z.get(_.JkL),
                            i = (0, s.xJ)();
                        if (null != i && null != t) {
                            n.push_provider = i;
                            n.push_token = t
                        }
                        var a = o.Z.get(_.scU);
                        if (null != _.mvA && null != a) {
                            n.push_voip_provider = _.mvA;
                            n.push_voip_token = a
                        }
                        return r.ZP.patch({
                            url: _.ANM.ME,
                            oldFormErrors: !0,
                            body: n
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: p.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var n = e.body,
                            r = n.token;
                        a.default.track(_.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, l.xR)(n.avatar)
                        });
                        delete n.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: n.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: n
                        });
                        null != d && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: n,
                            newPassword: d
                        });
                        null != S && null != d && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: n.id
                        });
                        y ? t.close() : t.submitComplete();
                        return e
                    }), (function(e) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        919244: (e, n, t) => {
            t.d(n, {
                Z: () => T
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                u = t.n(i),
                a = t(882723),
                l = t(473708),
                c = t(775823),
                s = t.n(c);

            function f(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function p(e, n) {
                return !n || "object" !== O(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function E(e, n) {
                E = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return E(e, n)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = _(e);
                    if (n) {
                        var o = _(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return p(this, t)
                }
            }
            var S = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && E(e, n)
                }(t, e);
                var n = I(t);

                function t() {
                    f(this, t);
                    var e;
                    (e = n.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(n) {
                        e._input = n
                    };
                    e.getLabelText = function() {
                        var n;
                        return null !== (n = e.props.label) && void 0 !== n ? n : e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (n = e.props.placeholder) && void 0 !== n ? n : e.getSupportedCodeTypes();
                        var n
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var n = e.props.onRetry;
                        null == n || n().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(n) {
                        n.preventDefault();
                        var t = e.props,
                            r = t.handleSubmit,
                            o = t.onError;
                        r(e.state.code).catch((function(n) {
                            if (null != n.body) {
                                null == o || o(n.body);
                                n.body.message && e.setState({
                                    errorMessage: n.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var n = e.props,
                            t = n.onClose,
                            r = n.handleEarlyClose;
                        t();
                        null == r || r()
                    };
                    e.handleCodeChange = function(n) {
                        e.setState({
                            code: n
                        })
                    };
                    return e
                }
                t.prototype.render = function() {
                    var e, n = this.props,
                        t = n.title,
                        i = n.actionText,
                        c = n.children,
                        f = n.error,
                        _ = n.isLoading,
                        p = n.maxLength,
                        E = n.transitionState,
                        O = n.helpMessage,
                        I = n.retryPrompt,
                        S = n.retrySuccessMessage,
                        T = this.state,
                        d = T.code,
                        N = T.errorMessage,
                        y = T.retrySuccess,
                        h = o.Children.count(c) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        R = null != I ? (0, r.jsxs)(a.Text, {
                            className: u()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: u()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: I
                                })
                            })]
                        }) : null,
                        b = y ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: S
                            })
                        }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != O ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: O
                                }) : null, h, b, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: d,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : N
                                    }) : null, R]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0,
                                    r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === d.length,
                                    children: null != i ? i : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return t
            }(o.PureComponent);
            S.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const T = S
        },
        142643: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r;
            ! function(e) {
                e.CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px";
                e.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px";
                e.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px";
                e.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px";
                e.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px";
                e.FOLDER_ITEM_ANIMATION_DURATION = "150ms";
                e.FOLDER_ITEM_GUILD_ICON_SIZE = "48px";
                e.GUILD_TOOLTIP_ICON_SIZE = "20px";
                e.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px";
                e.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px";
                e.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms";
                e.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px";
                e.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px";
                e.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px";
                e.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px";
                e.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px";
                e.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px";
                e.USER_BANNER_BANNER_HEIGHT_POMELO = "64px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px";
                e.USER_BANNER_BANNER_HEIGHT_PANEL = "120px";
                e.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px";
                e.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px";
                e.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px";
                e.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px";
                e.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px";
                e.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px";
                e.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px";
                e.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px";
                e.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px";
                e.LIVE_INDICATOR_BORDER_RADIUS = "16px";
                e.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px";
                e.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px";
                e.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px";
                e.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px";
                e.GUILD_COUNT_SMALL_ICON_SIZE = "16px";
                e.GUILD_COUNT_LARGE_ICON_SIZE = "20px";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px";
                e.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px";
                e.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px";
                e.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))";
                e.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px";
                e.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px";
                e.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px";
                e.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px";
                e.COLLECTION_LIST_CARD_GAP = "16px";
                e.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px";
                e.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px";
                e.ROLE_ICON_UPLOADER_ICON_SIZE = "24px";
                e.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px";
                e.GAME_LIST_ROW_MIN_HEIGHT = "62px";
                e.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms";
                e.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px";
                e.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px";
                e.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px"
            }(r || (r = {}));
            const o = r
        },
        924326: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(667294);

            function o() {
                var e = r.useRef(null);
                null === e.current && (e.current = new AbortController);
                r.useEffect((function() {
                    return function() {
                        var n;
                        null === (n = e.current) || void 0 === n || n.abort()
                    }
                }), []);
                return e.current.signal
            }
        },
        272200: (e, n, t) => {
            t.d(n, {
                Qi: () => r,
                iw: () => o,
                Kw: () => i,
                Vh: () => u,
                ub: () => a,
                bB: () => l
            });
            var r, o, i, u, a, l;
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                e[e.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                e[e.BOT = 3] = "BOT";
                e[e.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(o || (o = {}));
            ! function(e) {
                e[e.ROLE = 1] = "ROLE";
                e[e.USER = 2] = "USER";
                e[e.CHANNEL = 3] = "CHANNEL"
            }(i || (i = {}));
            ! function(e) {
                e.DISCOVERY = "discovery";
                e.SUGGESTION = "suggestion";
                e.MENTION = "mention";
                e.PASTE = "paste";
                e.RECALL = "recall";
                e.POPULAR_COMMANDS = "popular_commands";
                e.MJ_CHAT_BAR = "mj_chat_bar";
                e.QUERY = "query"
            }(u || (u = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(a || (a = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        248046: (e, n, t) => {
            t.d(n, {
                Z8: () => A,
                nG: () => P,
                BH: () => g,
                Dd: () => v,
                $z: () => L,
                bD: () => M,
                nT: () => w,
                oK: () => D,
                BO: () => U,
                Ft: () => j,
                D7: () => x,
                tI: () => H,
                X0: () => F
            });
            var r = t(224736),
                o = t.n(r),
                i = t(441143),
                u = t.n(i),
                a = t(496486),
                l = t.n(a),
                c = t(940060),
                s = t(73904),
                f = t(734394),
                _ = t(948832),
                p = t(382060),
                E = t(284610),
                O = t(682776),
                I = t(272200),
                S = t(127624),
                T = t(2590),
                d = t(520453);

            function N(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        y(e, n, t[n])
                    }))
                }
                return e
            }

            function R(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return N(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                var n, t = e.rootCommand,
                    r = e.command,
                    o = e.applicationId,
                    i = e.subCommandPath,
                    u = e.useKeyedPermissions;
                if (null != t.permissions && t.permissions.length > 0)
                    if (u) n = (0, f.tk)(t.permissions);
                    else {
                        n = {};
                        t.permissions.forEach((function(e) {
                            n[e.id] = e
                        }))
                    } var a, l, _, p = (null != i ? i : []).map((function(e) {
                        return e.name
                    })),
                    E = (null != i ? i : []).map((function(e) {
                        return e.displayName
                    }));
                return {
                    version: t.version,
                    guildId: t.guild_id,
                    id: [t.id].concat(b(p)).join(S.oQ),
                    name: [t.name].concat(b(p)).join(" "),
                    serverLocalizedName: r.name_localized,
                    applicationId: o,
                    type: null !== (a = t.type) && void 0 !== a ? a : s.yU.CHAT,
                    inputType: I.iw.BOT,
                    description: r.description,
                    options: C(r.options),
                    rootCommand: t,
                    subCommandPath: i,
                    defaultMemberPermissions: null == t.default_member_permissions ? void 0 : c.Z.deserialize(t.default_member_permissions),
                    dmPermission: t.dm_permission,
                    permissions: n,
                    displayName: [null !== (l = t.name_localized) && void 0 !== l ? l : t.name].concat(b(E)).join(" "),
                    displayDescription: null !== (_ = r.description_localized) && void 0 !== _ ? _ : r.description,
                    nsfw: t.nsfw,
                    contexts: t.contexts,
                    integration_types: t.integration_types
                }
            }

            function C(e) {
                return null == e ? void 0 : e.map((function(e) {
                    var n, t, r, o = R(h({}, e), {
                        choices: (r = e.choices, null == r ? void 0 : r.map((function(e) {
                            var n;
                            return R(h({}, e), {
                                displayName: null !== (n = e.name_localized) && void 0 !== n ? n : e.name
                            })
                        }))),
                        options: C(e.options),
                        serverLocalizedName: e.name_localized,
                        displayName: null !== (n = e.name_localized) && void 0 !== n ? n : e.name,
                        displayDescription: null !== (t = e.description_localized) && void 0 !== t ? t : e.description
                    });
                    return e.type === s.jw.CHANNEL && "channel_types" in e ? R(h({}, o), {
                        channelTypes: e.channel_types
                    }) : e.type !== s.jw.NUMBER && e.type !== s.jw.INTEGER || !("min_value" in e) && !("max_value" in e) ? e.type === s.jw.STRING && ("min_length" in e || "max_length" in e) ? R(h({}, o), {
                        minLength: e.min_length,
                        maxLength: e.max_length
                    }) : o : R(h({}, o), {
                        minValue: e.min_value,
                        maxValue: e.max_value
                    })
                }))
            }

            function m(e) {
                var n = e.rootCommand,
                    t = e.command,
                    r = e.applicationId,
                    o = e.subCommandPath,
                    i = e.useKeyedPermissions;
                if (t.hasOwnProperty("id")) {
                    if (null == t.options || 0 === t.options.length) return [A({
                        rootCommand: n,
                        command: t,
                        applicationId: r,
                        subCommandPath: o,
                        useKeyedPermissions: i
                    })]
                } else if (t.type !== s.jw.SUB_COMMAND && t.type !== s.jw.SUB_COMMAND_GROUP && (null == t.options || 0 === t.options.length)) return [A({
                    rootCommand: n,
                    command: t,
                    applicationId: r,
                    subCommandPath: o,
                    useKeyedPermissions: i
                })];
                var u = [];
                if (null == t.options) return u;
                for (var a = t.options.filter((function(e) {
                        return e.type === s.jw.SUB_COMMAND_GROUP
                    })), l = 0; l < a.length; l++) {
                    var c, f;
                    (c = u).push.apply(c, b(m({
                        rootCommand: n,
                        command: a[l],
                        applicationId: r,
                        subCommandPath: (null != o ? o : []).concat([{
                            name: a[l].name,
                            type: s.jw.SUB_COMMAND_GROUP,
                            displayName: null !== (f = a[l].name_localized) && void 0 !== f ? f : a[l].name
                        }]),
                        useKeyedPermissions: i
                    })))
                }
                for (var _ = t.options.filter((function(e) {
                        return e.type === s.jw.SUB_COMMAND
                    })), p = 0; p < _.length; p++) {
                    var E;
                    u.push(A({
                        rootCommand: n,
                        command: _[p],
                        applicationId: r,
                        subCommandPath: (null != o ? o : []).concat([{
                            name: _[p].name,
                            type: s.jw.SUB_COMMAND,
                            displayName: null !== (E = _[p].name_localized) && void 0 !== E ? E : _[p].name
                        }]),
                        useKeyedPermissions: i
                    }))
                }
                0 === a.length && 0 === _.length && u.push(A({
                    rootCommand: n,
                    command: t,
                    applicationId: r,
                    subCommandPath: o,
                    useKeyedPermissions: i
                }));
                return u
            }

            function P(e, n) {
                return l().flatMap(e, (function(e) {
                    u()(null != e.id, "Missing command id");
                    return m({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                        subCommandPath: void 0,
                        useKeyedPermissions: n
                    })
                }))
            }

            function g(e) {
                return T.Xyh.test(e.trim())
            }

            function v(e, n, t, r) {
                var o = [];
                l()(e).forEach((function(e) {
                    n.test(e.displayName) && (null == e.predicate || e.predicate(t)) && o.push(e)
                }));
                return o.slice(0, r)
            }

            function L(e) {
                var n = e.type === s.jw.STRING,
                    t = e.type === s.jw.CHANNEL,
                    r = e.type === s.jw.USER || e.type === s.jw.MENTIONABLE,
                    o = e.type === s.jw.ROLE || e.type === s.jw.MENTIONABLE;
                return {
                    canMentionEveryone: n || o,
                    canMentionHere: n,
                    canMentionChannels: n || t,
                    canMentionUsers: n || r,
                    canMentionRoles: n || o,
                    canMentionAnyGuildUser: r,
                    canMentionNonMentionableRoles: o
                }
            }

            function M(e) {
                return o()(e).subtract(1).toString()
            }

            function w(e, n, t, r) {
                return !!D(O.Z, _.Z, !1, e) && (e.isPrivate() && t > 0 || (null !== (o = null == r ? void 0 : r[n]) && void 0 !== o ? o : 0) > 0);
                var o
            }
            var D = function(e, n, t, r) {
                    return !t && (r.isMultiUserDM() ? n.getIntegrations(r.id).length > 0 : r.isDM() ? !r.isSystemDM() && (null != r.rawRecipients.find((function(e) {
                        return e.bot
                    })) || n.getIntegrations(r.id).length > 0) : !r.isArchivedLockedThread() && (!!(0, p.Em)(r.type) && e.can(c.Z.combine(d.Pl.USE_APPLICATION_COMMANDS, d.Pl.SEND_MESSAGES), r)))
                },
                U = c.Z.deserialize(0);

            function j(e) {
                var n = e.PermissionStore,
                    t = e.guild,
                    r = e.selfMember,
                    o = e.applicationLevelPermissions,
                    i = e.commandLevelPermissions,
                    u = e.defaultMemberPermissions;
                if (t.ownerId === r.userId || n.can(d.Pl.ADMINISTRATOR, t)) return !0;
                var a = t.id;
                if (null != i) {
                    var l = G(r, a, i);
                    if ("boolean" == typeof l) return l
                }
                var s = G(r, a, o);
                return !("boolean" == typeof s && !s) && (null == u || !c.Z.equals(u, U) && n.can(u, t))
            }

            function G(e, n, t) {
                var r = t[(0, f.rE)(e.userId, I.Kw.USER)];
                if (null != r) return r.permission;
                var o = !1,
                    i = !0,
                    u = !1,
                    a = void 0;
                try {
                    for (var l, c = e.roles[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                        var s = l.value,
                            _ = t[(0, f.rE)(s, I.Kw.ROLE)];
                        if (null != _) {
                            o = !0;
                            if (_.permission) return !0
                        }
                    }
                } catch (e) {
                    u = !0;
                    a = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (u) throw a
                    }
                }
                if (o) return !1;
                var p = t[(0, f.rE)(n, I.Kw.ROLE)];
                return null != p ? p.permission : null
            }

            function x(e) {
                switch (e) {
                    case I.bB.CHAT:
                        return E.d.ChannelMessage;
                    case I.bB.APPLICATION_LAUNCHER:
                        return E.d.ApplicationLauncherCommand
                }
            }

            function H(e) {
                if (null != e) return e.id === S.bi.BUILT_IN ? I.ub.BUILT_IN : e.id === S.bi.FRECENCY ? I.ub.FRECENCY : I.ub.APP
            }

            function F(e) {
                var n, t;
                return {
                    type: I.Qi.APPLICATION,
                    id: e.id,
                    name: null !== (t = null == e || null === (n = e.bot) || void 0 === n ? void 0 : n.username) && void 0 !== t ? t : e.name,
                    icon: e.icon,
                    application: e
                }
            }
        },
        165586: (e, n, t) => {
            t.d(n, {
                LY: () => r,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => _,
                no: () => p,
                ND: () => E,
                WC: () => I,
                z8: () => S,
                km: () => d,
                k0: () => N,
                af: () => y
            });
            var r, o, i, u, a = t(2590),
                l = t(203600),
                c = t(473708);

            function s(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(o || (o = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function _(e) {
                switch (e) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var p = (s(u = {}, i.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), s(u, i.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }]), s(u, i.PRESET_CUSTOM, []), u),
                E = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function O(e, n) {
                return {
                    value: e,
                    get label() {
                        return null != n ? n() : e
                    }
                }
            }
            var I = [O(r.RESOLUTION_720), O(r.RESOLUTION_1080), O(r.RESOLUTION_1440), O(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                S = [O(r.RESOLUTION_720), O(r.RESOLUTION_1080), O(r.RESOLUTION_1440)],
                T = function(e) {
                    return "".concat(e, "p")
                },
                d = [O(r.RESOLUTION_480, (function() {
                    return T(r.RESOLUTION_480)
                })), O(r.RESOLUTION_720, (function() {
                    return T(r.RESOLUTION_720)
                })), O(r.RESOLUTION_1080, (function() {
                    return T(r.RESOLUTION_1080)
                })), O(r.RESOLUTION_1440, (function() {
                    return T(r.RESOLUTION_1440)
                })), O(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                N = [O(o.FPS_15), O(o.FPS_30), O(o.FPS_60)],
                y = [O(o.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), O(o.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), O(o.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        773411: (e, n, t) => {
            t.d(n, {
                N2: () => f,
                YM: () => _,
                Dx: () => p,
                jD: () => E,
                bO: () => O,
                Xp: () => I,
                fV: () => S
            });
            var r = t(202351),
                o = t(747820),
                i = t(260561),
                u = t(339432),
                a = t(5544),
                l = t(567403),
                c = t(2590);

            function s(e, n, t) {
                return n.getChannels(e)[a.sH].filter((function(n) {
                    var r = n.channel;
                    return !t.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var n = (0, r.e7)([a.ZP, o.Z], (function() {
                    return null != e && s(e.id, a.ZP, o.Z)
                }));
                return !__OVERLAY__ && (!!n && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function _(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var n = l.Z.getGuild(e);
                return null != n && (!!s(e, a.ZP, o.Z) && n.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0, i.B)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                E = (0, i.B)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                O = (0, i.B)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                }),
                I = ((0, i.B)({
                    kind: "user",
                    id: "2022-08_home_drawer_autoclose",
                    label: "Auto close home drawer",
                    defaultConfig: {
                        autoCloseDrawer: !1,
                        animation: !1,
                        delay: null
                    },
                    treatments: [{
                        id: 1,
                        label: "normal animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: null
                        }
                    }, {
                        id: 2,
                        label: "no animate",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !1,
                            delay: null
                        }
                    }, {
                        id: 3,
                        label: "150 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 150
                        }
                    }, {
                        id: 4,
                        label: "250 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 250
                        }
                    }, {
                        id: 5,
                        label: "500 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 500
                        }
                    }]
                }), (0, i.B)({
                    kind: "user",
                    id: "2022-09_welcome_header",
                    label: "Show welcome header for home",
                    defaultConfig: {
                        showWelcomeHeader: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show welcome header",
                        config: {
                            showWelcomeHeader: !0
                        }
                    }]
                }), (0, i.B)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                })),
                S = (0, i.B)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        734394: (e, n, t) => {
            t.d(n, {
                gw: () => o,
                rE: () => i,
                tk: () => u
            });
            var r = t(73904);
            t(272200);

            function o(e, n) {
                return e === r.yU.CHAT ? "/" + n : n
            }

            function i(e, n) {
                return "".concat(e, ":").concat(n)
            }

            function u(e) {
                return Object.fromEntries(e.map((function(e) {
                    return [i(e.id, e.type), e]
                })))
            }
        },
        948832: (e, n, t) => {
            t.d(n, {
                M: () => p,
                Z: () => b
            });
            var r = t(202351),
                o = t(744564),
                i = t(451936),
                u = t(223397);

            function a(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function l(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e, n) {
                return !n || "object" !== E(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function f(e, n) {
                f = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return f(e, n)
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return a(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p, E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = c(e);
                    if (n) {
                        var o = c(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return s(this, t)
                }
            }! function(e) {
                e[e.NOT_FETCHED = 0] = "NOT_FETCHED";
                e[e.FETCHING = 1] = "FETCHING";
                e[e.FETCHED = 2] = "FETCHED";
                e[e.FETCH_FAILED = 3] = "FETCH_FAILED"
            }(p || (p = {}));
            var I = new Map,
                S = new Map,
                T = [],
                d = p.NOT_FETCHED,
                N = [],
                y = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && f(e, n)
                    }(t, e);
                    var n = O(t);

                    function t() {
                        l(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.getIntegrations = function(e) {
                        var n;
                        return null !== (n = I.get(e)) && void 0 !== n ? n : N
                    };
                    r.getIntegration = function(e, n) {
                        var t;
                        return null === (t = I.get(e)) || void 0 === t ? void 0 : t.find((function(e) {
                            return e.application.id === n
                        }))
                    };
                    r.getAllIntegrations = function() {
                        return I
                    };
                    r.getIntegrationsFetchState = function(e) {
                        var n;
                        return null !== (n = S.get(e)) && void 0 !== n ? n : p.NOT_FETCHED
                    };
                    r.getApplicationsShelfFetchState = function() {
                        return d
                    };
                    r.getApplicationsShelf = function() {
                        return T
                    };
                    r.__getLocalVars = function() {
                        return {
                            integrationsByChannel: I,
                            integrationsByChannelFetchState: S,
                            applicationsShelf: T,
                            applicationsShelfFetchState: d,
                            EMPTY: N,
                            store: R
                        }
                    };
                    return t
                }(r.ZP.Store);
            y.displayName = "PrivateChannelIntegrationStore";

            function h(e) {
                return e.sort((function(e, n) {
                    return e.application.name.localeCompare(n.application.name)
                }))
            }
            var R = new y(o.Z, {
                LOGOUT: function() {
                    I.clear()
                },
                CONNECTION_OPEN: function() {
                    I.clear();
                    S.clear()
                },
                CHANNEL_SELECT: function(e) {
                    var n = e.channelId;
                    if (null == n || S.get(n) !== p.FETCH_FAILED) return !1;
                    S.set(n, p.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START: function() {
                    d = p.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS: function(e) {
                    var n = e.applications;
                    T = n.map(i.Z.createFromServer).sort((function(e, n) {
                        return e.name.localeCompare(n.name)
                    }));
                    d = p.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL: function() {
                    d = p.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START: function(e) {
                    var n = e.channelId;
                    I.set(n, null);
                    S.set(n, p.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.integrations;
                    I.set(n, h(t.map(u.F)));
                    S.set(n, p.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL: function(e) {
                    var n = e.channelId;
                    S.set(n, p.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    var n = e.integration,
                        t = I.get(n.channel_id);
                    if (null == t) return !1;
                    I.set(n.channel_id, h(_(t).concat([(0, u.F)(n)])))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    var n = e.integration,
                        t = I.get(n.channel_id);
                    if (null == t) return !1;
                    var r = (0, u.F)(n),
                        o = t.findIndex((function(e) {
                            return e.application.id === r.application.id
                        })),
                        i = _(t); - 1 === o ? i.push(r) : i[o] = r;
                    I.set(r.channel_id, h(i))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(e) {
                    var n = e.channelId,
                        t = e.applicationId,
                        r = I.get(n);
                    if (null == r) return !1;
                    I.set(n, r.filter((function(e) {
                        return e.application.id !== t
                    })))
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    return I.delete(n.id)
                }
            });
            const b = R
        },
        232806: (e, n, t) => {
            t.d(n, {
                xV: () => i,
                dp: () => u,
                X7: () => a,
                E1: () => l,
                f7: () => c,
                HE: () => s,
                SJ: () => f
            });

            function r(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function o(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var i, u;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(i || (i = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(u || (u = {}));
            var a = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10],
                l = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((function(e, n, t) {
                    return o(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                o = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            o.forEach((function(n) {
                                r(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, e), r({}, n, t))
                }), {}),
                c = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        205294: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(169376);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function i(e, n) {
                return !n || "object" !== a(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function u(e, n) {
                u = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return u(e, n)
            }
            var a = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = o(e);
                    if (n) {
                        var u = o(this).constructor;
                        t = Reflect.construct(r, arguments, u)
                    } else t = r.apply(this, arguments);
                    return i(this, t)
                }
            }
            const c = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && u(e, n)
                }(t, e);
                var n = l(t);

                function t(e) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r;
                    (r = n.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = t.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                t.createFromServer = function(e, n) {
                    return new t({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: n
                    })
                };
                return t
            }(r.Z)
        },
        50433: (e, n, t) => {
            t.d(n, {
                Z: () => I
            });
            var r = t(202351),
                o = t(744564);

            function i(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function u(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, n) {
                return !n || "object" !== f(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function c(e, n) {
                c = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return c(e, n)
            }

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = a(e);
                    if (n) {
                        var o = a(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return l(this, t)
                }
            }
            var p = [];

            function E() {
                p = []
            }
            var O = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && c(e, n)
                }(t, e);
                var n = _(t);

                function t() {
                    u(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                r.__getLocalVars = function() {
                    return {
                        layers: p
                    }
                };
                return t
            }(r.ZP.Store);
            O.displayName = "LayerStore";
            const I = new O(o.Z, {
                LAYER_PUSH: function(e) {
                    var n = e.component;
                    if (p.indexOf(n) >= 0) return !1;
                    p = s(p).concat([n])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: E,
                LOGOUT: E,
                NOTIFICATION_CLICK: E
            })
        },
        223219: (e, n, t) => {
            t.d(n, {
                Z: () => x
            });
            var r = t(496486),
                o = t.n(r),
                i = t(202351),
                u = t(744564),
                a = t(473903),
                l = t(2590);

            function c(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function p(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        f(e, n, t[n])
                    }))
                }
                return e
            }

            function E(e, n) {
                return !n || "object" !== I(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function O(e, n) {
                O = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return O(e, n)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = _(e);
                    if (n) {
                        var o = _(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return E(this, t)
                }
            }
            var T = l.QZA.CLOSED,
                d = null,
                N = null,
                y = {},
                h = {},
                R = {},
                b = null,
                A = null,
                C = !1,
                m = !1,
                P = null,
                g = null,
                v = null,
                L = [],
                M = null,
                w = null;

            function D(e) {
                var n, t, r, o, i, u, c = a.default.getCurrentUser();
                if (null == c) return U();
                N = null !== (n = e.section) && void 0 !== n ? n : N;
                M = null !== (t = e.section) && void 0 !== t ? t : N;
                null != e.subsection && null != N && (y[N] = e.subsection);
                null != e.scrollPosition && null != N && (h[N] = e.scrollPosition);
                m = !!e.openWithoutBackstack;
                T = l.QZA.OPEN;
                R = {};
                b = f({}, l.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                A = p({}, b);
                g = null !== (r = e.onClose) && void 0 !== r ? r : null;
                v = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                L = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                w = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function U() {
                T = l.QZA.CLOSED;
                C = !1;
                b = null;
                M = null;
                A = null;
                d = null;
                N = null;
                y = {};
                h = {};
                g = null;
                v = null;
                L = [];
                w = null
            }

            function j() {
                T = l.QZA.OPEN;
                R = {}
            }
            var G = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && O(e, n)
                }(t, e);
                var n = S(t);

                function t() {
                    c(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(a.default)
                };
                r.hasChanges = function() {
                    return null != A && null != b && (!(!this.isOpen() && P !== l.cII.USER_SETTINGS) && !o().isEqual(A, b))
                };
                r.isOpen = function() {
                    return C
                };
                r.getPreviousSection = function() {
                    return d
                };
                r.getSection = function() {
                    return N
                };
                r.getSubsection = function() {
                    return null != N ? y[N] : null
                };
                r.getScrollPosition = function() {
                    return null != N ? h[N] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return m
                };
                r.getProps = function() {
                    return {
                        submitting: T === l.QZA.SUBMITTING,
                        section: N,
                        subsection: null != N ? y[N] : null,
                        scrollPosition: null != N ? h[N] : null,
                        settings: A,
                        errors: R,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: m,
                        analyticsLocation: v,
                        analyticsLocations: L,
                        initialSection: M,
                        impressionSource: w
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: T,
                        previousSection: d,
                        section: N,
                        subsections: y,
                        scrollPositions: h,
                        errors: R,
                        originalSettings: b,
                        settings: A,
                        open: C,
                        openWithoutBackstack: m,
                        tab: P,
                        onClose: g,
                        analyticsLocation: v,
                        analyticsLocations: L,
                        initialSection: M,
                        impressionSource: w
                    }
                };
                ! function(e, n, t) {
                    n && s(e.prototype, n);
                    t && s(e, t)
                }(t, [{
                    key: "onClose",
                    get: function() {
                        return g
                    }
                }]);
                return t
            }(i.ZP.Store);
            G.displayName = "UserSettingsModalStore";
            const x = new G(u.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    C = !0;
                    D(e)
                },
                USER_SETTINGS_MODAL_INIT: D,
                USER_SETTINGS_MODAL_CLOSE: U,
                LOGOUT: U,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    T = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (T !== l.QZA.SUBMITTING) return !1;
                    T = l.QZA.OPEN;
                    N = l.oAB.ACCOUNT;
                    var n;
                    R = null !== (n = e.errors) && void 0 !== n ? n : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    d = N;
                    N = e.section;
                    v = null;
                    var n;
                    L = null !== (n = e.analyticsLocations) && void 0 !== n ? n : [];
                    null != e.subsection && (y[N] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var n = e.forSection;
                    null != n ? delete y[n] : null != N && delete y[N]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var n = e.forSection;
                    null != n ? delete h[n] : null != N && delete h[N]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var n = e.settings;
                    null == A && (A = {});
                    var t = A[l.oAB.ACCOUNT];
                    A[l.oAB.ACCOUNT] = p({}, t, n)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: j,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = a.default.getCurrentUser();
                    j();
                    if (null != e) {
                        b = f({}, l.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        A = p({}, b)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    P = e.tab;
                    return null == N && P === l.cII.USER_SETTINGS && D({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        449401: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function a(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function l(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    l = e.height,
                    c = void 0 === l ? 16 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: t,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                        fill: f,
                        className: _
                    })
                }))
            }
        },
        349491: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function a(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function l(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    l = e.height,
                    c = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.className,
                    p = e.foreground,
                    E = a(e, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    width: t,
                    height: c,
                    className: _,
                    viewBox: "0 0 24 24"
                }, (0, o.Z)(E)), {
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }
        },
        128181: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function u(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function a(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function l(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    l = e.height,
                    c = void 0 === l ? 16 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = a(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(_)), {
                    width: t,
                    height: c,
                    viewBox: "0 0 16 15.2",
                    children: (0, r.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: f
                    })
                }))
            }
        },
        488110: (e, n, t) => {
            t.d(n, {
                Z: () => I
            });
            var r = t(473903),
                o = t(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            t.n(o)().curry((function(e, n, t) {
                return i(n) ? e(t) : t({})
            }));

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        u(e, n, t[n])
                    }))
                }
                return e
            }

            function l(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function c(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var s, f, _ = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = t(680918);
            s = p.showModal;
            _ = p.updateModalProps;
            f = t(264817).Mr;

            function E(e) {
                var n = e.promiseFn,
                    t = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    u = e.hooks,
                    c = (void 0 === u ? {} : u).onEarlyClose,
                    p = function() {
                        null == c || c()
                    },
                    E = function(e) {
                        f(T);
                        t(e)
                    },
                    I = function(e) {
                        f(T);
                        r(e)
                    },
                    S = function(e) {
                        var n = e.res;
                        _(T, d, p, l(a({}, i), {
                            error: n.body.message
                        }))
                    };
                if (null != s) var T = s(d, p, i);
                else null == c || c();

                function d(e) {
                    _(T, d, p, l(a({}, i), {
                        isLoading: !0
                    }));
                    return O({
                        promiseFn: n,
                        resolve: E,
                        reject: I,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }
            }

            function O(e) {
                var n = e.promiseFn,
                    t = e.resolve,
                    r = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    u = void 0 === i ? E : i,
                    l = e.isModalOpen,
                    s = void 0 !== l && l,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return n(null != o ? {
                    code: o
                } : {}).then(t, (function(e) {
                    if (function(e, n) {
                            return e.body && 60008 === e.body.code || n && 429 === e.status
                        }(e, s)) return u(a({
                        promiseFn: n,
                        resolve: t,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function I(e, n) {
                var t, o, u = null != n ? n : {},
                    l = u.checkEnabled,
                    s = void 0 === l ? null !== (o = null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.mfaEnabled) && void 0 !== o && o : l,
                    f = c(u, ["checkEnabled"]);
                return new Promise((function(n, t) {
                    (i(s) ? E : O)(a({
                        promiseFn: e,
                        resolve: n,
                        reject: t
                    }, f))
                }))
            }
        },
        73105: (e, n, t) => {
            t.d(n, {
                RD: () => W,
                WA: () => B,
                f5: () => H,
                Gb: () => w,
                Rs: () => Z,
                _2: () => V,
                gL: () => U,
                fG: () => G
            });
            var r = t(306472),
                o = t(737264),
                i = t(496486),
                u = t.n(i),
                a = t(809784),
                l = t(296602),
                c = t(384411),
                s = t(72580),
                f = t(310126);

            function _(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var p = function() {
                function e(n, t) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = n;
                    this._languageHint = n;
                    this._onChange = t;
                    t(n)
                }
                var n = e.prototype;
                n.process = function(e) {
                    var n = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(t) {
                            if (t.timeRemaining() <= n._minimumTimeRemaining) n._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, n) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var t = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, o) {
                                            t.detect(e, {
                                                httpHint: n,
                                                encodingHint: "UTF8"
                                            }, (function(e, n) {
                                                null != e ? o(new Error(e.message)) : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500 ? o(new Error("Not enough reliable text.")) : r(n.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, n._languageHint).then((function(e) {
                                    n.language = e;
                                    n._processEnd(t.didTimeout)
                                }), (function() {
                                    n._processEnd(t.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                n._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, n, t) {
                    n && _(e.prototype, n);
                    t && _(e, t)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const E = {
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

            function O(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function I(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function S(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            I(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            I(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function T(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return O(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e, n) {
                    var t, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, u)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                y = new l.Z("Spellchecker"),
                h = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function R(e) {
                var n;
                e = null !== (n = E[e]) && void 0 !== n ? n : e;
                var t = (0, o.Q)(e.replace(/[_-]/g, "-"));
                if (null != t && null != t.langtag.language && null != t.langtag.region) {
                    var r = t.langtag,
                        i = r.language,
                        u = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                y.error("".concat(e, " is not a valid locale."))
            }
            var b = function() {
                    function e(n) {
                        var t = this;
                        ! function(e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = d(c.default.locale.split("-"), 2),
                            o = r[0],
                            i = r[1];
                        this.regionPreference = i;
                        var u = this.getAvailableLanguages(n);
                        this.languageDetector = new p(o, (function(e) {
                            var r = "".concat(e, "-").concat(t.regionPreference);
                            if (-1 !== n.indexOf(r)) t.setLocale(r);
                            else {
                                var i, a = null !== (i = u[e]) && void 0 !== i ? i : E[o];
                                null != a && t.setLocale(a)
                            }
                        }));
                        h.on("spellcheck-result", (function(e, n) {
                            t.misspelledWord = null != e ? e : "";
                            t.corrections = null != n ? n : []
                        }))
                    }
                    var n = e.prototype;
                    n.setLearnedWords = function(e) {
                        h.setLearnedWords(e)
                    };
                    n.setLocale = function(e) {
                        var n;
                        null === (n = h.setLocale(e)) || void 0 === n || n.then((function(n) {
                            y.info("Switching to ".concat(e), n ? "(available)" : "(unavailable)")
                        }))
                    };
                    n.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    n.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    n.getAvailableLanguages = function(e) {
                        var n = {};
                        e.forEach((function(e) {
                            var t, r = d(e.split("-"), 1)[0];
                            n[r] = null !== (t = n[r]) && void 0 !== t ? t : e
                        }));
                        return n
                    };
                    n.isMisspelled = function(e, n) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    n.getCorrectionsForMisspelling = function(e, n) {
                        return this.isMisspelled(e, n) ? this.corrections : []
                    };
                    n.replaceMisspelling = function(e) {
                        h.replaceMisspelling(e)
                    };
                    ! function(e, n, t) {
                        n && T(e.prototype, n);
                        t && T(e, t)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                A = u().debounce((function(e, n) {
                    var t = function(e) {
                        if (null == e) return null;
                        if ((0, a.k)(e, HTMLInputElement) || (0, a.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, a.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(n);
                    null != t && e.detectLanguage(t)
                }), 250);

            function C(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(n) {
                    return A(e, n.target)
                }), !0)
            }

            function m() {
                return (m = S((function() {
                    var e, n, t, r;
                    return N(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, h.getAvailableDictionaries()];
                            case 1:
                                n = null !== (e = o.sent()) && void 0 !== e ? e : [];
                                t = n.map(R).filter(s.lm);
                                C(r = new b(t));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var P = t(120415);

            function g(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function v(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            g(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            g(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var L = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function M() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function w() {
                return (0, P.nI)() && M()
            }
            var D = w() ? function() {
                return m.apply(this, arguments)
            }() : null;

            function U(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = v((function(e) {
                    var n;
                    return L(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (n = t.sent())) return [2];
                                n.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = v((function(e) {
                    var n;
                    return L(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (n = t.sent())) return [2];
                                n.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function H(e) {
                return F.apply(this, arguments)
            }

            function F() {
                F = v((function(e) {
                    var n, t, r = arguments;
                    return L(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                n = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, D];
                            case 1:
                                return null == (t = o.sent()) ? [2, !1] : [2, t.isMisspelled(e, n)]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function B(e) {
                return k.apply(this, arguments)
            }

            function k() {
                k = v((function(e) {
                    var n, t, r, o = arguments;
                    return L(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                n = o.length > 1 && void 0 !== o[1] && o[1], t = o.length > 2 && void 0 !== o[2] ? o[2] : 5;
                                return [4, D];
                            case 1:
                                return null == (r = i.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, n).slice(0, t)]
                        }
                    }))
                }));
                return k.apply(this, arguments)
            }

            function Z(e) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = v((function(e) {
                    var n;
                    return L(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (n = t.sent())) return [2];
                                n.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = v((function(e) {
                    var n;
                    return L(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (n = t.sent())) return [2];
                                n.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(e) {
                if (!M()) return function() {};
                var n = r.Z.spellCheck.on("spellcheck-result", e);
                return null != n ? n : function() {}
            }
        },
        680918: (e, n, t) => {
            t.r(n);
            t.d(n, {
                showModal: () => l,
                updateModalProps: () => c
            });
            var r = t(785893),
                o = (t(667294), t(264817)),
                i = t(919244);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var a = function(e, n, t) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                u(e, n, t[n])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: n
                    }, t, o))
                }
            };

            function l(e, n, t) {
                return (0, o.h7)(a(e, n, t), {
                    onCloseCallback: n
                })
            }

            function c(e, n, t, r) {
                return (0, o.o)(e, a(n, t, r))
            }
        },
        180735: (e, n, t) => {
            t.d(n, {
                h: () => r
            });
            var r;
            ! function(e) {
                e[e.USER = 100] = "USER";
                e[e.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        989824: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(667294),
                o = {};

            function i(e) {
                var n = (0, r.useRef)(o);
                n.current === o && (n.current = e());
                return n.current
            }
        }
    }
]);