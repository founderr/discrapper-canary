n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(706454),
    c = n(314897),
    d = n(594174),
    _ = n(5192),
    E = n(528567),
    f = n(873128),
    h = n(246627),
    p = n(249268),
    I = n(689938),
    m = n(881894),
    T = n(721191);
function S(e) {
    var t;
    let { guildId: n, leaderboardId: a, intervalOffset: s, previewMode: d = !1 } = e,
        _ = (0, o.e7)([c.default], () => c.default.getId()),
        T = (0, f.Z)({
            guildId: n,
            leaderboardId: a,
            intervalOffset: s
        }),
        { rankChanges: S } = (0, h.Z)({
            guildId: n,
            leaderboardId: a,
            intervalStart: null !== (t = null == T ? void 0 : T.interval_start) && void 0 !== t ? t : ''
        }),
        R = (0, o.e7)([u.default], () => u.default.locale),
        O = i.useMemo(() => {
            if (null == T) return [];
            let e = new Map();
            S.forEach((t) => {
                let { userId: n, previousRank: r } = t;
                e.set(n, r);
            });
            let { sort_by_statistic_id: t } = T.guild_settings;
            return T.users.map((n, r) => {
                var i, a;
                return {
                    userId: n.user_id,
                    value: null !== (a = null === (i = n.statistics[t]) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 0,
                    rank: r + 1,
                    previousRank: e.get(n.user_id)
                };
            });
        }, [T, S]),
        v = i.useMemo(() => null == O.find((e) => e.userId === _) && O.length <= 10, [O, _]);
    if (null == T) return null;
    if (0 === T.users.length) return (0, r.jsx)(g, {});
    let { sort_by_statistic_id: C, sort_desc: L } = T.guild_settings,
        D = T.settings.statistics[C],
        y = O[0];
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)(p.Z, {
                userId: null == y ? void 0 : y.userId,
                guildId: n,
                leaderboardId: a,
                intervalOffset: s
            }),
            d
                ? null
                : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: m.headerRow,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: m.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: m.headerPlayer,
                                          children: I.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: m.headerValue,
                                          children: (0, E.s)({
                                              statisticId: C,
                                              sortDesc: L,
                                              aggregationType: null == D ? void 0 : D.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(l.ScrollerNone, {
                                  className: m.rows,
                                  children: [
                                      O.map((e) =>
                                          (0, i.createElement)(A, {
                                              ...e,
                                              key: e.userId,
                                              guildId: n,
                                              locale: R
                                          })
                                      ),
                                      v ? (0, r.jsx)(N, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function g() {
    return (0, r.jsxs)('div', {
        className: m.emptyContainer,
        children: [
            (0, r.jsxs)('span', {
                className: m.emptyTitleContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        tag: 'span',
                        variant: 'text-lg/normal',
                        className: m.emptyTitle,
                        children: I.Z.Messages.LEADERBOARD_START_PLAYING_CTA
                    }),
                    (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                        size: 'custom',
                        width: 16,
                        height: 16,
                        className: s()(m.leagueIcon, m.emptyCrownIcon)
                    })
                ]
            }),
            (0, r.jsx)('img', {
                src: T.Z,
                alt: 'Vi',
                className: m.emptySplash
            })
        ]
    });
}
function A(e) {
    let { userId: t, rank: n, value: i, guildId: a, previousRank: s, locale: u } = e,
        c = (0, o.e7)([d.default], () => d.default.getUser(t)),
        E = _.ZP.getName(a, void 0, c),
        f = null != s && s > n;
    return (0, r.jsxs)('div', {
        className: m.userRow,
        children: [
            f ? (0, r.jsx)('div', { className: m.rankChangeIndicator }) : null,
            (0, r.jsx)(l.Text, {
                variant: 'text-xxs/medium',
                className: m.userRank,
                children: n
            }),
            (0, r.jsxs)('div', {
                className: m.userPlayer,
                children: [
                    (0, r.jsx)(l.Avatar, {
                        src: null == c ? void 0 : c.getAvatarURL(a, 16),
                        size: l.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, r.jsx)(l.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, r.jsx)(l.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: E
                    }),
                    1 === n
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
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
                          })
                        : null,
                    f ? (0, r.jsx)(R, { rankChange: s - n }) : null
                ]
            }),
            (0, r.jsx)(l.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                tabularNumbers: !0,
                children: i.toLocaleString(u)
            })
        ]
    });
}
function N() {
    return (0, r.jsxs)('div', {
        className: m.joinLeaderboardCTAContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: m.joinLeaderboardCTA,
                children: I.Z.Messages.LEADERBOARD_START_PLAYING_CTA
            }),
            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: m.leagueIcon
            })
        ]
    });
}
function R(e) {
    let { rankChange: t } = e;
    return (0, r.jsxs)('div', {
        className: m.rankChangeBadge,
        children: [
            (0, r.jsx)(l.ArrowSmallUpIcon, {
                size: 'xxs',
                color: l.tokens.colors.TEXT_MUTED
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: t
            })
        ]
    });
}
