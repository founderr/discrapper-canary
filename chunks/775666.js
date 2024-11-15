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
    h = t(526761),
    f = t(388032);
function b(e) {
    let n = N(e);
    return e.type === g.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'channel_notification_settings',
              label: f.intl.string(f.t.HcoRu7),
              children: n
          });
}
function N(e) {
    let n = (0, s.ZA)(e),
        t = (0, s.yN)(e),
        l = n.preset === d.s8.CUSTOM && !t.inherited,
        [_, S] = a.useState(l),
        [h, b] = a.useState(!1),
        N = h ? d.s8.CUSTOM : n.preset,
        L = p(e, () => b(!1)),
        E = (0, c.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(e)),
        m = 'parent' === t.inheritedFrom ? f.intl.string(f.t.wlrV1d) : f.intl.string(f.t['1Wn2Mz']);
    return e.type === g.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(o.MenuGroup, {
              children: [
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_default',
                      label: m,
                      checked: t.inherited,
                      group: 'channel_notification_settings',
                      subtext: n.notification === g.bL.NO_MESSAGES ? f.intl.string(f.t.CtVGyc) : f.intl.string(f.t['BENn//']),
                      action: () => (0, s.JK)(e.guild_id, e.id)
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !t.inherited && n.notification !== g.bL.NO_MESSAGES,
                      label: f.intl.string(f.t['BENn//']),
                      action: () => (0, s.ft)(e.guild_id, e.id, g.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: f.intl.string(f.t.CtVGyc),
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
                                    label: f.intl.string(f.t.Rkgjpq),
                                    checked: E,
                                    action: () => r.Z.setForumThreadsCreated(e, !E)
                                }),
                                (0, i.jsx)(o.MenuSeparator, {})
                            ]
                        })
                      : null,
                  (0, i.jsxs)(o.MenuGroup, {
                      children: [
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_default',
                              label: m,
                              group: 'channel_notification_settings',
                              checked: t.inherited && !h,
                              subtext: t.inheritedPreset,
                              action: () => ((0, s.JK)(e.guild_id, e.id), b(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: f.intl.string(f.t.hZrr6u),
                              checked: !t.inherited && N === d.s8.ALL_MESSAGES,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.ALL_MESSAGES), b(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: f.intl.string(f.t.y59NJi),
                              checked: !t.inherited && N === d.s8.MENTIONS,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.MENTIONS), b(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: f.intl.string(f.t['pGn/bG']),
                              checked: !t.inherited && N === d.s8.NOTHING,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.NOTHING), b(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: f.intl.string(f.t['32yow8']),
                              checked: h || (!t.inherited && N === d.s8.CUSTOM),
                              action: () => (S(!0), b(!0))
                          })
                      ]
                  }),
                  (_ || l) && L
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
            n === g.bL.ALL_MESSAGES && a !== S.i.ALL_MESSAGES && (t.flags = (0, l.pq)(u.ZP.getChannelIdFlags(e.guild_id, e.id), h.ic.UNREADS_ALL_MESSAGES)), r.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, _.UE.notifications(n));
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
                            label: f.intl.string(f.t['HVah//']),
                            action: () => c(() => (0, s.IG)(e.guild_id, e.id, S.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: a === S.i.ONLY_MENTIONS,
                            label: f.intl.string(f.t['tu+ZWF']),
                            disabled: a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES,
                            subtext: a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES ? f.intl.string(f.t.eP8yWV) : void 0,
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
                    label: f.intl.string(f.t.HcoRu7),
                    children: [
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: f.intl.string(f.t['HVah//']),
                            checked: t === g.bL.ALL_MESSAGES,
                            subtext: a !== S.i.ALL_MESSAGES && t !== g.bL.ALL_MESSAGES ? f.intl.string(f.t.idXSbG) : void 0,
                            action: () => c(() => d(g.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: t === g.bL.ONLY_MENTIONS,
                            label: f.intl.string(f.t['tu+ZWF']),
                            action: () => c(() => d(g.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: f.intl.string(f.t.X4wWUl),
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
