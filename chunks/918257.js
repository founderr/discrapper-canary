n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(313201),
    o = n(208049),
    c = n(242291),
    d = n(63063),
    u = n(36703),
    m = n(981631),
    h = n(388032),
    g = n(784262);
let p = (0, a.hQ)();
function x() {
    let e = (0, c.pI)();
    return (0, i.jsxs)('div', {
        className: r()(g.soundboardRow),
        children: [
            (0, i.jsxs)('div', {
                className: r()(g.soundboardColumn, g.leftColumn),
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H5,
                        className: g.soundboardTitle,
                        children: h.intl.string(h.t.xbMc8v)
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: h.intl.format(h.t.BPbGq6, { helpCenterArticle: d.Z.getArticleURL(m.BhN.SOUNDBOARD) })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(g.soundboardColumn, g.__invalid_rightColumn),
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        id: p,
                        tag: l.FormTitleTags.H5,
                        className: g.soundboardSubtitle,
                        children: h.intl.string(h.t.kbFsAA)
                    }),
                    (0, i.jsx)(l.Slider, {
                        initialValue: (0, u.P)(e),
                        maxValue: 100,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: function (t) {
                            (e = (0, u.A)(t)), (0, o.xz)(e);
                        },
                        'aria-labelledby': p
                    })
                ]
            })
        ]
    });
}
