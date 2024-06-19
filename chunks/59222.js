n.d(t, {
  D: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
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
  g = n(650394),
  p = n(731455),
  T = n(689938),
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
      onClick: s
    } = e, l = t === p.Hk, a = l ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: n
    }), r = l ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
      onClick: s
    });
    return (0, i.jsxs)("div", {
      className: N.emptyContainer,
      children: [(0, i.jsx)("div", {
        className: N.emptyImage
      }), (0, i.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: N.emptyHeader,
        children: a
      }), (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  f = () => (0, i.jsxs)("div", {
    className: N.emptyContainer,
    children: [(0, i.jsx)("div", {
      className: N.errorImage
    }), (0, i.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: N.emptyHeader,
      children: T.Z.Messages.GUILD_DISCOVERY_SEARCH_ERROR
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
    scroller: v,
    loadingGuildId: L,
    theme: O,
    currentCategoryId: R,
    currentCategoryName: x,
    onViewGuild: M,
    onGuildCardSeen: P,
    placeholder: D,
    onTagClick: b
  } = e, y = a().uniqueId("GuildDiscovery"), {
    guilds: j,
    loading: U,
    total: G
  } = n, [w, k] = s.useState(!1), {
    tag: B
  } = C(), [H, V] = s.useState(B), F = (0, o.e7)([E.ZP], () => E.ZP.hasSearchError()), Y = (e, t, n) => {
    u.bR(l, {
      categoryId: n ? p.Hk : R,
      preferredLocale: r.code,
      offset: e,
      length: t,
      filters: {
        approximate_member_count: _.sq
      }
    }), k(!1)
  }, z = () => {
    null == v || v.scrollTo({
      to: 0
    })
  };
  s.useEffect(() => {
    let {
      offset: e,
      tag: t
    } = C(), n = null != e ? Math.floor(parseInt(e, 10) / S) + 1 : 1;
    V(!!t), 1 === n && k(!0)
  }, [l]);
  let W = R === p.Hk ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != G ? G.toLocaleString() : "0",
    query: l
  }) : T.Z.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != G ? G.toLocaleString() : "0",
    query: l,
    category: x
  });
  return (0, i.jsxs)("div", {
    className: N.container,
    children: [(0, i.jsxs)("div", {
      className: N.searchHeader,
      children: [(0, i.jsx)(c.Clickable, {
        onClick: () => {
          u.AQ(), _.IZ(t)
        },
        className: N.arrow,
        "aria-label": T.Z.Messages.BACK,
        children: (0, i.jsx)(h.Z, {
          direction: h.Z.Directions.LEFT
        })
      }), (0, i.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: N.header,
        children: W
      })]
    }), (0, i.jsx)(m.Z, {
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
    }), F ? (0, i.jsx)(f, {}) : G <= 0 ? (0, i.jsx)(A, {
      categoryId: R,
      categoryName: x,
      onClick: () => {
        u.uY(p.Hk), Y(0, S, !0)
      }
    }) : (0, i.jsx)("div", {
      className: N.results,
      children: (0, i.jsx)(I.Z, {
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
          return (0, i.jsxs)("section", {
            "aria-labelledby": y,
            children: [(0, i.jsx)(g.Z, {
              guilds: j,
              loading: U,
              loadingPlaceholderCount: S,
              onViewGuild: M,
              loadingGuildId: L,
              theme: O,
              analyticsContext: _.P1.SEARCH,
              onGuildCardSeen: P,
              onTagClick: b
            }), t]
          })
        }
      })
    })]
  })
}