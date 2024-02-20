"use strict";
r.r(t), r.d(t, {
  ResizeObserverController: function() {
    return c
  }
}), r("222007"), r("424973");
var n = r("293293"),
  i = r("147973"),
  o = r("278703"),
  s = r("514825"),
  a = new WeakMap,
  u = function(e, t) {
    for (var r = 0; r < e.length; r += 1)
      if (e[r].target === t) return r;
    return -1
  },
  c = function() {
    function e() {}
    return e.connect = function(e, t) {
      var r = new o.ResizeObserverDetail(e, t);
      a.set(e, r)
    }, e.observe = function(e, t, r) {
      var o = a.get(e),
        c = 0 === o.observationTargets.length;
      0 > u(o.observationTargets, t) && (c && s.resizeObservers.push(o), o.observationTargets.push(new i.ResizeObservation(t, r && r.box)), (0, n.updateCount)(1), n.scheduler.schedule())
    }, e.unobserve = function(e, t) {
      var r = a.get(e),
        i = u(r.observationTargets, t),
        o = 1 === r.observationTargets.length;
      i >= 0 && (o && s.resizeObservers.splice(s.resizeObservers.indexOf(r), 1), r.observationTargets.splice(i, 1), (0, n.updateCount)(-1))
    }, e.disconnect = function(e) {
      var t = this,
        r = a.get(e);
      r.observationTargets.slice().forEach(function(r) {
        return t.unobserve(e, r.target)
      }), r.activeTargets.splice(0, r.activeTargets.length)
    }, e
  }()