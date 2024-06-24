t.d(n, {
  J9: function() {
    return C
  },
  K0: function() {
    return g
  },
  Kq: function() {
    return I
  },
  P$: function() {
    return E
  },
  TA: function() {
    return m
  },
  Vv: function() {
    return _
  },
  W1: function() {
    return x
  },
  aC: function() {
    return d
  },
  i3: function() {
    return u
  },
  le: function() {
    return c
  },
  mA: function() {
    return f
  },
  t$: function() {
    return T
  },
  zH: function() {
    return h
  }
});
var a = t(544891),
  r = t(570140),
  s = t(706454),
  i = t(683301),
  l = t(150192),
  o = t(981631);
async function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    t = s.default.locale,
    c = n && !i.ZP.getIsReady();
  if (t === l.Z.getFetchedLocale() && !c) return;
  let d = await a.tn.get({
    url: o.ANM.GUILD_DISCOVERY_CATEGORIES,
    query: {
      locale: t,
      primary_only: e
    },
    oldFormErrors: !0
  });
  r.Z.dispatch({
    type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
    categories: d.body,
    locale: t,
    forClanDiscovery: n
  })
}
async function d(e) {
  try {
    let {
      primary_category_id: n,
      category_ids: t,
      keywords: s,
      emoji_discoverability_enabled: i,
      partner_actioned_timestamp: l,
      partner_application_timestamp: c,
      is_published: d,
      reasons_to_join: u,
      social_links: m,
      about: h
    } = (await a.tn.get({
      url: o.ANM.GUILD_DISCOVERY_METADATA(e),
      oldFormErrors: !0
    })).body, C = {
      primaryCategoryId: n,
      secondaryCategoryIds: t,
      keywords: s,
      emojiDiscoverabilityEnabled: i,
      partnerActionedTimestamp: l,
      partnerApplicationTimestamp: c,
      isPublished: d,
      reasonsToJoin: u,
      socialLinks: m,
      about: h
    };
    return r.Z.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: e,
      metadata: C
    }), C
  } catch (e) {
    r.Z.dispatch({
      type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
    })
  }
}
async function u(e) {
  try {
    let n = (await a.tn.get({
      url: o.ANM.GUILD_DISCOVERY_SLUG(e)
    })).body.slug;
    r.Z.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
      slug: n
    })
  } catch {
    r.Z.dispatch({
      type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
      guildId: e
    })
  }
}

function m(e, n) {
  r.Z.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    primaryCategoryId: n
  })
}

function h(e, n) {
  r.Z.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    keywords: n
  })
}

function C(e, n) {
  r.Z.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    emojiDiscoverabilityEnabled: n
  })
}

function x(e, n) {
  r.Z.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    isPublished: n
  })
}

function f(e, n) {
  r.Z.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    about: n
  })
}

function E(e, n) {
  r.Z.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    reasonsToJoin: n
  })
}

function T(e, n) {
  r.Z.dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA",
    guildId: e,
    socialLinks: n
  })
}
async function _(e) {
  let {
    guildId: n,
    primaryCategoryId: t,
    keywords: s,
    emojiDiscoverabilityEnabled: i,
    partnerActionedTimestamp: l,
    partnerApplicationTimestamp: c,
    isPublished: d,
    reasonsToJoin: u,
    socialLinks: m,
    about: h
  } = e;
  try {
    let {
      primary_category_id: e,
      category_ids: C,
      keywords: x,
      emoji_discoverability_enabled: f,
      partner_actioned_timestamp: E,
      partner_application_timestamp: T,
      is_published: _,
      reasons_to_join: I,
      social_links: g,
      about: p
    } = (await a.tn.patch({
      url: o.ANM.GUILD_DISCOVERY_METADATA(n),
      body: {
        primary_category_id: t,
        emoji_discoverability_enabled: i,
        partner_actioned_timestamp: l,
        partner_application_timestamp: c,
        keywords: s,
        is_published: d,
        reasons_to_join: u,
        social_links: m,
        about: h
      },
      oldFormErrors: !0
    })).body;
    r.Z.dispatch({
      type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
      guildId: n,
      metadata: {
        primaryCategoryId: e,
        secondaryCategoryIds: C,
        keywords: x,
        emojiDiscoverabilityEnabled: f,
        partnerActionedTimestamp: E,
        partnerApplicationTimestamp: T,
        isPublished: _,
        reasonsToJoin: I,
        socialLinks: g,
        about: p
      }
    })
  } catch (e) {
    throw r.Z.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: n,
      errors: e.body
    }), e
  }
}

function I(e, n) {
  a.tn.put({
    url: o.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
    oldFormErrors: !0
  }).then(() => {
    r.Z.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_ADD",
      guildId: e,
      categoryId: n
    })
  }).catch(n => {
    r.Z.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: n.body
    })
  })
}

function g(e, n) {
  a.tn.del({
    url: o.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
    oldFormErrors: !0
  }).then(() => {
    r.Z.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_DELETE",
      guildId: e,
      categoryId: n
    })
  }).catch(n => {
    r.Z.dispatch({
      type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
      guildId: e,
      errors: n.body
    })
  })
}