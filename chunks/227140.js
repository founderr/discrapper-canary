t.d(s, {
    Z: function () {
        return l;
    }
});
var n = t(200651);
t(192379);
var r = t(120356),
    o = t.n(r),
    a = t(481060),
    i = t(679768),
    c = t(704448);
function l(e) {
    let { copy: s, showStars: t = !0, className: r } = e;
    return (0, n.jsxs)('div', {
        className: o()(c.badgeContainer, r),
        children: [
            t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: o()(c.star, c.starLeft),
                            children: (0, n.jsx)(i.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: o()(c.star, c.starRight),
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
