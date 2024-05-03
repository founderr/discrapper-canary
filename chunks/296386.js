"use strict";
a.r(t), a.d(t, {
  addGuildCategory: function() {
    return C
  },
  deleteGuildCategory: function() {
    return g
  },
  fetchMetadataForGuild: function() {
    return c
  },
  fetchSlugForGuild: function() {
    return d
  },
  maybeFetchGuildDiscoveryCategories: function() {
    return o
  },
  saveGuildMetadata: function() {
    return _
  },
  updateGuildDiscoveryMetadataAbout: function() {
    return E
  },
  updateGuildDiscoveryMetadataIsPublished: function() {
    return h
  },
  updateGuildDiscoveryMetadataReasonsToJoin: function() {
    return T
  },
  updateGuildDiscoveryMetadataSocialLinks: function() {
    return p
  },
  updateGuildEmojiDiscoverabilityEnabled: function() {
    return m
  },
  updateGuildKeywords: function() {
    return f
  },
  updateGuildPrimaryCategory: function() {
    return u
  }
});
var n = a("544891"),
  r = a("570140"),
  i = a("706454"),
  s = a("150192"),
  l = a("981631");
async function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = i.default.locale;
  if (a === s.default.getFetchedLocale()) return;
  let o = await n.HTTP.get({
    url: l.Endpoints.GUILD_DISCOVERY_CATEGORIES,
    query: {
      locale: a,
      primary_only: e
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
    categories: o.body,
    locale: a,
    forClanDiscovery: t
  })
}
async function c(e) {
  try {
    let {
      primary_category_id: t,
      category_ids: a,
      keywords: i,
      emoji_discoverability_enabled: s,
      partner_actioned_timestamp: o,
      partner_application_timestamp: c,
      is_published: d,
      reasons_to_join: u,
      social_links: f,
      about: m
    } = (await n.HTTP.get({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(e),
      oldFormErrors: !0
    })).body, h = {
      primaryCategoryId: t,
      secondaryCategoryIds: a,
      keywords: i,
      emojiDiscoverabilityEnabled: s,
      partnerActionedTimestamp: o,
      partnerApplicationTimestamp: c,
      isPublished: d,
      reasonsToJoin: u,
      socialLinks: f,
      about: m
    };
    return r.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: e,
      metadata: h
    }), h
  } catch (e) {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
    })
  }
}
async function d(e) {
  try {
    let t = (await n.HTTP.get({
      url: l.Endpoints.GUILD_DISCOVERY_SLUG(e)
    })).body.slug;
    r.default.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
      slug: t
    })
  } catch {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
      guildId: e
    })
  }
}

function u(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    primaryCategoryId: t
  })
}

function f(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    keywords: t
  })
}

function m(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    emojiDiscoverabilityEnabled: t
  })
}

function h(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    isPublished: t
  })
}

function E(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    about: t
  })
}

function T(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    reasonsToJoin: t
  })
}

function p(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    socialLinks: t
  })
}
async function _(e) {
  let {
    guildId: t,
    primaryCategoryId: a,
    keywords: i,
    emojiDiscoverabilityEnabled: s,
    partnerActionedTimestamp: o,
    partnerApplicationTimestamp: c,
    isPublished: d,
    reasonsToJoin: u,
    socialLinks: f,
    about: m
  } = e;
  try {
    let {
      primary_category_id: e,
      category_ids: h,
      keywords: E,
      emoji_discoverability_enabled: T,
      partner_actioned_timestamp: p,
      partner_application_timestamp: _,
      is_published: C,
      reasons_to_join: g,
      social_links: x,
      about: I
    } = (await n.HTTP.patch({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(t),
      body: {
        primary_category_id: a,
        emoji_discoverability_enabled: s,
        partner_actioned_timestamp: o,
        partner_application_timestamp: c,
        keywords: i,
        is_published: d,
        reasons_to_join: u,
        social_links: f,
        about: m
      },
      oldFormErrors: !0
    })).body;
    r.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: t,
      metadata: {
        primaryCategoryId: e,
        secondaryCategoryIds: h,
        keywords: E,
        emojiDiscoverabilityEnabled: T,
        partnerActionedTimestamp: p,
        partnerApplicationTimestamp: _,
        isPublished: C,
        reasonsToJoin: g,
        socialLinks: x,
        about: I
      }
    })
  } catch (e) {
    throw r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: t,
      errors: e.body
    }), e
  }
}

function C(e, t) {
  n.HTTP.put({
    url: l.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
    oldFormErrors: !0
  }).then(() => {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_ADD",
      guildId: e,
      categoryId: t
    })
  }).catch(t => {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: t.body
    })
  })
}

function g(e, t) {
  n.HTTP.del({
    url: l.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
    oldFormErrors: !0
  }).then(() => {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_DELETE",
      guildId: e,
      categoryId: t
    })
  }).catch(t => {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: t.body
    })
  })
}