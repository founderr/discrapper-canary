"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ed
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(196434),
  o = n.n(i),
  c = n(143927),
  d = n(91192),
  u = n(924826),
  m = n(536895),
  h = n(313361),
  g = n(442837),
  x = n(704215),
  _ = n(481060),
  E = n(561472),
  f = n(393238),
  C = n(607070),
  T = n(933557),
  N = n(243778),
  I = n(71619),
  S = n(898188),
  p = n(256413),
  v = n(292853),
  M = n(359110),
  j = n(344185),
  A = n(235449),
  R = n(665906),
  O = n(488131),
  b = n(433355),
  Z = n(592125),
  L = n(703558),
  P = n(607744),
  D = n(117530),
  y = n(451478),
  U = n(459273),
  F = n(961675),
  w = n(883429),
  H = n(238349),
  k = n(109434),
  B = n(456269),
  G = n(90372),
  z = n(985518),
  V = n(228392),
  W = n(355589),
  q = n(542581),
  K = n(639184),
  Y = n(404616),
  X = n(470623),
  J = n(749913),
  Q = n(219664),
  $ = n(895932),
  ee = n(479099),
  et = n(510060),
  en = n(276357),
  es = n(81490),
  el = n(482062),
  ea = n(260503),
  er = n(981631),
  ei = n(124368),
  eo = n(689938),
  ec = n(101400);

function ed(e) {
  let {
    channel: t,
    guild: n,
    sidebarState: l
  } = e;
  return (0, s.jsx)(X.oL, {
    createStore: () => (0, X.NU)(t),
    children: (0, s.jsx)(ef, {
      channel: t,
      guild: n,
      sidebarState: l
    })
  }, t.id)
}
let eu = new et.Me({
  minWidth: 320,
  maxWidth: 450,
  gap: 16
});

function em(e) {
  return "forum-grid-header-section-".concat(e)
}
let eh = (e, t, n) => 0 === e ? 0 : (0, et.KW)(n);

function eg(e) {
  let {
    itemRole: t,
    coords: n,
    section: l
  } = e;
  return (0, s.jsx)("div", {
    className: r()(ec.card, ec.archivedDividerRow, ec.columnsSpan),
    style: n,
    "data-item-role": t,
    children: (0, s.jsx)("div", {
      className: ec.emptyMainCard,
      children: (0, s.jsx)(_.Heading, {
        variant: "eyebrow",
        className: ec.archivedDivider,
        id: em(l),
        children: eo.Z.Messages.FORUM_SECTION_ARCHIVED
      })
    })
  }, "section-divider")
}

function ex(e) {
  let {
    section: t,
    coords: n,
    key: l,
    isShowingSearchResult: a,
    hasActiveThreads: r
  } = e;
  return () => 2 === t && !a && r ? (0, s.jsx)(eg, {
    section: t,
    coords: null == n ? void 0 : {
      ...n,
      position: "absolute"
    },
    itemRole: "section"
  }, l) : null
}

function e_(e, t) {
  return "card-".concat(e, "-").concat(t)
}

function eE(e) {
  if ("string" == typeof e) {
    let t = e.match(/card-{\d+}-({\d+})$/);
    return null == t ? null : t[1]
  }
  return null
}

function ef(e) {
  let {
    channel: t,
    sidebarState: n
  } = e, {
    editorHeight: a,
    editorAdditionRowHeight: i,
    listViewCardHeights: o,
    formOpen: u
  } = (0, X.xH)(e => {
    let {
      editorHeight: t,
      editorAdditionRowHeight: n,
      listViewCardHeights: s,
      formOpen: l,
      cardHeightVersion: a
    } = e;
    return {
      editorHeight: t,
      editorAdditionRowHeight: n,
      listViewCardHeights: s,
      formOpen: l,
      cardHeightVersion: a
    }
  }, c.Z), {
    activeThreadIds: m,
    archivedThreadIds: x,
    searchResults: f,
    canLoadMore: T,
    loadMore: N,
    activeThreadsLoading: I,
    archivedThreadsLoading: S,
    loading: R,
    isSearchLoading: P,
    layoutType: D
  } = function(e) {
    let {
      sortOrder: t,
      tagFilter: n,
      layoutType: s
    } = (0, k.H)(e.id), l = (0, B.vP)({
      channel: e,
      sortOrder: t,
      tagFilter: n,
      shouldAutomaticallyAck: !0
    }), a = (0, g.e7)([j.Z], () => !j.Z.hasLoaded(e.guild_id)), {
      threadIds: r,
      canLoadMore: i,
      loadMore: o,
      loading: c
    } = (0, A.qQ)(e, t, n), {
      searchResults: d,
      isSearchLoading: u
    } = (0, B.XZ)({
      channelId: e.id
    });
    return (0, B.ES)(e, t, n), {
      activeThreadIds: l,
      archivedThreadIds: r,
      searchResults: d,
      canLoadMore: i,
      loadMore: o,
      loading: a || c || u,
      archivedThreadsLoading: c,
      activeThreadsLoading: a,
      isSearchLoading: u,
      layoutType: s
    }
  }(t), y = m.length > 0, U = y || x.length > 0, H = (0, p.Z)(t), {
    tagFilter: q
  } = (0, k.H)(t.id);
  (0, B.ku)(t, q, u);
  let K = (0, B.jR)(t),
    J = (0, B.eZ)(t),
    $ = l.useRef(null),
    {
      observePostVisibilityAnalytics: ee
    } = function(e) {
      let {
        guildId: t,
        channelId: n,
        scrollerRef: s
      } = e;
      G.Z.useForumChannelSeenManager({
        guildId: t,
        channelId: n
      });
      let a = l.useRef(null),
        r = l.useCallback((e, t) => {
          for (let n of t) {
            let t = n.target.dataset.itemId;
            if (null == t) return;
            let s = Date.now();
            n.intersectionRatio >= .5 ? (0, z.rj)(e, t, s) : (0, z.Ct)(e, t, s)
          }
        }, []);
      return l.useEffect(() => {
        var e;
        let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerNode();
        if (null != t) return a.current = new IntersectionObserver(e => r(n, e), {
          root: t,
          rootMargin: "0px 100000px 0px 100000px",
          threshold: .5
        }), () => {
          var e;
          null === (e = a.current) || void 0 === e || e.disconnect(), a.current = null
        }
      }, [n, r, s]), {
        observePostVisibilityAnalytics: l.useCallback((e, t) => {
          var s;
          if (null == e) {
            (0, z.Ct)(n, t, Date.now());
            return
          }
          null === (s = a.current) || void 0 === s || s.observe(e)
        }, [n])
      }
    }({
      scrollerRef: $,
      channelId: t.id,
      guildId: t.guild_id
    }),
    en = D === h.X.GRID,
    ed = null != f,
    eg = l.useRef(null),
    {
      containerRef: ef,
      containerWidth: eI
    } = (0, es.Z)();
  l.useEffect(() => () => {
    null != t.id && w.Z.clearForumSearch(t.id)
  }, [t.id]);
  let {
    columns: ep
  } = l.useMemo(() => en ? eu.getRenderOptions(eI) : et.eU, [en, eI]), ev = l.useMemo(() => R ? Math.round((window.innerHeight - 200) / 118) : 0, [R]), eM = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eI))) * ep;
    return I ? e : 0
  }, [eI, ep, I]), ej = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eI))) * ep;
    return S ? e : 0
  }, [eI, ep, S]), eA = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eI))) * ep;
    return P && ed ? e : 0
  }, [eI, ep, P, ed]), eR = l.useMemo(() => {
    if (en) {
      if (!K && ed) return [1, 0];
      if (!J) return [1, m.length + eM, 0];
      else if (ed) return [1, f.length + eA, 0];
      else return [1, m.length + eM, x.length + ej]
    }
    if (!K && ed) return [1, 1];
    if (!J) return [1, m.length, 1];
    else if (ed) return [1, f.length, 0, ev];
    else return [1, m.length, x.length, ev]
  }, [en, ed, m.length, x.length, K, J, ev, f, eM, ej, eA]), eO = l.useMemo(() => {
    if (!K && ed) return [
      [],
      []
    ];
    if (!J) return [
      [], m, []
    ];
    if (ed) return [
      [], f, [],
      []
    ];
    else return [
      [], m, x, []
    ]
  }, [ed, K, J, f, m, x]), eb = l.useCallback((e, n) => {
    (0, V.B5)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: e.id,
      location: {
        page: er.ZY5.GUILD_CHANNEL,
        section: er.jXE.FORUM_CHANNEL_POST
      }
    }), n ? (0, M.ad)(e, ei.on.BROWSER) : (eg.current = e.id, (0, O.ok)(e))
  }, [t.guild_id, t.id, eg]), [eZ, eL] = l.useState(a + i - 24), eP = l.useCallback((e, n, l) => 0 === e ? (0, s.jsx)(eS, {
    channel: t,
    isEmpty: !y,
    isSearchLoading: P,
    numResults: null == f ? void 0 : f.length,
    coords: n,
    onHeightChange: eL,
    children: !R && (0, s.jsx)(W.Z, {
      channel: t,
      hasAnyThread: U
    }, t.id)
  }, "forum-channel-header") : 2 !== e || J ? 1 === e && ed && !K ? (0, s.jsx)(eT, {
    channel: t,
    coords: n
  }, "archive-or-search-result") : l() : (0, s.jsx)(eC, {
    channel: t,
    coords: n
  }, "archived-missing-reading-history-perm"), [ed, J, f, K, t, y, P, R, U]), eD = (0, g.e7)([F.Z], () => F.Z.hasHidden(t.id));
  l.useEffect(() => {
    var e, t;
    let n = en ? ek : $,
      s = null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState();
    null != s && !eD && s.scrollTop > a && (null === (t = n.current) || void 0 === t || t.scrollTo({
      to: 0
    }))
  }, [eD]);
  let {
    updateListScrollerRef: ey,
    renderListSection: eU,
    renderListItem: eF,
    getListSectionHeight: ew,
    getListItemHeight: eH
  } = function(e) {
    let {
      listRef: t,
      hasActiveThreads: n,
      threadIdsBySection: a,
      listViewCardHeights: i,
      editorHeight: o,
      editorAdditionRowHeight: c,
      renderSectionOrItem: d,
      goToThread: u,
      observePostVisibilityAnalytics: m,
      isShowingSearchResult: h
    } = e, g = l.useCallback(e => n => {
      var s;
      t.current = n, e.current = null !== (s = null == n ? void 0 : n.getScrollerNode()) && void 0 !== s ? s : null
    }, [t]), x = l.useCallback(e => ex({
      section: e.section,
      isShowingSearchResult: h,
      hasActiveThreads: n
    })(), [n, h]), E = l.useCallback(e => d(e.section, void 0, () => {
      if (3 === e.section) return __OVERLAY__ ? null : (0, s.jsx)("div", {
        "data-item-role": "item",
        className: r()(ec.loadingCard, ec["loadingCard-".concat(e.row % 3)])
      }, "loading-".concat(e.row));
      let t = a[e.section][e.row];
      return (0, s.jsx)("li", {
        className: ec.card,
        "data-item-role": "item",
        children: (0, s.jsx)(_.HeadingLevel, {
          children: (0, s.jsx)(Y.ZP, {
            className: ec.mainCard,
            threadId: t,
            goToThread: u,
            observePostVisibilityAnalytics: m
          })
        })
      }, "".concat(e.section, "-").concat(t))
    }), [d, a, u, m]), f = l.useCallback((e, t) => {
      if (0 === e) return o + c;
      let n = i[a[e][t]];
      return null == n ? 104 : n + 8
    }, [a, i, o, c]);
    return {
      updateListScrollerRef: g,
      renderListSection: x,
      renderListItem: E,
      getListSectionHeight: l.useCallback(e => 2 === e && n ? 40 : 0, [n]),
      getListItemHeight: f
    }
  }({
    listRef: $,
    hasActiveThreads: y,
    threadIdsBySection: eO,
    listViewCardHeights: o,
    editorHeight: a,
    editorAdditionRowHeight: i,
    renderSectionOrItem: eP,
    goToThread: eb,
    observePostVisibilityAnalytics: ee,
    isShowingSearchResult: ed
  }), ek = l.useRef(null), {
    updateMasonryListScrollerRef: eB,
    getItemKey: eG,
    renderGridSection: ez,
    renderGridItem: eV,
    getGridSectionHeight: eW,
    getSectionProps: eq,
    handleGridFocus: eK
  } = function(e) {
    let {
      masonryListScrollerRef: t,
      threadIdsBySection: n,
      goToThread: a,
      renderSectionOrItem: i,
      hasActiveThreads: o,
      isShowingSearchResult: c,
      canSearchForumPosts: d,
      canViewArchivedPosts: u,
      observePostVisibilityAnalytics: m,
      focusedThreadId: h,
      headerHeight: g
    } = e, x = l.useRef(null), _ = l.useCallback(e => {
      t.current = e, x.current = null == e ? void 0 : e.getScrollerNode()
    }, [t]), E = l.useCallback((e, n) => {
      let {
        current: s
      } = t;
      if (null == s) return;
      let l = document.querySelector(e);
      if (null == l) return;
      let a = s.getCoordsMap()[n],
        r = null != a ? a.height + 20 : 200;
      s.scrollIntoViewNode({
        node: l,
        padding: r,
        callback() {
          requestAnimationFrame(() => {
            var t;
            null === (t = document.querySelector(e)) || void 0 === t || t.focus({
              preventScroll: !0
            })
          })
        }
      }), h.current = eE(n)
    }, [t, h]), f = l.useCallback(e => {
      let t = eE(e);
      if (null == t) return;
      let n = Z.Z.getChannel(t);
      null != n && a(n, !0)
    }, [a]), C = l.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (0 === n[e].length) return "section-".concat(e, "-").concat(t);
      {
        let s = n[e][t];
        return null == s ? e_(e, t) : e_(e, s)
      }
    }, [n]), T = l.useCallback((e, t, n) => i(e, t, ex({
      section: e,
      coords: t,
      key: n,
      isShowingSearchResult: c,
      hasActiveThreads: o
    })), [i, o, c]), N = l.useCallback(e => 0 === e ? {} : {
      role: "grid",
      "aria-labelledby": "#".concat(em(e))
    }, []), I = l.useCallback((e, t, l, i, o) => {
      if (0 === e) return null;
      let c = n[e][t];
      return null != c ? (0, s.jsx)(Q.Z, {
        id: "".concat(i),
        threadId: c,
        className: r()(ec.card, ec.mainCard),
        goToThread: a,
        observePostVisibilityAnalytics: m,
        coords: l,
        gridCoords: o.coordinates[i],
        gridSectionBoundaries: o.boundaries
      }, i) : __OVERLAY__ ? null : (0, s.jsx)("div", {
        style: {
          ...l
        },
        "data-item-role": "item",
        className: r()(ec.loadingCard, ec["loadingCard-".concat(t % 3)])
      }, i)
    }, [n, a, m]);
    return {
      updateMasonryListScrollerRef: _,
      masonryListContainerRef: x,
      focusedThreadId: h,
      handleGridFocus: E,
      handleGridSelect: f,
      getItemKey: C,
      renderGridSection: T,
      renderGridItem: I,
      getSectionProps: N,
      getGridSectionHeight: l.useCallback(e => 0 === e ? g - 8 - 24 : 2 === e ? o || !u ? 40 : 0 : 1 === e && c && !d ? 40 : 0, [g, c, d, o, u])
    }
  }({
    masonryListScrollerRef: ek,
    threadIdsBySection: eO,
    goToThread: eb,
    renderSectionOrItem: eP,
    hasActiveThreads: y,
    isShowingSearchResult: ed,
    canSearchForumPosts: K,
    canViewArchivedPosts: J,
    observePostVisibilityAnalytics: ee,
    focusedThreadId: eg,
    headerHeight: eZ
  });
  ! function(e) {
    let {
      masonryListScrollerRef: t,
      containerWidth: n,
      isGridLayout: s,
      threadIdsBySection: a,
      focusedThreadId: r,
      parentId: i
    } = e;
    l.useEffect(() => {
      if (s) {
        let e = setTimeout(() => {
          if (null == t.current || null == r.current) return;
          let e = r.current;
          if ("string" != typeof e) return;
          if (null == b.ZP.getSidebarState(i)) {
            r.current = null;
            return
          }
          let n = a.findIndex(t => t.find(t => t === e)),
            s = t.current.getCoordsMap(),
            l = s["__section__".concat(n)],
            o = s[e_(n, e)];
          null != l && null != o && t.current.scrollIntoViewRect({
            start: l.top + o.top - 100,
            end: l.top + o.top + o.height + 50
          })
        }, 500);
        return () => clearTimeout(e)
      }
    }, [i, n, s, a, r, t])
  }({
    masonryListScrollerRef: ek,
    containerWidth: eI,
    isGridLayout: en,
    threadIdsBySection: eO,
    parentId: t.id,
    focusedThreadId: eg
  });
  let eY = l.useCallback(() => {
      var e, n;
      if (ed) return;
      let s = en ? null === (e = ek.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (n = $.current) || void 0 === n ? void 0 : n.getScrollerState();
      if (null == s) return;
      (0, V.ab)({
        guildId: t.guild_id,
        channelId: t.id
      });
      let l = s.scrollTop + s.offsetHeight,
        a = s.scrollHeight - l;
      a < (en ? Math.max(200, (0, et.KW)(eI)) : 200) && N()
    }, [ed, en, t.guild_id, t.id, eI, N]),
    eX = (0, g.e7)([C.Z], () => C.Z.keyboardModeEnabled),
    eJ = (0, el.ZP)({
      id: "forum-grid-view",
      isEnabled: en && eX,
      setFocus: eK
    }),
    eQ = (0, ea.Z)({
      listRef: $,
      padding: 96,
      isEnabled: !en && eX,
      channel: t
    }),
    {
      ref: e$,
      ...e0
    } = eJ.containerProps,
    e1 = b.ZP.getSidebarState(t.id),
    e2 = null != e1 && (0, b.D5)(e1);
  return (0, s.jsx)("div", {
    className: ec.container,
    ref: ef,
    children: (0, s.jsx)(_.FocusJumpSection, {
      children: e => (0, s.jsxs)(s.Fragment, {
        children: [u && (0, s.jsx)(E.Z, {
          channel: t,
          draftType: L.d.FirstThreadMessage,
          className: ec.uploadArea,
          style: {
            right: e2 && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0
          }
        }), (0, s.jsx)(eN, {
          channel: t
        }), (0, s.jsx)(_.HiddenVisually, {
          children: (0, s.jsx)(_.H, {
            children: eo.Z.Messages.THREADS
          })
        }), H ? (0, s.jsx)("div", {
          className: ec.optInNotice,
          children: (0, s.jsx)(v.Z, {
            channel: t
          })
        }) : null, en ? (0, s.jsx)(el.KT, {
          navigator: eJ,
          children: (0, s.jsx)(_.MasonryList, {
            ref: e => {
              var t;
              e$.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, eB(e)
            },
            itemGutter: 16,
            padding: 24,
            className: ec.grid,
            columns: ep,
            sections: eR,
            getItemKey: eG,
            getSectionHeight: eW,
            getItemHeight: eh,
            renderSection: ez,
            renderItem: eV,
            getSectionProps: eq,
            onScroll: T ? eY : void 0,
            chunkSize: 350,
            ...e0,
            ...e
          }, D)
        }) : (0, s.jsx)(d.bG, {
          navigator: eQ,
          children: (0, s.jsx)(d.SJ, {
            children: t => {
              let {
                ref: n,
                ...l
              } = t;
              return (0, s.jsx)(_.ListAuto, {
                ref: ey(n),
                className: ec.list,
                sections: eR,
                sectionHeight: ew,
                rowHeight: eH,
                renderRow: eF,
                renderSection: eU,
                chunkSize: 150,
                onScroll: T ? eY : void 0,
                paddingBottom: 24,
                ...l,
                ...e,
                innerRole: "list"
              }, D)
            }
          })
        })]
      })
    })
  })
}

function eC(e) {
  let {
    channel: t,
    coords: n
  } = e, l = (0, T.ZP)(t);
  return (0, s.jsx)("div", {
    className: r()(ec.missingReadHistoryPermission, ec.columnsSpan),
    style: n,
    children: (0, s.jsx)(_.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: eo.Z.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
        channelName: l
      })
    })
  })
}

function eT(e) {
  let {
    channel: t,
    coords: n
  } = e, l = (0, T.ZP)(t);
  return (0, s.jsx)("div", {
    className: r()(ec.missingReadHistoryPermission, ec.columnsSpan),
    style: n,
    children: (0, s.jsx)(_.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: eo.Z.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
        channelName: l
      })
    })
  })
}

function eN(e) {
  let {
    channel: t
  } = e, n = l.useCallback(() => {
    w.Z.resort(t.id)
  }, [t]), a = (0, g.e7)([H.Z], () => H.Z.getNewThreadCount());
  return 0 === a ? null : (0, s.jsx)(_.Clickable, {
    className: ec.newPostsButton,
    onClick: n,
    children: (0, s.jsx)(_.Text, {
      color: "text-brand",
      variant: "text-md/medium",
      children: eo.Z.Messages.NEW_FORUM_POST_COUNT.format({
        count: a
      })
    })
  })
}

function eI() {
  return Promise.resolve()
}

function eS(e) {
  var t, n, a;
  let {
    channel: i,
    isEmpty: E,
    isSearchLoading: T,
    numResults: p,
    children: v,
    coords: M,
    onHeightChange: j
  } = e, {
    name: A,
    formOpen: O,
    titleFocused: b,
    hasClickedForm: Z,
    textAreaState: F,
    onboardingExpanded: H,
    setEditorAdditionRowHeight: G
  } = (0, X.xH)(e => {
    let {
      name: t,
      formOpen: n,
      titleFocused: s,
      hasClickedForm: l,
      textAreaState: a,
      onboardingExpanded: r,
      setEditorAdditionRowHeight: i
    } = e;
    return {
      name: t,
      formOpen: n,
      titleFocused: s,
      hasClickedForm: l,
      textAreaState: a,
      onboardingExpanded: r,
      setEditorAdditionRowHeight: i
    }
  }, c.Z), {
    tagFilter: z,
    layoutType: W
  } = (0, k.H)(i.id), Y = (0, X.AF)(), Q = (0, k.v)(), $ = (0, g.e7)([P.Z], () => P.Z.canChatInGuild(i.guild_id)), et = (0, B.r_)(i), es = (0, R.cD)(i), [el, ea] = l.useState(es), [, ei] = (0, I.AB)(null !== (a = i.getGuildId()) && void 0 !== a ? a : void 0), ed = $ && (es || el && ei), eu = i.isMediaChannel();
  l.useEffect(() => {
    es && ea(!0)
  }, [es]);
  let {
    ref: em,
    height: eh
  } = (0, f.Z)();
  l.useEffect(() => {
    null != eh && j(eh)
  }, [j, eh]);
  let eg = l.useCallback(() => {
    o()(() => {
      null != em.current && Y.getState().setEditorHeight(em.current.offsetHeight)
    })
  }, [em, Y]);
  l.useLayoutEffect(eg, [eg, E, ed, H]), (0, U.yp)({
    event: er.CkL.REMEASURE_TARGET,
    handler: eg
  });
  let ex = (0, g.e7)([D.Z], () => D.Z.getUploads(i.id, L.d.FirstThreadMessage)),
    e_ = (0, B.ql)(i),
    eE = l.useRef(null),
    ef = l.useRef(null),
    [eC, eT] = l.useState(0),
    {
      width: eN
    } = (0, g.e7)([y.Z], () => y.Z.windowSize()),
    eS = null === (n = eE.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
    ev = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    let t = ef.current,
      n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
    if (null != eE.current && null != n && null != n.children) {
      let {
        left: e,
        top: t
      } = eE.current.getBoundingClientRect(), s = 0;
      for (let l of n.children) {
        let {
          right: n,
          top: a,
          height: r
        } = l.getBoundingClientRect();
        if (a - t > r) break;
        n - e > s && (s = n - e)
      }
      eT(s)
    }
  }, [i.availableTags, eN, eS, z]);
  let eM = A.length > 0 && !O && (T || null != p),
    ej = !__OVERLAY__ && !Z && !O && b && (0 === F.textValue.trim().length || F.textValue.trim() === e_) && 0 === ex.length;
  l.useLayoutEffect(() => {
    let e = eM || ej;
    if (!e) return G(0);
    null != ev.current && G(e ? ev.current.clientHeight : 0)
  }, [G, eM, ej, ev]);
  let eA = e => {
      (0, V.e7)({
        guildId: i.guild_id,
        channelId: i.id,
        tagId: e,
        filterTagIds: Array.from(z),
        added: !z.has(e),
        location: {
          page: er.ZY5.GUILD_CHANNEL,
          section: er.jXE.FORUM_CHANNEL_HEADER,
          object: er.qAy.CHANNEL_TAG
        }
      }), Q.getState().toggleTagFilter(i.id, e)
    },
    eR = (0, u.ZP)({
      id: "".concat(i.id, "-tags-navigator"),
      isEnabled: !0,
      wrap: !0,
      scrollToStart: eI,
      scrollToEnd: eI,
      orientation: m.hy.HORIZONTAL
    }),
    {
      role: eO,
      onFocus: eb,
      ...eZ
    } = (0, d.JA)("forum-channel-header"),
    eL = l.useRef(null),
    eP = function() {
      let e = l.useRef(!1),
        t = (0, g.e7)([C.Z], () => C.Z.keyboardModeEnabled),
        n = l.useCallback(t => {
          e.current = t.shiftKey
        }, [e]);
      return l.useLayoutEffect(() => (t ? window.addEventListener("keydown", n) : window.removeEventListener("keydown", n), () => window.removeEventListener("keydown", n)), [t, n]), e
    }(),
    eD = l.useCallback(e => {
      if (eb(e), e.target === em.current && !eP.current) {
        var t;
        null === (t = eL.current) || void 0 === t || t.focus()
      }
    }, [eb, em, eP]);
  return (0, s.jsx)("div", {
    className: r()(ec.card, ec.headerRow, ec.columnsSpan),
    ref: em,
    onFocus: eD,
    ...eZ,
    style: {
      ...M,
      position: W === h.X.GRID ? "absolute" : "static",
      height: "auto"
    },
    children: (0, s.jsxs)(U.I3, {
      children: [null != i.guild_id ? (0, s.jsx)(S.Z, {
        className: r()(ec.newMemberBanner, {
          [ec.gridViewBanner]: W === h.X.GRID
        }),
        guildId: i.guild_id,
        channel: i
      }) : null, (0, s.jsx)("div", {
        className: r()(ec.mainCard, ec.header, {
          [ec.headerWithMatchingPosts]: eM || ej
        }),
        children: (0, s.jsx)(J.Z, {
          parentChannel: i,
          onChange: eg,
          isSearchLoading: T,
          canCreatePost: ed,
          inputRef: eL
        })
      }), (eM || ej) && (0, s.jsxs)("div", {
        className: ec.matchingPostsRow,
        ref: ev,
        children: [eM && (0, s.jsxs)("div", {
          className: ec.matchingPosts,
          children: [(0, s.jsx)(_.Heading, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: T ? eo.Z.Messages.FORUM_SEARCHING : 0 === p ? eo.Z.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : eo.Z.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
              numPosts: p,
              query: A
            })
          }), !T && (0, s.jsx)(_.Clickable, {
            onClick: () => {
              (0, V.zI)({
                guildId: i.guild_id,
                channelId: i.id
              }), w.Z.clearForumSearch(i.id), Y.getState().setName("")
            },
            children: (0, s.jsx)(_.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              className: ec.clear,
              children: eo.Z.Messages.CLEAR
            })
          })]
        }), (0, s.jsx)("div", {
          className: ec.tagsSpacer
        }), ej ? ed ? (0, s.jsxs)("div", {
          className: ec.startPostHelp,
          children: [(0, s.jsx)(_.KeyCombo, {
            shortcut: "SHIFT",
            className: ec.keyboardShortcut
          }), (0, s.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: "+"
          }), (0, s.jsx)(_.KeyCombo, {
            shortcut: "ENTER",
            className: ec.keyboardShortcut
          }), (0, s.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: eo.Z.Messages.FORUM_ENTER_TO_START_POST
          })]
        }) : (0, s.jsxs)("div", {
          className: ec.startPostHelp,
          children: [(0, s.jsx)(_.CircleExclamationPointIcon, {
            size: "custom",
            color: "currentColor",
            height: 14,
            width: 14,
            className: ec.warnIcon
          }), (0, s.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: eo.Z.Messages.FORUM_NO_POST_PERMISSION_HELP
          })]
        }) : null]
      }), (0, s.jsx)(q.Z, {
        channel: i,
        onChange: eg
      }), (0, s.jsxs)("div", {
        className: ec.tagsContainer,
        ref: eE,
        children: [(0, s.jsx)(ep, {
          channel: i
        }), i.availableTags.length > 0 ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: ec.divider
          }), (0, s.jsx)("div", {
            className: ec.tagList,
            ref: ef,
            children: (0, s.jsx)(d.bG, {
              navigator: eR,
              children: (0, s.jsx)(d.SJ, {
                children: e => {
                  let {
                    ref: t,
                    ...n
                  } = e;
                  return (0, s.jsx)("div", {
                    className: ec.tagListInner,
                    ref: t,
                    ...n,
                    children: i.availableTags.map(e => (0, s.jsx)(ee.Z, {
                      className: ec.tag,
                      tag: e,
                      onClick: () => eA(e.id),
                      selected: z.has(e.id)
                    }, e.id))
                  })
                }
              })
            })
          }), (0, s.jsx)(_.Popout, {
            renderPopout: e => {
              let {
                closePopout: t,
                setPopoutRef: n
              } = e;
              return (0, s.jsx)(en.Z, {
                channel: i,
                closePopout: t,
                setPopoutRef: n
              })
            },
            position: "bottom",
            align: "right",
            children: (e, t) => {
              let {
                isShown: n
              } = t;
              return (0, s.jsxs)(_.Button, {
                ...e,
                size: _.Button.Sizes.MIN,
                color: _.Button.Colors.CUSTOM,
                className: r()(ec.tagsButton, {
                  [ec.tagsButtonWithCount]: z.size > 0
                }),
                style: {
                  left: eC
                },
                innerClassName: ec.tagsButtonInner,
                "aria-label": z.size > 0 ? eo.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : eo.Z.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                children: [z.size > 0 ? (0, s.jsx)("div", {
                  className: ec.countContainer,
                  children: (0, s.jsx)(_.Text, {
                    className: ec.countText,
                    color: "none",
                    variant: "text-xs/medium",
                    children: z.size
                  })
                }) : eo.Z.Messages.FORUM_TAG_ALL, n ? (0, s.jsx)(_.ChevronSmallUpIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 20
                }) : (0, s.jsx)(_.ChevronSmallDownIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 20
                })]
              })
            }
          }), (0, s.jsxs)(_.Button, {
            size: _.Button.Sizes.MIN,
            color: _.Button.Colors.CUSTOM,
            className: r()(ec.tagsButton, ec.tagsButtonPlaceholder),
            innerClassName: ec.tagsButtonInner,
            "aria-label": eo.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
            children: [z.size > 0 ? (0, s.jsx)("div", {
              className: ec.countContainer,
              children: (0, s.jsx)(_.Text, {
                className: ec.countText,
                color: "none",
                variant: "text-xs/medium",
                children: z.size
              })
            }) : null, (0, s.jsx)(_.ChevronSmallUpIcon, {
              size: "custom",
              color: "currentColor",
              width: 24
            })]
          })]
        }) : null]
      }), v, et && !eu && (0, s.jsx)(N.Z, {
        contentTypes: [x.z.FORUM_CHANNEL_HELPER_CARD],
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          return t === x.z.FORUM_CHANNEL_HELPER_CARD ? (0, s.jsx)(K.Z, {
            onDismiss: n
          }) : null
        }
      })]
    })
  }, "create-form")
}

function ep(e) {
  let {
    channel: t
  } = e, n = t.isMediaChannel();
  return (0, s.jsx)(_.Popout, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, s.jsx)($.Z, {
        channel: t,
        closePopout: n
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, s.jsxs)(_.Button, {
        ...e,
        size: _.Button.Sizes.MIN,
        color: _.Button.Colors.CUSTOM,
        className: ec.sortDropdown,
        innerClassName: ec.sortDropdownInner,
        "aria-label": n ? eo.Z.Messages.MEDIA_CHANNEL_SORT : eo.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
        children: [(0, s.jsx)(_.ArrowsUpDownIcon, {
          size: "xs",
          color: "currentColor"
        }), (0, s.jsx)(_.Text, {
          className: ec.sortDropdownText,
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: n ? eo.Z.Messages.MEDIA_CHANNEL_SORT : eo.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW
        }), l ? (0, s.jsx)(_.ChevronSmallUpIcon, {
          size: "custom",
          color: "currentColor",
          width: 20
        }) : (0, s.jsx)(_.ChevronSmallDownIcon, {
          size: "custom",
          color: "currentColor",
          width: 20
        })]
      })
    }
  })
}