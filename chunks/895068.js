n.d(t, {
    Bj: function () {
        return a;
    },
    s: function () {
        return b;
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
    u = n(180081),
    _ = n(143927),
    h = n(442837),
    E = n(481060),
    m = n(110924),
    I = n(970606),
    g = n(594174),
    p = n(823379),
    T = n(51144),
    f = n(945124),
    S = n(231467),
    C = n(301544),
    N = n(931515),
    A = n(286083),
    v = n(207796),
    L = n(777734),
    Z = n(976757),
    O = n(981631),
    R = n(689938),
    x = n(266489);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === v.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
((s = i || (i = {})).TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.PAGINATION = 'pagination'), (s.HEADER_SPACER = 'header_spacer'), ((r = a || (a = {})).DEFAULT = 'default'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
let P = {
        mass: 2,
        tension: 230,
        friction: 35,
        clamp: !1
    },
    M = {
        mass: 1,
        tension: 60,
        friction: 15,
        clamp: !0
    };
function D(e) {
    var t;
    let { clan: n, entranceDelay: i, hide: a, searchCriteria: s, className: r, source: o, ...c } = e,
        _ = (0, E.useSpring)({
            config: P,
            from: { translateY: -6 },
            to: { translateY: 0 },
            delay: i
        }),
        h = (0, E.useSpring)({
            config: M,
            from: { opacity: 0 },
            to: { opacity: 1 },
            delay: i
        });
    return (0, l.jsx)(u.animated.div, {
        style: {
            translateY: _.translateY,
            opacity: a ? 0 : h.opacity
        },
        children: (0, l.jsx)(
            S.ZP,
            {
                clan: n,
                affinity: null !== (t = n.affininty) && void 0 !== t ? t : (0, f.y)(n, s),
                className: d()(x.card, r),
                source: null != o ? o : O.jXE.DISCOVER_SEARCH,
                onlyAnimateIconOnHover: !0,
                ...c
            },
            n.id
        )
    });
}
t.ZP = o.memo(function (e) {
    var t, n, i, a, s, r;
    let { width: c, paddingVertical: u = 16, paddingHorizontal: f = 32, variant: S = 'default', onUpdatePage: O } = e,
        b = o.useMemo(() => Math.max(Math.min(null != c ? c : 1024, 1300) - 2 * f, 0), [c, f]),
        P = o.useMemo(() => {
            if (0 === b) return 1;
            let e = b / 256,
                t = b / 376,
                n = b / e,
                i = b / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [b]),
        { loaded: M, clans: y, searchResult: j, searchCriteria: U } = (0, N.ML)(P, 'saved_guilds' === S),
        G = (0, v.GN)((e) => e.selectedTraits, _.Z),
        k = (0, v.GN)((e) => e.selectedGames, _.Z),
        w = (0, m.Z)(j),
        { currentPage: B, updatePage: H, totalItems: V, pageSize: F } = (0, A.$)(),
        Y = (0, h.e7)([g.default], () => g.default.getCurrentUser());
    o.useEffect(() => {
        if (null != j && !!(0, Z.Pw)(j)) (!(null != w && (0, Z.Pw)(w)) || !(w.loadedAt >= j.loadedAt)) && (0, I.Oe)('top_picks', U);
    }, [U, j, w]);
    let W = k.length > 0 || G.length > 0 ? R.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE : null != Y ? R.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE_NO_PREFERENCES.format({ name: T.ZP.getName(Y) }) : '';
    let z =
            ((t = y),
            (n = P),
            (i = S),
            (a = B),
            (s = W),
            (r = M),
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
                        ].filter(p.lm);
                    default:
                        return [];
                }
            }, [t, i, n, a, s, r])),
        K = o.useCallback(
            (e) => {
                H(e),
                    (0, I.Lx)({
                        fromPage: B,
                        toPage: e
                    }),
                    null == O || O();
            },
            [H, O, B]
        ),
        [, q] = o.useState(new Set()),
        Q = o.useMemo(() => new Set(U.games), [U.games]),
        X = o.useCallback(
            (e, t, n, i) => {
                let { items: a } = z[e],
                    s = (B - 1) * F + (e * P + t),
                    r = a[t];
                null != r && n
                    ? (i.current = setTimeout(
                          () =>
                              q((e) => {
                                  let t = new Set(e);
                                  return (
                                      t.add(r.id),
                                      t.size > e.size &&
                                          (0, I.CK)({
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
            [z, q, P, B, F]
        ),
        J = o.useContext(E.AccessibilityPreferencesContext).reducedMotion.enabled,
        $ = o.useCallback(
            (e, t, n) => {
                let { items: i } = z[e],
                    a = e * P + t,
                    s = (B - 1) * F + a,
                    r = i[t],
                    o = J ? 0 : 125 + 100 * Math.floor(a / P);
                return (0, l.jsx)(
                    D,
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
                    ''.concat(r.id, ':').concat(S)
                );
            },
            [z, P, B, F, J, S, U, G, Q, X]
        ),
        ee = o.useCallback((e) => (0, l.jsx)(C.Z, {}, e), []),
        et = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = z[e];
                switch (i) {
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: x.topPicksSection,
                            children: (0, l.jsx)(L.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                V > F &&
                                (0, l.jsx)(E.Paginator, {
                                    className: d()(x.paginationInput),
                                    totalCount: V,
                                    pageSize: F,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: B,
                                    onPageChange: K
                                })
                        });
                    case 'header_spacer':
                        return (0, l.jsx)('div', { className: x.headerSpacer });
                    default:
                        if (null == t) return null;
                        return (0, l.jsx)(L.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [B, K, F, z, V]
        ),
        en = o.useMemo(
            () =>
                M
                    ? z.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : z.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [M, z]
        );
    return 0 === y.length && M && 'saved_guilds' === S
        ? (0, l.jsxs)('div', {
              className: x.emptySavedGuilds,
              children: [
                  (0, l.jsx)(E.Heading, {
                      variant: 'heading-md/medium',
                      color: 'header-primary',
                      children: R.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                  }),
                  (0, l.jsx)(E.Text, {
                      variant: 'text-sm/medium',
                      color: 'header-secondary',
                      children: R.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                  })
              ]
          })
        : 0 === y.length && M
          ? (0, l.jsxs)('div', {
                className: x.emptySavedGuilds,
                children: [
                    (0, l.jsx)(E.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: R.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                    }),
                    (0, l.jsx)(E.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: R.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                    })
                ]
            })
          : (0, l.jsx)('div', {
                className: x.sectionContainer,
                style: {
                    paddingTop: u,
                    paddingLeft: f,
                    paddingRight: f,
                    paddingBottom: u,
                    width: 'calc(100% - '.concat(2 * f, 'px)'),
                    gap: ''.concat(16, 'px')
                },
                children: en.map((e, t) => {
                    var n, i;
                    let a = z[t],
                        s = et(t);
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: x.section,
                            style: { gap: ''.concat(16, 'px') },
                            children: [
                                null != s &&
                                    (0, l.jsx)('div', {
                                        ...a.props,
                                        className: d()(x.sectionHeader, null === (n = a.props) || void 0 === n ? void 0 : n.className),
                                        style: {
                                            height: ''.concat(a.sectionHeight, 'px'),
                                            ...(null === (i = a.props) || void 0 === i ? void 0 : i.style)
                                        },
                                        children: s
                                    }),
                                e > 0 &&
                                    (0, l.jsx)('div', {
                                        className: x.sectionContent,
                                        style: { gridTemplateColumns: 'repeat('.concat(P, ', minmax(252px, 1fr))') },
                                        children: Array.from({ length: e }).map((e, n) => {
                                            let i = ''.concat(t, '-').concat(n);
                                            return M ? $(t, n, null == c) : ee(i);
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            });
});
