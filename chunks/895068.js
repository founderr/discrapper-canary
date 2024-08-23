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
    _ = n(481060),
    h = n(110924),
    E = n(100527),
    m = n(970606),
    I = n(374939),
    g = n(901040),
    p = n(945124),
    T = n(231467),
    f = n(301544),
    S = n(931515),
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
    var t, n, i, a;
    let { width: s, paddingVertical: r = 16, paddingHorizontal: c = 32, variant: R = 'default', onScroll: x } = e,
        b = o.useMemo(() => Math.max(Math.min(null != s ? s : 1024, 1300) - 2 * c, 0), [s, c]),
        P = o.useRef(null),
        M = o.useMemo(() => {
            if (0 === b) return 1;
            let e = b / 256,
                t = b / 376,
                n = b / e,
                i = b / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [b]),
        { loaded: D, clans: y, searchResult: j, searchCriteria: U } = (0, S.ML)(M, 'saved_guilds' === R),
        G = (0, N.GN)((e) => e.selectedTraits, u.Z),
        k = (0, N.GN)((e) => e.completedNux, u.Z),
        w = (0, h.Z)(j),
        { currentPage: B, updatePage: H, totalItems: V, pageSize: F } = (0, C.$)();
    o.useEffect(() => {
        if (null != j && !!(0, v.Pw)(j)) (!(null != w && (0, v.Pw)(w)) || !(w.loadedAt >= j.loadedAt)) && (0, m.Oe)('top_picks', U);
    }, [U, j, w]);
    let Y =
            ((t = y),
            (n = M),
            (i = R),
            (a = B),
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
                                subtitle: a > 1 ? void 0 : L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE,
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
            }, [t, i, n, a])),
        W = o.useCallback(
            (e) => {
                var t;
                (0, m.Lx)({
                    fromPage: B,
                    toPage: e
                }),
                    H(e),
                    null === (t = P.current) || void 0 === t || t.scrollToTop();
            },
            [H, B]
        ),
        [, z] = o.useState(new Set()),
        K = o.useMemo(() => new Set(U.games), [U.games]),
        q = o.useCallback(
            (e, t, n) => {
                let { items: i } = Y[e],
                    a = (B - 1) * F + (e * M + t),
                    s = i[t];
                null != s &&
                    n &&
                    z((e) => {
                        let t = new Set(e);
                        return (
                            t.add(s.id),
                            t.size > e.size &&
                                (0, m.CK)({
                                    guildId: s.id,
                                    position: a
                                }),
                            t
                        );
                    });
            },
            [Y, z, M, B, F]
        ),
        Q = o.useCallback(
            (e, t, n) => {
                var i;
                let { items: a } = Y[e],
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
                        prioritizedGameIds: K,
                        onlyAnimateIconOnHover: !0,
                        onVisibilityChange: (n) => q(e, t, n)
                    },
                    n
                );
            },
            [Y, M, B, F, U, G, K, q]
        ),
        X = o.useCallback((e) => (0, l.jsx)(f.Z, {}, e), []),
        J = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = Y[e];
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
                                (0, l.jsx)(_.Paginator, {
                                    className: d()(O.paginationInput),
                                    totalCount: V,
                                    pageSize: F,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: B,
                                    onPageChange: W
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
            [B, W, F, Y, V]
        ),
        $ = o.useMemo(
            () =>
                D
                    ? Y.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : Y.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [D, Y]
        );
    return 0 === y.length && D && 'saved_guilds' === R
        ? (0, l.jsxs)('div', {
              className: O.emptySavedGuilds,
              children: [
                  (0, l.jsx)(_.Heading, {
                      variant: 'heading-md/medium',
                      color: 'header-primary',
                      children: L.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                  }),
                  (0, l.jsx)(_.Text, {
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
                    (0, l.jsx)(_.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: L.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                    }),
                    (0, l.jsx)(_.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: L.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                    })
                ]
            })
          : (0, l.jsx)(I.Z, {
                ref: P,
                title: (0, l.jsx)(_.Text, {
                    className: O.globalDiscoveryTitle,
                    variant: 'display-lg',
                    color: 'header-primary',
                    children: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                }),
                description: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                button: k
                    ? null
                    : (0, l.jsx)('div', {
                          children: (0, l.jsx)(_.Button, {
                              look: _.ButtonLooks.FILLED,
                              size: _.ButtonSizes.MEDIUM,
                              className: O.heroButton,
                              onClick: () => {
                                  (0, m.GS)({ location: E.Z.GLOBAL_DISCOVERY }), (0, N.fH)(N.v0.GET_STARTED);
                              },
                              children: (0, l.jsx)(_.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  children: L.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                              })
                          })
                      }),
                bannerBackground: (0, l.jsx)(g.Z, {}),
                onScroll: x,
                children: (0, l.jsx)('div', {
                    className: O.sectionContainer,
                    style: {
                        paddingTop: r,
                        paddingLeft: c,
                        paddingRight: c,
                        paddingBottom: r,
                        width: 'calc(100% - '.concat(2 * c, 'px)'),
                        gap: ''.concat(16, 'px')
                    },
                    children: $.map((e, t) => {
                        var n, i;
                        let a = Y[t],
                            s = J(t);
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
                                                return D ? Q(t, n, i) : X(i);
                                            })
                                        })
                                ]
                            },
                            t
                        );
                    })
                })
            });
});
