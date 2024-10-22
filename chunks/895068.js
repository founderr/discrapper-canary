n.d(t, {
    Bj: function () {
        return a;
    },
    s: function () {
        return M;
    }
}),
    n(47120);
var i,
    a,
    s,
    r,
    l = n(200651),
    o = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(782690),
    _ = n(442837),
    E = n(481060),
    h = n(110924),
    m = n(970606),
    I = n(216742),
    p = n(594174),
    g = n(823379),
    T = n(51144),
    f = n(945124),
    S = n(231467),
    C = n(301544),
    N = n(931515),
    A = n(286083),
    v = n(207796),
    Z = n(777734),
    L = n(976757),
    R = n(981631),
    O = n(689938),
    x = n(641388),
    b = n(882008);
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === v.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
function P(e) {
    var t;
    let { clan: n, entranceDelay: i = 0, hide: a, searchCriteria: s, className: r, source: o, ...c } = e;
    return (0, l.jsx)('div', {
        style: {
            opacity: a ? 0 : void 0,
            animationDelay: ''.concat(i, 'ms')
        },
        className: x.animatedCard,
        children: (0, l.jsx)(
            S.ZP,
            {
                clan: n,
                affinity: null !== (t = n.affininty) && void 0 !== t ? t : (0, f.y)(n, s),
                className: d()(x.card, r),
                source: null != o ? o : R.jXE.DISCOVER_SEARCH,
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
    let { width: c, paddingVertical: f = 16, paddingHorizontal: S = 32, variant: R = 'default', onUpdatePage: M } = e,
        D = o.useMemo(() => Math.max(Math.min(null != c ? c : 1024, 1300) - 2 * S, 0), [c, S]),
        y = o.useMemo(() => {
            if (0 === D) return 1;
            let e = D / 256,
                t = D / 376,
                n = D / e,
                i = D / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [D]),
        { loaded: j, clans: U, searchResult: G, searchCriteria: w, hasError: k } = (0, N.ML)(y, 'saved_guilds' === R),
        B = (0, v.GN)((e) => e.selectedTraits, u.Z),
        H = (0, v.GN)((e) => e.selectedGames, u.Z),
        V = (0, h.Z)(G),
        { currentPage: F, updatePage: Y, totalItems: z, pageSize: W } = (0, A.a)(),
        K = (0, _.e7)([p.default], () => p.default.getCurrentUser()),
        { treatment: q } = (0, I.I7)();
    o.useEffect(() => {
        if (null != G && !!(0, L.Pw)(G)) (!(null != V && (0, L.Pw)(V)) || !(V.loadedAt >= G.loadedAt)) && (0, m.Oe)('top_picks', w, q);
    }, [w, G, V, q]);
    let Q = H.length > 0 || B.length > 0 ? O.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE : null != K ? O.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE_NO_PREFERENCES.format({ name: T.ZP.getName(K) }) : '';
    let X =
            ((t = U),
            (n = y),
            (i = R),
            (a = F),
            (s = Q),
            (r = j),
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
                                header: a > 1 ? O.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE : O.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
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
            }, [t, i, n, a, s, r])),
        J = o.useCallback(
            (e) => {
                Y(e),
                    (0, m.Lx)({
                        fromPage: F,
                        toPage: e
                    }),
                    null == M || M();
            },
            [Y, M, F]
        ),
        [, $] = o.useState(new Set()),
        ee = o.useMemo(() => new Set(w.games), [w.games]),
        et = o.useCallback(
            (e, t, n, i) => {
                let { items: a } = X[e],
                    s = (F - 1) * W + (e * y + t),
                    r = a[t];
                null != r && n
                    ? (i.current = setTimeout(
                          () =>
                              $((e) => {
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
            [X, $, y, F, W]
        ),
        en = o.useContext(E.AccessibilityPreferencesContext).reducedMotion.enabled,
        ei = o.useCallback(
            (e, t, n) => {
                let { items: i } = X[e],
                    a = e * y + t,
                    s = (F - 1) * W + a,
                    r = i[t],
                    o = en ? 0 : Math.min(125 * Math.floor(a / y) + (a % y) * 25, 1000);
                return (0, l.jsx)(
                    P,
                    {
                        clan: r,
                        index: a,
                        position: s,
                        searchCriteria: w,
                        traitsToHighlight: B,
                        prioritizedGameIds: ee,
                        onVisibilityChange: (n, i) => et(e, t, n, i),
                        hide: n,
                        entranceDelay: o
                    },
                    ''.concat(r.id, ':').concat(R)
                );
            },
            [X, y, F, W, en, R, w, B, ee, et]
        ),
        ea = o.useCallback((e) => (0, l.jsx)(C.Z, { style: { transform: 'translateY(-6px)' } }, e), []),
        es = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = X[e];
                switch (i) {
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: x.topPicksSection,
                            children: (0, l.jsx)(Z.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                z > W &&
                                (0, l.jsx)(E.Paginator, {
                                    className: d()(x.paginationInput),
                                    totalCount: z,
                                    pageSize: W,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: F,
                                    onPageChange: J
                                })
                        });
                    case 'header_spacer':
                        return (0, l.jsx)('div', { className: x.headerSpacer });
                    default:
                        if (null == t) return null;
                        return (0, l.jsx)(Z.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [F, J, W, X, z]
        ),
        er = o.useMemo(
            () =>
                j
                    ? X.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : X.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [j, X]
        );
    return 0 === U.length && j
        ? (0, l.jsx)('div', {
              className: x.emptySavedGuilds,
              children:
                  'saved_guilds' === R
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(E.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: O.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                                }),
                                (0, l.jsx)(E.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: O.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                                })
                            ]
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(E.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: O.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                                }),
                                (0, l.jsx)(E.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: O.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                                })
                            ]
                        })
          })
        : k && 0 === U.length
          ? (0, l.jsxs)('div', {
                className: x.errorPage,
                children: [
                    (0, l.jsx)('img', {
                        alt: '',
                        src: b,
                        className: x.errorImage
                    }),
                    (0, l.jsx)(E.Heading, {
                        variant: 'heading-xl/semibold',
                        children: O.Z.Messages.CLAN_DISCOVERY_ERROR_TITLE
                    }),
                    (0, l.jsx)(E.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: O.Z.Messages.CLAN_DISCOVERY_ERROR_DESCRIPTION
                    })
                ]
            })
          : (0, l.jsx)('div', {
                className: x.sectionContainer,
                style: {
                    paddingTop: f,
                    paddingLeft: S,
                    paddingRight: S,
                    paddingBottom: f,
                    width: 'calc(100% - '.concat(2 * S, 'px)'),
                    gap: ''.concat(16, 'px')
                },
                children: er.map((e, t) => {
                    var n, i;
                    let a = X[t],
                        s = es(t);
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
                                        style: { gridTemplateColumns: 'repeat('.concat(y, ', minmax(252px, 1fr))') },
                                        children: Array.from({ length: e }).map((e, n) => {
                                            let i = ''.concat(t, '-').concat(n);
                                            return j ? ei(t, n, null == c) : ea(i);
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            });
});
