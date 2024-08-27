n.d(t, {
    Bj: function () {
        return a;
    },
    s: function () {
        return R;
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
    E = n(481060),
    h = n(110924),
    m = n(970606),
    I = n(594174),
    g = n(51144),
    p = n(945124),
    T = n(231467),
    S = n(301544),
    f = n(931515),
    C = n(286083),
    N = n(207796),
    A = n(777734),
    v = n(976757),
    Z = n(981631),
    L = n(689938),
    O = n(266489);
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === N.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
((s = i || (i = {})).TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.PAGINATION = 'pagination'), (s.HEADER_SPACER = 'header_spacer'), ((r = a || (a = {})).DEFAULT = 'default'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
t.ZP = o.memo(function (e) {
    var t, n, i, a, s;
    let { width: r, paddingVertical: c = 16, paddingHorizontal: R = 32, variant: x = 'default', onUpdatePage: b } = e,
        P = o.useMemo(() => Math.max(Math.min(null != r ? r : 1024, 1300) - 2 * R, 0), [r, R]),
        M = o.useMemo(() => {
            if (0 === P) return 1;
            let e = P / 256,
                t = P / 376,
                n = P / e,
                i = P / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [P]),
        { loaded: D, clans: y, searchResult: j, searchCriteria: U } = (0, f.ML)(M, 'saved_guilds' === x),
        G = (0, N.GN)((e) => e.selectedTraits, u.Z),
        k = (0, N.GN)((e) => e.selectedGames, u.Z),
        w = (0, h.Z)(j),
        { currentPage: B, updatePage: H, totalItems: V, pageSize: F } = (0, C.$)(),
        Y = (0, _.e7)([I.default], () => I.default.getCurrentUser());
    o.useEffect(() => {
        if (null != j && !!(0, v.Pw)(j)) (!(null != w && (0, v.Pw)(w)) || !(w.loadedAt >= j.loadedAt)) && (0, m.Oe)('top_picks', U);
    }, [U, j, w]);
    let W = k.length > 0 || G.length > 0 ? L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE : null != Y ? L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE_NO_PREFERENCES.format({ name: g.ZP.getName(Y) }) : '';
    let z =
            ((t = y),
            (n = M),
            (i = x),
            (a = B),
            (s = W),
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
                                header: a > 1 ? L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE : L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                props: { style: { paddingTop: 8 } },
                                subtitle: a > 1 ? void 0 : s,
                                skeletonCount: n
                            },
                            {
                                section: 'other_guilds',
                                items: t.slice(n),
                                itemHeight: 400,
                                sectionHeight: a > 1 ? 0 : 24,
                                props: { style: { paddingTop: 16 } },
                                header: a > 1 ? void 0 : L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                skeletonCount: 4 * n
                            },
                            {
                                section: 'pagination',
                                items: [],
                                itemHeight: 0,
                                sectionHeight: 86
                            }
                        ];
                    default:
                        return [];
                }
            }, [t, i, n, a, s])),
        K = o.useCallback(
            (e) => {
                H(e),
                    (0, m.Lx)({
                        fromPage: B,
                        toPage: e
                    }),
                    null == b || b();
            },
            [H, b, B]
        ),
        [, q] = o.useState(new Set()),
        Q = o.useMemo(() => new Set(U.games), [U.games]),
        X = o.useCallback(
            (e, t, n, i) => {
                let { items: a } = z[e],
                    s = (B - 1) * F + (e * M + t),
                    r = a[t];
                null != r && n
                    ? (i.current = setTimeout(
                          () =>
                              q((e) => {
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
            [z, q, M, B, F]
        ),
        J = o.useCallback(
            (e, t, n) => {
                var i;
                let { items: a } = z[e],
                    s = e * M + t,
                    r = (B - 1) * F + s,
                    o = a[t];
                return (0, l.jsx)(
                    T.ZP,
                    {
                        clan: o,
                        index: s,
                        position: r,
                        affinity: null !== (i = o.affininty) && void 0 !== i ? i : (0, p.y)(o, U),
                        traitsToHighlight: G,
                        className: O.card,
                        source: Z.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: Q,
                        onlyAnimateIconOnHover: !0,
                        onVisibilityChange: (n, i) => X(e, t, n, i)
                    },
                    n
                );
            },
            [z, M, B, F, U, G, Q, X]
        ),
        $ = o.useCallback((e) => (0, l.jsx)(S.Z, {}, e), []),
        ee = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = z[e];
                switch (i) {
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: O.topPicksSection,
                            children: (0, l.jsx)(A.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                V > F &&
                                (0, l.jsx)(E.Paginator, {
                                    className: d()(O.paginationInput),
                                    totalCount: V,
                                    pageSize: F,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: B,
                                    onPageChange: K
                                })
                        });
                    case 'header_spacer':
                        return (0, l.jsx)('div', { className: O.headerSpacer });
                    default:
                        if (null == t) return null;
                        return (0, l.jsx)(A.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [B, K, F, z, V]
        ),
        et = o.useMemo(
            () =>
                D
                    ? z.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : z.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [D, z]
        );
    return 0 === y.length && D && 'saved_guilds' === x
        ? (0, l.jsxs)('div', {
              className: O.emptySavedGuilds,
              children: [
                  (0, l.jsx)(E.Heading, {
                      variant: 'heading-md/medium',
                      color: 'header-primary',
                      children: L.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                  }),
                  (0, l.jsx)(E.Text, {
                      variant: 'text-sm/medium',
                      color: 'header-secondary',
                      children: L.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                  })
              ]
          })
        : 0 === y.length && D
          ? (0, l.jsxs)('div', {
                className: O.emptySavedGuilds,
                children: [
                    (0, l.jsx)(E.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: L.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                    }),
                    (0, l.jsx)(E.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: L.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                    })
                ]
            })
          : (0, l.jsx)('div', {
                className: O.sectionContainer,
                style: {
                    paddingTop: c,
                    paddingLeft: R,
                    paddingRight: R,
                    paddingBottom: c,
                    width: 'calc(100% - '.concat(2 * R, 'px)'),
                    gap: ''.concat(16, 'px')
                },
                children: et.map((e, t) => {
                    var n, i;
                    let a = z[t],
                        s = ee(t);
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: O.section,
                            style: { gap: ''.concat(16, 'px') },
                            children: [
                                null != s &&
                                    (0, l.jsx)('div', {
                                        ...a.props,
                                        className: d()(O.sectionHeader, null === (n = a.props) || void 0 === n ? void 0 : n.className),
                                        style: {
                                            height: ''.concat(a.sectionHeight, 'px'),
                                            ...(null === (i = a.props) || void 0 === i ? void 0 : i.style)
                                        },
                                        children: s
                                    }),
                                e > 0 &&
                                    (0, l.jsx)('div', {
                                        className: O.sectionContent,
                                        style: { gridTemplateColumns: 'repeat('.concat(M, ', minmax(252px, 1fr))') },
                                        children: Array.from({ length: e }).map((e, n) => {
                                            let i = ''.concat(t, '-').concat(n);
                                            return D ? J(t, n, i) : $(i);
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            });
});
