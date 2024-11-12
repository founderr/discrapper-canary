n.d(t, {
    Z: function () {
        return h;
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
    p = n(553928);
function h(e) {
    var t, n;
    let { generateImageRef: a, leaderboard: h, userId: m, guildId: g } = e,
        E = (0, o.e7)([c.default], () => c.default.getUser(m)),
        v = h.guild_settings.sort_by_statistic_id,
        I = i.useMemo(() => h.users.findIndex((e) => e.user_id === m) + 1, [h, m]),
        b = i.useMemo(() => h.users.find((e) => e.user_id === m), [h, m]);
    s()(null != b, 'User row should not be null');
    let S = d.ZP.getName(g, void 0, E),
        T = null !== (n = null === (t = b.statistics[v]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : 0;
    return (0, r.jsxs)('div', {
        ref: a,
        className: p.container,
        children: [
            (0, r.jsx)(l.Avatar, {
                src: null == E ? void 0 : E.getAvatarURL(g, 256),
                size: l.AvatarSizes.SIZE_48,
                'aria-label': 'avatar',
                className: p.avatar
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: p.gameTitleContainer,
                        children: [
                            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, { size: 'xs' }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: p.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Spacer, { size: 4 }),
                    (0, r.jsx)(l.Text, {
                        className: p.title,
                        variant: 'text-md/semibold',
                        children: _.intl.format(_.t.tluICw, {
                            username: S,
                            rank: I
                        })
                    }),
                    (0, r.jsx)(l.Spacer, { size: 2 }),
                    (0, r.jsxs)(u.Gk, {
                        location: u.Gt.EMBED,
                        children: [
                            (0, r.jsx)(f.DC, {
                                value: T,
                                statisticId: v
                            }),
                            (0, r.jsx)(f.Js, {
                                intervalStart: h.interval_start,
                                intervalEnd: h.interval_end
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
