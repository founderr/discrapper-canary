n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(26151),
    s = n(871499),
    a = n(388032);
function o(e) {
    let { channel: t, ...n } = e;
    return (0, i.jsx)(s.d, {
        ...n,
        iconComponent: l.XSmallIcon,
        label: a.intl.string(a.t.WAI6xs),
        onClick: () => r.Z.stopRinging(t.id)
    });
}
