t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var l = t(120356),
    r = t.n(l),
    s = t(481060),
    o = t(471731),
    a = t(985312);
function c(e) {
    let { title: n, className: t, ref: l } = e;
    return (0, i.jsxs)('div', {
        className: r()(a.header, t),
        ref: l,
        children: [
            (0, i.jsx)(o.Z, { className: a.logo }),
            (0, i.jsx)(s.HeadingLevel, {
                forceLevel: 1,
                children: (0, i.jsx)(s.Heading, {
                    className: a.title,
                    variant: 'heading-md/semibold',
                    color: 'header-secondary',
                    children: n
                })
            })
        ]
    });
}
