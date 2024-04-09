"use strict";
n.r(t), n.d(t, {
  extractDisplayName: function() {
    return A
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

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = {},
  C = h,
  m = !1,
  S = {},
  I = {},
  T = {},
  p = {
    id: null,
    justChanged: !1
  },
  g = {
    id: null,
    justChanged: !1
  },
  N = /\(([^)]+)\)/;

function A(e) {
  if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
    let t = e.name.match(N);
    if (null != t) return t[1]
  }
  return e.name
}

function R(e, t, n) {
  return null == e || e.displayName !== t ? {
    displayName: t,
    type: n
  } : e.type === f.ConnectedDeviceType.INPUT && n === f.ConnectedDeviceType.OUTPUT || e.type === f.ConnectedDeviceType.OUTPUT && n === f.ConnectedDeviceType.INPUT ? {
    displayName: t,
    type: f.ConnectedDeviceType.INPUT_AND_OUTPUT
  } : e
}
class O extends(a = i.default.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(c.default, u.default), C = null != e ? e : h
  }
  getUserAgnosticState() {
    return C
  }
  get initialized() {
    return m
  }
  get lastDeviceConnected() {
    return T
  }
  get inputDevices() {
    return S
  }
  get lastInputSystemDevice() {
    return p
  }
  get outputDevices() {
    return I
  }
  get lastOutputSystemDevice() {
    return g
  }
}
_(O, "displayName", "ConnectedDeviceStore"), _(O, "persistKey", "ConnectedDeviceStore"), t.default = new O(r.default, {
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n
    } = e, a = {};
    p.justChanged = !1, t.forEach(e => {
      if (a[A(e)] = e.id, e.id === E.DEFAULT_DEVICE_ID) {
        var t;
        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
        n !== p.id && (p.justChanged = !0), p.id = n
      }
    });
    let s = {};
    if (g.justChanged = !1, n.forEach(e => {
        if (s[A(e)] = e.id, e.id === E.DEFAULT_DEVICE_ID) {
          var t;
          let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
          n !== g.id && (g.justChanged = !0), g.id = n
        }
      }), !m) {
      S = a, I = s, m = !0;
      return
    }
    let i = Object.keys(S),
      r = Object.keys(a),
      o = Object.keys(I),
      u = Object.keys(s),
      d = l().difference(i, r),
      c = l().difference(o, u);
    return d.length > 0 || c.length > 0 ? T = {} : (l().difference(r, i).forEach(e => {
      T[e] = R(T[e], e, f.ConnectedDeviceType.INPUT)
    }), l().difference(u, o).forEach(e => {
      T[e] = R(T[e], e, f.ConnectedDeviceType.OUTPUT)
    })), !(l().isEqual(i, r) && l().isEqual(o, u)) && (S = a, I = s, !0)
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
        let t = I[e];
        r.default.wait(() => o.default.setOutputDevice(t, n))
      }
    }(t, n, a), delete T[t]
  },
  CONNECTED_DEVICE_IGNORE: function(e) {
    let {
      displayName: t
    } = e;
    delete T[t]
  },
  CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
    T = {}, C = {
      neverShowModal: !0
    }
  }
})