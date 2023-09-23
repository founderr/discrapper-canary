(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27818], {
        483683: (e, t, n) => {
            e.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, n) => {
            e.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => c
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

            function c() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        734691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                c = n(223219),
                l = n(652591),
                u = n(775173),
                s = n(488110),
                a = n(120415),
                f = n(735885),
                p = n(2590),
                O = n(473708);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t) {
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
            const y = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(S({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: e,
                        subsection: t
                    }, n));
                    (0, f.jN)(p.S9g.USER_SETTINGS)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(S({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = c.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(S({
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
                    var c = e.username,
                        f = e.email,
                        d = e.emailToken,
                        y = e.password,
                        _ = e.avatar,
                        E = e.newPassword,
                        v = e.discriminator,
                        h = t.close;
                    return (0, s.Z)((function(e) {
                        var t = b(S({
                                username: c,
                                email: f,
                                email_token: d,
                                password: y,
                                avatar: _,
                                new_password: E
                            }, e), {
                                discriminator: null != v && "" !== v ? v : void 0
                            }),
                            n = o.Z.get(p.JkL),
                            i = (0, a.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var l = o.Z.get(p.scU);
                        if (null != p.mvA && null != l) {
                            t.push_voip_provider = p.mvA;
                            t.push_voip_token = l
                        }
                        return r.ZP.patch({
                            url: p.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: O.Z.Messages.TWO_FA_CHANGE_ACCOUNT
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
                        l.default.track(p.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, u.xR)(t.avatar)
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
                        null != E && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: E
                        });
                        null != y && null != E && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        h ? n.close() : n.submitComplete();
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
        832642: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(473708),
                l = n(347234),
                u = n.n(l),
                s = n(483683),
                a = n.n(s),
                f = n(63685),
                p = n.n(f);

            function O(e) {
                var t = e.className,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: i()(u().container, t),
                    children: [(0, r.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: p(),
                        className: i()(u().sparkleIcon, u().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a(),
                        className: i()(u().sparkleIcon, u().sparkleTop)
                    })]
                })
            }
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                c = n(744564),
                l = n(473903),
                u = n(2590);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function O(e) {
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

            function d(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var _ = u.QZA.CLOSED,
                E = null,
                v = null,
                h = {},
                T = {},
                g = {},
                m = null,
                P = null,
                I = !1,
                A = !1,
                C = null,
                w = null,
                j = null,
                L = [],
                N = null,
                R = null;

            function U(e) {
                var t, n, r, o, i, c, s = l.default.getCurrentUser();
                if (null == s) return Z();
                v = null !== (t = e.section) && void 0 !== t ? t : v;
                N = null !== (n = e.section) && void 0 !== n ? n : v;
                null != e.subsection && null != v && (h[v] = e.subsection);
                null != e.scrollPosition && null != v && (T[v] = e.scrollPosition);
                A = !!e.openWithoutBackstack;
                _ = u.QZA.OPEN;
                g = {};
                m = f({}, u.oAB.ACCOUNT, {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: "",
                    newPassword: null,
                    claimed: s.isClaimed()
                });
                P = O({}, m);
                w = null !== (r = e.onClose) && void 0 !== r ? r : null;
                j = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                L = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                R = null !== (c = e.impressionSource) && void 0 !== c ? c : null
            }

            function Z() {
                _ = u.QZA.CLOSED;
                I = !1;
                m = null;
                N = null;
                P = null;
                E = null;
                v = null;
                h = {};
                T = {};
                w = null;
                j = null;
                L = [];
                R = null
            }

            function D() {
                _ = u.QZA.OPEN;
                g = {}
            }
            var M = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && S(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.default)
                };
                r.hasChanges = function() {
                    return null != P && null != m && (!(!this.isOpen() && C !== u.cII.USER_SETTINGS) && !o().isEqual(P, m))
                };
                r.isOpen = function() {
                    return I
                };
                r.getPreviousSection = function() {
                    return E
                };
                r.getSection = function() {
                    return v
                };
                r.getSubsection = function() {
                    return null != v ? h[v] : null
                };
                r.getScrollPosition = function() {
                    return null != v ? T[v] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return A
                };
                r.getProps = function() {
                    return {
                        submitting: _ === u.QZA.SUBMITTING,
                        section: v,
                        subsection: null != v ? h[v] : null,
                        scrollPosition: null != v ? T[v] : null,
                        settings: P,
                        errors: g,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: j,
                        analyticsLocations: L,
                        initialSection: N,
                        impressionSource: R
                    }
                };
                ! function(e, t, n) {
                    t && a(e.prototype, t);
                    n && a(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return w
                    }
                }]);
                return n
            }(i.ZP.Store);
            M.displayName = "UserSettingsModalStore";
            const k = new M(c.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    I = !0;
                    U(e)
                },
                USER_SETTINGS_MODAL_INIT: U,
                USER_SETTINGS_MODAL_CLOSE: Z,
                LOGOUT: Z,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    _ = u.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (_ !== u.QZA.SUBMITTING) return !1;
                    _ = u.QZA.OPEN;
                    v = u.oAB.ACCOUNT;
                    var t;
                    g = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    E = v;
                    v = e.section;
                    j = null;
                    var t;
                    L = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (h[v] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete h[t] : null != v && delete h[v]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete T[t] : null != v && delete T[v]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == P && (P = {});
                    var n = P[u.oAB.ACCOUNT];
                    P[u.oAB.ACCOUNT] = O({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: D,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = l.default.getCurrentUser();
                    D();
                    if (null != e) {
                        m = f({}, u.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        P = O({}, m)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    C = e.tab;
                    return null == v && C === u.cII.USER_SETTINGS && U({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => c,
                Dt: () => l,
                FG: () => u
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                l = function() {
                    return (0, i.Z)((function() {
                        return c()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(l())
                }
        },
        952097: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function s(e, t) {
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

            function a(e, t, n) {
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

            function p(e, t) {
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
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 40 : t,
                    o = e.height,
                    i = void 0 === o ? 40 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    s = p(e, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", f(function(e) {
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
                }({}, (0, c.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 40 40",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M37.581 26.6667L40 29.0857L35.7524 33.3333L40 37.581L37.581 40L33.3334 35.7524L29.0857 40L26.6667 37.581L30.9143 33.3333L26.6667 29.0857L29.0857 26.6667L33.3334 30.9143L37.581 26.6667Z",
                        fill: u
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23.3294 21.5042C22.1286 22.3692 21.1773 23.5589 20.6041 24.9448C20.4081 24.981 20.2062 25 20 25C18.1667 25 16.6667 23.5 16.6667 21.6667C16.6667 19.8333 18.1667 18.3333 20 18.3333C21.7789 18.3333 23.244 19.7456 23.3294 21.5042ZM28.1664 20C27.3936 16.1977 24.0293 13.3333 20 13.3333C15.4 13.3333 11.6667 17.0667 11.6667 21.6667C11.6667 23.1833 12.1 24.5833 12.8167 25.8167L10.6334 27.0833C9.70002 25.4833 9.16669 23.6333 9.16669 21.6667C9.16669 15.7 14.0334 10.8333 20 10.8333C25.4001 10.8333 29.8992 14.8197 30.7049 20H28.1664ZM35.7468 20C34.915 12.0346 28.1871 5.83333 20 5.83333C11.25 5.83333 4.16669 12.9167 4.16669 21.6667C4.16669 24.55 4.95002 27.25 6.28335 29.5667L4.13335 30.8167C2.58335 28.1333 1.66669 25 1.66669 21.6667C1.66669 11.55 9.88335 3.33333 20 3.33333C29.5549 3.33333 37.415 10.6628 38.2584 20H35.7468ZM20.0154 27.5C20.0052 27.6654 20 27.8321 20 28V33.3333H14.1667V32.5C14.1667 29.6667 16.5667 27.5 20 27.5C20.0051 27.5 20.0103 27.5 20.0154 27.5Z",
                        fill: u
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    S = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, c.Z)(S)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M22.335 13.019c.317.035.637-.169.652-.487.009-.176.013-.354.013-.532 0-6.075-4.925-11-11-11S1 5.925 1 12c0 2.3.706 4.436 1.914 6.202.339.496 1.045.51 1.452.068l.02-.02c.334-.364.349-.914.078-1.328a9 9 0 1 1 16.529-4.561c-.015.38.368.683.746.65.198-.017.398-.014.596.008Zm-9.742 3.01c.238.023.408.227.447.463.1.597.379 1.17.839 1.63l.525.524a.5.5 0 0 1 0 .708l-.525.525a2.994 2.994 0 0 0-.86 2.456c.035.317-.169.637-.487.652a10.955 10.955 0 0 1-5.393-1.117c-.689-.34-1.06-1.115-.808-1.84a6.003 6.003 0 0 1 6.263-4.001Zm.536-1.249a3 3 0 1 1-2.259-5.56 3 3 0 0 1 2.26 5.56Zm5.66-1.068c-.076.301-.448.387-.668.167a2.995 2.995 0 0 0-.814-.58.62.62 0 0 1-.351-.63 5 5 0 1 0-9.564 1.274c.174.413.136.901-.168 1.23l-.054.06c-.428.463-1.176.42-1.454-.145a7 7 0 1 1 13.073-1.376Zm-2.082 1.58a1 1 0 0 0-1.414 1.415L17.586 19l-2.293 2.293a1 1 0 0 0 1.414 1.414L19 20.414l2.293 2.293a1 1 0 0 0 1.414-1.414L20.414 19l2.293-2.293a1 1 0 0 0-1.414-1.414L19 17.586l-2.293-2.293Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        989824: (e, t, n) => {
            "use strict";
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