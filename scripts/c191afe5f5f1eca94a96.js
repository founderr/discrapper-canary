"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78367, 88110, 71402], {
        737264: e => {
            e.exports.Q = function(e) {
                var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!n) return null;
                n.shift();
                var r = null,
                    o = [];
                if (n[2]) {
                    r = (t = n[2].split("-")).shift();
                    o = t
                }
                var i = [];
                n[5] && (i = n[5].split("-")).shift();
                var u = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var l, a = []; t.length;) {
                        var c = t.shift();
                        if (1 === c.length)
                            if (l) {
                                u.push({
                                    singleton: l,
                                    extension: a
                                });
                                l = c;
                                a = []
                            } else l = c;
                        else a.push(c)
                    }
                    u.push({
                        singleton: l,
                        extension: a
                    })
                }
                var s = [];
                if (n[7]) {
                    (s = n[7].split("-")).shift();
                    s.shift()
                }
                var f = [];
                n[8] && (f = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: o
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: i,
                        extension: u,
                        privateuse: s
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        444020: e => {
            var t = "%[a-f0-9]{2}",
                n = new RegExp("(" + t + ")|([^%]+?)", "gi"),
                r = new RegExp("(" + t + ")+", "gi");

            function o(e, t) {
                try {
                    return [decodeURIComponent(e.join(""))]
                } catch (e) {}
                if (1 === e.length) return e;
                t = t || 1;
                var n = e.slice(0, t),
                    r = e.slice(t);
                return Array.prototype.concat.call([], o(n), o(r))
            }

            function i(e) {
                try {
                    return decodeURIComponent(e)
                } catch (i) {
                    for (var t = e.match(n) || [], r = 1; r < t.length; r++) t = (e = o(t, r).join("")).match(n) || [];
                    return e
                }
            }
            e.exports = function(e) {
                if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    e = e.replace(/\+/g, " ");
                    return decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = r.exec(e); n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch (e) {
                                var o = i(n[0]);
                                o !== n[0] && (t[n[0]] = o)
                            }
                            n = r.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var u = Object.keys(t), l = 0; l < u.length; l++) {
                            var a = u[l];
                            e = e.replace(new RegExp(a, "g"), t[a])
                        }
                        return e
                    }(e)
                }
            }
        },
        727418: e => {
            var t = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
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
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
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
                for (var u, l, a = o(e), c = 1; c < arguments.length; c++) {
                    u = Object(arguments[c]);
                    for (var s in u) n.call(u, s) && (a[s] = u[s]);
                    if (t) {
                        l = t(u);
                        for (var f = 0; f < l.length; f++) r.call(u, l[f]) && (a[l[f]] = u[l[f]])
                    }
                }
                return a
            }
        },
        517563: (e, t, n) => {
            var r = n(970610),
                o = n(727418),
                i = n(444020);

            function u(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
            }

            function l(e) {
                return Array.isArray(e) ? e.sort() : "object" == typeof e ? l(Object.keys(e)).sort((function(e, t) {
                    return Number(e) - Number(t)
                })).map((function(t) {
                    return e[t]
                })) : e
            }
            t.extract = function(e) {
                return e.split("?")[1] || ""
            };
            t.parse = function(e, t) {
                var n = function(e) {
                        var t;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, n, r) {
                                    t = /\[(\d*)\]$/.exec(e);
                                    e = e.replace(/\[\d*\]$/, "");
                                    if (t) {
                                        void 0 === r[e] && (r[e] = {});
                                        r[e][t[1]] = n
                                    } else r[e] = n
                                };
                            case "bracket":
                                return function(e, n, r) {
                                    t = /(\[\])$/.exec(e);
                                    e = e.replace(/\[\]$/, "");
                                    t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                                };
                            default:
                                return function(e, t, n) {
                                    void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                                }
                        }
                    }(t = o({
                        arrayFormat: "none"
                    }, t)),
                    r = Object.create(null);
                if ("string" != typeof e) return r;
                if (!(e = e.trim().replace(/^(\?|#|&)/, ""))) return r;
                e.split("&").forEach((function(e) {
                    var t = e.replace(/\+/g, " ").split("="),
                        o = t.shift(),
                        u = t.length > 0 ? t.join("=") : void 0;
                    u = void 0 === u ? null : i(u);
                    n(i(o), u, r)
                }));
                return Object.keys(r).sort().reduce((function(e, t) {
                    var n = r[t];
                    Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = l(n) : e[t] = n;
                    return e
                }), Object.create(null))
            };
            t.stringify = function(e, t) {
                var n = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, n, r) {
                                return null === n ? [u(t, e), "[", r, "]"].join("") : [u(t, e), "[", u(r, e), "]=", u(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? u(t, e) : [u(t, e), "[]=", u(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? u(t, e) : [u(t, e), "=", u(n, e)].join("")
                            }
                    }
                }(t = o({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, t));
                return e ? Object.keys(e).sort().map((function(r) {
                    var o = e[r];
                    if (void 0 === o) return "";
                    if (null === o) return u(r, t);
                    if (Array.isArray(o)) {
                        var i = [];
                        o.slice().forEach((function(e) {
                            void 0 !== e && i.push(n(r, e, i.length))
                        }));
                        return i.join("&")
                    }
                    return u(r, t) + "=" + u(o, t)
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
        971402: (e, t, n) => {
            n.d(t, {
                Zy: () => f,
                vq: () => _,
                jW: () => p
            });
            var r = n(744564),
                o = n(26468),
                i = n(120415),
                u = n(73105),
                l = n(2590);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
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
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function _(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var a, f, _ = 0,
                        p = 0;
                    if ("pageX" in e) {
                        _ = e.pageX;
                        p = e.pageY
                    }
                    if (0 === _ && 0 === p) {
                        var O, E = null === (O = e.target) || void 0 === O ? void 0 : O.getBoundingClientRect(),
                            I = null != E ? E : {},
                            S = I.left,
                            d = void 0 === S ? 0 : S,
                            T = I.top,
                            y = void 0 === T ? 0 : T,
                            b = I.width,
                            h = void 0 === b ? 0 : b,
                            N = I.height;
                        _ = d + h / 2;
                        p = y + (void 0 === N ? 0 : N) / 2
                    }
                    var R = {
                        render: t,
                        renderLazy: r,
                        target: null !== (a = e.target) && void 0 !== a ? a : e.currentTarget,
                        rect: new DOMRect(_, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? l.IlC.OVERLAY : null !== (f = (0, o.GB)()) && void 0 !== f ? f : l.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, i.nI)()) var m = (0, u.RD)((function() {
                        m();
                        s(R)
                    }));
                    else {
                        e.preventDefault();
                        s(R)
                    }
                }
            }

            function p(e, t, n) {
                _(e, void 0, n, t)
            }
        },
        735885: (e, t, n) => {
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => u
            });
            var r = n(744564);

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
        810978: (e, t, n) => {
            n.d(t, {
                GZ: () => O,
                Gn: () => I,
                Y2: () => S,
                mE: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(973889),
                u = n(615796),
                l = n(264628),
                a = n(673679),
                c = n(2590),
                s = n(203600);

            function f(e, t, n, r, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            f(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            f(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function O(e, t, n, r, o) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = _((function(e, t, n, s, f) {
                    var _, O, E, I;
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
                                O = {};
                                null != t && (O.country_code = t);
                                null != n && (O.payment_source_id = n);
                                null != s && (O.include_unpublished = s);
                                null != f && (O.revenue_surface = f);
                                _.query = O;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, a.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(_)];
                            case 4:
                                E = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: E.body
                                });
                                return [3, 6];
                            case 5:
                                I = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, l.q2)(I);
                                throw new i.Z(I);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return O(e, t)
                })))
            }

            function S(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return O(r, e, t, void 0, n)
                })))
            }

            function d() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        734691: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                u = n(223219),
                l = n(652591),
                a = n(775173),
                c = n(488110),
                s = n(120415),
                f = n(735885),
                _ = n(2590),
                p = n(473708);

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function I(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            const S = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: e,
                        subsection: t
                    }, n));
                    (0, f.jN)(_.S9g.USER_SETTINGS)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = u.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
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
                saveAccountChanges: function(e, t) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var u = e.username,
                        f = e.email,
                        O = e.emailToken,
                        S = e.password,
                        d = e.avatar,
                        T = e.newPassword,
                        y = e.discriminator,
                        b = t.close;
                    return (0, c.Z)((function(e) {
                        var t = I(E({
                                username: u,
                                email: f,
                                email_token: O,
                                password: S,
                                avatar: d,
                                new_password: T
                            }, e), {
                                discriminator: null != y && "" !== y ? y : void 0
                            }),
                            n = o.Z.get(_.JkL),
                            i = (0, s.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var l = o.Z.get(_.scU);
                        if (null != _.mvA && null != l) {
                            t.push_voip_provider = _.mvA;
                            t.push_voip_token = l
                        }
                        return r.ZP.patch({
                            url: _.ANM.ME,
                            oldFormErrors: !0,
                            body: t
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
                        var t = e.body,
                            r = t.token;
                        l.default.track(_.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, a.xR)(t.avatar)
                        });
                        delete t.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != T && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: T
                        });
                        null != S && null != T && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        b ? n.close() : n.submitComplete();
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
        919244: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                l = n(882723),
                a = n(473708),
                c = n(775823),
                s = n.n(c);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function p(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var t = function() {
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
                    var n, r = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? a.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? a.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            o = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == o || o(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        i = t.actionText,
                        c = t.children,
                        f = t.error,
                        _ = t.isLoading,
                        p = t.maxLength,
                        O = t.transitionState,
                        E = t.helpMessage,
                        I = t.retryPrompt,
                        S = t.retrySuccessMessage,
                        d = this.state,
                        T = d.code,
                        y = d.errorMessage,
                        b = d.retrySuccess,
                        h = o.Children.count(c) > 0 ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        N = null != I ? (0, r.jsxs)(l.Text, {
                            className: u()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                                className: u()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(l.Anchor, {
                                    children: I
                                })
                            })]
                        }) : null,
                        R = b ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: S
                            })
                        }) : null;
                    return (0, r.jsx)(l.ModalRoot, {
                        transitionState: O,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(l.ModalContent, {
                                children: [null != E ? (0, r.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: E
                                }) : null, h, R, (0, r.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : y
                                    }) : null, N]
                                })]
                            }), (0, r.jsxs)(l.ModalFooter, {
                                children: [(0,
                                    r.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === T.length,
                                    children: null != i ? i : a.Z.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: a.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            S.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const d = S
        },
        66541: (e, t, n) => {
            n.d(t, {
                T: () => c
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    f = e.color,
                    _ = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    E = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm1-18a1 1 0 1 0-2 0v7a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V5Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        597209: (e, t, n) => {
            n.d(t, {
                m: () => c
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    f = e.color,
                    _ = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    E = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        142643: (e, t, n) => {
            n.d(t, {
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
        924326: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(667294);

            function o() {
                var e = r.useRef(null);
                null === e.current && (e.current = new AbortController);
                r.useEffect((function() {
                    return function() {
                        var t;
                        null === (t = e.current) || void 0 === t || t.abort()
                    }
                }), []);
                return e.current.signal
            }
        },
        272200: (e, t, n) => {
            n.d(t, {
                Qi: () => r,
                iw: () => o,
                Kw: () => i,
                Vh: () => u,
                ub: () => l,
                bB: () => a
            });
            var r, o, i, u, l, a;
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
            }(l || (l = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(a || (a = {}))
        },
        248046: (e, t, n) => {
            n.d(t, {
                Z8: () => m,
                nG: () => g,
                BH: () => C,
                Dd: () => v,
                $z: () => L,
                bD: () => w,
                nT: () => M,
                oK: () => D,
                BO: () => j,
                Ft: () => U,
                D7: () => G,
                tI: () => H,
                X0: () => F
            });
            var r = n(224736),
                o = n.n(r),
                i = n(441143),
                u = n.n(i),
                l = n(496486),
                a = n.n(l),
                c = n(940060),
                s = n(73904),
                f = n(734394),
                _ = n(948832),
                p = n(382060),
                O = n(284610),
                E = n(682776),
                I = n(272200),
                S = n(127624),
                d = n(2590),
                T = n(520453);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function R(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                var t, n = e.rootCommand,
                    r = e.command,
                    o = e.applicationId,
                    i = e.subCommandPath,
                    u = e.useKeyedPermissions;
                if (null != n.permissions && n.permissions.length > 0)
                    if (u) t = (0, f.tk)(n.permissions);
                    else {
                        t = {};
                        n.permissions.forEach((function(e) {
                            t[e.id] = e
                        }))
                    } var l, a, _, p = (null != i ? i : []).map((function(e) {
                        return e.name
                    })),
                    O = (null != i ? i : []).map((function(e) {
                        return e.displayName
                    }));
                return {
                    version: n.version,
                    guildId: n.guild_id,
                    id: [n.id].concat(R(p)).join(S.oQ),
                    name: [n.name].concat(R(p)).join(" "),
                    serverLocalizedName: r.name_localized,
                    applicationId: o,
                    type: null !== (l = n.type) && void 0 !== l ? l : s.yU.CHAT,
                    inputType: I.iw.BOT,
                    description: r.description,
                    options: P(r.options),
                    rootCommand: n,
                    subCommandPath: i,
                    defaultMemberPermissions: null == n.default_member_permissions ? void 0 : c.Z.deserialize(n.default_member_permissions),
                    dmPermission: n.dm_permission,
                    permissions: t,
                    displayName: [null !== (a = n.name_localized) && void 0 !== a ? a : n.name].concat(R(O)).join(" "),
                    displayDescription: null !== (_ = r.description_localized) && void 0 !== _ ? _ : r.description,
                    nsfw: n.nsfw,
                    contexts: n.contexts,
                    integration_types: n.integration_types
                }
            }

            function P(e) {
                return null == e ? void 0 : e.map((function(e) {
                    var t, n, r, o = N(h({}, e), {
                        choices: (r = e.choices, null == r ? void 0 : r.map((function(e) {
                            var t;
                            return N(h({}, e), {
                                displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                            })
                        }))),
                        options: P(e.options),
                        serverLocalizedName: e.name_localized,
                        displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name,
                        displayDescription: null !== (n = e.description_localized) && void 0 !== n ? n : e.description
                    });
                    return e.type === s.jw.CHANNEL && "channel_types" in e ? N(h({}, o), {
                        channelTypes: e.channel_types
                    }) : e.type !== s.jw.NUMBER && e.type !== s.jw.INTEGER || !("min_value" in e) && !("max_value" in e) ? e.type === s.jw.STRING && ("min_length" in e || "max_length" in e) ? N(h({}, o), {
                        minLength: e.min_length,
                        maxLength: e.max_length
                    }) : o : N(h({}, o), {
                        minValue: e.min_value,
                        maxValue: e.max_value
                    })
                }))
            }

            function A(e) {
                var t = e.rootCommand,
                    n = e.command,
                    r = e.applicationId,
                    o = e.subCommandPath,
                    i = e.useKeyedPermissions;
                if (n.hasOwnProperty("id")) {
                    if (null == n.options || 0 === n.options.length) return [m({
                        rootCommand: t,
                        command: n,
                        applicationId: r,
                        subCommandPath: o,
                        useKeyedPermissions: i
                    })]
                } else if (n.type !== s.jw.SUB_COMMAND && n.type !== s.jw.SUB_COMMAND_GROUP && (null == n.options || 0 === n.options.length)) return [m({
                    rootCommand: t,
                    command: n,
                    applicationId: r,
                    subCommandPath: o,
                    useKeyedPermissions: i
                })];
                var u = [];
                if (null == n.options) return u;
                for (var l = n.options.filter((function(e) {
                        return e.type === s.jw.SUB_COMMAND_GROUP
                    })), a = 0; a < l.length; a++) {
                    var c, f;
                    (c = u).push.apply(c, R(A({
                        rootCommand: t,
                        command: l[a],
                        applicationId: r,
                        subCommandPath: (null != o ? o : []).concat([{
                            name: l[a].name,
                            type: s.jw.SUB_COMMAND_GROUP,
                            displayName: null !== (f = l[a].name_localized) && void 0 !== f ? f : l[a].name
                        }]),
                        useKeyedPermissions: i
                    })))
                }
                for (var _ = n.options.filter((function(e) {
                        return e.type === s.jw.SUB_COMMAND
                    })), p = 0; p < _.length; p++) {
                    var O;
                    u.push(m({
                        rootCommand: t,
                        command: _[p],
                        applicationId: r,
                        subCommandPath: (null != o ? o : []).concat([{
                            name: _[p].name,
                            type: s.jw.SUB_COMMAND,
                            displayName: null !== (O = _[p].name_localized) && void 0 !== O ? O : _[p].name
                        }]),
                        useKeyedPermissions: i
                    }))
                }
                0 === l.length && 0 === _.length && u.push(m({
                    rootCommand: t,
                    command: n,
                    applicationId: r,
                    subCommandPath: o,
                    useKeyedPermissions: i
                }));
                return u
            }

            function g(e, t) {
                return a().flatMap(e, (function(e) {
                    u()(null != e.id, "Missing command id");
                    return A({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                        subCommandPath: void 0,
                        useKeyedPermissions: t
                    })
                }))
            }

            function C(e) {
                return d.Xyh.test(e.trim())
            }

            function v(e, t, n, r) {
                var o = [];
                a()(e).forEach((function(e) {
                    t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && o.push(e)
                }));
                return o.slice(0, r)
            }

            function L(e) {
                var t = e.type === s.jw.STRING,
                    n = e.type === s.jw.CHANNEL,
                    r = e.type === s.jw.USER || e.type === s.jw.MENTIONABLE,
                    o = e.type === s.jw.ROLE || e.type === s.jw.MENTIONABLE;
                return {
                    canMentionEveryone: t || o,
                    canMentionHere: t,
                    canMentionChannels: t || n,
                    canMentionUsers: t || r,
                    canMentionRoles: t || o,
                    canMentionAnyGuildUser: r,
                    canMentionNonMentionableRoles: o
                }
            }

            function w(e) {
                return o()(e).subtract(1).toString()
            }

            function M(e, t, n, r) {
                return !!D(E.Z, _.Z, !1, e) && (e.isPrivate() && n > 0 || (null !== (o = null == r ? void 0 : r[t]) && void 0 !== o ? o : 0) > 0);
                var o
            }
            var D = function(e, t, n, r) {
                    return !n && (r.isMultiUserDM() ? t.getIntegrations(r.id).length > 0 : r.isDM() ? !r.isSystemDM() && (null != r.rawRecipients.find((function(e) {
                        return e.bot
                    })) || t.getIntegrations(r.id).length > 0) : !r.isArchivedLockedThread() && (!!(0, p.Em)(r.type) && e.can(c.Z.combine(T.Pl.USE_APPLICATION_COMMANDS, T.Pl.SEND_MESSAGES), r)))
                },
                j = c.Z.deserialize(0);

            function U(e) {
                var t = e.PermissionStore,
                    n = e.guild,
                    r = e.selfMember,
                    o = e.applicationLevelPermissions,
                    i = e.commandLevelPermissions,
                    u = e.defaultMemberPermissions;
                if (n.ownerId === r.userId || t.can(T.Pl.ADMINISTRATOR, n)) return !0;
                var l = n.id;
                if (null != i) {
                    var a = x(r, l, i);
                    if ("boolean" == typeof a) return a
                }
                var s = x(r, l, o);
                return !("boolean" == typeof s && !s) && (null == u || !c.Z.equals(u, j) && t.can(u, n))
            }

            function x(e, t, n) {
                var r = n[(0, f.rE)(e.userId, I.Kw.USER)];
                if (null != r) return r.permission;
                var o = !1,
                    i = !0,
                    u = !1,
                    l = void 0;
                try {
                    for (var a, c = e.roles[Symbol.iterator](); !(i = (a = c.next()).done); i = !0) {
                        var s = a.value,
                            _ = n[(0, f.rE)(s, I.Kw.ROLE)];
                        if (null != _) {
                            o = !0;
                            if (_.permission) return !0
                        }
                    }
                } catch (e) {
                    u = !0;
                    l = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (u) throw l
                    }
                }
                if (o) return !1;
                var p = n[(0, f.rE)(t, I.Kw.ROLE)];
                return null != p ? p.permission : null
            }

            function G(e) {
                switch (e) {
                    case I.bB.CHAT:
                        return O.d.ChannelMessage;
                    case I.bB.APPLICATION_LAUNCHER:
                        return O.d.ApplicationLauncherCommand
                }
            }

            function H(e) {
                if (null != e) return e.id === S.bi.BUILT_IN ? I.ub.BUILT_IN : e.id === S.bi.FRECENCY ? I.ub.FRECENCY : I.ub.APP
            }

            function F(e) {
                var t, n;
                return {
                    type: I.Qi.APPLICATION,
                    id: e.id,
                    name: null !== (n = null == e || null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
                    icon: e.icon,
                    application: e
                }
            }
        },
        165586: (e, t, n) => {
            n.d(t, {
                LY: () => r,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => _,
                no: () => p,
                ND: () => O,
                WC: () => I,
                z8: () => S,
                km: () => T,
                k0: () => y,
                af: () => b
            });
            var r, o, i, u, l = n(2590),
                a = n(203600),
                c = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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
                O = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: a.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: a.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: a.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_1,
                    quality: a.ys.MID_STREAMING_QUALITY
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
                    guildPremiumTier: l.Eu4.TIER_1,
                    quality: a.ys.MID_STREAMING_QUALITY
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

            function E(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var I = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                S = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440)],
                d = function(e) {
                    return "".concat(e, "p")
                },
                T = [E(r.RESOLUTION_480, (function() {
                    return d(r.RESOLUTION_480)
                })), E(r.RESOLUTION_720, (function() {
                    return d(r.RESOLUTION_720)
                })), E(r.RESOLUTION_1080, (function() {
                    return d(r.RESOLUTION_1080)
                })), E(r.RESOLUTION_1440, (function() {
                    return d(r.RESOLUTION_1440)
                })), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                y = [E(o.FPS_15), E(o.FPS_30), E(o.FPS_60)],
                b = [E(o.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), E(o.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), E(o.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        773411: (e, t, n) => {
            n.d(t, {
                N2: () => f,
                YM: () => _,
                Dx: () => p,
                jD: () => O,
                bO: () => E,
                Xp: () => I,
                fV: () => S
            });
            var r = n(202351),
                o = n(747820),
                i = n(260561),
                u = n(339432),
                l = n(5544),
                a = n(567403),
                c = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[l.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var t = (0, r.e7)([l.ZP, o.Z], (function() {
                    return null != e && s(e.id, l.ZP, o.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function _(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var t = a.Z.getGuild(e);
                return null != t && (!!s(e, l.ZP, o.Z) && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
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
                O = (0, i.B)({
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
                E = (0, i.B)({
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
        734394: (e, t, n) => {
            n.d(t, {
                gw: () => o,
                rE: () => i,
                tk: () => u
            });
            var r = n(73904);
            n(272200);

            function o(e, t) {
                return e === r.yU.CHAT ? "/" + t : t
            }

            function i(e, t) {
                return "".concat(e, ":").concat(t)
            }

            function u(e) {
                return Object.fromEntries(e.map((function(e) {
                    return [i(e.id, e.type), e]
                })))
            }
        },
        948832: (e, t, n) => {
            n.d(t, {
                M: () => p,
                Z: () => N
            });
            var r = n(202351),
                o = n(744564),
                i = n(451936),
                u = n(223397);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return l(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p, O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
                var t = function() {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }! function(e) {
                e[e.NOT_FETCHED = 0] = "NOT_FETCHED";
                e[e.FETCHING = 1] = "FETCHING";
                e[e.FETCHED = 2] = "FETCHED";
                e[e.FETCH_FAILED = 3] = "FETCH_FAILED"
            }(p || (p = {}));
            var I = new Map,
                S = new Map,
                d = [],
                T = p.NOT_FETCHED,
                y = [],
                b = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && f(e, t)
                    }(n, e);
                    var t = E(n);

                    function n() {
                        a(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.getIntegrations = function(e) {
                        var t;
                        return null !== (t = I.get(e)) && void 0 !== t ? t : y
                    };
                    r.getIntegration = function(e, t) {
                        var n;
                        return null === (n = I.get(e)) || void 0 === n ? void 0 : n.find((function(e) {
                            return e.application.id === t
                        }))
                    };
                    r.getAllIntegrations = function() {
                        return I
                    };
                    r.getIntegrationsFetchState = function(e) {
                        var t;
                        return null !== (t = S.get(e)) && void 0 !== t ? t : p.NOT_FETCHED
                    };
                    r.getApplicationsShelfFetchState = function() {
                        return T
                    };
                    r.getApplicationsShelf = function() {
                        return d
                    };
                    return n
                }(r.ZP.Store);
            b.displayName = "PrivateChannelIntegrationStore";

            function h(e) {
                return e.sort((function(e, t) {
                    return e.application.name.localeCompare(t.application.name)
                }))
            }
            const N = new b(o.Z, {
                LOGOUT: function() {
                    I.clear()
                },
                CONNECTION_OPEN: function() {
                    I.clear();
                    S.clear()
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == t || S.get(t) !== p.FETCH_FAILED) return !1;
                    S.set(t, p.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START: function() {
                    T = p.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS: function(e) {
                    var t = e.applications;
                    d = t.map(i.Z.createFromServer).sort((function(e, t) {
                        return e.name.localeCompare(t.name)
                    }));
                    T = p.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL: function() {
                    T = p.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START: function(e) {
                    var t = e.channelId;
                    I.set(t, null);
                    S.set(t, p.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.integrations;
                    I.set(t, h(n.map(u.F)));
                    S.set(t, p.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL: function(e) {
                    var t = e.channelId;
                    S.set(t, p.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    var t = e.integration,
                        n = I.get(t.channel_id);
                    if (null == n) return !1;
                    I.set(t.channel_id, h(_(n).concat([(0, u.F)(t)])))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    var t = e.integration,
                        n = I.get(t.channel_id);
                    if (null == n) return !1;
                    var r = (0, u.F)(t),
                        o = n.findIndex((function(e) {
                            return e.application.id === r.application.id
                        })),
                        i = _(n); - 1 === o ? i.push(r) : i[o] = r;
                    I.set(r.channel_id, h(i))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(e) {
                    var t = e.channelId,
                        n = e.applicationId,
                        r = I.get(t);
                    if (null == r) return !1;
                    I.set(t, r.filter((function(e) {
                        return e.application.id !== n
                    })))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return I.delete(t.id)
                }
            })
        },
        232806: (e, t, n) => {
            n.d(t, {
                xV: () => i,
                dp: () => u,
                X7: () => l,
                E1: () => a,
                f7: () => c,
                HE: () => s,
                SJ: () => f
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
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
            var l = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10],
                a = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((function(e, t, n) {
                    return o(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            o.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), r({}, t, n))
                }), {}),
                c = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        205294: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(169376);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function i(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function a(e) {
                var t = function() {
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
                    var n, r = o(e);
                    if (t) {
                        var u = o(this).constructor;
                        n = Reflect.construct(r, arguments, u)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }
            const c = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && u(e, t)
                }(n, e);
                var t = a(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                };
                return n
            }(r.Z)
        },
        50433: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var t = function() {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var p = [];

            function O() {
                p = []
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                return n
            }(r.ZP.Store);
            E.displayName = "LayerStore";
            const I = new E(o.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (p.indexOf(t) >= 0) return !1;
                    p = s(p).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: O,
                LOGOUT: O,
                NOTIFICATION_CLICK: O
            })
        },
        223219: (e, t, n) => {
            n.d(t, {
                Z: () => G
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                l = n(473903),
                a = n(2590);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
                var t = function() {
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
                    var n, r = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var d = a.QZA.CLOSED,
                T = null,
                y = null,
                b = {},
                h = {},
                N = {},
                R = null,
                m = null,
                P = !1,
                A = !1,
                g = null,
                C = null,
                v = null,
                L = [],
                w = null,
                M = null;

            function D(e) {
                var t, n, r, o, i, u, c = l.default.getCurrentUser();
                if (null == c) return j();
                y = null !== (t = e.section) && void 0 !== t ? t : y;
                w = null !== (n = e.section) && void 0 !== n ? n : y;
                null != e.subsection && null != y && (b[y] = e.subsection);
                null != e.scrollPosition && null != y && (h[y] = e.scrollPosition);
                A = !!e.openWithoutBackstack;
                d = a.QZA.OPEN;
                N = {};
                R = f({}, a.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                m = p({}, R);
                C = null !== (r = e.onClose) && void 0 !== r ? r : null;
                v = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                L = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                M = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function j() {
                d = a.QZA.CLOSED;
                P = !1;
                R = null;
                w = null;
                m = null;
                T = null;
                y = null;
                b = {};
                h = {};
                C = null;
                v = null;
                L = [];
                M = null
            }

            function U() {
                d = a.QZA.OPEN;
                N = {}
            }
            var x = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = S(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.default)
                };
                r.hasChanges = function() {
                    return null != m && null != R && (!(!this.isOpen() && g !== a.cII.USER_SETTINGS) && !o().isEqual(m, R))
                };
                r.isOpen = function() {
                    return P
                };
                r.getPreviousSection = function() {
                    return T
                };
                r.getSection = function() {
                    return y
                };
                r.getSubsection = function() {
                    return null != y ? b[y] : null
                };
                r.getScrollPosition = function() {
                    return null != y ? h[y] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return A
                };
                r.getProps = function() {
                    return {
                        submitting: d === a.QZA.SUBMITTING,
                        section: y,
                        subsection: null != y ? b[y] : null,
                        scrollPosition: null != y ? h[y] : null,
                        settings: m,
                        errors: N,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: v,
                        analyticsLocations: L,
                        initialSection: w,
                        impressionSource: M
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return C
                    }
                }]);
                return n
            }(i.ZP.Store);
            x.displayName = "UserSettingsModalStore";
            const G = new x(u.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    P = !0;
                    D(e)
                },
                USER_SETTINGS_MODAL_INIT: D,
                USER_SETTINGS_MODAL_CLOSE: j,
                LOGOUT: j,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    d = a.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (d !== a.QZA.SUBMITTING) return !1;
                    d = a.QZA.OPEN;
                    y = a.oAB.ACCOUNT;
                    var t;
                    N = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    T = y;
                    y = e.section;
                    v = null;
                    var t;
                    L = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (b[y] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete b[t] : null != y && delete b[y]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete h[t] : null != y && delete h[y]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == m && (m = {});
                    var n = m[a.oAB.ACCOUNT];
                    m[a.oAB.ACCOUNT] = p({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = l.default.getCurrentUser();
                    U();
                    if (null != e) {
                        R = f({}, a.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        m = p({}, R)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    g = e.tab;
                    return null == y && g === a.cII.USER_SETTINGS && D({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        449401: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(66541),
                u = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.foreground,
                    p = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                        fill: f,
                        className: _
                    })
                }))
            }), i.T)
        },
        349491: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(597209),
                u = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.className,
                    p = e.foreground,
                    O = c(e, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: n,
                    height: i,
                    className: _,
                    viewBox: "0 0 24 24"
                }, (0, u.Z)(O)), {
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }), i.m)
        },
        985651: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                u = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function _(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = _(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 15.2",
                    children: (0, r.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: a
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    _ = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    E = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        488110: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(473903),
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
            }));

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var s, f, _ = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = n(680918);
            s = p.showModal;
            _ = p.updateModalProps;
            f = n(264817).Mr;

            function O(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    u = e.hooks,
                    c = (void 0 === u ? {} : u).onEarlyClose,
                    p = function() {
                        null == c || c()
                    },
                    O = function(e) {
                        f(d);
                        n(e)
                    },
                    I = function(e) {
                        f(d);
                        r(e)
                    },
                    S = function(e) {
                        var t = e.res;
                        _(d, T, p, a(l({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var d = s(T, p, i);
                else null == c || c();

                function T(e) {
                    _(d, T, p, a(l({}, i), {
                        isLoading: !0
                    }));
                    return E({
                        promiseFn: t,
                        resolve: O,
                        reject: I,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }
            }

            function E(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    u = void 0 === i ? O : i,
                    a = e.isModalOpen,
                    s = void 0 !== a && a,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, s)) return u(l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function I(e, t) {
                var n, o, u = null != t ? t : {},
                    a = u.checkEnabled,
                    s = void 0 === a ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : a,
                    f = c(u, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(s) ? O : E)(l({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        73105: (e, t, n) => {
            n.d(t, {
                RD: () => W,
                WA: () => k,
                f5: () => H,
                Gb: () => M,
                Rs: () => Z,
                _2: () => V,
                gL: () => j,
                fG: () => x
            });
            var r = n(306472),
                o = n(737264),
                i = n(496486),
                u = n.n(i),
                l = n(809784),
                a = n(296602),
                c = n(384411),
                s = n(72580),
                f = n(310126);

            function _(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var p = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, o) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? o(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? o(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && _(e.prototype, t);
                    n && _(e, n)
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
            const O = {
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

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function I(e, t, n, r, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function S(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            I(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            I(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(i) {
                        return function(l) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                    i = t.call(e, u)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, l])
                        }
                    }
                },
                b = new a.Z("Spellchecker"),
                h = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function N(e) {
                var t;
                e = null !== (t = O[e]) && void 0 !== t ? t : e;
                var n = (0, o.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        i = r.language,
                        u = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                b.error("".concat(e, " is not a valid locale."))
            }
            var R = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = T(c.default.locale.split("-"), 2),
                            o = r[0],
                            i = r[1];
                        this.regionPreference = i;
                        var u = this.getAvailableLanguages(t);
                        this.languageDetector = new p(o, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var i, l = null !== (i = u[e]) && void 0 !== i ? i : O[o];
                                null != l && n.setLocale(l)
                            }
                        }));
                        h.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        h.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = h.setLocale(e)) || void 0 === t || t.then((function(t) {
                            b.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = T(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        h.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && d(e.prototype, t);
                        n && d(e, n)
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
                m = u().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, l.k)(e, HTMLInputElement) || (0, l.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, l.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function P(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return m(e, t.target)
                }), !0)
            }

            function A() {
                return (A = S((function() {
                    var e, t, n, r;
                    return y(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, h.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = o.sent()) && void 0 !== e ? e : [];
                                n = t.map(N).filter(s.lm);
                                P(r = new R(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var g = n(120415);

            function C(e, t, n, r, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            C(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            C(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var L = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function w() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function M() {
                return (0, g.nI)() && w()
            }
            var D = M() ? function() {
                return A.apply(this, arguments)
            }() : null;

            function j(e) {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = v((function(e) {
                    var t;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function x(e) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = v((function(e) {
                    var t;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
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
                    var t, n, r = arguments;
                    return L(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, D];
                            case 1:
                                return null == (n = o.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function k(e) {
                return B.apply(this, arguments)
            }

            function B() {
                B = v((function(e) {
                    var t, n, r, o = arguments;
                    return L(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = o.length > 1 && void 0 !== o[1] && o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : 5;
                                return [4, D];
                            case 1:
                                return null == (r = i.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return B.apply(this, arguments)
            }

            function Z(e) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = v((function(e) {
                    var t;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
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
                    var t;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, D];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(e) {
                if (!w()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        680918: (e, t, n) => {
            n.r(t);
            n.d(t, {
                showModal: () => a,
                updateModalProps: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var l = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                u(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function a(e, t, n) {
                return (0, o.h7)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, o.o)(e, l(t, n, r))
            }
        },
        180735: (e, t, n) => {
            n.d(t, {
                h: () => r
            });
            var r;
            ! function(e) {
                e[e.USER = 100] = "USER";
                e[e.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        989824: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(e) {
                var t = (0, r.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        }
    }
]);