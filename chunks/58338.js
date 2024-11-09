t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(47120),
    t(789020);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    s = t(481060),
    u = t(87051),
    r = t(113449),
    o = t(748756),
    d = t(686660),
    c = t(122074),
    g = t(9156),
    E = t(621600),
    h = t(981631),
    M = t(490897),
    _ = t(526761),
    N = t(388032);
function f(e) {
    let n = (0, c.ng)(e, !0),
        f = (0, c.U)();
    return (0, i.jsxs)(s.MenuItem, {
        id: 'notification',
        label: (0, i.jsxs)(i.Fragment, {
            children: [f, N.intl.string(N.t.HcoRu7)]
        }),
        action: () => {
            (0, s.openModalLazy)(async () => {
                let { default: n } = await Promise.all([t.e('5863'), t.e('42769')]).then(t.bind(t, 751212));
                return (t) =>
                    (0, i.jsx)(n, {
                        ...t,
                        guildId: e
                    });
            });
        },
        children: [
            (function (e) {
                let [n, t] = l.useState(!1),
                    [c, f] = l.useState(!1),
                    S = (0, a.e7)([g.ZP], () => g.ZP.getGuildUnreadSetting(e)),
                    I = (0, a.e7)([g.ZP], () => g.ZP.getMessageNotifications(e)),
                    p = c ? d.s8.CUSTOM : (0, d.gs)(S, I),
                    m = (n) => {
                        f(!1);
                        let t = { message_notifications: n };
                        n === h.bL.ALL_MESSAGES && S !== M.i.ALL_MESSAGES && (t.flags = (0, r.Q4)(g.ZP.getGuildFlags(e), _.vc.UNREADS_ALL_MESSAGES)), u.Z.updateGuildNotificationSettings(e, t, E.UE.notifications(n));
                    },
                    x = (n) => {
                        f(!1);
                        let t = g.ZP.getGuildFlags(e);
                        u.Z.updateGuildNotificationSettings(e, { flags: (0, r.Q4)(t, n === M.i.ALL_MESSAGES ? _.vc.UNREADS_ALL_MESSAGES : _.vc.UNREADS_ONLY_MENTIONS) }, E.UE.unreads(n));
                    };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(s.MenuGroup, {
                            children: [
                                (0, i.jsx)(s.MenuRadioItem, {
                                    id: 'everything',
                                    group: 'notification-preset',
                                    checked: p === d.s8.ALL_MESSAGES,
                                    label: N.intl.string(N.t.hZrr6u),
                                    action: () => ((0, o.V)(e, d.s8.ALL_MESSAGES), f(!1))
                                }),
                                (0, i.jsx)(s.MenuRadioItem, {
                                    id: 'essentials',
                                    group: 'notification-preset',
                                    checked: p === d.s8.MENTIONS,
                                    label: N.intl.string(N.t.y59NJi),
                                    action: () => ((0, o.V)(e, d.s8.MENTIONS), f(!1))
                                }),
                                (0, i.jsx)(s.MenuRadioItem, {
                                    id: 'nothing',
                                    group: 'notification-preset',
                                    checked: p === d.s8.NOTHING,
                                    label: N.intl.string(N.t['pGn/bG']),
                                    action: () => ((0, o.V)(e, d.s8.NOTHING), f(!1))
                                }),
                                (0, i.jsx)(s.MenuRadioItem, {
                                    id: 'custom',
                                    group: 'notification-preset',
                                    checked: p === d.s8.CUSTOM,
                                    action: () => (t(!0), f(!0)),
                                    label: N.intl.string(N.t['32yow8'])
                                })
                            ]
                        }),
                        (p === d.s8.CUSTOM || n) &&
                            (0, i.jsxs)(s.MenuGroup, {
                                children: [
                                    (0, i.jsxs)(
                                        s.MenuItem,
                                        {
                                            id: 'unread_setting',
                                            label: 'Unread Badges',
                                            children: [
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    id: 'unread_setting_all_messages',
                                                    group: 'unread_setting',
                                                    checked: S === M.i.ALL_MESSAGES,
                                                    label: N.intl.string(N.t['HVah//']),
                                                    action: () => x(M.i.ALL_MESSAGES)
                                                }),
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    id: 'unread_setting_mention_only',
                                                    group: 'unread_setting',
                                                    checked: S === M.i.ONLY_MENTIONS,
                                                    label: N.intl.string(N.t['tu+ZWF']),
                                                    action: () => x(M.i.ONLY_MENTIONS),
                                                    disabled: S !== M.i.ONLY_MENTIONS && I === h.bL.ALL_MESSAGES,
                                                    subtext: S !== M.i.ONLY_MENTIONS && I === h.bL.ALL_MESSAGES ? N.intl.string(N.t.eP8yWV) : void 0
                                                })
                                            ]
                                        },
                                        'unread_setting'
                                    ),
                                    (0, i.jsxs)(
                                        s.MenuItem,
                                        {
                                            id: 'push_settings',
                                            label: N.intl.string(N.t.HcoRu7),
                                            children: [
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything',
                                                    label: N.intl.string(N.t['HVah//']),
                                                    checked: I === h.bL.ALL_MESSAGES,
                                                    action: () => m(h.bL.ALL_MESSAGES),
                                                    subtext: S !== M.i.ALL_MESSAGES && I !== h.bL.ALL_MESSAGES ? N.intl.string(N.t.idXSbG) : void 0
                                                }),
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything_mention',
                                                    checked: I === h.bL.ONLY_MENTIONS,
                                                    label: N.intl.string(N.t['tu+ZWF']),
                                                    action: () => m(h.bL.ONLY_MENTIONS)
                                                }),
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything_nothing',
                                                    label: N.intl.string(N.t.X4wWUl),
                                                    checked: I === h.bL.NO_MESSAGES,
                                                    action: () => m(h.bL.NO_MESSAGES)
                                                })
                                            ]
                                        },
                                        'push_settings'
                                    )
                                ]
                            })
                    ]
                });
            })(e),
            null != n && (0, i.jsx)(s.MenuGroup, { children: n }),
            (function (e) {
                let n = (0, a.cj)([g.ZP], () => ({
                        highligths: g.ZP.getNotifyHighlights(e),
                        mobilePush: g.ZP.isMobilePushEnabled(e),
                        suppressRoles: g.ZP.isSuppressRolesEnabled(e),
                        suppressEveryone: g.ZP.isSuppressEveryoneEnabled(e),
                        muteScheduledEvents: g.ZP.isMuteScheduledEventsEnabled(e)
                    })),
                    t = u.Z.updateGuildNotificationSettings;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(s.MenuGroup, {
                            children: [
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'mention',
                                    checked: n.suppressEveryone,
                                    label: N.intl.format(N.t.OWiWAg, {}),
                                    action: () => t(e, { suppress_everyone: !n.suppressEveryone }, E.UE.suppressEveryone(!n.suppressEveryone))
                                }),
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'roles',
                                    checked: n.suppressRoles,
                                    label: N.intl.string(N.t['O/QdoK']),
                                    action: () => t(e, { suppress_roles: !n.suppressRoles }, E.UE.suppressRoles(!n.suppressRoles))
                                }),
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'hightlight',
                                    label: N.intl.string(N.t.gPuteH),
                                    checked: n.highligths === h.gLR.ENABLED,
                                    action: () => t(e, { notify_highlights: n.highligths === h.gLR.ENABLED ? h.gLR.DISABLED : h.gLR.ENABLED }, E.UE.highlights(n.highligths !== h.gLR.ENABLED))
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.MenuGroup, {
                            children: [
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'event',
                                    checked: n.muteScheduledEvents,
                                    label: N.intl.string(N.t.ONG3Y2),
                                    action: () => t(e, { mute_scheduled_events: !n.muteScheduledEvents }, E.UE.mutedEvents(!n.muteScheduledEvents))
                                }),
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'mobile_push',
                                    checked: n.mobilePush,
                                    label: N.intl.string(N.t['h1DL6+']),
                                    action: () => t(e, { mobile_push: !n.mobilePush }, E.UE.mobilePush(!n.mobilePush))
                                })
                            ]
                        })
                    ]
                });
            })(e)
        ]
    });
}
