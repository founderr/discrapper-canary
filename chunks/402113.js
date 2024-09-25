n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(513202),
    o = n(871499),
    s = n(689938);
function l(e) {
    let { channelId: t, applicationId: n, centerButton: l = !1, ...u } = e,
        c = l ? o.d : o.Z,
        d = () => {
            a.Z.leaveActivity({
                channelId: t,
                applicationId: n,
                showFeedback: !0
            });
        };
    return (0, r.jsx)(c, {
        ...u,
        onClick: d,
        iconComponent: i.DoorExitIcon,
        label: s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY
    });
}
