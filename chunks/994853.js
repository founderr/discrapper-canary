"use strict";
r.r(t), r.d(t, {
  ResizeObserverController: function() {
    return l
  }
}), r("222007"), r("424973");
var n = r("917712"),
  u = r("654269"),
  o = r("170489"),
  a = r("243546"),
  i = new WeakMap,
  s = function(e, t) {
    for (var r = 0; r < e.length; r += 1)
      if (e[r].target === t) return r;
    return -1
  },
  l = function() {
    function e() {}
    return e.connect = function(e, t) {
      var r = new o.ResizeObserverDetail(e, t);
      i.set(e, r)
    }, e.observe = function(e, t, r) {
      var o = i.get(e),
        l = 0 === o.observationTargets.length;
      0 > s(o.observationTargets, t) && (l && a.resizeObservers.push(o), o.observationTargets.push(new u.ResizeObservation(t, r && r.box)), (0, n.updateCount)(1), n.scheduler.schedule())
    }, e.unobserve = function(e, t) {
      var r = i.get(e),
        u = s(r.observationTargets, t),
        o = 1 === r.observationTargets.length;
      u >= 0 && (o && a.resizeObservers.splice(a.resizeObservers.indexOf(r), 1), r.observationTargets.splice(u, 1), (0, n.updateCount)(-1))
    }, e.disconnect = function(e) {
      var t = this,
        r = i.get(e);
      r.observationTargets.slice().forEach(function(r) {
        return t.unobserve(e, r.target)
      }), r.activeTargets.splice(0, r.activeTargets.length)
    }, e
  }()