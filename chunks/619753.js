"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("724458"), n("653041"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("739940"),
  i = n("481060"),
  r = n("668781"),
  o = n("904245"),
  u = n("603263"),
  d = n("963374"),
  c = n("607070"),
  f = n("933557"),
  h = n("995123"),
  m = n("200120"),
  p = n("255269"),
  E = n("937889"),
  C = n("703656"),
  g = n("359110"),
  S = n("695346"),
  _ = n("592125"),
  T = n("430824"),
  I = n("496675"),
  A = n("699516"),
  N = n("768119"),
  v = n("944486"),
  x = n("594174"),
  M = n("68588"),
  R = n("93879"),
  y = n("101695"),
  L = n("683101"),
  O = n("981631"),
  j = n("689938"),
  P = n("582219");

function D(e) {
  var t;
  let {
    search: n,
    searchId: f,
    renderEmbeds: h,
    scrollTo: m,
    searchResults: p,
    blockCount: E,
    onChangePage: g
  } = e, {
    offset: S,
    totalResults: T,
    isSearching: I,
    showBlockedResults: v
  } = n, x = l.useCallback(e => {
    if (I) return;
    let t = e - 1;
    null == g || g(t), u.changePage(f, t)
  }, [f, I, g]), M = l.useCallback(e => {
    if (e.blocked) r.default.show({
      title: j.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: j.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: e.author.username
      }),
      confirmText: j.default.Messages.OKAY
    });
    else {
      let t = _.default.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      o.default.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: N.default.getAnalyticsId(f)
      }), (0, C.transitionTo)(O.Routes.CHANNEL(n, e.channel_id, e.id))
    }
  }, [f]), R = l.useMemo(() => {
    let e;
    if (null == p) return [];
    let t = 0;
    return p.reduce((n, a) => {
      let l = a.find(e => e.isSearchHit);
      if (!v && null != l && A.default.isBlocked(l.author.id)) return n;
      let s = _.default.getChannel(a[0].channel_id);
      return null == s ? n : ((null == e || e !== s.id) && n.push({
        channel: s,
        results: [],
        startIndex: t
      }), t += 1, n[n.length - 1].results.push(a), e = null == s ? void 0 : s.id, n)
    }, [])
  }, [p, v]), L = l.useRef([]), D = R.reduce((e, t) => e + 1 + t.results.length, 0), U = l.useCallback((e, t) => {
    if (!c.default.keyboardModeEnabled) return;
    let n = L.current,
      a = null != t ? n[t] : void 0;
    if (null == a || null == a.hitRef.current) return;
    let l = a.hitRef.current.getClientRects()[0];
    m(l.top - .5 * l.height, !1, () => {
      var t;
      null === (t = document.getElementById(e)) || void 0 === t || t.focus()
    })
  }, [m]), F = l.useCallback(e => {
    let t = L.current[e];
    null == t || t.jumpTo()
  }, []), w = (0, s.useListNavigator)({
    navId: "search-results",
    itemCount: D,
    focusedIndex: 0,
    setFocus: U,
    onSelect: F
  }), k = N.default.getQuery(f), H = N.default.getSearchType(f) === O.SearchTypes.FAVORITES, B = (0, d.createASTHighlighter)(null !== (t = null == k ? void 0 : k.content) && void 0 !== t ? t : ""), G = R.map(e => {
    let {
      channel: t,
      results: n,
      startIndex: l
    } = e;
    return (0, a.jsx)(b, {
      channel: t,
      results: n,
      highlighter: B,
      startIndex: l,
      resultRefs: L,
      totalResults: T,
      scrollTo: m,
      searchId: f,
      renderEmbeds: h,
      offset: S,
      jumpToMessage: M,
      listNavigator: w,
      favoriteSearch: H
    }, "".concat(t.id, "-").concat(l))
  });
  G.push();
  let V = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    null === (e = V.current) || void 0 === e || e.focus()
  }, [p]);
  let W = (0, i.useFocusJumpSection)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: V,
      ...w.getContainerProps(),
      ...W,
      "aria-busy": I,
      children: G
    }), E > 0 ? (0, a.jsxs)(i.Clickable, {
      tag: "div",
      className: P.resultsBlocked,
      onClick: () => u.setShowBlockedResults(f, !v),
      children: [(0, a.jsx)("div", {
        className: P.resultsBlockedImage
      }), (0, a.jsx)("div", {
        className: P.__invalid_resultsBlockedText,
        children: v ? j.default.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({
          count: E
        }) : j.default.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({
          count: E
        })
      })]
    }) : null, !I && !H && (0, a.jsx)(y.default, {
      changePage: x,
      offset: S,
      totalResults: T,
      pageLength: O.SEARCH_PAGE_SIZE
    })]
  })
}

function b(e) {
  var t, n;
  let {
    channel: s,
    results: r,
    highlighter: o,
    startIndex: u,
    resultRefs: d,
    totalResults: c,
    scrollTo: C,
    searchId: N,
    renderEmbeds: y,
    offset: j,
    jumpToMessage: D,
    listNavigator: b,
    favoriteSearch: U
  } = e, F = S.RenderSpoilers.useSetting(), w = (0, m.useShouldFilterKeywords)(), k = l.useCallback(e => {
    if (e === v.default.getChannelId()) return;
    let t = _.default.getChannel(e);
    if (null != t) I.default.can(O.Permissions.VIEW_CHANNEL, t) && (0, g.transitionToChannel)(t.id)
  }, []), H = null != s ? (0, f.computeChannelName)(s, x.default, A.default, !1) : "???", B = U && null != s.guild_id ? null === (t = T.default.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name : null, G = (null == s ? void 0 : s.parent_id) != null ? _.default.getChannel(s.parent_id) : null, V = null != G ? G.name : null, W = null !== (n = (0, h.default)(s)) && void 0 !== n ? n : R.default, Y = null != G ? (0, h.default)(G) : null, z = I.default.can(O.Permissions.MANAGE_MESSAGES, s), {
    content: K
  } = (0, E.default)({
    content: H,
    embeds: []
  }, {
    postProcessor: o,
    shouldFilterKeywords: w
  }), Z = l.useRef(null), [q, X] = l.useState(!1);
  l.useEffect(() => {
    let e = Z.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth)
  }, []);
  let Q = [H, V, B].filter(e => null != e).join(", ");
  return (0, a.jsx)(M.ObscuredDisplayContext.Provider, {
    value: (0, p.default)(F, z),
    children: (0, a.jsxs)("ul", {
      role: "group",
      className: P.searchResultGroup,
      "aria-label": Q,
      children: [(0, a.jsx)(i.Clickable, {
        onClick: () => k(s.id),
        children: (0, a.jsxs)("div", {
          className: P.channelNameContainer,
          children: [(0, a.jsx)(W, {
            className: P.channelNameIcon,
            width: 16,
            height: 16
          }), (0, a.jsx)(i.Tooltip, {
            text: H,
            shouldShow: q,
            children: e => (0, a.jsxs)("span", {
              ...e,
              ref: Z,
              className: P.channelNameText,
              children: [U && null !== B && "".concat(B, " : "), K]
            })
          }), null != G && null != V && null != Y ? (0, a.jsxs)(i.Clickable, {
            className: P.parentChannelNameClickable,
            onClick: e => {
              e.stopPropagation(), k(G.id)
            },
            children: [(0, a.jsx)(Y, {
              className: P.parentChannelNameIcon,
              width: 12,
              height: 12
            }), (0, a.jsx)(i.Text, {
              className: P.parentChannelNameText,
              variant: "text-xs/medium",
              color: "header-secondary",
              children: V
            })]
          }) : null]
        })
      }), r.map((e, t) => {
        let n = u + t;
        return (0, a.jsx)(L.default, {
          ref: e => d.current[n] = e,
          totalResults: c,
          scrollTo: C,
          searchId: N,
          renderEmbeds: y,
          searchOffset: j,
          pageResultsLength: r.length,
          result: e,
          index: n,
          onJump: D,
          listItemProps: b.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}