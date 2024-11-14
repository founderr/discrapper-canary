n.d(t, {
    Z: function () {
        return D;
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
    I = n(528567),
    b = n(371583),
    S = n(246627),
    T = n(249268),
    y = n(864138),
    A = n(473188),
    N = n(169080),
    C = n(463031),
    R = n(388032),
    O = n(881894);
function D(e) {
    let { leaderboard: t, previewMode: n = !1 } = e,
        a = (0, o.e7)([_.default], () => _.default.getId()),
        s = (0, o.e7)([f.default], () => f.default.locale),
        { rankChanges: u } = (0, S.Z)({
            guildId: t.guild_id,
            leaderboardId: t.leaderboard_id,
            intervalStart: t.interval_start
        }),
        p = i.useMemo(() => {
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
        h = (0, b.K)(t),
        { primaryColor: g } = (0, c.Z)(h),
        E = i.useMemo(() => {
            let e = (0, m.oo)(g),
                t = {
                    ...(0, m.pz)(e.r, e.g, e.b),
                    l: 15
                };
            return (0, m.ZJ)(t.h, t.s, t.l);
        }, [g]),
        v = i.useMemo(() => null == p.find((e) => e.userId === a) && p.length <= 10, [p, a]);
    if (
        (i.useEffect(() => {
            N.M.forEach((e) => (0, d.po)(e));
        }),
        0 === t.users.length)
    )
        return (0, r.jsx)(L, { leaderboard: t });
    let { sort_by_statistic_id: y, sort_desc: A } = t.guild_settings,
        C = t.settings.statistics[y];
    return (0, r.jsxs)('div', {
        className: O.container,
        style: { background: E },
        children: [
            (0, r.jsx)(T.Z, {
                userId: p[0].userId,
                leaderboard: t
            }),
            n
                ? null
                : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)('div', {
                          className: O.table,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: O.headerRow,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: O.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: O.headerPlayer,
                                          children: R.intl.string(R.t['6ii1+/'])
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: O.headerValue,
                                          children: (0, I.s)({
                                              statisticId: y,
                                              sortDesc: A,
                                              aggregationType: null == C ? void 0 : C.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(l.ScrollerNone, {
                                  className: O.rows,
                                  children: [
                                      p.map((e) =>
                                          (0, i.createElement)(x, {
                                              ...e,
                                              key: e.userId,
                                              guildId: t.guild_id,
                                              locale: s,
                                              leaderboard: t
                                          })
                                      ),
                                      v ? (0, r.jsx)(w, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function L(e) {
    let { leaderboard: t } = e,
        n = (0, b.K)(t);
    return (0, r.jsx)(y.z, {
        imageUrl: n,
        children: (0, r.jsxs)('span', {
            className: O.emptyTitleContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: O.emptyTitle,
                    children: R.intl.string(R.t.BfRGk5)
                }),
                (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    className: s()(O.leagueIcon, O.emptyCrownIcon)
                })
            ]
        })
    });
}
function x(e) {
    let { userId: t, rank: n, value: a, guildId: s, previousRank: c, locale: d, leaderboard: f } = e,
        _ = (0, o.e7)([h.default], () => h.default.getUser(t)),
        m = g.ZP.getName(s, void 0, _),
        I = null != c && c > n,
        [b, S] = i.useState('default'),
        T = (0, o.e7)([p.Z], () => {
            let e = p.Z.getPrimaryActivity(t);
            return (null == e ? void 0 : e.application_id) != null && C.T.includes(e.application_id);
        }),
        { generatingImage: y, generateImage: D } = (0, u.d)({
            renderComponent: (e) =>
                (0, r.jsx)(N.Z, {
                    ...e,
                    userId: t,
                    leaderboard: f,
                    guildId: s
                }),
            imageOptions: { pixelRatio: 4 }
        }),
        L = async () => {
            try {
                let e = await D();
                await v.ZP.copyImageBlob(e, 'leaderboard.png'), S('copied');
            } catch (e) {
                S('error');
            }
        },
        x = (0, r.jsx)(l.Text, {
            className: O.tooltip,
            variant: 'text-sm/medium',
            children:
                'copied' === b
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.CheckmarkSmallBoldIcon, {
                                  size: 'xs',
                                  color: l.tokens.colors.STATUS_POSITIVE
                              }),
                              R.intl.string(R.t.ZO0ku7)
                          ]
                      })
                    : 'error' === b
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.XSmallBoldIcon, {
                                    size: 'xs',
                                    color: l.tokens.colors.STATUS_DANGER
                                }),
                                R.intl.string(R.t.j2d6Ki)
                            ]
                        })
                      : (0, r.jsx)(r.Fragment, { children: R.intl.string(R.t.mikfoa) })
        });
    return (0, r.jsxs)('div', {
        className: O.userRow,
        children: [
            I ? (0, r.jsx)('div', { className: O.rankChangeIndicator }) : null,
            (0, r.jsx)('div', {
                className: O.userRank,
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
                className: O.userPlayer,
                children: [
                    (0, r.jsx)(l.Avatar, {
                        src: null == _ ? void 0 : _.getAvatarURL(s, 16),
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
                        children: m
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
                    I ? (0, r.jsx)(M, { rankChange: c - n }) : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: O.badgesContainer,
                children: [
                    T &&
                        (0, r.jsx)(l.GameControllerIcon, {
                            size: 'xs',
                            color: l.tokens.colors.TEXT_POSITIVE,
                            className: O.liveIcon
                        }),
                    E.isPlatformEmbedded &&
                        (0, r.jsx)(l.Tooltip, {
                            text: x,
                            'aria-label': !1,
                            shouldShow: !y,
                            onTooltipHide: () => S('default'),
                            children: (e) =>
                                (0, r.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: y ? void 0 : L,
                                    className: O.copyLinkContainer,
                                    children: y
                                        ? (0, r.jsx)(l.Spinner, {
                                              type: l.Spinner.Type.SPINNING_CIRCLE_SIMPLE,
                                              className: O.copySpinner
                                          })
                                        : (0, r.jsx)(l.LinkIcon, {
                                              size: 'xs',
                                              className: O.copyLink
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
function w() {
    return (0, r.jsxs)('div', {
        className: O.joinLeaderboardCTAContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: O.joinLeaderboardCTA,
                children: R.intl.string(R.t.BfRGk5)
            }),
            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: O.leagueIcon
            })
        ]
    });
}
function M(e) {
    let { rankChange: t } = e;
    return (0, r.jsxs)('div', {
        className: O.rankChangeBadge,
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
