n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(99815),
    u = n(442837),
    c = n(481060),
    d = n(314897),
    _ = n(594174),
    E = n(5192),
    f = n(873128),
    h = n(246627),
    p = n(249268),
    m = n(689938),
    I = n(881894),
    T = n(721191);
let g = 10;
function S(e) {
    if (e === l.E.LOL_TOTAL_KILLS) return m.Z.Messages.LEADERBOARD_TABLE_HEADER_WEEKLY_KILLS;
    return 'Unknown statistic';
}
function A(e) {
    var t;
    let { guildId: n, leaderboardId: r, intervalOffset: o, previewMode: s = !1 } = e,
        l = (0, u.e7)([d.default], () => d.default.getId()),
        _ = (0, f.Z)({
            guildId: n,
            leaderboardId: r,
            intervalOffset: o
        }),
        { rankChanges: E } = (0, h.Z)({
            guildId: n,
            leaderboardId: r,
            intervalStart: null !== (t = null == _ ? void 0 : _.interval_start) && void 0 !== t ? t : ''
        }),
        T = a.useMemo(() => {
            if (null == _) return [];
            let e = new Map();
            E.forEach((t) => {
                let { userId: n, previousRank: r } = t;
                e.set(n, r);
            });
            let { sort_by_statistic_id: t } = _.settings;
            return _.users.map((n, r) => {
                var i, a;
                return {
                    userId: n.user_id,
                    value: null !== (a = null === (i = n.statistics[t]) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 0,
                    rank: r + 1,
                    previousRank: e.get(n.user_id)
                };
            });
        }, [_, E]),
        A = a.useMemo(() => null == T.find((e) => e.userId === l) && T.length <= g, [T, l]);
    if (null == _) return null;
    if (0 === _.users.length) return (0, i.jsx)(v, {});
    let { sort_by_statistic_id: R } = _.settings,
        C = T[0];
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [
            (0, i.jsx)(p.Z, {
                userId: null == C ? void 0 : C.userId,
                guildId: n,
                leaderboardId: r,
                intervalOffset: o
            }),
            s
                ? null
                : (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsxs)('div', {
                                  className: I.headerRow,
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-xxs/medium',
                                          className: I.headerRank,
                                          children: '#'
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-xxs/medium',
                                          className: I.headerPlayer,
                                          children: m.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-xxs/medium',
                                          className: I.headerValue,
                                          children: S(R)
                                      })
                                  ]
                              }),
                              (0, i.jsxs)(c.ScrollerNone, {
                                  className: I.rows,
                                  children: [
                                      T.map((e) =>
                                          (0, a.createElement)(N, {
                                              ...e,
                                              key: e.userId,
                                              guildId: n
                                          })
                                      ),
                                      A ? (0, i.jsx)(O, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function v() {
    return (0, i.jsxs)('div', {
        className: I.emptyContainer,
        children: [
            (0, i.jsxs)('span', {
                className: I.emptyTitleContainer,
                children: [
                    (0, i.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-lg/normal',
                        className: I.emptyTitle,
                        children: m.Z.Messages.LEADERBOARD_START_PLAYING_CTA
                    }),
                    (0, i.jsx)(c.LeagueOfLegendsBrandIcon, {
                        size: 'custom',
                        width: 16,
                        height: 16,
                        className: s()(I.leagueIcon, I.emptyCrownIcon)
                    })
                ]
            }),
            (0, i.jsx)('img', {
                src: T.Z,
                alt: 'Vi',
                className: I.emptySplash
            })
        ]
    });
}
function N(e) {
    let { userId: t, rank: n, value: r, guildId: a, previousRank: o } = e,
        s = (0, u.e7)([_.default], () => _.default.getUser(t)),
        l = E.ZP.getName(a, void 0, s),
        d = null != o && o > n;
    return (0, i.jsxs)('div', {
        className: I.userRow,
        children: [
            d ? (0, i.jsx)('div', { className: I.rankChangeIndicator }) : null,
            (0, i.jsx)(c.Text, {
                variant: 'text-xxs/medium',
                className: I.userRank,
                children: n
            }),
            (0, i.jsxs)('div', {
                className: I.userPlayer,
                children: [
                    (0, i.jsx)(c.Avatar, {
                        src: null == s ? void 0 : s.getAvatarURL(a, 16),
                        size: c.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, i.jsx)(c.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: l
                    }),
                    1 === n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.Spacer, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, i.jsx)(c.LeagueOfLegendsBrandIcon, {
                                      size: 'custom',
                                      width: 14,
                                      height: 14
                                  })
                              ]
                          })
                        : null,
                    d ? (0, i.jsx)(R, { rankChange: o - n }) : null
                ]
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                children: r
            })
        ]
    });
}
function O() {
    return (0, i.jsxs)('div', {
        className: I.joinLeaderboardCTAContainer,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: I.joinLeaderboardCTA,
                children: m.Z.Messages.LEADERBOARD_START_PLAYING_CTA
            }),
            (0, i.jsx)(c.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: I.leagueIcon
            })
        ]
    });
}
function R(e) {
    let { rankChange: t } = e;
    return (0, i.jsxs)('div', {
        className: I.rankChangeBadge,
        children: [
            (0, i.jsx)(c.ArrowSmallUpIcon, {
                size: 'xxs',
                color: c.tokens.colors.TEXT_MUTED
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: t
            })
        ]
    });
}
