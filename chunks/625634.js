"use strict";
_.r(t), _.d(t, {
  default: function() {
    return l
  }
}), _("222007");
var i = _("446674"),
  s = _("913144"),
  I = _("521012");
let o = !1,
  u = {};

function r(e) {
  let {
    guildBoostSlot: t
  } = e;
  u = {
    ...u,
    [t.id]: t
  }
}

function T() {
  let e = {};
  for (let t of Object.values(u)) e[t.id] = t, t.subscription = I.default.getSubscriptionById(t.subscriptionId);
  u = e
}
class d extends i.default.Store {
  initialize() {
    this.syncWith([I.default], T)
  }
  get hasFetched() {
    return o
  }
  get boostSlots() {
    return u
  }
  getGuildBoostSlot(e) {
    return u[e]
  }
}
d.displayName = "GuildBoostSlotStore";
var l = new d(s.default, {
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
    let {
      guildBoostSlots: t
    } = e;
    u = {}, t.forEach(e => {
      u[e.id] = e
    }), o = !0
  },
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: r,
  GUILD_BOOST_SLOT_CREATE: r,
  GUILD_BOOST_SLOT_UPDATE: r,
  LOGOUT: function() {
    u = {}, o = !1
  }
})