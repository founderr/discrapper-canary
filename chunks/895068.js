n.d(t, {
    Bj: function () {
        return a;
    },
    s: function () {
        return Z;
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
    m = n(945124),
    I = n(231467),
    g = n(301544),
    p = n(931515),
    T = n(286083),
    f = n(207796),
    S = n(777734),
    C = n(976757),
    N = n(981631),
    A = n(689938),
    v = n(266489);
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === f.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
((s = i || (i = {})).TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.PAGINATION = 'pagination'), (s.HEADER_SPACER = 'header_spacer'), ((r = a || (a = {})).DEFAULT = 'default'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
t.ZP = o.memo(function (e) {
    var t, n, i, a;
    let { width: s, paddingVertical: r = 16, paddingHorizontal: c = 32, variant: Z = 'default', onUpdatePage: L } = e,
        O = o.useMemo(() => Math.max(Math.min(null != s ? s : 1024, 1300) - 2 * c, 0), [s, c]),
        R = o.useMemo(() => {
            if (0 === O) return 1;
            let e = O / 256,
                t = O / 376,
                n = O / e,
                i = O / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [O]),
        { loaded: x, clans: b, searchResult: P, searchCriteria: M } = (0, p.ML)(R, 'saved_guilds' === Z),
        D = (0, f.GN)((e) => e.selectedTraits, u.Z),
        y = (0, h.Z)(P),
        { currentPage: j, updatePage: U, totalItems: G, pageSize: k } = (0, T.$)();
    o.useEffect(() => {
        if (null != P && !!(0, C.Pw)(P)) (!(null != y && (0, C.Pw)(y)) || !(y.loadedAt >= P.loadedAt)) && (0, E.Oe)('top_picks', M);
    }, [M, P, y]);
    let w =
            ((t = b),
            (n = R),
            (i = Z),
            (a = j),
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
                                header: a > 1 ? A.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE : A.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                props: { style: { paddingTop: 8 } },
                                subtitle: a > 1 ? void 0 : A.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE,
                                skeletonCount: n
                            },
                            {
                                section: 'other_guilds',
                                items: t.slice(n),
                                itemHeight: 400,
                                sectionHeight: a > 1 ? 0 : 24,
                                props: { style: { paddingTop: 16 } },
                                header: a > 1 ? void 0 : A.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
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
        B = o.useCallback(
            (e) => {
                U(e),
                    (0, E.Lx)({
                        fromPage: j,
                        toPage: e
                    }),
                    null == L || L();
            },
            [U, L, j]
        ),
        [, H] = o.useState(new Set()),
        V = o.useMemo(() => new Set(M.games), [M.games]),
        F = o.useCallback(
            (e, t, n) => {
                let { items: i } = w[e],
                    a = (j - 1) * k + (e * R + t),
                    s = i[t];
                null != s &&
                    n &&
                    H((e) => {
                        let t = new Set(e);
                        return (
                            t.add(s.id),
                            t.size > e.size &&
                                (0, E.CK)({
                                    guildId: s.id,
                                    position: a
                                }),
                            t
                        );
                    });
            },
            [w, H, R, j, k]
        ),
        Y = o.useCallback(
            (e, t, n) => {
                var i;
                let { items: a } = w[e],
                    s = e * R + t,
                    r = (j - 1) * k + s,
                    o = a[t];
                return (0, l.jsx)(
                    I.ZP,
                    {
                        clan: o,
                        index: s,
                        position: r,
                        affinity: null !== (i = o.affininty) && void 0 !== i ? i : (0, m.y)(o, M),
                        traitsToHighlight: D,
                        className: v.card,
                        source: N.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: V,
                        onlyAnimateIconOnHover: !0,
                        onVisibilityChange: (n) => F(e, t, n)
                    },
                    n
                );
            },
            [w, R, j, k, M, D, V, F]
        ),
        W = o.useCallback((e) => (0, l.jsx)(g.Z, {}, e), []),
        z = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = w[e];
                switch (i) {
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: v.topPicksSection,
                            children: (0, l.jsx)(S.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                G > k &&
                                (0, l.jsx)(_.Paginator, {
                                    className: d()(v.paginationInput),
                                    totalCount: G,
                                    pageSize: k,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: j,
                                    onPageChange: B
                                })
                        });
                    case 'header_spacer':
                        return (0, l.jsx)('div', { className: v.headerSpacer });
                    default:
                        if (null == t) return null;
                        return (0, l.jsx)(S.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [j, B, k, w, G]
        ),
        K = o.useMemo(
            () =>
                x
                    ? w.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : w.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [x, w]
        );
    return 0 === b.length && x && 'saved_guilds' === Z
        ? (0, l.jsxs)('div', {
              className: v.emptySavedGuilds,
              children: [
                  (0, l.jsx)(_.Heading, {
                      variant: 'heading-md/medium',
                      color: 'header-primary',
                      children: A.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                  }),
                  (0, l.jsx)(_.Text, {
                      variant: 'text-sm/medium',
                      color: 'header-secondary',
                      children: A.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                  })
              ]
          })
        : 0 === b.length && x
          ? (0, l.jsxs)('div', {
                className: v.emptySavedGuilds,
                children: [
                    (0, l.jsx)(_.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: A.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                    }),
                    (0, l.jsx)(_.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: A.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                    })
                ]
            })
          : (0, l.jsx)('div', {
                className: v.sectionContainer,
                style: {
                    paddingTop: r,
                    paddingLeft: c,
                    paddingRight: c,
                    paddingBottom: r,
                    width: 'calc(100% - '.concat(2 * c, 'px)'),
                    gap: ''.concat(16, 'px')
                },
                children: K.map((e, t) => {
                    var n, i;
                    let a = w[t],
                        s = z(t);
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: v.section,
                            style: { gap: ''.concat(16, 'px') },
                            children: [
                                null != s &&
                                    (0, l.jsx)('div', {
                                        ...a.props,
                                        className: d()(v.sectionHeader, null === (n = a.props) || void 0 === n ? void 0 : n.className),
                                        style: {
                                            height: ''.concat(a.sectionHeight, 'px'),
                                            ...(null === (i = a.props) || void 0 === i ? void 0 : i.style)
                                        },
                                        children: s
                                    }),
                                e > 0 &&
                                    (0, l.jsx)('div', {
                                        className: v.sectionContent,
                                        style: { gridTemplateColumns: 'repeat('.concat(R, ', minmax(252px, 1fr))') },
                                        children: Array.from({ length: e }).map((e, n) => {
                                            let i = ''.concat(t, '-').concat(n);
                                            return x ? Y(t, n, i) : W(i);
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            });
});
