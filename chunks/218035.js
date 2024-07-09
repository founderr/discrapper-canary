n.d(t, {
    Z: function () {
        return m;
    },
    c: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), r = n(92114), l = n(729052), o = n(9156), c = n(621600), d = n(981631), u = n(689938);
function _(e) {
    var t, n, i;
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e.type) {
    case d.d4z.GUILD_VOICE:
        ;
        return a ? (t = e, [
            {
                setting: d.bL.NULL,
                label: null != t.parent_id ? u.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : u.Z.Messages.FORM_LABEL_DEFAULT
            },
            {
                setting: d.bL.ALL_MESSAGES,
                label: u.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
            },
            {
                setting: d.bL.ONLY_MENTIONS,
                label: u.Z.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
            },
            {
                setting: d.bL.NO_MESSAGES,
                label: u.Z.Messages.FORM_LABEL_NOTHING
            }
        ]) : null;
    case d.d4z.GUILD_STAGE_VOICE:
        ;
        return n = e, [
            {
                setting: d.bL.NULL,
                label: null != n.parent_id ? u.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : u.Z.Messages.FORM_LABEL_DEFAULT
            },
            {
                setting: d.bL.ONLY_MENTIONS,
                label: u.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY
            },
            {
                setting: d.bL.NO_MESSAGES,
                label: u.Z.Messages.FORM_LABEL_NOTHING
            }
        ];
    default:
        ;
        return i = e, [
            {
                setting: d.bL.NULL,
                label: null != i.parent_id ? u.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : u.Z.Messages.FORM_LABEL_DEFAULT
            },
            {
                setting: d.bL.ALL_MESSAGES,
                label: u.Z.Messages.FORM_LABEL_ALL_MESSAGES
            },
            {
                setting: d.bL.ONLY_MENTIONS,
                label: u.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
            },
            {
                setting: d.bL.NO_MESSAGES,
                label: u.Z.Messages.FORM_LABEL_NOTHING
            }
        ];
    }
}
function E(e) {
    let t = e.getGuildId(), n = e.id, E = (0, a.e7)([o.ZP], () => {
            let n = d.bL.NULL;
            return null != e.parent_id && (n = o.ZP.getChannelMessageNotifications(t, e.parent_id)), n !== d.bL.NULL ? n : o.ZP.getMessageNotifications(t);
        }, [
            t,
            e.parent_id
        ]), m = (0, a.e7)([o.ZP], () => o.ZP.getNewForumThreadsCreated(e)), I = (0, a.e7)([o.ZP], () => o.ZP.getChannelOverrides(t)[n], [
            t,
            n
        ]), T = null == I ? d.bL.NULL : I.message_notifications, h = (0, l.p2)(e), N = _(e, h);
    return null == N ? null : (0, i.jsxs)(i.Fragment, {
        children: [
            e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.MenuCheckboxItem, {
                        id: 'new-forum-threads-created',
                        label: u.Z.Messages.FORUM_NEW_POSTS_CREATED,
                        checked: m,
                        action: () => r.Z.setForumThreadsCreated(e, !m)
                    }),
                    (0, i.jsx)(s.MenuSeparator, {})
                ]
            }) : null,
            N.map(a => {
                let {
                    setting: l,
                    label: o
                } = a;
                return (0, i.jsx)(s.MenuRadioItem, {
                    group: 'channel-notifications',
                    id: ''.concat(l),
                    label: o,
                    subtext: l === d.bL.NULL ? function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        switch (e) {
                        case d.bL.ALL_MESSAGES:
                            return t.type === d.d4z.GUILD_VOICE && n ? u.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : u.Z.Messages.FORM_LABEL_ALL_MESSAGES;
                        case d.bL.ONLY_MENTIONS:
                            return u.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                        case d.bL.NO_MESSAGES:
                            return u.Z.Messages.FORM_LABEL_NOTHING;
                        case d.bL.NULL:
                        default:
                            return;
                        }
                    }(E, e, h) : void 0,
                    action: () => {
                        var e;
                        return e = l, void (null != t && r.Z.updateChannelOverrideSettings(t, n, { message_notifications: e }, c.UE.notifications(e)));
                    },
                    checked: l === T
                }, l);
            })
        ]
    });
}
function m(e) {
    var t, n;
    let r = E(e), c = (0, a.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e), [e]), m = (0, a.e7)([o.ZP], () => o.ZP.getChannelOverrides(e.guild_id)[e.id], [
            e.guild_id,
            e.id
        ]), I = null == m ? d.bL.NULL : m.message_notifications, T = (0, l.p2)(e), h = I === d.bL.NULL && e.isGuildStageVoice() ? u.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = _(e, T)) || void 0 === n ? void 0 : null === (t = n.find(e => {
            let {setting: t} = e;
            return t === c;
        })) || void 0 === t ? void 0 : t.label;
    return null != r ? (0, i.jsx)(s.MenuItem, {
        id: 'channel-notifications',
        label: u.Z.Messages.NOTIFICATION_SETTINGS,
        subtext: h,
        children: r
    }) : null;
}
