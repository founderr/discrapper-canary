n.r(t),
    n.d(t, {
        default: function () {
            return eu;
        }
    }),
    n(47120);
var a = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    i = n(196434),
    o = n.n(i),
    c = n(782690),
    d = n(91192),
    u = n(924826),
    m = n(536895),
    h = n(313361),
    _ = n(442837),
    g = n(704215),
    x = n(481060),
    C = n(561472),
    f = n(393238),
    p = n(607070),
    T = n(933557),
    I = n(243778),
    E = n(71619),
    N = n(898188),
    b = n(41776),
    v = n(256413),
    S = n(292853),
    M = n(359110),
    A = n(344185),
    j = n(235449),
    R = n(665906),
    O = n(488131),
    Z = n(433355),
    L = n(592125),
    P = n(703558),
    w = n(607744),
    y = n(117530),
    D = n(451478),
    F = n(459273),
    U = n(961675),
    k = n(883429),
    H = n(238349),
    B = n(109434),
    G = n(456269),
    z = n(90372),
    V = n(985518),
    W = n(228392),
    q = n(355589),
    K = n(542581),
    Y = n(639184),
    X = n(404616),
    J = n(470623),
    Q = n(749913),
    $ = n(219664),
    ee = n(895932),
    et = n(479099),
    en = n(510060),
    ea = n(276357),
    es = n(81490),
    er = n(482062),
    el = n(260503),
    ei = n(981631),
    eo = n(124368),
    ec = n(689938),
    ed = n(738941);
function eu(e) {
    let { channel: t, guild: n, sidebarState: s } = e;
    return (0, a.jsx)(
        J.oL,
        {
            createStore: () => (0, J.NU)(t),
            children: (0, a.jsx)(ep, {
                channel: t,
                guild: n,
                sidebarState: s
            })
        },
        t.id
    );
}
let em = new en.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function eh(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let e_ = (e, t, n) => (0 === e ? 0 : (0, en.KW)(n));
function eg(e) {
    let { itemRole: t, coords: n, section: s } = e;
    return (0, a.jsx)(
        'div',
        {
            className: l()(ed.card, ed.archivedDividerRow, ed.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, a.jsx)('div', {
                className: ed.emptyMainCard,
                children: (0, a.jsx)(x.Heading, {
                    variant: 'eyebrow',
                    className: ed.archivedDivider,
                    id: eh(s),
                    children: ec.Z.Messages.FORUM_SECTION_ARCHIVED
                })
            })
        },
        'section-divider'
    );
}
function ex(e) {
    let { section: t, coords: n, key: s, isShowingSearchResult: r, hasActiveThreads: l } = e;
    return () =>
        2 === t && !r && l
            ? (0, a.jsx)(
                  eg,
                  {
                      section: t,
                      coords:
                          null == n
                              ? void 0
                              : {
                                    ...n,
                                    position: 'absolute'
                                },
                      itemRole: 'section'
                  },
                  s
              )
            : null;
}
function eC(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function ef(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function ep(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: r,
            editorAdditionRowHeight: i,
            listViewCardHeights: o,
            formOpen: u
        } = (0, J.xH)((e) => {
            let { editorHeight: t, editorAdditionRowHeight: n, listViewCardHeights: a, formOpen: s, cardHeightVersion: r } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: a,
                formOpen: s,
                cardHeightVersion: r
            };
        }, c.Z),
        {
            activeThreadIds: m,
            archivedThreadIds: g,
            searchResults: f,
            canLoadMore: T,
            loadMore: I,
            activeThreadsLoading: E,
            archivedThreadsLoading: N,
            loading: R,
            isSearchLoading: w,
            layoutType: y
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: a } = (0, B.H)(e.id),
                s = (0, G.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    shouldAutomaticallyAck: !0
                }),
                r = (0, _.e7)([A.Z, b.Z], () => {
                    let t = A.Z.hasLoaded(e.guild_id),
                        n = b.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: l, canLoadMore: i, loadMore: o, loading: c } = (0, j.qQ)(e, t, n),
                { searchResults: d, isSearchLoading: u } = (0, G.XZ)({ channelId: e.id });
            return (
                (0, G.ES)(e, t, n),
                {
                    activeThreadIds: s,
                    archivedThreadIds: l,
                    searchResults: d,
                    canLoadMore: i,
                    loadMore: o,
                    loading: r || c || u,
                    archivedThreadsLoading: c,
                    activeThreadsLoading: r,
                    isSearchLoading: u,
                    layoutType: a
                }
            );
        })(t),
        D = m.length > 0,
        F = D || g.length > 0,
        H = (0, v.Z)(t),
        { tagFilter: K } = (0, B.H)(t.id);
    (0, G.ku)(t, K, u);
    let Y = (0, G.jR)(t),
        Q = (0, G.eZ)(t),
        ee = s.useRef(null),
        { observePostVisibilityAnalytics: et } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: a } = e;
            z.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let r = s.useRef(null),
                l = s.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let a = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, V.rj)(e, t, a) : (0, V.Ct)(e, t, a);
                    }
                }, []);
            return (
                s.useEffect(() => {
                    var e;
                    let t = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (r.current = new IntersectionObserver((e) => l(n, e), {
                                root: t,
                                rootMargin: '0px 100000px 0px 100000px',
                                threshold: 0.5
                            })),
                            () => {
                                var e;
                                null === (e = r.current) || void 0 === e || e.disconnect(), (r.current = null);
                            }
                        );
                }, [n, l, a]),
                {
                    observePostVisibilityAnalytics: s.useCallback(
                        (e, t) => {
                            var a;
                            if (null == e) {
                                (0, V.Ct)(n, t, Date.now());
                                return;
                            }
                            null === (a = r.current) || void 0 === a || a.observe(e);
                        },
                        [n]
                    )
                }
            );
        })({
            scrollerRef: ee,
            channelId: t.id,
            guildId: t.guild_id
        }),
        ea = y === h.X.GRID,
        eu = null != f,
        eg = s.useRef(null),
        { containerRef: ep, containerWidth: eN } = (0, es.Z)();
    s.useEffect(
        () => () => {
            null != t.id && k.Z.clearForumSearch(t.id);
        },
        [t.id]
    );
    let { columns: ev } = s.useMemo(() => (ea ? em.getRenderOptions(eN) : en.eU), [ea, eN]),
        eS = s.useMemo(() => (R ? Math.round((window.innerHeight - 200) / 118) : 0), [R]),
        eM = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eN))) * ev;
            return E ? e : 0;
        }, [eN, ev, E]),
        eA = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eN))) * ev;
            return N ? e : 0;
        }, [eN, ev, N]),
        ej = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eN))) * ev;
            return w && eu ? e : 0;
        }, [eN, ev, w, eu]),
        eR = s.useMemo(() => {
            if (ea) {
                if (!Y && eu) return [1, 0];
                if (!Q) return [1, m.length + eM, 0];
                else if (eu) return [1, f.length + ej, 0];
                else return [1, m.length + eM, g.length + eA];
            }
            if (!Y && eu) return [1, 1];
            if (!Q) return [1, m.length, 1];
            else if (eu) return [1, f.length, 0, eS];
            else return [1, m.length, g.length, eS];
        }, [ea, eu, m.length, g.length, Y, Q, eS, f, eM, eA, ej]),
        eO = s.useMemo(() => {
            if (!Y && eu) return [[], []];
            if (!Q) return [[], m, []];
            if (eu) return [[], f, [], []];
            else return [[], m, g, []];
        }, [eu, Y, Q, f, m, g]),
        eZ = s.useCallback(
            (e, n) => {
                (0, W.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: ei.ZY5.GUILD_CHANNEL,
                        section: ei.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, M.ad)(e, { source: eo.on.BROWSER }) : ((eg.current = e.id), (0, O.ok)(e));
            },
            [t.guild_id, t.id, eg]
        ),
        [eL, eP] = s.useState(r + i - 24),
        ew = s.useCallback(
            (e, n, s) =>
                0 === e
                    ? (0, a.jsx)(
                          eb,
                          {
                              channel: t,
                              isEmpty: !D,
                              isSearchLoading: w,
                              numResults: null == f ? void 0 : f.length,
                              coords: n,
                              onHeightChange: eP,
                              children:
                                  !R &&
                                  (0, a.jsx)(
                                      q.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: F
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || Q
                      ? 1 === e && eu && !Y
                          ? (0, a.jsx)(
                                eI,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : s()
                      : (0, a.jsx)(
                            eT,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [eu, Q, f, Y, t, D, w, R, F]
        ),
        ey = (0, _.e7)([U.Z], () => U.Z.hasHidden(t.id));
    s.useEffect(() => {
        var e, t;
        let n = ea ? eB : ee,
            a = null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState();
        null != a && !ey && a.scrollTop > r && (null === (t = n.current) || void 0 === t || t.scrollTo({ to: 0 }));
    }, [ey]);
    let {
            updateListScrollerRef: eD,
            renderListSection: eF,
            renderListItem: eU,
            getListSectionHeight: ek,
            getListItemHeight: eH
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: r, listViewCardHeights: i, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                _ = s.useCallback(
                    (e) => (n) => {
                        var a;
                        (t.current = n), (e.current = null !== (a = null == n ? void 0 : n.getScrollerNode()) && void 0 !== a ? a : null);
                    },
                    [t]
                ),
                g = s.useCallback(
                    (e) =>
                        ex({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n
                        })(),
                    [n, h]
                ),
                C = s.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, a.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: l()(ed.loadingCard, ed['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = r[e.section][e.row];
                            return (0, a.jsx)(
                                'li',
                                {
                                    className: ed.card,
                                    'data-item-role': 'item',
                                    children: (0, a.jsx)(x.HeadingLevel, {
                                        children: (0, a.jsx)(X.ZP, {
                                            className: ed.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m
                                        })
                                    })
                                },
                                ''.concat(e.section, '-').concat(t)
                            );
                        }),
                    [d, r, u, m]
                ),
                f = s.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = i[r[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [r, i, o, c]
                );
            return {
                updateListScrollerRef: _,
                renderListSection: g,
                renderListItem: C,
                getListSectionHeight: s.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: f
            };
        })({
            listRef: ee,
            hasActiveThreads: D,
            threadIdsBySection: eO,
            listViewCardHeights: o,
            editorHeight: r,
            editorAdditionRowHeight: i,
            renderSectionOrItem: ew,
            goToThread: eZ,
            observePostVisibilityAnalytics: et,
            isShowingSearchResult: eu
        }),
        eB = s.useRef(null),
        {
            updateMasonryListScrollerRef: eG,
            getItemKey: ez,
            renderGridSection: eV,
            renderGridItem: eW,
            getGridSectionHeight: eq,
            getSectionProps: eK,
            handleGridFocus: eY
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: r, renderSectionOrItem: i, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: _ } = e,
                g = s.useRef(null),
                x = s.useCallback(
                    (e) => {
                        (t.current = e), (g.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t]
                ),
                C = s.useCallback(
                    (e, n) => {
                        let { current: a } = t;
                        if (null == a) return;
                        let s = document.querySelector(e);
                        if (null == s) return;
                        let r = a.getCoordsMap()[n],
                            l = null != r ? r.height + 20 : 200;
                        a.scrollIntoViewNode({
                            node: s,
                            padding: l,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null === (t = document.querySelector(e)) || void 0 === t || t.focus({ preventScroll: !0 });
                                });
                            }
                        }),
                            (h.current = ef(n));
                    },
                    [t, h]
                ),
                f = s.useCallback(
                    (e) => {
                        let t = ef(e);
                        if (null == t) return;
                        let n = L.Z.getChannel(t);
                        null != n && r(n, !0);
                    },
                    [r]
                ),
                p = s.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return 'section-'.concat(e, '-').concat(t);
                        {
                            let a = n[e][t];
                            return null == a ? eC(e, t) : eC(e, a);
                        }
                    },
                    [n]
                ),
                T = s.useCallback(
                    (e, t, n) =>
                        i(
                            e,
                            t,
                            ex({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: c,
                                hasActiveThreads: o
                            })
                        ),
                    [i, o, c]
                ),
                I = s.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: 'grid',
                                  'aria-labelledby': '#'.concat(eh(e))
                              },
                    []
                ),
                E = s.useCallback(
                    (e, t, s, i, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, a.jsx)(
                                  $.Z,
                                  {
                                      id: ''.concat(i),
                                      threadId: c,
                                      className: l()(ed.card, ed.mainCard),
                                      goToThread: r,
                                      observePostVisibilityAnalytics: m,
                                      coords: s,
                                      gridCoords: o.coordinates[i],
                                      gridSectionBoundaries: o.boundaries
                                  },
                                  i
                              )
                            : __OVERLAY__
                              ? null
                              : (0, a.jsx)(
                                    'div',
                                    {
                                        style: { ...s },
                                        'data-item-role': 'item',
                                        className: l()(ed.loadingCard, ed['loadingCard-'.concat(t % 3)])
                                    },
                                    i
                                );
                    },
                    [n, r, m]
                );
            return {
                updateMasonryListScrollerRef: x,
                masonryListContainerRef: g,
                focusedThreadId: h,
                handleGridFocus: C,
                handleGridSelect: f,
                getItemKey: p,
                renderGridSection: T,
                renderGridItem: E,
                getSectionProps: I,
                getGridSectionHeight: s.useCallback((e) => (0 === e ? _ - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [_, c, d, o, u])
            };
        })({
            masonryListScrollerRef: eB,
            threadIdsBySection: eO,
            goToThread: eZ,
            renderSectionOrItem: ew,
            hasActiveThreads: D,
            isShowingSearchResult: eu,
            canSearchForumPosts: Y,
            canViewArchivedPosts: Q,
            observePostVisibilityAnalytics: et,
            focusedThreadId: eg,
            headerHeight: eL
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: a, threadIdsBySection: r, focusedThreadId: l, parentId: i } = e;
        s.useEffect(() => {
            if (a) {
                let e = setTimeout(() => {
                    if (null == t.current || null == l.current) return;
                    let e = l.current;
                    if ('string' != typeof e) return;
                    if (null == Z.ZP.getSidebarState(i)) {
                        l.current = null;
                        return;
                    }
                    let n = r.findIndex((t) => t.find((t) => t === e)),
                        a = t.current.getCoordsMap(),
                        s = a['__section__'.concat(n)],
                        o = a[eC(n, e)];
                    null != s &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: s.top + o.top - 100,
                            end: s.top + o.top + o.height + 50
                        });
                }, 500);
                return () => clearTimeout(e);
            }
        }, [i, n, a, r, l, t]);
    })({
        masonryListScrollerRef: eB,
        containerWidth: eN,
        isGridLayout: ea,
        threadIdsBySection: eO,
        parentId: t.id,
        focusedThreadId: eg
    });
    let eX = s.useCallback(() => {
            var e, n;
            if (eu) return;
            let a = ea ? (null === (e = eB.current) || void 0 === e ? void 0 : e.getScrollerState()) : null === (n = ee.current) || void 0 === n ? void 0 : n.getScrollerState();
            if (null == a) return;
            (0, W.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let s = a.scrollTop + a.offsetHeight,
                r = a.scrollHeight - s;
            r < (ea ? Math.max(200, (0, en.KW)(eN)) : 200) && I();
        }, [eu, ea, t.guild_id, t.id, eN, I]),
        eJ = (0, _.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        eQ = (0, er.ZP)({
            id: 'forum-grid-view',
            isEnabled: ea && eJ,
            setFocus: eY
        }),
        e$ = (0, el.Z)({
            listRef: ee,
            padding: 96,
            isEnabled: !ea && eJ,
            channel: t
        }),
        { ref: e0, ...e1 } = eQ.containerProps,
        e6 = Z.ZP.getSidebarState(t.id),
        e9 = null != e6 && (0, Z.D5)(e6);
    return (0, a.jsx)('div', {
        className: ed.container,
        ref: ep,
        children: (0, a.jsx)(x.FocusJumpSection, {
            children: (e) =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        u &&
                            (0, a.jsx)(C.Z, {
                                channel: t,
                                draftType: P.d.FirstThreadMessage,
                                className: ed.uploadArea,
                                style: { right: e9 && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, a.jsx)(eE, { channel: t }),
                        (0, a.jsx)(x.HiddenVisually, { children: (0, a.jsx)(x.H, { children: ec.Z.Messages.THREADS }) }),
                        H
                            ? (0, a.jsx)('div', {
                                  className: ed.optInNotice,
                                  children: (0, a.jsx)(S.Z, { channel: t })
                              })
                            : null,
                        ea
                            ? (0, a.jsx)(er.KT, {
                                  navigator: eQ,
                                  children: (0, a.jsx)(
                                      x.MasonryList,
                                      {
                                          ref: (e) => {
                                              var t;
                                              (e0.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null), eG(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: ed.grid,
                                          columns: ev,
                                          sections: eR,
                                          getItemKey: ez,
                                          getSectionHeight: eq,
                                          getItemHeight: e_,
                                          renderSection: eV,
                                          renderItem: eW,
                                          getSectionProps: eK,
                                          onScroll: T ? eX : void 0,
                                          chunkSize: 350,
                                          ...e1,
                                          ...e
                                      },
                                      y
                                  )
                              })
                            : (0, a.jsx)(d.bG, {
                                  navigator: e$,
                                  children: (0, a.jsx)(d.SJ, {
                                      children: (t) => {
                                          let { ref: n, ...s } = t;
                                          return (0, a.jsx)(
                                              x.ListAuto,
                                              {
                                                  ref: eD(n),
                                                  className: ed.list,
                                                  sections: eR,
                                                  sectionHeight: ek,
                                                  rowHeight: eH,
                                                  renderRow: eU,
                                                  renderSection: eF,
                                                  chunkSize: 150,
                                                  onScroll: T ? eX : void 0,
                                                  paddingBottom: 24,
                                                  ...s,
                                                  ...e,
                                                  innerRole: 'list'
                                              },
                                              y
                                          );
                                      }
                                  })
                              })
                    ]
                })
        })
    });
}
function eT(e) {
    let { channel: t, coords: n } = e,
        s = (0, T.ZP)(t);
    return (0, a.jsx)('div', {
        className: l()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, a.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.Z.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({ channelName: s })
        })
    });
}
function eI(e) {
    let { channel: t, coords: n } = e,
        s = (0, T.ZP)(t);
    return (0, a.jsx)('div', {
        className: l()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, a.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.Z.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({ channelName: s })
        })
    });
}
function eE(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            k.Z.resort(t.id);
        }, [t]),
        r = (0, _.e7)([H.Z], () => H.Z.getNewThreadCount());
    return 0 === r
        ? null
        : (0, a.jsx)(x.Clickable, {
              className: ed.newPostsButton,
              onClick: n,
              children: (0, a.jsx)(x.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: ec.Z.Messages.NEW_FORUM_POST_COUNT.format({ count: r })
              })
          });
}
function eN() {
    return Promise.resolve();
}
function eb(e) {
    var t, n, r;
    let { channel: i, isEmpty: C, isSearchLoading: T, numResults: b, children: v, coords: S, onHeightChange: M } = e,
        {
            name: A,
            formOpen: j,
            titleFocused: O,
            hasClickedForm: Z,
            textAreaState: L,
            onboardingExpanded: U,
            setEditorAdditionRowHeight: H
        } = (0, J.xH)((e) => {
            let { name: t, formOpen: n, titleFocused: a, hasClickedForm: s, textAreaState: r, onboardingExpanded: l, setEditorAdditionRowHeight: i } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: a,
                hasClickedForm: s,
                textAreaState: r,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: i
            };
        }, c.Z),
        { tagFilter: z, layoutType: V } = (0, B.H)(i.id),
        q = (0, J.AF)(),
        X = (0, B.v)(),
        $ = (0, _.e7)([w.Z], () => w.Z.canChatInGuild(i.guild_id)),
        ee = (0, G.r_)(i),
        en = (0, R.cD)(i),
        [es, er] = s.useState(en),
        [, el] = (0, E.AB)(null !== (r = i.getGuildId()) && void 0 !== r ? r : void 0),
        eo = $ && (en || (es && el)),
        eu = i.isMediaChannel();
    s.useEffect(() => {
        en && er(!0);
    }, [en]);
    let { ref: em, height: eh } = (0, f.Z)();
    s.useEffect(() => {
        null != eh && M(eh);
    }, [M, eh]);
    let e_ = s.useCallback(() => {
        o()(() => {
            null != em.current && q.getState().setEditorHeight(em.current.offsetHeight);
        });
    }, [em, q]);
    s.useLayoutEffect(e_, [e_, C, eo, U]),
        (0, F.yp)({
            event: ei.CkL.REMEASURE_TARGET,
            handler: e_
        });
    let eg = (0, _.e7)([y.Z], () => y.Z.getUploads(i.id, P.d.FirstThreadMessage)),
        ex = (0, G.ql)(i),
        eC = s.useRef(null),
        ef = s.useRef(null),
        [ep, eT] = s.useState(0),
        { width: eI } = (0, _.e7)([D.Z], () => D.Z.windowSize()),
        eE = null === (n = eC.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
        eb = s.useRef(null);
    s.useLayoutEffect(() => {
        var e;
        let t = ef.current,
            n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
        if (null != eC.current && null != n && null != n.children) {
            let { left: e, top: t } = eC.current.getBoundingClientRect(),
                a = 0;
            for (let s of n.children) {
                let { right: n, top: r, height: l } = s.getBoundingClientRect();
                if (r - t > l) break;
                n - e > a && (a = n - e);
            }
            eT(a);
        }
    }, [i.availableTags, eI, eE, z]);
    let eS = A.length > 0 && !j && (T || null != b),
        eM = !__OVERLAY__ && !Z && !j && O && (0 === L.textValue.trim().length || L.textValue.trim() === ex) && 0 === eg.length;
    s.useLayoutEffect(() => {
        let e = eS || eM;
        if (!e) return H(0);
        null != eb.current && H(e ? eb.current.clientHeight : 0);
    }, [H, eS, eM, eb]);
    let eA = (e) => {
            (0, W.e7)({
                guildId: i.guild_id,
                channelId: i.id,
                tagId: e,
                filterTagIds: Array.from(z),
                added: !z.has(e),
                location: {
                    page: ei.ZY5.GUILD_CHANNEL,
                    section: ei.jXE.FORUM_CHANNEL_HEADER,
                    object: ei.qAy.CHANNEL_TAG
                }
            }),
                X.getState().toggleTagFilter(i.id, e);
        },
        ej = (0, u.ZP)({
            id: ''.concat(i.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eN,
            scrollToEnd: eN,
            orientation: m.hy.HORIZONTAL
        }),
        { role: eR, onFocus: eO, ...eZ } = (0, d.JA)('forum-channel-header'),
        eL = s.useRef(null),
        eP = (function () {
            let e = s.useRef(!1),
                t = (0, _.e7)([p.Z], () => p.Z.keyboardModeEnabled),
                n = s.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e]
                );
            return s.useLayoutEffect(() => (t ? window.addEventListener('keydown', n) : window.removeEventListener('keydown', n), () => window.removeEventListener('keydown', n)), [t, n]), e;
        })(),
        ew = s.useCallback(
            (e) => {
                if ((eO(), e.target === em.current && !eP.current)) {
                    var t;
                    null === (t = eL.current) || void 0 === t || t.focus();
                }
            },
            [eO, em, eP]
        );
    return (0, a.jsx)(
        'div',
        {
            className: l()(ed.card, ed.headerRow, ed.columnsSpan),
            ref: em,
            onFocus: ew,
            ...eZ,
            style: {
                ...S,
                position: V === h.X.GRID ? 'absolute' : 'static',
                height: 'auto'
            },
            children: (0, a.jsxs)(F.I3, {
                children: [
                    null != i.guild_id
                        ? (0, a.jsx)(N.Z, {
                              className: l()(ed.newMemberBanner, { [ed.gridViewBanner]: V === h.X.GRID }),
                              guildId: i.guild_id,
                              channel: i
                          })
                        : null,
                    (0, a.jsx)('div', {
                        className: l()(ed.mainCard, ed.header, { [ed.headerWithMatchingPosts]: eS || eM }),
                        children: (0, a.jsx)(Q.Z, {
                            parentChannel: i,
                            onChange: e_,
                            isSearchLoading: T,
                            canCreatePost: eo,
                            inputRef: eL
                        })
                    }),
                    (eS || eM) &&
                        (0, a.jsxs)('div', {
                            className: ed.matchingPostsRow,
                            ref: eb,
                            children: [
                                eS &&
                                    (0, a.jsxs)('div', {
                                        className: ed.matchingPosts,
                                        children: [
                                            (0, a.jsx)(x.Heading, {
                                                variant: 'text-xs/normal',
                                                color: 'text-normal',
                                                children: T
                                                    ? ec.Z.Messages.FORUM_SEARCHING
                                                    : 0 === b
                                                      ? ec.Z.Messages.FORUM_SEARCH_NO_MATCHING_POSTS
                                                      : ec.Z.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
                                                            numPosts: b,
                                                            query: A
                                                        })
                                            }),
                                            !T &&
                                                (0, a.jsx)(x.Clickable, {
                                                    onClick: () => {
                                                        (0, W.zI)({
                                                            guildId: i.guild_id,
                                                            channelId: i.id
                                                        }),
                                                            k.Z.clearForumSearch(i.id),
                                                            q.getState().setName('');
                                                    },
                                                    children: (0, a.jsx)(x.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-brand',
                                                        className: ed.clear,
                                                        children: ec.Z.Messages.CLEAR
                                                    })
                                                })
                                        ]
                                    }),
                                (0, a.jsx)('div', { className: ed.tagsSpacer }),
                                eM
                                    ? eo
                                        ? (0, a.jsxs)('div', {
                                              className: ed.startPostHelp,
                                              children: [
                                                  (0, a.jsx)(x.KeyCombo, {
                                                      shortcut: 'SHIFT',
                                                      className: ed.keyboardShortcut
                                                  }),
                                                  (0, a.jsx)(x.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: '+'
                                                  }),
                                                  (0, a.jsx)(x.KeyCombo, {
                                                      shortcut: 'ENTER',
                                                      className: ed.keyboardShortcut
                                                  }),
                                                  (0, a.jsx)(x.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: ec.Z.Messages.FORUM_ENTER_TO_START_POST
                                                  })
                                              ]
                                          })
                                        : (0, a.jsxs)('div', {
                                              className: ed.startPostHelp,
                                              children: [
                                                  (0, a.jsx)(x.CircleWarningIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      height: 14,
                                                      width: 14,
                                                      className: ed.warnIcon
                                                  }),
                                                  (0, a.jsx)(x.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: ec.Z.Messages.FORUM_NO_POST_PERMISSION_HELP
                                                  })
                                              ]
                                          })
                                    : null
                            ]
                        }),
                    (0, a.jsx)(K.Z, {
                        channel: i,
                        onChange: e_
                    }),
                    (0, a.jsxs)('div', {
                        className: ed.tagsContainer,
                        ref: eC,
                        children: [
                            (0, a.jsx)(ev, { channel: i }),
                            i.availableTags.length > 0
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)('div', { className: ed.divider }),
                                          (0, a.jsx)('div', {
                                              className: ed.tagList,
                                              ref: ef,
                                              children: (0, a.jsx)(d.bG, {
                                                  navigator: ej,
                                                  children: (0, a.jsx)(d.SJ, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, a.jsx)('div', {
                                                              className: ed.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: i.availableTags.map((e) =>
                                                                  (0, a.jsx)(
                                                                      et.Z,
                                                                      {
                                                                          className: ed.tag,
                                                                          tag: e,
                                                                          onClick: () => eA(e.id),
                                                                          selected: z.has(e.id)
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                          });
                                                      }
                                                  })
                                              })
                                          }),
                                          (0, a.jsx)(x.Popout, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, a.jsx)(ea.Z, {
                                                      channel: i,
                                                      closePopout: t,
                                                      setPopoutRef: n
                                                  });
                                              },
                                              position: 'bottom',
                                              align: 'right',
                                              children: (e, t) => {
                                                  let { isShown: n } = t;
                                                  return (0, a.jsxs)(x.Button, {
                                                      ...e,
                                                      size: x.Button.Sizes.MIN,
                                                      color: x.Button.Colors.CUSTOM,
                                                      className: l()(ed.tagsButton, { [ed.tagsButtonWithCount]: z.size > 0 }),
                                                      style: { left: ep },
                                                      innerClassName: ed.tagsButtonInner,
                                                      'aria-label': z.size > 0 ? ec.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : ec.Z.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                                                      children: [
                                                          z.size > 0
                                                              ? (0, a.jsx)('div', {
                                                                    className: ed.countContainer,
                                                                    children: (0, a.jsx)(x.Text, {
                                                                        className: ed.countText,
                                                                        color: 'none',
                                                                        variant: 'text-xs/medium',
                                                                        children: z.size
                                                                    })
                                                                })
                                                              : ec.Z.Messages.FORUM_TAG_ALL,
                                                          n
                                                              ? (0, a.jsx)(x.ChevronSmallUpIcon, {
                                                                    size: 'custom',
                                                                    color: 'currentColor',
                                                                    width: 20
                                                                })
                                                              : (0, a.jsx)(x.ChevronSmallDownIcon, {
                                                                    size: 'custom',
                                                                    color: 'currentColor',
                                                                    width: 20
                                                                })
                                                      ]
                                                  });
                                              }
                                          }),
                                          (0, a.jsxs)(x.Button, {
                                              size: x.Button.Sizes.MIN,
                                              color: x.Button.Colors.CUSTOM,
                                              className: l()(ed.tagsButton, ed.tagsButtonPlaceholder),
                                              innerClassName: ed.tagsButtonInner,
                                              'aria-label': ec.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                                              children: [
                                                  z.size > 0
                                                      ? (0, a.jsx)('div', {
                                                            className: ed.countContainer,
                                                            children: (0, a.jsx)(x.Text, {
                                                                className: ed.countText,
                                                                color: 'none',
                                                                variant: 'text-xs/medium',
                                                                children: z.size
                                                            })
                                                        })
                                                      : null,
                                                  (0, a.jsx)(x.ChevronSmallUpIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 24
                                                  })
                                              ]
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    v,
                    ee &&
                        !eu &&
                        (0, a.jsx)(I.ZP, {
                            contentTypes: [g.z.FORUM_CHANNEL_HELPER_CARD],
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return t === g.z.FORUM_CHANNEL_HELPER_CARD ? (0, a.jsx)(Y.Z, { onDismiss: n }) : null;
                            }
                        })
                ]
            })
        },
        'create-form'
    );
}
function ev(e) {
    let { channel: t } = e,
        n = t.isMediaChannel();
    return (0, a.jsx)(x.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(ee.Z, {
                channel: t,
                closePopout: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, a.jsxs)(x.Button, {
                ...e,
                size: x.Button.Sizes.MIN,
                color: x.Button.Colors.CUSTOM,
                className: ed.sortDropdown,
                innerClassName: ed.sortDropdownInner,
                'aria-label': n ? ec.Z.Messages.MEDIA_CHANNEL_SORT : ec.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
                children: [
                    (0, a.jsx)(x.ArrowsUpDownIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, a.jsx)(x.Text, {
                        className: ed.sortDropdownText,
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        children: n ? ec.Z.Messages.MEDIA_CHANNEL_SORT : ec.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW
                    }),
                    s
                        ? (0, a.jsx)(x.ChevronSmallUpIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                        : (0, a.jsx)(x.ChevronSmallDownIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                ]
            });
        }
    });
}
