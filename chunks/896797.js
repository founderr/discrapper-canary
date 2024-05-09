"use strict";
n.r(t);
var s, i = n("442837"),
  l = n("433517"),
  r = n("570140"),
  a = n("981631");

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
  c = o,
  d = "LAST_VIEWED_PATH";
class f extends(s = i.default.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
    c = null != e ? e : o
  }
  get defaultRoute() {
    return a.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = c.lastViewedNonVoicePath) && void 0 !== e ? e : a.Routes.ME
  }
  get fallbackRoute() {
    return a.Routes.ME
  }
  getState() {
    return c
  }
}
u(f, "displayName", "DefaultRouteStore"), u(f, "persistKey", "DefaultRouteStore"), u(f, "migrations", [() => {
  let e = l.Storage.get(d, null);
  return l.Storage.remove(d), {
    lastViewedPath: e
  }
}]), t.default = new f(r.default, {
  SAVE_LAST_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return c.lastViewedPath = t, !0
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return c.lastViewedNonVoicePath = t, !0
  }
})