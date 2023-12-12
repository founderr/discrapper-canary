(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22849"], {
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
            var u = n("884691"),
                i = n("599110");
            let l = () => u.useContext(i.AnalyticsContext)
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("884691");
            let i = u.createContext(void 0);
            var l = i
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
                    return I
                }
            }), n("781738");
            var u = n("867805"),
                i = n("407063"),
                l = n("315102"),
                r = n("773336"),
                o = n("49111");
            let c = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                a = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, r.isAndroid)(),
                s = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? u.default.getByName(u.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: u
                    } = e;
                    if (null == u) return;
                    if (u.startsWith("data:")) return u;
                    let r = l.SUPPORTS_WEBP ? "webp" : "png",
                        s = "",
                        f = "quality=lossless";
                    return (null != t && (s = "size=" + (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(c, "/").concat(n, "/").concat(u, ".").concat(r, "?").concat(s).concat(f) : "".concat(a).concat(o.Endpoints.ROLE_ICON(n, u), "?").concat(s)
                },
                _ = e => e.startsWith(c) || e.startsWith("".concat(a, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let u = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return u || e.features.has(o.GuildFeatures.ROLE_ICONS)
                }
        },
        152475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEveryoneRoleViewEvent: function() {
                    return _
                },
                isGuildEventInvitable: function() {
                    return I
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var u = n("446674"),
                i = n("242757"),
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
                    entityType: u,
                    channelId: i
                } = "entity_type" in (t = e) ? {
                    entityType: t.entity_type,
                    channelId: t.channel_id
                } : t, l = u === f.GuildScheduledEventEntityTypes.EXTERNAL;
                if (l) return !0;
                let o = n.getChannel(i);
                return null != o && d.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, o)
            }

            function I(e) {
                let [t, n, u, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, r.default, c.default, l.default];
                if ((0, s.isGuildEventEnded)(e)) return !1;
                let {
                    guild_id: E,
                    channel_id: I
                } = e, h = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, m = h ? t.getDefaultChannel(e.guild_id) : n.getChannel(I), p = u.getGuild(E), S = d.getStageInstanceByChannel(I);
                return !!(0, i.canViewInviteModal)(a.default, p, m, S) && null != m && _(e, [n])
            }

            function h(e) {
                return (0, u.useStateFromStores)([o.default, r.default, c.default, l.default], () => I(e, [o.default, r.default, c.default, l.default]), [e])
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
            var u = n("446674"),
                i = n("398604");

            function l(e, t) {
                let n = (0, u.useStateFromStoresArray)([i.default], () => {
                    var e, n;
                    return null !== (n = null === (e = i.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return o(n, e)
            }

            function r(e, t) {
                var n, u;
                let l = null !== (u = null === (n = i.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== u ? u : [];
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
            var u = n("627445"),
                i = n.n(u),
                l = n("446674"),
                r = n("398604"),
                o = n("397680"),
                c = n("822516");

            function a(e, t, n) {
                var u;
                let a = null !== (u = (0, l.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e))) && void 0 !== u ? u : n;
                i(null != a, "Event must be defined"), t = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(a);
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
                let u = (0, c.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: i,
                        endDate: l
                    } = (0, c.getScheduleForRecurrenceWithException)(u, t);
                return {
                    startTime: i.toDate(),
                    endTime: null == l ? void 0 : l.toDate()
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return s
                },
                requestMembersForRole: function() {
                    return E
                }
            });
            var u = n("693566"),
                i = n.n(u),
                l = n("872717"),
                r = n("913144"),
                o = n("851387"),
                c = n("36402"),
                a = n("49111");
            async function d(e) {
                try {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await l.default.get({
                            url: a.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function s(e) {
                c.default.shouldFetch(e) && await d(e)
            }
            let f = new i({
                maxAge: 1e4
            });

            function E(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = "".concat(e, "-").concat(t);
                if (!n || null == f.get(u)) {
                    var i, r;
                    return f.set(u, !0), i = e, r = t, l.default.get({
                        url: a.Endpoints.GUILD_ROLE_MEMBER_IDS(i, r)
                    }).then(e => (o.default.requestMembersById(i, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var u = n("446674"),
                i = n("913144");
            let l = {},
                r = {};
            class o extends u.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? l[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = r[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            o.displayName = "GuildRoleMemberCountStore";
            var c = new o(i.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    l[t] = n, r[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: u
                    } = e, i = l[t];
                    if (null == i) return !1;
                    i[n] = u
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: u
                    } = e, i = l[t];
                    if (null == i || null == i[n]) return !1;
                    let r = Object.keys(u).length;
                    i[n] += r
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, u = l[t];
                    if (null == u || null == u[n]) return !1;
                    u[n] = u[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, u = l[t];
                    if (null == u || null == u[n]) return !1;
                    u[n] = Math.max(u[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == l[t] && (l[t] = {}), l[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete l[t.id], delete r[t.id]
                }
            })
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return i
                }
            });
            var u = n("49111");

            function i(e, t, n, i) {
                let l = null != n ? n : t,
                    r = null != l && e.can(u.Permissions.CREATE_INSTANT_INVITE, l);
                return r || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("37983");
            n("884691");
            var i = n("65597"),
                l = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, i.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, u.jsx)(u.Fragment, {
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
            var u = n("884691"),
                i = n("65597"),
                l = n("526887"),
                r = n("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = u.useContext(l.ConfettiCannonContext), t = (0, i.default)([r.default], () => r.default.getState()), n = u.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = u.useMemo(() => ({
                    fire: (u, i, l) => {
                        var r, o;
                        let c = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            a = n(c);
                        e(u, i, a, (null !== (r = null == l ? void 0 : l.count) && void 0 !== r ? r : c.confettiCount) * (null !== (o = null == l ? void 0 : l.countMultiplier) && void 0 !== o ? o : 1), {
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
                    return h
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return m
                }
            });
            var u = n("884691"),
                i = n("65597"),
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
            async function I() {
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

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), u = s.default.shouldFetchPremiumLikelihood(), i = c.default.getCurrentUser();
                p(i, u, t, n)
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, i.default)([s.default], () => s.default.shouldFetchPremiumLikelihood()), r = (0, i.default)([c.default], () => c.default.getCurrentUser());
                u.useEffect(() => {
                    p(r, l, t, n)
                }, [r, l, t, n])
            }

            function p(e, t, n, u) {
                null != e && !(0, d.isPremium)(e) && n && (t && I(), u && (!a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var u = n("446674"),
                i = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                r = l;
            class o extends u.default.Store {
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
            var c = new o(i.default, {
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
            var u = n("862205");
            let i = (0, u.createExperiment)({
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
            var l = i
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var u = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                r = n("782340"),
                o = n("53061"),
                c = n("284434"),
                a = n("315956");

            function d(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, u.jsxs)("div", {
                    className: l(o.container, t),
                    children: [(0, u.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a,
                        className: l(o.sparkleIcon, o.sparkleBottom)
                    }), n, (0, u.jsx)("img", {
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
            var u = n("37983"),
                i = n("884691"),
                l = n("77078"),
                r = n("393414"),
                o = n("49111"),
                c = i.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: c,
                        onClick: a,
                        onKeyPress: d,
                        focusProps: s,
                        ...f
                    } = e, E = i.useCallback(e => {
                        !e.repeat && ((e.charCode === o.KeyboardKeys.SPACE || e.charCode === o.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, r.transitionTo)(n), null == a || a()), null == d || d(e))
                    }, [n, d, a]), _ = i.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, r.transitionTo)(n), null == a || a())
                    }, [n, a]), I = (0, u.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: _,
                        onKeyPress: E,
                        ...f,
                        children: c
                    });
                    return (0, u.jsx)(l.FocusRing, {
                        ...s,
                        children: I
                    })
                })
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var u = n("37983");

            function i(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, i = n ? t : 1, l = n ? 1 : t;
                return (0, u.jsx)("span", {
                    style: {
                        display: "block",
                        width: i,
                        minWidth: i,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        }
    }
]);