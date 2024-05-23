"use strict";
n.r(t), n.d(t, {
  MAX_GUILDS_PER_PAGE: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("664751"),
  o = n("442837"),
  u = n("481060"),
  d = n("212093"),
  c = n("703656"),
  f = n("683301"),
  E = n("671533"),
  h = n("900849"),
  _ = n("119317"),
  C = n("749436"),
  m = n("650394"),
  S = n("731455"),
  p = n("689938"),
  I = n("369802");
let g = 12,
  T = () => {
    let e = (0, c.getHistory)().location.search;
    return null != e && e.length > 0 && e.startsWith("?") ? r.parse(e) : {}
  },
  A = e => {
    let {
      categoryId: t,
      categoryName: n,
      onClick: s
    } = e, l = t === S.DISCOVERY_ALL_CATEGORIES_ID, i = l ? p.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : p.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: n
    }), r = l ? p.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : p.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
      onClick: s
    });
    return (0, a.jsxs)("div", {
      className: I.emptyContainer,
      children: [(0, a.jsx)("div", {
        className: I.emptyImage
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: I.emptyHeader,
        children: i
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  N = () => (0, a.jsxs)("div", {
    className: I.emptyContainer,
    children: [(0, a.jsx)("div", {
      className: I.errorImage
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: I.emptyHeader,
      children: p.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
    })]
  });
t.default = e => {
  let {
    loadId: t,
    searchResults: n,
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
  } = n, [k, B] = s.useState(!1), {
    tag: F
  } = T(), [H, V] = s.useState(F), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, n) => {
    d.doAlgoliaSearch(l, {
      categoryId: n ? S.DISCOVERY_ALL_CATEGORIES_ID : M,
      preferredLocale: r.code,
      offset: e,
      length: t,
      filters: {
        approximate_member_count: h.MINIMUM_MEMBER_COUNT
      }
    }), B(!1)
  }, K = () => {
    null == R || R.scrollTo({
      to: 0
    })
  };
  s.useEffect(() => {
    let {
      offset: e,
      tag: t
    } = T(), n = null != e ? Math.floor(parseInt(e, 10) / g) + 1 : 1;
    V(!!t), 1 === n && B(!0)
  }, [l]);
  let z = M === S.DISCOVERY_ALL_CATEGORIES_ID ? p.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l
  }) : p.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l,
    category: P
  });
  return (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsxs)("div", {
      className: I.searchHeader,
      children: [(0, a.jsx)(u.Clickable, {
        onClick: () => {
          d.clearSearch(), h.trackSearchClosed(t)
        },
        className: I.arrow,
        "aria-label": p.default.Messages.BACK,
        children: (0, a.jsx)(E.default, {
          direction: E.default.Directions.LEFT
        })
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: I.header,
        children: z
      })]
    }), (0, a.jsx)(C.default, {
      loadId: t,
      searchResults: n,
      mostRecentQuery: l,
      isFetchingSearch: v,
      defaultLanguage: r,
      placeholder: D,
      availableLanguages: c,
      isSearchPage: !0,
      currentCategoryId: M,
      isTagSearch: H
    }), Y ? (0, a.jsx)(N, {}) : w <= 0 ? (0, a.jsx)(A, {
      categoryId: M,
      categoryName: P,
      onClick: () => {
        d.selectCategory(S.DISCOVERY_ALL_CATEGORIES_ID), W(0, g, !0)
      }
    }) : (0, a.jsx)("div", {
      className: I.results,
      children: (0, a.jsx)(_.default, {
        pageSize: g,
        totalCount: w,
        resetCurrentPage: k,
        onPageChange: e => {
          W((e - 1) * g, g), K()
        },
        children: e => {
          let {
            controller: t
          } = e;
          return (0, a.jsxs)("section", {
            "aria-labelledby": U,
            children: [(0, a.jsx)(m.default, {
              guilds: j,
              loading: G,
              loadingPlaceholderCount: g,
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