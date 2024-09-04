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
    C = n(301544),
    f = n(931515),
    N = n(286083),
    A = n(207796),
    v = n(777734),
    Z = n(976757),
    L = n(981631),
    R = n(689938),
    O = n(266489);
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === A.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
function b(e) {
    var t;
    let { clan: n, entranceDelay: i = 0, hide: a, searchCriteria: s, className: r, source: o, ...c } = e;
    return (0, l.jsx)('div', {
        style: {
            opacity: a ? 0 : void 0,
            animationDelay: ''.concat(i, 'ms')
        },
        className: O.animatedCard,
        children: (0, l.jsx)(
            S.ZP,
            {
                clan: n,
                affinity: null !== (t = n.affininty) && void 0 !== t ? t : (0, T.y)(n, s),
                className: d()(O.card, r),
                source: null != o ? o : L.jXE.DISCOVER_SEARCH,
                onlyAnimateIconOnHover: !0,
                ...c
            },
            n.id
        )
    });
}
((s = i || (i = {})).TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.PAGINATION = 'pagination'), (s.HEADER_SPACER = 'header_spacer'), ((r = a || (a = {})).DEFAULT = 'default'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
t.ZP = o.memo(function (e) {
    var t, n, i, a, s, r;
    let { width: c, paddingVertical: T = 16, paddingHorizontal: S = 32, variant: L = 'default', onUpdatePage: x } = e,
        P = o.useMemo(() => Math.max(Math.min(null != c ? c : 1024, 1300) - 2 * S, 0), [c, S]),
        M = o.useMemo(() => {
            if (0 === P) return 1;
            let e = P / 256,
                t = P / 376,
                n = P / e,
                i = P / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [P]),
        { loaded: D, clans: y, searchResult: j, searchCriteria: U } = (0, f.ML)(M, 'saved_guilds' === L),
        G = (0, A.GN)((e) => e.selectedTraits, u.Z),
        w = (0, A.GN)((e) => e.selectedGames, u.Z),
        k = (0, E.Z)(j),
        { currentPage: B, updatePage: H, totalItems: V, pageSize: F } = (0, N.$)(),
        Y = (0, _.e7)([I.default], () => I.default.getCurrentUser());
    o.useEffect(() => {
        if (null != j && !!(0, Z.Pw)(j)) (!(null != k && (0, Z.Pw)(k)) || !(k.loadedAt >= j.loadedAt)) && (0, m.Oe)('top_picks', U);
    }, [U, j, k]);
    let W = w.length > 0 || G.length > 0 ? R.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE : null != Y ? R.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE_NO_PREFERENCES.format({ name: p.ZP.getName(Y) }) : '';
    let z =
            ((t = y),
            (n = M),
            (i = L),
            (a = B),
            (s = W),
            (r = D),
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
                                header: a > 1 ? R.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE : R.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                props: { style: { paddingTop: 8 } },
                                subtitle: a > 1 ? void 0 : s,
                                skeletonCount: n
                            },
                            !r || t.length > n
                                ? {
                                      section: 'other_guilds',
                                      items: t.slice(n),
                                      itemHeight: 400,
                                      sectionHeight: a > 1 ? 0 : 24,
                                      props: { style: { paddingTop: 16 } },
                                      header: a > 1 ? void 0 : R.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
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
            }, [t, i, n, a, s, r])),
        K = o.useCallback(
            (e) => {
                H(e),
                    (0, m.Lx)({
                        fromPage: B,
                        toPage: e
                    }),
                    null == x || x();
            },
            [H, x, B]
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
        J = o.useContext(h.AccessibilityPreferencesContext).reducedMotion.enabled,
        $ = o.useCallback(
            (e, t, n) => {
                let { items: i } = z[e],
                    a = e * M + t,
                    s = (B - 1) * F + a,
                    r = i[t],
                    o = J ? 0 : Math.min(125 * Math.floor(a / M) + (a % M) * 25, 1000);
                return (0, l.jsx)(
                    b,
                    {
                        clan: r,
                        index: a,
                        position: s,
                        searchCriteria: U,
                        traitsToHighlight: G,
                        prioritizedGameIds: Q,
                        onVisibilityChange: (n, i) => X(e, t, n, i),
                        hide: n,
                        entranceDelay: o
                    },
                    ''.concat(r.id, ':').concat(L)
                );
            },
            [z, M, B, F, J, L, U, G, Q, X]
        ),
        ee = o.useCallback((e) => (0, l.jsx)(C.Z, { style: { transform: 'translateY(-6px)' } }, e), []),
        et = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = z[e];
                switch (i) {
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: O.topPicksSection,
                            children: (0, l.jsx)(v.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                V > F &&
                                (0, l.jsx)(h.Paginator, {
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
                        return (0, l.jsx)(v.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [B, K, F, z, V]
        ),
        en = o.useMemo(
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
    return 0 === y.length && D
        ? (0, l.jsx)('div', {
              className: O.emptySavedGuilds,
              children:
                  'saved_guilds' === L
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(h.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: R.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                                }),
                                (0, l.jsx)(h.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: R.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                                })
                            ]
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(h.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: R.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                                }),
                                (0, l.jsx)(h.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: R.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                                })
                            ]
                        })
          })
        : (0, l.jsx)('div', {
              className: O.sectionContainer,
              style: {
                  paddingTop: T,
                  paddingLeft: S,
                  paddingRight: S,
                  paddingBottom: T,
                  width: 'calc(100% - '.concat(2 * S, 'px)'),
                  gap: ''.concat(16, 'px')
              },
              children: en.map((e, t) => {
                  var n, i;
                  let a = z[t],
                      s = et(t);
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
                                          return D ? $(t, n, null == c) : ee(i);
                                      })
                                  })
                          ]
                      },
                      t
                  );
              })
          });
});
