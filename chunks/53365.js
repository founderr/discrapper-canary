"use strict";
n.r(t), n.d(t, {
  acceptCreatorMonetizationTerms: function() {
    return c
  },
  acceptCreatorMonetizationTermsV2: function() {
    return d
  },
  acceptNewTerms: function() {
    return E
  },
  acceptNewTermsDemonetized: function() {
    return m
  },
  createCreatorMonetizationEnableRequest: function() {
    return o
  },
  fetchCreatorMonetizationNagActivateEligibility: function() {
    return p
  },
  getCreatorMonetizationEligibility: function() {
    return u
  },
  getCreatorMonetizationOnboardingMarketing: function() {
    return f
  },
  ownershipTransferOnboard: function() {
    return _
  },
  removeMonetization: function() {
    return T
  }
});
var r = n("544891"),
  i = n("570140"),
  s = n("728345"),
  a = n("981631"),
  l = n("674563");
async function o(e) {
  await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(e)
  })
}
async function u(e) {
  return (await r.HTTP.get({
    url: a.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(e)
  })).body
}
async function c(e, t) {
  await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t)
  })
}
async function d(e) {
  await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e)
  })
}
async function f(e) {
  return (await r.HTTP.get({
    url: a.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e)
  })).body
}
async function p(e) {
  try {
    let t = await r.HTTP.get({
      url: a.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
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
async function _(e, t) {
  let n = (await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
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
  return r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e)
  })
}

function m(e) {
  return r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e)
  })
}
async function I(e) {
  await r.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
    body: {}
  })
}
async function T(e) {
  return await I(e), await s.default.getApplicationsForGuild(e, {
    type: l.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}