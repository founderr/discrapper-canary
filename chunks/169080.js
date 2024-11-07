n.d(t, {
    Z: function () {
        return p;
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
    _ = n(388032),
    h = n(696294);
function p(e) {
    var t, n;
    let { generateImageRef: a, leaderboard: p, userId: m, guildId: g } = e,
        E = (0, o.e7)([c.default], () => c.default.getUser(m)),
        v = p.guild_settings.sort_by_statistic_id,
        I = i.useMemo(() => p.users.findIndex((e) => e.user_id === m) + 1, [p, m]),
        S = i.useMemo(() => p.users.find((e) => e.user_id === m), [p, m]);
    s()(null != S, 'User row should not be null');
    let T = d.ZP.getName(g, void 0, E),
        b = null !== (n = null === (t = S.statistics[v]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : 0;
    return (0, r.jsxs)('div', {
        ref: a,
        className: h.container,
        children: [
            (0, r.jsx)(l.Avatar, {
                src: null == E ? void 0 : E.getAvatarURL(g, 256),
                size: l.AvatarSizes.SIZE_48,
                'aria-label': 'avatar',
                className: h.avatar
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
                        children: _.intl.format(_.t.tluICw, {
                            username: T,
                            rank: I
                        })
                    }),
                    (0, r.jsx)(l.Spacer, { size: 2 }),
                    (0, r.jsxs)(u.Gk, {
                        location: u.Gt.EMBED,
                        children: [
                            (0, r.jsx)(f.DC, {
                                value: b,
                                statisticId: v
                            }),
                            (0, r.jsx)(f.Js, {
                                intervalStart: p.interval_start,
                                intervalEnd: p.interval_end
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
