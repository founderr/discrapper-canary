n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(871499),
    s = n(388032);
function a(e) {
    let { popoutWindowAlwaysOnTop: t, onToggleStayOnTop: n, ...a } = e,
        o = t ? s.intl.string(s.t.YdyDMz) : s.intl.string(s.t.ZVGHwM),
        c = t ? l.PinUprightSlashIcon : l.PinUprightIcon;
    return (0, i.jsx)(r.Z, {
        onClick: () => n(!t),
        label: o,
        iconComponent: c,
        ...a
    });
}
