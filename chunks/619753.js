n.d(t, {
  Z: function() {
    return P
  }
}), n(724458), n(653041), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(837969),
  a = n(481060),
  r = n(668781),
  o = n(904245),
  c = n(603263),
  u = n(963374),
  d = n(607070),
  h = n(933557),
  m = n(995123),
  p = n(200120),
  E = n(255269),
  g = n(937889),
  f = n(703656),
  C = n(359110),
  _ = n(695346),
  I = n(592125),
  x = n(430824),
  T = n(496675),
  N = n(699516),
  Z = n(768119),
  S = n(944486),
  v = n(594174),
  A = n(68588),
  M = n(101695),
  R = n(683101),
  j = n(981631),
  L = n(689938),
  O = n(832719);

function P(e) {
  var t;
  let {
    search: n,
    searchId: h,
    renderEmbeds: m,
    scrollTo: p,
    searchResults: E,
    blockCount: g,
    onChangePage: C
  } = e, {
    offset: _,
    totalResults: x,
    isSearching: T,
    showBlockedResults: S
  } = n, v = i.useCallback(e => {
    if (T) return;
    let t = e - 1;
    null == C || C(t), c.oO(h, t)
  }, [h, T, C]), A = i.useCallback(e => {
    if (e.blocked) r.Z.show({
      title: L.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: L.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: e.author.username
      }),
      confirmText: L.Z.Messages.OKAY
    });
    else {
      let t = I.Z.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      o.Z.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: Z.Z.getAnalyticsId(h)
      }), (0, f.uL)(j.Z5c.CHANNEL(n, e.channel_id, e.id))
    }
  }, [h]), R = i.useMemo(() => {
    let e;
    if (null == E) return [];
    let t = 0;
    return E.reduce((n, l) => {
      let i = l.find(e => e.isSearchHit);
      if (!S && null != i && N.Z.isBlockedForMessage(i)) return n;
      let s = I.Z.getChannel(l[0].channel_id);
      return null == s ? n : ((null == e || e !== s.id) && n.push({
        channel: s,
        results: [],
        startIndex: t
      }), t += 1, n[n.length - 1].results.push(l), e = null == s ? void 0 : s.id, n)
    }, [])
  }, [E, S]), P = i.useRef([]), b = R.reduce((e, t) => e + 1 + t.results.length, 0), D = i.useCallback((e, t) => {
    if (!d.Z.keyboardModeEnabled) return;
    let n = P.current,
      l = null != t ? n[t] : void 0;
    if (null == l || null == l.hitRef.current) return;
    let i = l.hitRef.current.getClientRects()[0];
    p(i.top - .5 * i.height, !1, () => {
      var t;
      null === (t = document.getElementById(e)) || void 0 === t || t.focus()
    })
  }, [p]), U = i.useCallback(e => {
    let t = P.current[e];
    null == t || t.jumpTo()
  }, []), k = (0, s.ZP)({
    navId: "search-results",
    itemCount: b,
    focusedIndex: 0,
    setFocus: D,
    onSelect: U
  }), w = Z.Z.getQuery(h), H = Z.Z.getSearchType(h) === j.aib.FAVORITES, B = (0, u.nC)(null !== (t = null == w ? void 0 : w.content) && void 0 !== t ? t : ""), G = R.map(e => {
    let {
      channel: t,
      results: n,
      startIndex: i
    } = e;
    return (0, l.jsx)(y, {
      channel: t,
      results: n,
      highlighter: B,
      startIndex: i,
      resultRefs: P,
      totalResults: x,
      scrollTo: p,
      searchId: h,
      renderEmbeds: m,
      offset: _,
      jumpToMessage: A,
      listNavigator: k,
      favoriteSearch: H
    }, "".concat(t.id, "-").concat(i))
  });
  G.push();
  let V = i.useRef(null);
  i.useLayoutEffect(() => {
    var e;
    null === (e = V.current) || void 0 === e || e.focus()
  }, [E]);
  let F = (0, a.useFocusJumpSection)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      ref: V,
      ...k.getContainerProps(),
      ...F,
      "aria-busy": T,
      children: G
    }), g > 0 ? (0, l.jsxs)(a.Clickable, {
      tag: "div",
      className: O.resultsBlocked,
      onClick: () => c.QY(h, !S),
      children: [(0, l.jsx)("div", {
        className: O.resultsBlockedImage
      }), (0, l.jsx)("div", {
        className: O.__invalid_resultsBlockedText,
        children: S ? L.Z.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({
          count: g
        }) : L.Z.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({
          count: g
        })
      })]
    }) : null, !T && !H && (0, l.jsx)(M.Z, {
      changePage: v,
      offset: _,
      totalResults: x,
      pageLength: j.vpv
    })]
  })
}

function y(e) {
  var t, n;
  let {
    channel: s,
    results: r,
    highlighter: o,
    startIndex: c,
    resultRefs: u,
    totalResults: d,
    scrollTo: f,
    searchId: Z,
    renderEmbeds: M,
    offset: L,
    jumpToMessage: P,
    listNavigator: y,
    favoriteSearch: b
  } = e, D = _.cC.useSetting(), U = (0, p.B)(), k = i.useCallback(e => {
    if (e === S.Z.getChannelId()) return;
    let t = I.Z.getChannel(e);
    if (null != t && !!T.Z.can(j.Plq.VIEW_CHANNEL, t))(0, C.Kh)(t.id)
  }, []), w = null != s ? (0, h.F6)(s, v.default, N.Z, !1) : "???", H = b && null != s.guild_id ? null === (t = x.Z.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name : null, B = (null == s ? void 0 : s.parent_id) != null ? I.Z.getChannel(s.parent_id) : null, G = null != B ? B.name : null, V = null !== (n = (0, m.Z)(s)) && void 0 !== n ? n : a.TextIcon, F = null != B ? (0, m.Z)(B) : null, z = T.Z.can(j.Plq.MANAGE_MESSAGES, s), {
    content: W
  } = (0, g.ZP)({
    content: w,
    embeds: []
  }, {
    postProcessor: o,
    shouldFilterKeywords: null != U
  }), Y = i.useRef(null), [K, q] = i.useState(!1);
  i.useEffect(() => {
    let e = Y.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && q(e.offsetWidth < e.scrollWidth)
  }, []);
  let X = [w, G, H].filter(e => null != e).join(", ");
  return (0, l.jsx)(A.a.Provider, {
    value: (0, E.Z)(D, z),
    children: (0, l.jsxs)("ul", {
      role: "group",
      className: O.searchResultGroup,
      "aria-label": X,
      children: [(0, l.jsx)(a.Clickable, {
        onClick: () => k(s.id),
        children: (0, l.jsxs)("div", {
          className: O.channelNameContainer,
          children: [(0, l.jsx)(V, {
            className: O.channelNameIcon,
            size: "xs",
            color: "currentColor"
          }), (0, l.jsx)(a.Tooltip, {
            text: w,
            shouldShow: K,
            children: e => (0, l.jsxs)("span", {
              ...e,
              ref: Y,
              className: O.channelNameText,
              children: [b && null !== H && "".concat(H, " : "), W]
            })
          }), null != B && null != G && null != F ? (0, l.jsxs)(a.Clickable, {
            className: O.parentChannelNameClickable,
            onClick: e => {
              e.stopPropagation(), k(B.id)
            },
            children: [(0, l.jsx)(F, {
              className: O.parentChannelNameIcon,
              size: "xxs",
              color: "currentColor"
            }), (0, l.jsx)(a.Text, {
              className: O.parentChannelNameText,
              variant: "text-xs/medium",
              color: "header-secondary",
              children: G
            })]
          }) : null]
        })
      }), r.map((e, t) => {
        let n = c + t;
        return (0, l.jsx)(R.Z, {
          ref: e => u.current[n] = e,
          totalResults: d,
          scrollTo: f,
          searchId: Z,
          renderEmbeds: M,
          searchOffset: L,
          pageResultsLength: r.length,
          result: e,
          index: n,
          onJump: P,
          listItemProps: y.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}