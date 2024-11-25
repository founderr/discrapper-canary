n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651),
    i = n(481060),
    a = n(99690),
    s = n(473188),
    o = n(688693),
    l = n(191420),
    u = n(774621),
    c = n(49274),
    d = n(904141);
function f(e) {
    let { user: t, rank: n, rankBadgeVisibility: f = 'visible', avatarClassName: _, avatarSize: p = i.AvatarSizes.SIZE_40 } = e,
        h = (0, i.getAvatarSize)(p);
    return (0, r.jsxs)('div', {
        className: o.container,
        style: {
            width: ''.concat(h, 'px'),
            height: ''.concat(h, 'px')
        },
        children: [
            (0, r.jsx)('img', {
                className: o.frame,
                src: 1 === n ? l : 2 === n ? u : 3 === n ? c : d,
                style: {
                    width: h + 8,
                    height: h + 8
                },
                alt: ''
            }),
            (0, r.jsx)(a.Z, {
                className: _,
                user: t,
                size: p
            }),
            'hidden' !== f &&
                (0, r.jsx)('div', {
                    className: o.rankBadge,
                    children: (0, r.jsx)(s._, {
                        rank: n,
                        hideInnerBorder: 'visibleWithoutBorder' === f
                    })
                })
        ]
    });
}
