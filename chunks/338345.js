t.d(s, {
    Z: function () {
        return m;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(442837),
    o = t(481060),
    l = t(223245),
    c = t(230711),
    d = t(921801),
    _ = t(246946),
    u = t(358085),
    E = t(726985),
    T = t(981631),
    S = t(689938),
    I = t(414068),
    N = t(113207);
function m() {
    let { enabled: e, autoToggle: s, hideInstantInvites: a, hidePersonalInformation: m, disableSounds: C, disableNotifications: A, enableContentProtection: g } = (0, r.cj)([_.Z], () => ({ ..._.Z.getSettings() })),
        h = (e, s) => {
            l.Z.update({ [e]: s });
        };
    return (0, n.jsxs)(o.FormSection, {
        className: I.container,
        tag: o.FormTitleTags.H1,
        title: S.Z.Messages.STREAMER_MODE,
        children: [
            (0, n.jsx)(d.F, {
                setting: E.s6.STREAMER_MODE_INTEGRATIONS,
                children: (0, n.jsx)(o.FormNotice, {
                    className: N.marginBottom40,
                    iconClassName: I.noticeIcon,
                    type: o.FormNoticeTypes.PRIMARY,
                    imageData: {
                        src: t(560264),
                        width: 184,
                        height: 110,
                        position: o.FormNoticeImagePositions.RIGHT
                    },
                    title: S.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
                    body: S.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_BODY.format({ streamkitURL: T.EYA.STREAMKIT })
                })
            }),
            (0, n.jsxs)(d.F, {
                setting: E.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, n.jsx)(o.FormSwitch, {
                        value: e,
                        onChange: (e) => h('enabled', e),
                        note: S.Z.Messages.ENABLE_STREAMER_MODE_DESCRIPTION.format({
                            onClick: () => {
                                c.Z.setSection(T.oAB.KEYBINDS);
                            }
                        }),
                        children: S.Z.Messages.ENABLE_STREAMER_MODE_LABEL
                    }),
                    (() => {
                        if (u.isPlatformEmbedded)
                            return (0, n.jsx)(o.FormSwitch, {
                                value: s,
                                onChange: (e) => h('autoToggle', e),
                                note: S.Z.Messages.AUTO_TOGGLE_STREAMER_MODE_DESCRIPTION,
                                children: S.Z.Messages.AUTO_TOGGLE_STREAMER_MODE_LABEL
                            });
                    })()
                ]
            }),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(o.FormTitle, {
                        className: i()(N.marginTop40, N.marginBottom8, I.sectionLabel),
                        children: S.Z.Messages.OPTIONS
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, n.jsx)(o.FormSwitch, {
                            value: m,
                            onChange: (e) => h('hidePersonalInformation', e),
                            note: S.Z.Messages.HIDE_PERSONAL_INFORMATION_DESCRIPTION,
                            children: S.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, n.jsx)(o.FormSwitch, {
                            value: a,
                            onChange: (e) => h('hideInstantInvites', e),
                            note: S.Z.Messages.HIDE_INSTANT_INVITES_DESCRIPTION,
                            children: S.Z.Messages.HIDE_INSTANT_INVITES_LABEL
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, n.jsx)(o.FormSwitch, {
                            value: C,
                            onChange: (e) => h('disableSounds', e),
                            note: S.Z.Messages.DISABLE_SOUNDS_DESCRIPTION,
                            children: S.Z.Messages.DISABLE_SOUNDS_LABEL
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, n.jsx)(o.FormSwitch, {
                            value: A,
                            onChange: (e) => h('disableNotifications', e),
                            note: S.Z.Messages.DISABLE_NOTIFICATIONS_DESCRIPTION,
                            children: S.Z.Messages.DISABLE_NOTIFICATIONS_LABEL
                        })
                    }),
                    (0, n.jsx)(d.F, {
                        setting: E.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, n.jsx)(o.FormSwitch, {
                            value: g,
                            onChange: (e) => h('enableContentProtection', e),
                            note: S.Z.Messages.HIDE_WINDOW_FROM_STREAM_DESCRIPTION,
                            children: S.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL
                        })
                    })
                ]
            })
        ]
    });
}
