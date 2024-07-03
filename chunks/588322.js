n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(239091), r = n(561472), o = n(933557), c = n(287746), d = n(541716), u = n(910611), h = n(703656), p = n(664342), m = n(592125), _ = n(703558), f = n(430824), E = n(502568), C = n(228392), g = n(689938), I = n(204260);
function x(e) {
    let {channelId: t} = e, x = (0, s.e7)([m.Z], () => m.Z.getChannel(t)), T = (0, s.e7)([m.Z], () => m.Z.getChannel(null == x ? void 0 : x.parent_id)), v = (0, s.e7)([f.Z], () => f.Z.getGuild(null == x ? void 0 : x.getGuildId())), N = (0, o.ZP)(x), S = a.useRef(!1);
    if (a.useEffect(() => {
            null != x && !S.current && (S.current = !0, (0, C.lN)(x));
        }, [x]), null == x || null == v)
        return null;
    let Z = (0, i.jsx)(p.Z, { channel: x });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Z, {
                channel: x,
                draftType: _.d.ChannelMessage
            }),
            (0, i.jsx)(E.ZP, {
                toolbar: Z,
                'aria-label': g.Z.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
                children: (0, u.ud)({
                    channel: x,
                    parentChannel: T,
                    channelName: N,
                    guild: v,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, l.jW)(e, async () => {
                            let {default: e} = await n.e('40157').then(n.bind(n, 422200));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                channel: x
                            });
                        });
                    },
                    handleClick: function () {
                        null != x && (0, h.XU)(x.guild_id, x.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: I.chat,
                children: (0, i.jsx)(c.Z, {
                    channel: x,
                    guild: v,
                    chatInputType: d.I.SIDEBAR
                }, t)
            })
        ]
    });
}
