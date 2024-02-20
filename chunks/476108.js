"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("446674"),
  s = n("95410"),
  l = n("913144"),
  i = n("49111");
let r = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  u = r,
  o = "LAST_VIEWED_PATH";
class d extends a.default.PersistedStore {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
    u = null != e ? e : r
  }
  get defaultRoute() {
    return i.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : i.Routes.ME
  }
  get fallbackRoute() {
    return i.Routes.ME
  }
  getState() {
    return u
  }
}
d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
  let e = s.default.get(o, null);
  return s.default.remove(o), {
    lastViewedPath: e
  }
}];
var c = new d(l.default, {
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