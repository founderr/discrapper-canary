r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(513202),
    o = r(871499),
    l = r(388032);
function u(e) {
    let { channelId: n, applicationId: r, centerButton: u = !1, ...c } = e,
        d = u ? o.d : o.Z,
        f = () => {
            s.Z.leaveActivity({
                channelId: n,
                applicationId: r,
                showFeedback: !0
            });
        };
    return (0, i.jsx)(d, {
        ...c,
        onClick: f,
        iconComponent: a.DoorExitIcon,
        label: l.intl.string(l.t['R/FK4O'])
    });
}
