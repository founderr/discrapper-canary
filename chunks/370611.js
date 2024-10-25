n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(206295),
    c = n(706454),
    d = n(314897),
    _ = n(158776),
    E = n(594174),
    f = n(5192),
    h = n(528567),
    p = n(371583),
    I = n(246627),
    m = n(249268),
    T = n(864138),
    S = n(473188),
    g = n(463031),
    A = n(689938),
    N = n(881894);
function R(e) {
    let { leaderboard: t, previewMode: n = !1 } = e,
        a = (0, o.e7)([d.default], () => d.default.getId()),
        s = (0, o.e7)([c.default], () => c.default.locale),
        { rankChanges: _ } = (0, I.Z)({
            guildId: t.guild_id,
            leaderboardId: t.leaderboard_id,
            intervalStart: t.interval_start
        }),
        E = i.useMemo(() => {
            let e = new Map();
            _.forEach((t) => {
                let { userId: n, previousRank: r } = t;
                e.set(n, r);
            });
            let { sort_by_statistic_id: n } = t.guild_settings;
            return t.users.map((t, r) => {
                var i, a;
                return {
                    userId: t.user_id,
                    value: null !== (a = null === (i = t.statistics[n]) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 0,
                    rank: r + 1,
                    previousRank: e.get(t.user_id)
                };
            });
        }, [t, _]),
        f = (0, p.K)(t),
        { primaryColor: T } = (0, u.Z)(f),
        S = i.useMemo(() => null == E.find((e) => e.userId === a) && E.length <= 10, [E, a]);
    if (0 === t.users.length) return (0, r.jsx)(O, { leaderboard: t });
    let { sort_by_statistic_id: g, sort_desc: R } = t.guild_settings,
        L = t.settings.statistics[g];
    return (0, r.jsxs)('div', {
        className: N.container,
        style: { background: T },
        children: [
            (0, r.jsx)(m.Z, {
                userId: E[0].userId,
                leaderboard: t
            }),
            n
                ? null
                : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: N.headerRow,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: N.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: N.headerPlayer,
                                          children: A.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: N.headerValue,
                                          children: (0, h.s)({
                                              statisticId: g,
                                              sortDesc: R,
                                              aggregationType: null == L ? void 0 : L.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(l.ScrollerNone, {
                                  className: N.rows,
                                  children: [
                                      E.map((e) =>
                                          (0, i.createElement)(v, {
                                              ...e,
                                              key: e.userId,
                                              guildId: t.guild_id,
                                              locale: s
                                          })
                                      ),
                                      S ? (0, r.jsx)(C, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function O(e) {
    let { leaderboard: t } = e,
        n = (0, p.K)(t);
    return (0, r.jsx)(T.z, {
        imageUrl: n,
        children: (0, r.jsxs)('span', {
            className: N.emptyTitleContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: N.emptyTitle,
                    children: A.Z.Messages.LEADERBOARD_START_PLAYING_CTA
                }),
                (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    className: s()(N.leagueIcon, N.emptyCrownIcon)
                })
            ]
        })
    });
}
function v(e) {
    let { userId: t, rank: n, value: i, guildId: a, previousRank: s, locale: u } = e,
        c = (0, o.e7)([E.default], () => E.default.getUser(t)),
        d = f.ZP.getName(a, void 0, c),
        h = null != s && s > n,
        p = (0, o.e7)([_.Z], () => {
            let e = _.Z.getPrimaryActivity(t);
            return (null == e ? void 0 : e.application_id) != null && g.T.includes(e.application_id);
        });
    return (0, r.jsxs)('div', {
        className: N.userRow,
        children: [
            h ? (0, r.jsx)('div', { className: N.rankChangeIndicator }) : null,
            (0, r.jsx)('div', {
                className: N.userRank,
                children:
                    n <= 3
                        ? (0, r.jsx)(S._, { rank: n })
                        : (0, r.jsx)(l.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: n
                          })
            }),
            (0, r.jsxs)('div', {
                className: N.userPlayer,
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
                        children: d
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
                    h ? (0, r.jsx)(L, { rankChange: s - n }) : null
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
function C() {
    return (0, r.jsxs)('div', {
        className: N.joinLeaderboardCTAContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: N.joinLeaderboardCTA,
                children: A.Z.Messages.LEADERBOARD_START_PLAYING_CTA
            }),
            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: N.leagueIcon
            })
        ]
    });
}
function L(e) {
    let { rankChange: t } = e;
    return (0, r.jsxs)('div', {
        className: N.rankChangeBadge,
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
