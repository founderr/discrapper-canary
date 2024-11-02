n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(26151),
    a = n(871499),
    s = n(388032);
function o(e) {
    let { channel: t, ...n } = e;
    return (0, i.jsx)(a.d, {
        ...n,
        iconComponent: l.XSmallIcon,
        label: s.intl.string(s.t.WAI6xs),
        onClick: () => r.Z.stopRinging(t.id)
    });
}
