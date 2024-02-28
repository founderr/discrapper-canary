"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("808653"), n("424973"), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("880317"),
  i = n("77078"),
  r = n("404118"),
  u = n("819689"),
  o = n("378438"),
  d = n("419135"),
  c = n("206230"),
  f = n("679653"),
  h = n("619335"),
  m = n("70845"),
  p = n("95045"),
  E = n("393414"),
  g = n("144491"),
  C = n("845579"),
  S = n("42203"),
  _ = n("305961"),
  I = n("957255"),
  T = n("27618"),
  v = n("744983"),
  x = n("18494"),
  N = n("697218"),
  A = n("505684"),
  M = n("593195"),
  R = n("420861"),
  j = n("18061"),
  L = n("49111"),
  O = n("782340"),
  y = n("680221");

function P(e) {
  var t;
  let {
    search: n,
    searchId: f,
    renderEmbeds: h,
    scrollTo: m,
    searchResults: p,
    blockCount: g,
    onChangePage: C
  } = e, {
    offset: _,
    totalResults: I,
    isSearching: x,
    showBlockedResults: N
  } = n, A = a.useCallback(e => {
    if (x) return;
    let t = e - 1;
    null == C || C(t), o.changePage(f, t)
  }, [f, x, C]), M = a.useCallback(e => {
    if (e.blocked) r.default.show({
      title: O.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: O.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: e.author.username
      }),
      confirmText: O.default.Messages.OKAY
    });
    else {
      let t = S.default.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      u.default.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: v.default.getAnalyticsId(f)
      }), (0, E.transitionTo)(L.Routes.CHANNEL(n, e.channel_id, e.id))
    }
  }, [f]), j = a.useMemo(() => {
    let e;
    if (null == p) return [];
    let t = 0;
    return p.reduce((n, l) => {
      let a = l.find(e => e.isSearchHit);
      if (!N && null != a && T.default.isBlocked(a.author.id)) return n;
      let s = S.default.getChannel(l[0].channel_id);
      return null == s ? n : ((null == e || e !== s.id) && n.push({
        channel: s,
        results: [],
        startIndex: t
      }), t += 1, n[n.length - 1].results.push(l), e = null == s ? void 0 : s.id, n)
    }, [])
  }, [p, N]), P = a.useRef([]), D = j.reduce((e, t) => e + 1 + t.results.length, 0), U = a.useCallback((e, t) => {
    if (!c.default.keyboardModeEnabled) return;
    let n = P.current,
      l = null != t ? n[t] : void 0;
    if (null == l || null == l.hitRef.current) return;
    let a = l.hitRef.current.getClientRects()[0],
      s = a.top - .5 * a.height;
    m(s, !1, () => {
      var t;
      null === (t = document.getElementById(e)) || void 0 === t || t.focus()
    })
  }, [m]), w = a.useCallback(e => {
    let t = P.current[e];
    null == t || t.jumpTo()
  }, []), F = (0, s.useListNavigator)({
    navId: "search-results",
    itemCount: D,
    focusedIndex: 0,
    setFocus: U,
    onSelect: w
  }), k = v.default.getQuery(f), B = v.default.getSearchType(f) === L.SearchTypes.FAVORITES, V = (0, d.createASTHighlighter)(null !== (t = null == k ? void 0 : k.content) && void 0 !== t ? t : ""), H = j.map(e => {
    let {
      channel: t,
      results: n,
      startIndex: a
    } = e;
    return (0, l.jsx)(b, {
      channel: t,
      results: n,
      highlighter: V,
      startIndex: a,
      resultRefs: P,
      totalResults: I,
      scrollTo: m,
      searchId: f,
      renderEmbeds: h,
      offset: _,
      jumpToMessage: M,
      listNavigator: F,
      favoriteSearch: B
    }, "".concat(t.id, "-").concat(a))
  });
  H.push();
  let G = a.useRef(null);
  a.useLayoutEffect(() => {
    var e;
    null === (e = G.current) || void 0 === e || e.focus()
  }, [p]);
  let W = (0, i.useFocusJumpSection)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      ref: G,
      ...F.getContainerProps(),
      ...W,
      "aria-busy": x,
      children: H
    }), g > 0 ? (0, l.jsxs)(i.Clickable, {
      tag: "div",
      className: y.resultsBlocked,
      onClick: () => o.setShowBlockedResults(f, !N),
      children: [(0, l.jsx)("div", {
        className: y.resultsBlockedImage
      }), (0, l.jsx)("div", {
        className: y.resultsBlockedText,
        children: N ? O.default.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({
          count: g
        }) : O.default.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({
          count: g
        })
      })]
    }) : null, !x && !B && (0, l.jsx)(R.default, {
      changePage: A,
      offset: _,
      totalResults: I,
      pageLength: L.SEARCH_PAGE_SIZE
    })]
  })
}

function b(e) {
  var t, n;
  let {
    channel: s,
    results: r,
    highlighter: u,
    startIndex: o,
    resultRefs: d,
    totalResults: c,
    scrollTo: E,
    searchId: v,
    renderEmbeds: R,
    offset: O,
    jumpToMessage: P,
    listNavigator: b,
    favoriteSearch: D
  } = e, U = C.RenderSpoilers.useSetting(), w = a.useCallback(e => {
    if (e === x.default.getChannelId()) return;
    let t = S.default.getChannel(e);
    if (null != t) I.default.can(L.Permissions.VIEW_CHANNEL, t) && (0, g.transitionToChannel)(t.id)
  }, []), F = null != s ? (0, f.computeChannelName)(s, N.default, T.default, !1) : "???", k = D && null != s.guild_id ? null === (t = _.default.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name : null, B = (null == s ? void 0 : s.parent_id) != null ? S.default.getChannel(s.parent_id) : null, V = null != B ? B.name : null, H = null !== (n = (0, h.default)(s)) && void 0 !== n ? n : M.default, G = null != B ? (0, h.default)(B) : null, W = I.default.can(L.Permissions.MANAGE_MESSAGES, s), {
    content: Y
  } = (0, p.default)({
    content: F,
    embeds: []
  }, {
    postProcessor: u
  }), z = a.useRef(null), [K, Z] = a.useState(!1);
  a.useEffect(() => {
    let e = z.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && Z(e.offsetWidth < e.scrollWidth)
  }, []);
  let X = [F, V, k].filter(e => null != e).join(", ");
  return (0, l.jsx)(A.ObscuredDisplayContext.Provider, {
    value: (0, m.default)(U, W),
    children: (0, l.jsxs)("ul", {
      role: "group",
      className: y.searchResultGroup,
      "aria-label": X,
      children: [(0, l.jsx)(i.Clickable, {
        onClick: () => w(s.id),
        children: (0, l.jsxs)("div", {
          className: y.channelNameContainer,
          children: [(0, l.jsx)(H, {
            className: y.channelNameIcon,
            width: 16,
            height: 16
          }), (0, l.jsx)(i.Tooltip, {
            text: F,
            shouldShow: K,
            children: e => (0, l.jsxs)("span", {
              ...e,
              ref: z,
              className: y.channelNameText,
              children: [D && null !== k && "".concat(k, " : "), Y]
            })
          }), null != B && null != V && null != G ? (0, l.jsxs)(i.Clickable, {
            className: y.parentChannelNameClickable,
            onClick: e => {
              e.stopPropagation(), w(B.id)
            },
            children: [(0, l.jsx)(G, {
              className: y.parentChannelNameIcon,
              width: 12,
              height: 12
            }), (0, l.jsx)(i.Text, {
              className: y.parentChannelNameText,
              variant: "text-xs/medium",
              color: "header-secondary",
              children: V
            })]
          }) : null]
        })
      }), r.map((e, t) => {
        let n = o + t;
        return (0, l.jsx)(j.default, {
          ref: e => d.current[n] = e,
          totalResults: c,
          scrollTo: E,
          searchId: v,
          renderEmbeds: R,
          searchOffset: O,
          pageResultsLength: r.length,
          result: e,
          index: n,
          onJump: P,
          listItemProps: b.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}