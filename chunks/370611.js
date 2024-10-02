n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(99815),
    s = n(442837),
    l = n(481060),
    u = n(314897),
    c = n(594174),
    d = n(5192),
    _ = n(873128),
    E = n(246627),
    f = n(249268),
    h = n(689938),
    p = n(881894);
let m = 10;
function I(e) {
    if (e === o.E.LOL_TOTAL_KILLS) return h.Z.Messages.LEADERBOARD_TABLE_HEADER_WEEKLY_KILLS;
    return 'Unknown statistic';
}
function T(e) {
    var t;
    let { guildId: n, leaderboardId: r, intervalOffset: o, previewMode: c = !1 } = e,
        d = (0, s.e7)([u.default], () => u.default.getId()),
        T = (0, _.Z)({
            guildId: n,
            leaderboardId: r,
            intervalOffset: o
        }),
        { rankChanges: A } = (0, E.Z)({
            guildId: n,
            leaderboardId: r,
            intervalStart: null !== (t = null == T ? void 0 : T.interval_start) && void 0 !== t ? t : ''
        }),
        v = a.useMemo(() => {
            if (null == T) return [];
            let e = new Map();
            A.forEach((t) => {
                let { userId: n, previousRank: r } = t;
                e.set(n, r);
            });
            let { sortByStatisticId: t } = T.settings;
            return T.users.map((n, r) => {
                var i, a;
                return {
                    userId: n.user_id,
                    value: null !== (a = null === (i = n.statistics[t]) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 0,
                    rank: r + 1,
                    previousRank: e.get(n.user_id)
                };
            });
        }, [T, A]),
        N = a.useMemo(() => null == v.find((e) => e.userId === d) && v.length <= m, [v, d]);
    if (null == T) return null;
    let { sortByStatisticId: O } = T.settings,
        R = v[0];
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)(f.Z, {
                userId: null == R ? void 0 : R.userId,
                guildId: n,
                leaderboardId: r,
                intervalOffset: o
            }),
            c
                ? null
                : (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsxs)('div', {
                                  className: p.headerRow,
                                  children: [
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: p.headerRank,
                                          children: '#'
                                      }),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: p.headerPlayer,
                                          children: h.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                                      }),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: p.headerValue,
                                          children: I(O)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)(l.ScrollerNone, {
                                  className: p.rows,
                                  children: [
                                      v.map((e) =>
                                          (0, a.createElement)(g, {
                                              ...e,
                                              key: e.userId,
                                              guildId: n
                                          })
                                      ),
                                      N ? (0, i.jsx)(S, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function g(e) {
    let { userId: t, rank: n, value: r, guildId: a, previousRank: o } = e,
        u = (0, s.e7)([c.default], () => c.default.getUser(t)),
        _ = d.ZP.getName(a, void 0, u),
        E = null != o && o > n;
    return (0, i.jsxs)('div', {
        className: p.userRow,
        children: [
            E ? (0, i.jsx)('div', { className: p.rankChangeIndicator }) : null,
            (0, i.jsx)(l.Text, {
                variant: 'text-xxs/medium',
                className: p.userRank,
                children: n
            }),
            (0, i.jsxs)('div', {
                className: p.userPlayer,
                children: [
                    (0, i.jsx)(l.Avatar, {
                        src: null == u ? void 0 : u.getAvatarURL(a, 16),
                        size: l.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, i.jsx)(l.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: _
                    }),
                    1 === n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(l.Spacer, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, i.jsx)(l.LeagueOfLegendsBrandIcon, {
                                      size: 'custom',
                                      width: 14,
                                      height: 14
                                  })
                              ]
                          })
                        : null,
                    E ? (0, i.jsx)(A, { rankChange: o - n }) : null
                ]
            }),
            (0, i.jsx)(l.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                children: r
            })
        ]
    });
}
function S() {
    return (0, i.jsxs)('div', {
        className: p.joinLeaderboardCTAContainer,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: p.joinLeaderboardCTA,
                children: h.Z.Messages.LEADERBOARD_START_PLAYING_CTA
            }),
            (0, i.jsx)(l.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: p.joinLeaderboardCTAIcon
            })
        ]
    });
}
function A(e) {
    let { rankChange: t } = e;
    return (0, i.jsxs)('div', {
        className: p.rankChangeBadge,
        children: [
            (0, i.jsx)(l.ArrowSmallUpIcon, {
                size: 'xxs',
                color: l.tokens.colors.TEXT_MUTED
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: t
            })
        ]
    });
}
