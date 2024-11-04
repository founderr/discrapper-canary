n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(392711),
    s = n.n(r),
    a = n(442837),
    o = n(570140),
    c = n(239091),
    u = n(561472),
    d = n(367907),
    h = n(731429),
    m = n(188471),
    p = n(933557),
    f = n(287746),
    g = n(541716),
    C = n(665149),
    x = n(910611),
    v = n(359110),
    _ = n(592125),
    I = n(703558),
    E = n(430824),
    b = n(979651),
    S = n(664342),
    Z = n(124368),
    T = n(981631),
    N = n(388032),
    j = n(972270);
function A(e) {
    let { channelId: t, baseChannelId: r, channelViewSource: A = 'Split View' } = e,
        y = (0, a.e7)([_.Z], () => _.Z.getChannel(t)),
        P = (0, a.e7)([E.Z], () => E.Z.getGuild(null == y ? void 0 : y.getGuildId())),
        M = (0, p.ZP)(y);
    (function (e) {
        let t = (0, a.e7)([b.Z], () => null != e && !s().isEmpty(b.Z.getVoiceStatesForChannel(e.id)));
        l.useEffect(() => {
            t &&
                null != e &&
                (o.Z.dispatch({
                    type: 'SIDEBAR_CLOSE',
                    baseChannelId: e.parent_id
                }),
                (0, v.ad)(e, { source: Z.on.VOICE_AUTO_OPEN }));
        }, [t, e]);
    })(y);
    let R = l.useRef(!1);
    if (
        (l.useEffect(() => {
            if (null == y || R.current) return;
            R.current = !0;
            let e = (0, h.K)(_.Z.getChannel(y.id), !0);
            (0, d.yw)(T.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, d.$H)(y.id),
                channel_view: A
            }),
                (0, m.a)(T.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: y.id });
        }, [y, A]),
        null == y || null == P)
    )
        return null;
    let L = (0, i.jsx)(S.Z, {
        channel: y,
        baseChannelId: r
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Z, {
                channel: y,
                draftType: I.d.ChannelMessage
            }),
            (0, i.jsx)(C.ZP, {
                toolbar: L,
                'aria-label': N.intl.string(N.t.Pwe8tL),
                children: (0, x.ud)({
                    channel: y,
                    channelName: M,
                    guild: P,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: y
                                });
                        });
                    },
                    handleClick: function () {
                        if (null != y) (0, v.Kh)(y.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: j.chat,
                children: (0, i.jsx)(
                    f.Z,
                    {
                        channel: y,
                        guild: P,
                        chatInputType: g.I.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
