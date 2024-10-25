n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(392711),
    r = n.n(s),
    l = n(442837),
    o = n(570140),
    c = n(45114),
    u = n(404616),
    d = n(470623),
    _ = n(344185),
    E = n(488131),
    I = n(592125),
    m = n(823379),
    f = n(709054),
    T = n(124368),
    h = n(302762);
function N(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        N = (0, l.Wu)(
            [_.Z, I.Z],
            () =>
                r()(_.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return f.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return I.Z.getChannel(t);
                    })
                    .filter(m.lm)
                    .sort((e, t) => f.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
        ),
        p = a.useCallback((e, t) => {
            (0, E.ok)(e, t, T.on.INBOX);
        }, []);
    return (
        a.useEffect(() => {
            null != n &&
                t.isFullyLoaded &&
                !t.hasError &&
                !t.collapsed &&
                0 === N.length &&
                o.Z.wait(() => {
                    (0, c.In)(t.channelId, !0), s(t.channelId);
                });
        }),
        (0, i.jsx)('div', {
            className: h.container,
            children: N.map((e) =>
                (0, i.jsx)(
                    d.oL,
                    {
                        createStore: () => (0, d.NU)(n),
                        children: (0, i.jsx)(u.ZP, {
                            className: h.forumPost,
                            threadId: e.id,
                            goToThread: p
                        })
                    },
                    e.id
                )
            )
        })
    );
}
