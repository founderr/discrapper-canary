var r = n(990547),
    i = n(544891),
    a = n(570140),
    s = n(37234),
    o = n(710845),
    l = n(408987),
    u = n(962086),
    c = n(160404),
    d = n(41776),
    f = n(6025),
    _ = n(314897),
    h = n(271383),
    p = n(430824),
    m = n(546796),
    g = n(573261),
    E = n(999382),
    v = n(981631),
    I = n(308083),
    S = n(388032);
let T = new o.Z('GuildSettingsActionCreators'),
    b = {
        init(e, t, n, r) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_INIT',
                guildId: e,
                section: t,
                subsection: r,
                location: n
            });
        },
        async open(e, t, r, i) {
            var a;
            await Promise.all([n.e('63288'), n.e('23755'), n.e('48835'), n.e('33053'), n.e('15669'), n.e('65840'), n.e('7654'), n.e('90508'), n.e('33862'), n.e('29612'), n.e('44156'), n.e('44294'), n.e('78577'), n.e('85552'), n.e('58227'), n.e('1187'), n.e('28377'), n.e('93375'), n.e('64679'), n.e('65022'), n.e('6898'), n.e('81463')]).then(n.bind(n, 994763)), (null === (a = p.Z.getGuild(e)) || void 0 === a ? void 0 : a.hasFeature(v.oNc.COMMUNITY)) && (t === v.pNK.GUILD_AUTOMOD && ((t = v.pNK.SAFETY), (i = v.KsC.SAFETY_AUTOMOD)), t === v.pNK.MEMBER_VERIFICATION && ((t = v.pNK.SAFETY), (i = v.KsC.SAFETY_DM_AND_SPAM_PROTECTION))), b.init(e, t, r, i);
            f.Z.closeGuildSidebar(e), (0, s.jN)(v.S9g.GUILD_SETTINGS);
        },
        close() {
            a.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' });
        },
        saveRouteStack(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_SAVE_ROUTE_STACK',
                state: e
            });
        },
        setSection(e, t) {
            var n;
            let r = E.Z.getGuildId();
            null != r &&
                ((null === (n = p.Z.getGuild(r)) || void 0 === n ? void 0 : n.hasFeature(v.oNc.COMMUNITY)) && (e === v.pNK.GUILD_AUTOMOD && ((e = v.pNK.SAFETY), (t = v.KsC.SAFETY_AUTOMOD)), e === v.pNK.MEMBER_VERIFICATION && ((e = v.pNK.SAFETY), (t = v.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_SECTION',
                    section: e,
                    subsection: t
                }));
        },
        setSearchQuery(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_SEARCH_QUERY',
                searchQuery: e
            });
        },
        selectRole: (e, t) =>
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_ROLE_SELECT',
                roleId: e,
                searchQuery: t
            }),
        updateEmbed(e, t, n) {
            i.tn
                .patch({
                    url: v.ANM.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n
                    },
                    oldFormErrors: !0
                })
                .then((t) => {
                    a.Z.dispatch({
                        type: 'GUILD_SETTINGS_SET_WIDGET',
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id
                    });
                });
        },
        updateMFALevel(e) {
            let { guildId: t, level: n, isEnabled: r } = e;
            return (0, m.Z)(
                (e) =>
                    i.tn.post({
                        url: v.ANM.GUILD_MFA(t),
                        body: {
                            level: n,
                            ...e
                        },
                        oldFormErrors: !0
                    }),
                {
                    modalProps: {
                        title: S.intl.string(S.t.Wi9LER),
                        actionText: r ? S.intl.string(S.t.MP0Ho6) : S.intl.string(S.t.yZcYGR)
                    },
                    checkEnabled: !1
                }
            ).then((e) =>
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_MFA_SUCCESS',
                    level: e.body.level
                })
            );
        },
        updateIcon(e, t) {
            i.tn
                .patch({
                    url: v.ANM.GUILD(e),
                    body: { icon: t },
                    oldFormErrors: !0
                })
                .then(
                    () => {
                        a.Z.dispatch({
                            type: 'GUILD_SETTINGS_UPDATE',
                            icon: t
                        }),
                            l.Z.checkGuildTemplateDirty(e);
                    },
                    (e) =>
                        a.Z.dispatch({
                            type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                            errors: e.body
                        })
                );
        },
        cancelChanges(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_CANCEL_CHANGES',
                guildId: e
            });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, clan: n, ...r } = e,
                i = { ...r };
            if (null != n) {
                var s;
                i.clan = {
                    ...(null !== (s = i.clan) && void 0 !== s ? s : {}),
                    ...n
                };
            }
            null != E.Z.getGuildId() && null != t && (i.safetyAlertsChannelId = t),
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_UPDATE',
                    ...i
                });
        },
        saveGuild(e, t) {
            let { name: n, description: r, icon: s, splash: o, banner: u, homeHeader: c, afkChannelId: d, afkTimeout: f, systemChannelId: _, verificationLevel: h, defaultMessageNotifications: p, explicitContentFilter: m, features: g, systemChannelFlags: E, preferredLocale: S, rulesChannelId: b, safetyAlertsChannelId: y, discoverySplash: A, publicUpdatesChannelId: N, premiumProgressBarEnabled: C, clan: R } = t,
                O = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                D = {
                    name: n,
                    description: r,
                    icon: s,
                    splash: o,
                    banner: u,
                    home_header: c,
                    features: g,
                    preferred_locale: S,
                    afk_channel_id: d,
                    afk_timeout: f,
                    system_channel_id: _,
                    verification_level: h,
                    default_message_notifications: p,
                    explicit_content_filter: m,
                    system_channel_flags: E,
                    rules_channel_id: b,
                    discovery_splash: A,
                    public_updates_channel_id: N,
                    safety_alerts_channel_id: y,
                    ...(null != C ? { premium_progress_bar_enabled: C } : null),
                    clan: null != R ? (0, I.A9)(R) : R
                };
            return (
                a.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
                i.tn
                    .patch({
                        url: v.ANM.GUILD(e),
                        query: { for_discovery: O.isForDiscovery },
                        body: D,
                        oldFormErrors: !0
                    })
                    .then(
                        (t) => {
                            a.Z.dispatch({
                                type: 'GUILD_SETTINGS_SUBMIT_SUCCESS',
                                guild: t.body
                            }),
                                l.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (a.Z.dispatch({
                                    type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                                    errors: e.body
                                }),
                                T.error('Failed to save guild settings', { errors: e.body }),
                                O.throwErr)
                            )
                                throw e.body;
                        }
                    )
            );
        },
        updateGuildModeration: (e, t) =>
            i.tn
                .patch({
                    url: v.ANM.GUILD(e),
                    body: {
                        verification_level: t.verificationLevel,
                        explicit_content_filter: t.explicitContentFilter
                    },
                    oldFormErrors: !0
                })
                .then((t) => (l.Z.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return (0, m.Z)(
                (a) =>
                    g.Z.patch({
                        url: v.ANM.GUILD(e),
                        body: {
                            owner_id: t,
                            code: i,
                            ...a
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                            properties: {
                                guild_id: e,
                                verification_type: n
                            }
                        }
                    }),
                {
                    modalProps: {
                        title: S.intl.string(S.t.Z5s7PD),
                        actionText: S.intl.string(S.t.Z5s7PD)
                    },
                    checkEnabled: !1
                }
            );
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return g.Z.put({
                url: v.ANM.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: {
                        guild_id: e,
                        is_resend: t
                    }
                }
            });
        },
        deleteGuild: (e, t) =>
            (0, m.Z)(
                (t) =>
                    i.tn.post({
                        url: v.ANM.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0
                    }),
                {
                    modalProps: {
                        title: S.intl.formatToPlainString(S.t.us7mCw, { name: t }),
                        actionText: S.intl.string(S.t.l3hWPz),
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                b.close();
            }),
        async leaveGuild(e) {
            await i.tn.del({
                url: v.ANM.GUILD_LEAVE(e),
                body: { lurking: d.Z.isLurking(e) || h.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0
            }),
                b.close();
        },
        async updateMemberRoles(e, t, n, r, s) {
            if (c.Z.isFullServerPreview(e) && t === _.default.getId()) {
                (0, u.og)(e, n);
                return;
            }
            await i.tn.patch({
                url: v.ANM.GUILD_MEMBER(e, t),
                body: { roles: n },
                oldFormErrors: !0
            }),
                r.forEach((n) =>
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_ADD',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                ),
                s.forEach((n) =>
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_REMOVE',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                );
        },
        bulkAddMemberRoles: (e, t, n) =>
            i.tn
                .patch({
                    url: v.ANM.GUILD_ROLE_MEMBERS(e, t),
                    body: { member_ids: n }
                })
                .then((n) => {
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_BULK_ADD',
                        guildId: e,
                        roleId: t,
                        added: n.body
                    });
                }),
        enableIntegration: (e, t, n) =>
            i.tn.post({
                url: v.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0
            }),
        disableIntegration: (e, t) =>
            i.tn.del({
                url: v.ANM.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0
            }),
        updateIntegration: (e, t, n, r, a) =>
            i.tn.patch({
                url: v.ANM.GUILD_INTEGRATION(e, t),
                body: {
                    expire_behavior: n,
                    expire_grace_period: r,
                    enable_emoticons: a
                },
                oldFormErrors: !0
            }),
        syncIntegration(e, t) {
            i.tn.post({
                url: v.ANM.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0
            });
        }
    };
t.Z = b;
