"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("446674"),
  i = n("95410"),
  s = n("913144"),
  l = n("49111");
let u = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  a = u,
  o = "LAST_VIEWED_PATH";
class c extends r.default.PersistedStore {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
    a = null != e ? e : u
  }
  get defaultRoute() {
    return l.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = a.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
  }
  get fallbackRoute() {
    return l.Routes.ME
  }
  getState() {
    return a
  }
}
c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
  let e = i.default.get(o, null);
  return i.default.remove(o), {
    lastViewedPath: e
  }
}];
var d = new c(s.default, {
  SAVE_LAST_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return a.lastViewedPath = t, !0
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return a.lastViewedNonVoicePath = t, !0
  }
})