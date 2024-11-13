n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(297781),
    c = n(594174),
    d = n(5192),
    f = n(709737),
    _ = n(69589),
    p = n(388032),
    h = n(553928);
function m(e) {
    var t, n;
    let { generateImageRef: a, leaderboard: m, userId: g, guildId: E } = e,
        v = (0, o.e7)([c.default], () => c.default.getUser(g)),
        I = m.guild_settings.sort_by_statistic_id,
        b = i.useMemo(() => m.users.findIndex((e) => e.user_id === g) + 1, [m, g]),
        S = i.useMemo(() => m.users.find((e) => e.user_id === g), [m, g]);
    s()(null != S, 'User row should not be null'), s()(null != v, 'User must exist');
    let T = d.ZP.getName(E, void 0, v),
        y = null !== (n = null === (t = S.statistics[I]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : 0;
    return (0, r.jsxs)('div', {
        ref: a,
        className: h.container,
        children: [
            (0, r.jsx)(_.Z, {
                user: v,
                rank: b,
                avatarClassName: h.avatar,
                rankBadgeVisibility: 'visibleWithoutBorder'
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: h.gameTitleContainer,
                        children: [
                            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, { size: 'xs' }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: h.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Spacer, { size: 4 }),
                    (0, r.jsx)(l.Text, {
                        className: h.title,
                        variant: 'text-md/semibold',
                        children: p.intl.format(p.t.tluICw, {
                            username: T,
                            rank: b
                        })
                    }),
                    (0, r.jsx)(l.Spacer, { size: 2 }),
                    (0, r.jsxs)(u.Gk, {
                        location: u.Gt.EMBED,
                        children: [
                            (0, r.jsx)(f.DC, {
                                value: y,
                                statisticId: I
                            }),
                            (0, r.jsx)(f.Js, {
                                intervalStart: m.interval_start,
                                intervalEnd: m.interval_end
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
