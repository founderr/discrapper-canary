(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69408"], {
        298878: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("669491"),
                s = a("956089"),
                d = a("782340");

            function i(e) {
                let {
                    className: t,
                    color: a = n.default.unsafe_rawColors.BRAND_500.css,
                    ...i
                } = e;
                return (0, l.jsx)(s.TextBadge, {
                    ...i,
                    text: d.default.Messages.BETA,
                    color: a,
                    className: t
                })
            }
        },
        311340: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                trackReportRaidViewed: function() {
                    return _
                },
                setGuildRaidAlerts: function() {
                    return I
                },
                setGuildIncidentActions: function() {
                    return E
                },
                handleResolveRaid: function() {
                    return f
                },
                handleReportRaid: function() {
                    return D
                }
            }), a("222007");
            var l = a("866227"),
                n = a.n(l),
                s = a("872717"),
                d = a("716241"),
                i = a("592407"),
                r = a("305961"),
                u = a("599110"),
                o = a("610174"),
                c = a("49111");

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, d.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function I(e, t) {
                let a = new Set(e.features);
                a.has(c.GuildFeatures.COMMUNITY) ? t ? a.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : a.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? a.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : a.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await i.default.saveGuild(e.id, {
                    features: a
                }, {
                    throwErr: !0
                })
            }
            async function E(e, t, a, l) {
                let d = n().add(l, "hours").toISOString(),
                    i = await s.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? d : null,
                            dms_disabled_until: a ? d : null
                        }
                    });
                return i
            }
            async function f(e, t, a) {
                let {
                    showAlertMode: l
                } = (0, o.getGuildAlertModeEnabled)(e), n = r.default.getGuild(e), d = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!l || null == d) return null;
                let i = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: a
                    }
                });
                return i
            }
            async function D(e) {
                let {
                    showAlertMode: t
                } = (0, o.getGuildAlertModeEnabled)(e), a = r.default.getGuild(e), l = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!t || null == l) return null;
                let n = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return n
            }
        },
        186638: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("171210"),
                d = a("446674"),
                i = a("77078"),
                r = a("298878"),
                u = a("305961"),
                o = a("45029"),
                c = a("599110"),
                _ = a("311340"),
                I = a("311161"),
                E = a("54346"),
                f = a("421127"),
                D = a("49111"),
                h = a("782340"),
                A = a("809313");

            function N(e) {
                let {
                    guildId: t,
                    transitionState: N,
                    onClose: S,
                    analyticsData: T
                } = e, R = (0, d.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), L = null == R ? void 0 : R.hasFeature(D.GuildFeatures.INVITES_DISABLED), [x] = n.useState(!1), [g, C] = n.useState(f.DEFAULT_LOCKDOWN_DURATION), M = (0, d.useStateFromStores)([E.default], () => E.default.getGuildIncident(t)), m = (0, I.hasInvitesDisabled)(M), p = (0, I.hasDMsDisabled)(M), [v, G] = n.useState(m), [O, j] = n.useState(p), [b, y] = n.useState(!1), B = v !== m || O !== p || b;
                if (null == R) return S(), null;

                function U() {
                    G(e => !e)
                }
                return (0, l.jsxs)(i.ModalRoot, {
                    transitionState: N,
                    size: i.ModalSize.MEDIUM,
                    children: [(0, l.jsx)(i.ModalHeader, {
                        separator: !0,
                        children: (0, l.jsxs)("div", {
                            className: A.headerContainer,
                            children: [(0, l.jsx)(o.default, {
                                color: s.default.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, l.jsx)(i.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: h.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, l.jsx)(r.default, {})]
                        })
                    }), (0, l.jsx)(i.ModalContent, {
                        children: (0, l.jsxs)("div", {
                            className: A.mainContainer,
                            children: [(0, l.jsx)(i.Select, {
                                placeholder: h.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, f.getTimeframes)(),
                                select: e => {
                                    C(e), y(!0)
                                },
                                isSelected: e => e === g,
                                serialize: e => String(e)
                            }), (0, l.jsxs)("div", {
                                className: A.pauseContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: A.pauseText,
                                    children: [(0, l.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: h.default.Messages.DISABLE_INVITES
                                    }), (0, l.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: h.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, l.jsx)(i.Tooltip, {
                                    text: h.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                                    children: e => (0, l.jsx)("div", {
                                        ...e,
                                        children: (0, l.jsx)(i.Switch, {
                                            className: A.toggle,
                                            onChange: U,
                                            checked: v || L,
                                            disabled: L
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: A.pauseContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: A.pauseText,
                                    children: [(0, l.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: h.default.Messages.DISABLE_DMS
                                    }), (0, l.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: h.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, l.jsx)(i.Switch, {
                                    className: A.toggle,
                                    onChange: function() {
                                        j(e => !e)
                                    },
                                    checked: O
                                })]
                            })]
                        })
                    }), (0, l.jsxs)(i.ModalFooter, {
                        children: [(0, l.jsx)(i.Button, {
                            onClick: () => {
                                (m || p) && !v && !O ? ((0, _.setGuildIncidentActions)(R.id, !1, !1), (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("187317").then(a.bind(a, "187317"));
                                    return a => (0, l.jsx)(e, {
                                        ...a,
                                        guildId: t
                                    })
                                })) : (0, _.setGuildIncidentActions)(R.id, v, O, g);
                                let {
                                    source: e,
                                    alertType: n,
                                    messageId: s
                                } = T;
                                c.default.track(D.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: s,
                                    raid_alert_type: n,
                                    intervention_type_enabled: (0, I.getEnabledInterventions)(v, O),
                                    intervention_type_disabled: (0, I.getDisabledInterventions)(v, O),
                                    duration: 60 * g
                                }), S()
                            },
                            color: i.Button.Colors.BRAND_NEW,
                            look: i.Button.Looks.FILLED,
                            submitting: x,
                            disabled: !B,
                            children: h.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, l.jsx)(i.Button, {
                            onClick: S,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            disabled: x,
                            children: h.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);