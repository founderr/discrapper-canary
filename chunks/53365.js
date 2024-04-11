"use strict";
n.r(e), n.d(e, {
  acceptCreatorMonetizationTerms: function() {
    return l
  },
  acceptCreatorMonetizationTermsV2: function() {
    return u
  },
  acceptNewTerms: function() {
    return C
  },
  acceptNewTermsDemonetized: function() {
    return R
  },
  createCreatorMonetizationEnableRequest: function() {
    return T
  },
  fetchCreatorMonetizationNagActivateEligibility: function() {
    return d
  },
  getCreatorMonetizationEligibility: function() {
    return c
  },
  getCreatorMonetizationOnboardingMarketing: function() {
    return E
  },
  ownershipTransferOnboard: function() {
    return _
  },
  removeMonetization: function() {
    return A
  }
});
var i = n("544891"),
  a = n("570140"),
  o = n("728345"),
  r = n("981631"),
  s = n("674563");
async function T(t) {
  await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(t)
  })
}
async function c(t) {
  return (await i.HTTP.get({
    url: r.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(t)
  })).body
}
async function l(t, e) {
  await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(t, e)
  })
}
async function u(t) {
  await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t)
  })
}
async function E(t) {
  return (await i.HTTP.get({
    url: r.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t)
  })).body
}
async function d(t) {
  try {
    let e = await i.HTTP.get({
      url: r.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: t
      }
    });
    a.default.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: e.body.eligible_guilds
    })
  } catch (t) {}
}
async function _(t, e) {
  let n = (await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
    body: {
      team_id: e
    }
  })).body;
  return null != n.application && a.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: n.application
  }), n
}

function C(t) {
  return i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t)
  })
}

function R(t) {
  return i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t)
  })
}
async function O(t) {
  await i.HTTP.post({
    url: r.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
    body: {}
  })
}
async function A(t) {
  return await O(t), await o.default.getApplicationsForGuild(t, {
    type: s.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}