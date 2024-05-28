"use strict";
a.r(t), a.d(t, {
  addGuildCategory: function() {
    return p
  },
  deleteGuildCategory: function() {
    return I
  },
  fetchMetadataForGuild: function() {
    return c
  },
  fetchSlugForGuild: function() {
    return u
  },
  maybeFetchGuildDiscoveryCategories: function() {
    return d
  },
  saveGuildMetadata: function() {
    return x
  },
  updateGuildDiscoveryMetadataAbout: function() {
    return T
  },
  updateGuildDiscoveryMetadataIsPublished: function() {
    return h
  },
  updateGuildDiscoveryMetadataReasonsToJoin: function() {
    return _
  },
  updateGuildDiscoveryMetadataSocialLinks: function() {
    return C
  },
  updateGuildEmojiDiscoverabilityEnabled: function() {
    return E
  },
  updateGuildKeywords: function() {
    return m
  },
  updateGuildPrimaryCategory: function() {
    return f
  }
});
var n = a("544891"),
  r = a("570140"),
  i = a("706454"),
  s = a("683301"),
  l = a("150192"),
  o = a("981631");
async function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = i.default.locale,
    d = t && !s.default.getIsReady();
  if (a === l.default.getFetchedLocale() && !d) return;
  let c = await n.HTTP.get({
    url: o.Endpoints.GUILD_DISCOVERY_CATEGORIES,
    query: {
      locale: a,
      primary_only: e
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
    categories: c.body,
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
      partner_actioned_timestamp: l,
      partner_application_timestamp: d,
      is_published: c,
      reasons_to_join: u,
      social_links: f,
      about: m
    } = (await n.HTTP.get({
      url: o.Endpoints.GUILD_DISCOVERY_METADATA(e),
      oldFormErrors: !0
    })).body, E = {
      primaryCategoryId: t,
      secondaryCategoryIds: a,
      keywords: i,
      emojiDiscoverabilityEnabled: s,
      partnerActionedTimestamp: l,
      partnerApplicationTimestamp: d,
      isPublished: c,
      reasonsToJoin: u,
      socialLinks: f,
      about: m
    };
    return r.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: e,
      metadata: E
    }), E
  } catch (e) {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
    })
  }
}
async function u(e) {
  try {
    let t = (await n.HTTP.get({
      url: o.Endpoints.GUILD_DISCOVERY_SLUG(e)
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

function f(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    primaryCategoryId: t
  })
}

function m(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    keywords: t
  })
}

function E(e, t) {
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

function T(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    about: t
  })
}

function _(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    reasonsToJoin: t
  })
}

function C(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    socialLinks: t
  })
}
async function x(e) {
  let {
    guildId: t,
    primaryCategoryId: a,
    keywords: i,
    emojiDiscoverabilityEnabled: s,
    partnerActionedTimestamp: l,
    partnerApplicationTimestamp: d,
    isPublished: c,
    reasonsToJoin: u,
    socialLinks: f,
    about: m
  } = e;
  try {
    let {
      primary_category_id: e,
      category_ids: E,
      keywords: h,
      emoji_discoverability_enabled: T,
      partner_actioned_timestamp: _,
      partner_application_timestamp: C,
      is_published: x,
      reasons_to_join: p,
      social_links: I,
      about: g
    } = (await n.HTTP.patch({
      url: o.Endpoints.GUILD_DISCOVERY_METADATA(t),
      body: {
        primary_category_id: a,
        emoji_discoverability_enabled: s,
        partner_actioned_timestamp: l,
        partner_application_timestamp: d,
        keywords: i,
        is_published: c,
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
        secondaryCategoryIds: E,
        keywords: h,
        emojiDiscoverabilityEnabled: T,
        partnerActionedTimestamp: _,
        partnerApplicationTimestamp: C,
        isPublished: x,
        reasonsToJoin: p,
        socialLinks: I,
        about: g
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

function p(e, t) {
  n.HTTP.put({
    url: o.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
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

function I(e, t) {
  n.HTTP.del({
    url: o.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
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