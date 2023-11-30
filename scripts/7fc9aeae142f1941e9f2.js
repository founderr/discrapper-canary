(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92660"], {
        533662: function(e, t, n) {
            "use strict";
            e.exports = n.p + "71c2b8b8dce7967a6cba.svg"
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("446674"),
                i = n("77078"),
                u = n("102985"),
                d = n("79798"),
                o = n("754474"),
                c = n("158998"),
                E = n("782340"),
                f = n("892802");

            function _(e) {
                if (e.isSystemUser()) return o.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return o.BotTypes.AI;
                if (e.bot) return o.BotTypes.BOT;
                return null
            }
            let I = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: a,
                    botVerified: r,
                    discriminatorClass: u,
                    className: o,
                    usernameClass: c,
                    color: _,
                    botClass: I,
                    showStreamerModeTooltip: T
                } = e;
                return (0, l.jsxs)("div", {
                    className: s(f.info, o),
                    children: [(0, l.jsx)(i.Tooltip, {
                        text: E.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: T,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: s(f.username, c),
                            style: null != _ ? {
                                color: _
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: s(f.infoSpacing, u),
                        children: n
                    }) : void 0, null != a && (0, l.jsx)(d.default, {
                        type: a,
                        className: s(f.infoSpacing, I),
                        verified: r
                    })]
                })
            };
            var T = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: a,
                    forceUsername: s,
                    showAccountIdentifier: i,
                    overrideDiscriminator: d,
                    forcePomelo: E,
                    ...f
                } = e, T = (0, r.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), N = T || t || n.isNonUserBot(), h = n.toString(), v = c.default.getName(n), m = s ? h : null != a ? a : v, S = n.isPomelo() || E;
                if (S || m !== h) {
                    let e = m === h && S && s ? c.default.getUserTag(n, {
                            forcePomelo: E
                        }) : m,
                        t = i && e !== "@".concat(h) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(I, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: _(n),
                        showStreamerModeTooltip: T && e !== v,
                        ...f
                    })
                }
                return (0, l.jsx)(o.default, {
                    name: m,
                    botType: _(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: N || m !== h ? null : null != d ? d : n.discriminator,
                    ...f
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L1.29289 21.2929Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M3.16029 16.0466C3.3363 16.2904 3.68784 16.3122 3.9005 16.0995L4.62043 15.3796C4.79627 15.2037 4.81533 14.9258 4.67247 14.7223C3.99776 13.761 3.52594 12.8385 3.23686 12.1978C3.18003 12.0719 3.17994 11.9283 3.23676 11.8024C3.64531 10.897 4.41889 9.42841 5.61441 8.08307C7.12569 6.38242 9.19073 5 12 5C12.8215 5 13.5794 5.11821 14.2783 5.32803C14.4616 5.38304 14.6618 5.33819 14.7971 5.2029L15.6045 4.39555C15.8507 4.14933 15.7756 3.73364 15.4493 3.61191C14.4209 3.2282 13.2739 3 12 3C4.88713 3 1.72683 10.1146 1.1134 11.6925C1.035 11.8942 1.035 12.1058 1.1134 12.3075C1.35865 12.9383 2.01101 14.4542 3.16029 16.0466Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M8.17973 10.8108C8.04747 11.2362 8.53857 11.4614 8.85355 11.1464L11.1464 8.85355C11.4614 8.53857 11.2362 8.04747 10.8108 8.17973C9.55806 8.56927 8.56927 9.55807 8.17973 10.8108Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M12.8535 15.1464C12.5386 15.4614 12.7638 15.9525 13.1891 15.8203C14.4419 15.4307 15.4307 14.4419 15.8203 13.1892C15.9525 12.7638 15.4614 12.5386 15.1464 12.8536L12.8535 15.1464Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M9.72168 18.672C9.53843 18.617 9.3382 18.6618 9.20291 18.7971L8.39555 19.6045C8.14933 19.8507 8.22444 20.2664 8.55069 20.3881C9.57907 20.7718 10.7261 21 12 21C19.1129 21 22.2732 13.8854 22.8866 12.3075C22.965 12.1058 22.965 11.8942 22.8866 11.6925C22.6413 11.0617 21.989 9.54582 20.8397 7.95346C20.6637 7.70959 20.3122 7.68785 20.0995 7.90051L19.3796 8.62044C19.2037 8.79628 19.1847 9.07417 19.3275 9.27772C20.0022 10.239 20.474 11.1615 20.7631 11.8022C20.82 11.9281 20.82 12.0717 20.7632 12.1976C20.3547 13.103 19.5811 14.5716 18.3856 15.9169C16.8743 17.6176 14.8093 19 12 19C11.1785 19 10.4207 18.8818 9.72168 18.672Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M14.5 8C16.1569 8 17.5 6.65685 17.5 5C17.5 3.34315 16.1569 2 14.5 2C13.3114 2 12.2843 2.69119 11.7986 3.69355C11.5972 4.10932 11.8557 4.56448 12.2419 4.81816C13.3081 5.51868 14.0904 6.61601 14.3786 7.90013C14.3915 7.95754 14.4412 8 14.5 8Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M18.4373 17.2714C18.5906 17.6957 18.9807 18 19.4319 18H20.5C21.3284 18 22 17.3284 22 16.5C22 12.6961 19.1681 9.55362 15.4976 9.06577C14.9501 8.993 14.5104 9.45209 14.4013 9.99348C14.3406 10.2944 14.253 10.5855 14.1409 10.8641C13.9082 11.4429 14.0871 12.1554 14.6125 12.4916C16.3621 13.6108 17.7205 15.2876 18.4373 17.2714Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M12.5 9C12.5 10.6569 11.1569 12 9.5 12C7.84315 12 6.5 10.6569 6.5 9C6.5 7.34315 7.84315 6 9.5 6C11.1569 6 12.5 7.34315 12.5 9Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M2 20.5C2 16.3579 5.35786 13 9.5 13C13.6421 13 17 16.3579 17 20.5C17 21.3284 16.3284 22 15.5 22C15.4055 22 15.3242 21.9334 15.3038 21.841C15.0908 20.8768 14.7383 19.9711 14.42 19.2977C14.3117 19.0685 14 19.149 14 19.4026V21.5C14 21.7761 13.7761 22 13.5 22H5.5C5.22386 22 5 21.7761 5 21.5V19.4026C5 19.149 4.6883 19.0685 4.57996 19.2977C4.26174 19.9711 3.90923 20.8768 3.69619 21.841C3.6758 21.9334 3.59454 22 3.5 22C2.67157 22 2 21.3284 2 20.5Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    })]
                })
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5L22 13.6668C22 13.7905 21.665 13.8413 21.6105 13.7302C21.1088 12.7081 20.203 12 19 12C17.8116 12 16.7847 12.6909 16.2989 13.6929C16.209 13.8783 15.9429 13.9239 15.8193 13.7591L15.35 13.1333C14.55 12.0667 12.95 12.0667 12.15 13.1333L9.92742 16.0968L9.4213 15.4641C8.82082 14.7135 7.67918 14.7135 7.0787 15.4641L5.22482 17.7815C4.83196 18.2726 5.18159 19 5.81047 19L11.5 19C11.7761 19 11.9949 19.2258 12.0423 19.4979C12.2091 20.454 12.8544 21.1807 13.7304 21.6106C13.8415 21.6651 13.7907 22 13.667 22L5 22C3.34315 22 2 20.6569 2 19V5ZM10.2045 5.97731C10.4329 5.06617 9.32431 4.42611 8.64943 5.07947C8.28741 5.42996 7.71259 5.42996 7.35057 5.07947C6.67569 4.42611 5.56708 5.06617 5.79547 5.97731C5.91798 6.46608 5.63058 6.96388 5.14603 7.10216C4.24276 7.35994 4.24276 8.64005 5.14603 8.89784C5.63058 9.03612 5.91798 9.53392 5.79547 10.0227C5.56708 10.9338 6.67569 11.5739 7.35057 10.9205C7.71259 10.57 8.28741 10.57 8.64943 10.9205C9.32431 11.5739 10.4329 10.9338 10.2045 10.0227C10.082 9.53392 10.3694 9.03612 10.854 8.89784C11.7572 8.64005 11.7572 7.35994 10.854 7.10216C10.3694 6.96388 10.082 6.46608 10.2045 5.97731Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M19 14C19.5522 14 20 14.4477 20 15V18H23C23.5522 18 24 18.4477 24 19C24 19.5523 23.5522 20 23 20H20V23C20 23.5523 19.5522 24 19 24C18.4477 24 18 23.5523 18 23L18 20H15C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18L18 18V15C18 14.4477 18.4477 14 19 14Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    })]
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M9.24787 3.34758C7.87224 2.45523 6 3.38448 6 4.95959V19.0404C6 20.6155 7.87224 21.5448 9.24787 20.6524L20.1013 13.612C21.2996 12.8347 21.2996 11.1653 20.1013 10.388L9.24787 3.34758Z",
                        fill: "string" == typeof r ? r : r.css,
                        className: i
                    })
                })
            }
        },
        501030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDirectoryEntryBroadcastInfo: function() {
                    return s
                }
            });
            var l = n("872717"),
                a = n("49111");
            async function s(e, t, n) {
                let s = await l.default.get({
                    url: a.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
                    query: {
                        type: t,
                        entity_id: n
                    }
                });
                return s.body
            }
        },
        960757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("152475"),
                r = n("42203"),
                i = n("501030"),
                u = n("730647"),
                d = n("49111");
            let o = {
                can_broadcast: !1
            };

            function c(e, t, n) {
                let [c, E] = l.useState(o), [f, _] = l.useState(!1), I = l.useRef(!1), T = null == e ? void 0 : e.id, N = null == e ? void 0 : e.hasFeature(d.GuildFeatures.HAS_DIRECTORY_ENTRY);
                l.useEffect(() => {
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
                }, [T, N, t]), l.useEffect(() => {
                    var e;
                    if (!c.can_broadcast) {
                        _(!1);
                        return
                    }
                    _(null === (e = c.has_broadcast) || void 0 === e || e)
                }, [c]);
                let h = (0, a.useStateFromStores)([r.default], () => (0, s.canEveryoneRoleViewEvent)(n, [r.default]));
                return {
                    broadcastInfo: c,
                    broadcastToDirectoryChannels: h && f,
                    setBroadcastToDirectoryChannels: _,
                    canEveryoneRoleViewEvent: h
                }
            }
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
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
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("817963"),
                r = n("923959"),
                i = n("305961"),
                u = n("957255"),
                d = n("49111"),
                o = (e, t) => {
                    let n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, s.useManageResourcePermissions)(n),
                        c = (0, a.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        E = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        f = (0, a.useStateFromStores)([u.default], () => {
                            if (u.default.can(d.Permissions.ADMINISTRATOR, n) || o) return !0;
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
                        }, [E, n, o]);
                    return f
                }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                getEventException: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("398604");

            function s(e, t) {
                let n = (0, l.useStateFromStoresArray)([a.default], () => {
                    var e, n;
                    return null !== (n = null === (e = a.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return i(n, e)
            }

            function r(e, t) {
                var n, l;
                let s = null !== (l = null === (n = a.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return i(s, e)
            }

            function i(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getEventSchedule: function() {
                    return o
                }
            });
            var l = n("627445"),
                a = n.n(l),
                s = n("446674"),
                r = n("398604"),
                i = n("397680"),
                u = n("822516");

            function d(e, t, n) {
                var l;
                let d = null !== (l = (0, s.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                a(null != d, "Event must be defined"), t = null != t ? t : (0, u.getNextRecurrenceIdInEvent)(d);
                let o = (0, i.default)(t, e);
                return c(d, o, t)
            }

            function o(e, t) {
                let n = (0, i.getEventException)(t, e.id);
                return c(e, n, t)
            }

            function c(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let l = (0, u.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: a,
                        endDate: s
                    } = (0, u.getScheduleForRecurrenceWithException)(l, t);
                return {
                    startTime: a.toDate(),
                    endTime: null == s ? void 0 : s.toDate()
                }
            }
        },
        799547: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEventChannelsByType: function() {
                    return r
                },
                useGetEventChannelsByType: function() {
                    return i
                }
            }), n("222007"), n("424973");
            var l = n("446674"),
                a = n("817963");
            n("834052");
            var s = n("923959");

            function r(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                if (null == t) return [];
                let l = n.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
                    r = [];
                for (let {
                        channel: e
                    }
                    of l) {
                    let {
                        canCreateGuildEvent: n,
                        canManageAllEvents: l
                    } = (0, a.getManageResourcePermissions)(e), s = n || l;
                    e.type === t && (e.isGuildVoice() && s ? r.push(e) : e.isGuildStageVoice() && s && r.push(e))
                }
                return r
            }

            function i(e, t) {
                return (0, l.useStateFromStoresArray)([s.default], () => r(e, t, [s.default]), [e, t])
            }
            n("957255"), n("270161")
        },
        776863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return i
                }
            }), n("808653"), n("424973");
            var l = n("446674"),
                a = n("923510"),
                s = n("923959"),
                r = n("957255");

            function i(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, l.useStateFromStoresArray)([s.default, r.default], () => {
                    let e = s.default.getChannels(n)[s.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let n = t.channel;
                        return n.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
                            return !!e.isGuildStageVoice() && t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, r.default) && e.push(n), e) : e
                    }, [])
                }, [n])
            }
        },
        617347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventBodyImageLocation: function() {
                    return a
                },
                default: function() {
                    return G
                }
            });
            var l, a, s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                u = n.n(i),
                d = n("446674"),
                o = n("77078"),
                c = n("812204"),
                E = n("685665"),
                f = n("656038"),
                _ = n("419830"),
                I = n("817963"),
                T = n("957255"),
                N = n("476263"),
                h = n("718550"),
                v = n("398604"),
                m = n("651072"),
                S = n("1339"),
                C = n("613767"),
                g = n("822516"),
                x = n("707916"),
                p = n("255050"),
                A = n("400271"),
                O = n("427554"),
                R = n("644189"),
                L = n("29913"),
                M = n("745049"),
                D = n("49111"),
                y = n("782340"),
                V = n("955614");

            function j(e) {
                let {
                    channel: t,
                    onClick: n
                } = e, {
                    canManageAllEvents: l
                } = (0, I.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([T.default], () => !t.isGuildVocal() || T.default.can(D.Permissions.CONNECT, t), [t]), i = r.useMemo(() => (0, f.default)(t), [t]), c = (0, _.getChannelIconComponent)(t);
                return (0, s.jsx)(o.Tooltip, {
                    text: y.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !a && null != n,
                    children: e => (0, s.jsxs)(o.Clickable, {
                        ...e,
                        className: u(V.inline, V.channelContainer, {
                            [V.channelContainerEnabled]: a && null != n,
                            [V.channelContainerDisabled]: !a && null != n
                        }),
                        onClick: n,
                        children: [(0, s.jsx)(o.Tooltip, {
                            text: y.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: l && i && a && null != n,
                            children: e => null != c ? (0, s.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: V.icon
                            }) : null
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: V.channelLocation,
                            children: t.name
                        })]
                    })
                })
            }

            function U(e) {
                let {
                    guild: t,
                    channel: n,
                    onJoinClick: l,
                    handleLocationClick: a,
                    location: r,
                    isExternal: i,
                    isHub: d
                } = e;
                if (d) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
                    className: V.inline,
                    children: [(0, s.jsx)(N.default, {
                        className: V.guildIcon,
                        size: N.default.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, s.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                });
                return null != n ? (0, s.jsx)(j, {
                    channel: n,
                    onClick: l
                }) : (0, s.jsxs)(o.Clickable, {
                    className: V.inline,
                    onClick: a,
                    children: [(0, s.jsx)(h.default, {
                        height: 20,
                        width: 20,
                        className: u(V.channelContainer, V.icon)
                    }), (0, s.jsx)(o.Text, {
                        className: i ? V.externalLocation : V.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, S.guildEventDetailsParser)(r, !0)
                    })]
                })
            }

            function G(e) {
                var t;
                let {
                    className: n,
                    guild: l,
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
                    speakers: j,
                    speakerCount: G,
                    rsvped: P,
                    canInvite: H,
                    location: B,
                    truncate: b,
                    onContextMenu: w,
                    onJoinClick: F,
                    onJoinGuildClick: k,
                    onGoToGuildClick: Y,
                    onRsvpClick: z,
                    onStartClick: X,
                    onInviteClick: Z,
                    onEndClick: W,
                    onClick: q,
                    isNew: K,
                    guildEventId: J,
                    eventPreview: Q,
                    recurrenceRule: $,
                    recurrenceId: ee
                } = e, et = (0, C.isChannelPublic)(a, f), en = f === M.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: el
                } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: ea
                } = m.default.useExperiment({
                    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
                    location: el[0]
                }, {
                    autoTrackExposure: !1
                }), es = (0, d.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(J)), er = [];
                if (null != $ && null != es) {
                    let e = (0, g.getRRule)($);
                    er = (0, g.generateNextRecurrences)(4, e, new Date(es.scheduled_start_time))
                }
                let ei = ea && er.length > 0;
                return (0, s.jsxs)(o.ClickableContainer, {
                    "aria-label": i,
                    onClick: () => null == q ? void 0 : q(ee),
                    onContextMenu: w,
                    className: u(V.card, {
                        [V.joined]: S,
                        [V.lurking]: h
                    }, n),
                    children: [(0, s.jsxs)("div", {
                        className: u(V.padding, {
                            [V.isRecurring]: ei
                        }),
                        children: [0 === I && (0, s.jsx)(p.default, {
                            source: T
                        }), (0, s.jsx)(A.default, {
                            creator: r,
                            name: i,
                            description: _,
                            imageSource: 1 === I ? T : null,
                            truncate: b,
                            guildId: null == l ? void 0 : l.id,
                            isHub: y,
                            isNew: K,
                            guildEventId: J,
                            eventPreview: Q,
                            recurrenceId: ee
                        }), N && null != l && null != j && G > 0 && (0, s.jsx)(L.default, {
                            guild: l,
                            speakers: j,
                            speakerCount: G,
                            className: V.spacing
                        }), (0, s.jsx)("hr", {
                            className: V.divider
                        }), (0, s.jsxs)("div", {
                            className: u(V.inline, V.footer),
                            children: [(0, s.jsx)(U, {
                                guild: l,
                                channel: a,
                                onJoinClick: F,
                                handleLocationClick: en ? e => e.stopPropagation() : void 0,
                                location: B,
                                isExternal: en,
                                isHub: y
                            }), y ? (0, s.jsx)(R.default, {
                                isActive: N,
                                isUserLurking: h,
                                isMember: D,
                                rsvped: P,
                                onRsvpClick: z,
                                onJoinGuildClick: k,
                                onGoToGuildClick: Y,
                                guildName: null == l ? void 0 : l.name,
                                canInvite: H,
                                isChannelPublic: et,
                                onInviteClick: Z
                            }) : (0, s.jsx)(x.default, {
                                entityType: f,
                                isJoined: S,
                                isActive: N,
                                isUserLurking: h,
                                rsvped: P,
                                canInvite: H,
                                isChannelPublic: et,
                                onContextMenu: w,
                                onJoinClick: F,
                                onRsvpClick: z,
                                onStartClick: X,
                                onInviteClick: Z,
                                onEndClick: W
                            })]
                        }), ei && (0, s.jsx)("hr", {
                            className: V.divider
                        })]
                    }), ei && (0, s.jsx)(O.default, {
                        guildId: null == l ? void 0 : l.id,
                        recurrenceRule: $,
                        guildEventId: J,
                        onRecurrenceClick: q
                    })]
                })
            }(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"
        },
        844808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                r = n("20606"),
                i = n("956089"),
                u = n("822516"),
                d = n("757767"),
                o = n("782340"),
                c = n("572721");
            let E = new Set([0, 6]);

            function f(e) {
                let {
                    startDate: t,
                    recurrenceRule: n,
                    onRecurrenceChange: f
                } = e, _ = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, n), [n, t]), I = function(e) {
                    let t = e.toDate(),
                        n = t.toLocaleString(o.default.getLocale(), {
                            weekday: "long"
                        }),
                        l = [{
                            value: d.RecurrenceOptions.NONE,
                            label: o.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: d.RecurrenceOptions.WEEKLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
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
                    return !E.has(t.getDay()) && l.push({
                        value: d.RecurrenceOptions.WEEKDAY_ONLY,
                        label: o.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), l
                }(t), T = e => e.toString(), N = (0, l.jsxs)("div", {
                    className: c.title,
                    children: [o.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, l.jsx)(i.TextBadge, {
                        text: o.default.Messages.NEW,
                        color: r.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, l.jsx)(s.FormItem, {
                    title: N,
                    required: !0,
                    children: (0, l.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: I,
                        select: f,
                        serialize: T,
                        isSelected: e => null != _ && T(e) === T(_)
                    })
                })
            }
        },
        953143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                r = n("77078"),
                i = n("812204"),
                u = n("685665"),
                d = n("381546"),
                o = n("351825"),
                c = n("651072"),
                E = n("822516"),
                f = n("844808"),
                _ = n("782340"),
                I = n("234865");

            function T(e) {
                let {
                    className: t,
                    guildId: n,
                    onScheduleChange: a,
                    onRecurrenceChange: T,
                    onTimeChange: N,
                    timeSelected: h = !0,
                    schedule: v,
                    recurrenceRule: m,
                    showEndDate: S = !1,
                    requireEndDate: C = !1,
                    disableStartDateTime: g = !1
                } = e, {
                    analyticsLocations: x
                } = (0, u.default)(i.default.EVENT_SETTINGS), {
                    enabled: p
                } = c.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: x[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == v) return null;
                let A = null,
                    O = v.startDate,
                    R = s(),
                    L = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    M = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
                null != m && (L.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), M.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
                let D = e => {
                    a({
                        ...v,
                        endDate: e
                    })
                };
                return null != O && c.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: x[0]
                }), S && (A = null != v.endDate || C ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, l.jsx)(r.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: C,
                            children: (0, l.jsx)(r.DateInput, {
                                value: v.endDate,
                                onSelect: D,
                                minDate: v.startDate,
                                maxDate: M
                            })
                        }), (0, l.jsx)(r.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: C,
                            children: (0, l.jsx)(r.TimeInput, {
                                value: v.endDate,
                                onChange: D
                            })
                        })]
                    }), C ? null : (0, l.jsx)(r.Button, {
                        onClick: () => {
                            D(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, l.jsxs)("div", {
                            className: I.link,
                            children: [(0, l.jsx)(d.default, {
                                width: 17,
                                height: 17,
                                className: I.removeIcon
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: _.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, l.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        D(s(v.startDate).add(1, "hour"))
                    },
                    children: (0, l.jsxs)("div", {
                        className: I.link,
                        children: [(0, l.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: I.addIcon
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: _.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, l.jsxs)("div", {
                    className: t,
                    children: [(0, l.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, l.jsx)(r.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, l.jsx)(r.DateInput, {
                                value: v.startDate,
                                onSelect: e => {
                                    a({
                                        ...v,
                                        startDate: e
                                    })
                                },
                                minDate: R,
                                maxDate: L,
                                disabled: g
                            })
                        }), (0, l.jsx)(r.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, l.jsx)(r.TimeInput, {
                                value: v.startDate,
                                onChange: e => {
                                    e.isValid() && (null == N || N(!0), a({
                                        ...v,
                                        startDate: e
                                    }))
                                },
                                hideValue: !h,
                                disabled: g
                            })
                        })]
                    }), A, p && null != O && null != T && (0, l.jsx)(f.default, {
                        onRecurrenceChange: T,
                        startDate: O,
                        recurrenceRule: m
                    })]
                })
            }
        },
        194250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("866227"),
                u = n.n(i),
                d = n("77078"),
                o = n("656913"),
                c = n("694187"),
                E = n("151642"),
                f = n("29846"),
                _ = n("777367"),
                I = n("398604"),
                T = n("189443"),
                N = n("822516"),
                h = n("93550"),
                v = n("953143"),
                m = n("745049"),
                S = n("75015"),
                C = n("837979"),
                g = n("782340"),
                x = n("505376");

            function p(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: n,
                    broadcastToDirectoryChannels: a,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: r
                } = t;
                return n.can_broadcast ? (0, l.jsxs)(d.FormItem, {
                    title: g.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: x.formItem,
                    children: [(0, l.jsx)(d.Tooltip, {
                        text: (0, l.jsx)(d.Text, {
                            className: x.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: g.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": g.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !r,
                        children: e => (0, l.jsx)("div", {
                            ...e,
                            children: (0, l.jsx)(d.Checkbox, {
                                type: d.Checkbox.Types.INVERTED,
                                disabled: !r,
                                value: a,
                                onChange: (e, t) => s(t),
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-active",
                                    children: g.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, l.jsx)(d.Text, {
                        className: x.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: g.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function A(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: i,
                    editBroadcastInfoData: A,
                    error: O,
                    validationErrorMessage: R,
                    onChange: L,
                    canSetFocus: M = !1
                } = e, {
                    entityType: D,
                    channelId: y,
                    description: V,
                    name: j,
                    image: U,
                    scheduledEndTime: G,
                    scheduledStartTime: P,
                    autoStart: H,
                    recurrenceRule: B
                } = t, {
                    canUseEventsAutoStartToggle: b
                } = _.default.useExperiment({
                    location: "Guild Events Modal",
                    guildId: null != i ? i : ""
                }), w = (0, E.useStageBlockedUsersCount)(y), F = null != t && (0, I.isGuildScheduledEventActive)(t), k = a.useMemo(() => {
                    let e = (0, N.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: u(P)
                    }
                }, [t, P]), [Y, z] = a.useState(null), X = a.useRef(null);
                a.useEffect(() => {
                    if (M) {
                        var e;
                        null === (e = X.current) || void 0 === e || e.focus()
                    }
                }, [M]);
                let Z = e => {
                        L({
                            image: e
                        })
                    },
                    W = (e, t) => {
                        if (null == e || void 0 === t) {
                            Z(null);
                            return
                        }(0, d.openModalLazy)(async () => {
                            let {
                                default: a
                            } = await n.el("57015").then(n.bind(n, "57015"));
                            return n => (0, l.jsx)(a, {
                                imgURI: e,
                                file: t,
                                onCrop: Z,
                                uploadType: S.UploadTypes.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0,
                                ...n
                            })
                        })
                    };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: x.blockedUsersContainer,
                        children: null != y && !F && w > 0 && (0, l.jsx)(f.BlockedUsersNotice, {
                            channelId: y
                        })
                    }), (0, l.jsxs)("div", {
                        className: x.form,
                        children: [(0, l.jsxs)(d.FormItem, {
                            title: g.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: x.topicFormItem,
                            required: !0,
                            children: [(0, l.jsx)(d.TextInput, {
                                className: x.textInput,
                                onChange: e => {
                                    L({
                                        name: e
                                    })
                                },
                                placeholder: g.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: C.MAX_STAGE_TOPIC_LENGTH,
                                value: j,
                                autoComplete: "off",
                                inputRef: X
                            }), null != O ? (0, l.jsx)(d.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: x.warning,
                                children: O.getAnyErrorMessage()
                            }) : null]
                        }), (0, l.jsx)(v.default, {
                            className: x.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: n
                                } = e, l = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                                null != t && null != G && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != Y && (l.recurrenceRule = (0, N.recurrenceOptionToRecurrenceRule)(Y, t)), L(l)
                            },
                            onRecurrenceChange: e => {
                                let t = k.startDate;
                                if (null == t) return;
                                let n = (0, N.recurrenceOptionToRecurrenceRule)(e, t);
                                L({
                                    recurrenceRule: n
                                }), z(e)
                            },
                            schedule: k,
                            recurrenceRule: B,
                            showEndDate: D === m.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: D === m.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: F,
                            guildId: i
                        }), null != R ? (0, l.jsx)(d.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: x.warning,
                            children: R
                        }) : null, b ? (0, l.jsx)(d.FormItem, {
                            className: r(x.formItem, x.autoStartToggle),
                            children: (0, l.jsx)(d.Checkbox, {
                                type: d.Checkbox.Types.INVERTED,
                                value: H,
                                onChange: (e, t) => {
                                    L({
                                        autoStart: t
                                    })
                                },
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: g.default.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, l.jsx)(d.FormItem, {
                            title: g.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: x.formItem,
                            children: (0, l.jsx)(d.TextArea, {
                                className: x.descriptionInput,
                                placeholder: g.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: V,
                                onChange: e => {
                                    L({
                                        description: e
                                    })
                                },
                                maxLength: m.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, l.jsxs)(d.FormItem, {
                            title: g.default.Messages.GUILD_EVENT_IMAGE,
                            className: x.formItem,
                            children: [(0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: x.addImageHint,
                                children: g.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != U ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.default, {
                                    className: x.imagePreview,
                                    iconWrapperClassName: x.imagePreviewInner,
                                    image: U,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != i) {
                                            var n;
                                            return null !== (n = (0, h.default)((0, T.convertToFakeGuildEvent)(t, i, s))) && void 0 !== n ? n : null
                                        }
                                    },
                                    onChange: W,
                                    hint: g.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, l.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    onClick: () => Z(null),
                                    children: g.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, l.jsxs)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                children: [g.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(c.default, {
                                    onChange: W
                                })]
                            })]
                        }), (0, l.jsx)(p, {
                            editBroadcastInfoData: A
                        })]
                    })]
                })
            }
        },
        590942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var l, a, s = n("37983"),
                r = n("884691"),
                i = n("917351"),
                u = n("446674"),
                d = n("77078"),
                o = n("970728"),
                c = n("206230"),
                E = n("526887"),
                f = n("960757"),
                _ = n("923959"),
                I = n("305961"),
                T = n("683911"),
                N = n("476765"),
                h = n("354023"),
                v = n("686904"),
                m = n("398604"),
                S = n("322224"),
                C = n("152475"),
                g = n("799547"),
                x = n("189443"),
                p = n("841363"),
                A = n("558286"),
                O = n("560309"),
                R = n("151859"),
                L = n("299342"),
                M = n("499950"),
                D = n("27754"),
                y = n("745049"),
                V = n("49111"),
                j = n("782340"),
                U = n("738021");
            let {
                INVITE_OPTIONS_7_DAYS: G,
                INVITE_OPTIONS_UNLIMITED: P
            } = h.default;

            function H(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: n
                } = r.useContext(E.ConfettiCannonContext);
                return r.useEffect(() => {
                    let e = null == t ? void 0 : t.getScrollerNode();
                    if (null == e) return;
                    let l = e.getBoundingClientRect();
                    n({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: l.left - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.left + 100,
                                y: l.top + 100
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
                    }, 80), n({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: l.right - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.right + 100,
                                y: l.top + 100
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
                }, [n, t]), null
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    guildEventId: a,
                    editBroadcastInfoData: o,
                    isEdit: E,
                    formErrors: f,
                    transitionState: _,
                    loading: I,
                    error: h,
                    onChange: v,
                    onSave: S,
                    onClose: C,
                    createdEvent: g
                } = e, x = (0, N.useUID)(), p = r.useRef(n), D = !(0, i.isEqual)(p.current, n), y = r.useMemo(() => [{
                    slideId: 0,
                    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == f.entity,
                    userErrorMessage: f.entity
                }, {
                    slideId: 1,
                    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == f.schedule && null == f.topic && (!E || D),
                    userErrorMessage: f.schedule
                }, {
                    slideId: 2,
                    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [f, E, D]), V = Object.keys(l).length, G = (0, m.isGuildScheduledEventActive)(n), P = e => Math.max(0, Math.min(e, V - 1)), [B, b] = r.useState(G ? 1 : 0), [w, F] = r.useState(!1), k = r.useMemo(() => y.slice(0, B + 1).map(e => e.valid).every(Boolean), [y, B]), Y = B >= y.length ? 3 : y[P(B)].slideId, z = 3 === Y, X = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                X(z);
                let Z = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
                    W = r.useRef(null),
                    q = e => {
                        F(!1), b(P(e))
                    };
                r.useEffect(() => {
                    null != g && q(3)
                }, [null == g ? void 0 : g.id, q]);
                let K = () => {
                        if (!k) return;
                        let e = 2 === Y;
                        e ? S() : z ? C() : q(B + 1)
                    },
                    J = () => {
                        q(B - 1)
                    },
                    Q = j.default.Messages.NEXT;
                return 2 === Y && (Q = E ? j.default.Messages.SAVE_EVENT : j.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d.ModalRoot, {
                        transitionState: _,
                        "aria-labelledby": x,
                        size: d.ModalSize.DYNAMIC,
                        children: [!Z && z ? (0, s.jsx)(H, {
                            modal: W.current
                        }) : null, (0, s.jsxs)(d.ModalContent, {
                            className: U.content,
                            scrollerRef: W,
                            children: [!z && (0, s.jsx)(T.default, {
                                steps: y.map(e => e.label),
                                stepIndex: B,
                                onClick: e => {
                                    e < B ? J() : e > B && K()
                                }
                            }), (0, s.jsxs)(d.Slides, {
                                activeSlide: Y,
                                width: 440,
                                onSlideReady: e => {
                                    F(e === Y)
                                },
                                children: [(0, s.jsx)(d.Slide, {
                                    id: 0,
                                    children: (0, s.jsx)(O.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: f.entity,
                                        isSlideReady: w,
                                        onChange: v
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 1,
                                    children: (0, s.jsx)(L.default, {
                                        guildEvent: n,
                                        guildEventId: a,
                                        guildId: t,
                                        editBroadcastInfoData: o,
                                        onChange: v,
                                        error: h,
                                        validationErrorMessage: f.schedule,
                                        isSlideReady: w
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 2,
                                    children: (0, s.jsx)(R.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: a,
                                        error: h
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 3,
                                    children: (0, s.jsx)(M.default, {
                                        onClose: C,
                                        event: g
                                    })
                                })]
                            })]
                        }), !z && (0, s.jsxs)(d.ModalFooter, {
                            className: U.footer,
                            children: [(0, s.jsxs)("div", {
                                className: U.inline,
                                children: [(0, s.jsx)(d.Button, {
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: C,
                                    children: j.default.Messages.CANCEL
                                }), (0, s.jsx)(d.Button, {
                                    onClick: K,
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
                                children: j.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: l,
                    transitionState: a,
                    onClose: i
                } = e, c = (0, u.useStateFromStores)([I.default], () => I.default.getGuild(t)), E = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(l), [l]), T = (0, u.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t), [t]), N = (0, x.getInitialGuildEventData)(c, E, T), [h, A] = r.useState(N), [O] = r.useState((0, x.isEditingEvent)(E)), [R, L] = r.useState(null), M = e => {
                    var t;
                    let n = (0, C.isGuildEventInvitable)(e),
                        l = null !== (t = e.channel_id) && void 0 !== t ? t : null == T ? void 0 : T.id;
                    null != l && o.default.createInvite(l, {
                        max_age: G.value,
                        max_uses: P.value
                    }, V.InstantInviteSources.GUILD_EVENTS), n ? L(e) : i()
                }, U = (0, f.default)(c, null == E ? void 0 : E.id, h), [H, {
                    loading: b,
                    error: w
                }] = (0, v.default)(async () => {
                    if (null != R) return;
                    let e = {
                        broadcastToDirectoryChannels: U.broadcastToDirectoryChannels
                    };
                    if (O && null != l) return await S.default.saveEvent(l, h, t, e), i();
                    let n = await S.default.createGuildEvent(h, t, e);
                    return M(n.body), n
                }), F = r.useMemo(() => (0, D.default)(h, O), [h, O]);
                return (0, s.jsx)(B, {
                    guildId: t,
                    guildEvent: h,
                    guildEventId: l,
                    editBroadcastInfoData: U,
                    isEdit: O,
                    formErrors: F,
                    transitionState: a,
                    loading: b,
                    error: w,
                    onChange: e => {
                        if (null != e.entityType) {
                            var n;
                            let l = (0, p.getChannelTypeFromEntity)(e.entityType),
                                [a] = (0, g.getEventChannelsByType)(t, l);
                            e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== y.GuildScheduledEventEntityTypes.EXTERNAL && h.entityType === y.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        A(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        let e = (null == E ? void 0 : E.scheduled_start_time) !== h.scheduledStartTime || E.scheduled_end_time !== h.scheduledEndTime;
                        null != h.recurrenceRule && O && e ? (0, d.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await n.el("77078").then(n.bind(n, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: j.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: j.default.Messages.SAVE_EVENT,
                                cancelText: j.default.Messages.NEVERMIND,
                                onConfirm: H,
                                children: [(0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: j.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: j.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : H()
                    },
                    onClose: i,
                    createdEvent: R
                })
            }(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"
        },
        560309: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("866227"),
                r = n.n(s),
                i = n("446674"),
                u = n("77078"),
                d = n("679653"),
                o = n("42203"),
                c = n("305961"),
                E = n("957255"),
                f = n("27618"),
                _ = n("697218"),
                I = n("718550"),
                T = n("368121"),
                N = n("944633"),
                h = n("228427"),
                v = n("697468"),
                m = n("398604"),
                S = n("334683"),
                C = n("799547"),
                g = n("776863"),
                x = n("613767"),
                p = n("841363"),
                A = n("306939"),
                O = n("745049"),
                R = n("49111"),
                L = n("782340"),
                M = n("869785");
            let D = e => e === O.GuildScheduledEventEntityTypes.EXTERNAL,
                y = (e, t) => {
                    let n = o.default.getChannel(e);
                    if (null == n) return null;
                    let a = n.type === R.ChannelTypes.GUILD_STAGE_VOICE,
                        s = (0, x.isChannelPublic)(n, t),
                        r = s ? T.default : N.default,
                        i = s ? h.default : v.default;
                    return (0, l.jsx)(a ? i : r, {
                        height: 24,
                        className: M.channelOptionIcon
                    })
                },
                V = e => {
                    let {
                        guildId: t,
                        channelType: n,
                        channel: a,
                        onSelectChannel: s,
                        disabled: r,
                        entityType: i
                    } = e, o = n === R.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, i), E = (0, C.useGetEventChannelsByType)(t, n);
                    return (0, l.jsxs)(u.FormItem, {
                        title: o ? L.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : L.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: M.options,
                        disabled: r,
                        required: !0,
                        children: [(0, l.jsx)(u.SearchableSelect, {
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
                        }), !c && (0, l.jsx)(u.Text, {
                            color: "header-secondary",
                            className: M.channelPrivate,
                            variant: "text-sm/normal",
                            children: L.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function j(e, t, n, l) {
                return t ? {
                    disabled: !0,
                    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : n ? 0 === l && e !== O.GuildScheduledEventEntityTypes.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
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
                    var n;
                    e({
                        channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null
                    })
                },
                P = (e, t) => n => {
                    let {
                        value: l
                    } = n, a = {
                        entityType: l,
                        scheduledEndTime: void 0
                    };
                    if (D(l)) {
                        var s;
                        let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
                        a.scheduledEndTime = e.toISOString()
                    }
                    e(a)
                };

            function H(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s,
                    isFocusReady: r
                } = e, {
                    entityType: d,
                    channelId: c
                } = n, E = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), f = a.useRef(null);
                a.useEffect(() => {
                    if (r && D(d)) {
                        var e;
                        null === (e = f.current) || void 0 === e || e.focus()
                    }
                }, [r, d]);
                let _ = U(s),
                    I = G(s),
                    T = (0, p.getLocationFromEventData)(n),
                    N = (0, p.getChannelTypeFromEntity)(d),
                    h = (0, m.isGuildScheduledEventActive)(n);
                return null == d || d === O.GuildScheduledEventEntityTypes.NONE ? null : D(d) ? (0, l.jsx)(u.FormItem, {
                    title: L.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: M.options,
                    required: !0,
                    children: (0, l.jsx)(u.TextInput, {
                        className: M.textInput,
                        onChange: _,
                        placeholder: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: O.MAX_EVENT_LOCATION_LENGTH,
                        value: null != T ? T : "",
                        inputRef: f
                    })
                }) : null == N ? null : (0, l.jsx)(V, {
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
                    guildEvent: n,
                    onChange: s
                } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), d = (0, S.default)(t, void 0), o = (0, S.default)(t, R.ChannelTypes.GUILD_VOICE), E = (0, S.default)(t, R.ChannelTypes.GUILD_STAGE_VOICE), f = (0, C.useGetEventChannelsByType)(t, R.ChannelTypes.GUILD_VOICE), _ = (0, g.useChannelsUserCanStartStageIn)(r), N = null == r ? void 0 : r.hasFeature(R.GuildFeatures.COMMUNITY), v = (0, m.isGuildScheduledEventActive)(n), x = P(s, n), p = a.useMemo(() => {
                    let e = [{
                        name: L.default.Messages.VOICE_CHANNEL,
                        value: O.GuildScheduledEventEntityTypes.VOICE,
                        desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                        icon: T.default,
                        ...j(O.GuildScheduledEventEntityTypes.VOICE, v, o, f.length)
                    }, {
                        name: L.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                        value: O.GuildScheduledEventEntityTypes.EXTERNAL,
                        desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                        icon: I.default,
                        ...j(O.GuildScheduledEventEntityTypes.EXTERNAL, v, d, 0)
                    }];
                    return N ? [{
                        name: L.default.Messages.STAGE_CHANNEL,
                        value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                        desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                        icon: h.default,
                        ...j(O.GuildScheduledEventEntityTypes.STAGE_INSTANCE, v, E, _.length)
                    }, ...e] : e
                }, [d, o, E, N, f.length, _.length, v]);
                return (0, l.jsx)(u.RadioGroup, {
                    value: n.entityType,
                    options: p,
                    onChange: x,
                    className: M.options
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
                } = a, f = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), _ = (0, g.useChannelsUserCanStartStageIn)(f), I = (0, i.useStateFromStores)([E.default], () => E.default.can(R.Permissions.MANAGE_CHANNELS, f)), T = null == f ? void 0 : f.hasFeature(R.GuildFeatures.COMMUNITY), N = P(r, a), h = T && !D(o) && 0 === _.length && I && null != o;
                return (0, l.jsxs)("div", {
                    className: M.container,
                    children: [(0, l.jsx)(u.Heading, {
                        variant: "heading-xl/semibold",
                        className: M.header,
                        children: L.default.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        className: M.text,
                        variant: "text-sm/normal",
                        children: L.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, l.jsx)(B, {
                        guildId: t,
                        guildEvent: a,
                        onChange: r
                    }), (0, l.jsx)(H, {
                        guildId: t,
                        guildEvent: a,
                        isFocusReady: d,
                        onChange: r
                    }), h ? (0, l.jsx)(A.default, {
                        onClick: () => {
                            N({
                                value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                                name: L.default.Messages.STAGE_CHANNEL
                            }), (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("581354").then(n.bind(n, "581354"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    channelType: R.ChannelTypes.GUILD_STAGE_VOICE,
                                    guildId: t
                                })
                            })
                        }
                    }) : null]
                })
            }
        },
        151859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                r = n("77078"),
                i = n("419830"),
                u = n("267567"),
                d = n("42203"),
                o = n("305961"),
                c = n("697218"),
                E = n("718550"),
                f = n("189443"),
                _ = n("841363"),
                I = n("93550"),
                T = n("617347"),
                N = n("745049"),
                h = n("782340"),
                v = n("151990");

            function m(e) {
                var t, n, m;
                let {
                    guildId: S,
                    guildEvent: C,
                    guildEventId: g,
                    error: x
                } = e, p = a.useMemo(() => (0, f.convertToFakeGuildEvent)(C, S), [C, S]), {
                    channel_id: A,
                    name: O,
                    image: R,
                    description: L
                } = p, M = (0, s.useStateFromStores)([d.default], () => d.default.getChannel(A), [A]), D = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(S), [S]), y = (0, _.getLocationFromEvent)(p), V = (0, s.useStateFromStores)([c.default], () => null != C.creatorId ? c.default.getUser(C.creatorId) : c.default.getCurrentUser(), [C.creatorId]), j = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(S), [S]), U = (0, i.getChannelIconComponent)(M, D);
                return (0, l.jsxs)("div", {
                    className: v.content,
                    children: [(0, l.jsx)(T.default, {
                        className: v.previewCard,
                        guild: D,
                        channel: M,
                        location: null != y ? y : void 0,
                        creator: V,
                        name: O,
                        description: L,
                        imageSource: (n = (0, f.convertToFakeGuildEvent)(C, S, g), null == (m = R) && null == n.image ? null : null != m && /^data:/.test(m) ? m : (0, I.default)(n)),
                        isActive: !1,
                        isUserLurking: j,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: N.FAKE_EVENT_ID,
                        eventPreview: p
                    }), (0, l.jsxs)("div", {
                        className: v.textContainer,
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            children: h.default.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, l.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: v.subheader,
                            children: null != location ? h.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : h.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "",
                                channelHook: () => {
                                    var e;
                                    return (0, l.jsxs)("div", {
                                        className: v.channelName,
                                        children: [null != U ? (0, l.jsx)(U, {
                                            width: 20,
                                            height: 20,
                                            className: v.icon
                                        }) : (0, l.jsx)(E.default, {
                                            height: 18,
                                            width: 18,
                                            className: v.locationIcon
                                        }), null !== (e = null == M ? void 0 : M.name) && void 0 !== e ? e : y]
                                    })
                                }
                            })
                        }), null != x && (0, l.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: v.subheader,
                            children: x.getAnyErrorMessage()
                        })]
                    })]
                })
            }
        },
        299342: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("194250"),
                r = n("782340"),
                i = n("11644");

            function u(e) {
                let {
                    isSlideReady: t,
                    ...n
                } = e;
                return (0, l.jsxs)("div", {
                    className: i.slideContainer,
                    children: [(0, l.jsxs)("div", {
                        className: i.header,
                        children: [(0, l.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: r.default.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            className: i.text,
                            variant: "text-sm/normal",
                            children: r.default.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, l.jsx)(s.default, {
                        ...n,
                        canSetFocus: t
                    })]
                })
            }
        },
        499950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                r = n("9294"),
                i = n("512027"),
                u = n("52393"),
                d = n("652453"),
                o = n("119184"),
                c = n("923959"),
                E = n("305961"),
                f = n("330154"),
                _ = n("943232"),
                I = n("945330"),
                T = n("599110"),
                N = n("306160"),
                h = n("354023"),
                v = n("841363"),
                m = n("49111"),
                S = n("782340"),
                C = n("131439");
            let {
                INVITE_OPTIONS_7_DAYS: g,
                INVITE_OPTIONS_UNLIMITED: x
            } = h.default;

            function p(e) {
                var t, n, p;
                let {
                    onClose: A,
                    event: O
                } = e, R = null == O ? void 0 : O.guild_id, L = (0, a.useStateFromStores)([c.default], () => {
                    var e;
                    return null != R ? null === (e = c.default.getDefaultChannel(R)) || void 0 === e ? void 0 : e.id : null
                }, [R]), M = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(R), [R]), D = (null == M ? void 0 : M.vanityURLCode) != null && (null == M ? void 0 : M.vanityURLCode.length) > 0, {
                    enabled: y
                } = i.default.useExperiment({
                    guildId: null != R ? R : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: D
                }), {
                    channel_id: V,
                    id: j
                } = null != O ? O : {}, U = (0, a.useStateFromStores)([f.default], () => {
                    let e = null != V ? V : L;
                    return null == e ? null : f.default.getInvite(e)
                }, [V, L]);
                if (null == O) return A(), null;
                let G = y && null !== (t = null == M ? void 0 : M.vanityURLCode) && void 0 !== t ? t : null == U ? void 0 : U.code,
                    P = null != G ? (0, r.generateInviteKeyFromExtraData)({
                        baseCode: G,
                        guildScheduledEventId: j
                    }) : null,
                    H = null == P || null == U,
                    B = (0, u.default)(null != P ? P : ""),
                    b = null !== (n = null == U ? void 0 : U.maxAge) && void 0 !== n ? n : g.value,
                    w = null !== (p = null == U ? void 0 : U.maxUses) && void 0 !== p ? p : x.value;
                return (0, l.jsxs)("div", {
                    className: C.container,
                    children: [(0, l.jsx)(s.Clickable, {
                        onClick: A,
                        className: C.close,
                        "aria-label": S.default.Messages.CLOSE,
                        children: (0, l.jsx)(I.default, {})
                    }), (0, l.jsx)(o.default, {
                        children: (0, l.jsx)("div", {
                            className: C.iconContainer,
                            children: (0, l.jsx)(_.default, {
                                height: 30,
                                width: 30,
                                className: C.icon
                            })
                        })
                    }), (0, l.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: C.header,
                        children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: C.body,
                        children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, l.jsxs)("div", {
                        className: C.invite,
                        children: [(0, l.jsx)(d.RawInviteCopyInputConnected, {
                            value: B,
                            autoFocus: !1,
                            onCopy: e => {
                                if (H) return;
                                (0, N.copy)(e);
                                let t = (0, v.getChannelTypeFromEntity)(O.entity_type);
                                T.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: O.guild_id,
                                    channel: V,
                                    channel_type: t,
                                    location: m.InstantInviteSources.GUILD_EVENTS,
                                    code: U.code,
                                    guild_scheduled_event_id: null == O ? void 0 : O.id
                                })
                            }
                        }), (null == M ? void 0 : M.vanityURLCode) == null && (0, l.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: C.inviteDetail,
                            children: (0, h.maxAgeString)(b, w)
                        })]
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                i = n("849467"),
                u = n("782340"),
                d = n("130221");

            function o(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: a,
                    className: o
                } = e, c = n.slice(0, 5), E = c.map(e => {
                    var n, a;
                    return (0, l.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, l.jsx)(r.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: r.AvatarSizes.SIZE_20,
                            className: d.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: d.textInGridContainer,
                            children: (0, l.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: d.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), f = a - c.length;
                return (0, l.jsxs)("div", {
                    className: s(d.grid, o),
                    children: [E, f > 0 && (0, l.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: d.iconMicrophone,
                            children: (0, l.jsx)(i.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(r.Text, {
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
        306939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                r = n("139321"),
                i = n("597517"),
                u = n("782340"),
                d = n("8341"),
                o = n("533662");
            let c = () => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: d.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: d.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: d.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: d.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                })]
            });

            function E(e) {
                let {
                    onClick: t
                } = e, n = (0, a.useStateFromStores)([r.HotspotStore], () => !r.HotspotStore.hasHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL));
                return n ? null : (0, l.jsxs)("div", {
                    className: d.container,
                    children: [(0, l.jsxs)("div", {
                        className: d.content,
                        children: [(0, l.jsxs)("div", {
                            className: d.textContainer,
                            children: [(0, l.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: d.descriptionText,
                                children: u.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: c
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: d.image,
                            children: (0, l.jsx)("img", {
                                src: o,
                                alt: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: d.footer,
                        children: [(0, l.jsx)(s.Button, {
                            onClick: t,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            className: d.button,
                            children: u.default.Messages.CREATE_STAGE_CHANNEL
                        }), (0, l.jsx)(s.Button, {
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
        27754: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("841363"),
                r = n("822516"),
                i = n("745049"),
                u = n("782340");

            function d(e, t) {
                return {
                    entity: function(e) {
                        let {
                            entityType: t,
                            channelId: n
                        } = e, l = (0, s.getLocationFromEventData)(e);
                        return null == t ? "An event type must be specified." : (null == l || "" === l.trim()) && null == n ? "Either a location or channel must be specified." : void 0
                    }(e),
                    schedule: function(e, t) {
                        let n = (0, r.getScheduleFromEventData)(e),
                            {
                                entityType: l
                            } = e;
                        if (null == n || (null == n ? void 0 : n.startDate) == null) return u.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: d
                        } = n;
                        return l === i.GuildScheduledEventEntityTypes.EXTERNAL && null == d ? u.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_START_DATE : null != d && null != s && d.isBefore(s) ? u.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != d && d.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
                    }(e, t),
                    topic: function(e) {
                        let {
                            name: t
                        } = e, n = null == t || "" === t.trim();
                        return n ? "Topic must be specified." : void 0
                    }(e)
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var l = n("913144"),
                a = n("599110"),
                s = n("49111");

            function r(e) {
                a.default.track(s.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                s = n("197881"),
                r = n("492397");
            let i = new Set,
                u = {};
            class d extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(r.CONFERENCE_MODE_ENABLED || s.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
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
                        enabled: n
                    } = e;
                    u[t] = n
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
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return s.default
                }
            });
            var l = n("533613");
            n.es(l, t);
            var a = n("597517");
            n.es(a, t);
            var s = n("269596")
        },
        656913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("819855"),
                i = n("841098"),
                u = n("449918"),
                d = n("832132"),
                o = n("818643"),
                c = n("608684"),
                E = n("49111"),
                f = n("575282");
            let _ = E.Color.PRIMARY_400,
                I = E.Color.PRIMARY_500;

            function T(e) {
                let {
                    enabled: t,
                    imageClassName: n,
                    iconWrapperClassName: a,
                    ...E
                } = e, T = (0, i.default)(), N = (0, r.isThemeDark)(T) ? _ : I, h = {
                    height: 18,
                    width: 18,
                    color: (0, u.getColor)(N)
                };
                return (0, l.jsx)(c.default, {
                    className: s({
                        [f.avatarUploader]: t,
                        [f.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: s(n, f.avatarUploaderInnerSquare, {
                        [f.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != E.image && "" !== E.image ? (0, l.jsx)(d.default, {
                        ...h
                    }) : (0, l.jsx)(o.default, {
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
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return I
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("627445"),
                u = n.n(i),
                d = n("77078"),
                o = n("159885"),
                c = n("694187"),
                E = n("49111"),
                f = n("782340"),
                _ = n("911686");

            function I(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, l.jsx)("div", {
                    className: r(_.imageUploaderIcon, t),
                    children: n
                })
            }
            class T extends a.PureComponent {
                handleExternalFileChange(e) {
                    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, a, s;
                    let {
                        image: i,
                        hint: u,
                        name: T,
                        makeURL: N,
                        disabled: h,
                        onChange: v,
                        showIcon: m,
                        showIconDisabled: S,
                        className: C,
                        imageClassName: g,
                        iconClassName: x,
                        iconWrapperClassName: p,
                        icon: A,
                        hideSize: O,
                        imageStyle: R,
                        showRemoveButton: L,
                        maxFileSizeBytes: M,
                        onFileSizeError: D,
                        onOpenImageSelectModal: y,
                        "aria-label": V
                    } = this.props;
                    if (null != (t = null != i && /^data:/.test(i) ? i : N(i)) ? n = 'url("'.concat(t, '")') : null != T && (a = (0, l.jsx)("div", {
                            className: _.imageUploaderAcronym,
                            children: (0, o.getAcronym)(T)
                        })), h) return (0, l.jsx)("div", {
                        className: r(_.imageUploader, _.disabled, C),
                        children: (0, l.jsxs)("div", {
                            className: r(_.imageUploaderInner, g),
                            style: {
                                ...R,
                                backgroundImage: n
                            },
                            children: [a, S && (0, l.jsx)("div", {
                                className: r(_.imageUploaderIcon, _.imageUploaderIconDisabled, x),
                                children: A
                            })]
                        })
                    });
                    null != i ? s = (0, l.jsx)(d.Anchor, {
                        className: _.removeButton,
                        onClick: this.handleRemove,
                        children: f.default.Messages.REMOVE
                    }) : !O && (s = (0, l.jsx)("small", {
                        className: _.sizeInfo,
                        children: f.default.Messages.MINIMUM_SIZE.format({
                            size: E.AVATAR_SIZE
                        })
                    }));
                    let j = null !== (e = null != V ? V : u) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
                    return (0, l.jsxs)("div", {
                        className: r(_.imageUploader, C),
                        children: [(0, l.jsx)(d.FocusRing, {
                            within: !0,
                            children: (0, l.jsxs)("div", {
                                className: m ? r(_.imageUploaderIconWrapper, p) : void 0,
                                children: [(0, l.jsxs)("div", {
                                    className: r(_.imageUploaderInner, g),
                                    style: {
                                        ...R,
                                        backgroundImage: n
                                    },
                                    children: [(0, l.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: a
                                    }), null != y ? (0, l.jsx)(d.Clickable, {
                                        className: _.imageUploaderFileInput,
                                        "aria-label": j,
                                        onClick: y
                                    }) : (0, l.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: v,
                                        className: _.imageUploaderFileInput,
                                        "aria-label": j,
                                        tabIndex: 0,
                                        maxFileSizeBytes: M,
                                        onFileSizeError: D
                                    })]
                                }), null != u && (0, l.jsx)("div", {
                                    className: _.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: u
                                }), m && (0, l.jsx)(I, {
                                    className: x,
                                    icon: A
                                })]
                            })
                        }), L ? s : null]
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
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("627445"),
                u = n.n(i),
                d = n("817736"),
                o = n.n(d),
                c = n("77078"),
                E = n("642906"),
                f = n("990893");

            function _(e) {
                var t, n, s, i, d, o;
                let {
                    header: _,
                    isLargeModal: I,
                    stepProps: T
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...l
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: l
                    }
                }(e), {
                    step: N,
                    stepConfigs: h,
                    setBodyNode: v,
                    setFooterNode: m,
                    setModalOverlayNode: S,
                    setReadySlideId: C
                } = (0, E.usePaymentContext)(), g = h.find(e => e.key === N);
                a.useEffect(() => {
                    S(null)
                }, [N, S]), u(null != g, "Unknown step for current payment flow.");
                let x = null !== (d = null == g ? void 0 : null === (t = g.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== d && d,
                    p = null == g ? void 0 : null === (n = g.options) || void 0 === n ? void 0 : n.bodyClassName,
                    A = void 0 !== I && I ? f.sliderBodyLarge : null == g ? void 0 : null === (s = g.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, l.jsxs)(l.Fragment, {
                    children: [null === (o = null == g ? void 0 : null === (i = g.options) || void 0 === i ? void 0 : i.renderHeader) || void 0 === o || o ? _ : null, g.renderStep(T), null == N || x ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ModalContent, {
                            className: r(f.body, p),
                            children: (0, l.jsx)(c.Slides, {
                                activeSlide: N,
                                centered: !1,
                                onSlideReady: e => C(e),
                                children: h.filter(e => null != e.key).map(e => (0, l.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, l.jsx)("form", {
                                        className: r(f.sliderBody, A),
                                        ref: e => v(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, l.jsx)("div", {
                            ref: e => m(e)
                        }), (0, l.jsx)("div", {
                            ref: e => S(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : o.createPortal(t, n)
            }

            function T(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : o.createPortal(t, n)
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return i.BotTagTypes
                },
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("79798"),
                i = n("988268"),
                u = n("888770"),
                d = e => {
                    let {
                        name: t,
                        discriminator: n,
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
                    return (0, l.jsxs)("div", {
                        className: s(d, u.nameTag),
                        style: I,
                        children: [(0, l.jsxs)("span", {
                            className: s(u.username, c),
                            style: null != i ? {
                                color: i
                            } : void 0,
                            children: [N, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != E ? E : void 0,
                            children: ["#", n]
                        }) : null, null != o ? (0, l.jsx)(r.default, {
                            type: o,
                            invertColor: a,
                            className: s(f, u.bot),
                            verified: _,
                            useRemSizes: T
                        }) : null]
                    })
                }
        },
        683911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                i = n("258078"),
                u = n("549043");

            function d(e) {
                let {
                    steps: t,
                    stepIndex: n,
                    onClick: a
                } = e;
                return (0, l.jsx)("div", {
                    className: u.container,
                    children: t.map((e, t) => {
                        let d = n === t;
                        return (0, l.jsxs)(r.Clickable, {
                            onClick: () => a(t),
                            className: u.stepContainer,
                            children: [(0, l.jsx)("div", {
                                className: s(u.progressBar, {
                                    [u.selectedProgressBar]: d
                                })
                            }), (0, l.jsx)(i.default, {
                                color: d ? i.default.Colors.BRAND : i.default.Colors.MUTED,
                                size: i.default.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    })
                })
            }
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("504318"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: a = 24,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: a,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
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
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("469563"),
                r = n("163725"),
                i = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foregroundColor: r = a.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: d,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("rect", {
                            fill: r,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, l.jsx)("path", {
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
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("851298"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: a
                        })]
                    })
                }, s.ImagePlusIcon, void 0, {
                    size: 24
                })
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("304983"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
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
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("811513"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, s.GroupIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("876726"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: a
                        })
                    })
                }, s.PlayIcon, void 0, {
                    size: 16
                })
        },
        354023: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
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
            }), n("424973"), n("222007");
            var a, s, r = n("191225"),
                i = n("42203"),
                u = n("26989"),
                d = n("660478"),
                o = n("27618"),
                c = n("697218"),
                E = n("287850"),
                f = n("25292"),
                _ = n("49111"),
                I = n("91366"),
                T = n("782340");
            l = n("591205"), (s = a || (a = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
            let N = (e, t) => null != e && u.default.isMember(e, t),
                h = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: n,
                        maxRowsWithoutQuery: l,
                        omitGuildId: a,
                        shownUserIds: s,
                        rows: r,
                        counts: i
                    } = e;
                    if (null != n)
                        for (let e of n) {
                            if (null != l && l > 0 && r.length >= l) break;
                            if (t.has(e) || s.has(e)) continue;
                            let n = c.default.getUser(e);
                            !(null == n || N(a, n.id)) && (s.add(n.id), r.push({
                                type: "FRIEND",
                                item: n,
                                isSuggested: !0
                            }), i.numFriends++)
                        }
                },
                v = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: n,
                        rows: l,
                        counts: a
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != n && n > 0 && l.length >= n) break;
                            let t = i.default.getChannel(e);
                            null != t && (l.push({
                                type: "CHANNEL",
                                item: t,
                                isSuggested: !0
                            }), a.numChannels++)
                        }
                },
                m = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: l,
                        shownUserIds: a,
                        rows: s,
                        counts: r,
                        includeGroupDms: u,
                        limit: o
                    } = e, f = 0;
                    for (let e of E.default.getPrivateChannelIds()) {
                        if (null != n && n > 0 && s.length >= n || null != o && f >= o) break;
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
                            if (null == e || e.bot || N(l, e.id)) continue;
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
                        maxRowsWithoutQuery: n,
                        omitGuildId: l,
                        shownUserIds: a,
                        rows: s,
                        counts: r
                    } = e;
                    for (let e of o.default.getFriendIDs()) {
                        if (null != n && n > 0 && s.length >= n) break;
                        if (t.has(e) || a.has(e)) continue;
                        let i = c.default.getUser(e);
                        !(null == i || N(l, i.id)) && (s.push({
                            type: "FRIEND",
                            item: i,
                            isSuggested: !1
                        }), r.numFriends++)
                    }
                },
                C = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l,
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
                        n.push({
                            type: "CHANNEL",
                            item: t,
                            isSuggested: !1
                        }), l.numChannels++
                    })
                },
                g = e => {
                    let {
                        query: t,
                        omitUserIds: n,
                        shownUserIds: l,
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
                        if (n.has(t.id)) return;
                        let r = i.default.getDMFromUserId(t.id);
                        if (null == r) return;
                        let u = d.default.lastMessageId(r);
                        null != u && (l.add(t.id), a.push({
                            type: "DM",
                            item: t,
                            isSuggested: !1
                        }), s.numDms++)
                    })
                },
                x = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l
                    } = e;
                    f.default.queryGroupDMs({
                        query: t,
                        limit: 50,
                        fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        n.push({
                            type: "GROUP_DM",
                            item: t,
                            isSuggested: !1
                        }), l.numGroupDms++
                    })
                },
                p = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l,
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
                        !(a.has(t.id) || s.has(t.id)) && (s.add(t.id), n.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !1
                        }), l.numFriends++)
                    })
                };

            function A(e) {
                let {
                    query: t,
                    inviteTargetType: n,
                    omitUserIds: l,
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
                        omitUserIds: l,
                        maxRowsWithoutQuery: r,
                        omitGuildId: i,
                        shownUserIds: u,
                        rows: d,
                        counts: o
                    };
                    n === I.InviteTargetTypes.EMBEDDED_APPLICATION && (m({
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
                    n === I.InviteTargetTypes.EMBEDDED_APPLICATION && C({
                        ...e,
                        inviteTargetType: n
                    }), g({
                        ...e,
                        omitUserIds: l,
                        shownUserIds: u
                    }), x(e), p({
                        ...e,
                        omitUserIds: l,
                        shownUserIds: u
                    })
                }
                return {
                    rows: d,
                    counts: o
                }
            }

            function O(e, t) {
                for (let n of E.default.getPrivateChannelIds()) {
                    let l = i.default.getChannel(n);
                    if (null == l || !l.isDM() || null == d.default.lastMessageId(l.id)) continue;
                    let a = l.getRecipientId();
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
                    inviteTargetType: n,
                    applicationId: l
                } = e;
                if (n === I.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of r.default.getEmbeddedActivitiesForChannel(t.id))
                            if (e.application_id === l) return new Set(e.connections.keys())
                    }
                }
                return new Set
            }
            let L = {
                    MINUTES: "minutes",
                    HOURS: "hours",
                    DAYS: "days",
                    NEVER: "never"
                },
                M = {
                    [l.INVITE_OPTIONS_30_MINUTES.value]: {
                        value: 30,
                        type: L.MINUTES
                    },
                    [l.INVITE_OPTIONS_1_HOUR.value]: {
                        value: 1,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_6_HOURS.value]: {
                        value: 6,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_12_HOURS.value]: {
                        value: 12,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_1_DAY.value]: {
                        value: 1,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_7_DAYS.value]: {
                        value: 7,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_30_DAYS.value]: {
                        value: 30,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_FOREVER.value]: {
                        value: 0,
                        type: L.NEVER
                    }
                };

            function D(e, t) {
                let n = parseInt(t, 10),
                    l = 0 === n,
                    a = M[e].value,
                    s = M[e].type;
                switch (s) {
                    case L.MINUTES:
                        if (l) return T.default.Messages.INVITE_EXPIRES_MINUTES;
                        return T.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: n
                        });
                    case L.HOURS:
                        if (l) return T.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: a
                        });
                        return T.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: a,
                            numUses: n
                        });
                    case L.DAYS:
                        if (l) return T.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: a
                        });
                        return T.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: a,
                            numUses: n
                        });
                    case L.NEVER:
                        if (l) return T.default.Messages.INVITE_EXPIRES_NEVER;
                        return T.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: n
                        });
                    default:
                        return ""
                }
            }
            var y = {
                getMaxAgeOptions: l.MAX_AGE_OPTIONS,
                getMaxUsesOptions: l.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: l.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: l.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: l.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: l.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: l.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: l.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: l.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: l.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: l.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: l.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: l.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: l.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: l.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: l.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: l.INVITE_OPTIONS_100_TIMES
            }
        },
        686904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("884691"),
                a = n("448993");

            function s(e, t) {
                let [n, s] = l.useState(!1), [r, i] = l.useState(null), u = async () => {
                    s(!0), i(null);
                    try {
                        let t = await e();
                        return s(!1), i(null), t
                    } catch (n) {
                        let e = new a.APIError(n);
                        return null == t || t(e), i(e), s(!1), null
                    }
                };
                return [u, {
                    loading: n,
                    error: r
                }]
            }
        },
        591205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var l = n("782340");

            function a(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            let s = a(0, () => l.default.Messages.MAX_USES.format({
                    maxUses: 0
                })),
                r = a(1, () => l.default.Messages.MAX_USES.format({
                    maxUses: 1
                })),
                i = a(5, () => l.default.Messages.MAX_USES.format({
                    maxUses: 5
                })),
                u = a(10, () => l.default.Messages.MAX_USES.format({
                    maxUses: 10
                })),
                d = a(25, () => l.default.Messages.MAX_USES.format({
                    maxUses: 25
                })),
                o = a(50, () => l.default.Messages.MAX_USES.format({
                    maxUses: 50
                })),
                c = a(100, () => l.default.Messages.MAX_USES.format({
                    maxUses: 100
                })),
                E = [s, r, i, u, d, o, c],
                f = a(1800, () => l.default.Messages.DURATION_MINUTES.format({
                    minutes: 30
                })),
                _ = a(3600, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 1
                })),
                I = a(21600, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 6
                })),
                T = a(43200, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 12
                })),
                N = a(86400, () => l.default.Messages.DURATION_DAYS.format({
                    days: 1
                })),
                h = a(604800, () => l.default.Messages.DURATION_DAYS.format({
                    days: 7
                })),
                v = a(2592e3, () => l.default.Messages.DURATION_DAYS.format({
                    days: 30
                })),
                m = a(0, () => l.default.Messages.MAX_AGE_NEVER),
                S = [f, _, I, T, N, h, v, m]
        }
    }
]);