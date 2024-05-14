"use strict";
n.r(t), n.d(t, {
  MAX_GUILDS_PER_PAGE: function() {
    return I
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
  p = n("731455"),
  S = n("689938"),
  g = n("369802");
let I = 12,
  T = () => {
    let e = (0, c.getHistory)().location.search;
    return null != e && e.length > 0 && e.startsWith("?") ? r.parse(e) : {}
  },
  A = e => {
    let {
      categoryId: t,
      categoryName: n,
      onClick: s
    } = e, l = t === p.DISCOVERY_ALL_CATEGORIES_ID, i = l ? S.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : S.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: n
    }), r = l ? S.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : S.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
      onClick: s
    });
    return (0, a.jsxs)("div", {
      className: g.emptyContainer,
      children: [(0, a.jsx)("div", {
        className: g.emptyImage
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: g.emptyHeader,
        children: i
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  N = () => (0, a.jsxs)("div", {
    className: g.emptyContainer,
    children: [(0, a.jsx)("div", {
      className: g.errorImage
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.emptyHeader,
      children: S.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
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
    currentCategoryName: y,
    onViewGuild: P,
    onGuildCardSeen: x,
    placeholder: D,
    onTagClick: b
  } = e, U = i().uniqueId("GuildDiscovery"), {
    guilds: j,
    loading: G,
    total: k
  } = n, [w, B] = s.useState(!1), {
    tag: F
  } = T(), [H, V] = s.useState(F), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, n) => {
    d.doAlgoliaSearch(l, {
      categoryId: n ? p.DISCOVERY_ALL_CATEGORIES_ID : M,
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
    } = T(), n = null != e ? Math.floor(parseInt(e, 10) / I) + 1 : 1;
    V(!!t), 1 === n && B(!0)
  }, [l]);
  let z = M === p.DISCOVERY_ALL_CATEGORIES_ID ? S.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != k ? k.toLocaleString() : "0",
    query: l
  }) : S.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != k ? k.toLocaleString() : "0",
    query: l,
    category: y
  });
  return (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsxs)("div", {
      className: g.searchHeader,
      children: [(0, a.jsx)(u.Clickable, {
        onClick: () => {
          d.clearSearch(), h.trackSearchClosed(t)
        },
        className: g.arrow,
        "aria-label": S.default.Messages.BACK,
        children: (0, a.jsx)(E.default, {
          direction: E.default.Directions.LEFT
        })
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: g.header,
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
    }), Y ? (0, a.jsx)(N, {}) : k <= 0 ? (0, a.jsx)(A, {
      categoryId: M,
      categoryName: y,
      onClick: () => {
        d.selectCategory(p.DISCOVERY_ALL_CATEGORIES_ID), W(0, I, !0)
      }
    }) : (0, a.jsx)("div", {
      className: g.results,
      children: (0, a.jsx)(_.default, {
        pageSize: I,
        totalCount: k,
        resetCurrentPage: w,
        onPageChange: e => {
          W((e - 1) * I, I), K()
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
              loadingPlaceholderCount: I,
              onViewGuild: P,
              loadingGuildId: O,
              theme: L,
              analyticsContext: h.AnalyticsContexts.SEARCH,
              onGuildCardSeen: x,
              onTagClick: b
            }), t]
          })
        }
      })
    })]
  })
}