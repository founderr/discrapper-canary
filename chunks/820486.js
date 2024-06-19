n.d(t, {
  X: function() {
    return f
  }
});
var i, s = n(392711),
  l = n.n(s),
  a = n(442837),
  r = n(570140),
  o = n(846027),
  c = n(581883),
  u = n(358085),
  d = n(131951),
  E = n(981631),
  h = n(65154);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {},
  m = I,
  g = !1,
  p = {},
  T = {},
  N = {},
  S = {
    id: null,
    justChanged: !1
  },
  C = {
    id: null,
    justChanged: !1
  },
  A = /\(([^)]+)\)/;

function f(e) {
  if ((0, u.getPlatform)() === u.PlatformTypes.WINDOWS) {
    let t = e.name.match(A);
    if (null != t) return t[1]
  }
  return e.name
}

function Z(e, t, n) {
  return null == e || e.displayName !== t ? {
    displayName: t,
    type: n
  } : e.type === E.QyF.INPUT && n === E.QyF.OUTPUT || e.type === E.QyF.OUTPUT && n === E.QyF.INPUT ? {
    displayName: t,
    type: E.QyF.INPUT_AND_OUTPUT
  } : e
}
class v extends(i = a.ZP.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(d.Z, c.Z), m = null != e ? e : I
  }
  getUserAgnosticState() {
    return m
  }
  get initialized() {
    return g
  }
  get lastDeviceConnected() {
    return N
  }
  get inputDevices() {
    return p
  }
  get lastInputSystemDevice() {
    return S
  }
  get outputDevices() {
    return T
  }
  get lastOutputSystemDevice() {
    return C
  }
}
_(v, "displayName", "ConnectedDeviceStore"), _(v, "persistKey", "ConnectedDeviceStore"), t.Z = new v(r.Z, {
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n
    } = e, i = {};
    S.justChanged = !1, t.forEach(e => {
      if (i[f(e)] = e.id, e.id === h.w5) {
        var t;
        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
        n !== S.id && (S.justChanged = !0), S.id = n
      }
    });
    let s = {};
    if (C.justChanged = !1, n.forEach(e => {
        if (s[f(e)] = e.id, e.id === h.w5) {
          var t;
          let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
          n !== C.id && (C.justChanged = !0), C.id = n
        }
      }), !g) {
      p = i, T = s, g = !0;
      return
    }
    let a = Object.keys(p),
      r = Object.keys(i),
      o = Object.keys(T),
      c = Object.keys(s),
      u = l().difference(a, r),
      d = l().difference(o, c);
    return u.length > 0 || d.length > 0 ? N = {} : (l().difference(r, a).forEach(e => {
      N[e] = Z(N[e], e, E.QyF.INPUT)
    }), l().difference(c, o).forEach(e => {
      N[e] = Z(N[e], e, E.QyF.OUTPUT)
    })), !(l().isEqual(a, r) && l().isEqual(o, c)) && (p = i, T = s, !0)
  },
  CONNECTED_DEVICE_SET: function(e) {
    let {
      displayName: t,
      connectedDevicePreference: n,
      location: i
    } = e;
    ! function(e, t, n) {
      if (t === E.aVf.INPUT || t === E.aVf.INPUT_AND_OUTPUT) {
        let t = p[e];
        null != t && r.Z.wait(() => o.Z.setInputDevice(t, n))
      }
      if (t === E.aVf.OUTPUT || t === E.aVf.INPUT_AND_OUTPUT) {
        let t = T[e];
        r.Z.wait(() => o.Z.setOutputDevice(t, n))
      }
    }(t, n, i), delete N[t]
  },
  CONNECTED_DEVICE_IGNORE: function(e) {
    let {
      displayName: t
    } = e;
    delete N[t]
  },
  CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
    N = {}, m = {
      neverShowModal: !0
    }
  }
})