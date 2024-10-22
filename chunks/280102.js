n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(929324);
function o(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, i.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, i.jsxs)('span', {
                className: a()(s.users, {
                    [s.video]: l,
                    [s.extraLong]: n >= 100
                }),
                children: [
                    l
                        ? (0, i.jsx)(r.VideoIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: s.videoIcon
                          })
                        : null,
                    n.toString().padStart(2, '0')
                ]
            }),
            (0, i.jsx)('span', {
                className: a()(s.total, { [s.extraLong]: t >= 100 }),
                children: t.toString().padStart(2, '0')
            })
        ]
    });
}
