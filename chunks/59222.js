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
  p = a("689938"),
  I = a("356620");
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
    } = e, l = t === S.DISCOVERY_ALL_CATEGORIES_ID, i = l ? p.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : p.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: a
    }), r = l ? p.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : p.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
      onClick: s
    });
    return (0, n.jsxs)("div", {
      className: I.emptyContainer,
      children: [(0, n.jsx)("div", {
        className: I.emptyImage
      }), (0, n.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: I.emptyHeader,
        children: i
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  N = () => (0, n.jsxs)("div", {
    className: I.emptyContainer,
    children: [(0, n.jsx)("div", {
      className: I.errorImage
    }), (0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: I.emptyHeader,
      children: p.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
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
    scroller: L,
    loadingGuildId: R,
    theme: O,
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
  } = a, [k, B] = s.useState(!1), {
    tag: F
  } = g(), [H, V] = s.useState(F), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, a) => {
    d.doAlgoliaSearch(l, {
      categoryId: a ? S.DISCOVERY_ALL_CATEGORIES_ID : M,
      preferredLocale: r.code,
      offset: e,
      length: t,
      filters: {
        approximate_member_count: h.MINIMUM_MEMBER_COUNT
      }
    }), B(!1)
  }, K = () => {
    null == L || L.scrollTo({
      to: 0
    })
  };
  s.useEffect(() => {
    let {
      offset: e,
      tag: t
    } = g(), a = null != e ? Math.floor(parseInt(e, 10) / T) + 1 : 1;
    V(!!t), 1 === a && B(!0)
  }, [l]);
  let z = M === S.DISCOVERY_ALL_CATEGORIES_ID ? p.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l
  }) : p.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l,
    category: P
  });
  return (0, n.jsxs)("div", {
    className: I.container,
    children: [(0, n.jsxs)("div", {
      className: I.searchHeader,
      children: [(0, n.jsx)(u.Clickable, {
        onClick: () => {
          d.clearSearch(), h.trackSearchClosed(t)
        },
        className: I.arrow,
        "aria-label": p.default.Messages.BACK,
        children: (0, n.jsx)(E.default, {
          direction: E.default.Directions.LEFT
        })
      }), (0, n.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: I.header,
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
      className: I.results,
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
              loadingGuildId: R,
              theme: O,
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