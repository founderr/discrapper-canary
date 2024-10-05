n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    l = n(592125),
    r = n(739566),
    o = n(834129),
    c = n(689938),
    d = n(563480);
function u(e) {
    var t;
    let { message: n, compact: u, usernameHook: _, onClickThread: E, onClickViewThreads: I, onContextMenuThread: m } = e,
        T = (0, r.ZP)(n),
        N = _(T),
        h = (0, a.e7)([l.Z], () => {
            var e;
            return l.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id);
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
        iconNode: (0, i.jsx)(s.ThreadIcon, {
            size: 'md',
            color: 'currentColor',
            className: d.icon
        }),
        timestamp: n.timestamp,
        compact: u,
        children: C
    });
}
