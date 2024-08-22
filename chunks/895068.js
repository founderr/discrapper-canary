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
    _ = n(481060),
    h = n(110924),
    E = n(100527),
    m = n(970606),
    I = n(17845),
    g = n(945124),
    p = n(231467),
    T = n(301544),
    S = n(931515),
    f = n(286083),
    C = n(207796),
    N = n(526282),
    A = n(777734),
    v = n(976757),
    Z = n(981631),
    L = n(689938),
    O = n(266489);
function R(e) {
    switch (e) {
        case 'saved_guilds':
            return 0;
        case 'global_discovery':
        case 'default':
            return 1;
    }
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === C.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
((s = i || (i = {})).UPSELL = 'upsell'), (s.TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.HERO = 'hero'), (s.PAGINATION = 'pagination'), (s.HEADER_SPACER = 'header_spacer'), ((r = a || (a = {})).DEFAULT = 'default'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
t.ZP = o.memo(function (e) {
    let { width: t, paddingHorizontal: n, variant: i = 'default', onScroll: a } = e,
        s = Math.min(null != t ? t : 1024, 2000),
        r = o.useRef(null),
        c = o.useMemo(() => {
            if (0 === s) return 1;
            let e = s / 256,
                t = s / 376,
                n = s / e,
                i = s / t;
            return i > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e;
        }, [s]),
        { loaded: x, clans: b, searchResult: P, searchCriteria: M } = (0, S.ML)(c, 'saved_guilds' === i),
        D = (0, C.GN)((e) => e.selectedTraits, u.Z),
        y = (0, C.GN)((e) => e.completedNux, u.Z),
        j = (0, h.Z)(P),
        { currentPage: U, updatePage: G, totalItems: k, pageSize: w } = (0, f.$)();
    o.useEffect(() => {
        if (null != P && !!(0, v.Pw)(P)) (!(null != j && (0, v.Pw)(j)) || !(j.loadedAt >= P.loadedAt)) && (0, m.Oe)('top_picks', M);
    }, [M, P, j]);
    let B = (function (e, t, n, i) {
            let a = (0, _.useToken)(_.tokens.colors.BACKGROUND_PRIMARY);
            return o.useMemo(() => {
                if (null == e) return [];
                switch (n) {
                    case 'saved_guilds':
                        return [
                            {
                                section: 'header_spacer',
                                items: [],
                                sectionHeight: 64,
                                itemHeight: 400,
                                header: null
                            },
                            {
                                section: 'other_guilds',
                                items: e,
                                sectionHeight: 16,
                                itemHeight: 400,
                                header: null,
                                skeletonCount: 4 * t
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
                            'global_discovery' === n
                                ? {
                                      section: 'hero',
                                      items: [],
                                      itemHeight: 0,
                                      sectionHeight: 332
                                  }
                                : {
                                      section: 'upsell',
                                      items: [],
                                      itemHeight: 0,
                                      sectionHeight: 336
                                  },
                            {
                                section: 'top_picks',
                                props: {
                                    className: O.glassBackgroundTop,
                                    style: { background: 'linear-gradient(180deg, '.concat(a.hex({ opacity: 0.5 }), ' 0%, ').concat(a.hex(), ' 50%)') }
                                },
                                items: e.slice(0, t),
                                itemHeight: 400,
                                sectionHeight: 48,
                                header: i > 1 ? L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE : L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                subtitle: i > 1 ? void 0 : L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE,
                                skeletonCount: t
                            },
                            {
                                section: 'other_guilds',
                                props: { className: O.glassBackground },
                                items: e.slice(t),
                                itemHeight: 400,
                                sectionHeight: i > 1 ? 0 : 24,
                                header: i > 1 ? void 0 : L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                skeletonCount: 4 * t
                            },
                            {
                                section: 'pagination',
                                props: { className: O.glassBackground },
                                items: [],
                                itemHeight: 0,
                                sectionHeight: 86
                            }
                        ];
                    default:
                        return [];
                }
            }, [e, n, t, i, a]);
        })(b, c, i, U),
        H = o.useCallback(
            (e) => {
                var t;
                (0, m.Lx)({
                    fromPage: U,
                    toPage: e
                }),
                    null === (t = r.current) ||
                        void 0 === t ||
                        t.scrollToTop({
                            callback: () => {
                                G(e);
                            }
                        });
            },
            [G, U]
        ),
        [, V] = o.useState(new Set()),
        F = o.useMemo(() => new Set(M.games), [M.games]),
        Y = o.useCallback(
            (e, t, n, a) => {
                var s;
                let { items: r, section: o } = B[e];
                if ('upsell' === o || 'hero' === o) return null;
                let d = (e - R(i)) * c + t,
                    u = (U - 1) * w + d,
                    _ = r[t];
                return (0, l.jsx)(
                    p.ZP,
                    {
                        clan: _,
                        index: d,
                        position: u,
                        affinity: null !== (s = _.affininty) && void 0 !== s ? s : (0, g.y)(_, M),
                        traitsToHighlight: D,
                        className: O.card,
                        style: n,
                        source: Z.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: F,
                        onlyAnimateIconOnHover: !0
                    },
                    a
                );
            },
            [M, B, D, F, c, i, U, w]
        ),
        W = o.useCallback(
            (e, t, n) => {
                let { items: a, section: s } = B[e];
                if ('upsell' === s || 'hero' === s) return;
                let r = (U - 1) * w + ((e - R(i)) * c + t),
                    l = a[t];
                null != l &&
                    n &&
                    V((e) => {
                        let t = new Set(e);
                        return (
                            t.add(l.id),
                            t.size > e.size &&
                                (0, m.CK)({
                                    guildId: l.id,
                                    position: r
                                }),
                            t
                        );
                    });
            },
            [B, V, c, i, U, w]
        ),
        z = o.useCallback((e, t, n, i) => (0, l.jsx)(T.Z, { style: n }, i), []),
        K = o.useCallback(
            (e, t) => {
                let { header: n, subtitle: i, section: a } = B[e];
                switch (a) {
                    case 'upsell':
                        return (0, l.jsx)(N.Z, { background: (0, l.jsx)('div', { className: O.masonryListGradient }) });
                    case 'hero':
                        return (0, l.jsx)(I.Z, {
                            title: (0, l.jsx)(_.Text, {
                                className: O.globalDiscoveryTitle,
                                variant: 'display-lg',
                                color: 'header-primary',
                                children: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                            }),
                            description: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                            className: O.hero,
                            background: (0, l.jsx)('div', { className: O.masonryListGradient }),
                            button: y
                                ? null
                                : (0, l.jsx)('div', {
                                      children: (0, l.jsx)(_.Button, {
                                          look: _.ButtonLooks.FILLED,
                                          size: _.ButtonSizes.MEDIUM,
                                          className: O.heroButton,
                                          onClick: () => {
                                              (0, m.GS)({ location: E.Z.GLOBAL_DISCOVERY }), (0, C.fH)(C.v0.GET_STARTED);
                                          },
                                          children: (0, l.jsx)(_.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'always-white',
                                              children: L.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                                          })
                                      })
                                  })
                        });
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: O.topPicksSection,
                            children: (0, l.jsx)(A.Z, {
                                style: {
                                    ...t,
                                    position: 'absolute'
                                },
                                title: n,
                                subtitle: i
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                k > w &&
                                (0, l.jsx)(_.Paginator, {
                                    className: d()(O.paginationInput),
                                    totalCount: k,
                                    pageSize: w,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: U,
                                    onPageChange: H
                                })
                        });
                    case 'header_spacer':
                        return (0, l.jsx)('div', {
                            style: { ...t },
                            className: O.headerSpacer
                        });
                    default:
                        if (null === n) return null;
                        return (0, l.jsx)(A.Z, {
                            title: n,
                            subtitle: i,
                            style: {
                                ...t,
                                marginTop: 8,
                                position: 'absolute'
                            }
                        });
                }
            },
            [y, U, H, w, B, k]
        );
    if (0 === b.length && x && 'saved_guilds' === i)
        return (0, l.jsxs)('div', {
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
        });
    if (0 === b.length && x)
        return (0, l.jsxs)('div', {
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
        });
    let q = x
        ? B.map((e) => {
              let { items: t } = e;
              return t.length;
          })
        : B.map((e) => {
              let { skeletonCount: t } = e;
              return null != t ? t : 0;
          });
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)('div', {
            className: O.masonryListContainer,
            children: (0, l.jsx)(_.MasonryList, {
                ref: r,
                className: O.masonryList,
                sections: q,
                columns: c,
                itemGutter: 16,
                paddingHorizontal: null != n ? n : 32,
                paddingVertical: 0,
                removeEdgeItemGutters: !0,
                renderItem: x ? Y : z,
                renderSection: K,
                getSectionHeight: (e) => B[e].sectionHeight,
                getItemKey: (e, t) => (x ? B[e].items[t].id : ''.concat(e, '-').concat(t)),
                getItemHeight: (e) => B[e].itemHeight,
                getSectionProps: (e) => {
                    var t;
                    return null !== (t = B[e].props) && void 0 !== t ? t : {};
                },
                onItemVisibilityChange: W,
                chunkSize: 4 * c,
                maxContentWidth: 2000,
                onScroll: a
            })
        })
    });
});
