"use strict";
r.r(t), r("47120");
var a, i, n, l, o = r("153832"),
  c = r("756647"),
  s = r("442837"),
  d = r("570140"),
  u = r("314897"),
  h = r("906467");
let p = 0,
  g = [],
  m = [],
  f = !1;
class y extends(a = s.default.Store) {
  initialize() {
    this.waitFor(h.default)
  }
  get loggedEvents() {
    return g
  }
  get loggedTriggers() {
    return m
  }
  get trackTriggers() {
    return f
  }
}
l = "AnalyticsLogStore", (n = "displayName") in(i = y) ? Object.defineProperty(i, n, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[n] = l, t.default = new y(d.default, {
  TRACK: function(e) {
    let {
      event: t,
      properties: r,
      fingerprint: a
    } = e;
    if (h.default.isDeveloper) {
      var i;
      (g = [...g, {
        key: (p++).toString(),
        event: t,
        properties: r,
        fingerprint: null != (i = a) ? (0, c.extractId)(i) : u.default.getId(),
        timestamp: new Date
      }]).length > 500 && g.shift()
    }
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: r,
      exposureType: a,
      excluded: i,
      location: n,
      previouslyTracked: l
    } = e;
    if (!!h.default.isDeveloper) f && (m = [...m, {
      key: (0, o.v4)(),
      experimentId: t,
      descriptor: r,
      exposureType: a,
      excluded: i,
      location: n,
      previouslyTracked: l,
      timestamp: new Date
    }]).length > 500 && m.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    f = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    g = [], m = []
  }
})