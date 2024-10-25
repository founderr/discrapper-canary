n.d(t, {
    Bj: function () {
        return a;
    },
    s: function () {
        return P;
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
    p = n(859921),
    g = n(594174),
    T = n(823379),
    f = n(51144),
    S = n(945124),
    C = n(231467),
    N = n(301544),
    A = n(931515),
    v = n(286083),
    Z = n(207796),
    L = n(777734),
    R = n(976757),
    O = n(981631),
    x = n(689938),
    b = n(641388),
    M = n(882008);
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === Z.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
function D(e) {
    var t;
    let { clan: n, entranceDelay: i = 0, hide: a, searchCriteria: s, className: r, source: o, ...c } = e;
    return (0, l.jsx)('div', {
        style: {
            opacity: a ? 0 : void 0,
            animationDelay: ''.concat(i, 'ms')
        },
        className: b.animatedCard,
        children: (0, l.jsx)(
            C.ZP,
            {
                clan: n,
                affinity: null !== (t = n.affininty) && void 0 !== t ? t : (0, S.y)(n, s),
                className: d()(b.card, r),
                source: null != o ? o : O.jXE.DISCOVER_SEARCH,
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
    let { width: c, paddingVertical: S = 16, paddingHorizontal: C = 32, variant: O = 'default', onUpdatePage: P } = e,
        y = o.useMemo(() => Math.max(Math.min(null != c ? c : 1024, 1300) - 2 * C, 0), [c, C]),
        j = o.useMemo(() => {
            if (0 === y) return 1;
            let e = y / 256,
                t = y / 376,
                n = y / e,
                i = y / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [y]),
        { loaded: U, clans: G, searchResult: w, searchCriteria: k, hasError: B } = (0, A.ML)(j, 'saved_guilds' === O),
        H = (0, Z.GN)((e) => e.selectedTraits, u.Z),
        V = (0, Z.GN)((e) => e.selectedGames, u.Z),
        F = (0, h.Z)(w),
        { currentPage: Y, updatePage: z, totalItems: W, pageSize: K } = (0, v.a)(),
        q = (0, _.e7)([g.default], () => g.default.getCurrentUser()),
        { treatment: Q } = (0, I.I7)();
    o.useEffect(() => {
        if (null == w || !(0, R.Pw)(w) || (null != F && (0, R.Pw)(F) && F.loadedAt >= w.loadedAt)) return;
        let e = p.Z.getField('entrypoint');
        (0, m.Oe)('top_picks', k, Q, e);
    }, [k, w, F, Q]);
    let X = V.length > 0 || H.length > 0 ? x.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE : null != q ? x.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE_NO_PREFERENCES.format({ name: f.ZP.getName(q) }) : '';
    let J =
            ((t = G),
            (n = j),
            (i = O),
            (a = Y),
            (s = X),
            (r = U),
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
                                header: a > 1 ? x.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE : x.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
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
                                      header: a > 1 ? void 0 : x.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                      skeletonCount: 4 * n
                                  }
                                : null,
                            {
                                section: 'pagination',
                                items: [],
                                itemHeight: 0,
                                sectionHeight: 86
                            }
                        ].filter(T.lm);
                    default:
                        return [];
                }
            }, [t, i, n, a, s, r])),
        $ = o.useCallback(
            (e) => {
                z(e),
                    (0, m.Lx)({
                        fromPage: Y,
                        toPage: e
                    }),
                    null == P || P();
            },
            [z, P, Y]
        ),
        [, ee] = o.useState(new Set()),
        et = o.useMemo(() => new Set(k.games), [k.games]),
        en = o.useCallback(
            (e, t, n, i) => {
                let { items: a } = J[e],
                    s = (Y - 1) * K + (e * j + t),
                    r = a[t];
                null != r && n
                    ? (i.current = setTimeout(
                          () =>
                              ee((e) => {
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
            [J, ee, j, Y, K]
        ),
        ei = o.useContext(E.AccessibilityPreferencesContext).reducedMotion.enabled,
        ea = o.useCallback(
            (e, t, n) => {
                let { items: i } = J[e],
                    a = e * j + t,
                    s = (Y - 1) * K + a,
                    r = i[t],
                    o = ei ? 0 : Math.min(125 * Math.floor(a / j) + (a % j) * 25, 1000);
                return (0, l.jsx)(
                    D,
                    {
                        clan: r,
                        index: a,
                        position: s,
                        searchCriteria: k,
                        traitsToHighlight: H,
                        prioritizedGameIds: et,
                        onVisibilityChange: (n, i) => en(e, t, n, i),
                        hide: n,
                        entranceDelay: o
                    },
                    ''.concat(r.id, ':').concat(O)
                );
            },
            [J, j, Y, K, ei, O, k, H, et, en]
        ),
        es = o.useCallback((e) => (0, l.jsx)(N.Z, { style: { transform: 'translateY(-6px)' } }, e), []),
        er = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = J[e];
                switch (i) {
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: b.topPicksSection,
                            children: (0, l.jsx)(L.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                W > K &&
                                (0, l.jsx)(E.Paginator, {
                                    className: d()(b.paginationInput),
                                    totalCount: W,
                                    pageSize: K,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: Y,
                                    onPageChange: $
                                })
                        });
                    case 'header_spacer':
                        return (0, l.jsx)('div', { className: b.headerSpacer });
                    default:
                        if (null == t) return null;
                        return (0, l.jsx)(L.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [Y, $, K, J, W]
        ),
        el = o.useMemo(
            () =>
                U
                    ? J.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : J.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [U, J]
        );
    return 0 === G.length && U
        ? (0, l.jsx)('div', {
              className: b.emptySavedGuilds,
              children:
                  'saved_guilds' === O
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(E.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: x.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                                }),
                                (0, l.jsx)(E.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: x.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                                })
                            ]
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(E.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: x.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                                }),
                                (0, l.jsx)(E.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: x.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                                })
                            ]
                        })
          })
        : B && 0 === G.length
          ? (0, l.jsxs)('div', {
                className: b.errorPage,
                children: [
                    (0, l.jsx)('img', {
                        alt: '',
                        src: M,
                        className: b.errorImage
                    }),
                    (0, l.jsx)(E.Heading, {
                        variant: 'heading-xl/semibold',
                        children: x.Z.Messages.CLAN_DISCOVERY_ERROR_TITLE
                    }),
                    (0, l.jsx)(E.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: x.Z.Messages.CLAN_DISCOVERY_ERROR_DESCRIPTION
                    })
                ]
            })
          : (0, l.jsx)('div', {
                className: b.sectionContainer,
                style: {
                    paddingTop: S,
                    paddingLeft: C,
                    paddingRight: C,
                    paddingBottom: S,
                    width: 'calc(100% - '.concat(2 * C, 'px)'),
                    gap: ''.concat(16, 'px')
                },
                children: el.map((e, t) => {
                    var n, i;
                    let a = J[t],
                        s = er(t);
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: b.section,
                            style: { gap: ''.concat(16, 'px') },
                            children: [
                                null != s &&
                                    (0, l.jsx)('div', {
                                        ...a.props,
                                        className: d()(b.sectionHeader, null === (n = a.props) || void 0 === n ? void 0 : n.className),
                                        style: {
                                            height: ''.concat(a.sectionHeight, 'px'),
                                            ...(null === (i = a.props) || void 0 === i ? void 0 : i.style)
                                        },
                                        children: s
                                    }),
                                e > 0 &&
                                    (0, l.jsx)('div', {
                                        className: b.sectionContent,
                                        style: { gridTemplateColumns: 'repeat('.concat(j, ', minmax(252px, 1fr))') },
                                        children: Array.from({ length: e }).map((e, n) => {
                                            let i = ''.concat(t, '-').concat(n);
                                            return U ? ea(t, n, null == c) : es(i);
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            });
});
