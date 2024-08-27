n.d(t, {
    Bj: function () {
        return a;
    },
    s: function () {
        return x;
    }
}),
    n(47120);
var i,
    a,
    s,
    r,
    l = n(735250),
    o = n(470079),
    c = n(120356),
    d = n.n(c),
    u = n(143927),
    _ = n(442837),
    h = n(481060),
    E = n(110924),
    m = n(970606),
    I = n(594174),
    g = n(823379),
    p = n(51144),
    T = n(945124),
    S = n(231467),
    f = n(301544),
    C = n(931515),
    N = n(286083),
    A = n(207796),
    v = n(777734),
    Z = n(976757),
    L = n(981631),
    O = n(689938),
    R = n(266489);
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === A.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
((s = i || (i = {})).TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.PAGINATION = 'pagination'), (s.HEADER_SPACER = 'header_spacer'), ((r = a || (a = {})).DEFAULT = 'default'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
t.ZP = o.memo(function (e) {
    var t, n, i, a, s;
    let { width: r, paddingVertical: c = 16, paddingHorizontal: x = 32, variant: b = 'default', onUpdatePage: P } = e,
        M = o.useMemo(() => Math.max(Math.min(null != r ? r : 1024, 1300) - 2 * x, 0), [r, x]),
        D = o.useMemo(() => {
            if (0 === M) return 1;
            let e = M / 256,
                t = M / 376,
                n = M / e,
                i = M / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [M]),
        { loaded: y, clans: j, searchResult: U, searchCriteria: G } = (0, C.ML)(D, 'saved_guilds' === b),
        k = (0, A.GN)((e) => e.selectedTraits, u.Z),
        w = (0, A.GN)((e) => e.selectedGames, u.Z),
        B = (0, E.Z)(U),
        { currentPage: H, updatePage: V, totalItems: F, pageSize: Y } = (0, N.$)(),
        W = (0, _.e7)([I.default], () => I.default.getCurrentUser());
    o.useEffect(() => {
        if (null != U && !!(0, Z.Pw)(U)) (!(null != B && (0, Z.Pw)(B)) || !(B.loadedAt >= U.loadedAt)) && (0, m.Oe)('top_picks', G);
    }, [G, U, B]);
    let z = w.length > 0 || k.length > 0 ? O.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE : null != W ? O.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE_NO_PREFERENCES.format({ name: p.ZP.getName(W) }) : '';
    let K =
            ((t = j),
            (n = D),
            (i = b),
            (a = H),
            (s = z),
            o.useMemo(() => {
                if (null == t) return [];
                switch (i) {
                    case 'saved_guilds':
                        return [
                            {
                                section: 'header_spacer',
                                items: [],
                                sectionHeight: 0,
                                itemHeight: 400,
                                header: null
                            },
                            {
                                section: 'other_guilds',
                                items: t,
                                sectionHeight: 16,
                                itemHeight: 400,
                                header: null,
                                skeletonCount: 4 * n
                            },
                            {
                                section: 'pagination',
                                items: [],
                                sectionHeight: 86,
                                itemHeight: 0
                            }
                        ];
                    case 'default':
                    case 'global_discovery':
                        return [
                            {
                                section: 'top_picks',
                                items: t.slice(0, n),
                                itemHeight: 400,
                                sectionHeight: 24,
                                header: a > 1 ? O.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE : O.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                props: { style: { paddingTop: 8 } },
                                subtitle: a > 1 ? void 0 : s,
                                skeletonCount: n
                            },
                            t.length > n
                                ? {
                                      section: 'other_guilds',
                                      items: t.slice(n),
                                      itemHeight: 400,
                                      sectionHeight: a > 1 ? 0 : 24,
                                      props: { style: { paddingTop: 16 } },
                                      header: a > 1 ? void 0 : O.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                      skeletonCount: 4 * n
                                  }
                                : null,
                            {
                                section: 'pagination',
                                items: [],
                                itemHeight: 0,
                                sectionHeight: 86
                            }
                        ].filter(g.lm);
                    default:
                        return [];
                }
            }, [t, i, n, a, s])),
        q = o.useCallback(
            (e) => {
                V(e),
                    (0, m.Lx)({
                        fromPage: H,
                        toPage: e
                    }),
                    null == P || P();
            },
            [V, P, H]
        ),
        [, Q] = o.useState(new Set()),
        X = o.useMemo(() => new Set(G.games), [G.games]),
        J = o.useCallback(
            (e, t, n, i) => {
                let { items: a } = K[e],
                    s = (H - 1) * Y + (e * D + t),
                    r = a[t];
                null != r && n
                    ? (i.current = setTimeout(
                          () =>
                              Q((e) => {
                                  let t = new Set(e);
                                  return (
                                      t.add(r.id),
                                      t.size > e.size &&
                                          (0, m.CK)({
                                              guildId: r.id,
                                              position: s
                                          }),
                                      t
                                  );
                              }),
                          2000
                      ))
                    : clearTimeout(i.current);
            },
            [K, Q, D, H, Y]
        ),
        $ = o.useCallback(
            (e, t, n) => {
                var i;
                let { items: a } = K[e],
                    s = e * D + t,
                    r = (H - 1) * Y + s,
                    o = a[t];
                return (0, l.jsx)(
                    S.ZP,
                    {
                        clan: o,
                        index: s,
                        position: r,
                        affinity: null !== (i = o.affininty) && void 0 !== i ? i : (0, T.y)(o, G),
                        traitsToHighlight: k,
                        className: R.card,
                        source: L.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: X,
                        onlyAnimateIconOnHover: !0,
                        onVisibilityChange: (n, i) => J(e, t, n, i)
                    },
                    n
                );
            },
            [K, D, H, Y, G, k, X, J]
        ),
        ee = o.useCallback((e) => (0, l.jsx)(f.Z, {}, e), []),
        et = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = K[e];
                switch (i) {
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: R.topPicksSection,
                            children: (0, l.jsx)(v.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                F > Y &&
                                (0, l.jsx)(h.Paginator, {
                                    className: d()(R.paginationInput),
                                    totalCount: F,
                                    pageSize: Y,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: H,
                                    onPageChange: q
                                })
                        });
                    case 'header_spacer':
                        return (0, l.jsx)('div', { className: R.headerSpacer });
                    default:
                        if (null == t) return null;
                        return (0, l.jsx)(v.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [H, q, Y, K, F]
        ),
        en = o.useMemo(
            () =>
                y
                    ? K.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : K.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [y, K]
        );
    return 0 === j.length && y && 'saved_guilds' === b
        ? (0, l.jsxs)('div', {
              className: R.emptySavedGuilds,
              children: [
                  (0, l.jsx)(h.Heading, {
                      variant: 'heading-md/medium',
                      color: 'header-primary',
                      children: O.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                  }),
                  (0, l.jsx)(h.Text, {
                      variant: 'text-sm/medium',
                      color: 'header-secondary',
                      children: O.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                  })
              ]
          })
        : 0 === j.length && y
          ? (0, l.jsxs)('div', {
                className: R.emptySavedGuilds,
                children: [
                    (0, l.jsx)(h.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: O.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                    }),
                    (0, l.jsx)(h.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: O.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                    })
                ]
            })
          : (0, l.jsx)('div', {
                className: R.sectionContainer,
                style: {
                    paddingTop: c,
                    paddingLeft: x,
                    paddingRight: x,
                    paddingBottom: c,
                    width: 'calc(100% - '.concat(2 * x, 'px)'),
                    gap: ''.concat(16, 'px')
                },
                children: en.map((e, t) => {
                    var n, i;
                    let a = K[t],
                        s = et(t);
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: R.section,
                            style: { gap: ''.concat(16, 'px') },
                            children: [
                                null != s &&
                                    (0, l.jsx)('div', {
                                        ...a.props,
                                        className: d()(R.sectionHeader, null === (n = a.props) || void 0 === n ? void 0 : n.className),
                                        style: {
                                            height: ''.concat(a.sectionHeight, 'px'),
                                            ...(null === (i = a.props) || void 0 === i ? void 0 : i.style)
                                        },
                                        children: s
                                    }),
                                e > 0 &&
                                    (0, l.jsx)('div', {
                                        className: R.sectionContent,
                                        style: { gridTemplateColumns: 'repeat('.concat(D, ', minmax(252px, 1fr))') },
                                        children: Array.from({ length: e }).map((e, n) => {
                                            let i = ''.concat(t, '-').concat(n);
                                            return y ? $(t, n, i) : ee(i);
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            });
});
