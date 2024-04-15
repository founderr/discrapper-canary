"use strict";
r.r(t), r("47120");
var a, n, i, o, l = r("153832"),
  s = r("756647"),
  c = r("442837"),
  d = r("570140"),
  u = r("314897"),
  h = r("906467");
let p = 0,
  m = [],
  g = [],
  f = !1;
class y extends(a = c.default.Store) {
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
o = "AnalyticsLogStore", (i = "displayName") in(n = y) ? Object.defineProperty(n, i, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = o, t.default = new y(d.default, {
  TRACK: function(e) {
    let {
      event: t,
      properties: r,
      fingerprint: a
    } = e;
    if (h.default.isDeveloper) {
      var n;
      (m = [...m, {
        key: (p++).toString(),
        event: t,
        properties: r,
        fingerprint: null != (n = a) ? (0, s.extractId)(n) : u.default.getId(),
        timestamp: new Date
      }]).length > 500 && m.shift()
    }
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: r,
      exposureType: a,
      excluded: n,
      location: i,
      previouslyTracked: o
    } = e;
    if (!!h.default.isDeveloper) f && (g = [...g, {
      key: (0, l.v4)(),
      experimentId: t,
      descriptor: r,
      exposureType: a,
      excluded: n,
      location: i,
      previouslyTracked: o,
      timestamp: new Date
    }]).length > 500 && g.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    f = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    m = [], g = []
  }
})