t.d(n, {
    EQ: function () {
        return N;
    },
    T5: function () {
        return p;
    },
    ZP: function () {
        return b;
    }
}),
    t(47120),
    t(789020);
var i = t(200651),
    a = t(192379),
    c = t(442837),
    o = t(481060),
    r = t(87051),
    s = t(221259),
    l = t(113449),
    d = t(686660),
    u = t(9156),
    _ = t(621600),
    g = t(981631),
    S = t(490897),
    f = t(526761),
    h = t(388032);
function b(e) {
    let n = N(e);
    return e.type === g.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'channel_notification_settings',
              label: h.intl.string(h.t.HcoRu7),
              children: n
          });
}
function N(e) {
    let n = (0, s.ZA)(e),
        t = (0, s.yN)(e),
        l = n.preset === d.s8.CUSTOM && !t.inherited,
        [_, S] = a.useState(l),
        [f, b] = a.useState(!1),
        N = f ? d.s8.CUSTOM : n.preset,
        E = p(e, () => b(!1)),
        L = (0, c.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(e)),
        M = 'parent' === t.inheritedFrom ? h.intl.string(h.t.wlrV1d) : h.intl.string(h.t['1Wn2Mz']);
    return e.type === g.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(o.MenuGroup, {
              children: [
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_default',
                      label: M,
                      checked: t.inherited,
                      group: 'channel_notification_settings',
                      subtext: n.notification === g.bL.NO_MESSAGES ? h.intl.string(h.t.CtVGyc) : h.intl.string(h.t['BENn//']),
                      action: () => (0, s.JK)(e.guild_id, e.id)
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !t.inherited && n.notification !== g.bL.NO_MESSAGES,
                      label: h.intl.string(h.t['BENn//']),
                      action: () => (0, s.ft)(e.guild_id, e.id, g.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: h.intl.string(h.t.CtVGyc),
                      checked: !t.inherited && n.notification === g.bL.NO_MESSAGES,
                      action: () => (0, s.ft)(e.guild_id, e.id, g.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.MenuCheckboxItem, {
                                    id: 'new-forum-threads-created',
                                    label: h.intl.string(h.t.Rkgjpq),
                                    checked: L,
                                    action: () => r.Z.setForumThreadsCreated(e, !L)
                                }),
                                (0, i.jsx)(o.MenuSeparator, {})
                            ]
                        })
                      : null,
                  (0, i.jsxs)(o.MenuGroup, {
                      children: [
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_default',
                              label: M,
                              group: 'channel_notification_settings',
                              checked: t.inherited && !f,
                              subtext: t.inheritedPreset,
                              action: () => ((0, s.JK)(e.guild_id, e.id), b(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t.hZrr6u),
                              checked: !t.inherited && N === d.s8.ALL_MESSAGES,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.ALL_MESSAGES), b(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t.y59NJi),
                              checked: !t.inherited && N === d.s8.MENTIONS,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.MENTIONS), b(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t['pGn/bG']),
                              checked: !t.inherited && N === d.s8.NOTHING,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.NOTHING), b(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t['32yow8']),
                              checked: f || (!t.inherited && N === d.s8.CUSTOM),
                              action: () => (S(!0), b(!0))
                          })
                      ]
                  }),
                  (_ || l) && E
              ]
          });
}
function p(e, n) {
    let { notification: t, unread: a } = (0, s.ZA)(e),
        c = (e) => {
            e(), n();
        },
        d = (n) => {
            let t = { message_notifications: n };
            n === g.bL.ALL_MESSAGES && a !== S.i.ALL_MESSAGES && (t.flags = (0, l.pq)(u.ZP.getChannelIdFlags(e.guild_id, e.id), f.ic.UNREADS_ALL_MESSAGES)), r.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, _.UE.notifications(n));
        };
    return (0, i.jsxs)(o.MenuGroup, {
        children: [
            (0, i.jsxs)(
                o.MenuItem,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, i.jsx)(o.MenuRadioItem, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: a === S.i.ALL_MESSAGES,
                            label: h.intl.string(h.t['HVah//']),
                            action: () => c(() => (0, s.IG)(e.guild_id, e.id, S.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: a === S.i.ONLY_MENTIONS,
                            label: h.intl.string(h.t['tu+ZWF']),
                            disabled: a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES,
                            subtext: a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES ? h.intl.string(h.t.eP8yWV) : void 0,
                            action: () => c(() => (0, s.IG)(e.guild_id, e.id, S.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, i.jsxs)(
                o.MenuItem,
                {
                    id: 'push_settings',
                    label: h.intl.string(h.t.HcoRu7),
                    children: [
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: h.intl.string(h.t['HVah//']),
                            checked: t === g.bL.ALL_MESSAGES,
                            subtext: a !== S.i.ALL_MESSAGES && t !== g.bL.ALL_MESSAGES ? h.intl.string(h.t.idXSbG) : void 0,
                            action: () => c(() => d(g.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: t === g.bL.ONLY_MENTIONS,
                            label: h.intl.string(h.t['tu+ZWF']),
                            action: () => c(() => d(g.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: h.intl.string(h.t.X4wWUl),
                            checked: t === g.bL.NO_MESSAGES,
                            action: () => c(() => d(g.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
