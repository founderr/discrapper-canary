"use strict";
n.r(t), n.d(t, {
  addGuildCategory: function() {
    return h
  },
  deleteGuildCategory: function() {
    return g
  },
  fetchMetadataForGuild: function() {
    return u
  },
  fetchSlugForGuild: function() {
    return c
  },
  maybeFetchGuildDiscoveryCategories: function() {
    return o
  },
  saveGuildMetadata: function() {
    return T
  },
  updateGuildDiscoveryMetadataAbout: function() {
    return E
  },
  updateGuildDiscoveryMetadataIsPublished: function() {
    return m
  },
  updateGuildDiscoveryMetadataReasonsToJoin: function() {
    return I
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
var i = n("544891"),
  r = n("570140"),
  s = n("706454"),
  a = n("150192"),
  l = n("981631");
async function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = s.default.locale;
  if (n === a.default.getFetchedLocale()) return;
  let o = await i.HTTP.get({
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
async function u(e) {
  try {
    let {
      primary_category_id: t,
      category_ids: n,
      keywords: s,
      emoji_discoverability_enabled: a,
      partner_actioned_timestamp: o,
      partner_application_timestamp: u,
      is_published: c,
      reasons_to_join: d,
      social_links: f,
      about: p
    } = (await i.HTTP.get({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(e),
      oldFormErrors: !0
    })).body, m = {
      primaryCategoryId: t,
      secondaryCategoryIds: n,
      keywords: s,
      emojiDiscoverabilityEnabled: a,
      partnerActionedTimestamp: o,
      partnerApplicationTimestamp: u,
      isPublished: c,
      reasonsToJoin: d,
      socialLinks: f,
      about: p
    };
    return r.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: e,
      metadata: m
    }), m
  } catch (e) {
    r.default.dispatch({
      type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
    })
  }
}
async function c(e) {
  try {
    let t = (await i.HTTP.get({
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

function m(e, t) {
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

function I(e, t) {
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
async function T(e) {
  let {
    guildId: t,
    primaryCategoryId: n,
    keywords: s,
    emojiDiscoverabilityEnabled: a,
    partnerActionedTimestamp: o,
    partnerApplicationTimestamp: u,
    isPublished: c,
    reasonsToJoin: d,
    socialLinks: f,
    about: p
  } = e;
  try {
    let {
      primary_category_id: e,
      category_ids: m,
      keywords: E,
      emoji_discoverability_enabled: I,
      partner_actioned_timestamp: _,
      partner_application_timestamp: T,
      is_published: h,
      reasons_to_join: g,
      social_links: C,
      about: x
    } = (await i.HTTP.patch({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(t),
      body: {
        primary_category_id: n,
        emoji_discoverability_enabled: a,
        partner_actioned_timestamp: o,
        partner_application_timestamp: u,
        keywords: s,
        is_published: c,
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
        secondaryCategoryIds: m,
        keywords: E,
        emojiDiscoverabilityEnabled: I,
        partnerActionedTimestamp: _,
        partnerApplicationTimestamp: T,
        isPublished: h,
        reasonsToJoin: g,
        socialLinks: C,
        about: x
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

function h(e, t) {
  i.HTTP.put({
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
  i.HTTP.del({
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