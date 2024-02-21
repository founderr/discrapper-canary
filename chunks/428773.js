"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("917351"),
  i = n.n(s),
  l = n("77078"),
  r = n("533222"),
  o = n("113605"),
  u = n("42887"),
  d = n("353927");
let c = new Set(["DisplayPort"]),
  f = !1;

function E() {
  let e;
  if (f) return;
  let t = u.default.getInputDeviceId(),
    s = u.default.getOutputDeviceId();
  if (o.default.getState().neverShowModal || i.isEmpty(o.default.lastDeviceConnected)) return;
  let E = (0, o.extractDisplayName)(u.default.getInputDevices()[t]),
    h = (0, o.extractDisplayName)(u.default.getOutputDevices()[s]),
    _ = i.some(o.default.lastDeviceConnected, e => c.has(e.displayName) || e.displayName === E || e.displayName === h);
  if (_) return;
  let C = i.some(o.default.lastDeviceConnected, e => r.default.isCertified(o.default.inputDevices[e.displayName]) || r.default.isCertified(o.default.outputDevices[e.displayName])),
    I = t === d.DEFAULT_DEVICE_ID && o.default.lastInputSystemDevice.justChanged || s === d.DEFAULT_DEVICE_ID && o.default.lastOutputSystemDevice.justChanged;
  if (I && !C) return;
  let S = i.first(Object.keys(o.default.lastDeviceConnected)),
    m = null != S && "" !== S ? o.default.lastDeviceConnected[S] : null;
  null != m && (o.default.initialized && null != S && (r.default.isCertified(o.default.inputDevices[S]) ? e = r.default.getCertifiedDevice(o.default.inputDevices[S]) : r.default.isCertified(o.default.outputDevices[S]) && (e = r.default.getCertifiedDevice(o.default.outputDevices[S]))), f = !0, (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("134064").then(n.bind(n, "134064"));
    return n => {
      let {
        transitionState: s,
        onClose: i
      } = n;
      return (0, a.jsx)(t, {
        device: m,
        certifiedDeviceMetadata: e,
        transitionState: s,
        onClose: () => (f = !1, i())
      })
    }
  }))
}
var h = {
  init() {
    o.default.addChangeListener(E)
  }
}