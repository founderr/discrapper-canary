"use strict";
a.r(t), a("47120");
var n, s = a("442837"),
  l = a("570140"),
  i = a("701488");

function r(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let o = new Set,
  u = new Set([i.WhatsNewSection.DISCORD_TURNS_8]);
class d extends(n = s.default.PersistedStore) {
  initialize(e) {
    null != e && (Array.isArray(e.acknowledged) && (o = new Set(e.acknowledged)), Array.isArray(e.opened) && (u = new Set(e.opened)))
  }
  getState() {
    return {
      acknowledged: o,
      opened: u
    }
  }
  getOpened() {
    return u
  }
  getAcknowledged() {
    return o
  }
  isOpened(e) {
    return u.has(e)
  }
  isAcknowledged(e) {
    return o.has(e)
  }
}
r(d, "displayName", "ActivitiesWhatsNewStore"), r(d, "persistKey", "ActivitiesWhatsNewStore"), t.default = new d(l.default, {
  ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION: function(e) {
    let {
      section: t
    } = e;
    o.add(t)
  },
  ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION: function(e) {
    let {
      section: t
    } = e;
    u.add(t)
  }
})