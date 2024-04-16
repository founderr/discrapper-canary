"use strict";
i.r(t), i.d(t, {
  addGuildCategory: function() {
    return I
  },
  deleteGuildCategory: function() {
    return T
  },
  fetchMetadataForGuild: function() {
    return c
  },
  fetchSlugForGuild: function() {
    return u
  },
  maybeFetchGuildDiscoveryCategories: function() {
    return o
  },
  saveGuildMetadata: function() {
    return E
  },
  updateGuildDiscoveryMetadataAbout: function() {
    return m
  },
  updateGuildDiscoveryMetadataIsPublished: function() {
    return C
  },
  updateGuildDiscoveryMetadataReasonsToJoin: function() {
    return h
  },
  updateGuildDiscoveryMetadataSocialLinks: function() {
    return _
  },
  updateGuildEmojiDiscoverabilityEnabled: function() {
    return p
  },
  updateGuildKeywords: function() {
    return f
  },
  updateGuildPrimaryCategory: function() {
    return d
  }
});
var n = i("544891"),
  r = i("570140"),
  s = i("706454"),
  a = i("150192"),
  l = i("981631");
async function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = s.default.locale;
  if (i === a.default.getFetchedLocale()) return;
  let o = await n.HTTP.get({
    url: l.Endpoints.GUILD_DISCOVERY_CATEGORIES,
    query: {
      locale: i,
      primary_only: e
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
    categories: o.body,
    locale: i,
    forClanDiscovery: t
  })
}
async function c(e) {
  try {
    let {
      primary_category_id: t,
      category_ids: i,
      keywords: s,
      emoji_discoverability_enabled: a,
      partner_actioned_timestamp: o,
      partner_application_timestamp: c,
      is_published: u,
      reasons_to_join: d,
      social_links: f,
      about: p
    } = (await n.HTTP.get({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(e),
      oldFormErrors: !0
    })).body, C = {
      primaryCategoryId: t,
      secondaryCategoryIds: i,
      keywords: s,
      emojiDiscoverabilityEnabled: a,
      partnerActionedTimestamp: o,
      partnerApplicationTimestamp: c,
      isPublished: u,
      reasonsToJoin: d,
      socialLinks: f,
      about: p
    };
    return r.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: e,
      metadata: C
    }), C
  } catch (e) {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
    })
  }
}
async function u(e) {
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

function d(e, t) {
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

function p(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    emojiDiscoverabilityEnabled: t
  })
}

function C(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    isPublished: t
  })
}

function m(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    about: t
  })
}

function h(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    reasonsToJoin: t
  })
}

function _(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    socialLinks: t
  })
}
async function E(e) {
  let {
    guildId: t,
    primaryCategoryId: i,
    keywords: s,
    emojiDiscoverabilityEnabled: a,
    partnerActionedTimestamp: o,
    partnerApplicationTimestamp: c,
    isPublished: u,
    reasonsToJoin: d,
    socialLinks: f,
    about: p
  } = e;
  try {
    let {
      primary_category_id: e,
      category_ids: C,
      keywords: m,
      emoji_discoverability_enabled: h,
      partner_actioned_timestamp: _,
      partner_application_timestamp: E,
      is_published: I,
      reasons_to_join: T,
      social_links: x,
      about: g
    } = (await n.HTTP.patch({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(t),
      body: {
        primary_category_id: i,
        emoji_discoverability_enabled: a,
        partner_actioned_timestamp: o,
        partner_application_timestamp: c,
        keywords: s,
        is_published: u,
        reasons_to_join: d,
        social_links: f,
        about: p
      },
      oldFormErrors: !0
    })).body;
    r.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: t,
      metadata: {
        primaryCategoryId: e,
        secondaryCategoryIds: C,
        keywords: m,
        emojiDiscoverabilityEnabled: h,
        partnerActionedTimestamp: _,
        partnerApplicationTimestamp: E,
        isPublished: I,
        reasonsToJoin: T,
        socialLinks: x,
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

function I(e, t) {
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

function T(e, t) {
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