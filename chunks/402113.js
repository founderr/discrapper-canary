n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(513202),
    s = n(871499),
    o = n(388032);
function l(e) {
    let { channelId: t, applicationId: n, centerButton: l = !1, ...u } = e,
        c = l ? s.d : s.Z;
    return (0, r.jsx)(c, {
        ...u,
        onClick: () => {
            a.Z.leaveActivity({
                channelId: t,
                applicationId: n,
                showFeedback: !0
            });
        },
        iconComponent: i.DoorExitIcon,
        label: o.intl.string(o.t['R/FK4O'])
    });
}
