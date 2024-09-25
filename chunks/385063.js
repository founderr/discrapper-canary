n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(739566),
    a = n(834129),
    o = n(689938),
    s = n(922133);
function l(e) {
    let { message: t, usernameHook: l, compact: u, isForumPost: c } = e,
        d = (0, i.ZP)(t),
        _ = l(d);
    return (0, r.jsx)(a.Z, {
        compact: u,
        className: s.channelNameChange,
        icon: n(819373),
        timestamp: t.timestamp,
        children: (c ? o.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE2 : o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE2).format({
            username: d.nick,
            usernameHook: _,
            channelName: t.content
        })
    });
}
