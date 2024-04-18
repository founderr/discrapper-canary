"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("392711"),
  l = a.n(s),
  i = a("481060"),
  r = a("463395"),
  o = a("820486"),
  u = a("131951"),
  d = a("65154");
let c = new Set(["DisplayPort"]),
  f = !1;

function E() {
  let e;
  if (f) return;
  let t = u.default.getInputDeviceId(),
    s = u.default.getOutputDeviceId();
  if (o.default.getState().neverShowModal || l().isEmpty(o.default.lastDeviceConnected)) return;
  let E = (0, o.extractDisplayName)(u.default.getInputDevices()[t]),
    h = (0, o.extractDisplayName)(u.default.getOutputDevices()[s]);
  if (l().some(o.default.lastDeviceConnected, e => c.has(e.displayName) || e.displayName === E || e.displayName === h)) return;
  let _ = l().some(o.default.lastDeviceConnected, e => r.default.isCertified(o.default.inputDevices[e.displayName]) || r.default.isCertified(o.default.outputDevices[e.displayName]));
  if ((t === d.DEFAULT_DEVICE_ID && o.default.lastInputSystemDevice.justChanged || s === d.DEFAULT_DEVICE_ID && o.default.lastOutputSystemDevice.justChanged) && !_) return;
  let C = l().first(Object.keys(o.default.lastDeviceConnected)),
    m = null != C && "" !== C ? o.default.lastDeviceConnected[C] : null;
  null != m && (o.default.initialized && null != C && (r.default.isCertified(o.default.inputDevices[C]) ? e = r.default.getCertifiedDevice(o.default.inputDevices[C]) : r.default.isCertified(o.default.outputDevices[C]) && (e = r.default.getCertifiedDevice(o.default.outputDevices[C]))), f = !0, (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([a.e("99387"), a.e("83536")]).then(a.bind(a, "43991"));
    return a => {
      let {
        transitionState: s,
        onClose: l
      } = a;
      return (0, n.jsx)(t, {
        device: m,
        certifiedDeviceMetadata: e,
        transitionState: s,
        onClose: () => (f = !1, l())
      })
    }
  }))
}
t.default = {
  init() {
    o.default.addChangeListener(E)
  }
}