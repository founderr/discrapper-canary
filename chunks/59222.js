"use strict";
n.r(t), n.d(t, {
  MAX_GUILDS_PER_PAGE: function() {
    return p
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
  _ = n("900849"),
  h = n("119317"),
  C = n("749436"),
  m = n("650394"),
  S = n("731455"),
  I = n("689938"),
  T = n("274845");
let p = 12,
  g = () => {
    let e = (0, c.getHistory)().location.search;
    return null != e && e.length > 0 && e.startsWith("?") ? r.parse(e) : {}
  },
  N = e => {
    let {
      categoryId: t,
      categoryName: n,
      onClick: s
    } = e, l = t === S.DISCOVERY_ALL_CATEGORIES_ID, i = l ? I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: n
    }), r = l ? I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
      onClick: s
    });
    return (0, a.jsxs)("div", {
      className: T.emptyContainer,
      children: [(0, a.jsx)("div", {
        className: T.emptyImage
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: T.emptyHeader,
        children: i
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  A = () => (0, a.jsxs)("div", {
    className: T.emptyContainer,
    children: [(0, a.jsx)("div", {
      className: T.errorImage
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: T.emptyHeader,
      children: I.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
    })]
  });
t.default = e => {
  let {
    loadId: t,
    searchResults: n,
    mostRecentQuery: l,
    defaultLanguage: r,
    availableLanguages: c,
    isFetchingSearch: R,
    scroller: O,
    loadingGuildId: v,
    theme: L,
    currentCategoryId: P,
    currentCategoryName: M,
    onViewGuild: y,
    onGuildCardSeen: D,
    placeholder: x,
    onTagClick: b
  } = e, U = i().uniqueId("GuildDiscovery"), {
    guilds: j,
    loading: G,
    total: w
  } = n, [k, F] = s.useState(!1), {
    tag: B
  } = g(), [H, V] = s.useState(B), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, n) => {
    d.doAlgoliaSearch(l, {
      categoryId: n ? S.DISCOVERY_ALL_CATEGORIES_ID : P,
      preferredLocale: r.code,
      offset: e,
      length: t,
      filters: {
        approximate_member_count: _.MINIMUM_MEMBER_COUNT
      }
    }), F(!1)
  }, K = () => {
    null == O || O.scrollTo({
      to: 0
    })
  };
  s.useEffect(() => {
    let {
      offset: e,
      tag: t
    } = g(), n = null != e ? Math.floor(parseInt(e, 10) / p) + 1 : 1;
    V(!!t), 1 === n && F(!0)
  }, [l]);
  let z = P === S.DISCOVERY_ALL_CATEGORIES_ID ? I.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l
  }) : I.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l,
    category: M
  });
  return (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsxs)("div", {
      className: T.searchHeader,
      children: [(0, a.jsx)(u.Clickable, {
        onClick: () => {
          d.clearSearch(), _.trackSearchClosed(t)
        },
        className: T.arrow,
        "aria-label": I.default.Messages.BACK,
        children: (0, a.jsx)(E.default, {
          direction: E.default.Directions.LEFT
        })
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: T.header,
        children: z
      })]
    }), (0, a.jsx)(C.default, {
      loadId: t,
      searchResults: n,
      mostRecentQuery: l,
      isFetchingSearch: R,
      defaultLanguage: r,
      placeholder: x,
      availableLanguages: c,
      isSearchPage: !0,
      currentCategoryId: P,
      isTagSearch: H
    }), Y ? (0, a.jsx)(A, {}) : w <= 0 ? (0, a.jsx)(N, {
      categoryId: P,
      categoryName: M,
      onClick: () => {
        d.selectCategory(S.DISCOVERY_ALL_CATEGORIES_ID), W(0, p, !0)
      }
    }) : (0, a.jsx)("div", {
      className: T.results,
      children: (0, a.jsx)(h.default, {
        pageSize: p,
        totalCount: w,
        resetCurrentPage: k,
        onPageChange: e => {
          W((e - 1) * p, p), K()
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
              loadingPlaceholderCount: p,
              onViewGuild: y,
              loadingGuildId: v,
              theme: L,
              analyticsContext: _.AnalyticsContexts.SEARCH,
              onGuildCardSeen: D,
              onTagClick: b
            }), t]
          })
        }
      })
    })]
  })
}