"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("446674"),
  l = n("95410"),
  i = n("913144"),
  r = n("49111");
let s = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  u = s,
  o = "LAST_VIEWED_PATH";
class d extends a.default.PersistedStore {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
    u = null != e ? e : s
  }
  get defaultRoute() {
    return r.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : r.Routes.ME
  }
  get fallbackRoute() {
    return r.Routes.ME
  }
  getState() {
    return u
  }
}
d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
  let e = l.default.get(o, null);
  return l.default.remove(o), {
    lastViewedPath: e
  }
}];
var c = new d(i.default, {
  SAVE_LAST_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return u.lastViewedPath = t, !0
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return u.lastViewedNonVoicePath = t, !0
  }
})