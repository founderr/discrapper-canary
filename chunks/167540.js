t.d(s, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(921801),
    d = t(131951),
    _ = t(962100),
    u = t(445817),
    E = t(726985),
    T = t(65154),
    S = t(689938),
    I = t(113207);
function N() {
    return (0, n.jsx)(l.FormNotice, {
        type: l.CardTypes.PRIMARY,
        title: S.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
        body: S.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
        button: (0, n.jsx)(l.Button, {
            size: l.Button.Sizes.SMALL,
            className: I.marginTop20,
            onClick: () => (0, _.y)('Video unsupported browser'),
            children: S.Z.Messages.DOWNLOAD_APP
        })
    });
}
function m() {
    let e = (0, o.e7)([d.Z], () => d.Z.supports(T.AN.VIDEO)),
        [s, t] = a.useState(!1);
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsxs)(l.HeadingLevel, {
                component: (0, n.jsx)(l.FormTitle, {
                    tag: l.FormTitleTags.H1,
                    className: I.marginBottom20,
                    children: S.Z.Messages.VIDEO_SETTINGS
                }),
                children: [
                    (0, n.jsx)(c.F, {
                        setting: E.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
                        children: (0, n.jsx)(u.Z, {
                            previewEnabled: s,
                            onEnablePreview: () => t(!0)
                        })
                    }),
                    !e && (0, n.jsx)(N, {})
                ]
            }),
            (0, n.jsx)(l.FormDivider, { className: r()(I.marginBottom40, I.marginTop40) })
        ]
    });
}
