n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(692547),
    a = n(481060),
    o = n(739566),
    s = n(834129),
    l = n(689938),
    u = n(437814);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        d = (0, o.ZP)(t),
        _ = c(d),
        E = l.Z.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
            username: d.nick,
            usernameHook: _,
            topic: t.content
        });
    return (0, r.jsx)(s.Z, {
        className: u.stageSystemMessage,
        iconNode: (0, r.jsx)(a.StageIcon, {
            size: 'md',
            color: i.Z.unsafe_rawColors.GREEN_360.css
        }),
        iconContainerClassName: u.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: E
    });
}
