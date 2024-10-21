n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(475179),
    l = n(871499),
    r = n(689938);
function o(e) {
    let { channelId: t, ...n } = e;
    return (0, i.jsx)(l.Z, {
        onClick: function () {
            a.Z.selectParticipant(t, null);
        },
        label: r.Z.Messages.VIDEO_CALL_RETURN_TO_GRID,
        iconComponent: s.GridSquareIcon,
        tooltipPosition: 'bottom',
        ...n
    });
}
