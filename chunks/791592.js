n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(26151),
    l = n(871499),
    r = n(689938);
function o(e) {
    let { channel: t, ...n } = e;
    return (0, i.jsx)(l.d, {
        ...n,
        iconComponent: s.XSmallIcon,
        label: r.Z.Messages.DISMISS,
        onClick: () => a.Z.stopRinging(t.id)
    });
}
