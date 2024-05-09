"use strict";
n.r(t), n.d(t, {
  extractDisplayName: function() {
    return N
  }
});
var a, s = n("392711"),
  i = n.n(s),
  l = n("442837"),
  r = n("570140"),
  o = n("846027"),
  u = n("581883"),
  d = n("358085"),
  c = n("131951"),
  f = n("981631"),
  E = n("65154");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {},
  C = _,
  m = !1,
  S = {},
  p = {},
  g = {},
  I = {
    id: null,
    justChanged: !1
  },
  T = {
    id: null,
    justChanged: !1
  },
  A = /\(([^)]+)\)/;

function N(e) {
  if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
    let t = e.name.match(A);
    if (null != t) return t[1]
  }
  return e.name
}

function v(e, t, n) {
  return null == e || e.displayName !== t ? {
    displayName: t,
    type: n
  } : e.type === f.ConnectedDeviceType.INPUT && n === f.ConnectedDeviceType.OUTPUT || e.type === f.ConnectedDeviceType.OUTPUT && n === f.ConnectedDeviceType.INPUT ? {
    displayName: t,
    type: f.ConnectedDeviceType.INPUT_AND_OUTPUT
  } : e
}
class R extends(a = l.default.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(c.default, u.default), C = null != e ? e : _
  }
  getUserAgnosticState() {
    return C
  }
  get initialized() {
    return m
  }
  get lastDeviceConnected() {
    return g
  }
  get inputDevices() {
    return S
  }
  get lastInputSystemDevice() {
    return I
  }
  get outputDevices() {
    return p
  }
  get lastOutputSystemDevice() {
    return T
  }
}
h(R, "displayName", "ConnectedDeviceStore"), h(R, "persistKey", "ConnectedDeviceStore"), t.default = new R(r.default, {
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n
    } = e, a = {};
    I.justChanged = !1, t.forEach(e => {
      if (a[N(e)] = e.id, e.id === E.DEFAULT_DEVICE_ID) {
        var t;
        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
        n !== I.id && (I.justChanged = !0), I.id = n
      }
    });
    let s = {};
    if (T.justChanged = !1, n.forEach(e => {
        if (s[N(e)] = e.id, e.id === E.DEFAULT_DEVICE_ID) {
          var t;
          let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
          n !== T.id && (T.justChanged = !0), T.id = n
        }
      }), !m) {
      S = a, p = s, m = !0;
      return
    }
    let l = Object.keys(S),
      r = Object.keys(a),
      o = Object.keys(p),
      u = Object.keys(s),
      d = i().difference(l, r),
      c = i().difference(o, u);
    return d.length > 0 || c.length > 0 ? g = {} : (i().difference(r, l).forEach(e => {
      g[e] = v(g[e], e, f.ConnectedDeviceType.INPUT)
    }), i().difference(u, o).forEach(e => {
      g[e] = v(g[e], e, f.ConnectedDeviceType.OUTPUT)
    })), !(i().isEqual(l, r) && i().isEqual(o, u)) && (S = a, p = s, !0)
  },
  CONNECTED_DEVICE_SET: function(e) {
    let {
      displayName: t,
      connectedDevicePreference: n,
      location: a
    } = e;
    ! function(e, t, n) {
      if (t === f.ConnectedDevicePreference.INPUT || t === f.ConnectedDevicePreference.INPUT_AND_OUTPUT) {
        let t = S[e];
        null != t && r.default.wait(() => o.default.setInputDevice(t, n))
      }
      if (t === f.ConnectedDevicePreference.OUTPUT || t === f.ConnectedDevicePreference.INPUT_AND_OUTPUT) {
        let t = p[e];
        r.default.wait(() => o.default.setOutputDevice(t, n))
      }
    }(t, n, a), delete g[t]
  },
  CONNECTED_DEVICE_IGNORE: function(e) {
    let {
      displayName: t
    } = e;
    delete g[t]
  },
  CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
    g = {}, C = {
      neverShowModal: !0
    }
  }
})