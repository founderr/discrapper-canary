"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
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
  m = n("255269"),
  p = n("937889"),
  E = n("703656"),
  C = n("359110"),
  g = n("695346"),
  S = n("592125"),
  _ = n("430824"),
  T = n("496675"),
  I = n("699516"),
  A = n("768119"),
  N = n("944486"),
  v = n("594174"),
  x = n("68588"),
  M = n("93879"),
  R = n("101695"),
  y = n("683101"),
  L = n("981631"),
  O = n("689938"),
  j = n("582219");

function P(e) {
  var t;
  let {
    search: n,
    searchId: f,
    renderEmbeds: h,
    scrollTo: m,
    searchResults: p,
    blockCount: C,
    onChangePage: g
  } = e, {
    offset: _,
    totalResults: T,
    isSearching: N,
    showBlockedResults: v
  } = n, x = l.useCallback(e => {
    if (N) return;
    let t = e - 1;
    null == g || g(t), u.changePage(f, t)
  }, [f, N, g]), M = l.useCallback(e => {
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
      o.default.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: A.default.getAnalyticsId(f)
      }), (0, E.transitionTo)(L.Routes.CHANNEL(n, e.channel_id, e.id))
    }
  }, [f]), y = l.useMemo(() => {
    let e;
    if (null == p) return [];
    let t = 0;
    return p.reduce((n, a) => {
      let l = a.find(e => e.isSearchHit);
      if (!v && null != l && I.default.isBlocked(l.author.id)) return n;
      let s = S.default.getChannel(a[0].channel_id);
      return null == s ? n : ((null == e || e !== s.id) && n.push({
        channel: s,
        results: [],
        startIndex: t
      }), t += 1, n[n.length - 1].results.push(a), e = null == s ? void 0 : s.id, n)
    }, [])
  }, [p, v]), P = l.useRef([]), b = y.reduce((e, t) => e + 1 + t.results.length, 0), U = l.useCallback((e, t) => {
    if (!c.default.keyboardModeEnabled) return;
    let n = P.current,
      a = null != t ? n[t] : void 0;
    if (null == a || null == a.hitRef.current) return;
    let l = a.hitRef.current.getClientRects()[0];
    m(l.top - .5 * l.height, !1, () => {
      var t;
      null === (t = document.getElementById(e)) || void 0 === t || t.focus()
    })
  }, [m]), F = l.useCallback(e => {
    let t = P.current[e];
    null == t || t.jumpTo()
  }, []), w = (0, s.useListNavigator)({
    navId: "search-results",
    itemCount: b,
    focusedIndex: 0,
    setFocus: U,
    onSelect: F
  }), k = A.default.getQuery(f), B = A.default.getSearchType(f) === L.SearchTypes.FAVORITES, H = (0, d.createASTHighlighter)(null !== (t = null == k ? void 0 : k.content) && void 0 !== t ? t : ""), G = y.map(e => {
    let {
      channel: t,
      results: n,
      startIndex: l
    } = e;
    return (0, a.jsx)(D, {
      channel: t,
      results: n,
      highlighter: H,
      startIndex: l,
      resultRefs: P,
      totalResults: T,
      scrollTo: m,
      searchId: f,
      renderEmbeds: h,
      offset: _,
      jumpToMessage: M,
      listNavigator: w,
      favoriteSearch: B
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
      "aria-busy": N,
      children: G
    }), C > 0 ? (0, a.jsxs)(i.Clickable, {
      tag: "div",
      className: j.resultsBlocked,
      onClick: () => u.setShowBlockedResults(f, !v),
      children: [(0, a.jsx)("div", {
        className: j.resultsBlockedImage
      }), (0, a.jsx)("div", {
        className: j.__invalid_resultsBlockedText,
        children: v ? O.default.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({
          count: C
        }) : O.default.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({
          count: C
        })
      })]
    }) : null, !N && !B && (0, a.jsx)(R.default, {
      changePage: x,
      offset: _,
      totalResults: T,
      pageLength: L.SEARCH_PAGE_SIZE
    })]
  })
}

function D(e) {
  var t, n;
  let {
    channel: s,
    results: r,
    highlighter: o,
    startIndex: u,
    resultRefs: d,
    totalResults: c,
    scrollTo: E,
    searchId: A,
    renderEmbeds: R,
    offset: O,
    jumpToMessage: P,
    listNavigator: D,
    favoriteSearch: b
  } = e, U = g.RenderSpoilers.useSetting(), F = l.useCallback(e => {
    if (e === N.default.getChannelId()) return;
    let t = S.default.getChannel(e);
    if (null != t) T.default.can(L.Permissions.VIEW_CHANNEL, t) && (0, C.transitionToChannel)(t.id)
  }, []), w = null != s ? (0, f.computeChannelName)(s, v.default, I.default, !1) : "???", k = b && null != s.guild_id ? null === (t = _.default.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name : null, B = (null == s ? void 0 : s.parent_id) != null ? S.default.getChannel(s.parent_id) : null, H = null != B ? B.name : null, G = null !== (n = (0, h.default)(s)) && void 0 !== n ? n : M.default, V = null != B ? (0, h.default)(B) : null, W = T.default.can(L.Permissions.MANAGE_MESSAGES, s), {
    content: Y
  } = (0, p.default)({
    content: w,
    embeds: []
  }, {
    postProcessor: o
  }), z = l.useRef(null), [K, Z] = l.useState(!1);
  l.useEffect(() => {
    let e = z.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && Z(e.offsetWidth < e.scrollWidth)
  }, []);
  let q = [w, H, k].filter(e => null != e).join(", ");
  return (0, a.jsx)(x.ObscuredDisplayContext.Provider, {
    value: (0, m.default)(U, W),
    children: (0, a.jsxs)("ul", {
      role: "group",
      className: j.searchResultGroup,
      "aria-label": q,
      children: [(0, a.jsx)(i.Clickable, {
        onClick: () => F(s.id),
        children: (0, a.jsxs)("div", {
          className: j.channelNameContainer,
          children: [(0, a.jsx)(G, {
            className: j.channelNameIcon,
            width: 16,
            height: 16
          }), (0, a.jsx)(i.Tooltip, {
            text: w,
            shouldShow: K,
            children: e => (0, a.jsxs)("span", {
              ...e,
              ref: z,
              className: j.channelNameText,
              children: [b && null !== k && "".concat(k, " : "), Y]
            })
          }), null != B && null != H && null != V ? (0, a.jsxs)(i.Clickable, {
            className: j.parentChannelNameClickable,
            onClick: e => {
              e.stopPropagation(), F(B.id)
            },
            children: [(0, a.jsx)(V, {
              className: j.parentChannelNameIcon,
              width: 12,
              height: 12
            }), (0, a.jsx)(i.Text, {
              className: j.parentChannelNameText,
              variant: "text-xs/medium",
              color: "header-secondary",
              children: H
            })]
          }) : null]
        })
      }), r.map((e, t) => {
        let n = u + t;
        return (0, a.jsx)(y.default, {
          ref: e => d.current[n] = e,
          totalResults: c,
          scrollTo: E,
          searchId: A,
          renderEmbeds: R,
          searchOffset: O,
          pageResultsLength: r.length,
          result: e,
          index: n,
          onJump: P,
          listItemProps: D.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}