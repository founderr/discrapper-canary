s.d(t, {
    Z: function () {
        return d;
    }
});
var a = s(200651);
s(192379);
var n = s(120356),
    o = s.n(n),
    l = s(481060),
    r = s(112831),
    i = s(689938),
    c = s(763443);
function d(e) {
    let { onComplete: t } = e;
    return (0, a.jsxs)(l.Clickable, {
        className: c.container,
        onClick: t,
        children: [
            (0, a.jsx)(r.Z, {
                size: r.Z.Sizes.SIZE_24,
                className: c.title,
                children: i.Z.Messages.NUF_COMPLETE_TITLE
            }),
            (0, a.jsx)(r.Z, {
                size: r.Z.Sizes.SIZE_24,
                className: o()(c.title, c.subtitle),
                children: i.Z.Messages.NUF_COMPLETE_SUBTITLE
            }),
            (0, a.jsx)(l.Button, {
                color: l.Button.Colors.WHITE,
                onClick: t,
                children: i.Z.Messages.NUF_COMPLETE_CTA
            })
        ]
    });
}
