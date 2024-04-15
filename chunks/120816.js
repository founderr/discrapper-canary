"use strict";
t.r(r), t("47120");
var a, n, i, l, o = t("153832"),
  s = t("756647"),
  c = t("442837"),
  d = t("570140"),
  u = t("314897"),
  h = t("906467");
let p = 0,
  m = [],
  g = [],
  f = !1;
class b extends(a = c.default.Store) {
  initialize() {
    this.waitFor(h.default)
  }
  get loggedEvents() {
    return m
  }
  get loggedTriggers() {
    return g
  }
  get trackTriggers() {
    return f
  }
}
l = "AnalyticsLogStore", (i = "displayName") in(n = b) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, r.default = new b(d.default, {
  TRACK: function(e) {
    let {
      event: r,
      properties: t,
      fingerprint: a
    } = e;
    if (h.default.isDeveloper) {
      var n;
      (m = [...m, {
        key: (p++).toString(),
        event: r,
        properties: t,
        fingerprint: null != (n = a) ? (0, s.extractId)(n) : u.default.getId(),
        timestamp: new Date
      }]).length > 500 && m.shift()
    }
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: r,
      descriptor: t,
      exposureType: a,
      excluded: n,
      location: i,
      previouslyTracked: l
    } = e;
    if (!!h.default.isDeveloper) f && (g = [...g, {
      key: (0, o.v4)(),
      experimentId: r,
      descriptor: t,
      exposureType: a,
      excluded: n,
      location: i,
      previouslyTracked: l,
      timestamp: new Date
    }]).length > 500 && g.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: r
    } = e;
    f = r
  },
  ANALYTICS_LOG_CLEAR: function() {
    m = [], g = []
  }
})