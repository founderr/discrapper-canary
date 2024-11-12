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
    u = n(195302),
    c = n(206295),
    d = n(706454),
    f = n(314897),
    _ = n(158776),
    p = n(594174),
    h = n(5192),
    m = n(358085),
    g = n(998502),
    E = n(528567),
    v = n(371583),
    I = n(246627),
    b = n(249268),
    S = n(864138),
    T = n(473188),
    y = n(169080),
    A = n(463031),
    N = n(388032),
    C = n(881894);
function R(e) {
    let { leaderboard: t, previewMode: n = !1 } = e,
        a = (0, o.e7)([f.default], () => f.default.getId()),
        s = (0, o.e7)([d.default], () => d.default.locale),
        { rankChanges: u } = (0, I.Z)({
            guildId: t.guild_id,
            leaderboardId: t.leaderboard_id,
            intervalStart: t.interval_start
        }),
        _ = i.useMemo(() => {
            let e = new Map();
            u.forEach((t) => {
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
        }, [t, u]),
        p = (0, v.K)(t),
        { primaryColor: h } = (0, c.Z)(p),
        m = i.useMemo(() => null == _.find((e) => e.userId === a) && _.length <= 10, [_, a]);
    if (0 === t.users.length) return (0, r.jsx)(O, { leaderboard: t });
    let { sort_by_statistic_id: g, sort_desc: S } = t.guild_settings,
        T = t.settings.statistics[g];
    return (0, r.jsxs)('div', {
        className: C.container,
        style: { background: h },
        children: [
            (0, r.jsx)(b.Z, {
                userId: _[0].userId,
                leaderboard: t
            }),
            n
                ? null
                : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)('div', {
                          className: C.table,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: C.headerRow,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: C.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: C.headerPlayer,
                                          children: N.intl.string(N.t['6ii1+/'])
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: C.headerValue,
                                          children: (0, E.s)({
                                              statisticId: g,
                                              sortDesc: S,
                                              aggregationType: null == T ? void 0 : T.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(l.ScrollerNone, {
                                  className: C.rows,
                                  children: [
                                      _.map((e) =>
                                          (0, i.createElement)(D, {
                                              ...e,
                                              key: e.userId,
                                              guildId: t.guild_id,
                                              locale: s,
                                              leaderboard: t
                                          })
                                      ),
                                      m ? (0, r.jsx)(L, {}) : null
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
        n = (0, v.K)(t);
    return (0, r.jsx)(S.z, {
        imageUrl: n,
        children: (0, r.jsxs)('span', {
            className: C.emptyTitleContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: C.emptyTitle,
                    children: N.intl.string(N.t.BfRGk5)
                }),
                (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    className: s()(C.leagueIcon, C.emptyCrownIcon)
                })
            ]
        })
    });
}
function D(e) {
    let { userId: t, rank: n, value: a, guildId: s, previousRank: c, locale: d, leaderboard: f } = e,
        E = (0, o.e7)([p.default], () => p.default.getUser(t)),
        v = h.ZP.getName(s, void 0, E),
        I = null != c && c > n,
        [b, S] = i.useState(!1),
        R = (0, o.e7)([_.Z], () => {
            let e = _.Z.getPrimaryActivity(t);
            return (null == e ? void 0 : e.application_id) != null && A.T.includes(e.application_id);
        }),
        { generatingImage: O, generateImage: D } = (0, u.d)({
            renderComponent: (e) =>
                (0, r.jsx)(y.Z, {
                    ...e,
                    userId: t,
                    leaderboard: f,
                    guildId: s
                }),
            imageOptions: { pixelRatio: 4 }
        }),
        L = async () => {
            let e = await D();
            await g.ZP.copyImage(e), S(!0);
        };
    return (0, r.jsxs)('div', {
        className: C.userRow,
        children: [
            I ? (0, r.jsx)('div', { className: C.rankChangeIndicator }) : null,
            (0, r.jsx)('div', {
                className: C.userRank,
                children:
                    n <= 3
                        ? (0, r.jsx)(T._, { rank: n })
                        : (0, r.jsx)(l.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: n
                          })
            }),
            (0, r.jsxs)('div', {
                className: C.userPlayer,
                children: [
                    (0, r.jsx)(l.Avatar, {
                        src: null == E ? void 0 : E.getAvatarURL(s, 16),
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
                        children: v
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
                    I ? (0, r.jsx)(x, { rankChange: c - n }) : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: C.badgesContainer,
                children: [
                    R &&
                        (0, r.jsx)(l.GameControllerIcon, {
                            size: 'xs',
                            color: l.tokens.colors.TEXT_POSITIVE,
                            className: C.liveIcon
                        }),
                    m.isPlatformEmbedded &&
                        (0, r.jsx)(l.Tooltip, {
                            text: b ? N.intl.string(N.t.ZO0ku7) : N.intl.string(N.t.mikfoa),
                            shouldShow: !O,
                            onTooltipHide: () => S(!1),
                            children: (e) =>
                                (0, r.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: O ? void 0 : L,
                                    className: C.copyLinkContainer,
                                    children: O
                                        ? (0, r.jsx)(l.Spinner, {
                                              type: l.Spinner.Type.SPINNING_CIRCLE_SIMPLE,
                                              className: C.copySpinner
                                          })
                                        : (0, r.jsx)(l.LinkIcon, {
                                              size: 'xs',
                                              className: C.copyLink
                                          })
                                })
                        })
                ]
            }),
            (0, r.jsx)(l.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                tabularNumbers: !0,
                children: a.toLocaleString(d)
            })
        ]
    });
}
function L() {
    return (0, r.jsxs)('div', {
        className: C.joinLeaderboardCTAContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: C.joinLeaderboardCTA,
                children: N.intl.string(N.t.BfRGk5)
            }),
            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: C.leagueIcon
            })
        ]
    });
}
function x(e) {
    let { rankChange: t } = e;
    return (0, r.jsxs)('div', {
        className: C.rankChangeBadge,
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
