(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69408"], {
        434657: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                LockIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...r
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(r),
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 9H7V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V9H18C19.6569 9 21 10.3431 21 12V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V12C3 10.3431 4.34315 9 6 9ZM15 6V9H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM14 14C14 14.7403 13.5978 15.3866 13 15.7324V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: d
                    })
                })
            }
        },
        298878: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("956089"),
                i = l("782340");

            function d(e) {
                let {
                    className: t,
                    color: l = a.default.unsafe_rawColors.BRAND_500.css,
                    ...d
                } = e;
                return (0, n.jsx)(s.TextBadge, {
                    ...d,
                    text: i.default.Messages.BETA,
                    color: l,
                    className: t
                })
            }
        },
        311340: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
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
            }), l("222007");
            var n = l("866227"),
                a = l.n(n),
                s = l("872717"),
                i = l("716241"),
                d = l("592407"),
                r = l("305961"),
                u = l("599110"),
                o = l("610174"),
                c = l("49111");

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function I(e, t) {
                let l = new Set(e.features);
                l.has(c.GuildFeatures.COMMUNITY) ? t ? l.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : l.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? l.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : l.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await d.default.saveGuild(e.id, {
                    features: l
                }, {
                    throwErr: !0
                })
            }
            async function f(e, t, l, n) {
                let i = a().add(n, "hours").toISOString(),
                    d = await s.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? i : null,
                            dms_disabled_until: l ? i : null
                        }
                    });
                return d
            }
            async function C(e, t, l) {
                let {
                    showAlertMode: n
                } = (0, o.getGuildAlertModeEnabled)(e), a = r.default.getGuild(e), i = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!n || null == i) return null;
                let d = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: l
                    }
                });
                return d
            }
            async function h(e) {
                let {
                    showAlertMode: t
                } = (0, o.getGuildAlertModeEnabled)(e), l = r.default.getGuild(e), n = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!t || null == n) return null;
                let a = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return a
            }
        },
        186638: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("171210"),
                i = l("446674"),
                d = l("77078"),
                r = l("298878"),
                u = l("305961"),
                o = l("45029"),
                c = l("599110"),
                _ = l("311340"),
                I = l("311161"),
                f = l("54346"),
                C = l("421127"),
                h = l("49111"),
                E = l("782340"),
                N = l("809313");

            function A(e) {
                let {
                    guildId: t,
                    transitionState: A,
                    onClose: D,
                    analyticsData: T
                } = e, R = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), x = null == R ? void 0 : R.hasFeature(h.GuildFeatures.INVITES_DISABLED), [S] = a.useState(!1), [g, L] = a.useState(C.DEFAULT_LOCKDOWN_DURATION), v = (0, i.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), M = (0, I.hasInvitesDisabled)(v), p = (0, I.hasDMsDisabled)(v), [m, j] = a.useState(M), [G, O] = a.useState(p), [V, b] = a.useState(!1), w = m !== M || G !== p || V;
                if (null == R) return D(), null;

                function y() {
                    j(e => !e)
                }
                return (0, n.jsxs)(d.ModalRoot, {
                    transitionState: A,
                    size: d.ModalSize.MEDIUM,
                    children: [(0, n.jsx)(d.ModalHeader, {
                        separator: !0,
                        children: (0, n.jsxs)("div", {
                            className: N.headerContainer,
                            children: [(0, n.jsx)(o.default, {
                                color: s.default.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, n.jsx)(d.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: E.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, n.jsx)(r.default, {})]
                        })
                    }), (0, n.jsx)(d.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: N.mainContainer,
                            children: [(0, n.jsx)(d.Select, {
                                placeholder: E.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, C.getTimeframes)(),
                                select: e => {
                                    L(e), b(!0)
                                },
                                isSelected: e => e === g,
                                serialize: e => String(e)
                            }), (0, n.jsxs)("div", {
                                className: N.pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: N.pauseText,
                                    children: [(0, n.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: E.default.Messages.DISABLE_INVITES
                                    }), (0, n.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: E.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(d.Tooltip, {
                                    text: E.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                                    children: e => (0, n.jsx)("div", {
                                        ...e,
                                        children: (0, n.jsx)(d.Switch, {
                                            className: N.toggle,
                                            onChange: y,
                                            checked: m || x,
                                            disabled: x
                                        })
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: N.pauseContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: N.pauseText,
                                    children: [(0, n.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: E.default.Messages.DISABLE_DMS
                                    }), (0, n.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: E.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, n.jsx)(d.Switch, {
                                    className: N.toggle,
                                    onChange: function() {
                                        O(e => !e)
                                    },
                                    checked: G
                                })]
                            })]
                        })
                    }), (0, n.jsxs)(d.ModalFooter, {
                        children: [(0, n.jsx)(d.Button, {
                            onClick: () => {
                                (M || p) && !m && !G ? ((0, _.setGuildIncidentActions)(R.id, !1, !1), (0, d.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await l.el("187317").then(l.bind(l, "187317"));
                                    return l => (0, n.jsx)(e, {
                                        ...l,
                                        guildId: t
                                    })
                                })) : (0, _.setGuildIncidentActions)(R.id, m, G, g);
                                let {
                                    source: e,
                                    alertType: a,
                                    messageId: s
                                } = T;
                                c.default.track(h.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: s,
                                    raid_alert_type: a,
                                    intervention_type_enabled: (0, I.getEnabledInterventions)(m, G),
                                    intervention_type_disabled: (0, I.getDisabledInterventions)(m, G),
                                    duration: 60 * g
                                }), D()
                            },
                            color: d.Button.Colors.BRAND_NEW,
                            look: d.Button.Looks.FILLED,
                            submitting: S,
                            disabled: !w,
                            children: E.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, n.jsx)(d.Button, {
                            onClick: D,
                            color: d.Button.Colors.PRIMARY,
                            look: d.Button.Looks.LINK,
                            disabled: S,
                            children: E.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        45029: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("434657"),
                i = l("75196"),
                d = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        className: s,
                        foreground: d,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: l,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, i.default)(r),
                        children: (0, n.jsx)("path", {
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