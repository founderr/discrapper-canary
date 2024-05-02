"use strict";
n.r(t), n.d(t, {
  extractDisplayName: function() {
    return N
  }
});
var a, s = n("392711"),
  l = n.n(s),
  i = n("442837"),
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
  S = !1,
  m = {},
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

function v(e, t, n) {
  return null == e || e.displayName !== t ? {
    displayName: t,
    type: n
  } : e.type === f.ConnectedDeviceType.INPUT && n === f.ConnectedDeviceType.OUTPUT || e.type === f.ConnectedDeviceType.OUTPUT && n === f.ConnectedDeviceType.INPUT ? {
    displayName: t,
    type: f.ConnectedDeviceType.INPUT_AND_OUTPUT
  } : e
}
class R extends(a = i.default.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(c.default, u.default), C = null != e ? e : _
  }
  getUserAgnosticState() {
    return C
  }
  get initialized() {
    return S
  }
  get lastDeviceConnected() {
    return I
  }
  get inputDevices() {
    return m
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
h(R, "displayName", "ConnectedDeviceStore"), h(R, "persistKey", "ConnectedDeviceStore"), t.default = new R(r.default, {
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n
    } = e, a = {};
    T.justChanged = !1, t.forEach(e => {
      if (a[N(e)] = e.id, e.id === E.DEFAULT_DEVICE_ID) {
        var t;
        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
        n !== T.id && (T.justChanged = !0), T.id = n
      }
    });
    let s = {};
    if (g.justChanged = !1, n.forEach(e => {
        if (s[N(e)] = e.id, e.id === E.DEFAULT_DEVICE_ID) {
          var t;
          let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
          n !== g.id && (g.justChanged = !0), g.id = n
        }
      }), !S) {
      m = a, p = s, S = !0;
      return
    }
    let i = Object.keys(m),
      r = Object.keys(a),
      o = Object.keys(p),
      u = Object.keys(s),
      d = l().difference(i, r),
      c = l().difference(o, u);
    return d.length > 0 || c.length > 0 ? I = {} : (l().difference(r, i).forEach(e => {
      I[e] = v(I[e], e, f.ConnectedDeviceType.INPUT)
    }), l().difference(u, o).forEach(e => {
      I[e] = v(I[e], e, f.ConnectedDeviceType.OUTPUT)
    })), !(l().isEqual(i, r) && l().isEqual(o, u)) && (m = a, p = s, !0)
  },
  CONNECTED_DEVICE_SET: function(e) {
    let {
      displayName: t,
      connectedDevicePreference: n,
      location: a
    } = e;
    ! function(e, t, n) {
      if (t === f.ConnectedDevicePreference.INPUT || t === f.ConnectedDevicePreference.INPUT_AND_OUTPUT) {
        let t = m[e];
        null != t && r.default.wait(() => o.default.setInputDevice(t, n))
      }
      if (t === f.ConnectedDevicePreference.OUTPUT || t === f.ConnectedDevicePreference.INPUT_AND_OUTPUT) {
        let t = p[e];
        r.default.wait(() => o.default.setOutputDevice(t, n))
      }
    }(t, n, a), delete I[t]
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