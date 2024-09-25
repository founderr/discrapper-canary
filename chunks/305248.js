n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(45114),
    d = n(404616),
    _ = n(470623),
    E = n(344185),
    f = n(488131),
    h = n(592125),
    p = n(823379),
    m = n(709054),
    I = n(124368),
    T = n(302762);
function g(e) {
    let { channel: t, channelRecord: n, deleteChannel: r } = e,
        o = (0, l.Wu)(
            [E.Z, h.Z],
            () =>
                s()(E.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return m.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return h.Z.getChannel(t);
                    })
                    .filter(p.lm)
                    .sort((e, t) => m.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
        ),
        g = a.useCallback((e, t) => {
            (0, f.ok)(e, t, I.on.INBOX);
        }, []);
    return (
        a.useEffect(() => {
            null != n &&
                t.isFullyLoaded &&
                !t.hasError &&
                !t.collapsed &&
                0 === o.length &&
                u.Z.wait(() => {
                    (0, c.In)(t.channelId, !0), r(t.channelId);
                });
        }),
        (0, i.jsx)('div', {
            className: T.container,
            children: o.map((e) =>
                (0, i.jsx)(
                    _.oL,
                    {
                        createStore: () => (0, _.NU)(n),
                        children: (0, i.jsx)(d.ZP, {
                            className: T.forumPost,
                            threadId: e.id,
                            goToThread: g
                        })
                    },
                    e.id
                )
            )
        })
    );
}
