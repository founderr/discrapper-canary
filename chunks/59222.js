"use strict";
a.r(t), a.d(t, {
  MAX_GUILDS_PER_PAGE: function() {
    return T
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  i = a.n(l),
  r = a("664751"),
  o = a("442837"),
  u = a("481060"),
  d = a("212093"),
  c = a("703656"),
  f = a("683301"),
  E = a("671533"),
  h = a("900849"),
  _ = a("119317"),
  C = a("749436"),
  m = a("650394"),
  S = a("731455"),
  I = a("689938"),
  p = a("274845");
let T = 12,
  g = () => {
    let e = (0, c.getHistory)().location.search;
    return null != e && e.length > 0 && e.startsWith("?") ? r.parse(e) : {}
  },
  A = e => {
    let {
      categoryId: t,
      categoryName: a,
      onClick: s
    } = e, l = t === S.DISCOVERY_ALL_CATEGORIES_ID, i = l ? I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: a
    }), r = l ? I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
      onClick: s
    });
    return (0, n.jsxs)("div", {
      className: p.emptyContainer,
      children: [(0, n.jsx)("div", {
        className: p.emptyImage
      }), (0, n.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: p.emptyHeader,
        children: i
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  N = () => (0, n.jsxs)("div", {
    className: p.emptyContainer,
    children: [(0, n.jsx)("div", {
      className: p.errorImage
    }), (0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.emptyHeader,
      children: I.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
    })]
  });
t.default = e => {
  let {
    loadId: t,
    searchResults: a,
    mostRecentQuery: l,
    defaultLanguage: r,
    availableLanguages: c,
    isFetchingSearch: v,
    scroller: R,
    loadingGuildId: O,
    theme: L,
    currentCategoryId: M,
    currentCategoryName: P,
    onViewGuild: x,
    onGuildCardSeen: y,
    placeholder: D,
    onTagClick: b
  } = e, U = i().uniqueId("GuildDiscovery"), {
    guilds: j,
    loading: G,
    total: w
  } = a, [k, F] = s.useState(!1), {
    tag: B
  } = g(), [H, V] = s.useState(B), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, a) => {
    d.doAlgoliaSearch(l, {
      categoryId: a ? S.DISCOVERY_ALL_CATEGORIES_ID : M,
      preferredLocale: r.code,
      offset: e,
      length: t,
      filters: {
        approximate_member_count: h.MINIMUM_MEMBER_COUNT
      }
    }), F(!1)
  }, K = () => {
    null == R || R.scrollTo({
      to: 0
    })
  };
  s.useEffect(() => {
    let {
      offset: e,
      tag: t
    } = g(), a = null != e ? Math.floor(parseInt(e, 10) / T) + 1 : 1;
    V(!!t), 1 === a && F(!0)
  }, [l]);
  let z = M === S.DISCOVERY_ALL_CATEGORIES_ID ? I.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l
  }) : I.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l,
    category: P
  });
  return (0, n.jsxs)("div", {
    className: p.container,
    children: [(0, n.jsxs)("div", {
      className: p.searchHeader,
      children: [(0, n.jsx)(u.Clickable, {
        onClick: () => {
          d.clearSearch(), h.trackSearchClosed(t)
        },
        className: p.arrow,
        "aria-label": I.default.Messages.BACK,
        children: (0, n.jsx)(E.default, {
          direction: E.default.Directions.LEFT
        })
      }), (0, n.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: p.header,
        children: z
      })]
    }), (0, n.jsx)(C.default, {
      loadId: t,
      searchResults: a,
      mostRecentQuery: l,
      isFetchingSearch: v,
      defaultLanguage: r,
      placeholder: D,
      availableLanguages: c,
      isSearchPage: !0,
      currentCategoryId: M,
      isTagSearch: H
    }), Y ? (0, n.jsx)(N, {}) : w <= 0 ? (0, n.jsx)(A, {
      categoryId: M,
      categoryName: P,
      onClick: () => {
        d.selectCategory(S.DISCOVERY_ALL_CATEGORIES_ID), W(0, T, !0)
      }
    }) : (0, n.jsx)("div", {
      className: p.results,
      children: (0, n.jsx)(_.default, {
        pageSize: T,
        totalCount: w,
        resetCurrentPage: k,
        onPageChange: e => {
          W((e - 1) * T, T), K()
        },
        children: e => {
          let {
            controller: t
          } = e;
          return (0, n.jsxs)("section", {
            "aria-labelledby": U,
            children: [(0, n.jsx)(m.default, {
              guilds: j,
              loading: G,
              loadingPlaceholderCount: T,
              onViewGuild: x,
              loadingGuildId: O,
              theme: L,
              analyticsContext: h.AnalyticsContexts.SEARCH,
              onGuildCardSeen: y,
              onTagClick: b
            }), t]
          })
        }
      })
    })]
  })
}