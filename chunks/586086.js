"use strict";
n.r(t), n.d(t, {
  MAX_GUILDS_PER_PAGE: function() {
    return T
  },
  default: function() {
    return R
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("522632"),
  o = n("446674"),
  u = n("77078"),
  d = n("340626"),
  c = n("393414"),
  f = n("926787"),
  E = n("246053"),
  h = n("794818"),
  _ = n("961098"),
  C = n("338638"),
  I = n("719369"),
  S = n("447621"),
  p = n("782340"),
  m = n("492898");
let T = 12,
  g = () => {
    let e = (0, c.getHistory)(),
      t = e.location.search,
      n = null != t && t.length > 0 && t.startsWith("?");
    return n ? r.parse(t) : {}
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
      className: m.emptyContainer,
      children: [(0, a.jsx)("div", {
        className: m.emptyImage
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: m.emptyHeader,
        children: i
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  N = () => (0, a.jsxs)("div", {
    className: m.emptyContainer,
    children: [(0, a.jsx)("div", {
      className: m.errorImage
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: m.emptyHeader,
      children: p.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
    })]
  });
var R = e => {
  let {
    loadId: t,
    searchResults: n,
    mostRecentQuery: l,
    defaultLanguage: r,
    availableLanguages: c,
    isFetchingSearch: R,
    scroller: v,
    loadingGuildId: O,
    theme: L,
    currentCategoryId: M,
    currentCategoryName: P,
    onViewGuild: D,
    onGuildCardSeen: y,
    placeholder: x,
    onTagClick: b
  } = e, U = i.uniqueId("GuildDiscovery"), {
    guilds: G,
    loading: j,
    total: w
  } = n, [k, B] = s.useState(!1), {
    tag: F
  } = g(), [H, V] = s.useState(F), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, n) => {
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
    null == v || v.scrollTo({
      to: 0
    })
  };
  s.useEffect(() => {
    let {
      offset: e,
      tag: t
    } = g(), n = null != e ? Math.floor(parseInt(e, 10) / T) + 1 : 1;
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
    className: m.container,
    children: [(0, a.jsxs)("div", {
      className: m.searchHeader,
      children: [(0, a.jsx)(u.Clickable, {
        onClick: () => {
          d.clearSearch(), h.trackSearchClosed(t)
        },
        className: m.arrow,
        "aria-label": p.default.Messages.BACK,
        children: (0, a.jsx)(E.default, {
          direction: E.default.Directions.LEFT
        })
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: m.header,
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
      currentCategoryId: M,
      isTagSearch: H
    }), Y ? (0, a.jsx)(N, {}) : w <= 0 ? (0, a.jsx)(A, {
      categoryId: M,
      categoryName: P,
      onClick: () => {
        d.selectCategory(S.DISCOVERY_ALL_CATEGORIES_ID), W(0, T, !0)
      }
    }) : (0, a.jsx)("div", {
      className: m.results,
      children: (0, a.jsx)(_.default, {
        pageSize: T,
        totalCount: w,
        resetCurrentPage: k,
        onPageChange: e => {
          let t = (e - 1) * T;
          W(t, T), K()
        },
        children: e => {
          let {
            controller: t
          } = e;
          return (0, a.jsxs)("section", {
            "aria-labelledby": U,
            children: [(0, a.jsx)(I.default, {
              guilds: G,
              loading: j,
              loadingPlaceholderCount: T,
              onViewGuild: D,
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