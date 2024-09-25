n.d(t, {
    Z: function () {
        return I;
    },
    c: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(92114),
    s = n(729052),
    l = n(9156),
    u = n(621600),
    c = n(981631),
    d = n(689938);
function _(e) {
    return [
        {
            setting: c.bL.NULL,
            label: null != e.parent_id ? d.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.Z.Messages.FORM_LABEL_DEFAULT
        },
        {
            setting: c.bL.ALL_MESSAGES,
            label: d.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
        },
        {
            setting: c.bL.ONLY_MENTIONS,
            label: d.Z.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
        },
        {
            setting: c.bL.NO_MESSAGES,
            label: d.Z.Messages.FORM_LABEL_NOTHING
        }
    ];
}
function E(e) {
    return [
        {
            setting: c.bL.NULL,
            label: null != e.parent_id ? d.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.Z.Messages.FORM_LABEL_DEFAULT
        },
        {
            setting: c.bL.ALL_MESSAGES,
            label: d.Z.Messages.FORM_LABEL_ALL_MESSAGES
        },
        {
            setting: c.bL.ONLY_MENTIONS,
            label: d.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
        },
        {
            setting: c.bL.NO_MESSAGES,
            label: d.Z.Messages.FORM_LABEL_NOTHING
        }
    ];
}
function f(e) {
    return [
        {
            setting: c.bL.NULL,
            label: null != e.parent_id ? d.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.Z.Messages.FORM_LABEL_DEFAULT
        },
        {
            setting: c.bL.ONLY_MENTIONS,
            label: d.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY
        },
        {
            setting: c.bL.NO_MESSAGES,
            label: d.Z.Messages.FORM_LABEL_NOTHING
        }
    ];
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e.type) {
        case c.d4z.GUILD_VOICE:
            return t ? _(e) : null;
        case c.d4z.GUILD_STAGE_VOICE:
            return f(e);
        default:
            return E(e);
    }
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case c.bL.ALL_MESSAGES:
            return t.type === c.d4z.GUILD_VOICE && n ? d.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : d.Z.Messages.FORM_LABEL_ALL_MESSAGES;
        case c.bL.ONLY_MENTIONS:
            return d.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format();
        case c.bL.NO_MESSAGES:
            return d.Z.Messages.FORM_LABEL_NOTHING;
        case c.bL.NULL:
        default:
            return;
    }
}
function m(e) {
    let t = e.getGuildId(),
        n = e.id,
        _ = (0, i.e7)(
            [l.ZP],
            () => {
                let n = c.bL.NULL;
                return null != e.parent_id && (n = l.ZP.getChannelMessageNotifications(t, e.parent_id)), n !== c.bL.NULL ? n : l.ZP.getMessageNotifications(t);
            },
            [t, e.parent_id]
        ),
        E = (0, i.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
        f = (0, i.e7)([l.ZP], () => l.ZP.getChannelOverrides(t)[n], [t, n]),
        m = null == f ? c.bL.NULL : f.message_notifications,
        I = (0, s.p2)(e),
        T = h(e, I);
    if (null == T) return null;
    function g(e) {
        null != t && o.Z.updateChannelOverrideSettings(t, n, { message_notifications: e }, u.UE.notifications(e));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            e.isForumLikeChannel()
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.MenuCheckboxItem, {
                              id: 'new-forum-threads-created',
                              label: d.Z.Messages.FORUM_NEW_POSTS_CREATED,
                              checked: E,
                              action: () => o.Z.setForumThreadsCreated(e, !E)
                          }),
                          (0, r.jsx)(a.MenuSeparator, {})
                      ]
                  })
                : null,
            T.map((t) => {
                let { setting: n, label: i } = t;
                return (0, r.jsx)(
                    a.MenuRadioItem,
                    {
                        group: 'channel-notifications',
                        id: ''.concat(n),
                        label: i,
                        subtext: n === c.bL.NULL ? p(_, e, I) : void 0,
                        action: () => g(n),
                        checked: n === m
                    },
                    n
                );
            })
        ]
    });
}
function I(e) {
    var t, n;
    let o = m(e),
        u = (0, i.e7)([l.ZP], () => l.ZP.resolvedMessageNotifications(e), [e]),
        _ = (0, i.e7)([l.ZP], () => l.ZP.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
        E = null == _ ? c.bL.NULL : _.message_notifications,
        f = (0, s.p2)(e),
        p =
            E === c.bL.NULL && e.isGuildStageVoice()
                ? d.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                : null === (n = h(e, f)) || void 0 === n
                  ? void 0
                  : null ===
                          (t = n.find((e) => {
                              let { setting: t } = e;
                              return t === u;
                          })) || void 0 === t
                    ? void 0
                    : t.label;
    return null != o
        ? (0, r.jsx)(a.MenuItem, {
              id: 'channel-notifications',
              label: d.Z.Messages.NOTIFICATION_SETTINGS,
              subtext: p,
              children: o
          })
        : null;
}
