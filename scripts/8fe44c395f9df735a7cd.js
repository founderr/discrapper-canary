(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72952"], {
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
        23377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("913144");
            let o = {
                canPlayWowMoment: !1,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null
            };
            class s extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (o = e), o.canPlayWowMoment = !1, o.isFetchingWowMomentMedia = !1, o.wowMomentWumpusMediaUrl = null
                }
                getState() {
                    return o
                }
                get canPlayWowMoment() {
                    return o.canPlayWowMoment
                }
                get isFetchingWowMomentMedia() {
                    return o.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return o.wowMomentWumpusMediaUrl
                }
            }
            s.displayName = "PurchasedItemsFestivityStore", s.persistKey = "PurchasedItemsFestivityStore", s.migrations = [e => ({
                ...e
            })];
            var u = new s(a.default, {
                LOGOUT: function() {
                    o = {
                        canPlayWowMoment: !1,
                        isFetchingWowMomentMedia: !1,
                        wowMomentWumpusMediaUrl: null
                    }
                },
                PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    let {
                        value: t
                    } = e;
                    o.canPlayWowMoment = t
                },
                PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    let {
                        value: t
                    } = e;
                    o.isFetchingWowMomentMedia = t
                },
                PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    let {
                        wumpusMedia: t
                    } = e;
                    o.wowMomentWumpusMediaUrl = t, o.isFetchingWowMomentMedia = !1
                }
            })
        },
        895497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroStandardWowMomentExperiment: function() {
                    return a
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                kind: "user",
                id: "2023-12_nitro_standard_wow_moment_experiment",
                label: "Productionize Nitro Standard Flying Wumpus Wow Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Flying Wumpus Wow Moment shows for redeeming Nitro Standard gifts, trials, and purchases",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        406915: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                WowMomentTypes: function() {
                    return a
                },
                prefetch: function() {
                    return P
                },
                default: function() {
                    return x
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var a, o, s = n("37983"),
                u = n("884691"),
                r = n("907002"),
                d = n("446674"),
                c = n("913144"),
                m = n("206230"),
                l = n("58608"),
                M = n("599110"),
                w = n("560528"),
                p = n("659500"),
                _ = n("676379"),
                f = n("23377"),
                h = n("895497"),
                E = n("604448"),
                W = n("833572"),
                S = n("170486"),
                T = n("49111"),
                I = n("600608"),
                g = n("788936"),
                y = n("90976"),
                C = n("664182");
            async function P(e) {
                try {
                    c.default.dispatch({
                        type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
                        value: !0
                    });
                    let t = e ? E : g;
                    window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? t = e ? W : y : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (t = e ? S : C);
                    let n = await fetch(t).then(async e => {
                        let t = await e.blob(),
                            n = window.URL.createObjectURL(t);
                        return n
                    });
                    c.default.dispatch({
                        type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
                        wumpusMedia: n
                    })
                } catch (e) {
                    c.default.dispatch({
                        type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
                        value: !1
                    })
                }
            }(o = a || (a = {})).WUMPUS_FLIGHT = "wumpus_flight", o.GRADIENT_HIGHLIGHT = "gradient_highlight";
            var x = function() {
                let e = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion),
                    {
                        wumpusMedia: t,
                        isFetchingMedia: n,
                        canPlayWowMoment: a
                    } = (0, d.useStateFromStoresObject)([f.default], () => ({
                        wumpusMedia: f.default.wowMomentWumpusMedia,
                        isFetchingMedia: f.default.isFetchingWowMomentMedia,
                        canPlayWowMoment: f.default.canPlayWowMoment
                    })),
                    [o, c] = u.useState(!1),
                    E = (0, w.getChromeVersion)(),
                    W = (0, w.supportsHEVCAlpha)(),
                    S = E > 52 || -1 === E || W,
                    g = W ? "video/mp4" : "video/webm",
                    y = S && !e && a && null === t && !1 === n;
                y && P(W), u.useEffect(() => {
                    function t() {
                        let {
                            enabled: t
                        } = h.NitroStandardWowMomentExperiment.getCurrentConfig({
                            location: "PremumSubscriptionWowMoment.tsx"
                        });
                        t && (c(!0), i = setTimeout(() => {
                            c(!1), x(!0), M.default.track(T.AnalyticEvents.PREMIUM_WOW_MOMENT_VIEWED, {
                                wow_moment_type: "gradient_highlight"
                            })
                        }, 2e3), e && (0, _.setCanPlayWowMoment)(!1))
                    }
                    return p.ComponentDispatch.subscribe(T.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
                        p.ComponentDispatch.unsubscribe(T.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED, t)
                    }
                }, [e, S]);
                let [C, x] = u.useState(!1), [b, F] = u.useState(!1), N = (0, r.useSpring)({
                    opacity: C ? .2 : 0,
                    config: {
                        duration: 100
                    },
                    immediate: e
                }), U = (0, r.useSpring)({
                    x: b ? "100%" : "-100%",
                    config: {
                        duration: 500
                    },
                    immediate: e || !b
                });
                return u.useEffect(() => {
                    let e = -1;
                    return C && (e = window.setTimeout(() => {
                        F(!0)
                    }, 1e3)), () => {
                        window.clearTimeout(e)
                    }
                }, [C]), u.useEffect(() => {
                    let e = -1;
                    return b && (e = window.setTimeout(() => {
                        F(!1), x(!1)
                    }, 1e3)), () => {
                        window.clearTimeout(e)
                    }
                }, [b]), (0, s.jsxs)("div", {
                    className: I.wrapper,
                    children: [o && null !== t && (0, s.jsx)(l.default, {
                        autoPlay: !0,
                        className: I.videoWrapper,
                        onPlay: () => {
                            clearTimeout(i), M.default.track(T.AnalyticEvents.PREMIUM_WOW_MOMENT_VIEWED, {
                                wow_moment_type: "wumpus_flight"
                            })
                        },
                        onTimeUpdate: e => {
                            e.currentTarget.currentTime > 4 && (0, _.setCanPlayWowMoment)(!0)
                        },
                        onEnded: () => {
                            c(!1)
                        },
                        children: (0, s.jsx)("source", {
                            src: t,
                            type: g
                        })
                    }), (0, s.jsx)(r.animated.div, {
                        className: I.gadientHighlight,
                        style: N
                    }), (0, s.jsx)(r.animated.div, {
                        className: I.swipeWrapper,
                        style: U,
                        children: (0, s.jsxs)("svg", {
                            className: I.swipe,
                            viewBox: "0 0 848 1024",
                            fill: "none",
                            children: [(0, s.jsx)("path", {
                                d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                                fill: "white"
                            })]
                        })
                    })]
                })
            }
        }
    }
]);