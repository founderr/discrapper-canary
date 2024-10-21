n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(871499),
    l = n(689938);
function r(e) {
    let { popoutWindowAlwaysOnTop: t, onToggleStayOnTop: n, ...r } = e,
        o = t ? l.Z.Messages.POPOUT_REMOVE_FROM_TOP : l.Z.Messages.POPOUT_STAY_ON_TOP,
        c = t ? s.PinUprightSlashIcon : s.PinUprightIcon;
    return (0, i.jsx)(a.Z, {
        onClick: () => n(!t),
        label: o,
        iconComponent: c,
        ...r
    });
}
