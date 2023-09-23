"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56620], {
        980559: (e, t, n) => {
            n.d(t, {
                p: () => l
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
            var l = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    m = void 0 === d ? "" : d,
                    E = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm8.5 18a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
                        clipRule: "evenodd",
                        className: m
                    })
                }))
            }
        },
        398344: (e, t, n) => {
            n.d(t, {
                K: () => E,
                Z: () => h
            });
            var r = n(202351),
                o = n(744564),
                i = n(536392),
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

            function p(e, t) {
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

            function d(e, t) {
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

            function b(e) {
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
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }! function(e) {
                e.FILE_UPLOAD = "file_upload";
                e.STICKER_PICKER = "sticker_picker";
                e.EMOJI_PICKER = "emoji_picker";
                e.BOOSTING_FLOW = "boosting_flow"
            }(E || (E = {}));
            var v = {
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
                v = {
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

            function g() {
                var e = new Date;
                e.setDate(e.getDate() + 14);
                v.tutorialExpirationTime = e.getTime()
            }
            var w, P = function(e) {
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
                var t = b(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (v = e);
                    v.isPersistentHelperHidden = !1;
                    v.canPlayWowMoment = !1;
                    v.isFetchingWowMomentMedia = !1;
                    v.wowMomentWumpusMediaUrl = null;
                    v.wowMomentHelperMediaUrl = null
                };
                r.getState = function() {
                    return v
                };
                r.hasFlowStartEventBeenEmitted = function(e) {
                    null == v.hasFlowStartEventBeenEmitted[e] && (v.hasFlowStartEventBeenEmitted[e] = !1);
                    return v.hasFlowStartEventBeenEmitted[e]
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "isPersistentCoachmarkCollapsed",
                    get: function() {
                        return v.isPersistentCoachmarkCollapsed
                    }
                }, {
                    key: "canPlayWowMoment",
                    get: function() {
                        return v.canPlayWowMoment
                    }
                }, {
                    key: "isPersistentHelperHidden",
                    get: function() {
                        return v.isPersistentHelperHidden
                    }
                }, {
                    key: "isFetchingWowMomentMedia",
                    get: function() {
                        return v.isFetchingWowMomentMedia
                    }
                }, {
                    key: "wowMomentWumpusMedia",
                    get: function() {
                        return v.wowMomentWumpusMediaUrl
                    }
                }, {
                    key: "wowMomentHelperMedia",
                    get: function() {
                        return v.wowMomentHelperMediaUrl
                    }
                }, {
                    key: "navigatedFromHelper",
                    get: function() {
                        return v.navigatedFromHelper
                    }
                }, {
                    key: "tutorialExpirationTime",
                    get: function() {
                        return v.tutorialExpirationTime
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            P.displayName = "PremiumTutorialStore";
            P.persistKey = "PremiumTutorialStore";
            P.migrations = [function(e) {
                return p(function(e) {
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
                    hasFlowStartEventBeenEmitted: null !== (w = e.hasFlowStartEventBeenEmitted) && void 0 !== w ? w : {}
                })
            }];
            const h = new P(o.Z, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    v.isPersistentCoachmarkCollapsed = !v.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    var t = e.event,
                        n = e.value;
                    v.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    O()
                },
                RESET_PREMIUM_TUTORIAL_STORE: O,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    var t = e.value;
                    v.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    var t = e.value;
                    v.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    var t = e.value;
                    v.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    var t = e.wumpusMedia,
                        n = e.helperMedia;
                    v.wowMomentWumpusMediaUrl = t;
                    v.wowMomentHelperMediaUrl = n;
                    v.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    var t = e.value;
                    v.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    var t = e.subscription;
                    u.Z.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && null != t.items.find((function(e) {
                        return a.UD.has(e.plan_id)
                    })) && g()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    var t = e.entitlement;
                    u.Z.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && (null == t ? void 0 : t.sku_id) === a.Si.TIER_2 && null == i.Z.getPremiumSubscription(!1) && null == v.tutorialExpirationTime && g()
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
                dA: () => g,
                z2: () => h,
                eM: () => _
            });
            var r = n(667294),
                o = n(202351),
                i = n(418705),
                u = n(673679),
                a = n(896490),
                c = n(473419),
                l = n(473903),
                s = n(536392),
                f = n(116094),
                p = n(666870),
                d = n(398344),
                m = n(156620),
                E = n(162308),
                y = n(203600),
                b = 18e5,
                v = function() {
                    var e = (0, o.e7)([s.Z], (function() {
                            return s.Z.getPremiumTypeSubscription()
                        })),
                        t = (0, a.wE)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, p.s6)(e) && !t
                },
                O = function() {
                    var e = (0, p._O)(),
                        t = (0, a.wE)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, o.e7)([l.default], (function() {
                            return l.default.getCurrentUser()
                        })),
                        c = (0, f.M5)(n, y.p9.TIER_2),
                        d = (0, o.e7)([s.Z], (function() {
                            return s.Z.hasFetchedPreviousPremiumTypeSubscription()
                        })),
                        m = (0, o.e7)([s.Z], (function() {
                            return s.Z.getPreviousPremiumTypeSubscription()
                        })),
                        E = !e && c;
                    r.useEffect((function() {
                        !E || d || t || (0, u.ou)()
                    }), [E, d, t]);
                    return E && d && null == m && !t
                };

            function g(e) {
                var t, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = v() && n,
                    i = m.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: r,
                        disable: !r
                    }),
                    u = i.enabled,
                    a = (0, o.e7)([d.Z], (function() {
                        return d.Z.tutorialExpirationTime
                    })),
                    c = (new Date).getTime(),
                    l = null != a && a > c,
                    f = (0, o.e7)([s.Z], (function() {
                        var e, n;
                        return null !== (t = null === (e = s.Z.getPremiumSubscription()) || void 0 === e || null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== t ? t : 0
                    })),
                    p = c - f < b,
                    y = O() && n,
                    g = E.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: y && p,
                        disable: !y
                    }).enabled && l;
                return u || g
            }
            var w = function() {
                    var e = s.Z.getPremiumTypeSubscription(),
                        t = (0, a.un)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, p.s6)(e) && !t
                },
                P = function() {
                    var e = (0, p.se)(),
                        t = (0, a.un)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = l.default.getCurrentUser(),
                        r = (0, f.M5)(n, y.p9.TIER_2),
                        o = s.Z.hasFetchedPreviousPremiumTypeSubscription(),
                        c = s.Z.getPreviousPremiumTypeSubscription();
                    o || !r || t || (0, u.ou)();
                    return !t && (!e && r && o && null == c)
                },
                h = function(e) {
                    var t, n, r, o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = w() && o,
                        u = m.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !i,
                            autoTrackExposure: i
                        }),
                        a = u.enabled,
                        c = (new Date).getTime(),
                        l = d.Z.tutorialExpirationTime,
                        f = null != l && l > c,
                        p = null !== (r = null === (t = s.Z.getPremiumSubscription()) || void 0 === t || null === (n = t.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0,
                        y = c - p < b,
                        v = P() && o,
                        O = E.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !v,
                            autoTrackExposure: v && y
                        }).enabled && f;
                    return a || O
                };
            var M = [];

            function T() {
                return y.N$.filter((function(e) {
                    return (0, a.un)(e)
                }))
            }

            function _() {
                return e = T, t = M, n = g("useMemoizedValueSyncedWithDismissibleContents"), i = (0, o.e7)([c.Z], (function() {
                    var e;
                    return null === (e = c.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                })), r.useMemo((function() {
                    return n ? e() : t
                }), [n, t, e, i]);
                var e, t, n, i
            }
        },
        235606: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(980559);
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    c = e.className,
                    l = e.foreground;
                return (0, r.jsx)("svg", {
                    className: c,
                    width: n,
                    height: i,
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
            }), i.p)
        },
        585798: (e, t, n) => {
            n.d(t, {
                Ox: () => S,
                QP: () => h,
                q4: () => R,
                ob: () => j
            });
            var r = n(785893),
                o = n(667294),
                i = n(873955),
                u = n.n(i),
                a = n(494537),
                c = n(588983),
                l = n(38736),
                s = n(142643),
                f = n(882723),
                p = n(241166),
                d = n(421281),
                m = n(329543),
                E = n(664868),
                y = n.n(E);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t, n) {
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

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w, P = (0, d.Mg)(s.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            ! function(e) {
                e[e.ENTERING = 1] = "ENTERING";
                e[e.ENTERED = 2] = "ENTERED";
                e[e.EXITING = 3] = "EXITING";
                e[e.EXITED = 4] = "EXITED"
            }(w || (w = {}));
            var h = (0, l.Z)((function(e) {
                return {
                    fullScreenLayers: [],
                    addLayer: function(t) {
                        return e((function(e) {
                            return {
                                fullScreenLayers: g(e.fullScreenLayers).concat([t])
                            }
                        }))
                    }
                }
            }));

            function M(e) {
                var t = e.item,
                    n = o.useRef(null);
                (0, f.useFocusLock)(n);
                o.useEffect((function() {
                    p.Z.disable();
                    p.Z.enableTemp((e = t.key, {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action: function() {
                                j(e)
                            }
                        }
                    }));
                    var e;
                    return function() {
                        p.Z.disableTemp()
                    }
                }), [t.key]);
                return (0, r.jsx)(t.LayerComponent, {
                    children: (0, r.jsxs)("div", {
                        className: y().root,
                        ref: n,
                        children: [(0, r.jsx)("div", {
                            className: y().drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : w.EXITING,
                            closeLayer: function() {
                                return j(t.key)
                            }
                        })]
                    })
                })
            }
            var T = {
                    enter: y().enter,
                    enterActive: y().enterActive,
                    enterDone: y().enterDone,
                    exit: y().exit,
                    exitActive: y().exitActive,
                    exitDone: y().exitDone
                },
                _ = {
                    enter: y().enterReducedMotion,
                    enterActive: y().enterActiveReducedMotion,
                    enterDone: y().enterDoneReducedMotion,
                    exit: y().exitReducedMotion,
                    exitActive: y().exitActiveReducedMotion,
                    exitDone: y().exitDoneReducedMotion
                };

            function S() {
                var e = o.useContext(f.AccessibilityPreferencesContext).reducedMotion.enabled ? _ : T,
                    t = h((function(e) {
                        return e.fullScreenLayers
                    }));
                return (0, r.jsx)(a.Z, {
                    children: t.map((function(n) {
                        return (0, r.jsx)(c.Z, {
                            classNames: e,
                            timeout: P,
                            onEntered: function() {
                                h.setState({
                                    fullScreenLayers: t.map((function(e) {
                                        return e.key === n.key ? O(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    v(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e), {
                                            transitionState: w.ENTERED
                                        }) : e
                                    }))
                                })
                            },
                            unmountOnExit: !0,
                            children: (0, r.jsx)(M, {
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
                    o = null != n ? n : u()();
                h.setState((function(t) {
                    return {
                        fullScreenLayers: g(t.fullScreenLayers).concat([{
                            key: o,
                            transitionState: w.ENTERING,
                            LayerComponent: null != r ? r : m.ZP,
                            render: e
                        }])
                    }
                }));
                return o
            }

            function j(e) {
                h.setState((function(t) {
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