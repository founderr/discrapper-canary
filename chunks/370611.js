n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(99815),
    o = n(442837),
    s = n(481060),
    l = n(594174),
    u = n(5192),
    c = n(873128),
    d = n(249268),
    _ = n(689938),
    E = n(881894);
function f(e) {
    if (e === a.E.LOL_TOTAL_KILLS) return _.Z.Messages.LEADERBOARD_TABLE_HEADER_WEEKLY_KILLS;
    return 'Unknown statistic';
}
function h(e) {
    let { guildId: t, leaderboardId: n, intervalOffset: a, previewMode: o = !1 } = e,
        l = (0, c.Z)({
            guildId: t,
            leaderboardId: n,
            intervalOffset: a
        }),
        u = i.useMemo(() => {
            if (null == l) return [];
            let { sortByStatisticId: e } = l.settings;
            return l.users.map((t, n) => {
                var r, i;
                return {
                    userId: t.user_id,
                    value: null !== (i = null === (r = t.statistics[e]) || void 0 === r ? void 0 : r.value) && void 0 !== i ? i : 0,
                    rank: n + 1
                };
            });
        }, [l]);
    if (null == l) return null;
    let { sortByStatisticId: h } = l.settings,
        m = u[0];
    return (0, r.jsxs)('div', {
        className: E.container,
        children: [
            (0, r.jsx)(d.Z, {
                userId: null == m ? void 0 : m.userId,
                guildId: t,
                leaderboardId: n,
                intervalOffset: a
            }),
            o
                ? null
                : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)('div', {
                          className: E.table,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: E.headerRow,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xxs/medium',
                                          className: E.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xxs/medium',
                                          className: E.headerPlayer,
                                          children: _.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xxs/medium',
                                          className: E.headerValue,
                                          children: f(h)
                                      })
                                  ]
                              }),
                              u.map((e) =>
                                  (0, i.createElement)(p, {
                                      ...e,
                                      key: e.userId,
                                      guildId: t
                                  })
                              )
                          ]
                      })
                  })
        ]
    });
}
function p(e) {
    let { userId: t, rank: n, value: i, guildId: a } = e,
        c = (0, o.e7)([l.default], () => l.default.getUser(t)),
        d = u.ZP.getName(a, void 0, c);
    return (0, r.jsxs)('div', {
        className: E.userRow,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-xxs/medium',
                className: E.userRank,
                children: n
            }),
            (0, r.jsxs)('div', {
                className: E.userPlayer,
                children: [
                    (0, r.jsx)(s.Avatar, {
                        src: null == c ? void 0 : c.getAvatarURL(a, 16),
                        size: s.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, r.jsx)(s.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, r.jsx)(s.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: d
                    }),
                    1 === n
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(s.Spacer, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, r.jsx)(s.LeagueOfLegendsBrandIcon, {
                                      size: 'custom',
                                      width: 14,
                                      height: 14
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, r.jsx)(s.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                children: i
            })
        ]
    });
}
