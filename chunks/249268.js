n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(297781),
    c = n(594174),
    d = n(5192),
    _ = n(709054),
    E = n(873128),
    f = n(709737),
    h = n(689938),
    p = n(20037);
function m(e) {
    var t;
    let { userId: n, guildId: a, leaderboardId: m, intervalOffset: I } = e,
        T = (0, s.e7)([c.default], () => c.default.getUser(n)),
        g = (0, E.Z)({
            guildId: a,
            leaderboardId: m,
            intervalOffset: I
        }),
        S = i.useMemo(() => {
            var e;
            if (null == g) return null;
            let { sortByStatisticId: t } = g.settings;
            return null === (e = g.users.find((e) => e.user_id === n)) || void 0 === e ? void 0 : e.statistics[t];
        }, [g, n]);
    if (null == T || null == g) return null;
    let { sortByStatisticId: A } = g.settings,
        v = _.default.fromTimestamp(1000 * o()(_.default.extractTimestamp(g.interval_start)).add(1, 'week').unix()),
        N = d.ZP.getName(a, void 0, T);
    return (0, r.jsxs)('div', {
        className: p.container,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/semibold',
                color: 'interactive-active',
                children: h.Z.Messages.LEADERBOARD_LOL_SUMMONERS_RIFT
            }),
            (0, r.jsx)(l.Spacer, { size: 8 }),
            (0, r.jsxs)('div', {
                className: p.userContainer,
                children: [
                    (0, r.jsx)(l.Avatar, {
                        src: T.getAvatarURL(a, 32),
                        size: l.AvatarSizes.SIZE_32,
                        'aria-label': 'avatar'
                    }),
                    (0, r.jsx)(l.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)('div', {
                                className: p.userNameContainer,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        className: p.userName,
                                        children: N
                                    }),
                                    (0, r.jsx)(l.Spacer, {
                                        size: 4,
                                        horizontal: !0
                                    }),
                                    (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                                        size: 'custom',
                                        width: 14,
                                        height: 14
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                className: p.userSubtitle,
                                children: h.Z.Messages.LEADERBOARD_CURRENT_CHAMPION
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(l.Spacer, { size: 8 }),
            (0, r.jsxs)(u.Gk, {
                location: u.Gt.LEADERBOARD_POPOUT,
                children: [
                    (0, r.jsx)(f.D, {
                        value: null !== (t = null == S ? void 0 : S.value) && void 0 !== t ? t : 0,
                        statisticId: A
                    }),
                    (0, r.jsx)(f.l, { intervalEnd: v })
                ]
            })
        ]
    });
}
