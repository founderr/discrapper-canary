"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(288219);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = {};
class u extends(i = r.ZP.DeviceSettingsStore) {
  getUserAgnosticState() {
    return {
      toggleStates: l
    }
  }
  initialize(e) {
    for (var t in o.Z) {
      var n, i;
      l[t] = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i
    }
  }
  get(e) {
    var t;
    return null !== (t = l[e]) && void 0 !== t && t
  }
  set(e, t) {
    return l[e] = t, t
  }
}
a(u, "displayName", "LabFeatureStore"), a(u, "persistKey", "LabFeatureStore"), t.Z = new u(s.Z, {
  LAB_FEATURE_TOGGLE: function(e) {
    let {
      labFeature: t,
      enabled: n
    } = e;
    l[t] = n
  }
})