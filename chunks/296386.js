"use strict";
n.r(t), n.d(t, {
  addGuildCategory: function() {
    return _
  },
  deleteGuildCategory: function() {
    return x
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
    return C
  },
  updateGuildDiscoveryMetadataAbout: function() {
    return p
  },
  updateGuildDiscoveryMetadataIsPublished: function() {
    return h
  },
  updateGuildDiscoveryMetadataReasonsToJoin: function() {
    return T
  },
  updateGuildDiscoveryMetadataSocialLinks: function() {
    return E
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
var a = n("544891"),
  r = n("570140"),
  s = n("706454"),
  i = n("150192"),
  l = n("981631");
async function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = s.default.locale;
  if (n === i.default.getFetchedLocale()) return;
  let o = await a.HTTP.get({
    url: l.Endpoints.GUILD_DISCOVERY_CATEGORIES,
    query: {
      locale: n,
      primary_only: e
    },
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
    categories: o.body,
    locale: n,
    forClanDiscovery: t
  })
}
async function c(e) {
  try {
    let {
      primary_category_id: t,
      category_ids: n,
      keywords: s,
      emoji_discoverability_enabled: i,
      partner_actioned_timestamp: o,
      partner_application_timestamp: c,
      is_published: d,
      reasons_to_join: u,
      social_links: f,
      about: m
    } = (await a.HTTP.get({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(e),
      oldFormErrors: !0
    })).body, h = {
      primaryCategoryId: t,
      secondaryCategoryIds: n,
      keywords: s,
      emojiDiscoverabilityEnabled: i,
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
    let t = (await a.HTTP.get({
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

function p(e, t) {
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

function E(e, t) {
  r.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    socialLinks: t
  })
}
async function C(e) {
  let {
    guildId: t,
    primaryCategoryId: n,
    keywords: s,
    emojiDiscoverabilityEnabled: i,
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
      keywords: p,
      emoji_discoverability_enabled: T,
      partner_actioned_timestamp: E,
      partner_application_timestamp: C,
      is_published: _,
      reasons_to_join: x,
      social_links: g,
      about: I
    } = (await a.HTTP.patch({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(t),
      body: {
        primary_category_id: n,
        emoji_discoverability_enabled: i,
        partner_actioned_timestamp: o,
        partner_application_timestamp: c,
        keywords: s,
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
        keywords: p,
        emojiDiscoverabilityEnabled: T,
        partnerActionedTimestamp: E,
        partnerApplicationTimestamp: C,
        isPublished: _,
        reasonsToJoin: x,
        socialLinks: g,
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

function _(e, t) {
  a.HTTP.put({
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

function x(e, t) {
  a.HTTP.del({
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