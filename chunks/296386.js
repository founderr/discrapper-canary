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
    return _
  },
  updateGuildDiscoveryMetadataReasonsToJoin: function() {
    return m
  },
  updateGuildDiscoveryMetadataSocialLinks: function() {
    return I
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
var r = n("544891"),
  i = n("570140"),
  s = n("706454"),
  a = n("150192"),
  l = n("981631");
async function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = s.default.locale;
  if (n === a.default.getFetchedLocale()) return;
  let o = await r.HTTP.get({
    url: l.Endpoints.GUILD_DISCOVERY_CATEGORIES,
    query: {
      locale: n,
      primary_only: e
    },
    oldFormErrors: !0
  });
  i.default.dispatch({
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
    } = (await r.HTTP.get({
      url: l.Endpoints.GUILD_DISCOVERY_METADATA(e),
      oldFormErrors: !0
    })).body, _ = {
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
    return i.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: e,
      metadata: _
    }), _
  } catch (e) {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
    })
  }
}
async function c(e) {
  try {
    let t = (await r.HTTP.get({
      url: l.Endpoints.GUILD_DISCOVERY_SLUG(e)
    })).body.slug;
    i.default.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
      slug: t
    })
  } catch {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
      guildId: e
    })
  }
}

function d(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    primaryCategoryId: t
  })
}

function f(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    keywords: t
  })
}

function p(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    emojiDiscoverabilityEnabled: t
  })
}

function _(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    isPublished: t
  })
}

function E(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    about: t
  })
}

function m(e, t) {
  i.default.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    reasonsToJoin: t
  })
}

function I(e, t) {
  i.default.dispatch({
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
      category_ids: _,
      keywords: E,
      emoji_discoverability_enabled: m,
      partner_actioned_timestamp: I,
      partner_application_timestamp: T,
      is_published: h,
      reasons_to_join: g,
      social_links: C,
      about: S
    } = (await r.HTTP.patch({
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
    i.default.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: t,
      metadata: {
        primaryCategoryId: e,
        secondaryCategoryIds: _,
        keywords: E,
        emojiDiscoverabilityEnabled: m,
        partnerActionedTimestamp: I,
        partnerApplicationTimestamp: T,
        isPublished: h,
        reasonsToJoin: g,
        socialLinks: C,
        about: S
      }
    })
  } catch (e) {
    throw i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: t,
      errors: e.body
    }), e
  }
}

function h(e, t) {
  r.HTTP.put({
    url: l.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
    oldFormErrors: !0
  }).then(() => {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_ADD",
      guildId: e,
      categoryId: t
    })
  }).catch(t => {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: t.body
    })
  })
}

function g(e, t) {
  r.HTTP.del({
    url: l.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
    oldFormErrors: !0
  }).then(() => {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_DELETE",
      guildId: e,
      categoryId: t
    })
  }).catch(t => {
    i.default.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: t.body
    })
  })
}