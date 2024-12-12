r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(594174),
    l = r(5192),
    u = r(371583),
    c = r(864138),
    d = r(69589),
    f = r(388032),
    _ = r(352682);
function h(e) {
    let { userId: n, leaderboard: r } = e,
        h = (0, a.e7)([o.default], () => o.default.getUser(n));
    if (null == h) return null;
    let p = (0, u.K)(r),
        m = l.ZP.getName(r.guild_id, void 0, h);
    return (0, i.jsx)(c.z, {
        imageUrl: p,
        children: (0, i.jsxs)('div', {
            className: _.userContainer,
            children: [
                (0, i.jsx)(d.Z, {
                    user: h,
                    rank: 1,
                    rankBadgeVisibility: 'hidden'
                }),
                (0, i.jsx)(s.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.userNameContainer,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    className: _.userName,
                                    children: m
                                }),
                                (0, i.jsx)(s.Spacer, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, i.jsx)(s.LeagueOfLegendsBrandIcon, {
                                    size: 'custom',
                                    width: 14,
                                    height: 14
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            className: _.userSubtitle,
                            children: f.intl.string(f.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
