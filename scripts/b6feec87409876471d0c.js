(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [91478], {
        483683: (t, e, n) => {
            t.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (t, e, n) => {
            t.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        735885: (t, e, n) => {
            "use strict";
            n.d(e, {
                jN: () => o,
                xf: () => i,
                Ou: () => c
            });
            var r = n(744564);

            function o(t) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: t
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
        734691: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => E
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                c = n(223219),
                u = n(652591),
                l = n(775173),
                s = n(488110),
                a = n(120415),
                f = n(735885),
                p = n(2590),
                S = n(473708);

            function O(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        O(t, e, n[e])
                    }))
                }
                return t
            }

            function _(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }
            const E = {
                open: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(d({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: t,
                        subsection: e
                    }, n));
                    (0, f.jN)(p.S9g.USER_SETTINGS)
                },
                init: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(d({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: t,
                        subsection: e
                    }, n))
                },
                close: function() {
                    var t = c.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != t && t()
                },
                setSection: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(d({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: t,
                        subsection: e
                    }, n))
                },
                clearSubsection: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: t
                    })
                },
                clearScrollPosition: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: t
                    })
                },
                updateAccount: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: t
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
                saveAccountChanges: function(t, e) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var c = t.username,
                        f = t.email,
                        O = t.emailToken,
                        E = t.password,
                        b = t.avatar,
                        y = t.newPassword,
                        T = t.discriminator,
                        v = e.close;
                    return (0, s.Z)((function(t) {
                        var e = _(d({
                                username: c,
                                email: f,
                                email_token: O,
                                password: E,
                                avatar: b,
                                new_password: y
                            }, t), {
                                discriminator: null != T && "" !== T ? T : void 0
                            }),
                            n = o.Z.get(p.JkL),
                            i = (0, a.xJ)();
                        if (null != i && null != n) {
                            e.push_provider = i;
                            e.push_token = n
                        }
                        var u = o.Z.get(p.scU);
                        if (null != p.mvA && null != u) {
                            e.push_voip_provider = p.mvA;
                            e.push_voip_token = u
                        }
                        return r.ZP.patch({
                            url: p.ANM.ME,
                            oldFormErrors: !0,
                            body: e
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: S.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(t) {
                        var e = t.body,
                            r = e.token;
                        u.default.track(p.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, l.xR)(e.avatar)
                        });
                        delete e.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: e.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: e
                        });
                        null != y && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: e,
                            newPassword: y
                        });
                        null != E && null != y && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: e.id
                        });
                        v ? n.close() : n.submitComplete();
                        return t
                    }), (function(t) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: t.body
                        });
                        return t
                    }))
                }
            }
        },
        832642: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => S
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(473708),
                u = n(347234),
                l = n.n(u),
                s = n(483683),
                a = n.n(s),
                f = n(63685),
                p = n.n(f);

            function S(t) {
                var e = t.className,
                    n = t.children;
                return (0, r.jsxs)("div", {
                    className: i()(l().container, e),
                    children: [(0, r.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: p(),
                        className: i()(l().sparkleIcon, l().sparkleBottom)
                    }), n, (0, r.jsx)("img", {
                        alt: c.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a(),
                        className: i()(l().sparkleIcon, l().sparkleTop)
                    })]
                })
            }
        },
        223219: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => k
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                c = n(744564),
                u = n(473903),
                l = n(2590);

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function f(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        f(t, e, n[e])
                    }))
                }
                return t
            }

            function O(t, e) {
                return !e || "object" !== _(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t, e) {
                d = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return d(t, e)
            }
            var _ = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function E(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var b = l.QZA.CLOSED,
                y = null,
                T = null,
                v = {},
                h = {},
                I = {},
                A = null,
                C = null,
                g = !1,
                m = !1,
                P = null,
                L = null,
                N = null,
                R = [],
                U = null,
                w = null;

            function j(t) {
                var e, n, r, o, i, c, s = u.default.getCurrentUser();
                if (null == s) return M();
                T = null !== (e = t.section) && void 0 !== e ? e : T;
                U = null !== (n = t.section) && void 0 !== n ? n : T;
                null != t.subsection && null != T && (v[T] = t.subsection);
                null != t.scrollPosition && null != T && (h[T] = t.scrollPosition);
                m = !!t.openWithoutBackstack;
                b = l.QZA.OPEN;
                I = {};
                A = f({}, l.oAB.ACCOUNT, {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: "",
                    newPassword: null,
                    claimed: s.isClaimed()
                });
                C = S({}, A);
                L = null !== (r = t.onClose) && void 0 !== r ? r : null;
                N = null !== (o = t.analyticsLocation) && void 0 !== o ? o : null;
                R = null !== (i = t.analyticsLocations) && void 0 !== i ? i : [];
                w = null !== (c = t.impressionSource) && void 0 !== c ? c : null
            }

            function M() {
                b = l.QZA.CLOSED;
                g = !1;
                A = null;
                U = null;
                C = null;
                y = null;
                T = null;
                v = {};
                h = {};
                L = null;
                N = null;
                R = [];
                w = null
            }

            function D() {
                b = l.QZA.OPEN;
                I = {}
            }
            var Z = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && d(t, e)
                }(n, t);
                var e = E(n);

                function n() {
                    s(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != C && null != A && (!(!this.isOpen() && P !== l.cII.USER_SETTINGS) && !o().isEqual(C, A))
                };
                r.isOpen = function() {
                    return g
                };
                r.getPreviousSection = function() {
                    return y
                };
                r.getSection = function() {
                    return T
                };
                r.getSubsection = function() {
                    return null != T ? v[T] : null
                };
                r.getScrollPosition = function() {
                    return null != T ? h[T] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return m
                };
                r.getProps = function() {
                    return {
                        submitting: b === l.QZA.SUBMITTING,
                        section: T,
                        subsection: null != T ? v[T] : null,
                        scrollPosition: null != T ? h[T] : null,
                        settings: C,
                        errors: I,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: m,
                        analyticsLocation: N,
                        analyticsLocations: R,
                        initialSection: U,
                        impressionSource: w
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: b,
                        previousSection: y,
                        section: T,
                        subsections: v,
                        scrollPositions: h,
                        errors: I,
                        originalSettings: A,
                        settings: C,
                        open: g,
                        openWithoutBackstack: m,
                        tab: P,
                        onClose: L,
                        analyticsLocation: N,
                        analyticsLocations: R,
                        initialSection: U,
                        impressionSource: w
                    }
                };
                ! function(t, e, n) {
                    e && a(t.prototype, e);
                    n && a(t, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return L
                    }
                }]);
                return n
            }(i.ZP.Store);
            Z.displayName = "UserSettingsModalStore";
            const k = new Z(c.Z, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    g = !0;
                    j(t)
                },
                USER_SETTINGS_MODAL_INIT: j,
                USER_SETTINGS_MODAL_CLOSE: M,
                LOGOUT: M,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    b = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(t) {
                    if (b !== l.QZA.SUBMITTING) return !1;
                    b = l.QZA.OPEN;
                    T = l.oAB.ACCOUNT;
                    var e;
                    I = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    y = T;
                    T = t.section;
                    N = null;
                    var e;
                    R = null !== (e = t.analyticsLocations) && void 0 !== e ? e : [];
                    null != t.subsection && (v[T] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    var e = t.forSection;
                    null != e ? delete v[e] : null != T && delete v[T]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    var e = t.forSection;
                    null != e ? delete h[e] : null != T && delete h[T]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    var e = t.settings;
                    null == C && (C = {});
                    var n = C[l.oAB.ACCOUNT];
                    C[l.oAB.ACCOUNT] = S({}, n, e)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: D,
                USER_SETTINGS_MODAL_RESET: function() {
                    var t = u.default.getCurrentUser();
                    D();
                    if (null != t) {
                        A = f({}, l.oAB.ACCOUNT, {
                            userId: t.id,
                            username: t.username,
                            discriminator: t.discriminator,
                            email: t.email,
                            avatar: t.avatar,
                            password: "",
                            newPassword: null,
                            claimed: t.isClaimed()
                        });
                        C = S({}, A)
                    }
                },
                DRAWER_SELECT_TAB: function(t) {
                    P = t.tab;
                    return null == T && P === l.cII.USER_SETTINGS && j({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        443812: (t, e, n) => {
            "use strict";
            n.d(e, {
                hQ: () => c,
                Dt: () => u,
                FG: () => l
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                c = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(t)
                },
                u = function() {
                    return (0, i.Z)((function() {
                        return c()
                    }))
                },
                l = function(t) {
                    return (0, t.children)(u())
                }
        },
        897749: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function c(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function u(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function l(t) {
                var e = t.width,
                    n = void 0 === e ? 40 : e,
                    l = t.height,
                    s = void 0 === l ? 40 : l,
                    a = t.color,
                    f = void 0 === a ? "currentColor" : a,
                    p = u(t, ["width", "height", "color"]);
                return (0,
                    r.jsxs)("svg", c(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            i(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 40 40",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M37.581 26.6667L40 29.0857L35.7524 33.3333L40 37.581L37.581 40L33.3334 35.7524L29.0857 40L26.6667 37.581L30.9143 33.3333L26.6667 29.0857L29.0857 26.6667L33.3334 30.9143L37.581 26.6667Z",
                        fill: f
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23.3294 21.5042C22.1286 22.3692 21.1773 23.5589 20.6041 24.9448C20.4081 24.981 20.2062 25 20 25C18.1667 25 16.6667 23.5 16.6667 21.6667C16.6667 19.8333 18.1667 18.3333 20 18.3333C21.7789 18.3333 23.244 19.7456 23.3294 21.5042ZM28.1664 20C27.3936 16.1977 24.0293 13.3333 20 13.3333C15.4 13.3333 11.6667 17.0667 11.6667 21.6667C11.6667 23.1833 12.1 24.5833 12.8167 25.8167L10.6334 27.0833C9.70002 25.4833 9.16669 23.6333 9.16669 21.6667C9.16669 15.7 14.0334 10.8333 20 10.8333C25.4001 10.8333 29.8992 14.8197 30.7049 20H28.1664ZM35.7468 20C34.915 12.0346 28.1871 5.83333 20 5.83333C11.25 5.83333 4.16669 12.9167 4.16669 21.6667C4.16669 24.55 4.95002 27.25 6.28335 29.5667L4.13335 30.8167C2.58335 28.1333 1.66669 25 1.66669 21.6667C1.66669 11.55 9.88335 3.33333 20 3.33333C29.5549 3.33333 37.415 10.6628 38.2584 20H35.7468ZM20.0154 27.5C20.0052 27.6654 20 27.8321 20 28V33.3333H14.1667V32.5C14.1667 29.6667 16.5667 27.5 20 27.5C20.0051 27.5 20.0103 27.5 20.0154 27.5Z",
                        fill: f
                    })]
                }))
            }
        },
        989824: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(t) {
                var e = (0, r.useRef)(o);
                e.current === o && (e.current = t());
                return e.current
            }
        }
    }
]);