(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19569"], {
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                u = n("599110");
            let l = () => i.useContext(u.AnalyticsContext)
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let u = i.createContext(void 0);
            var l = u
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return s
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return _
                },
                canGuildUseRoleIcons: function() {
                    return m
                }
            }), n("781738");
            var i = n("867805"),
                u = n("407063"),
                l = n("315102"),
                r = n("773336"),
                o = n("49111");
            let c = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                a = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, r.isAndroid)(),
                s = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, u.getBestMediaProxySize)(t * (0, u.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let r = l.SUPPORTS_WEBP ? "webp" : "png",
                        s = "",
                        f = "quality=lossless";
                    return (null != t && (s = "size=" + (0, u.getBestMediaProxySize)(t * (0, u.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(c, "/").concat(n, "/").concat(i, ".").concat(r, "?").concat(s).concat(f) : "".concat(a).concat(o.Endpoints.ROLE_ICON(n, i), "?").concat(s)
                },
                _ = e => e.startsWith(c) || e.startsWith("".concat(a, "/roles")) && e.includes("/icons/"),
                m = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(o.GuildFeatures.ROLE_ICONS)
                }
        },
        152475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEveryoneRoleViewEvent: function() {
                    return _
                },
                isGuildEventInvitable: function() {
                    return m
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("446674"),
                u = n("242757"),
                l = n("834052"),
                r = n("42203"),
                o = n("923959"),
                c = n("305961"),
                a = n("957255"),
                d = n("991170"),
                s = n("398604"),
                f = n("745049"),
                E = n("49111");

            function _(e) {
                var t;
                let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
                let {
                    entityType: i,
                    channelId: u
                } = "entity_type" in (t = e) ? {
                    entityType: t.entity_type,
                    channelId: t.channel_id
                } : t, l = i === f.GuildScheduledEventEntityTypes.EXTERNAL;
                if (l) return !0;
                let o = n.getChannel(u);
                return null != o && d.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, o)
            }

            function m(e) {
                let [t, n, i, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, r.default, c.default, l.default];
                if ((0, s.isGuildEventEnded)(e)) return !1;
                let {
                    guild_id: E,
                    channel_id: m
                } = e, I = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, p = I ? t.getDefaultChannel(e.guild_id) : n.getChannel(m), h = i.getGuild(E), v = d.getStageInstanceByChannel(m);
                return !!(0, u.canViewInviteModal)(a.default, h, p, v) && null != p && _(e, [n])
            }

            function I(e) {
                return (0, i.useStateFromStores)([o.default, r.default, c.default, l.default], () => m(e, [o.default, r.default, c.default, l.default]), [e])
            }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getEventException: function() {
                    return r
                }
            });
            var i = n("446674"),
                u = n("398604");

            function l(e, t) {
                let n = (0, i.useStateFromStoresArray)([u.default], () => {
                    var e, n;
                    return null !== (n = null === (e = u.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return o(n, e)
            }

            function r(e, t) {
                var n, i;
                let l = null !== (i = null === (n = u.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== i ? i : [];
                return o(l, e)
            }

            function o(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                },
                getEventSchedule: function() {
                    return d
                }
            });
            var i = n("627445"),
                u = n.n(i),
                l = n("446674"),
                r = n("398604"),
                o = n("397680"),
                c = n("822516");

            function a(e, t, n) {
                var i;
                let a = null !== (i = (0, l.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e))) && void 0 !== i ? i : n;
                u(null != a, "Event must be defined"), t = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(a);
                let d = (0, o.default)(t, e);
                return s(a, d, t)
            }

            function d(e, t) {
                let n = (0, o.getEventException)(t, e.id);
                return s(e, n, t)
            }

            function s(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let i = (0, c.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: u,
                        endDate: l
                    } = (0, c.getScheduleForRecurrenceWithException)(i, t);
                return {
                    startTime: u.toDate(),
                    endTime: null == l ? void 0 : l.toDate()
                }
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return u
                }
            });
            var i = n("49111");

            function u(e, t, n, u) {
                let l = null != n ? n : t,
                    r = null != l && e.can(i.Permissions.CREATE_INSTANT_INVITE, l);
                return r || null != t && null != t.vanityURLCode || (null == u ? void 0 : u.invite_code) != null
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("65597"),
                l = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, u.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                u = n("65597"),
                l = n("526887"),
                r = n("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, u.default)([r.default], () => r.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = i.useMemo(() => ({
                    fire: (i, u, l) => {
                        var r, o;
                        let c = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            a = n(c);
                        e(i, u, a, (null !== (r = null == l ? void 0 : l.count) && void 0 !== r ? r : c.confettiCount) * (null !== (o = null == l ? void 0 : l.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return o
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var i = n("884691"),
                u = n("65597"),
                l = n("872717"),
                r = n("913144"),
                o = n("775433"),
                c = n("697218"),
                a = n("10514"),
                d = n("764364"),
                s = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function m() {
                try {
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = s.default.shouldFetchPremiumLikelihood(), u = c.default.getCurrentUser();
                h(u, i, t, n)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, u.default)([s.default], () => s.default.shouldFetchPremiumLikelihood()), r = (0, u.default)([c.default], () => c.default.getCurrentUser());
                i.useEffect(() => {
                    h(r, l, t, n)
                }, [r, l, t, n])
            }

            function h(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && m(), i && (!a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                u = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                r = l;
            class o extends i.default.Store {
                initialize() {
                    r = l
                }
                getState() {
                    return r
                }
                shouldFetchPremiumLikelihood() {
                    return !r.isFetching && !r.fetched
                }
            }
            o.displayName = "UserPremiumLikelihoodStore";
            var c = new o(u.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    r.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    r.premiumLikelihood = t, r.fetched = !0, r.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    r.isFetching = !1
                },
                LOGOUT: function() {
                    r.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let u = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = u
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("414456"),
                l = n.n(u),
                r = n("782340"),
                o = n("53061"),
                c = n("284434"),
                a = n("315956");

            function d(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(o.container, t),
                    children: [(0, i.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a,
                        className: l(o.sparkleIcon, o.sparkleBottom)
                    }), n, (0, i.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: c,
                        className: l(o.sparkleIcon, o.sparkleTop)
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                u = n("884691"),
                l = n("77078"),
                r = n("393414"),
                o = n("49111"),
                c = u.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: c,
                        onClick: a,
                        onKeyPress: d,
                        focusProps: s,
                        ...f
                    } = e, E = u.useCallback(e => {
                        !e.repeat && ((e.charCode === o.KeyboardKeys.SPACE || e.charCode === o.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, r.transitionTo)(n), null == a || a()), null == d || d(e))
                    }, [n, d, a]), _ = u.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, r.transitionTo)(n), null == a || a())
                    }, [n, a]), m = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: _,
                        onKeyPress: E,
                        ...f,
                        children: c
                    });
                    return (0, i.jsx)(l.FocusRing, {
                        ...s,
                        children: m
                    })
                })
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");

            function u(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, u = n ? t : 1, l = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: u,
                        minWidth: u,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        }
    }
]);