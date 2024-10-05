t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(735250);
t(470079);
var r = t(120356),
    o = t.n(r),
    l = t(481060),
    c = t(471731),
    s = t(985312);
function a(e) {
    let { title: n, className: t, ref: r } = e;
    return (0, i.jsxs)('div', {
        className: o()(s.header, t),
        ref: r,
        children: [
            (0, i.jsx)(c.Z, { className: s.logo }),
            (0, i.jsx)(l.HeadingLevel, {
                forceLevel: 1,
                children: (0, i.jsx)(l.Heading, {
                    className: s.title,
                    variant: 'heading-md/semibold',
                    color: 'header-secondary',
                    children: n
                })
            })
        ]
    });
}
