"use strict";
n.r(t), n.d(t, {
  fetchAppliedGuildBoostsForGuild: function() {
    return d
  },
  fetchGuildBoostSlots: function() {
    return c
  },
  applyToGuild: function() {
    return _
  },
  unapplyFromGuild: function() {
    return I
  },
  cancelGuildBoostSlot: function() {
    return E
  },
  uncancelGuildBoostSlot: function() {
    return f
  }
});
var i = n("872717"),
  l = n("913144"),
  r = n("448993"),
  a = n("783111"),
  s = n("522308"),
  u = n("521012"),
  o = n("49111");
async function d(e) {
  let t = await i.default.get({
      url: o.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
      oldFormErrors: !0
    }),
    n = t.body.map(e => a.default.createFromServer(e));
  return l.default.dispatch({
    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
    guildId: e,
    appliedBoosts: n
  }), n
}
async function c() {
  let e = await i.default.get({
      url: o.Endpoints.USER_GUILD_BOOST_SLOTS,
      oldFormErrors: !0
    }),
    t = e.body.map(e => s.default.createFromServer(e, u.default.getSubscriptionById(e.subscription_id)));
  return l.default.dispatch({
    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
    guildBoostSlots: t
  }), t
}
async function _(e, t) {
  l.default.dispatch({
    type: "GUILD_APPLY_BOOST_START"
  });
  try {
    let n = await i.default.put({
        url: o.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
        body: {
          user_premium_guild_subscription_slot_ids: t
        },
        oldFormErrors: !0
      }),
      r = Array.isArray(n.body) ? n.body.map(a.default.createFromServer) : [a.default.createFromServer(n.body)];
    return l.default.dispatch({
      type: "GUILD_APPLY_BOOST_SUCCESS",
      appliedGuildBoost: r
    }), c(), r
  } catch (t) {
    let e = new r.AppliedGuildBoostError(t);
    throw l.default.dispatch({
      type: "GUILD_APPLY_BOOST_FAIL",
      error: e
    }), e
  }
}
async function I(e, t) {
  l.default.dispatch({
    type: "GUILD_UNAPPLY_BOOST_START"
  });
  try {
    await i.default.delete({
      url: o.Endpoints.APPLIED_GUILD_BOOST(e, t),
      oldFormErrors: !0
    }), c()
  } catch (t) {
    let e = new r.AppliedGuildBoostError(t);
    throw l.default.dispatch({
      type: "GUILD_UNAPPLY_BOOST_FAIL",
      error: e
    }), e
  }
  l.default.dispatch({
    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
    boostId: t
  })
}
async function E(e) {
  let t = await i.default.post({
      url: o.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
      oldFormErrors: !0
    }),
    n = s.default.createFromServer(t.body, u.default.getSubscriptionById(t.body.subscription_id));
  return l.default.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: n
  }), n
}
async function f(e) {
  let t = await i.default.post({
      url: o.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
      oldFormErrors: !0
    }),
    n = s.default.createFromServer(t.body, u.default.getSubscriptionById(t.body.subscription_id));
  return l.default.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: n
  }), n
}