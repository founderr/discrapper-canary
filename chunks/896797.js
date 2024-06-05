"use strict";
n.r(t);
var i, l = n("442837"),
  a = n("433517"),
  r = n("570140"),
  u = n("981631");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  d = s,
  c = "LAST_VIEWED_PATH";
class f extends(i = l.default.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
    d = null != e ? e : s
  }
  get defaultRoute() {
    return u.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = d.lastViewedNonVoicePath) && void 0 !== e ? e : u.Routes.ME
  }
  get fallbackRoute() {
    return u.Routes.ME
  }
  getState() {
    return d
  }
}
o(f, "displayName", "DefaultRouteStore"), o(f, "persistKey", "DefaultRouteStore"), o(f, "migrations", [() => {
  let e = a.Storage.get(c, null);
  return a.Storage.remove(c), {
    lastViewedPath: e
  }
}]), t.default = new f(r.default, {
  SAVE_LAST_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return d.lastViewedPath = t, !0
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return d.lastViewedNonVoicePath = t, !0
  }
})