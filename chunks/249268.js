n.d(t, {
    Z: function () {
        return _;
    }
});
var a = n(735250),
    l = n(470079),
    i = n(913527),
    r = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(297781),
    c = n(594174),
    d = n(5192),
    h = n(709054),
    m = n(994752),
    x = n(709737),
    E = n(689938),
    v = n(20037);
function _(e) {
    var t;
    let { userId: n, guildId: i, leaderboardId: _, intervalOffset: f, highlightStatisticId: T } = e,
        p = (0, s.e7)([c.default], () => c.default.getUser(n)),
        g = (0, s.e7)([m.Z], () => m.Z.get(i, _, f)),
        I = l.useMemo(() => {
            var e;
            return null == g ? void 0 : null === (e = g.users.find((e) => e.user_id === n)) || void 0 === e ? void 0 : e.statistics[T];
        }, [T, g, n]);
    if (null == p || null == g) return null;
    let N = h.default.fromTimestamp(1000 * r()(h.default.extractTimestamp(g.interval_start)).add(1, 'week').unix()),
        C = d.ZP.getName(i, void 0, p);
    return (0, a.jsxs)('div', {
        className: v.container,
        children: [
            (0, a.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                color: 'interactive-active',
                children: E.Z.Messages.LEADERBOARD_LOL_SUMMONERS_RIFT
            }),
            (0, a.jsx)(o.Spacer, { size: 8 }),
            (0, a.jsxs)('div', {
                className: v.userContainer,
                children: [
                    (0, a.jsx)(o.Avatar, {
                        src: p.getAvatarURL(i, 32),
                        size: o.AvatarSizes.SIZE_32,
                        'aria-label': 'avatar'
                    }),
                    (0, a.jsx)(o.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsxs)('div', {
                                className: v.userNameContainer,
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        className: v.userName,
                                        children: C
                                    }),
                                    (0, a.jsx)(o.Spacer, {
                                        size: 4,
                                        horizontal: !0
                                    }),
                                    (0, a.jsx)(o.LeagueOfLegendsBrandIcon, {
                                        size: 'custom',
                                        width: 14,
                                        height: 14
                                    })
                                ]
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                className: v.userSubtitle,
                                children: E.Z.Messages.LEADERBOARD_CURRENT_CHAMPION
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(o.Spacer, { size: 8 }),
            (0, a.jsxs)(u.Gk, {
                location: u.Gt.LEADERBOARD_POPOUT,
                children: [
                    (0, a.jsx)(x.D, {
                        value: null !== (t = null == I ? void 0 : I.value) && void 0 !== t ? t : 0,
                        statisticId: T
                    }),
                    (0, a.jsx)(x.l, { intervalEnd: N })
                ]
            })
        ]
    });
}
