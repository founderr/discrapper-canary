r.d(n, {
    Z: function () {
        return k;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(195302),
    f = r(206295),
    _ = r(134432),
    h = r(706454),
    p = r(314897),
    m = r(158776),
    g = r(594174),
    E = r(302221),
    v = r(5192),
    I = r(358085),
    T = r(998502),
    b = r(528567),
    y = r(371583),
    S = r(246627),
    A = r(249268),
    N = r(864138),
    C = r(473188),
    R = r(169080),
    O = r(463031),
    D = r(206583),
    L = r(388032),
    x = r(508806);
let w = 10,
    P = 15,
    M = 'leaderboard.png';
function k(e) {
    let { leaderboard: n, previewMode: r = !1, trackRankingItemInteraction: i } = e,
        o = (0, u.e7)([p.default], () => p.default.getId()),
        l = (0, u.e7)([h.default], () => h.default.locale),
        { rankChanges: d } = (0, S.Z)({
            guildId: n.guild_id,
            leaderboardId: n.leaderboard_id,
            intervalStart: n.interval_start
        }),
        m = s.useMemo(() => {
            let e = new Map();
            d.forEach((n) => {
                let { userId: r, previousRank: i } = n;
                e.set(r, i);
            });
            let { sort_by_statistic_id: r } = n.guild_settings;
            return n.users.map((n, i) => {
                var a, s;
                return {
                    userId: n.user_id,
                    value: null !== (s = null === (a = n.statistics[r]) || void 0 === a ? void 0 : a.value) && void 0 !== s ? s : 0,
                    rank: i + 1,
                    previousRank: e.get(n.user_id)
                };
            });
        }, [n, d]),
        g = (0, y.K)(n),
        { primaryColor: v } = (0, f.Z)(g),
        I = s.useMemo(() => {
            let e = (0, E.oo)(v),
                n = {
                    ...(0, E.pz)(e.r, e.g, e.b),
                    l: P
                };
            return (0, E.ZJ)(n.h, n.s, n.l);
        }, [v]),
        T = s.useMemo(() => null == m.find((e) => e.userId === o) && m.length <= w, [m, o]);
    if (
        (s.useEffect(() => {
            R.M.forEach((e) => (0, _.po)(e));
        }),
        0 === n.users.length)
    )
        return (0, a.jsx)(U, { leaderboard: n });
    let { sort_by_statistic_id: N, sort_desc: C } = n.guild_settings,
        O = n.settings.statistics[N];
    return (0, a.jsxs)('div', {
        className: x.container,
        style: { background: I },
        children: [
            (0, a.jsx)(A.Z, {
                userId: m[0].userId,
                leaderboard: n
            }),
            r
                ? null
                : (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)('div', {
                          className: x.table,
                          children: [
                              (0, a.jsxs)('div', {
                                  className: x.headerRow,
                                  children: [
                                      (0, a.jsx)(c.Text, {
                                          variant: 'text-xxs/medium',
                                          className: x.headerRank,
                                          children: '#'
                                      }),
                                      (0, a.jsx)(c.Text, {
                                          variant: 'text-xxs/medium',
                                          className: x.headerPlayer,
                                          children: L.intl.string(L.t['6ii1+/'])
                                      }),
                                      (0, a.jsx)(c.Text, {
                                          variant: 'text-xxs/medium',
                                          className: x.headerValue,
                                          children: (0, b.s)({
                                              statisticId: N,
                                              sortDesc: C,
                                              aggregationType: null == O ? void 0 : O.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, a.jsxs)(c.ScrollerNone, {
                                  className: x.rows,
                                  children: [
                                      m.map((e) =>
                                          (0, s.createElement)(B, {
                                              ...e,
                                              key: e.userId,
                                              guildId: n.guild_id,
                                              locale: l,
                                              leaderboard: n,
                                              trackRankingItemInteraction: i
                                          })
                                      ),
                                      T ? (0, a.jsx)(G, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function U(e) {
    let { leaderboard: n } = e,
        r = (0, y.K)(n);
    return (0, a.jsx)(N.z, {
        imageUrl: r,
        children: (0, a.jsxs)('span', {
            className: x.emptyTitleContainer,
            children: [
                (0, a.jsx)(c.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: x.emptyTitle,
                    children: L.intl.string(L.t.BfRGk5)
                }),
                (0, a.jsx)(c.LeagueOfLegendsBrandIcon, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    className: l()(x.leagueIcon, x.emptyCrownIcon)
                })
            ]
        })
    });
}
function B(e) {
    let { userId: n, rank: r, value: i, guildId: o, previousRank: l, locale: f, leaderboard: _, trackRankingItemInteraction: h } = e,
        p = (0, u.e7)([g.default], () => g.default.getUser(n)),
        E = v.ZP.getName(o, void 0, p),
        b = null != l && l > r,
        [y, S] = s.useState('default'),
        A = (0, u.e7)([m.Z], () => {
            let e = m.Z.getPrimaryActivity(n);
            return (null == e ? void 0 : e.application_id) != null && O.T.includes(e.application_id);
        }),
        { generatingImage: N, generateImage: w } = (0, d.d)({
            renderComponent: (e) =>
                (0, a.jsx)(R.Z, {
                    ...e,
                    userId: n,
                    leaderboard: _,
                    guildId: o
                }),
            imageOptions: { pixelRatio: 4 }
        }),
        P = async () => {
            try {
                let e = await w();
                await T.ZP.copyImageBlob(e, M), S('copied'), null == h || h(D.xP.COPIED_LEADERBOARD_ROW);
            } catch (e) {
                S('error');
            }
        },
        k = (0, a.jsx)(c.Text, {
            className: x.tooltip,
            variant: 'text-sm/medium',
            children:
                'copied' === y
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(c.CheckmarkSmallBoldIcon, {
                                  size: 'xs',
                                  color: c.tokens.colors.STATUS_POSITIVE
                              }),
                              L.intl.string(L.t.ZO0ku7)
                          ]
                      })
                    : 'error' === y
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(c.XSmallBoldIcon, {
                                    size: 'xs',
                                    color: c.tokens.colors.STATUS_DANGER
                                }),
                                L.intl.string(L.t.j2d6Ki)
                            ]
                        })
                      : (0, a.jsx)(a.Fragment, { children: L.intl.string(L.t.mikfoa) })
        });
    return (0, a.jsxs)('div', {
        className: x.userRow,
        children: [
            b ? (0, a.jsx)('div', { className: x.rankChangeIndicator }) : null,
            (0, a.jsx)('div', {
                className: x.userRank,
                children:
                    r <= 3
                        ? (0, a.jsx)(C._, { rank: r })
                        : (0, a.jsx)(c.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: r
                          })
            }),
            (0, a.jsxs)('div', {
                className: x.userPlayer,
                children: [
                    (0, a.jsx)(c.Avatar, {
                        src: null == p ? void 0 : p.getAvatarURL(o, 16),
                        size: c.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, a.jsx)(c.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, a.jsx)(c.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: E
                    }),
                    1 === r
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(c.Spacer, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, a.jsx)(c.LeagueOfLegendsBrandIcon, {
                                      size: 'custom',
                                      width: 14,
                                      height: 14
                                  })
                              ]
                          })
                        : null,
                    b ? (0, a.jsx)(Z, { rankChange: l - r }) : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: x.badgesContainer,
                children: [
                    A &&
                        (0, a.jsx)(c.GameControllerIcon, {
                            size: 'xs',
                            color: c.tokens.colors.TEXT_POSITIVE,
                            className: x.liveIcon
                        }),
                    I.isPlatformEmbedded &&
                        (0, a.jsx)(c.Tooltip, {
                            text: k,
                            'aria-label': !1,
                            shouldShow: !N,
                            onTooltipHide: () => S('default'),
                            children: (e) =>
                                (0, a.jsx)(c.Clickable, {
                                    ...e,
                                    onClick: N ? void 0 : P,
                                    'aria-busy': N,
                                    className: x.copyLinkContainer,
                                    children: N
                                        ? (0, a.jsx)(c.Spinner, {
                                              type: c.Spinner.Type.SPINNING_CIRCLE_SIMPLE,
                                              className: x.copySpinner
                                          })
                                        : (0, a.jsx)(c.LinkIcon, {
                                              size: 'xs',
                                              className: x.copyLink
                                          })
                                })
                        })
                ]
            }),
            (0, a.jsx)(c.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                tabularNumbers: !0,
                children: i.toLocaleString(f)
            })
        ]
    });
}
function G() {
    return (0, a.jsxs)('div', {
        className: x.joinLeaderboardCTAContainer,
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: x.joinLeaderboardCTA,
                children: L.intl.string(L.t.BfRGk5)
            }),
            (0, a.jsx)(c.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: x.leagueIcon
            })
        ]
    });
}
function Z(e) {
    let { rankChange: n } = e;
    return (0, a.jsxs)('div', {
        className: x.rankChangeBadge,
        children: [
            (0, a.jsx)(c.ArrowSmallUpIcon, {
                size: 'xxs',
                color: c.tokens.colors.TEXT_MUTED
            }),
            (0, a.jsx)(c.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: n
            })
        ]
    });
}
