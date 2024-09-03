t.d(s, {
    P: function () {
        return C;
    }
}),
    t(733860);
var n = t(735250);
t(470079);
var a = t(524437),
    i = t(481060),
    r = t(163268),
    o = t(294602),
    l = t(880257),
    c = t(63063),
    d = t(3957),
    u = t(279743),
    _ = t(838436),
    E = t(526761),
    T = t(726985),
    I = t(981631),
    S = t(689938),
    N = t(81138),
    m = t(365320);
function C() {
    var e;
    let s = null === (e = (0, l.Z)()) || void 0 === e || e,
        { explicitContentGuilds: t, explicitContentFriendDm: C, explicitContentNonFriendDm: g } = (0, o.B)(),
        A = (0, d.a)(E.to.DM_SAFETY_ALERTS),
        h = [
            {
                value: a.Q4.BLUR,
                label: S.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
            },
            {
                value: a.Q4.BLOCK,
                label: S.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
            }
        ],
        O = [
            {
                value: a.Q4.BLUR,
                label: S.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
            }
        ],
        p = {
            value: a.Q4.SHOW,
            label: S.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
        };
    return (
        s && (h.unshift(p), O.unshift(p)),
        (0, n.jsxs)(_.U, {
            setting: T.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            className: N.settingsBackgroundFlashElement,
            children: [
                (0, n.jsx)(_.H, {
                    header: S.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
                    description: S.Z.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({ learnMoreLink: c.Z.getArticleURL(I.BhN.EXPLICIT_MEDIA_REDACTION) })
                }),
                (0, n.jsx)(i.FormItem, {
                    ref: A,
                    tag: i.FormTitleTags.H3,
                    title: S.Z.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
                    titleClassName: m.selectItemTitle,
                    children: (0, n.jsx)(i.SingleSelect, {
                        options: h,
                        value: C,
                        onChange: (e) => (0, r.zj)({ explicitContentFriendDm: e })
                    })
                }),
                (0, n.jsx)(i.FormItem, {
                    tag: i.FormTitleTags.H3,
                    title: S.Z.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
                    titleClassName: m.selectItemTitle,
                    children: (0, n.jsx)(i.SingleSelect, {
                        options: h,
                        value: g,
                        onChange: (e) => (0, r.zj)({ explicitContentNonFriendDm: e })
                    })
                }),
                s &&
                    (0, n.jsx)(i.FormItem, {
                        tag: i.FormTitleTags.H3,
                        title: S.Z.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
                        titleClassName: m.selectItemTitle,
                        children: (0, n.jsx)(i.SingleSelect, {
                            options: O,
                            value: t,
                            onChange: (e) => (0, r.zj)({ explicitContentGuilds: e })
                        })
                    }),
                (0, n.jsx)(u.Z, { scrollPosition: E.to.EXPLICIT_MEDIA_REDACTION })
            ]
        })
    );
}
