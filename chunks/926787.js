"use strict";
n.r(t), n.d(t, {
  EMPTY_DISCOVERABLE_GUILDS_SECTION: function() {
    return _
  },
  default: function() {
    return D
  }
}), n("222007"), n("424973");
var i, r, s = n("627445"),
  a = n.n(s),
  o = n("917351"),
  l = n.n(o),
  u = n("446674");
n("233736");
var c = n("913144"),
  d = n("197231"),
  p = n("271938"),
  h = n("251013"),
  f = n("49111"),
  E = n("447621");
(r = i || (i = {})).UNSET = "unset", r.FETCHING = "fetching", r.FAILED = "failed", r.SUCCEEDED = "succeeded";
let _ = {
    guilds: [],
    total: 0,
    offset: 0,
    limit: 0,
    loading: !1,
    isFirstLoad: !0
  },
  m = {
    [f.GuildDiscoverySections.FEATURED]: {
      ..._
    },
    [f.GuildDiscoverySections.GAMES_YOU_PLAY]: {
      ..._
    },
    [f.GuildDiscoverySections.MISC]: {
      ..._
    },
    [f.GuildDiscoverySections.SEARCH]: {},
    [E.DISCOVERY_ALL_CATEGORIES_ID]: {
      ..._
    }
  },
  S = "",
  g = !1,
  T = "unset",
  I = null,
  v = E.DISCOVERY_ALL_CATEGORIES_ID,
  C = E.DISCOVERY_ALL_CATEGORIES_ID,
  A = null,
  R = [],
  N = (0, d.makeAnalyticsID)();

function y(e) {
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
    this.waitFor(p.default)
  }
  isFetching() {
    return g || null == I || null == h.default.lastFetched
  }
  isFetchingSearch() {
    return "fetching" === T
  }
  hasSearchError() {
    return "failed" === T
  }
  getDiscoverableGuilds() {
    return m
  }
  getCurrentCategoryId() {
    return v
  }
  getCurrentHomepageCategoryId() {
    return C
  }
  getSearchIndex() {
    return A
  }
  getMostRecentQuery() {
    return S
  }
  getTopCategoryCounts(e) {
    var t;
    return null === (t = m[f.GuildDiscoverySections.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts
  }
  getSeenGuildIds() {
    return R
  }
  getLoadId() {
    return N
  }
}
O.displayName = "GuildDiscoveryStore";
var D = new O(c.default, {
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
    g = !0, m = {
      ...m,
      [t]: {
        ...m[t],
        loading: !0
      }
    }
  },
  GUILD_DISCOVERY_FETCH_SUCCESS: function(e) {
    let {
      guilds: t,
      section: n,
      total: i,
      offset: r,
      limit: s
    } = e;
    g = !1, I = Date.now(), N = (0, d.makeAnalyticsID)();
    let a = l.map(t, y);
    m = {
      ...m,
      [n]: {
        guilds: a,
        offset: r,
        limit: s,
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
    g = !1, m = {
      ...m,
      [t]: {
        ..._,
        loading: !1
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_START: function(e) {
    let {
      categoryId: t
    } = e;
    g = !0, m = {
      ...m,
      [t]: {
        ..._,
        ...m[t],
        loading: !0
      }
    }
  },
  GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function(e) {
    let {
      categoryId: t,
      guilds: n
    } = e;
    g = !1, I = Date.now();
    let i = l.map(n, y);
    m = {
      ...m,
      [t]: {
        ..._,
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
    g = !1, m = {
      ...m,
      [t]: {
        ..._,
        loading: !1
      }
    }
  },
  GUILD_DISCOVERY_SEARCH_FETCH_START: function(e) {
    var t;
    let {
      section: n,
      query: i,
      categoryId: r
    } = e;
    a("search" === n, "This action only supports search it seems"), T = "fetching", m = {
      ...m,
      [n]: {
        ...m[n],
        [i]: {
          ...m[n][i],
          [r]: {
            ...null === (t = m[n][i]) || void 0 === t ? void 0 : t[r],
            loading: !0
          }
        }
      }
    }, S = i
  },
  GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function(e) {
    var t;
    let {
      section: n,
      guilds: i,
      total: r,
      offset: s,
      limit: o,
      query: l,
      categoryId: u
    } = e;
    a("search" === n, "This action only supports search it seems");
    let c = i.map(y);
    m = {
      ...m,
      [n]: {
        ...m[n],
        [l]: {
          ...m[n][l],
          [u]: {
            ...null === (t = m[n][l]) || void 0 === t ? void 0 : t[u],
            guilds: c,
            total: r,
            offset: s,
            limit: o,
            loading: !1
          }
        }
      }
    }, S = l, T = "succeeded"
  },
  GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function(e) {
    var t;
    let {
      section: n,
      query: i,
      categoryId: r
    } = e;
    a("search" === n, "This action only supports search it seems"), T = "failed", m = {
      ...m,
      [n]: {
        ...m[n],
        [i]: {
          ...m[n][i],
          [r]: {
            ...null === (t = m[n][i]) || void 0 === t ? void 0 : t[r],
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
    v = t, n && (C = t)
  },
  GUILD_DISCOVERY_CLEAR_SEARCH: function() {
    S = ""
  },
  GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function(e) {
    let {
      nbHits: t,
      facets: n,
      query: i
    } = e, r = [];
    if (null != n) {
      var s;
      let e = null !== (s = n["categories.id"]) && void 0 !== s ? s : {};
      delete e[E.DEFAULT_DISCOVERY_CATEGORY_ID], r = Object.entries(e).map(e => {
        let [t, n] = e;
        return [parseInt(t, 10), n]
      }).sort((e, t) => t[1] - e[1]).slice(0, 7)
    }
    m = {
      ...m,
      [f.GuildDiscoverySections.SEARCH]: {
        ...m[f.GuildDiscoverySections.SEARCH],
        [i]: {
          ...m[f.GuildDiscoverySections.SEARCH][i],
          resultCounts: [
            [E.DISCOVERY_ALL_CATEGORIES_ID, Math.min(E.MAX_ALGOLIA_PAGINATOR_RESULTS, t)], ...r
          ]
        }
      }
    }
  },
  GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function(e) {
    let {
      query: t
    } = e;
    m = {
      ...m,
      [f.GuildDiscoverySections.SEARCH]: {
        ...m[f.GuildDiscoverySections.SEARCH],
        [t]: {
          ...m[f.GuildDiscoverySections.SEARCH][t],
          resultCounts: null
        }
      }
    }
  },
  GUILD_DISCOVERY_GUILD_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    !R.includes(t) && R.push(t)
  },
  GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function() {
    R = []
  }
})