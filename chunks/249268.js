n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(594174),
    o = n(5192),
    l = n(371583),
    u = n(864138),
    c = n(69589),
    d = n(388032),
    f = n(20037);
function _(e) {
    let { userId: t, leaderboard: n } = e,
        _ = (0, i.e7)([s.default], () => s.default.getUser(t));
    if (null == _) return null;
    let p = (0, l.K)(n),
        h = o.ZP.getName(n.guild_id, void 0, _);
    return (0, r.jsx)(u.z, {
        imageUrl: p,
        children: (0, r.jsxs)('div', {
            className: f.userContainer,
            children: [
                (0, r.jsx)(c.Z, {
                    user: _,
                    rank: 1,
                    rankBadgeVisibility: 'hidden'
                }),
                (0, r.jsx)(a.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: f.userNameContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    className: f.userName,
                                    children: h
                                }),
                                (0, r.jsx)(a.Spacer, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, r.jsx)(a.LeagueOfLegendsBrandIcon, {
                                    size: 'custom',
                                    width: 14,
                                    height: 14
                                })
                            ]
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            className: f.userSubtitle,
                            children: d.intl.string(d.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
