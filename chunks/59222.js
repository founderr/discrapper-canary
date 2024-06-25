n.d(t, {
  D: function() {
    return S
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(664751),
  o = n(442837),
  c = n(481060),
  u = n(212093),
  d = n(703656),
  E = n(683301),
  h = n(671533),
  _ = n(900849),
  I = n(119317),
  m = n(749436),
  T = n(650394),
  g = n(731455),
  p = n(689938),
  N = n(946496);
let S = 12,
  C = () => {
    let e = (0, d.s1)().location.search;
    return null != e && e.length > 0 && e.startsWith("?") ? r.parse(e) : {}
  },
  A = e => {
    let {
      categoryId: t,
      categoryName: n,
      onClick: i
    } = e, l = t === g.Hk, a = l ? p.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : p.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: n
    }), r = l ? p.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : p.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
      onClick: i
    });
    return (0, s.jsxs)("div", {
      className: N.emptyContainer,
      children: [(0, s.jsx)("div", {
        className: N.emptyImage
      }), (0, s.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: N.emptyHeader,
        children: a
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  f = () => (0, s.jsxs)("div", {
    className: N.emptyContainer,
    children: [(0, s.jsx)("div", {
      className: N.errorImage
    }), (0, s.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: N.emptyHeader,
      children: p.Z.Messages.GUILD_DISCOVERY_SEARCH_ERROR
    })]
  });
t.Z = e => {
  let {
    loadId: t,
    searchResults: n,
    mostRecentQuery: l,
    defaultLanguage: r,
    availableLanguages: d,
    isFetchingSearch: Z,
    scroller: L,
    loadingGuildId: O,
    theme: v,
    currentCategoryId: R,
    currentCategoryName: P,
    onViewGuild: x,
    onGuildCardSeen: M,
    placeholder: D,
    onTagClick: b
  } = e, y = a().uniqueId("GuildDiscovery"), {
    guilds: j,
    loading: U,
    total: G
  } = n, [w, k] = i.useState(!1), {
    tag: B
  } = C(), [H, V] = i.useState(B), F = (0, o.e7)([E.ZP], () => E.ZP.hasSearchError()), Y = (e, t, n) => {
    u.bR(l, {
      categoryId: n ? g.Hk : R,
      preferredLocale: r.code,
      offset: e,
      length: t,
      filters: {
        approximate_member_count: _.sq
      }
    }), k(!1)
  }, z = () => {
    null == L || L.scrollTo({
      to: 0
    })
  };
  i.useEffect(() => {
    let {
      offset: e,
      tag: t
    } = C(), n = null != e ? Math.floor(parseInt(e, 10) / S) + 1 : 1;
    V(!!t), 1 === n && k(!0)
  }, [l]);
  let W = R === g.Hk ? p.Z.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != G ? G.toLocaleString() : "0",
    query: l
  }) : p.Z.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != G ? G.toLocaleString() : "0",
    query: l,
    category: P
  });
  return (0, s.jsxs)("div", {
    className: N.container,
    children: [(0, s.jsxs)("div", {
      className: N.searchHeader,
      children: [(0, s.jsx)(c.Clickable, {
        onClick: () => {
          u.AQ(), _.IZ(t)
        },
        className: N.arrow,
        "aria-label": p.Z.Messages.BACK,
        children: (0, s.jsx)(h.Z, {
          direction: h.Z.Directions.LEFT
        })
      }), (0, s.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: N.header,
        children: W
      })]
    }), (0, s.jsx)(m.Z, {
      loadId: t,
      searchResults: n,
      mostRecentQuery: l,
      isFetchingSearch: Z,
      defaultLanguage: r,
      placeholder: D,
      availableLanguages: d,
      isSearchPage: !0,
      currentCategoryId: R,
      isTagSearch: H
    }), F ? (0, s.jsx)(f, {}) : G <= 0 ? (0, s.jsx)(A, {
      categoryId: R,
      categoryName: P,
      onClick: () => {
        u.uY(g.Hk), Y(0, S, !0)
      }
    }) : (0, s.jsx)("div", {
      className: N.results,
      children: (0, s.jsx)(I.Z, {
        pageSize: S,
        totalCount: G,
        resetCurrentPage: w,
        onPageChange: e => {
          Y((e - 1) * S, S), z()
        },
        children: e => {
          let {
            controller: t
          } = e;
          return (0, s.jsxs)("section", {
            "aria-labelledby": y,
            children: [(0, s.jsx)(T.Z, {
              guilds: j,
              loading: U,
              loadingPlaceholderCount: S,
              onViewGuild: x,
              loadingGuildId: O,
              theme: v,
              analyticsContext: _.P1.SEARCH,
              onGuildCardSeen: M,
              onTagClick: b
            }), t]
          })
        }
      })
    })]
  })
}