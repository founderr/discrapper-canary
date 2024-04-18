"use strict";
t.r(r), t("47120");
var a, i, l, n, o = t("153832"),
  c = t("756647"),
  s = t("442837"),
  d = t("570140"),
  u = t("314897"),
  h = t("906467");
let m = 0,
  g = [],
  p = [],
  f = !1;
class b extends(a = s.default.Store) {
  initialize() {
    this.waitFor(h.default)
  }
  get loggedEvents() {
    return g
  }
  get loggedTriggers() {
    return p
  }
  get trackTriggers() {
    return f
  }
}
n = "AnalyticsLogStore", (l = "displayName") in(i = b) ? Object.defineProperty(i, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = n, r.default = new b(d.default, {
  TRACK: function(e) {
    let {
      event: r,
      properties: t,
      fingerprint: a
    } = e;
    if (h.default.isDeveloper) {
      var i;
      (g = [...g, {
        key: (m++).toString(),
        event: r,
        properties: t,
        fingerprint: null != (i = a) ? (0, c.extractId)(i) : u.default.getId(),
        timestamp: new Date
      }]).length > 500 && g.shift()
    }
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: r,
      descriptor: t,
      exposureType: a,
      excluded: i,
      location: l,
      previouslyTracked: n
    } = e;
    if (!!h.default.isDeveloper) f && (p = [...p, {
      key: (0, o.v4)(),
      experimentId: r,
      descriptor: t,
      exposureType: a,
      excluded: i,
      location: l,
      previouslyTracked: n,
      timestamp: new Date
    }]).length > 500 && p.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: r
    } = e;
    f = r
  },
  ANALYTICS_LOG_CLEAR: function() {
    g = [], p = []
  }
})