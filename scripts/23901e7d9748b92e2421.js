"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56620], {
        398344: (e, t, n) => {
            n.d(t, {
                K: () => E,
                Z: () => g
            });
            var r = n(202351),
                i = n(744564),
                o = n(536392),
                u = n(162308),
                a = n(203600);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
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

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
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
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var E, y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }! function(e) {
                e.FILE_UPLOAD = "file_upload";
                e.STICKER_PICKER = "sticker_picker";
                e.EMOJI_PICKER = "emoji_picker";
                e.BOOSTING_FLOW = "boosting_flow"
            }(E || (E = {}));
            var b = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function O() {
                b = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function M() {
                var e = new Date;
                e.setDate(e.getDate() + 14);
                b.tutorialExpirationTime = e.getTime()
            }
            var T, P = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (b = e);
                    b.isPersistentHelperHidden = !1;
                    b.canPlayWowMoment = !1;
                    b.isFetchingWowMomentMedia = !1;
                    b.wowMomentWumpusMediaUrl = null;
                    b.wowMomentHelperMediaUrl = null
                };
                r.getState = function() {
                    return b
                };
                r.hasFlowStartEventBeenEmitted = function(e) {
                    null == b.hasFlowStartEventBeenEmitted[e] && (b.hasFlowStartEventBeenEmitted[e] = !1);
                    return b.hasFlowStartEventBeenEmitted[e]
                };
                r.__getLocalVars = function() {
                    return {
                        state: b
                    }
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "isPersistentCoachmarkCollapsed",
                    get: function() {
                        return b.isPersistentCoachmarkCollapsed
                    }
                }, {
                    key: "canPlayWowMoment",
                    get: function() {
                        return b.canPlayWowMoment
                    }
                }, {
                    key: "isPersistentHelperHidden",
                    get: function() {
                        return b.isPersistentHelperHidden
                    }
                }, {
                    key: "isFetchingWowMomentMedia",
                    get: function() {
                        return b.isFetchingWowMomentMedia
                    }
                }, {
                    key: "wowMomentWumpusMedia",
                    get: function() {
                        return b.wowMomentWumpusMediaUrl
                    }
                }, {
                    key: "wowMomentHelperMedia",
                    get: function() {
                        return b.wowMomentHelperMediaUrl
                    }
                }, {
                    key: "navigatedFromHelper",
                    get: function() {
                        return b.navigatedFromHelper
                    }
                }, {
                    key: "tutorialExpirationTime",
                    get: function() {
                        return b.tutorialExpirationTime
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            P.displayName = "PremiumTutorialStore";
            P.persistKey = "PremiumTutorialStore";
            P.migrations = [function(e) {
                return d(function(e) {
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
                }({}, e), {
                    hasFlowStartEventBeenEmitted: null !== (T = e.hasFlowStartEventBeenEmitted) && void 0 !== T ? T : {}
                })
            }];
            const g = new P(i.Z, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    b.isPersistentCoachmarkCollapsed = !b.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    var t = e.event,
                        n = e.value;
                    b.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    O()
                },
                RESET_PREMIUM_TUTORIAL_STORE: O,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    var t = e.value;
                    b.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    var t = e.value;
                    b.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    var t = e.value;
                    b.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    var t = e.wumpusMedia,
                        n = e.helperMedia;
                    b.wowMomentWumpusMediaUrl = t;
                    b.wowMomentHelperMediaUrl = n;
                    b.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    var t = e.value;
                    b.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    var t = e.subscription;
                    u.Z.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && null != t.items.find((function(e) {
                        return a.UD.has(e.plan_id)
                    })) && M()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    var t = e.entitlement;
                    u.Z.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && (null == t ? void 0 : t.sku_id) === a.Si.TIER_2 && null == o.Z.getPremiumSubscription(!1) && null == b.tutorialExpirationTime && M()
                }
            })
        },
        156620: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        162308: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        305082: (e, t, n) => {
            n.d(t, {
                dA: () => M,
                z2: () => g,
                eM: () => S
            });
            var r = n(667294),
                i = n(202351),
                o = n(418705),
                u = n(673679),
                a = n(896490),
                c = n(473419),
                l = n(473903),
                s = n(536392),
                f = n(116094),
                d = n(666870),
                p = n(398344),
                m = n(156620),
                E = n(162308),
                y = n(203600),
                v = 18e5,
                b = function() {
                    var e = (0, i.e7)([s.Z], (function() {
                            return s.Z.getPremiumTypeSubscription()
                        })),
                        t = (0, a.wE)(o.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, d.s6)(e) && !t
                },
                O = function() {
                    var e = (0, d._O)(),
                        t = (0, a.wE)(o.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, i.e7)([l.default], (function() {
                            return l.default.getCurrentUser()
                        })),
                        c = (0, f.M5)(n, y.p9.TIER_2),
                        p = (0, i.e7)([s.Z], (function() {
                            return s.Z.hasFetchedPreviousPremiumTypeSubscription()
                        })),
                        m = (0, i.e7)([s.Z], (function() {
                            return s.Z.getPreviousPremiumTypeSubscription()
                        })),
                        E = !e && c;
                    r.useEffect((function() {
                        !E || p || t || (0, u.ou)()
                    }), [E, p, t]);
                    return E && p && null == m && !t
                };

            function M(e) {
                var t, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = b() && n,
                    o = m.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: r,
                        disable: !r
                    }),
                    u = o.enabled,
                    a = (0, i.e7)([p.Z], (function() {
                        return p.Z.tutorialExpirationTime
                    })),
                    c = (new Date).getTime(),
                    l = null != a && a > c,
                    f = (0, i.e7)([s.Z], (function() {
                        var e, n;
                        return null !== (t = null === (e = s.Z.getPremiumSubscription()) || void 0 === e || null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== t ? t : 0
                    })),
                    d = c - f < v,
                    y = O() && n,
                    M = E.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: y && d,
                        disable: !y
                    }).enabled && l;
                return u || M
            }
            var T = function() {
                    var e = s.Z.getPremiumTypeSubscription(),
                        t = (0, a.un)(o.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, d.s6)(e) && !t
                },
                P = function() {
                    var e = (0, d.se)(),
                        t = (0, a.un)(o.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = l.default.getCurrentUser(),
                        r = (0, f.M5)(n, y.p9.TIER_2),
                        i = s.Z.hasFetchedPreviousPremiumTypeSubscription(),
                        c = s.Z.getPreviousPremiumTypeSubscription();
                    i || !r || t || (0, u.ou)();
                    return !t && (!e && r && i && null == c)
                },
                g = function(e) {
                    var t, n, r, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = T() && i,
                        u = m.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !o,
                            autoTrackExposure: o
                        }),
                        a = u.enabled,
                        c = (new Date).getTime(),
                        l = p.Z.tutorialExpirationTime,
                        f = null != l && l > c,
                        d = null !== (r = null === (t = s.Z.getPremiumSubscription()) || void 0 === t || null === (n = t.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0,
                        y = c - d < v,
                        b = P() && i,
                        O = E.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !b,
                            autoTrackExposure: b && y
                        }).enabled && f;
                    return a || O
                };
            var w = [];

            function _() {
                return y.N$.filter((function(e) {
                    return (0, a.un)(e)
                }))
            }

            function S() {
                return e = _, t = w, n = M("useMemoizedValueSyncedWithDismissibleContents"), o = (0, i.e7)([c.Z], (function() {
                    var e;
                    return null === (e = c.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                })), r.useMemo((function() {
                    return n ? e() : t
                }), [n, t, e, o]);
                var e, t, n, o
            }
        },
        235606: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(785893);
            n(667294);

            function i(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    c = e.className,
                    l = e.foreground;
                return (0, r.jsx)("svg", {
                    className: c,
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                    })
                })
            }
        },
        585798: (e, t, n) => {
            n.d(t, {
                Ox: () => h,
                QP: () => g,
                q4: () => R,
                ob: () => I
            });
            var r = n(785893),
                i = n(667294),
                o = n(873955),
                u = n.n(o),
                a = n(494537),
                c = n(588983),
                l = n(38736),
                s = n(142643),
                f = n(882723),
                d = n(241166),
                p = n(421281),
                m = n(329543),
                E = n(664868),
                y = n.n(E);

            function v(e, t) {
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

            function O(e, t) {
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

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T, P = (0,
                p.Mg)(s.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            ! function(e) {
                e[e.ENTERING = 1] = "ENTERING";
                e[e.ENTERED = 2] = "ENTERED";
                e[e.EXITING = 3] = "EXITING";
                e[e.EXITED = 4] = "EXITED"
            }(T || (T = {}));
            var g = (0, l.Z)((function(e) {
                return {
                    fullScreenLayers: [],
                    addLayer: function(t) {
                        return e((function(e) {
                            return {
                                fullScreenLayers: M(e.fullScreenLayers).concat([t])
                            }
                        }))
                    }
                }
            }));

            function w(e) {
                var t = e.item,
                    n = i.useRef(null);
                (0, f.useFocusLock)(n);
                i.useEffect((function() {
                    d.Z.disable();
                    d.Z.enableTemp((e = t.key, {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action: function() {
                                I(e)
                            }
                        }
                    }));
                    var e;
                    return function() {
                        d.Z.disableTemp()
                    }
                }), [t.key]);
                return (0, r.jsx)(t.LayerComponent, {
                    children: (0, r.jsxs)("div", {
                        className: y().root,
                        ref: n,
                        children: [(0, r.jsx)("div", {
                            className: y().drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : T.EXITING,
                            closeLayer: function() {
                                return I(t.key)
                            }
                        })]
                    })
                })
            }
            var _ = {
                    enter: y().enter,
                    enterActive: y().enterActive,
                    enterDone: y().enterDone,
                    exit: y().exit,
                    exitActive: y().exitActive,
                    exitDone: y().exitDone
                },
                S = {
                    enter: y().enterReducedMotion,
                    enterActive: y().enterActiveReducedMotion,
                    enterDone: y().enterDoneReducedMotion,
                    exit: y().exitReducedMotion,
                    exitActive: y().exitActiveReducedMotion,
                    exitDone: y().exitDoneReducedMotion
                };

            function h() {
                var e = i.useContext(f.AccessibilityPreferencesContext).reducedMotion.enabled ? S : _,
                    t = g((function(e) {
                        return e.fullScreenLayers
                    }));
                return (0, r.jsx)(a.Z, {
                    children: t.map((function(n) {
                        return (0, r.jsx)(c.Z, {
                            classNames: e,
                            timeout: P,
                            onEntered: function() {
                                g.setState({
                                    fullScreenLayers: t.map((function(e) {
                                        return e.key === n.key ? O(function(e) {
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
                                        }({}, e), {
                                            transitionState: T.ENTERED
                                        }) : e
                                    }))
                                })
                            },
                            unmountOnExit: !0,
                            children: (0, r.jsx)(w, {
                                item: n
                            })
                        }, n.key)
                    }))
                })
            }

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    n = t.layerKey,
                    r = t.Layer,
                    i = null != n ? n : u()();
                g.setState((function(t) {
                    return {
                        fullScreenLayers: M(t.fullScreenLayers).concat([{
                            key: i,
                            transitionState: T.ENTERING,
                            LayerComponent: null != r ? r : m.ZP,
                            render: e
                        }])
                    }
                }));
                return i
            }

            function I(e) {
                g.setState((function(t) {
                    return {
                        fullScreenLayers: t.fullScreenLayers.filter((function(t) {
                            return t.key !== e
                        }))
                    }
                }))
            }
        }
    }
]);
//# sourceMappingURL=23901e7d9748b92e2421.js.map