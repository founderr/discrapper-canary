n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(739566),
    o = n(834129),
    s = n(689938),
    l = n(437814);
function u(e) {
    let { message: t, compact: n, usernameHook: u } = e,
        c = (0, a.ZP)(t),
        d = u(c),
        _ = s.Z.Messages.SYSTEM_MESSAGE_STAGE_RAISE_HAND_HOOK.format({
            username: c.nick,
            usernameHook: d
        });
    return (0, r.jsx)(o.Z, {
        className: l.stageSystemMessage,
        iconNode: (0, r.jsx)(i.HandRequestSpeakIcon, {
            size: 'md',
            color: 'currentColor'
        }),
        iconContainerClassName: l.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: _
    });
}
