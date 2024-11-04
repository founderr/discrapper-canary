n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(475179),
    s = n(871499),
    a = n(354459),
    o = n(388032);
function c(e) {
    let { channelId: t, isHorizontal: n, ...c } = e;
    return (0, i.jsx)(s.Z, {
        onClick: function () {
            r.Z.selectParticipant(t, a.dF.AUTO);
        },
        label: o.intl.string(o.t.np22FR),
        iconComponent: n ? l.GridHorizontalIcon : l.GridVerticalIcon,
        tooltipPosition: 'bottom',
        ...c
    });
}
