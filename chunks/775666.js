n.d(t, {
    EQ: function () {
        return g;
    },
    T5: function () {
        return S;
    },
    ZP: function () {
        return T;
    }
});
var r = n(47120);
var i = n(789020);
var a = n(735250),
    o = n(470079),
    s = n(442837),
    l = n(481060),
    u = n(87051),
    c = n(221259),
    d = n(113449),
    _ = n(686660),
    E = n(9156),
    f = n(621600),
    h = n(981631),
    p = n(490897),
    m = n(526761),
    I = n(689938);
function T(e) {
    let t = g(e);
    return e.type === h.d4z.GUILD_VOICE
        ? null
        : (0, a.jsx)(l.MenuItem, {
              id: 'channel_notification_settings',
              label: I.Z.Messages.NOTIFICATIONS,
              children: t
          });
}
function g(e) {
    let t = (0, c.ZA)(e),
        n = (0, c.yN)(e),
        r = t.preset === _.s8.CUSTOM && !n.inherited,
        [i, d] = o.useState(r),
        [f, p] = o.useState(!1),
        m = f ? _.s8.CUSTOM : t.preset,
        T = S(e, () => p(!1)),
        g = (0, s.e7)([E.ZP], () => E.ZP.getNewForumThreadsCreated(e)),
        A = 'parent' === n.inheritedFrom ? I.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : I.Z.Messages.FORM_LABEL_DEFAULT;
    return e.type === h.d4z.GUILD_STAGE_VOICE
        ? (0, a.jsxs)(l.MenuGroup, {
              children: [
                  (0, a.jsx)(l.MenuRadioItem, {
                      id: 'cns_default',
                      label: A,
                      checked: n.inherited,
                      group: 'channel_notification_settings',
                      subtext: t.notification === h.bL.NO_MESSAGES ? I.Z.Messages.FORM_LABEL_NOTHING : I.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                      action: () => (0, c.JK)(e.guild_id, e.id)
                  }),
                  (0, a.jsx)(l.MenuRadioItem, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !n.inherited && t.notification !== h.bL.NO_MESSAGES,
                      label: I.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                      action: () => (0, c.ft)(e.guild_id, e.id, h.bL.ONLY_MENTIONS)
                  }),
                  (0, a.jsx)(l.MenuRadioItem, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: I.Z.Messages.FORM_LABEL_NOTHING,
                      checked: !n.inherited && t.notification === h.bL.NO_MESSAGES,
                      action: () => (0, c.ft)(e.guild_id, e.id, h.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(l.MenuCheckboxItem, {
                                    id: 'new-forum-threads-created',
                                    label: I.Z.Messages.FORUM_NEW_POSTS_CREATED,
                                    checked: g,
                                    action: () => u.Z.setForumThreadsCreated(e, !g)
                                }),
                                (0, a.jsx)(l.MenuSeparator, {})
                            ]
                        })
                      : null,
                  (0, a.jsxs)(l.MenuGroup, {
                      children: [
                          (0, a.jsx)(l.MenuRadioItem, {
                              id: 'cns_default',
                              label: A,
                              group: 'channel_notification_settings',
                              checked: n.inherited && !f,
                              subtext: n.inheritedPreset,
                              action: () => ((0, c.JK)(e.guild_id, e.id), p(!1))
                          }),
                          (0, a.jsx)(l.MenuRadioItem, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: I.Z.Messages.NOTIFICATION_PRESET_1,
                              checked: !n.inherited && m === _.s8.ALL_MESSAGES,
                              action: () => ((0, c._m)(e.guild_id, e.id, _.s8.ALL_MESSAGES), p(!1))
                          }),
                          (0, a.jsx)(l.MenuRadioItem, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: I.Z.Messages.NOTIFICATION_PRESET_2,
                              checked: !n.inherited && m === _.s8.MENTIONS,
                              action: () => ((0, c._m)(e.guild_id, e.id, _.s8.MENTIONS), p(!1))
                          }),
                          (0, a.jsx)(l.MenuRadioItem, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: I.Z.Messages.NOTIFICATION_PRESET_3,
                              checked: !n.inherited && m === _.s8.NOTHING,
                              action: () => ((0, c._m)(e.guild_id, e.id, _.s8.NOTHING), p(!1))
                          }),
                          (0, a.jsx)(l.MenuRadioItem, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: I.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
                              checked: f || (!n.inherited && m === _.s8.CUSTOM),
                              action: () => (d(!0), p(!0))
                          })
                      ]
                  }),
                  (i || r) && T
              ]
          });
}
function S(e, t) {
    let { notification: n, unread: r } = (0, c.ZA)(e),
        i = (e) => {
            e(), t();
        },
        o = (t) => {
            let n = { message_notifications: t };
            t === h.bL.ALL_MESSAGES && r !== p.i.ALL_MESSAGES && (n.flags = (0, d.pq)(E.ZP.getChannelIdFlags(e.guild_id, e.id), m.ic.UNREADS_ALL_MESSAGES)), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, f.UE.notifications(t));
        };
    return (0, a.jsxs)(l.MenuGroup, {
        children: [
            (0, a.jsxs)(
                l.MenuItem,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, a.jsx)(l.MenuRadioItem, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: r === p.i.ALL_MESSAGES,
                            label: I.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => i(() => (0, c.IG)(e.guild_id, e.id, p.i.ALL_MESSAGES))
                        }),
                        (0, a.jsx)(l.MenuRadioItem, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: r === p.i.ONLY_MENTIONS,
                            label: I.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: r !== p.i.ONLY_MENTIONS && n === h.bL.ALL_MESSAGES,
                            subtext: r !== p.i.ONLY_MENTIONS && n === h.bL.ALL_MESSAGES ? I.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => i(() => (0, c.IG)(e.guild_id, e.id, p.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, a.jsxs)(
                l.MenuItem,
                {
                    id: 'push_settings',
                    label: I.Z.Messages.NOTIFICATIONS,
                    children: [
                        (0, a.jsx)(l.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: I.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === h.bL.ALL_MESSAGES,
                            subtext: r !== p.i.ALL_MESSAGES && n !== h.bL.ALL_MESSAGES ? I.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => i(() => o(h.bL.ALL_MESSAGES))
                        }),
                        (0, a.jsx)(l.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: n === h.bL.ONLY_MENTIONS,
                            label: I.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => i(() => o(h.bL.ONLY_MENTIONS))
                        }),
                        (0, a.jsx)(l.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: I.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === h.bL.NO_MESSAGES,
                            action: () => i(() => o(h.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
