n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(706454),
    c = n(314897),
    d = n(158776),
    _ = n(594174),
    E = n(5192),
    f = n(528567),
    h = n(873128),
    p = n(246627),
    I = n(249268),
    m = n(463031),
    T = n(689938),
    S = n(881894),
    g = n(721191);
function A(e) {
    var t;
    let { guildId: n, leaderboardId: a, intervalOffset: s, previewMode: d = !1 } = e,
        _ = (0, o.e7)([c.default], () => c.default.getId()),
        E = (0, h.Z)({
            guildId: n,
            leaderboardId: a,
            intervalOffset: s
        }),
        { rankChanges: m } = (0, p.Z)({
            guildId: n,
            leaderboardId: a,
            intervalStart: null !== (t = null == E ? void 0 : E.interval_start) && void 0 !== t ? t : ''
        }),
        g = (0, o.e7)([u.default], () => u.default.locale),
        A = i.useMemo(() => {
            if (null == E) return [];
            let e = new Map();
            m.forEach((t) => {
                let { userId: n, previousRank: r } = t;
                e.set(n, r);
            });
            let { sort_by_statistic_id: t } = E.guild_settings;
            return E.users.map((n, r) => {
                var i, a;
                return {
                    userId: n.user_id,
                    value: null !== (a = null === (i = n.statistics[t]) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 0,
                    rank: r + 1,
                    previousRank: e.get(n.user_id)
                };
            });
        }, [E, m]),
        v = i.useMemo(() => null == A.find((e) => e.userId === _) && A.length <= 10, [A, _]);
    if (null == E) return null;
    if (0 === E.users.length) return (0, r.jsx)(N, {});
    let { sort_by_statistic_id: C, sort_desc: L } = E.guild_settings,
        D = E.settings.statistics[C],
        y = A[0];
    return (0, r.jsxs)('div', {
        className: S.container,
        children: [
            (0, r.jsx)(I.Z, {
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
                                  className: S.headerRow,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: S.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: S.headerPlayer,
                                          children: T.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: S.headerValue,
                                          children: (0, f.s)({
                                              statisticId: C,
                                              sortDesc: L,
                                              aggregationType: null == D ? void 0 : D.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(l.ScrollerNone, {
                                  className: S.rows,
                                  children: [
                                      A.map((e) =>
                                          (0, i.createElement)(R, {
                                              ...e,
                                              key: e.userId,
                                              guildId: n,
                                              locale: g
                                          })
                                      ),
                                      v ? (0, r.jsx)(O, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function N() {
    return (0, r.jsxs)('div', {
        className: S.emptyContainer,
        children: [
            (0, r.jsxs)('span', {
                className: S.emptyTitleContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        tag: 'span',
                        variant: 'text-lg/normal',
                        className: S.emptyTitle,
                        children: T.Z.Messages.LEADERBOARD_START_PLAYING_CTA
                    }),
                    (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                        size: 'custom',
                        width: 16,
                        height: 16,
                        className: s()(S.leagueIcon, S.emptyCrownIcon)
                    })
                ]
            }),
            (0, r.jsx)('img', {
                src: g.Z,
                alt: 'Vi',
                className: S.emptySplash
            })
        ]
    });
}
function R(e) {
    let { userId: t, rank: n, value: i, guildId: a, previousRank: s, locale: u } = e,
        c = (0, o.e7)([_.default], () => _.default.getUser(t)),
        f = E.ZP.getName(a, void 0, c),
        h = null != s && s > n,
        p = (0, o.e7)([d.Z], () => {
            let e = d.Z.getPrimaryActivity(t);
            return (null == e ? void 0 : e.application_id) != null && m.T.includes(e.application_id);
        });
    return (0, r.jsxs)('div', {
        className: S.userRow,
        children: [
            h ? (0, r.jsx)('div', { className: S.rankChangeIndicator }) : null,
            (0, r.jsx)(l.Text, {
                variant: 'text-xxs/medium',
                className: S.userRank,
                children: n
            }),
            (0, r.jsxs)('div', {
                className: S.userPlayer,
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
                        children: f
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
                    h ? (0, r.jsx)(v, { rankChange: s - n }) : null
                ]
            }),
            p &&
                (0, r.jsx)(l.GameControllerIcon, {
                    size: 'xs',
                    color: l.tokens.colors.TEXT_POSITIVE
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
function O() {
    return (0, r.jsxs)('div', {
        className: S.joinLeaderboardCTAContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: S.joinLeaderboardCTA,
                children: T.Z.Messages.LEADERBOARD_START_PLAYING_CTA
            }),
            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: S.leagueIcon
            })
        ]
    });
}
function v(e) {
    let { rankChange: t } = e;
    return (0, r.jsxs)('div', {
        className: S.rankChangeBadge,
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
