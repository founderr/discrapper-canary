n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(475179),
    l = n(871499),
    r = n(354459),
    o = n(689938);
function c(e) {
    let { channelId: t, isHorizontal: n, ...c } = e;
    return (0, i.jsx)(l.Z, {
        onClick: function () {
            a.Z.selectParticipant(t, r.dF.AUTO);
        },
        label: o.Z.Messages.VIDEO_CALL_AUTO_SELECT,
        iconComponent: n ? s.GridHorizontalIcon : s.GridVerticalIcon,
        tooltipPosition: 'bottom',
        ...c
    });
}
