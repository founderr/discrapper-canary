"use strict";
_.r(t), _.d(t, {
  default: function() {
    return l
  }
}), _("222007");
var i = _("446674"),
  s = _("913144"),
  I = _("521012");
let T = !1,
  o = {};

function E(e) {
  let {
    guildBoostSlot: t
  } = e;
  o = {
    ...o,
    [t.id]: t
  }
}

function u() {
  let e = {};
  for (let t of Object.values(o)) e[t.id] = t, t.subscription = I.default.getSubscriptionById(t.subscriptionId);
  o = e
}
class r extends i.default.Store {
  initialize() {
    this.syncWith([I.default], u)
  }
  get hasFetched() {
    return T
  }
  get boostSlots() {
    return o
  }
  getGuildBoostSlot(e) {
    return o[e]
  }
}
r.displayName = "GuildBoostSlotStore";
var l = new r(s.default, {
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
    let {
      guildBoostSlots: t
    } = e;
    o = {}, t.forEach(e => {
      o[e.id] = e
    }), T = !0
  },
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: E,
  GUILD_BOOST_SLOT_CREATE: E,
  GUILD_BOOST_SLOT_UPDATE: E,
  LOGOUT: function() {
    o = {}, T = !1
  }
})