"use strict";
n.r(t), n.d(t, {
  EMPTY_DISCOVERABLE_GUILDS_SECTION: function() {
    return m
  },
  default: function() {
    return D
  }
}), n("222007"), n("424973");
var i, s, r = n("627445"),
  a = n.n(r),
  o = n("917351"),
  l = n.n(o),
  u = n("446674");
n("233736");
var d = n("913144"),
  c = n("197231"),
  f = n("271938"),
  _ = n("251013"),
  h = n("49111"),
  g = n("447621");
(s = i || (i = {})).UNSET = "unset", s.FETCHING = "fetching", s.FAILED = "failed", s.SUCCEEDED = "succeeded";
let m = {
    guilds: [],
    total: 0,
    offset: 0,
    limit: 0,
    loading: !1,
    isFirstLoad: !0
  },
  E = {
    [h.GuildDiscoverySections.FEATURED]: {
      ...m
    },
    [h.GuildDiscoverySections.GAMES_YOU_PLAY]: {
      ...m
    },
    [h.GuildDiscoverySections.MISC]: {
      ...m
    },
    [h.GuildDiscoverySections.SEARCH]: {},
    [g.DISCOVERY_ALL_CATEGORIES_ID]: {
      ...m
    }
  },
  p = "",
  v = !1,
  S = "unset",
  T = null,
  I = g.DISCOVERY_ALL_CATEGORIES_ID,
  C = g.DISCOVERY_ALL_CATEGORIES_ID,
  A = null,
  y = [],
  N = (0, c.makeAnalyticsID)();

function R(e) {
  return {
    id: e.id,
    name: e.name,
    description: e.description,
    splash: e.splash,
    banner: e.banner,
    icon: e.icon,
    features: new Set(e.features),
    presenceCount: e.approximate_presence_count,
    memberCount: e.approximate_member_count,
    premiumSubscriptionCount: e.premium_subscription_count,
    preferredLocale: e.preferred_locale,
    discoverySplash: e.discovery_splash,
    emojis: e.emojis,
    emojiCount: e.emoji_count,
    keywords: e.keywords
  }
}
class O extends u.default.Store {
  initialize() {
    this.waitFor(f.default)
  }
  isFetching() {
    return v || null == T || null == _.default.lastFetched
  }
  isFetchingSearch() {
    return "fetching" === S
  }
  hasSearchError() {
    return "failed" === S
  }
  getDiscoverableGuilds() {
    return E
  }
  getCurrentCategoryId() {
    return I
  }
  getCurrentHomepageCategoryId() {
    return C
  }
  getSearchIndex() {
    return A
  }
  getMostRecentQuery() {
    return p
  }
  getTopCategoryCounts(e) {
    var t;
    return null === (t = E[h.GuildDiscoverySections.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts
  }
  getSeenGuildIds() {
    return y
  }
  getLoadId() {
    return N
  }
}
O.displayName = "GuildDiscoveryStore";
var D = new O(d.default, {
  GUILD_DISCOVERY_SEARCH_INIT: function(e) {
    let {
      index: t
    } = e;
    A = t
  },
  GUILD_DISCOVERY_FETCH_START: function(e) {
    let {
      section: t
    } = e;
    v = !0, E = {
      ...E,
      [t]: {
        ...E[t],
        loading: !0
      }
    }
  },
  GUILD_DISCOVERY_FETCH_SUCCESS: function(e) {
    let {
      guilds: t,
      section: n,
      total: i,
      offset: s,
      limit: r
    } = e;
    v = !1, T = Date.now(), N = (0, c.makeAnalyticsID)();
    let a = l.map(t, R);
    E = {
      ...E,
      [n]: {
        guilds: a,
        offset: s,
        limit: r,
        total: i,
        loading: !1,
        isFirstLoad: !1
      }
    }
  },
  GUILD_DISCOVERY_FETCH_FAILURE: function(e) {
    let {
      section: t
    } = e;
    v = !1, E = {
      ...E,
      [t]: {
        ...m,
        loading: !1
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_START: function(e) {
    let {
      categoryId: t
    } = e;
    v = !0, E = {
      ...E,
      [t]: {
        ...m,
        ...E[t],
        loading: !0
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function(e) {
    let {
      categoryId: t,
      guilds: n
    } = e;
    v = !1, T = Date.now();
    let i = l.map(n, R);
    E = {
      ...E,
      [t]: {
        ...m,
        guilds: i,
        loading: !1,
        isFirstLoad: !1
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: function(e) {
    let {
      categoryId: t
    } = e;
    v = !1, E = {
      ...E,
      [t]: {
        ...m,
        loading: !1
      }
    }
  },
  GUILD_DISCOVERY_SEARCH_FETCH_START: function(e) {
    var t;
    let {
      section: n,
      query: i,
      categoryId: s
    } = e;
    a("search" === n, "This action only supports search it seems"), S = "fetching", E = {
      ...E,
      [n]: {
        ...E[n],
        [i]: {
          ...E[n][i],
          [s]: {
            ...null === (t = E[n][i]) || void 0 === t ? void 0 : t[s],
            loading: !0
          }
        }
      }
    }, p = i
  },
  GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function(e) {
    var t;
    let {
      section: n,
      guilds: i,
      total: s,
      offset: r,
      limit: o,
      query: l,
      categoryId: u
    } = e;
    a("search" === n, "This action only supports search it seems");
    let d = i.map(R);
    E = {
      ...E,
      [n]: {
        ...E[n],
        [l]: {
          ...E[n][l],
          [u]: {
            ...null === (t = E[n][l]) || void 0 === t ? void 0 : t[u],
            guilds: d,
            total: s,
            offset: r,
            limit: o,
            loading: !1
          }
        }
      }
    }, p = l, S = "succeeded"
  },
  GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function(e) {
    var t;
    let {
      section: n,
      query: i,
      categoryId: s
    } = e;
    a("search" === n, "This action only supports search it seems"), S = "failed", E = {
      ...E,
      [n]: {
        ...E[n],
        [i]: {
          ...E[n][i],
          [s]: {
            ...null === (t = E[n][i]) || void 0 === t ? void 0 : t[s],
            loading: !1
          }
        }
      }
    }
  },
  GUILD_DISCOVERY_SELECT_CATEGORY: function(e) {
    let {
      categoryId: t,
      isHomepage: n
    } = e;
    I = t, n && (C = t)
  },
  GUILD_DISCOVERY_CLEAR_SEARCH: function() {
    p = ""
  },
  GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function(e) {
    let {
      nbHits: t,
      facets: n,
      query: i
    } = e, s = [];
    if (null != n) {
      var r;
      let e = null !== (r = n["categories.id"]) && void 0 !== r ? r : {};
      delete e[g.DEFAULT_DISCOVERY_CATEGORY_ID], s = Object.entries(e).map(e => {
        let [t, n] = e;
        return [parseInt(t, 10), n]
      }).sort((e, t) => t[1] - e[1]).slice(0, 7)
    }
    E = {
      ...E,
      [h.GuildDiscoverySections.SEARCH]: {
        ...E[h.GuildDiscoverySections.SEARCH],
        [i]: {
          ...E[h.GuildDiscoverySections.SEARCH][i],
          resultCounts: [
            [g.DISCOVERY_ALL_CATEGORIES_ID, Math.min(g.MAX_ALGOLIA_PAGINATOR_RESULTS, t)], ...s
          ]
        }
      }
    }
  },
  GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function(e) {
    let {
      query: t
    } = e;
    E = {
      ...E,
      [h.GuildDiscoverySections.SEARCH]: {
        ...E[h.GuildDiscoverySections.SEARCH],
        [t]: {
          ...E[h.GuildDiscoverySections.SEARCH][t],
          resultCounts: null
        }
      }
    }
  },
  GUILD_DISCOVERY_GUILD_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    !y.includes(t) && y.push(t)
  },
  GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function() {
    y = []
  }
})