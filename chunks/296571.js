n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    r = n(592125),
    l = n(739566),
    o = n(834129),
    c = n(689938),
    u = n(563480);
function d(e) {
    var t;
    let { message: n, compact: d, usernameHook: _, onClickThread: E, onClickViewThreads: I, onContextMenuThread: m } = e,
        f = (0, l.ZP)(n),
        T = _(f),
        h = (0, a.e7)([r.Z], () => {
            var e;
            return r.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id);
        }),
        N = c.Z.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
            actorName: f.nick,
            actorHook: T,
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
            className: u.icon
        }),
        timestamp: n.timestamp,
        compact: d,
        children: N
    });
}
