r.d(n, {
    M: function () {
        return g;
    },
    Z: function () {
        return E;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(512722),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(297781),
    d = r(594174),
    f = r(5192),
    _ = r(709737),
    h = r(69589),
    p = r(388032),
    m = r(417776);
let g = [r(191420), r(774621), r(49274), r(904141)];
function E(e) {
    var n, r;
    let { generateImageRef: s, leaderboard: g, userId: E, guildId: v } = e,
        I = (0, l.e7)([d.default], () => d.default.getUser(E)),
        T = g.guild_settings.sort_by_statistic_id,
        b = a.useMemo(() => g.users.findIndex((e) => e.user_id === E) + 1, [g, E]),
        y = a.useMemo(() => g.users.find((e) => e.user_id === E), [g, E]);
    o()(null != y, 'User row should not be null'), o()(null != I, 'User must exist');
    let S = f.ZP.getName(v, void 0, I),
        A = null !== (r = null === (n = y.statistics[T]) || void 0 === n ? void 0 : n.value) && void 0 !== r ? r : 0;
    return (0, i.jsxs)('div', {
        ref: s,
        className: m.container,
        children: [
            (0, i.jsx)(h.Z, {
                user: I,
                rank: b,
                avatarClassName: m.avatar,
                rankBadgeVisibility: 'visibleWithoutBorder'
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: m.gameTitleContainer,
                        children: [
                            (0, i.jsx)(u.LeagueOfLegendsBrandIcon, { size: 'xs' }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                className: m.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Spacer, { size: 4 }),
                    (0, i.jsx)(u.Text, {
                        className: m.title,
                        variant: 'text-md/semibold',
                        children: p.intl.format(p.t.tluICw, {
                            username: S,
                            rank: b
                        })
                    }),
                    (0, i.jsx)(u.Spacer, { size: 2 }),
                    (0, i.jsxs)(c.Gk, {
                        location: c.Gt.EMBED,
                        children: [
                            (0, i.jsx)(_.DC, {
                                value: A,
                                statisticId: T
                            }),
                            (0, i.jsx)(_.Js, {
                                intervalStart: g.interval_start,
                                intervalEnd: g.interval_end
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
