n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    l = n.n(s),
    r = n(442837),
    o = n(570140),
    c = n(45114),
    d = n(404616),
    u = n(470623),
    _ = n(344185),
    E = n(488131),
    I = n(592125),
    m = n(823379),
    T = n(709054),
    N = n(124368),
    h = n(302762);
function C(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        C = (0, r.Wu)(
            [_.Z, I.Z],
            () =>
                l()(_.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return T.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return I.Z.getChannel(t);
                    })
                    .filter(m.lm)
                    .sort((e, t) => T.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
        ),
        f = a.useCallback((e, t) => {
            (0, E.ok)(e, t, N.on.INBOX);
        }, []);
    return (
        a.useEffect(() => {
            null != n &&
                t.isFullyLoaded &&
                !t.hasError &&
                !t.collapsed &&
                0 === C.length &&
                o.Z.wait(() => {
                    (0, c.In)(t.channelId, !0), s(t.channelId);
                });
        }),
        (0, i.jsx)('div', {
            className: h.container,
            children: C.map((e) =>
                (0, i.jsx)(
                    u.oL,
                    {
                        createStore: () => (0, u.NU)(n),
                        children: (0, i.jsx)(d.ZP, {
                            className: h.forumPost,
                            threadId: e.id,
                            goToThread: f
                        })
                    },
                    e.id
                )
            )
        })
    );
}
