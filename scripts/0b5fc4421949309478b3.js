(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48620"], {
        533662: function(e, t, l) {
            "use strict";
            e.exports = l.p + "71c2b8b8dce7967a6cba.svg"
        },
        101017: function(e, t, l) {
            "use strict";
            e.exports = l.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, l) {
            "use strict";
            e.exports = l.p + "829f8ef7dcf355fbe141.svg"
        },
        145079: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("446674"),
                i = l("77078"),
                u = l("102985"),
                d = l("79798"),
                o = l("754474"),
                c = l("158998"),
                E = l("782340"),
                f = l("892802");

            function _(e) {
                if (e.isSystemUser()) return o.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return o.BotTypes.AI;
                if (e.bot) return o.BotTypes.BOT;
                return null
            }
            let I = e => {
                let {
                    primary: t,
                    secondary: l,
                    botType: a,
                    botVerified: r,
                    discriminatorClass: u,
                    className: o,
                    usernameClass: c,
                    color: _,
                    botClass: I,
                    showStreamerModeTooltip: T
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(f.info, o),
                    children: [(0, n.jsx)(i.Tooltip, {
                        text: E.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: T,
                        children: e => (0, n.jsx)("span", {
                            ...e,
                            className: s(f.username, c),
                            style: null != _ ? {
                                color: _
                            } : void 0,
                            children: t
                        })
                    }), null != l ? (0, n.jsx)("span", {
                        className: s(f.infoSpacing, u),
                        children: l
                    }) : void 0, null != a && (0, n.jsx)(d.default, {
                        type: a,
                        className: s(f.infoSpacing, I),
                        verified: r
                    })]
                })
            };
            var T = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: l,
                    nick: a,
                    forceUsername: s,
                    showAccountIdentifier: i,
                    overrideDiscriminator: d,
                    forcePomelo: E,
                    ...f
                } = e, T = (0, r.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), N = T || t || l.isNonUserBot(), h = l.toString(), v = c.default.getName(l), m = s ? h : null != a ? a : v, S = l.isPomelo() || E;
                if (S || m !== h) {
                    let e = m === h && S && s ? c.default.getUserTag(l, {
                            forcePomelo: E
                        }) : m,
                        t = i && e !== "@".concat(h) ? c.default.getUserTag(l) : void 0;
                    return (0, n.jsx)(I, {
                        primary: e,
                        secondary: t,
                        botVerified: l.isVerifiedBot(),
                        botType: _(l),
                        showStreamerModeTooltip: T && e !== v,
                        ...f
                    })
                }
                return (0, n.jsx)(o.default, {
                    name: m,
                    botType: _(l),
                    botVerified: l.isVerifiedBot(),
                    discriminator: N || m !== h ? null : null != d ? d : l.discriminator,
                    ...f
                })
            }
        },
        163725: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                EyeSlashIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
                        className: i
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
                        className: i
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
                        className: i
                    })]
                })
            }
        },
        811513: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GroupIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: i
                    })
                })
            }
        },
        851298: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ImagePlusIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
                        clipRule: "evenodd",
                        className: i
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: i
                    })]
                })
            }
        },
        304983: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                MoreHorizontalIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        876726: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PlayIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                        className: i
                    })
                })
            }
        },
        501030: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getDirectoryEntryBroadcastInfo: function() {
                    return s
                }
            });
            var n = l("872717"),
                a = l("49111");
            async function s(e, t, l) {
                let s = await n.default.get({
                    url: a.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
                    query: {
                        type: t,
                        entity_id: l
                    }
                });
                return s.body
            }
        },
        960757: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            }), l("222007");
            var n = l("884691"),
                a = l("446674"),
                s = l("152475"),
                r = l("42203"),
                i = l("501030"),
                u = l("730647"),
                d = l("49111");
            let o = {
                can_broadcast: !1
            };

            function c(e, t, l) {
                let [c, E] = n.useState(o), [f, _] = n.useState(!1), I = n.useRef(!1), T = null == e ? void 0 : e.id, N = null == e ? void 0 : e.hasFeature(d.GuildFeatures.HAS_DIRECTORY_ENTRY);
                n.useEffect(() => {
                    if (!N) {
                        E(o);
                        return
                    }
                    if (I.current || null == T) return;
                    let e = async () => {
                        I.current = !0;
                        try {
                            let e = await (0, i.getDirectoryEntryBroadcastInfo)(T, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            E(e)
                        } catch (e) {
                            E(o)
                        }
                        I.current = !1
                    };
                    e()
                }, [T, N, t]), n.useEffect(() => {
                    var e;
                    if (!c.can_broadcast) {
                        _(!1);
                        return
                    }
                    _(null === (e = c.has_broadcast) || void 0 === e || e)
                }, [c]);
                let h = (0, a.useStateFromStores)([r.default], () => (0, s.canEveryoneRoleViewEvent)(l, [r.default]));
                return {
                    broadcastInfo: c,
                    broadcastToDirectoryChannels: h && f,
                    setBroadcastToDirectoryChannels: _,
                    canEveryoneRoleViewEvent: h
                }
            }
        },
        651072: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = a
        },
        334683: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            }), l("222007");
            var n = l("884691"),
                a = l("446674"),
                s = l("817963"),
                r = l("923959"),
                i = l("305961"),
                u = l("957255"),
                d = l("49111"),
                o = (e, t) => {
                    let l = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, s.useManageResourcePermissions)(l),
                        c = (0, a.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        E = n.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: l
                            } = e;
                            return l.type === t
                        }) : c, [c, t]),
                        f = (0, a.useStateFromStores)([u.default], () => {
                            if (u.default.can(d.Permissions.ADMINISTRATOR, l) || o) return !0;
                            for (let {
                                    channel: e
                                }
                                of E) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [E, l, o]);
                    return f
                }
        },
        799547: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getEventChannelsByType: function() {
                    return r
                },
                useGetEventChannelsByType: function() {
                    return i
                }
            }), l("222007"), l("424973");
            var n = l("446674"),
                a = l("817963");
            l("834052");
            var s = l("923959");

            function r(e, t) {
                let [l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                if (null == t) return [];
                let n = l.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
                    r = [];
                for (let {
                        channel: e
                    }
                    of n) {
                    let {
                        canCreateGuildEvent: l,
                        canManageAllEvents: n
                    } = (0, a.getManageResourcePermissions)(e), s = l || n;
                    e.type === t && (e.isGuildVoice() && s ? r.push(e) : e.isGuildStageVoice() && s && r.push(e))
                }
                return r
            }

            function i(e, t) {
                return (0, n.useStateFromStoresArray)([s.default], () => r(e, t, [s.default]), [e, t])
            }
            l("957255"), l("270161")
        },
        776863: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return i
                }
            }), l("808653"), l("424973");
            var n = l("446674"),
                a = l("923510"),
                s = l("923959"),
                r = l("957255");

            function i(e) {
                var t;
                let l = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, n.useStateFromStoresArray)([s.default, r.default], () => {
                    let e = s.default.getChannels(l)[s.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let l = t.channel;
                        return l.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
                            return !!e.isGuildStageVoice() && t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, r.default) && e.push(l), e) : e
                    }, [])
                }, [l])
            }
        },
        617347: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildEventBodyImageLocation: function() {
                    return a
                },
                default: function() {
                    return G
                }
            });
            var n, a, s = l("37983"),
                r = l("884691"),
                i = l("414456"),
                u = l.n(i),
                d = l("446674"),
                o = l("77078"),
                c = l("812204"),
                E = l("685665"),
                f = l("656038"),
                _ = l("419830"),
                I = l("817963"),
                T = l("957255"),
                N = l("476263"),
                h = l("718550"),
                v = l("398604"),
                m = l("651072"),
                S = l("1339"),
                g = l("613767"),
                C = l("822516"),
                x = l("707916"),
                p = l("255050"),
                A = l("400271"),
                O = l("427554"),
                R = l("644189"),
                M = l("29913"),
                L = l("745049"),
                D = l("49111"),
                y = l("782340"),
                j = l("955614");

            function V(e) {
                let {
                    channel: t,
                    onClick: l
                } = e, {
                    canManageAllEvents: n
                } = (0, I.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([T.default], () => !t.isGuildVocal() || T.default.can(D.Permissions.CONNECT, t), [t]), i = r.useMemo(() => (0, f.default)(t), [t]), c = (0, _.getChannelIconComponent)(t);
                return (0, s.jsx)(o.Tooltip, {
                    text: y.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !a && null != l,
                    children: e => (0, s.jsxs)(o.Clickable, {
                        ...e,
                        className: u(j.inline, j.channelContainer, {
                            [j.channelContainerEnabled]: a && null != l,
                            [j.channelContainerDisabled]: !a && null != l
                        }),
                        onClick: l,
                        children: [(0, s.jsx)(o.Tooltip, {
                            text: y.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: n && i && a && null != l,
                            children: e => null != c ? (0, s.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: j.icon
                            }) : null
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: j.channelLocation,
                            children: t.name
                        })]
                    })
                })
            }

            function U(e) {
                let {
                    guild: t,
                    channel: l,
                    onJoinClick: n,
                    handleLocationClick: a,
                    location: r,
                    isExternal: i,
                    isHub: d
                } = e;
                if (d) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
                    className: j.inline,
                    children: [(0, s.jsx)(N.default, {
                        className: j.guildIcon,
                        size: N.default.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, s.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                });
                return null != l ? (0, s.jsx)(V, {
                    channel: l,
                    onClick: n
                }) : (0, s.jsxs)(o.Clickable, {
                    className: j.inline,
                    onClick: a,
                    children: [(0, s.jsx)(h.default, {
                        height: 20,
                        width: 20,
                        className: u(j.channelContainer, j.icon)
                    }), (0, s.jsx)(o.Text, {
                        className: i ? j.externalLocation : j.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, S.guildEventDetailsParser)(r, !0)
                    })]
                })
            }

            function G(e) {
                var t;
                let {
                    className: l,
                    guild: n,
                    channel: a,
                    creator: r,
                    name: i,
                    entityType: f,
                    description: _,
                    imageLocation: I = 0,
                    imageSource: T,
                    isActive: N,
                    isUserLurking: h,
                    isJoined: S = !1,
                    isMember: D = !1,
                    isHub: y = !1,
                    speakers: V,
                    speakerCount: G,
                    rsvped: P,
                    canInvite: H,
                    location: B,
                    truncate: b,
                    onContextMenu: F,
                    onJoinClick: w,
                    onJoinGuildClick: k,
                    onGoToGuildClick: Y,
                    onRsvpClick: z,
                    onStartClick: Z,
                    onInviteClick: X,
                    onEndClick: W,
                    onClick: K,
                    isNew: q,
                    guildEventId: J,
                    eventPreview: Q,
                    recurrenceRule: $,
                    recurrenceId: ee
                } = e, et = (0, g.isChannelPublic)(a, f), el = f === L.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: en
                } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: ea
                } = m.default.useExperiment({
                    guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                    location: en[0]
                }, {
                    autoTrackExposure: !1
                }), es = (0, d.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(J)), er = [];
                if (null != $ && null != es) {
                    let e = (0, C.getRRule)($);
                    er = (0, C.generateNextRecurrences)(4, e, new Date(es.scheduled_start_time))
                }
                let ei = ea && er.length > 0;
                return (0, s.jsxs)(o.ClickableContainer, {
                    "aria-label": i,
                    onClick: () => null == K ? void 0 : K(ee),
                    onContextMenu: F,
                    className: u(j.card, {
                        [j.joined]: S,
                        [j.lurking]: h
                    }, l),
                    children: [(0, s.jsxs)("div", {
                        className: u(j.padding, {
                            [j.isRecurring]: ei
                        }),
                        children: [0 === I && (0, s.jsx)(p.default, {
                            source: T
                        }), (0, s.jsx)(A.default, {
                            creator: r,
                            name: i,
                            description: _,
                            imageSource: 1 === I ? T : null,
                            truncate: b,
                            guildId: null == n ? void 0 : n.id,
                            isHub: y,
                            isNew: q,
                            guildEventId: J,
                            eventPreview: Q,
                            recurrenceId: ee
                        }), N && null != n && null != V && G > 0 && (0, s.jsx)(M.default, {
                            guild: n,
                            speakers: V,
                            speakerCount: G,
                            className: j.spacing
                        }), (0, s.jsx)("hr", {
                            className: j.divider
                        }), (0, s.jsxs)("div", {
                            className: u(j.inline, j.footer),
                            children: [(0, s.jsx)(U, {
                                guild: n,
                                channel: a,
                                onJoinClick: w,
                                handleLocationClick: el ? e => e.stopPropagation() : void 0,
                                location: B,
                                isExternal: el,
                                isHub: y
                            }), y ? (0, s.jsx)(R.default, {
                                isActive: N,
                                isUserLurking: h,
                                isMember: D,
                                rsvped: P,
                                onRsvpClick: z,
                                onJoinGuildClick: k,
                                onGoToGuildClick: Y,
                                guildName: null == n ? void 0 : n.name,
                                canInvite: H,
                                isChannelPublic: et,
                                onInviteClick: X
                            }) : (0, s.jsx)(x.default, {
                                entityType: f,
                                isJoined: S,
                                isActive: N,
                                isUserLurking: h,
                                rsvped: P,
                                canInvite: H,
                                isChannelPublic: et,
                                onContextMenu: F,
                                onJoinClick: w,
                                onRsvpClick: z,
                                onStartClick: Z,
                                onInviteClick: X,
                                onEndClick: W
                            })]
                        }), ei && (0, s.jsx)("hr", {
                            className: j.divider
                        })]
                    }), ei && (0, s.jsx)(O.default, {
                        guildId: null == n ? void 0 : n.id,
                        recurrenceRule: $,
                        guildEventId: J,
                        onRecurrenceClick: K
                    })]
                })
            }(n = a || (a = {}))[n.BANNER = 0] = "BANNER", n[n.THUMBNAIL = 1] = "THUMBNAIL"
        },
        844808: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("222007"), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                r = l("20606"),
                i = l("956089"),
                u = l("822516"),
                d = l("757767"),
                o = l("782340"),
                c = l("572721");
            let E = new Set([0, 6]);

            function f(e) {
                let {
                    startDate: t,
                    recurrenceRule: l,
                    onRecurrenceChange: f
                } = e, _ = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, l), [l, t]), I = function(e) {
                    let t = e.toDate(),
                        l = Math.ceil(t.getDate() / 7),
                        n = t.toLocaleString(o.default.getLocale(), {
                            weekday: "long"
                        }),
                        a = [{
                            value: d.RecurrenceOptions.NONE,
                            label: o.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: d.RecurrenceOptions.WEEKLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: n
                            })
                        }, {
                            value: d.RecurrenceOptions.BIWEEKLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                                weekday: n
                            })
                        }, {
                            value: d.RecurrenceOptions.MONTHLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                                nth: l,
                                weekday: n
                            })
                        }, {
                            value: d.RecurrenceOptions.YEARLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(o.default.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }];
                    return !E.has(t.getDay()) && a.push({
                        value: d.RecurrenceOptions.WEEKDAY_ONLY,
                        label: o.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), a
                }(t), T = e => e.toString(), N = (0, n.jsxs)("div", {
                    className: c.title,
                    children: [o.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, n.jsx)(i.TextBadge, {
                        text: o.default.Messages.NEW,
                        color: r.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, n.jsx)(s.FormItem, {
                    title: N,
                    required: !0,
                    children: (0, n.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: I,
                        select: f,
                        serialize: T,
                        isSelected: e => null != _ && T(e) === T(_)
                    })
                })
            }
        },
        953143: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("866227"),
                s = l.n(a),
                r = l("77078"),
                i = l("812204"),
                u = l("685665"),
                d = l("381546"),
                o = l("351825"),
                c = l("651072"),
                E = l("822516"),
                f = l("844808"),
                _ = l("782340"),
                I = l("234865");

            function T(e) {
                let {
                    className: t,
                    guildId: l,
                    onScheduleChange: a,
                    onRecurrenceChange: T,
                    onTimeChange: N,
                    timeSelected: h = !0,
                    schedule: v,
                    recurrenceRule: m,
                    showEndDate: S = !1,
                    requireEndDate: g = !1,
                    disableStartDateTime: C = !1
                } = e, {
                    analyticsLocations: x
                } = (0, u.default)(i.default.EVENT_SETTINGS), {
                    enabled: p
                } = c.default.useExperiment({
                    guildId: null != l ? l : "",
                    location: x[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == v) return null;
                let A = null,
                    O = v.startDate,
                    R = s(),
                    M = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    L = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
                null != m && (M.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), L.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
                let D = e => {
                    a({
                        ...v,
                        endDate: e
                    })
                };
                return null != O && c.default.trackExposure({
                    guildId: null != l ? l : "",
                    location: x[0]
                }), S && (A = null != v.endDate || g ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, n.jsx)(r.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: g,
                            children: (0, n.jsx)(r.DateInput, {
                                value: v.endDate,
                                onSelect: D,
                                minDate: v.startDate,
                                maxDate: L
                            })
                        }), (0, n.jsx)(r.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: g,
                            children: (0, n.jsx)(r.TimeInput, {
                                value: v.endDate,
                                onChange: D
                            })
                        })]
                    }), g ? null : (0, n.jsx)(r.Button, {
                        onClick: () => {
                            D(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, n.jsxs)("div", {
                            className: I.link,
                            children: [(0, n.jsx)(d.default, {
                                width: 17,
                                height: 17,
                                className: I.removeIcon
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: _.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, n.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        D(s(v.startDate).add(1, "hour"))
                    },
                    children: (0, n.jsxs)("div", {
                        className: I.link,
                        children: [(0, n.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: I.addIcon
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: _.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, n.jsxs)("div", {
                    className: t,
                    children: [(0, n.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, n.jsx)(r.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, n.jsx)(r.DateInput, {
                                value: v.startDate,
                                onSelect: e => {
                                    a({
                                        ...v,
                                        startDate: e
                                    })
                                },
                                minDate: R,
                                maxDate: M,
                                disabled: C
                            })
                        }), (0, n.jsx)(r.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, n.jsx)(r.TimeInput, {
                                value: v.startDate,
                                onChange: e => {
                                    e.isValid() && (null == N || N(!0), a({
                                        ...v,
                                        startDate: e
                                    }))
                                },
                                hideValue: !h,
                                disabled: C
                            })
                        })]
                    }), A, p && null != O && null != T && (0, n.jsx)(f.default, {
                        onRecurrenceChange: T,
                        startDate: O,
                        recurrenceRule: m
                    })]
                })
            }
        },
        194250: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("866227"),
                r = l.n(s),
                i = l("77078"),
                u = l("656913"),
                d = l("694187"),
                o = l("151642"),
                c = l("29846"),
                E = l("398604"),
                f = l("189443"),
                _ = l("822516"),
                I = l("93550"),
                T = l("953143"),
                N = l("745049"),
                h = l("75015"),
                v = l("837979"),
                m = l("782340"),
                S = l("505376");

            function g(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: l,
                    broadcastToDirectoryChannels: a,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: r
                } = t;
                return l.can_broadcast ? (0, n.jsxs)(i.FormItem, {
                    title: m.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: S.formItem,
                    children: [(0, n.jsx)(i.Tooltip, {
                        text: (0, n.jsx)(i.Text, {
                            className: S.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !r,
                        children: e => (0, n.jsx)("div", {
                            ...e,
                            children: (0, n.jsx)(i.Checkbox, {
                                type: i.Checkbox.Types.INVERTED,
                                disabled: !r,
                                value: a,
                                onChange: (e, t) => s(t),
                                children: (0, n.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-active",
                                    children: m.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, n.jsx)(i.Text, {
                        className: S.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: m.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function C(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: C,
                    editBroadcastInfoData: x,
                    error: p,
                    validationErrorMessage: A,
                    onChange: O,
                    canSetFocus: R = !1
                } = e, {
                    entityType: M,
                    channelId: L,
                    description: D,
                    name: y,
                    image: j,
                    scheduledEndTime: V,
                    scheduledStartTime: U,
                    recurrenceRule: G
                } = t, P = (0, o.useStageBlockedUsersCount)(L), H = null != t && (0, E.isGuildScheduledEventActive)(t), B = a.useMemo(() => {
                    let e = (0, _.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: r(U)
                    }
                }, [t, U]), [b, F] = a.useState(null), w = a.useRef(null);
                a.useEffect(() => {
                    if (R) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.focus()
                    }
                }, [R]);
                let k = e => {
                        O({
                            image: e
                        })
                    },
                    Y = (e, t) => {
                        if (null == e || void 0 === t) {
                            k(null);
                            return
                        }(0, i.openModalLazy)(async () => {
                            let {
                                default: a
                            } = await l.el("57015").then(l.bind(l, "57015"));
                            return l => (0, n.jsx)(a, {
                                imgURI: e,
                                file: t,
                                onCrop: k,
                                uploadType: h.UploadTypes.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0,
                                ...l
                            })
                        })
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: S.blockedUsersContainer,
                        children: null != L && !H && P > 0 && (0, n.jsx)(c.BlockedUsersNotice, {
                            channelId: L
                        })
                    }), (0, n.jsxs)("div", {
                        className: S.form,
                        children: [(0, n.jsxs)(i.FormItem, {
                            title: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: S.topicFormItem,
                            required: !0,
                            children: [(0, n.jsx)(i.TextInput, {
                                className: S.textInput,
                                onChange: e => {
                                    O({
                                        name: e
                                    })
                                },
                                placeholder: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: v.MAX_STAGE_TOPIC_LENGTH,
                                value: y,
                                autoComplete: "off",
                                inputRef: w
                            }), null != p ? (0, n.jsx)(i.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: S.warning,
                                children: p.getAnyErrorMessage()
                            }) : null]
                        }), (0, n.jsx)(T.default, {
                            className: S.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: l
                                } = e, n = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == l ? void 0 : l.toISOString()
                                };
                                null != t && null != V && (null == l ? void 0 : l.isBefore(t)) && (n.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != b && (n.recurrenceRule = (0, _.recurrenceOptionToRecurrenceRule)(b, t)), O(n)
                            },
                            onRecurrenceChange: e => {
                                let t = B.startDate;
                                if (null == t) return;
                                let l = (0, _.recurrenceOptionToRecurrenceRule)(e, t);
                                O({
                                    recurrenceRule: l
                                }), F(e)
                            },
                            schedule: B,
                            recurrenceRule: G,
                            showEndDate: M === N.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: M === N.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: H,
                            guildId: C
                        }), null != A ? (0, n.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: S.warning,
                            children: A
                        }) : null, (0, n.jsx)(i.FormItem, {
                            title: m.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: S.formItem,
                            children: (0, n.jsx)(i.TextArea, {
                                className: S.descriptionInput,
                                placeholder: m.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: D,
                                onChange: e => {
                                    O({
                                        description: e
                                    })
                                },
                                maxLength: N.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, n.jsxs)(i.FormItem, {
                            title: m.default.Messages.GUILD_EVENT_IMAGE,
                            className: S.formItem,
                            children: [(0, n.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: S.addImageHint,
                                children: m.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != j ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(u.default, {
                                    className: S.imagePreview,
                                    iconWrapperClassName: S.imagePreviewInner,
                                    image: j,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != C) {
                                            var l;
                                            return null !== (l = (0, I.default)((0, f.convertToFakeGuildEvent)(t, C, s))) && void 0 !== l ? l : null
                                        }
                                    },
                                    onChange: Y,
                                    hint: m.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, n.jsx)(i.Button, {
                                    size: i.Button.Sizes.SMALL,
                                    onClick: () => k(null),
                                    children: m.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, n.jsxs)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                children: [m.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, n.jsx)(d.default, {
                                    onChange: Y
                                })]
                            })]
                        }), (0, n.jsx)(g, {
                            editBroadcastInfoData: x
                        })]
                    })]
                })
            }
        },
        590942: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            }), l("222007");
            var n, a, s = l("37983"),
                r = l("884691"),
                i = l("917351"),
                u = l("446674"),
                d = l("77078"),
                o = l("970728"),
                c = l("206230"),
                E = l("526887"),
                f = l("960757"),
                _ = l("923959"),
                I = l("305961"),
                T = l("683911"),
                N = l("476765"),
                h = l("354023"),
                v = l("686904"),
                m = l("398604"),
                S = l("322224"),
                g = l("152475"),
                C = l("799547"),
                x = l("189443"),
                p = l("841363"),
                A = l("558286"),
                O = l("560309"),
                R = l("151859"),
                M = l("299342"),
                L = l("499950"),
                D = l("27754"),
                y = l("745049"),
                j = l("49111"),
                V = l("782340"),
                U = l("738021");
            let {
                INVITE_OPTIONS_7_DAYS: G,
                INVITE_OPTIONS_UNLIMITED: P
            } = h.default;

            function H(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: l
                } = r.useContext(E.ConfettiCannonContext);
                return r.useEffect(() => {
                    let e = null == t ? void 0 : t.getScrollerNode();
                    if (null == e) return;
                    let n = e.getBoundingClientRect();
                    l({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: n.left - 100,
                                y: n.top - 100
                            },
                            maxValue: {
                                x: n.left + 100,
                                y: n.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -20,
                                y: -20
                            },
                            maxValue: {
                                x: -60,
                                y: -60
                            }
                        }
                    }, 80), l({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: n.right - 100,
                                y: n.top - 100
                            },
                            maxValue: {
                                x: n.right + 100,
                                y: n.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    }, 80)
                }, [l, t]), null
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: l,
                    guildEventId: a,
                    editBroadcastInfoData: o,
                    isEdit: E,
                    formErrors: f,
                    transitionState: _,
                    loading: I,
                    error: h,
                    onChange: v,
                    onSave: S,
                    onClose: g,
                    createdEvent: C
                } = e, x = (0, N.useUID)(), p = r.useRef(l), D = !(0, i.isEqual)(p.current, l), y = r.useMemo(() => [{
                    slideId: 0,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == f.entity,
                    userErrorMessage: f.entity
                }, {
                    slideId: 1,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == f.schedule && null == f.topic && (!E || D),
                    userErrorMessage: f.schedule
                }, {
                    slideId: 2,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [f, E, D]), j = Object.keys(n).length, G = (0, m.isGuildScheduledEventActive)(l), P = e => Math.max(0, Math.min(e, j - 1)), [B, b] = r.useState(G ? 1 : 0), [F, w] = r.useState(!1), k = r.useMemo(() => y.slice(0, B + 1).map(e => e.valid).every(Boolean), [y, B]), Y = B >= y.length ? 3 : y[P(B)].slideId, z = 3 === Y, Z = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                Z(z);
                let X = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
                    W = r.useRef(null),
                    K = e => {
                        w(!1), b(P(e))
                    };
                r.useEffect(() => {
                    null != C && K(3)
                }, [null == C ? void 0 : C.id, K]);
                let q = () => {
                        if (!k) return;
                        let e = 2 === Y;
                        e ? S() : z ? g() : K(B + 1)
                    },
                    J = () => {
                        K(B - 1)
                    },
                    Q = V.default.Messages.NEXT;
                return 2 === Y && (Q = E ? V.default.Messages.SAVE_EVENT : V.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d.ModalRoot, {
                        transitionState: _,
                        "aria-labelledby": x,
                        size: d.ModalSize.DYNAMIC,
                        children: [!X && z ? (0, s.jsx)(H, {
                            modal: W.current
                        }) : null, (0, s.jsxs)(d.ModalContent, {
                            className: U.content,
                            scrollerRef: W,
                            children: [!z && (0, s.jsx)(T.default, {
                                steps: y.map(e => e.label),
                                stepIndex: B,
                                onClick: e => {
                                    e < B ? J() : e > B && q()
                                }
                            }), (0, s.jsxs)(d.Slides, {
                                activeSlide: Y,
                                width: 440,
                                onSlideReady: e => {
                                    w(e === Y)
                                },
                                children: [(0, s.jsx)(d.Slide, {
                                    id: 0,
                                    children: (0, s.jsx)(O.default, {
                                        guildId: t,
                                        guildEvent: l,
                                        validationErrorMessage: f.entity,
                                        isSlideReady: F,
                                        onChange: v
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 1,
                                    children: (0, s.jsx)(M.default, {
                                        guildEvent: l,
                                        guildEventId: a,
                                        guildId: t,
                                        editBroadcastInfoData: o,
                                        onChange: v,
                                        error: h,
                                        validationErrorMessage: f.schedule,
                                        isSlideReady: F
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 2,
                                    children: (0, s.jsx)(R.default, {
                                        guildId: t,
                                        guildEvent: l,
                                        guildEventId: a,
                                        error: h
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 3,
                                    children: (0, s.jsx)(L.default, {
                                        onClose: g,
                                        event: C
                                    })
                                })]
                            })]
                        }), !z && (0, s.jsxs)(d.ModalFooter, {
                            className: U.footer,
                            children: [(0, s.jsxs)("div", {
                                className: U.inline,
                                children: [(0, s.jsx)(d.Button, {
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: g,
                                    children: V.default.Messages.CANCEL
                                }), (0, s.jsx)(d.Button, {
                                    onClick: q,
                                    disabled: !k,
                                    className: U.button,
                                    submitting: I,
                                    children: Q
                                })]
                            }), 0 !== Y && (0, s.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                size: d.Button.Sizes.MIN,
                                onClick: J,
                                color: d.Button.Colors.LINK,
                                children: V.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: n,
                    transitionState: a,
                    onClose: c
                } = e, E = (0, u.useStateFromStores)([I.default], () => I.default.getGuild(t)), T = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(n), [n]), N = (0, u.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t), [t]), h = (0, x.getInitialGuildEventData)(T, N), [A, O] = r.useState(h), [R] = r.useState((0, x.isEditingEvent)(T)), [M, L] = r.useState(null), U = e => {
                    var t;
                    let l = (0, g.isGuildEventInvitable)(e),
                        n = null !== (t = e.channel_id) && void 0 !== t ? t : null == N ? void 0 : N.id;
                    null != n && o.default.createInvite(n, {
                        max_age: G.value,
                        max_uses: P.value
                    }, j.InstantInviteSources.GUILD_EVENTS), l ? L(e) : c()
                }, H = (0, f.default)(E, null == T ? void 0 : T.id, A), [b, {
                    loading: F,
                    error: w
                }] = (0, v.default)(async () => {
                    if (null != M) return;
                    let e = {
                        broadcastToDirectoryChannels: H.broadcastToDirectoryChannels
                    };
                    if (R && null != n) return await S.default.saveEvent(n, A, t, e), c();
                    let l = await S.default.createGuildEvent(A, t, e);
                    return U(l.body), l
                }), k = r.useMemo(() => (0, D.default)(A, R), [A, R]);
                return (0, s.jsx)(B, {
                    guildId: t,
                    guildEvent: A,
                    guildEventId: n,
                    editBroadcastInfoData: H,
                    isEdit: R,
                    formErrors: k,
                    transitionState: a,
                    loading: F,
                    error: w,
                    onChange: e => {
                        if (null != e.entityType) {
                            var l;
                            let n = (0, p.getChannelTypeFromEntity)(e.entityType),
                                [a] = (0, C.getEventChannelsByType)(t, n);
                            e.channelId = null !== (l = null == a ? void 0 : a.id) && void 0 !== l ? l : null, e.entityType !== y.GuildScheduledEventEntityTypes.EXTERNAL && A.entityType === y.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        O(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        let e = (null == T ? void 0 : T.scheduled_start_time) !== A.scheduledStartTime || T.scheduled_end_time !== A.scheduledEndTime || !(0, i.isEqual)(T.recurrence_rule, A.recurrenceRule);
                        null != A.recurrenceRule && R && e ? (0, d.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await l.el("77078").then(l.bind(l, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: V.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: V.default.Messages.SAVE_EVENT,
                                cancelText: V.default.Messages.NEVERMIND,
                                onConfirm: b,
                                children: [(0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : b()
                    },
                    onClose: c,
                    createdEvent: M
                })
            }(a = n || (n = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"
        },
        560309: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("866227"),
                r = l.n(s),
                i = l("446674"),
                u = l("77078"),
                d = l("679653"),
                o = l("42203"),
                c = l("305961"),
                E = l("957255"),
                f = l("27618"),
                _ = l("697218"),
                I = l("718550"),
                T = l("368121"),
                N = l("944633"),
                h = l("228427"),
                v = l("697468"),
                m = l("398604"),
                S = l("334683"),
                g = l("799547"),
                C = l("776863"),
                x = l("613767"),
                p = l("841363"),
                A = l("306939"),
                O = l("745049"),
                R = l("49111"),
                M = l("782340"),
                L = l("869785");
            let D = e => e === O.GuildScheduledEventEntityTypes.EXTERNAL,
                y = (e, t) => {
                    let l = o.default.getChannel(e);
                    if (null == l) return null;
                    let a = l.type === R.ChannelTypes.GUILD_STAGE_VOICE,
                        s = (0, x.isChannelPublic)(l, t),
                        r = s ? T.default : N.default,
                        i = s ? h.default : v.default;
                    return (0, n.jsx)(a ? i : r, {
                        height: 24,
                        className: L.channelOptionIcon
                    })
                },
                j = e => {
                    let {
                        guildId: t,
                        channelType: l,
                        channel: a,
                        onSelectChannel: s,
                        disabled: r,
                        entityType: i
                    } = e, o = l === R.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, i), E = (0, g.useGetEventChannelsByType)(t, l);
                    return (0, n.jsxs)(u.FormItem, {
                        title: o ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: L.options,
                        disabled: r,
                        required: !0,
                        children: [(0, n.jsx)(u.SearchableSelect, {
                            value: null == a ? void 0 : a.id,
                            options: E.map(e => ({
                                value: e.id,
                                label: (0, d.computeChannelName)(e, _.default, f.default, !0)
                            })),
                            onChange: e => {
                                let t = E.find(t => t.id === e);
                                s(null != t ? t : void 0)
                            },
                            renderOptionPrefix: e => y(null == e ? void 0 : e.value, i),
                            isDisabled: r
                        }), !c && (0, n.jsx)(u.Text, {
                            color: "header-secondary",
                            className: L.channelPrivate,
                            variant: "text-sm/normal",
                            children: M.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function V(e, t, l, n) {
                return t ? {
                    disabled: !0,
                    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : l ? 0 === n && e !== O.GuildScheduledEventEntityTypes.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            let U = e => t => {
                    e({
                        entityMetadata: {
                            location: t
                        }
                    })
                },
                G = e => t => {
                    var l;
                    e({
                        channelId: null !== (l = null == t ? void 0 : t.id) && void 0 !== l ? l : null
                    })
                },
                P = (e, t) => l => {
                    let {
                        value: n
                    } = l, a = {
                        entityType: n,
                        scheduledEndTime: void 0
                    };
                    if (D(n)) {
                        var s;
                        let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
                        a.scheduledEndTime = e.toISOString()
                    }
                    e(a)
                };

            function H(e) {
                let {
                    guildId: t,
                    guildEvent: l,
                    onChange: s,
                    isFocusReady: r
                } = e, {
                    entityType: d,
                    channelId: c
                } = l, E = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), f = a.useRef(null);
                a.useEffect(() => {
                    if (r && D(d)) {
                        var e;
                        null === (e = f.current) || void 0 === e || e.focus()
                    }
                }, [r, d]);
                let _ = U(s),
                    I = G(s),
                    T = (0, p.getLocationFromEventData)(l),
                    N = (0, p.getChannelTypeFromEntity)(d),
                    h = (0, m.isGuildScheduledEventActive)(l);
                return null == d || d === O.GuildScheduledEventEntityTypes.NONE ? null : D(d) ? (0, n.jsx)(u.FormItem, {
                    title: M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: L.options,
                    required: !0,
                    children: (0, n.jsx)(u.TextInput, {
                        className: L.textInput,
                        onChange: _,
                        placeholder: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: O.MAX_EVENT_LOCATION_LENGTH,
                        value: null != T ? T : "",
                        inputRef: f
                    })
                }) : null == N ? null : (0, n.jsx)(j, {
                    guildId: t,
                    channelType: N,
                    onSelectChannel: I,
                    channel: E,
                    entityType: d,
                    disabled: h
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: l,
                    onChange: s
                } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), d = (0, S.default)(t, void 0), o = (0, S.default)(t, R.ChannelTypes.GUILD_VOICE), E = (0, S.default)(t, R.ChannelTypes.GUILD_STAGE_VOICE), f = (0, g.useGetEventChannelsByType)(t, R.ChannelTypes.GUILD_VOICE), _ = (0, C.useChannelsUserCanStartStageIn)(r), N = null == r ? void 0 : r.hasFeature(R.GuildFeatures.COMMUNITY), v = (0, m.isGuildScheduledEventActive)(l), x = P(s, l), p = a.useMemo(() => {
                    let e = [{
                        name: M.default.Messages.VOICE_CHANNEL,
                        value: O.GuildScheduledEventEntityTypes.VOICE,
                        desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                        icon: T.default,
                        ...V(O.GuildScheduledEventEntityTypes.VOICE, v, o, f.length)
                    }, {
                        name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                        value: O.GuildScheduledEventEntityTypes.EXTERNAL,
                        desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                        icon: I.default,
                        ...V(O.GuildScheduledEventEntityTypes.EXTERNAL, v, d, 0)
                    }];
                    return N ? [{
                        name: M.default.Messages.STAGE_CHANNEL,
                        value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                        desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                        icon: h.default,
                        ...V(O.GuildScheduledEventEntityTypes.STAGE_INSTANCE, v, E, _.length)
                    }, ...e] : e
                }, [d, o, E, N, f.length, _.length, v]);
                return (0, n.jsx)(u.RadioGroup, {
                    value: l.entityType,
                    options: p,
                    onChange: x,
                    className: L.options
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    validationErrorMessage: s,
                    onChange: r,
                    isSlideReady: d = !1
                } = e, {
                    entityType: o
                } = a, f = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), _ = (0, C.useChannelsUserCanStartStageIn)(f), I = (0, i.useStateFromStores)([E.default], () => E.default.can(R.Permissions.MANAGE_CHANNELS, f)), T = null == f ? void 0 : f.hasFeature(R.GuildFeatures.COMMUNITY), N = P(r, a), h = T && !D(o) && 0 === _.length && I && null != o;
                return (0, n.jsxs)("div", {
                    className: L.container,
                    children: [(0, n.jsx)(u.Heading, {
                        variant: "heading-xl/semibold",
                        className: L.header,
                        children: M.default.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, n.jsx)(u.Text, {
                        color: "header-secondary",
                        className: L.text,
                        variant: "text-sm/normal",
                        children: M.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, n.jsx)(B, {
                        guildId: t,
                        guildEvent: a,
                        onChange: r
                    }), (0, n.jsx)(H, {
                        guildId: t,
                        guildEvent: a,
                        isFocusReady: d,
                        onChange: r
                    }), h ? (0, n.jsx)(A.default, {
                        onClick: () => {
                            N({
                                value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                                name: M.default.Messages.STAGE_CHANNEL
                            }), (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await l.el("581354").then(l.bind(l, "581354"));
                                return l => (0, n.jsx)(e, {
                                    ...l,
                                    channelType: R.ChannelTypes.GUILD_STAGE_VOICE,
                                    guildId: t
                                })
                            })
                        }
                    }) : null]
                })
            }
        },
        151859: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                r = l("77078"),
                i = l("419830"),
                u = l("267567"),
                d = l("42203"),
                o = l("305961"),
                c = l("697218"),
                E = l("718550"),
                f = l("189443"),
                _ = l("841363"),
                I = l("93550"),
                T = l("617347"),
                N = l("745049"),
                h = l("782340"),
                v = l("151990");

            function m(e) {
                var t, l, m;
                let {
                    guildId: S,
                    guildEvent: g,
                    guildEventId: C,
                    error: x
                } = e, p = a.useMemo(() => (0, f.convertToFakeGuildEvent)(g, S), [g, S]), {
                    channel_id: A,
                    name: O,
                    image: R,
                    description: M
                } = p, L = (0, s.useStateFromStores)([d.default], () => d.default.getChannel(A), [A]), D = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(S), [S]), y = (0, _.getLocationFromEvent)(p), j = (0, s.useStateFromStores)([c.default], () => null != g.creatorId ? c.default.getUser(g.creatorId) : c.default.getCurrentUser(), [g.creatorId]), V = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(S), [S]), U = (0, i.getChannelIconComponent)(L, D);
                return (0, n.jsxs)("div", {
                    className: v.content,
                    children: [(0, n.jsx)(T.default, {
                        className: v.previewCard,
                        guild: D,
                        channel: L,
                        location: null != y ? y : void 0,
                        creator: j,
                        name: O,
                        description: M,
                        imageSource: (l = (0, f.convertToFakeGuildEvent)(g, S, C), null == (m = R) && null == l.image ? null : null != m && /^data:/.test(m) ? m : (0, I.default)(l)),
                        isActive: !1,
                        isUserLurking: V,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: N.FAKE_EVENT_ID,
                        eventPreview: p
                    }), (0, n.jsxs)("div", {
                        className: v.textContainer,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            children: h.default.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: v.subheader,
                            children: null != location ? h.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : h.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (t = null == L ? void 0 : L.name) && void 0 !== t ? t : "",
                                channelHook: () => {
                                    var e;
                                    return (0, n.jsxs)("div", {
                                        className: v.channelName,
                                        children: [null != U ? (0, n.jsx)(U, {
                                            width: 20,
                                            height: 20,
                                            className: v.icon
                                        }) : (0, n.jsx)(E.default, {
                                            height: 18,
                                            width: 18,
                                            className: v.locationIcon
                                        }), null !== (e = null == L ? void 0 : L.name) && void 0 !== e ? e : y]
                                    })
                                }
                            })
                        }), null != x && (0, n.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: v.subheader,
                            children: x.getAnyErrorMessage()
                        })]
                    })]
                })
            }
        },
        299342: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("194250"),
                r = l("782340"),
                i = l("11644");

            function u(e) {
                let {
                    isSlideReady: t,
                    ...l
                } = e;
                return (0, n.jsxs)("div", {
                    className: i.slideContainer,
                    children: [(0, n.jsxs)("div", {
                        className: i.header,
                        children: [(0, n.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: r.default.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            className: i.text,
                            variant: "text-sm/normal",
                            children: r.default.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, n.jsx)(s.default, {
                        ...l,
                        canSetFocus: t
                    })]
                })
            }
        },
        499950: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                r = l("9294"),
                i = l("512027"),
                u = l("52393"),
                d = l("652453"),
                o = l("119184"),
                c = l("923959"),
                E = l("305961"),
                f = l("330154"),
                _ = l("943232"),
                I = l("945330"),
                T = l("599110"),
                N = l("306160"),
                h = l("354023"),
                v = l("841363"),
                m = l("49111"),
                S = l("782340"),
                g = l("131439");
            let {
                INVITE_OPTIONS_7_DAYS: C,
                INVITE_OPTIONS_UNLIMITED: x
            } = h.default;

            function p(e) {
                var t, l, p;
                let {
                    onClose: A,
                    event: O
                } = e, R = null == O ? void 0 : O.guild_id, M = (0, a.useStateFromStores)([c.default], () => {
                    var e;
                    return null != R ? null === (e = c.default.getDefaultChannel(R)) || void 0 === e ? void 0 : e.id : null
                }, [R]), L = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(R), [R]), D = (null == L ? void 0 : L.vanityURLCode) != null && (null == L ? void 0 : L.vanityURLCode.length) > 0, {
                    enabled: y
                } = i.default.useExperiment({
                    guildId: null != R ? R : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: D
                }), {
                    channel_id: j,
                    id: V
                } = null != O ? O : {}, U = (0, a.useStateFromStores)([f.default], () => {
                    let e = null != j ? j : M;
                    return null == e ? null : f.default.getInvite(e)
                }, [j, M]);
                if (null == O) return A(), null;
                let G = y && null !== (t = null == L ? void 0 : L.vanityURLCode) && void 0 !== t ? t : null == U ? void 0 : U.code,
                    P = null != G ? (0, r.generateInviteKeyFromExtraData)({
                        baseCode: G,
                        guildScheduledEventId: V
                    }) : null,
                    H = null == P || null == U,
                    B = (0, u.default)(null != P ? P : ""),
                    b = null !== (l = null == U ? void 0 : U.maxAge) && void 0 !== l ? l : C.value,
                    F = null !== (p = null == U ? void 0 : U.maxUses) && void 0 !== p ? p : x.value;
                return (0, n.jsxs)("div", {
                    className: g.container,
                    children: [(0, n.jsx)(s.Clickable, {
                        onClick: A,
                        className: g.close,
                        "aria-label": S.default.Messages.CLOSE,
                        children: (0, n.jsx)(I.default, {})
                    }), (0, n.jsx)(o.default, {
                        children: (0, n.jsx)("div", {
                            className: g.iconContainer,
                            children: (0, n.jsx)(_.default, {
                                height: 30,
                                width: 30,
                                className: g.icon
                            })
                        })
                    }), (0, n.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: g.header,
                        children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: g.body,
                        children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, n.jsxs)("div", {
                        className: g.invite,
                        children: [(0, n.jsx)(d.RawInviteCopyInputConnected, {
                            value: B,
                            autoFocus: !1,
                            onCopy: e => {
                                if (H) return;
                                (0, N.copy)(e);
                                let t = (0, v.getChannelTypeFromEntity)(O.entity_type);
                                T.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: O.guild_id,
                                    channel: j,
                                    channel_type: t,
                                    location: m.InstantInviteSources.GUILD_EVENTS,
                                    code: U.code,
                                    guild_scheduled_event_id: null == O ? void 0 : O.id
                                })
                            }
                        }), (null == L ? void 0 : L.vanityURLCode) == null && (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: g.inviteDetail,
                            children: (0, h.maxAgeString)(b, F)
                        })]
                    })]
                })
            }
        },
        29913: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("77078"),
                i = l("849467"),
                u = l("782340"),
                d = l("130221");

            function o(e) {
                let {
                    guild: t,
                    speakers: l,
                    speakerCount: a,
                    className: o
                } = e, c = l.slice(0, 5), E = c.map(e => {
                    var l, a;
                    return (0, n.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, n.jsx)(r.Avatar, {
                            src: null == e ? void 0 : null === (l = e.user) || void 0 === l ? void 0 : l.getAvatarURL(t.id, 20),
                            size: r.AvatarSizes.SIZE_20,
                            className: d.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, n.jsx)("div", {
                            className: d.textInGridContainer,
                            children: (0, n.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: d.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), f = a - c.length;
                return (0, n.jsxs)("div", {
                    className: s(d.grid, o),
                    children: [E, f > 0 && (0, n.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, n.jsx)("div", {
                            className: d.iconMicrophone,
                            children: (0, n.jsx)(i.default, {
                                height: 12
                            })
                        }), (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: f
                            })
                        })]
                    })]
                })
            }
        },
        306939: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                r = l("139321"),
                i = l("597517"),
                u = l("782340"),
                d = l("8341"),
                o = l("533662");
            let c = () => (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: d.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: d.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: d.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: d.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                })]
            });

            function E(e) {
                let {
                    onClick: t
                } = e, l = (0, a.useStateFromStores)([r.HotspotStore], () => !r.HotspotStore.hasHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL));
                return l ? null : (0, n.jsxs)("div", {
                    className: d.container,
                    children: [(0, n.jsxs)("div", {
                        className: d.content,
                        children: [(0, n.jsxs)("div", {
                            className: d.textContainer,
                            children: [(0, n.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, n.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: d.descriptionText,
                                children: u.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, n.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: c
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: d.image,
                            children: (0, n.jsx)("img", {
                                src: o,
                                alt: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: d.footer,
                        children: [(0, n.jsx)(s.Button, {
                            onClick: t,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            className: d.button,
                            children: u.default.Messages.CREATE_STAGE_CHANNEL
                        }), (0, n.jsx)(s.Button, {
                            onClick: () => {
                                i.hideHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL)
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.SMALL,
                            look: s.ButtonLooks.LINK,
                            children: u.default.Messages.DONT_SHOW_AGAIN
                        })]
                    })]
                })
            }
        },
        27754: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("866227"),
                a = l.n(n),
                s = l("841363"),
                r = l("822516"),
                i = l("745049"),
                u = l("782340");

            function d(e, t) {
                return {
                    entity: function(e) {
                        let {
                            entityType: t,
                            channelId: l
                        } = e, n = (0, s.getLocationFromEventData)(e);
                        return null == t ? "An event type must be specified." : (null == n || "" === n.trim()) && null == l ? "Either a location or channel must be specified." : void 0
                    }(e),
                    schedule: function(e, t) {
                        let l = (0, r.getScheduleFromEventData)(e),
                            {
                                entityType: n
                            } = e;
                        if (null == l || (null == l ? void 0 : l.startDate) == null) return u.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: d
                        } = l;
                        return n === i.GuildScheduledEventEntityTypes.EXTERNAL && null == d ? u.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_START_DATE : null != d && null != s && d.isBefore(s) ? u.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != d && d.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
                    }(e, t),
                    topic: function(e) {
                        let {
                            name: t
                        } = e, l = null == t || "" === t.trim();
                        return l ? "Topic must be specified." : void 0
                    }(e)
                }
            }
        },
        597517: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                hideHotspot: function() {
                    return r
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var n = l("913144"),
                a = l("599110"),
                s = l("49111");

            function r(e) {
                a.default.track(s.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), n.default.wait(() => {
                    n.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            }), l("222007");
            var n = l("446674"),
                a = l("913144"),
                s = l("197881"),
                r = l("492397");
            let i = new Set,
                u = {};
            class d extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        l = !t && u[e];
                    return !(r.CONFERENCE_MODE_ENABLED || s.ProcessArgs.isDisallowPopupsSet()) && (l || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: u
                    }
                }
            }
            d.displayName = "HotspotStore", d.persistKey = "hotspots", d.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var o = new d(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: l
                    } = e;
                    u[t] = l
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        139321: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                HotspotStore: function() {
                    return s.default
                }
            });
            var n = l("533613");
            l.es(n, t);
            var a = l("597517");
            l.es(a, t);
            var s = l("269596")
        },
        656913: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("819855"),
                i = l("841098"),
                u = l("449918"),
                d = l("832132"),
                o = l("818643"),
                c = l("608684"),
                E = l("49111"),
                f = l("575282");
            let _ = E.Color.PRIMARY_400,
                I = E.Color.PRIMARY_500;

            function T(e) {
                let {
                    enabled: t,
                    imageClassName: l,
                    iconWrapperClassName: a,
                    ...E
                } = e, T = (0, i.default)(), N = (0, r.isThemeDark)(T) ? _ : I, h = {
                    height: 18,
                    width: 18,
                    color: (0, u.getColor)(N)
                };
                return (0, n.jsx)(c.default, {
                    className: s({
                        [f.avatarUploader]: t,
                        [f.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: s(l, f.avatarUploaderInnerSquare, {
                        [f.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != E.image && "" !== E.image ? (0, n.jsx)(d.default, {
                        ...h
                    }) : (0, n.jsx)(o.default, {
                        ...h
                    }),
                    iconClassName: s(f.avatarUploadIcon, f.hideDefaultIcon),
                    iconWrapperClassName: a,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0,
                    ...E
                })
            }
        },
        608684: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ImageUploaderIcon: function() {
                    return I
                },
                default: function() {
                    return N
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("627445"),
                u = l.n(i),
                d = l("77078"),
                o = l("159885"),
                c = l("694187"),
                E = l("49111"),
                f = l("782340"),
                _ = l("911686");

            function I(e) {
                let {
                    className: t,
                    icon: l = null
                } = e;
                return (0, n.jsx)("div", {
                    className: r(_.imageUploaderIcon, t),
                    children: l
                })
            }
            class T extends a.PureComponent {
                handleExternalFileChange(e) {
                    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, l, a, s;
                    let {
                        image: i,
                        hint: u,
                        name: T,
                        makeURL: N,
                        disabled: h,
                        onChange: v,
                        showIcon: m,
                        showIconDisabled: S,
                        className: g,
                        imageClassName: C,
                        iconClassName: x,
                        iconWrapperClassName: p,
                        icon: A,
                        hideSize: O,
                        imageStyle: R,
                        showRemoveButton: M,
                        maxFileSizeBytes: L,
                        onFileSizeError: D,
                        onOpenImageSelectModal: y,
                        "aria-label": j
                    } = this.props;
                    if (null != (t = null != i && /^data:/.test(i) ? i : N(i)) ? l = 'url("'.concat(t, '")') : null != T && (a = (0, n.jsx)("div", {
                            className: _.imageUploaderAcronym,
                            children: (0, o.getAcronym)(T)
                        })), h) return (0, n.jsx)("div", {
                        className: r(_.imageUploader, _.disabled, g),
                        children: (0, n.jsxs)("div", {
                            className: r(_.imageUploaderInner, C),
                            style: {
                                ...R,
                                backgroundImage: l
                            },
                            children: [a, S && (0, n.jsx)("div", {
                                className: r(_.imageUploaderIcon, _.imageUploaderIconDisabled, x),
                                children: A
                            })]
                        })
                    });
                    null != i ? s = (0, n.jsx)(d.Anchor, {
                        className: _.removeButton,
                        onClick: this.handleRemove,
                        children: f.default.Messages.REMOVE
                    }) : !O && (s = (0, n.jsx)("small", {
                        className: _.sizeInfo,
                        children: f.default.Messages.MINIMUM_SIZE.format({
                            size: E.AVATAR_SIZE
                        })
                    }));
                    let V = null !== (e = null != j ? j : u) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
                    return (0, n.jsxs)("div", {
                        className: r(_.imageUploader, g),
                        children: [(0, n.jsx)(d.FocusRing, {
                            within: !0,
                            children: (0, n.jsxs)("div", {
                                className: m ? r(_.imageUploaderIconWrapper, p) : void 0,
                                children: [(0, n.jsxs)("div", {
                                    className: r(_.imageUploaderInner, C),
                                    style: {
                                        ...R,
                                        backgroundImage: l
                                    },
                                    children: [(0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: a
                                    }), null != y ? (0, n.jsx)(d.Clickable, {
                                        className: _.imageUploaderFileInput,
                                        "aria-label": V,
                                        onClick: y
                                    }) : (0, n.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: v,
                                        className: _.imageUploaderFileInput,
                                        "aria-label": V,
                                        tabIndex: 0,
                                        maxFileSizeBytes: L,
                                        onFileSizeError: D
                                    })]
                                }), null != u && (0, n.jsx)("div", {
                                    className: _.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: u
                                }), m && (0, n.jsx)(I, {
                                    className: x,
                                    icon: A
                                })]
                            })
                        }), M ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = a.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            T.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var N = T
        },
        650484: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return T
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("627445"),
                u = l.n(i),
                d = l("817736"),
                o = l.n(d),
                c = l("77078"),
                E = l("642906"),
                f = l("990893");

            function _(e) {
                var t, l, s, i, d, o;
                let {
                    header: _,
                    isLargeModal: I,
                    stepProps: T
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: l,
                        ...n
                    } = e;
                    return {
                        header: t,
                        isLargeModal: l,
                        stepProps: n
                    }
                }(e), {
                    step: N,
                    stepConfigs: h,
                    setBodyNode: v,
                    setFooterNode: m,
                    setModalOverlayNode: S,
                    setReadySlideId: g
                } = (0, E.usePaymentContext)(), C = h.find(e => e.key === N);
                a.useEffect(() => {
                    S(null)
                }, [N, S]), u(null != C, "Unknown step for current payment flow.");
                let x = null !== (d = null == C ? void 0 : null === (t = C.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== d && d,
                    p = null == C ? void 0 : null === (l = C.options) || void 0 === l ? void 0 : l.bodyClassName,
                    A = void 0 !== I && I ? f.sliderBodyLarge : null == C ? void 0 : null === (s = C.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, n.jsxs)(n.Fragment, {
                    children: [null === (o = null == C ? void 0 : null === (i = C.options) || void 0 === i ? void 0 : i.renderHeader) || void 0 === o || o ? _ : null, C.renderStep(T), null == N || x ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(c.ModalContent, {
                            className: r(f.body, p),
                            children: (0, n.jsx)(c.Slides, {
                                activeSlide: N,
                                centered: !1,
                                onSlideReady: e => g(e),
                                children: h.filter(e => null != e.key).map(e => (0, n.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, n.jsx)("form", {
                                        className: r(f.sliderBody, A),
                                        ref: e => v(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, n.jsx)("div", {
                            ref: e => m(e)
                        }), (0, n.jsx)("div", {
                            ref: e => S(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: l
                } = (0, E.usePaymentContext)();
                return null == l ? null : o.createPortal(t, l)
            }

            function T(e) {
                let {
                    children: t
                } = e, {
                    footerNode: l
                } = (0, E.usePaymentContext)();
                return null == l ? null : o.createPortal(t, l)
            }
        },
        520497: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("49111");

            function a(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: l
                } = window.GLOBAL_ENV;
                return "development" !== l ? "".concat(location.protocol, "//").concat(t).concat(n.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(n.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        754474: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BotTypes: function() {
                    return i.BotTagTypes
                },
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("79798"),
                i = l("988268"),
                u = l("888770"),
                d = e => {
                    let {
                        name: t,
                        discriminator: l,
                        invertBotTagColor: a,
                        nameColor: i,
                        className: d,
                        botType: o,
                        usernameClass: c,
                        discriminatorClass: E,
                        botClass: f,
                        botVerified: _ = !1,
                        style: I,
                        useRemSizes: T = !1,
                        usernameIcon: N
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: s(d, u.nameTag),
                        style: I,
                        children: [(0, n.jsxs)("span", {
                            className: s(u.username, c),
                            style: null != i ? {
                                color: i
                            } : void 0,
                            children: [N, t]
                        }), null != l ? (0, n.jsxs)("span", {
                            className: null != E ? E : void 0,
                            children: ["#", l]
                        }) : null, null != o ? (0, n.jsx)(r.default, {
                            type: o,
                            invertColor: a,
                            className: s(f, u.bot),
                            verified: _,
                            useRemSizes: T
                        }) : null]
                    })
                }
        },
        683911: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("77078"),
                i = l("258078"),
                u = l("549043");

            function d(e) {
                let {
                    steps: t,
                    stepIndex: l,
                    onClick: a
                } = e;
                return (0, n.jsx)("div", {
                    className: u.container,
                    children: t.map((e, t) => {
                        let d = l === t;
                        return (0, n.jsxs)(r.Clickable, {
                            onClick: () => a(t),
                            className: u.stepContainer,
                            children: [(0, n.jsx)("div", {
                                className: s(u.progressBar, {
                                    [u.selectedProgressBar]: d
                                })
                            }), (0, n.jsx)(i.default, {
                                color: d ? i.default.Colors.BRAND : i.default.Colors.MUTED,
                                size: i.default.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    })
                })
            }
        },
        461380: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("384737"),
                i = l("448052"),
                u = l("748802"),
                d = l("260792"),
                o = l("77078"),
                c = l("75196"),
                E = l("4177");
            let f = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                _ = e => {
                    let {
                        direction: t = f.DOWN,
                        width: l = 24,
                        height: a = 24,
                        color: _ = "currentColor",
                        transition: I = E.transition,
                        className: T,
                        foreground: N,
                        expanded: h,
                        ...v
                    } = e, {
                        enabled: m
                    } = (0, o.useRedesignIconContext)(), S = t;
                    if (!0 === h ? S = f.DOWN : !1 === h && (S = f.RIGHT), m) {
                        let e = {
                            [f.UP]: d.ChevronSmallUpIcon,
                            [f.DOWN]: r.ChevronSmallDownIcon,
                            [f.LEFT]: i.ChevronSmallLeftIcon,
                            [f.RIGHT]: u.ChevronSmallRightIcon
                        } [S];
                        return (0, n.jsx)(e, {
                            ...v,
                            className: T,
                            width: l,
                            height: a,
                            color: _,
                            colorClass: N
                        })
                    }
                    return (0, n.jsx)("svg", {
                        className: s(T, I, S),
                        width: l,
                        height: a,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(v),
                        children: (0, n.jsx)("path", {
                            className: N,
                            fill: "none",
                            stroke: _,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            _.Directions = f;
            var I = _
        },
        832132: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("504318"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: l = 24,
                        width: a = 24,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: a,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, s.PencilIcon, void 0, {
                    size: 24
                })
        },
        867544: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("469563"),
                r = l("163725"),
                i = l("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        foregroundColor: r = a.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: d,
                        ...o
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("rect", {
                            fill: r,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, n.jsx)("path", {
                            fill: s,
                            className: d,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, r.EyeSlashIcon, void 0, {
                    size: 24
                })
        },
        818643: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("851298"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: a
                        }), (0, n.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: a
                        })]
                    })
                }, s.ImagePlusIcon, void 0, {
                    size: 24
                })
        },
        543289: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("75196");

            function s(e) {
                let {
                    width: t = 104,
                    height: l = 80,
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: l,
                    viewBox: "0 0 104 80",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
                        fill: "#ADF3FF"
                    }), (0, n.jsx)("path", {
                        d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
                        fill: "#ADF3FF"
                    }), (0, n.jsx)("path", {
                        d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
                        fill: "#ADF3FF"
                    }), (0, n.jsx)("path", {
                        d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
                        fill: "#ADF3FF"
                    }), (0, n.jsx)("path", {
                        d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                })
            }
        },
        433487: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("304983"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: a,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, s.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("811513"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, s.GroupIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("876726"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: a
                        })
                    })
                }, s.PlayIcon, void 0, {
                    size: 16
                })
        },
        354023: function(e, t, l) {
            "use strict";
            let n;
            l.r(t), l.d(t, {
                RowTypes: function() {
                    return a
                },
                generateRowsForQuery: function() {
                    return A
                },
                getMostRecentDMedUser: function() {
                    return O
                },
                getUsersAlreadyJoined: function() {
                    return R
                },
                maxAgeString: function() {
                    return D
                },
                default: function() {
                    return y
                }
            }), l("424973"), l("222007");
            var a, s, r = l("191225"),
                i = l("42203"),
                u = l("26989"),
                d = l("660478"),
                o = l("27618"),
                c = l("697218"),
                E = l("287850"),
                f = l("25292"),
                _ = l("49111"),
                I = l("91366"),
                T = l("782340");
            n = l("591205"), (s = a || (a = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
            let N = (e, t) => null != e && u.default.isMember(e, t),
                h = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: l,
                        maxRowsWithoutQuery: n,
                        omitGuildId: a,
                        shownUserIds: s,
                        rows: r,
                        counts: i
                    } = e;
                    if (null != l)
                        for (let e of l) {
                            if (null != n && n > 0 && r.length >= n) break;
                            if (t.has(e) || s.has(e)) continue;
                            let l = c.default.getUser(e);
                            !(null == l || N(a, l.id)) && (s.add(l.id), r.push({
                                type: "FRIEND",
                                item: l,
                                isSuggested: !0
                            }), i.numFriends++)
                        }
                },
                v = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: l,
                        rows: n,
                        counts: a
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != l && l > 0 && n.length >= l) break;
                            let t = i.default.getChannel(e);
                            null != t && (n.push({
                                type: "CHANNEL",
                                item: t,
                                isSuggested: !0
                            }), a.numChannels++)
                        }
                },
                m = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: l,
                        omitGuildId: n,
                        shownUserIds: a,
                        rows: s,
                        counts: r,
                        includeGroupDms: u,
                        limit: o
                    } = e, f = 0;
                    for (let e of E.default.getPrivateChannelIds()) {
                        if (null != l && l > 0 && s.length >= l || null != o && f >= o) break;
                        let E = i.default.getChannel(e);
                        if (null == E || !E.isPrivate()) continue;
                        if (u && E.type === _.ChannelTypes.GROUP_DM) {
                            s.push({
                                type: "GROUP_DM",
                                item: E,
                                isSuggested: !1
                            }), r.numGroupDms++, f++;
                            continue
                        }
                        let I = d.default.lastMessageId(E.id);
                        if (null == I) continue;
                        let T = E.getRecipientId();
                        if (null != T && !t.has(T) && !a.has(T)) {
                            let e = c.default.getUser(T);
                            if (null == e || e.bot || N(n, e.id)) continue;
                            a.add(e.id), s.push({
                                type: "DM",
                                item: e,
                                isSuggested: !1
                            }), r.numDms++, f++
                        }
                    }
                },
                S = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: l,
                        omitGuildId: n,
                        shownUserIds: a,
                        rows: s,
                        counts: r
                    } = e;
                    for (let e of o.default.getFriendIDs()) {
                        if (null != l && l > 0 && s.length >= l) break;
                        if (t.has(e) || a.has(e)) continue;
                        let i = c.default.getUser(e);
                        !(null == i || N(n, i.id)) && (s.push({
                            type: "FRIEND",
                            item: i,
                            isSuggested: !1
                        }), r.numFriends++)
                    }
                },
                g = e => {
                    let {
                        query: t,
                        rows: l,
                        counts: n,
                        inviteTargetType: a
                    } = e;
                    a === I.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
                        query: t,
                        limit: 3,
                        guildId: void 0
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        l.push({
                            type: "CHANNEL",
                            item: t,
                            isSuggested: !1
                        }), n.numChannels++
                    })
                },
                C = e => {
                    let {
                        query: t,
                        omitUserIds: l,
                        shownUserIds: n,
                        rows: a,
                        counts: s
                    } = e;
                    f.default.queryDMUsers({
                        query: t,
                        limit: 50
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        if (l.has(t.id)) return;
                        let r = i.default.getDMFromUserId(t.id);
                        if (null == r) return;
                        let u = d.default.lastMessageId(r);
                        null != u && (n.add(t.id), a.push({
                            type: "DM",
                            item: t,
                            isSuggested: !1
                        }), s.numDms++)
                    })
                },
                x = e => {
                    let {
                        query: t,
                        rows: l,
                        counts: n
                    } = e;
                    f.default.queryGroupDMs({
                        query: t,
                        limit: 50,
                        fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        l.push({
                            type: "GROUP_DM",
                            item: t,
                            isSuggested: !1
                        }), n.numGroupDms++
                    })
                },
                p = e => {
                    let {
                        query: t,
                        rows: l,
                        counts: n,
                        omitUserIds: a,
                        shownUserIds: s
                    } = e;
                    f.default.queryFriends({
                        query: t,
                        limit: 500,
                        _fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        !(a.has(t.id) || s.has(t.id)) && (s.add(t.id), l.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !1
                        }), n.numFriends++)
                    })
                };

            function A(e) {
                let {
                    query: t,
                    inviteTargetType: l,
                    omitUserIds: n,
                    suggestedUserIds: a,
                    suggestedChannelIds: s,
                    maxRowsWithoutQuery: r,
                    omitGuildId: i
                } = e, u = new Set, d = [], o = {
                    numFriends: 0,
                    numDms: 0,
                    numGroupDms: 0,
                    numGuildMembers: 0,
                    numChannels: 0
                };
                if ("" === t) {
                    let e = {
                        omitUserIds: n,
                        maxRowsWithoutQuery: r,
                        omitGuildId: i,
                        shownUserIds: u,
                        rows: d,
                        counts: o
                    };
                    l === I.InviteTargetTypes.EMBEDDED_APPLICATION && (m({
                        ...e,
                        includeGroupDms: !1,
                        limit: 1
                    }), v({
                        ...e,
                        suggestedChannelIds: s
                    })), h({
                        ...e,
                        suggestedUserIds: a
                    }), m({
                        ...e,
                        includeGroupDms: !0
                    }), S(e)
                } else {
                    let e = {
                        query: t,
                        rows: d,
                        counts: o
                    };
                    l === I.InviteTargetTypes.EMBEDDED_APPLICATION && g({
                        ...e,
                        inviteTargetType: l
                    }), C({
                        ...e,
                        omitUserIds: n,
                        shownUserIds: u
                    }), x(e), p({
                        ...e,
                        omitUserIds: n,
                        shownUserIds: u
                    })
                }
                return {
                    rows: d,
                    counts: o
                }
            }

            function O(e, t) {
                for (let l of E.default.getPrivateChannelIds()) {
                    let n = i.default.getChannel(l);
                    if (null == n || !n.isDM() || null == d.default.lastMessageId(n.id)) continue;
                    let a = n.getRecipientId();
                    if (null != a && !e.has(a)) {
                        let e = c.default.getUser(a);
                        if (null == e || e.bot || N(t, e.id)) continue;
                        return e
                    }
                }
                return null
            }

            function R(e) {
                let {
                    channel: t,
                    inviteTargetType: l,
                    applicationId: n
                } = e;
                if (l === I.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of r.default.getEmbeddedActivitiesForChannel(t.id))
                            if (e.applicationId === n) return new Set(e.userIds)
                    }
                }
                return new Set
            }
            let M = {
                    MINUTES: "minutes",
                    HOURS: "hours",
                    DAYS: "days",
                    NEVER: "never"
                },
                L = {
                    [n.INVITE_OPTIONS_30_MINUTES.value]: {
                        value: 30,
                        type: M.MINUTES
                    },
                    [n.INVITE_OPTIONS_1_HOUR.value]: {
                        value: 1,
                        type: M.HOURS
                    },
                    [n.INVITE_OPTIONS_6_HOURS.value]: {
                        value: 6,
                        type: M.HOURS
                    },
                    [n.INVITE_OPTIONS_12_HOURS.value]: {
                        value: 12,
                        type: M.HOURS
                    },
                    [n.INVITE_OPTIONS_1_DAY.value]: {
                        value: 1,
                        type: M.DAYS
                    },
                    [n.INVITE_OPTIONS_7_DAYS.value]: {
                        value: 7,
                        type: M.DAYS
                    },
                    [n.INVITE_OPTIONS_30_DAYS.value]: {
                        value: 30,
                        type: M.DAYS
                    },
                    [n.INVITE_OPTIONS_FOREVER.value]: {
                        value: 0,
                        type: M.NEVER
                    }
                };

            function D(e, t) {
                let l = parseInt(t, 10),
                    n = 0 === l,
                    a = L[e].value,
                    s = L[e].type;
                switch (s) {
                    case M.MINUTES:
                        if (n) return T.default.Messages.INVITE_EXPIRES_MINUTES;
                        return T.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: l
                        });
                    case M.HOURS:
                        if (n) return T.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: a
                        });
                        return T.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: a,
                            numUses: l
                        });
                    case M.DAYS:
                        if (n) return T.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: a
                        });
                        return T.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: a,
                            numUses: l
                        });
                    case M.NEVER:
                        if (n) return T.default.Messages.INVITE_EXPIRES_NEVER;
                        return T.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: l
                        });
                    default:
                        return ""
                }
            }
            var y = {
                getMaxAgeOptions: n.MAX_AGE_OPTIONS,
                getMaxUsesOptions: n.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: n.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES
            }
        },
        686904: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var n = l("884691"),
                a = l("448993");

            function s(e, t) {
                let [l, s] = n.useState(!1), [r, i] = n.useState(null), u = async () => {
                    s(!0), i(null);
                    try {
                        let t = await e();
                        return s(!1), i(null), t
                    } catch (l) {
                        let e = new a.APIError(l);
                        return null == t || t(e), i(e), s(!1), null
                    }
                };
                return [u, {
                    loading: l,
                    error: r
                }]
            }
        },
        591205: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                INVITE_OPTIONS_UNLIMITED: function() {
                    return s
                },
                INVITE_OPTIONS_ONCE: function() {
                    return r
                },
                INVITE_OPTIONS_5_TIMES: function() {
                    return i
                },
                INVITE_OPTIONS_10_TIMES: function() {
                    return u
                },
                INVITE_OPTIONS_25_TIMES: function() {
                    return d
                },
                INVITE_OPTIONS_50_TIMES: function() {
                    return o
                },
                INVITE_OPTIONS_100_TIMES: function() {
                    return c
                },
                MAX_USES_OPTIONS: function() {
                    return E
                },
                INVITE_OPTIONS_30_MINUTES: function() {
                    return f
                },
                INVITE_OPTIONS_1_HOUR: function() {
                    return _
                },
                INVITE_OPTIONS_6_HOURS: function() {
                    return I
                },
                INVITE_OPTIONS_12_HOURS: function() {
                    return T
                },
                INVITE_OPTIONS_1_DAY: function() {
                    return N
                },
                INVITE_OPTIONS_7_DAYS: function() {
                    return h
                },
                INVITE_OPTIONS_30_DAYS: function() {
                    return v
                },
                INVITE_OPTIONS_FOREVER: function() {
                    return m
                },
                MAX_AGE_OPTIONS: function() {
                    return S
                }
            });
            var n = l("782340");

            function a(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            let s = a(0, () => n.default.Messages.MAX_USES.format({
                    maxUses: 0
                })),
                r = a(1, () => n.default.Messages.MAX_USES.format({
                    maxUses: 1
                })),
                i = a(5, () => n.default.Messages.MAX_USES.format({
                    maxUses: 5
                })),
                u = a(10, () => n.default.Messages.MAX_USES.format({
                    maxUses: 10
                })),
                d = a(25, () => n.default.Messages.MAX_USES.format({
                    maxUses: 25
                })),
                o = a(50, () => n.default.Messages.MAX_USES.format({
                    maxUses: 50
                })),
                c = a(100, () => n.default.Messages.MAX_USES.format({
                    maxUses: 100
                })),
                E = [s, r, i, u, d, o, c],
                f = a(1800, () => n.default.Messages.DURATION_MINUTES.format({
                    minutes: 30
                })),
                _ = a(3600, () => n.default.Messages.DURATION_HOURS.format({
                    hours: 1
                })),
                I = a(21600, () => n.default.Messages.DURATION_HOURS.format({
                    hours: 6
                })),
                T = a(43200, () => n.default.Messages.DURATION_HOURS.format({
                    hours: 12
                })),
                N = a(86400, () => n.default.Messages.DURATION_DAYS.format({
                    days: 1
                })),
                h = a(604800, () => n.default.Messages.DURATION_DAYS.format({
                    days: 7
                })),
                v = a(2592e3, () => n.default.Messages.DURATION_DAYS.format({
                    days: 30
                })),
                m = a(0, () => n.default.Messages.MAX_AGE_NEVER),
                S = [f, _, I, T, N, h, v, m]
        }
    }
]);