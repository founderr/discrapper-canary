(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39697], {
        250282: (e, t, n) => {
            e.exports = n.p + "4d4b2ca112d3e89d2f063f09131604f5.png"
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => r,
                xf: () => i,
                Ou: () => l
            });
            var o = n(744564);

            function r(e) {
                o.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                o.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                o.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        734691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var o = n(281110),
                r = n(630631),
                i = n(744564),
                l = n(223219),
                s = n(652591),
                u = n(775173),
                c = n(488110),
                a = n(120415),
                f = n(735885),
                S = n(2590),
                _ = n(473708);

            function p(e, t, n) {
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
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    o.forEach((function(t) {
                        p(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, o)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            const T = {
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
                    (0, f.jN)(S.S9g.USER_SETTINGS)
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
                    var e = l.Z.onClose;
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
                    var l = e.username,
                        f = e.email,
                        p = e.emailToken,
                        T = e.password,
                        O = e.avatar,
                        h = e.newPassword,
                        y = e.discriminator,
                        A = t.close;
                    return (0, c.Z)((function(e) {
                        var t = d(E({
                                username: l,
                                email: f,
                                email_token: p,
                                password: T,
                                avatar: O,
                                new_password: h
                            }, e), {
                                discriminator: null != y && "" !== y ? y : void 0
                            }),
                            n = r.Z.get(S.JkL),
                            i = (0, a.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var s = r.Z.get(S.scU);
                        if (null != S.mvA && null != s) {
                            t.push_voip_provider = S.mvA;
                            t.push_voip_token = s
                        }
                        return o.ZP.patch({
                            url: S.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: _.Z.Messages.TWO_FA_CHANGE_ACCOUNT
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
                            o = t.token;
                        s.default.track(S.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, u.xR)(t.avatar)
                        });
                        delete t.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: o,
                            userId: t.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != h && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: h
                        });
                        null != T && null != h && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        A ? n.close() : n.submitComplete();
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
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var o = n(120415);

            function r(e, t, n, o, r, i, l) {
                try {
                    var s = e[i](l),
                        u = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(u) : Promise.resolve(u).then(o, r)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, i) {
                        var l = e.apply(t, n);

                        function s(e) {
                            r(l, o, i, s, u, "next", e)
                        }

                        function u(e) {
                            r(l, o, i, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var n, o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1,
                                    o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                                (o = 0, r) && (i = [2 & i[0], r.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        r = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        o = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = l.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < r[1]) {
                                            l.label = r[1];
                                            r = i;
                                            break
                                        }
                                        if (r && l.label < r[2]) {
                                            l.label = r[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        r[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                o = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };

            function s(e, t) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = i((function(e, t) {
                    var r, i, s, u;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                0
                                ;
                                return [4, Promise.all([n.e(40532), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(27764), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(34669)]).then(n.bind(n, 624501))];
                            case 1:
                                r = l.sent(), i = r.default;
                                if (null != (s = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) s(null);
                                else if (o.FB) window.open(e);
                                else {
                                    (u = document.createElement("a")).href = e;
                                    u.target = "_blank";
                                    u.rel = "noreferrer noopener";
                                    u.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        39697: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => p
            });
            var o = n(785893),
                r = (n(667294), n(882723)),
                i = n(734691),
                l = n(320142),
                s = n(719174),
                u = n(2590),
                c = n(473708),
                a = n(852744),
                f = n.n(a),
                S = n(250282),
                _ = n.n(S);
            const p = function(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    a = (0, s.Z)();
                return (0, o.jsxs)(r.ModalRoot, {
                    transitionState: t,
                    "aria-label": c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
                    children: [(0, o.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: f().modalHeader,
                        children: [(0, o.jsx)("img", {
                            src: _(),
                            alt: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                            className: f().headerImg
                        }), (0, o.jsx)(r.Heading, {
                            variant: "eyebrow",
                            className: f().headerText,
                            children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_NOTICE
                        })]
                    }), (0, o.jsxs)(r.ModalContent, {
                        className: f().modalBody,
                        children: [(0, o.jsx)(r.Heading, {
                            variant: "heading-lg/bold",
                            className: f().modalInteriorHeader,
                            children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                        }), (0, o.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: a ? c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                        }), (0, o.jsxs)("div", {
                            className: f().buttonContainer,
                            children: [a ? (0, o.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                onClick: function() {
                                    i.Z.open(u.oAB.PRIVACY_AND_SAFETY);
                                    n()
                                },
                                fullWidth: !0,
                                children: c.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                            }) : (0, o.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                onClick: function() {
                                    (0, l.Z)("https://discord.com")
                                },
                                fullWidth: !0,
                                children: c.Z.Messages.LEARN_MORE
                            }), (0, o.jsx)(r.Button, {
                                color: r.Button.Colors.PRIMARY,
                                onClick: function() {
                                    n()
                                },
                                fullWidth: !0,
                                children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                            }), (0, o.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
                                    handleFalsePositiveHook: function() {}
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        719174: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var o = n(202351),
                r = n(473903);

            function i() {
                return (0, o.e7)([r.default], (function() {
                    var e;
                    return null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                }))
            }
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var o = n(496486),
                r = n.n(o),
                i = n(202351),
                l = n(744564),
                s = n(473903),
                u = n(2590);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1;
                    o.configurable = !0;
                    "value" in o && (o.writable = !0);
                    Object.defineProperty(e, o.key, o)
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

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    o.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
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
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var n, o = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return p(this, n)
                }
            }
            var O = u.QZA.CLOSED,
                h = null,
                y = null,
                A = {},
                v = {},
                N = {},
                b = null,
                R = null,
                C = !1,
                m = !1,
                I = null,
                U = null,
                g = null,
                L = [],
                P = null,
                M = null;

            function D(e) {
                var t, n, o, r, i, l, c = s.default.getCurrentUser();
                if (null == c) return w();
                y = null !== (t = e.section) && void 0 !== t ? t : y;
                P = null !== (n = e.section) && void 0 !== n ? n : y;
                null != e.subsection && null != y && (A[y] = e.subsection);
                null != e.scrollPosition && null != y && (v[y] = e.scrollPosition);
                m = !!e.openWithoutBackstack;
                O = u.QZA.OPEN;
                N = {};
                b = f({}, u.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                R = _({}, b);
                U = null !== (o = e.onClose) && void 0 !== o ? o : null;
                g = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null;
                L = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                M = null !== (l = e.impressionSource) && void 0 !== l ? l : null
            }

            function w() {
                O = u.QZA.CLOSED;
                C = !1;
                b = null;
                P = null;
                R = null;
                h = null;
                y = null;
                A = {};
                v = {};
                U = null;
                g = null;
                L = [];
                M = null
            }

            function Z() {
                O = u.QZA.OPEN;
                N = {}
            }
            var B = function(e) {
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
                var t = T(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var o = n.prototype;
                o.initialize = function() {
                    this.waitFor(s.default)
                };
                o.hasChanges = function() {
                    return null != R && null != b && (!(!this.isOpen() && I !== u.cII.USER_SETTINGS) && !r().isEqual(R, b))
                };
                o.isOpen = function() {
                    return C
                };
                o.getPreviousSection = function() {
                    return h
                };
                o.getSection = function() {
                    return y
                };
                o.getSubsection = function() {
                    return null != y ? A[y] : null
                };
                o.getScrollPosition = function() {
                    return null != y ? v[y] : null
                };
                o.shouldOpenWithoutBackstack = function() {
                    return m
                };
                o.getProps = function() {
                    return {
                        submitting: O === u.QZA.SUBMITTING,
                        section: y,
                        subsection: null != y ? A[y] : null,
                        scrollPosition: null != y ? v[y] : null,
                        settings: R,
                        errors: N,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: m,
                        analyticsLocation: g,
                        analyticsLocations: L,
                        initialSection: P,
                        impressionSource: M
                    }
                };
                o.__getLocalVars = function() {
                    return {
                        formState: O,
                        previousSection: h,
                        section: y,
                        subsections: A,
                        scrollPositions: v,
                        errors: N,
                        originalSettings: b,
                        settings: R,
                        open: C,
                        openWithoutBackstack: m,
                        tab: I,
                        onClose: U,
                        analyticsLocation: g,
                        analyticsLocations: L,
                        initialSection: P,
                        impressionSource: M
                    }
                };
                ! function(e, t, n) {
                    t && a(e.prototype, t);
                    n && a(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return U
                    }
                }]);
                return n
            }(i.ZP.Store);
            B.displayName = "UserSettingsModalStore";
            const k = new B(l.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    C = !0;
                    D(e)
                },
                USER_SETTINGS_MODAL_INIT: D,
                USER_SETTINGS_MODAL_CLOSE: w,
                LOGOUT: w,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    O = u.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (O !== u.QZA.SUBMITTING) return !1;
                    O = u.QZA.OPEN;
                    y = u.oAB.ACCOUNT;
                    var t;
                    N = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    h = y;
                    y = e.section;
                    g = null;
                    var t;
                    L = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (A[y] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete A[t] : null != y && delete A[y]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete v[t] : null != y && delete v[y]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == R && (R = {});
                    var n = R[u.oAB.ACCOUNT];
                    R[u.oAB.ACCOUNT] = _({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: Z,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = s.default.getCurrentUser();
                    Z();
                    if (null != e) {
                        b = f({}, u.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        R = _({}, b)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    I = e.tab;
                    return null == y && I === u.cII.USER_SETTINGS && D({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        }
    }
]);