n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(239091),
    r = n(561472),
    o = n(933557),
    c = n(287746),
    u = n(541716),
    d = n(665149),
    h = n(910611),
    p = n(703656),
    m = n(664342),
    _ = n(592125),
    f = n(703558),
    E = n(430824),
    g = n(228392),
    C = n(689938),
    I = n(474923);
function T(e) {
    let { channelId: t } = e,
        T = (0, a.e7)([_.Z], () => _.Z.getChannel(t)),
        x = (0, a.e7)([_.Z], () => _.Z.getChannel(null == T ? void 0 : T.parent_id)),
        S = (0, a.e7)([E.Z], () => E.Z.getGuild(null == T ? void 0 : T.getGuildId())),
        v = (0, o.ZP)(T),
        N = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null != T && !N.current && ((N.current = !0), (0, g.lN)(T));
        }, [T]),
        null == T || null == S)
    )
        return null;
    let A = (0, i.jsx)(m.Z, { channel: T });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Z, {
                channel: T,
                draftType: f.d.ChannelMessage
            }),
            (0, i.jsx)(d.ZP, {
                toolbar: A,
                'aria-label': C.Z.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
                children: (0, h.ud)({
                    channel: T,
                    parentChannel: x,
                    channelName: v,
                    guild: S,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, l.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: T
                                });
                        });
                    },
                    handleClick: function () {
                        null != T && (0, p.XU)(T.guild_id, T.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: I.chat,
                children: (0, i.jsx)(
                    c.Z,
                    {
                        channel: T,
                        guild: S,
                        chatInputType: u.I.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
