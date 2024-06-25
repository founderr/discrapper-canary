n(47120);
var s = n(735250);
n(470079);
var i = n(392711),
  l = n.n(i),
  a = n(481060),
  r = n(463395),
  o = n(820486),
  c = n(131951),
  u = n(65154);
let d = new Set(["DisplayPort"]),
  E = !1;

function h() {
  let e;
  if (E) return;
  let t = c.Z.getInputDeviceId(),
    i = c.Z.getOutputDeviceId();
  if (o.Z.getState().neverShowModal || l().isEmpty(o.Z.lastDeviceConnected)) return;
  let h = (0, o.X)(c.Z.getInputDevices()[t]),
    _ = (0, o.X)(c.Z.getOutputDevices()[i]);
  if (l().some(o.Z.lastDeviceConnected, e => d.has(e.displayName) || e.displayName === h || e.displayName === _)) return;
  let I = l().some(o.Z.lastDeviceConnected, e => r.Z.isCertified(o.Z.inputDevices[e.displayName]) || r.Z.isCertified(o.Z.outputDevices[e.displayName]));
  if ((t === u.w5 && o.Z.lastInputSystemDevice.justChanged || i === u.w5 && o.Z.lastOutputSystemDevice.justChanged) && !I) return;
  let m = l().first(Object.keys(o.Z.lastDeviceConnected)),
    T = null != m && "" !== m ? o.Z.lastDeviceConnected[m] : null;
  null != T && (o.Z.initialized && null != m && (r.Z.isCertified(o.Z.inputDevices[m]) ? e = r.Z.getCertifiedDevice(o.Z.inputDevices[m]) : r.Z.isCertified(o.Z.outputDevices[m]) && (e = r.Z.getCertifiedDevice(o.Z.outputDevices[m]))), E = !0, (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("83536")]).then(n.bind(n, 43991));
    return n => {
      let {
        transitionState: i,
        onClose: l
      } = n;
      return (0, s.jsx)(t, {
        device: T,
        certifiedDeviceMetadata: e,
        transitionState: i,
        onClose: () => (E = !1, l())
      })
    }
  }))
}
t.Z = {
  init() {
    o.Z.addChangeListener(h)
  }
}