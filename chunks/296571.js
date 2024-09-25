n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(592125),
    s = n(739566),
    l = n(834129),
    u = n(689938),
    c = n(563480);
function d(e) {
    var t;
    let { message: n, compact: d, usernameHook: _, onClickThread: E, onClickViewThreads: f, onContextMenuThread: h } = e,
        p = (0, s.ZP)(n),
        m = _(p),
        I = (0, i.e7)([o.Z], () => {
            var e;
            return o.Z.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id);
        }),
        T = u.Z.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
            actorName: p.nick,
            actorHook: m,
            threadName: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : n.content,
            threadOnClick: {
                onClick: E,
                onContextMenu: h
            },
            viewThreadsOnClick: f
        });
    return (0, r.jsx)(l.Z, {
        iconNode: (0, r.jsx)(a.ThreadIcon, {
            size: 'md',
            color: 'currentColor',
            className: c.icon
        }),
        timestamp: n.timestamp,
        compact: d,
        children: T
    });
}
