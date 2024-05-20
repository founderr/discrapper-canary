"use strict";
a.r(t), a.d(t, {
  acceptCreatorMonetizationTerms: function() {
    return d
  },
  acceptCreatorMonetizationTermsV2: function() {
    return u
  },
  acceptNewTerms: function() {
    return E
  },
  acceptNewTermsDemonetized: function() {
    return T
  },
  createCreatorMonetizationEnableRequest: function() {
    return o
  },
  fetchCreatorMonetizationNagActivateEligibility: function() {
    return m
  },
  getCreatorMonetizationEligibility: function() {
    return c
  },
  getCreatorMonetizationOnboardingMarketing: function() {
    return f
  },
  ownershipTransferOnboard: function() {
    return h
  },
  removeMonetization: function() {
    return C
  }
});
var n = a("544891"),
  r = a("570140"),
  s = a("728345"),
  i = a("981631"),
  l = a("674563");
async function o(e) {
  await n.HTTP.post({
    url: i.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(e)
  })
}
async function c(e) {
  return (await n.HTTP.get({
    url: i.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(e)
  })).body
}
async function d(e, t) {
  await n.HTTP.post({
    url: i.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t)
  })
}
async function u(e) {
  await n.HTTP.post({
    url: i.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e)
  })
}
async function f(e) {
  return (await n.HTTP.get({
    url: i.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e)
  })).body
}
async function m(e) {
  try {
    let t = await n.HTTP.get({
      url: i.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: e
      }
    });
    r.default.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: t.body.eligible_guilds
    })
  } catch (e) {}
}
async function h(e, t) {
  let a = (await n.HTTP.post({
    url: i.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
    body: {
      team_id: t
    }
  })).body;
  return null != a.application && r.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: a.application
  }), a
}

function E(e) {
  return n.HTTP.post({
    url: i.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e)
  })
}

function T(e) {
  return n.HTTP.post({
    url: i.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e)
  })
}
async function p(e) {
  await n.HTTP.post({
    url: i.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
    body: {}
  })
}
async function C(e) {
  return await p(e), await s.default.getApplicationsForGuild(e, {
    type: l.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}