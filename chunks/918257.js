t.d(s, {
    Z: function () {
        return I;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(313201),
    l = t(208049),
    c = t(242291),
    d = t(63063),
    _ = t(36703),
    u = t(981631),
    E = t(689938),
    T = t(784262);
let S = (0, o.hQ)();
function I() {
    let e = (0, c.pI)();
    return (0, n.jsxs)('div', {
        className: i()(T.soundboardRow),
        children: [
            (0, n.jsxs)('div', {
                className: i()(T.soundboardColumn, T.leftColumn),
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H5,
                        className: T.soundboardTitle,
                        children: E.Z.Messages.USER_SETTINGS_SOUNDBOARD
                    }),
                    (0, n.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: E.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME_DESCRIPTION_WITH_LINK.format({ helpCenterArticle: d.Z.getArticleURL(u.BhN.SOUNDBOARD) })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: i()(T.soundboardColumn, T.__invalid_rightColumn),
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        id: S,
                        tag: r.FormTitleTags.H5,
                        className: T.soundboardSubtitle,
                        children: E.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
                    }),
                    (0, n.jsx)(r.Slider, {
                        initialValue: (0, _.P)(e),
                        maxValue: 100,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: function (s) {
                            (e = (0, _.A)(s)), (0, l.xz)(e);
                        },
                        'aria-labelledby': S
                    })
                ]
            })
        ]
    });
}
