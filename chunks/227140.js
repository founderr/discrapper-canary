t.d(s, {
    Z: function () {
        return l;
    }
});
var n = t(200651);
t(192379);
var o = t(120356),
    r = t.n(o),
    a = t(481060),
    i = t(679768),
    c = t(704448);
function l(e) {
    let { copy: s, showStars: t = !0, className: o } = e;
    return (0, n.jsxs)('div', {
        className: r()(c.badgeContainer, o),
        children: [
            t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: r()(c.star, c.starLeft),
                            children: (0, n.jsx)(i.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: r()(c.star, c.starRight),
                            children: (0, n.jsx)(i.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, n.jsx)(a.Text, {
                variant: 'eyebrow',
                className: c.newBadge,
                children: s
            })
        ]
    });
}
