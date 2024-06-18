"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(78839);
let _ = !1,
  c = {};

function d(e) {
  let {
    guildBoostSlot: t
  } = e;
  c = {
    ...c,
    [t.id]: t
  }
}

function E() {
  let e = {};
  for (let t of Object.values(c)) e[t.id] = t, t.subscription = u.ZP.getSubscriptionById(t.subscriptionId);
  c = e
}
class I extends(i = a.ZP.Store) {
  initialize() {
    this.syncWith([u.ZP], E)
  }
  get hasFetched() {
    return _
  }
  get boostSlots() {
    return c
  }
  getGuildBoostSlot(e) {
    return c[e]
  }
}
o = "GuildBoostSlotStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new I(l.Z, {
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
    let {
      guildBoostSlots: t
    } = e;
    c = {}, t.forEach(e => {
      c[e.id] = e
    }), _ = !0
  },
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: d,
  GUILD_BOOST_SLOT_CREATE: d,
  GUILD_BOOST_SLOT_UPDATE: d,
  LOGOUT: function() {
    c = {}, _ = !1
  }
})