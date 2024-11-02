n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(871499),
    a = n(388032);
function s(e) {
    let { popoutWindowAlwaysOnTop: t, onToggleStayOnTop: n, ...s } = e,
        o = t ? a.intl.string(a.t.YdyDMz) : a.intl.string(a.t.ZVGHwM),
        c = t ? l.PinUprightSlashIcon : l.PinUprightIcon;
    return (0, i.jsx)(r.Z, {
        onClick: () => n(!t),
        label: o,
        iconComponent: c,
        ...s
    });
}
