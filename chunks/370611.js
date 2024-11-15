n.d(t, {
    Z: function () {
        return L;
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
    d = n(134432),
    f = n(706454),
    _ = n(314897),
    p = n(158776),
    h = n(594174),
    m = n(302221),
    g = n(5192),
    E = n(358085),
    v = n(998502),
    b = n(528567),
    I = n(371583),
    S = n(246627),
    T = n(249268),
    y = n(864138),
    A = n(473188),
    N = n(169080),
    C = n(463031),
    R = n(206583),
    O = n(388032),
    D = n(512366);
function L(e) {
    let { leaderboard: t, previewMode: n = !1, trackRankingItemInteraction: a } = e,
        s = (0, o.e7)([_.default], () => _.default.getId()),
        u = (0, o.e7)([f.default], () => f.default.locale),
        { rankChanges: p } = (0, S.Z)({
            guildId: t.guild_id,
            leaderboardId: t.leaderboard_id,
            intervalStart: t.interval_start
        }),
        h = i.useMemo(() => {
            let e = new Map();
            p.forEach((t) => {
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
        }, [t, p]),
        g = (0, I.K)(t),
        { primaryColor: E } = (0, c.Z)(g),
        v = i.useMemo(() => {
            let e = (0, m.oo)(E),
                t = {
                    ...(0, m.pz)(e.r, e.g, e.b),
                    l: 15
                };
            return (0, m.ZJ)(t.h, t.s, t.l);
        }, [E]),
        y = i.useMemo(() => null == h.find((e) => e.userId === s) && h.length <= 10, [h, s]);
    if (
        (i.useEffect(() => {
            N.M.forEach((e) => (0, d.po)(e));
        }),
        0 === t.users.length)
    )
        return (0, r.jsx)(x, { leaderboard: t });
    let { sort_by_statistic_id: A, sort_desc: C } = t.guild_settings,
        R = t.settings.statistics[A];
    return (0, r.jsxs)('div', {
        className: D.container,
        style: { background: v },
        children: [
            (0, r.jsx)(T.Z, {
                userId: h[0].userId,
                leaderboard: t
            }),
            n
                ? null
                : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)('div', {
                          className: D.table,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: D.headerRow,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: D.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: D.headerPlayer,
                                          children: O.intl.string(O.t['6ii1+/'])
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: D.headerValue,
                                          children: (0, b.s)({
                                              statisticId: A,
                                              sortDesc: C,
                                              aggregationType: null == R ? void 0 : R.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(l.ScrollerNone, {
                                  className: D.rows,
                                  children: [
                                      h.map((e) =>
                                          (0, i.createElement)(w, {
                                              ...e,
                                              key: e.userId,
                                              guildId: t.guild_id,
                                              locale: u,
                                              leaderboard: t,
                                              trackRankingItemInteraction: a
                                          })
                                      ),
                                      y ? (0, r.jsx)(M, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function x(e) {
    let { leaderboard: t } = e,
        n = (0, I.K)(t);
    return (0, r.jsx)(y.z, {
        imageUrl: n,
        children: (0, r.jsxs)('span', {
            className: D.emptyTitleContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: D.emptyTitle,
                    children: O.intl.string(O.t.BfRGk5)
                }),
                (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    className: s()(D.leagueIcon, D.emptyCrownIcon)
                })
            ]
        })
    });
}
function w(e) {
    let { userId: t, rank: n, value: a, guildId: s, previousRank: c, locale: d, leaderboard: f, trackRankingItemInteraction: _ } = e,
        m = (0, o.e7)([h.default], () => h.default.getUser(t)),
        b = g.ZP.getName(s, void 0, m),
        I = null != c && c > n,
        [S, T] = i.useState('default'),
        y = (0, o.e7)([p.Z], () => {
            let e = p.Z.getPrimaryActivity(t);
            return (null == e ? void 0 : e.application_id) != null && C.T.includes(e.application_id);
        }),
        { generatingImage: L, generateImage: x } = (0, u.d)({
            renderComponent: (e) =>
                (0, r.jsx)(N.Z, {
                    ...e,
                    userId: t,
                    leaderboard: f,
                    guildId: s
                }),
            imageOptions: { pixelRatio: 4 }
        }),
        w = async () => {
            try {
                let e = await x();
                await v.ZP.copyImageBlob(e, 'leaderboard.png'), T('copied'), null == _ || _(R.xP.COPIED_LEADERBOARD_ROW);
            } catch (e) {
                T('error');
            }
        },
        M = (0, r.jsx)(l.Text, {
            className: D.tooltip,
            variant: 'text-sm/medium',
            children:
                'copied' === S
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.CheckmarkSmallBoldIcon, {
                                  size: 'xs',
                                  color: l.tokens.colors.STATUS_POSITIVE
                              }),
                              O.intl.string(O.t.ZO0ku7)
                          ]
                      })
                    : 'error' === S
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.XSmallBoldIcon, {
                                    size: 'xs',
                                    color: l.tokens.colors.STATUS_DANGER
                                }),
                                O.intl.string(O.t.j2d6Ki)
                            ]
                        })
                      : (0, r.jsx)(r.Fragment, { children: O.intl.string(O.t.mikfoa) })
        });
    return (0, r.jsxs)('div', {
        className: D.userRow,
        children: [
            I ? (0, r.jsx)('div', { className: D.rankChangeIndicator }) : null,
            (0, r.jsx)('div', {
                className: D.userRank,
                children:
                    n <= 3
                        ? (0, r.jsx)(A._, { rank: n })
                        : (0, r.jsx)(l.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: n
                          })
            }),
            (0, r.jsxs)('div', {
                className: D.userPlayer,
                children: [
                    (0, r.jsx)(l.Avatar, {
                        src: null == m ? void 0 : m.getAvatarURL(s, 16),
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
                        children: b
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
                    I ? (0, r.jsx)(P, { rankChange: c - n }) : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: D.badgesContainer,
                children: [
                    y &&
                        (0, r.jsx)(l.GameControllerIcon, {
                            size: 'xs',
                            color: l.tokens.colors.TEXT_POSITIVE,
                            className: D.liveIcon
                        }),
                    E.isPlatformEmbedded &&
                        (0, r.jsx)(l.Tooltip, {
                            text: M,
                            'aria-label': !1,
                            shouldShow: !L,
                            onTooltipHide: () => T('default'),
                            children: (e) =>
                                (0, r.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: L ? void 0 : w,
                                    'aria-busy': L,
                                    className: D.copyLinkContainer,
                                    children: L
                                        ? (0, r.jsx)(l.Spinner, {
                                              type: l.Spinner.Type.SPINNING_CIRCLE_SIMPLE,
                                              className: D.copySpinner
                                          })
                                        : (0, r.jsx)(l.LinkIcon, {
                                              size: 'xs',
                                              className: D.copyLink
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
function M() {
    return (0, r.jsxs)('div', {
        className: D.joinLeaderboardCTAContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: D.joinLeaderboardCTA,
                children: O.intl.string(O.t.BfRGk5)
            }),
            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: D.leagueIcon
            })
        ]
    });
}
function P(e) {
    let { rankChange: t } = e;
    return (0, r.jsxs)('div', {
        className: D.rankChangeBadge,
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
