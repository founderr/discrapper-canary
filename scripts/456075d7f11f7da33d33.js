(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72952"], {
        22230: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a2a4e4f7ee423cd6bbcd.mov"
        },
        318342: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21a45210eb71c8dd143f.webm"
        },
        604448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8bc05ae4c6f108b651eb.mov"
        },
        788936: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8088275f2bba6c7b1ae1.webm"
        },
        833572: function(e, t, n) {
            "use strict";
            e.exports = n.p + "baded936da3290c1c243.mov"
        },
        90976: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f710ae2375e133a76c4.webm"
        },
        170486: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a139e1ef9370869a38c5.mov"
        },
        664182: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d71df05a611472844848.webm"
        },
        824986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("913144"),
                o = n("521012"),
                r = n("646718");
            let s = {
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

            function l() {
                let e = new Date;
                e.setDate(e.getDate() + 14), s.tutorialExpirationTime = e.getTime()
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e), s.isPersistentHelperHidden = !1, s.canPlayWowMoment = !1, s.isFetchingWowMomentMedia = !1, s.wowMomentWumpusMediaUrl = null, s.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return s
                }
                get isPersistentCoachmarkCollapsed() {
                    return s.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(e) {
                    return null == s.hasFlowStartEventBeenEmitted[e] && (s.hasFlowStartEventBeenEmitted[e] = !1), s.hasFlowStartEventBeenEmitted[e]
                }
                get canPlayWowMoment() {
                    return s.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return s.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return s.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return s.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return s.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return s.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return s.tutorialExpirationTime
                }
            }
            d.displayName = "PremiumTutorialStore", d.persistKey = "PremiumTutorialStore", d.migrations = [e => {
                var t;
                return {
                    ...e,
                    hasFlowStartEventBeenEmitted: null !== (t = e.hasFlowStartEventBeenEmitted) && void 0 !== t ? t : {}
                }
            }];
            var u = new d(a.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    s.isPersistentCoachmarkCollapsed = !s.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    let {
                        event: t,
                        value: n
                    } = e;
                    s.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    s = {
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
                },
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    s.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    let {
                        value: t
                    } = e;
                    s.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    s.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t,
                        helperMedia: n
                    } = e;
                    s.wowMomentWumpusMediaUrl = t, s.wowMomentHelperMediaUrl = n, s.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    let {
                        value: t
                    } = e;
                    s.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        entitlement: t
                    } = e
                }
            })
        },
        406915: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                prefetch: function() {
                    return C
                },
                PremiumSubscriptionWowMomentForHelper: function() {
                    return g
                },
                default: function() {
                    return v
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var a = n("37983"),
                o = n("884691"),
                r = n("907002"),
                s = n("446674"),
                l = n("913144"),
                d = n("206230"),
                u = n("58608"),
                c = n("599110"),
                m = n("560528"),
                p = n("659500"),
                M = n("855133"),
                w = n("824986"),
                E = n("848877"),
                _ = n("22230"),
                h = n("604448"),
                f = n("833572"),
                T = n("170486"),
                P = n("49111"),
                S = n("600608"),
                H = n("318342"),
                I = n("788936"),
                U = n("90976"),
                W = n("664182");
            async function C(e) {
                try {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA",
                        value: !0
                    });
                    let t = e ? h : I;
                    window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? t = e ? f : U : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (t = e ? T : W);
                    let n = fetch(t).then(async e => {
                            let t = await e.blob(),
                                n = window.URL.createObjectURL(t);
                            return n
                        }),
                        i = fetch(e ? _ : H).then(async e => {
                            let t = await e.blob(),
                                n = window.URL.createObjectURL(t);
                            return n
                        }),
                        [a, o] = await Promise.all([n, i]);
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
                        wumpusMedia: a,
                        helperMedia: o
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA",
                        value: !1
                    }), (0, M.setIsPersistentHelperHidden)(!1)
                }
            }

            function g() {
                let [e, t] = o.useState(!0), n = (0, s.useStateFromStores)([w.default], () => w.default.wowMomentHelperMedia), i = (0, m.supportsHEVCAlpha)();
                return (0, a.jsx)("div", {
                    children: e && null !== n && (0, a.jsx)(u.default, {
                        className: S.videoWrapperForHelper,
                        autoPlay: !0,
                        onEnded: () => {
                            t(!1), (0, M.setCanPlayWowMoment)(!1)
                        },
                        children: (0, a.jsx)("source", {
                            src: n,
                            type: i ? "video/mp4" : "video/webm"
                        })
                    })
                })
            }
            var v = function() {
                let e = (0, s.useStateFromStores)([d.default], () => d.default.useReducedMotion),
                    {
                        wumpusMedia: t,
                        helperMedia: n,
                        isFetchingMedia: l,
                        canPlayWowMoment: _
                    } = (0, s.useStateFromStoresObject)([w.default], () => ({
                        wumpusMedia: w.default.wowMomentWumpusMedia,
                        helperMedia: w.default.wowMomentHelperMedia,
                        isFetchingMedia: w.default.isFetchingWowMomentMedia,
                        canPlayWowMoment: w.default.canPlayWowMoment
                    })),
                    [h, f] = o.useState(!1),
                    T = (0, m.getChromeVersion)(),
                    H = (0, m.supportsHEVCAlpha)(),
                    I = T > 52 || -1 === T || H,
                    U = H ? "video/mp4" : "video/webm",
                    W = I && !e && _ && !1;
                W && C(H), o.useEffect(() => {
                    function t() {
                        e && ((0, M.setCanPlayWowMoment)(!1), (0, M.setIsPersistentHelperHidden)(!1)), !I && (0, M.setIsPersistentHelperHidden)(!1)
                    }
                    return p.ComponentDispatch.subscribe(P.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
                        p.ComponentDispatch.unsubscribe(P.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t)
                    }
                }, [e, I]);
                let [g, v] = o.useState(!1), [R, F] = o.useState(!1), O = (0, r.useSpring)({
                    opacity: g ? .2 : 0,
                    config: {
                        duration: 100
                    },
                    immediate: e
                }), x = (0, r.useSpring)({
                    x: R ? "100%" : "-100%",
                    config: {
                        duration: 500
                    },
                    immediate: e || !R
                });
                return o.useEffect(() => {
                    let e = -1;
                    return g && (e = window.setTimeout(() => {
                        F(!0)
                    }, 1e3)), () => {
                        window.clearTimeout(e)
                    }
                }, [g]), o.useEffect(() => {
                    let e = -1;
                    return R && (e = window.setTimeout(() => {
                        F(!1), v(!1), (0, M.setIsPersistentHelperHidden)(!1)
                    }, 1e3)), () => {
                        window.clearTimeout(e)
                    }
                }, [R]), (0, a.jsxs)("div", {
                    className: S.wrapper,
                    children: [h && null !== t && (0, a.jsx)(u.default, {
                        autoPlay: !0,
                        className: S.videoWrapper,
                        onPlay: () => {
                            clearTimeout(i), c.default.track(P.AnalyticEvents.PREMIUM_WOW_MOMENT_VIEWED, {
                                wow_moment_type: E.WowMomentTypes.WUMPUS_FLIGHT
                            })
                        },
                        onTimeUpdate: e => {
                            e.currentTarget.currentTime > 4 && ((0, M.setCanPlayWowMoment)(!0), (0, M.setIsPersistentHelperHidden)(!1))
                        },
                        onEnded: () => {
                            f(!1)
                        },
                        children: (0, a.jsx)("source", {
                            src: t,
                            type: U
                        })
                    }), (0, a.jsx)(r.animated.div, {
                        className: S.gadientHighlight,
                        style: O
                    }), (0, a.jsx)(r.animated.div, {
                        className: S.swipeWrapper,
                        style: x,
                        children: (0, a.jsxs)("svg", {
                            className: S.swipe,
                            viewBox: "0 0 848 1024",
                            fill: "none",
                            children: [(0, a.jsx)("path", {
                                d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                                fill: "white"
                            })]
                        })
                    })]
                })
            }
        },
        848877: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                WowMomentTypes: function() {
                    return i
                }
            }), (a = i || (i = {})).WUMPUS_FLIGHT = "wumpus_flight", a.GRADIENT_HIGHLIGHT = "gradient_highlight"
        }
    }
]);