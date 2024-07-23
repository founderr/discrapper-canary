var i, r = n(442837),
  s = n(433517),
  l = n(570140),
  a = n(981631);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let u = {
lastViewedPath: null,
lastViewedNonVoicePath: null
  },
  d = u,
  c = 'LAST_VIEWED_PATH';
class _ extends(i = r.ZP.PersistedStore) {
  initialize() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
d = null != e ? e : u;
  }
  get defaultRoute() {
return a.Z5c.ME;
  }
  get lastNonVoiceRoute() {
var e;
return null !== (e = d.lastViewedNonVoicePath) && void 0 !== e ? e : a.Z5c.ME;
  }
  get fallbackRoute() {
return a.Z5c.ME;
  }
  getState() {
return d;
  }
}
o(_, 'displayName', 'DefaultRouteStore'), o(_, 'persistKey', 'DefaultRouteStore'), o(_, 'migrations', [() => {
  let e = s.K.get(c, null);
  return s.K.remove(c), {
lastViewedPath: e
  };
}]), t.Z = new _(l.Z, {
  SAVE_LAST_ROUTE: function(e) {
let {
  path: t
} = e;
return d.lastViewedPath = t, !0;
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
let {
  path: t
} = e;
return d.lastViewedNonVoicePath = t, !0;
  }
});