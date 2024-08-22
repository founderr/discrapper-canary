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
    u = n(143927),
    _ = n(481060),
    h = n(110924),
    E = n(970606),
    m = n(17845),
    I = n(823379),
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
let R = 56;
function x(e) {
    switch (e) {
        case 'saved_guilds':
            return 0;
        case 'global_discovery':
        case 'default':
            return 1;
    }
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === C.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
((s = i || (i = {})).UPSELL = 'upsell'), (s.TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.HERO = 'hero'), (s.PAGINATION = 'pagination'), ((r = a || (a = {})).DEFAULT = 'default'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
t.ZP = o.memo(function (e) {
    let { width: t, variant: n = 'default', onScroll: i } = e,
        a = Math.min(null != t ? t : 1024, 2000),
        s = o.useRef(null),
        r = o.useMemo(() => {
            if (0 === a) return 1;
            let e = a / 256,
                t = a / 376,
                n = a / e,
                i = a / t;
            return i > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e;
        }, [a]),
        { loaded: c, clans: b, searchResult: P, searchCriteria: M } = (0, S.ML)(r, 'saved_guilds' === n),
        D = (0, C.GN)((e) => e.selectedTraits, u.Z),
        y = (0, h.Z)(P),
        { currentPage: j, updatePage: U, totalItems: G, pageSize: k } = (0, f.$)();
    o.useEffect(() => {
        if (null != P && !!(0, v.Pw)(P)) (!(null != y && (0, v.Pw)(y)) || !(y.loadedAt >= P.loadedAt)) && (0, E.Oe)('top_picks', M);
    }, [M, P, y]);
    let w = o.useMemo(
            () =>
                (function (e, t, n, i) {
                    if (null == e) return [];
                    switch (n) {
                        case 'saved_guilds':
                            return [
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
                        case 'global_discovery':
                            return [
                                {
                                    section: 'hero',
                                    items: [e[0]],
                                    sectionHeight: 270,
                                    itemHeight: 0
                                },
                                1 === i
                                    ? {
                                          section: 'top_picks',
                                          items: e.slice(0, t),
                                          sectionHeight: R,
                                          itemHeight: 400,
                                          props: { className: O.glassBackgroundTop },
                                          header: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                          subtitle: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE,
                                          skeletonCount: t
                                      }
                                    : null,
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: R,
                                    itemHeight: 400,
                                    props: { className: O.glassBackground },
                                    header: L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                    skeletonCount: 4 * t
                                },
                                {
                                    section: 'pagination',
                                    items: [],
                                    sectionHeight: 86,
                                    itemHeight: 0
                                }
                            ].filter(I.lm);
                        case 'default':
                            return [
                                {
                                    section: 'upsell',
                                    items: [e[0]],
                                    sectionHeight: 268,
                                    itemHeight: 0
                                },
                                1 === i
                                    ? {
                                          section: 'top_picks',
                                          items: e.slice(0, t),
                                          sectionHeight: R,
                                          itemHeight: 400,
                                          header: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                          subtitle: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE,
                                          skeletonCount: t
                                      }
                                    : null,
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: R,
                                    itemHeight: 400,
                                    header: L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                    skeletonCount: 4 * t
                                },
                                {
                                    section: 'pagination',
                                    items: [],
                                    sectionHeight: 86,
                                    itemHeight: 0
                                }
                            ].filter(I.lm);
                        default:
                            return [];
                    }
                })(b, r, n, j),
            [b, r, n, j]
        ),
        B = o.useCallback(
            (e) => {
                var t;
                (0, E.Lx)({
                    fromPage: j,
                    toPage: e
                }),
                    null === (t = s.current) ||
                        void 0 === t ||
                        t.scrollToTop({
                            callback: () => {
                                U(e);
                            }
                        });
            },
            [U, j]
        ),
        [, H] = o.useState(new Set()),
        V = o.useMemo(() => new Set(M.games), [M.games]),
        F = o.useCallback(
            (e, t, i, a) => {
                var s;
                let { items: o, section: c } = w[e];
                if ('upsell' === c || 'hero' === c) return null;
                let d = (e - x(n)) * r + t,
                    u = (j - 1) * k + d,
                    _ = o[t];
                return (0, l.jsx)(
                    p.ZP,
                    {
                        clan: _,
                        index: d,
                        position: u,
                        affinity: null !== (s = _.affininty) && void 0 !== s ? s : (0, g.y)(_, M),
                        traitsToHighlight: D,
                        className: O.card,
                        style: i,
                        source: Z.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: V,
                        onlyAnimateIconOnHover: !0
                    },
                    a
                );
            },
            [M, w, D, V, r, n, j, k]
        ),
        Y = o.useCallback(
            (e, t, i) => {
                let { items: a, section: s } = w[e];
                if ('upsell' === s || 'hero' === s) return;
                let l = (j - 1) * k + ((e - x(n)) * r + t),
                    o = a[t];
                null != o &&
                    i &&
                    H((e) => {
                        let t = new Set(e);
                        return (
                            t.add(o.id),
                            t.size > e.size &&
                                (0, E.CK)({
                                    guildId: o.id,
                                    position: l
                                }),
                            t
                        );
                    });
            },
            [w, H, r, n, j, k]
        ),
        W = o.useCallback((e, t, n, i) => (0, l.jsx)(T.Z, { style: n }, i), []),
        z = o.useCallback(
            (e, t) => {
                let { header: n, subtitle: i, section: a } = w[e];
                switch (a) {
                    case 'upsell':
                        return (0, l.jsx)(N.Z, {});
                    case 'hero':
                        return (0, l.jsx)(m.Z, {
                            title: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
                            description: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                            className: O.hero,
                            background: (0, l.jsx)('div', {
                                className: O.bannerImageBackground,
                                children: (0, l.jsx)('div', { className: O.bannerImageGradient })
                            })
                        });
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: O.topPicksSection,
                            children: (0, l.jsx)(A.Z, {
                                style: {
                                    ...t,
                                    marginTop: 8,
                                    position: 'absolute'
                                },
                                title: n,
                                subtitle: i
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                G > k &&
                                (0, l.jsx)(_.Paginator, {
                                    className: d()(O.paginationInput),
                                    totalCount: G,
                                    pageSize: k,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: j,
                                    onPageChange: B
                                })
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
            [j, B, k, w, G]
        );
    if (0 === b.length && c && 'saved_guilds' === n)
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
    if (0 === b.length && c)
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
    let K = c
        ? w.map((e) => {
              let { items: t } = e;
              return t.length;
          })
        : w.map((e) => {
              let { skeletonCount: t } = e;
              return null != t ? t : 0;
          });
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)('div', {
            className: O.masonryListContainer,
            children: (0, l.jsx)(_.MasonryList, {
                ref: s,
                className: O.masonryList,
                sections: K,
                columns: r,
                itemGutter: 16,
                paddingHorizontal: 32,
                paddingVertical: 0,
                removeEdgeItemGutters: !0,
                renderItem: c ? F : W,
                renderSection: z,
                getSectionHeight: (e) => w[e].sectionHeight,
                getItemKey: (e, t) => (c ? w[e].items[t].id : ''.concat(e, '-').concat(t)),
                getItemHeight: (e) => w[e].itemHeight,
                getSectionProps: (e) => {
                    var t;
                    return null !== (t = w[e].props) && void 0 !== t ? t : {};
                },
                onItemVisibilityChange: Y,
                chunkSize: 4 * r,
                maxContentWidth: 2000,
                onScroll: i
            })
        })
    });
});
