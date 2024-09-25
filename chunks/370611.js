n.d(t, {
    Z: function () {
        return E;
    }
});
var a = n(735250),
    l = n(470079),
    i = n(99815),
    r = n(442837),
    s = n(481060),
    o = n(594174),
    u = n(5192),
    c = n(235070),
    d = n(584283),
    h = n(249268),
    m = n(689938),
    x = n(881894);
function E(e) {
    let { guildId: t, leaderboardId: n, intervalOffset: r } = e,
        { sortByStatisticId: o } = (0, c.A)(n),
        u = (0, d.Z)({
            guildId: t,
            leaderboardId: n,
            intervalOffset: r
        }),
        E = l.useMemo(
            () =>
                u.map((e, t) => {
                    var n, a;
                    return {
                        userId: e.user_id,
                        value: null !== (a = null === (n = e.statistics[o]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                        rank: t + 1
                    };
                }),
            [u, o]
        ),
        _ = u[0];
    return (0, a.jsxs)('div', {
        className: x.container,
        children: [
            (0, a.jsx)(h.Z, {
                userId: null == _ ? void 0 : _.user_id,
                guildId: t,
                leaderboardId: n,
                intervalOffset: r,
                highlightStatisticId: o
            }),
            (0, a.jsxs)('div', {
                className: x.table,
                children: [
                    (0, a.jsxs)('div', {
                        className: x.headerRow,
                        children: [
                            (0, a.jsx)(s.Text, {
                                variant: 'text-xxs/medium',
                                className: x.headerRank,
                                children: '#'
                            }),
                            (0, a.jsx)(s.Text, {
                                variant: 'text-xxs/medium',
                                className: x.headerPlayer,
                                children: m.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                            }),
                            (0, a.jsx)(s.Text, {
                                variant: 'text-xxs/medium',
                                className: x.headerValue,
                                children: (function (e) {
                                    if (e === i.E.LOL_TOTAL_KILLS) return m.Z.Messages.LEADERBOARD_TABLE_HEADER_WEEKLY_KILLS;
                                    return 'Unknown statistic';
                                })(o)
                            })
                        ]
                    }),
                    E.map((e) =>
                        (0, l.createElement)(v, {
                            ...e,
                            key: e.userId,
                            guildId: t
                        })
                    )
                ]
            })
        ]
    });
}
function v(e) {
    let { userId: t, rank: n, value: l, guildId: i } = e,
        c = (0, r.e7)([o.default], () => o.default.getUser(t)),
        d = u.ZP.getName(i, void 0, c);
    return (0, a.jsxs)('div', {
        className: x.userRow,
        children: [
            (0, a.jsx)(s.Text, {
                variant: 'text-xxs/medium',
                className: x.userRank,
                children: n
            }),
            (0, a.jsxs)('div', {
                className: x.userPlayer,
                children: [
                    (0, a.jsx)(s.Avatar, {
                        src: null == c ? void 0 : c.getAvatarURL(i, 16),
                        size: s.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, a.jsx)(s.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, a.jsx)(s.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: d
                    }),
                    1 === n
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(s.Spacer, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, a.jsx)(s.LeagueOfLegendsBrandIcon, {
                                      size: 'custom',
                                      width: 14,
                                      height: 14
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, a.jsx)(s.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                children: l
            })
        ]
    });
}
