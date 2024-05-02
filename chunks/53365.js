"use strict";
n.r(t), n.d(t, {
  acceptCreatorMonetizationTerms: function() {
    return c
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
    return d
  },
  getCreatorMonetizationOnboardingMarketing: function() {
    return f
  },
  ownershipTransferOnboard: function() {
    return h
  },
  removeMonetization: function() {
    return _
  }
});
var a = n("544891"),
  i = n("570140"),
  r = n("728345"),
  s = n("981631"),
  l = n("674563");
async function o(e) {
  await a.HTTP.post({
    url: s.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(e)
  })
}
async function d(e) {
  return (await a.HTTP.get({
    url: s.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(e)
  })).body
}
async function c(e, t) {
  await a.HTTP.post({
    url: s.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t)
  })
}
async function u(e) {
  await a.HTTP.post({
    url: s.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e)
  })
}
async function f(e) {
  return (await a.HTTP.get({
    url: s.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e)
  })).body
}
async function m(e) {
  try {
    let t = await a.HTTP.get({
      url: s.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: e
      }
    });
    i.default.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: t.body.eligible_guilds
    })
  } catch (e) {}
}
async function h(e, t) {
  let n = (await a.HTTP.post({
    url: s.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
    body: {
      team_id: t
    }
  })).body;
  return null != n.application && i.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: n.application
  }), n
}

function E(e) {
  return a.HTTP.post({
    url: s.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e)
  })
}

function T(e) {
  return a.HTTP.post({
    url: s.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e)
  })
}
async function p(e) {
  await a.HTTP.post({
    url: s.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
    body: {}
  })
}
async function _(e) {
  return await p(e), await r.default.getApplicationsForGuild(e, {
    type: l.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}