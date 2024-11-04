n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(475179),
    s = n(871499),
    a = n(388032);
function o(e) {
    let { channelId: t, ...n } = e;
    return (0, i.jsx)(s.Z, {
        onClick: function () {
            r.Z.selectParticipant(t, null);
        },
        label: a.intl.string(a.t['tyhU+P']),
        iconComponent: l.GridSquareIcon,
        tooltipPosition: 'bottom',
        ...n
    });
}
