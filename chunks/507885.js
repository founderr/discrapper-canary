n(47120);
var i, s = n(442837),
  l = n(570140),
  a = n(701488);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = new Set,
  c = new Set([a.ES.DISCORD_TURNS_8]);
class u extends(i = s.ZP.PersistedStore) {
  initialize(e) {
    null != e && (Array.isArray(e.acknowledged) && (o = new Set(e.acknowledged)), Array.isArray(e.opened) && (c = new Set(e.opened)))
  }
  getState() {
    return {
      acknowledged: o,
      opened: c
    }
  }
  getOpened() {
    return c
  }
  getAcknowledged() {
    return o
  }
  isOpened(e) {
    return c.has(e)
  }
  isAcknowledged(e) {
    return o.has(e)
  }
}
r(u, "displayName", "ActivitiesWhatsNewStore"), r(u, "persistKey", "ActivitiesWhatsNewStore"), t.Z = new u(l.Z, {
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
    c.add(t)
  }
})