"use strict";
i.r(t), i.d(t, {
  acceptCreatorMonetizationTerms: function() {
    return c
  },
  acceptCreatorMonetizationTermsV2: function() {
    return d
  },
  acceptNewTerms: function() {
    return m
  },
  acceptNewTermsDemonetized: function() {
    return h
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
    return C
  },
  removeMonetization: function() {
    return E
  }
});
var n = i("544891"),
  r = i("570140"),
  s = i("728345"),
  a = i("981631"),
  l = i("674563");
async function o(e) {
  await n.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(e)
  })
}
async function u(e) {
  return (await n.HTTP.get({
    url: a.Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(e)
  })).body
}
async function c(e, t) {
  await n.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t)
  })
}
async function d(e) {
  await n.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e)
  })
}
async function f(e) {
  return (await n.HTTP.get({
    url: a.Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e)
  })).body
}
async function p(e) {
  try {
    let t = await n.HTTP.get({
      url: a.Endpoints.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
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
async function C(e, t) {
  let i = (await n.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
    body: {
      team_id: t
    }
  })).body;
  return null != i.application && r.default.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: i.application
  }), i
}

function m(e) {
  return n.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e)
  })
}

function h(e) {
  return n.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e)
  })
}
async function _(e) {
  await n.HTTP.post({
    url: a.Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
    body: {}
  })
}
async function E(e) {
  return await _(e), await s.default.getApplicationsForGuild(e, {
    type: l.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}