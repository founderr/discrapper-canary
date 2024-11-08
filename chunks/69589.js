n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651),
    i = n(481060),
    a = n(99690),
    s = n(473188),
    o = n(220938),
    l = n(191420),
    u = n(774621),
    c = n(49274),
    d = n(904141);
function f(e) {
    let { user: t, rank: n, withRankBadge: f = !0 } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)('img', {
                className: o.frame,
                src: 1 === n ? l : 2 === n ? u : 3 === n ? c : d,
                alt: ''
            }),
            (0, r.jsx)(a.Z, {
                user: t,
                size: i.AvatarSizes.SIZE_40
            }),
            f &&
                (0, r.jsx)('div', {
                    className: o.rankBadge,
                    children: (0, r.jsx)(s._, { rank: n })
                })
        ]
    });
}
