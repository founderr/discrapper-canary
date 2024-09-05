n.d(t, {
    U: function () {
        return r;
    }
});
var a = n(735250);
n(470079);
var i = n(481060),
    l = n(542094),
    s = n(689938),
    o = n(637389);
function r(e) {
    let { action: t, onClick: n } = e,
        r = t === l.JS.JOIN ? s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY : s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
        c = t === l.JS.JOIN ? i.Button.Colors.PRIMARY : i.Button.Colors.RED;
    return (0, a.jsx)('div', {
        className: o.activityOverlay,
        children: (0, a.jsx)(i.Button, {
            className: o.actionButton,
            onClick: n,
            size: i.Button.Sizes.MEDIUM,
            color: c,
            children: r
        })
    });
}
