(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69408"], {
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 9H7V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V9H18C19.6569 9 21 10.3431 21 12V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V12C3 10.3431 4.34315 9 6 9ZM15 6V9H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM14 14C14 14.7403 13.5978 15.3866 13 15.7324V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: d
                    })
                })
            }
        },
        298878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("956089"),
                i = n("782340");

            function d(e) {
                let {
                    className: t,
                    color: n = a.default.unsafe_rawColors.BRAND_500.css,
                    ...d
                } = e;
                return (0, l.jsx)(s.TextBadge, {
                    ...d,
                    text: i.default.Messages.BETA,
                    color: n,
                    className: t
                })
            }
        },
        311340: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackReportRaidViewed: function() {
                    return _
                },
                setGuildRaidAlerts: function() {
                    return I
                },
                setGuildIncidentActions: function() {
                    return f
                },
                handleResolveRaid: function() {
                    return C
                },
                handleReportRaid: function() {
                    return h
                }
            }), n("222007");
            var l = n("866227"),
                a = n.n(l),
                s = n("872717"),
                i = n("716241"),
                d = n("592407"),
                r = n("305961"),
                u = n("599110"),
                o = n("610174"),
                c = n("49111");

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function I(e, t) {
                let n = new Set(e.features);
                n.has(c.GuildFeatures.COMMUNITY) ? t ? n.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await d.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }
            async function f(e, t, n, l) {
                let i = a().add(l, "hours").toISOString(),
                    d = await s.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? i : null,
                            dms_disabled_until: n ? i : null
                        }
                    });
                return d
            }
            async function C(e, t, n) {
                let {
                    showAlertMode: l
                } = (0, o.getGuildAlertModeEnabled)(e), a = r.default.getGuild(e), i = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!l || null == i) return null;
                let d = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: n
                    }
                });
                return d
            }
            async function h(e) {
                let {
                    showAlertMode: t
                } = (0, o.getGuildAlertModeEnabled)(e), n = r.default.getGuild(e), l = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!t || null == l) return null;
                let a = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return a
            }
        },
        186638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("171210"),
                i = n("446674"),
                d = n("77078"),
                r = n("298878"),
                u = n("305961"),
                o = n("45029"),
                c = n("599110"),
                _ = n("311340"),
                I = n("311161"),
                f = n("54346"),
                C = n("421127"),
                h = n("49111"),
                E = n("782340"),
                A = n("809313");

            function N(e) {
                let {
                    guildId: t,
                    transitionState: N,
                    onClose: D,
                    analyticsData: R
                } = e, g = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), [x] = a.useState(!1), [T, S] = a.useState(C.DEFAULT_LOCKDOWN_DURATION), L = (0, i.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), v = (0, I.hasInvitesDisabled)(L), M = (0, I.hasDMsDisabled)(L), [m, p] = a.useState(v), [O, j] = a.useState(M), [G, V] = a.useState(!1), w = m !== v || O !== M || G;
                return null == g ? (D(), null) : (0, l.jsxs)(d.ModalRoot, {
                    transitionState: N,
                    size: d.ModalSize.MEDIUM,
                    children: [(0, l.jsx)(d.ModalHeader, {
                        separator: !0,
                        children: (0, l.jsxs)("div", {
                            className: A.headerContainer,
                            children: [(0, l.jsx)(o.default, {
                                color: s.default.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, l.jsx)(d.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: E.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, l.jsx)(r.default, {})]
                        })
                    }), (0, l.jsx)(d.ModalContent, {
                        children: (0, l.jsxs)("div", {
                            className: A.mainContainer,
                            children: [(0, l.jsx)(d.Select, {
                                placeholder: E.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, C.getTimeframes)(),
                                select: e => {
                                    S(e), V(!0)
                                },
                                isSelected: e => e === T,
                                serialize: e => String(e)
                            }), (0, l.jsxs)("div", {
                                className: A.pauseContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: A.pauseText,
                                    children: [(0, l.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: E.default.Messages.DISABLE_INVITES
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: E.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, l.jsx)(d.Switch, {
                                    className: A.toggle,
                                    onChange: function() {
                                        p(e => !e)
                                    },
                                    checked: m
                                })]
                            }), (0, l.jsxs)("div", {
                                className: A.pauseContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: A.pauseText,
                                    children: [(0, l.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: E.default.Messages.DISABLE_DMS
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: E.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, l.jsx)(d.Switch, {
                                    className: A.toggle,
                                    onChange: function() {
                                        j(e => !e)
                                    },
                                    checked: O
                                })]
                            })]
                        })
                    }), (0, l.jsxs)(d.ModalFooter, {
                        children: [(0, l.jsx)(d.Button, {
                            onClick: () => {
                                (v || M) && !m && !O ? ((0, _.setGuildIncidentActions)(g.id, !1, !1), (0, d.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("187317").then(n.bind(n, "187317"));
                                    return n => (0, l.jsx)(e, {
                                        ...n,
                                        guildId: t
                                    })
                                })) : (0, _.setGuildIncidentActions)(g.id, m, O, T);
                                let {
                                    source: e,
                                    alertType: a,
                                    messageId: s
                                } = R;
                                c.default.track(h.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: s,
                                    raid_alert_type: a,
                                    intervention_type_enabled: (0, I.getEnabledInterventions)(m, O),
                                    intervention_type_disabled: (0, I.getDisabledInterventions)(m, O),
                                    duration: 60 * T
                                }), D()
                            },
                            color: d.Button.Colors.BRAND_NEW,
                            look: d.Button.Looks.FILLED,
                            submitting: x,
                            disabled: !w,
                            children: E.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, l.jsx)(d.Button, {
                            onClick: D,
                            color: d.Button.Colors.PRIMARY,
                            look: d.Button.Looks.LINK,
                            disabled: x,
                            children: E.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("434657"),
                i = n("75196"),
                d = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: s,
                        foreground: d,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, i.default)(r),
                        children: (0, l.jsx)("path", {
                            className: d,
                            fill: a,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.LockIcon, void 0, {
                    size: 24
                })
        }
    }
]);