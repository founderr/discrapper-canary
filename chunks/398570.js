"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
}), r("222007");
var a = r("748820"),
  n = r("391679"),
  i = r("446674"),
  o = r("913144"),
  l = r("271938"),
  s = r("368694");
let c = 0,
  d = [],
  u = [],
  h = !1;
class p extends i.default.Store {
  initialize() {
    this.waitFor(s.default)
  }
  get loggedEvents() {
    return d
  }
  get loggedTriggers() {
    return u
  }
  get trackTriggers() {
    return h
  }
}
p.displayName = "AnalyticsLogStore";
var m = new p(o.default, {
  TRACK: function(e) {
    let {
      event: t,
      properties: r,
      fingerprint: a
    } = e;
    if (s.default.isDeveloper) {
      var i;
      (d = [...d, {
        key: (c++).toString(),
        event: t,
        properties: r,
        fingerprint: null != (i = a) ? (0, n.extractId)(i) : l.default.getId(),
        timestamp: new Date
      }]).length > 500 && d.shift()
    }
  },
  TRACK_TRIGGER: function(e) {
    let {
      experimentId: t,
      descriptor: r,
      exposureType: n,
      excluded: i,
      location: o,
      previouslyTracked: l
    } = e;
    if (!!s.default.isDeveloper) h && (u = [...u, {
      key: (0, a.v4)(),
      experimentId: t,
      descriptor: r,
      exposureType: n,
      excluded: i,
      location: o,
      previouslyTracked: l,
      timestamp: new Date
    }]).length > 500 && u.shift()
  },
  SET_TRACK_TRIGGERS: function(e) {
    let {
      enabled: t
    } = e;
    h = t
  },
  ANALYTICS_LOG_CLEAR: function() {
    d = [], u = []
  }
})