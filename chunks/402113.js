r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(513202),
    o = r(411840),
    l = r(871499),
    u = r(388032);
function c(e) {
    let { channelId: n, applicationId: r, centerButton: c = !1, ...d } = e,
        { groupedButtons: f } = (0, o.Z)({ location: 'LeaveActivityButton' }),
        _ = c ? l.d : l.Z,
        h = () => {
            s.Z.leaveActivity({
                channelId: n,
                applicationId: r,
                showFeedback: !0
            });
        };
    return (0, i.jsx)(_, {
        ...d,
        fullRegionButton: f,
        onClick: h,
        iconComponent: a.DoorExitIcon,
        label: u.intl.string(u.t['R/FK4O'])
    });
}
