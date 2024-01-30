"use strict";
n.r(t), n.d(t, {
  AnalyticsContexts: function() {
    return l
  },
  MINIMUM_MEMBER_COUNT: function() {
    return g
  },
  startLurking: function() {
    return S
  },
  viewGuild: function() {
    return v
  },
  makeDiscoverableGuild: function() {
    return C
  },
  trackDiscoveryViewed: function() {
    return m
  },
  trackDiscoveryExited: function() {
    return _
  },
  trackSearchClosed: function() {
    return R
  },
  trackSearchStarted: function() {
    return p
  },
  trackTagSearchStarted: function() {
    return N
  },
  trackSearchResultsViewed: function() {
    return T
  },
  trackGuildJoinClicked: function() {
    return x
  },
  getDiscoverableGuild: function() {
    return L
  }
}), n("222007");
var l, a, r = n("522632"),
  i = n("872717"),
  s = n("851387"),
  u = n("267567"),
  o = n("393414"),
  c = n("239380"),
  d = n("525065"),
  f = n("305961"),
  h = n("599110"),
  E = n("49111");
(a = l || (l = {})).SEARCH = "Search", a.RECOMMENDED = "Recommended", a.POPULAR = "Popular", a.RECOMMENDED_E3 = "Recommended - E3", a.HEADER = "Header";
let g = ">200";
async function S(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      channelId: l,
      onSuccess: a,
      joinSource: r,
      loadId: i,
      setsHistorySnapshot: d = !0
    } = n,
    h = (0, o.getHistory)();
  d && u.default.setHistorySnapshot({
    ...h
  });
  let E = f.default.getGuild(e),
    g = {
      state: {
        analyticsSource: t
      }
    };
  null != E && null != E.joinedAt ? (0, c.transitionToGuild)(e, g) : (await s.default.joinGuild(e, {
    lurker: !0,
    source: r,
    loadId: i,
    lurkLocation: null == t ? void 0 : t.page
  }), await s.default.transitionToGuildSync(e, {
    ...g,
    welcomeModalChannelId: l,
    search: h.location.search
  }, l)), null == a || a()
}
async function v(e) {
  let t, {
    loadId: n,
    guildId: a,
    index: r,
    analyticsContext: i,
    categoryId: s
  } = e;
  "string" == typeof i && i in l && (t = i);
  let u = {
    page: E.AnalyticsPages.GUILD_DISCOVERY,
    object: E.AnalyticsObjects.CARD,
    section: t
  };
  await S(a, u, {
      loadId: n
    }),
    function(e) {
      let {
        loadId: t,
        guildId: n,
        index: l,
        analyticsContext: a,
        categoryId: r
      } = e, i = {
        page: E.AnalyticsPages.GUILD_DISCOVERY,
        section: a
      };
      "string" != typeof a && null != a.location && (i = a.location), h.default.track(E.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
        location: i,
        guild_id: n,
        load_id: t,
        card_index: l,
        location_object: E.AnalyticsObjects.CARD,
        category_id: r
      })
    }({
      loadId: n,
      guildId: a,
      index: r,
      analyticsContext: i,
      categoryId: s
    })
}

function C(e) {
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
    stickers: e.stickers,
    stickerCount: e.sticker_count,
    keywords: e.keywords
  }
}

function m(e) {
  let {
    loadId: t,
    gamesYouPlayGuilds: n,
    allGuilds: l,
    categoryId: a,
    recommendationsSource: r = null
  } = e, i = n.length, s = l.length;
  h.default.track(E.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
    load_id: t,
    num_guilds: i + s,
    num_guilds_recommended: i,
    num_guilds_popular: s,
    recommended_guild_ids: n.map(e => e.id),
    category_id: a,
    recommendations_source: r
  })
}

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  h.default.track(E.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
    load_id: e,
    guild_ids_viewed: t,
    recommendations_source: n
  })
}

function R(e) {
  h.default.track(E.AnalyticEvents.SEARCH_CLOSED, {
    load_id: e
  })
}

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  h.default.track(E.AnalyticEvents.SEARCH_STARTED, {
    search_type: E.SearchTypes.GUILD_DISCOVERY,
    load_id: e,
    location: n.location,
    category_id: t
  })
}

function N(e, t, n, l) {
  h.default.track(E.AnalyticEvents.SEARCH_STARTED, {
    search_type: E.SearchTypes.GUILD_DISCOVERY_TAG,
    load_id: e,
    location: {
      page: E.AnalyticsPages.GUILD_DISCOVERY,
      section: n
    },
    category_id: t,
    guild_id: l
  })
}

function T(e) {
  let {
    loadId: t,
    searchId: n,
    query: l,
    guildResults: a,
    analyticsContext: r,
    categoryId: i,
    isTagSearch: s
  } = e;
  h.default.track(E.AnalyticEvents.SEARCH_RESULT_VIEWED, {
    search_type: s ? E.SearchTypes.GUILD_DISCOVERY_TAG : E.SearchTypes.GUILD_DISCOVERY,
    load_id: t,
    search_id: n,
    total_results: void 0 !== a ? a.length : null,
    guild_ids: void 0 !== a ? a.map(e => e.id) : null,
    query: l,
    location: r.location,
    category_id: i
  })
}

function x(e) {
  let t = u.default.getLoadId(e);
  h.default.track(E.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
    guild_id: e,
    load_id: t,
    guild_size: d.default.getMemberCount(e)
  })
}
async function L(e) {
  try {
    var t, n;
    let l = await i.default.get({
        url: E.Endpoints.GUILD_DISCOVERY,
        query: r.stringify({
          guild_ids: e
        }),
        oldFormErrors: !0
      }),
      a = null === (n = l.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
    if (null == a) return a;
    return C(a)
  } catch (e) {
    return null
  }
}