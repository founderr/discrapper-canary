n(47120);
var i = n(200651);
n(192379);
var r = n(392711),
    l = n.n(r),
    a = n(481060),
    o = n(463395),
    s = n(820486),
    c = n(131951),
    d = n(65154);
let u = new Set(['DisplayPort']),
    h = !1;
function m() {
    let e;
    if (h) return;
    let t = c.Z.getInputDeviceId(),
        r = c.Z.getOutputDeviceId();
    if (s.Z.getState().neverShowModal || l().isEmpty(s.Z.lastDeviceConnected)) return;
    let m = (0, s.X)(c.Z.getInputDevices()[t]),
        p = (0, s.X)(c.Z.getOutputDevices()[r]);
    if (l().some(s.Z.lastDeviceConnected, (e) => u.has(e.displayName) || e.displayName === m || e.displayName === p)) return;
    let g = l().some(s.Z.lastDeviceConnected, (e) => o.Z.isCertified(s.Z.inputDevices[e.displayName]) || o.Z.isCertified(s.Z.outputDevices[e.displayName]));
    if (((t === d.w5 && s.Z.lastInputSystemDevice.justChanged) || (r === d.w5 && s.Z.lastOutputSystemDevice.justChanged)) && !g) return;
    let f = l().first(Object.keys(s.Z.lastDeviceConnected)),
        _ = null != f && '' !== f ? s.Z.lastDeviceConnected[f] : null;
    null != _ &&
        (s.Z.initialized && null != f && (o.Z.isCertified(s.Z.inputDevices[f]) ? (e = o.Z.getCertifiedDevice(s.Z.inputDevices[f])) : o.Z.isCertified(s.Z.outputDevices[f]) && (e = o.Z.getCertifiedDevice(s.Z.outputDevices[f]))),
        (h = !0),
        (0, a.openModalLazy)(async () => {
            let { default: t } = await n.e('83536').then(n.bind(n, 43991));
            return (n) => {
                let { transitionState: r, onClose: l } = n;
                return (0, i.jsx)(t, {
                    device: _,
                    certifiedDeviceMetadata: e,
                    transitionState: r,
                    onClose: () => ((h = !1), l())
                });
            };
        }));
}
t.Z = {
    init() {
        s.Z.addChangeListener(m);
    }
};
