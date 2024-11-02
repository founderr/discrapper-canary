n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(475179),
    a = n(871499),
    s = n(388032);
function o(e) {
    let { channelId: t, ...n } = e;
    return (0, i.jsx)(a.Z, {
        onClick: function () {
            r.Z.selectParticipant(t, null);
        },
        label: s.intl.string(s.t['tyhU+P']),
        iconComponent: l.GridSquareIcon,
        tooltipPosition: 'bottom',
        ...n
    });
}
