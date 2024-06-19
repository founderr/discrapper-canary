e.d(n, {
  $J: function() {
    return A
  },
  He: function() {
    return s
  },
  av: function() {
    return _
  },
  df: function() {
    return N
  },
  hY: function() {
    return R
  },
  oL: function() {
    return C
  },
  wE: function() {
    return l
  },
  wZ: function() {
    return E
  },
  yk: function() {
    return u
  },
  zo: function() {
    return T
  }
});
var i = e(544891),
  a = e(570140),
  r = e(728345),
  o = e(981631),
  c = e(674563);
async function s(t) {
  await i.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(t)
  })
}
async function u(t) {
  return (await i.tn.get({
    url: o.ANM.CREATOR_MONETIZATION_ELIGIBILITY(t)
  })).body
}
async function l(t, n) {
  await i.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(t, n)
  })
}
async function T(t) {
  await i.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t)
  })
}
async function E(t) {
  return (await i.tn.get({
    url: o.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t)
  })).body
}
async function _(t) {
  try {
    let n = await i.tn.get({
      url: o.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: t
      }
    });
    a.Z.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: n.body.eligible_guilds
    })
  } catch (t) {}
}
async function N(t, n) {
  let e = (await i.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
    body: {
      team_id: n
    }
  })).body;
  return null != e.application && a.Z.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: e.application
  }), e
}

function R(t) {
  return i.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t)
  })
}

function A(t) {
  return i.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t)
  })
}
async function O(t) {
  await i.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
    body: {}
  })
}
async function C(t) {
  return await O(t), await r.Z.getApplicationsForGuild(t, {
    type: c.wW.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: !0
  })
}