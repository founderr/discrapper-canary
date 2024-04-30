"use strict";
a.r(t), a.d(t, {
  extractDisplayName: function() {
    return N
  }
});
var n, s = a("392711"),
  l = a.n(s),
  i = a("442837"),
  r = a("570140"),
  o = a("846027"),
  u = a("581883"),
  d = a("358085"),
  c = a("131951"),
  f = a("981631"),
  E = a("65154");

function h(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let _ = {},
  C = _,
  m = !1,
  S = {},
  p = {},
  I = {},
  T = {
    id: null,
    justChanged: !1
  },
  g = {
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

function v(e, t, a) {
  return null == e || e.displayName !== t ? {
    displayName: t,
    type: a
  } : e.type === f.ConnectedDeviceType.INPUT && a === f.ConnectedDeviceType.OUTPUT || e.type === f.ConnectedDeviceType.OUTPUT && a === f.ConnectedDeviceType.INPUT ? {
    displayName: t,
    type: f.ConnectedDeviceType.INPUT_AND_OUTPUT
  } : e
}
class L extends(n = i.default.DeviceSettingsStore) {
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
    return I
  }
  get inputDevices() {
    return S
  }
  get lastInputSystemDevice() {
    return T
  }
  get outputDevices() {
    return p
  }
  get lastOutputSystemDevice() {
    return g
  }
}
h(L, "displayName", "ConnectedDeviceStore"), h(L, "persistKey", "ConnectedDeviceStore"), t.default = new L(r.default, {
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: a
    } = e, n = {};
    T.justChanged = !1, t.forEach(e => {
      if (n[N(e)] = e.id, e.id === E.DEFAULT_DEVICE_ID) {
        var t;
        let a = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
        a !== T.id && (T.justChanged = !0), T.id = a
      }
    });
    let s = {};
    if (g.justChanged = !1, a.forEach(e => {
        if (s[N(e)] = e.id, e.id === E.DEFAULT_DEVICE_ID) {
          var t;
          let a = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
          a !== g.id && (g.justChanged = !0), g.id = a
        }
      }), !m) {
      S = n, p = s, m = !0;
      return
    }
    let i = Object.keys(S),
      r = Object.keys(n),
      o = Object.keys(p),
      u = Object.keys(s),
      d = l().difference(i, r),
      c = l().difference(o, u);
    return d.length > 0 || c.length > 0 ? I = {} : (l().difference(r, i).forEach(e => {
      I[e] = v(I[e], e, f.ConnectedDeviceType.INPUT)
    }), l().difference(u, o).forEach(e => {
      I[e] = v(I[e], e, f.ConnectedDeviceType.OUTPUT)
    })), !(l().isEqual(i, r) && l().isEqual(o, u)) && (S = n, p = s, !0)
  },
  CONNECTED_DEVICE_SET: function(e) {
    let {
      displayName: t,
      connectedDevicePreference: a,
      location: n
    } = e;
    ! function(e, t, a) {
      if (t === f.ConnectedDevicePreference.INPUT || t === f.ConnectedDevicePreference.INPUT_AND_OUTPUT) {
        let t = S[e];
        null != t && r.default.wait(() => o.default.setInputDevice(t, a))
      }
      if (t === f.ConnectedDevicePreference.OUTPUT || t === f.ConnectedDevicePreference.INPUT_AND_OUTPUT) {
        let t = p[e];
        r.default.wait(() => o.default.setOutputDevice(t, a))
      }
    }(t, a, n), delete I[t]
  },
  CONNECTED_DEVICE_IGNORE: function(e) {
    let {
      displayName: t
    } = e;
    delete I[t]
  },
  CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
    I = {}, C = {
      neverShowModal: !0
    }
  }
})