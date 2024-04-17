"use strict";
n.r(t);
var a, r = n("442837"),
  s = n("433517"),
  l = n("570140"),
  i = n("981631");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  d = o,
  c = "LAST_VIEWED_PATH";
class f extends(a = r.default.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
    d = null != e ? e : o
  }
  get defaultRoute() {
    return i.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = d.lastViewedNonVoicePath) && void 0 !== e ? e : i.Routes.ME
  }
  get fallbackRoute() {
    return i.Routes.ME
  }
  getState() {
    return d
  }
}
u(f, "displayName", "DefaultRouteStore"), u(f, "persistKey", "DefaultRouteStore"), u(f, "migrations", [() => {
  let e = s.Storage.get(c, null);
  return s.Storage.remove(c), {
    lastViewedPath: e
  }
}]), t.default = new f(l.default, {
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