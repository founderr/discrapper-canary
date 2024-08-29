n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    r = n(592125),
    l = n(739566),
    o = n(834129),
    c = n(689938),
    u = n(238874);
function d(e) {
    var t;
    let { message: n, compact: d, usernameHook: _, onClickThread: E, onClickViewThreads: I, onContextMenuThread: m } = e,
        T = (0, l.ZP)(n),
        N = _(T),
        h = (0, s.e7)([r.Z], () => {
            var e;
            return r.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id);
        }),
        C = c.Z.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
            actorName: T.nick,
            actorHook: N,
            threadName: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : n.content,
            threadOnClick: {
                onClick: E,
                onContextMenu: m
            },
            viewThreadsOnClick: I
        });
    return (0, i.jsx)(o.Z, {
        iconNode: (0, i.jsx)(a.ThreadIcon, {
            size: 'md',
            color: 'currentColor',
            className: u.icon
        }),
        timestamp: n.timestamp,
        compact: d,
        children: C
    });
}
