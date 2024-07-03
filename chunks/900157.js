n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(735250), a = n(470079), s = n(392711), l = n.n(s), r = n(442837), o = n(570140), c = n(239091), d = n(561472), u = n(367907), h = n(731429), p = n(188471), m = n(933557), _ = n(287746), f = n(541716), E = n(910611), C = n(359110), g = n(592125), I = n(703558), x = n(430824), T = n(979651), v = n(502568), N = n(664342), S = n(124368), Z = n(981631), A = n(689938), M = n(822006);
function b(e) {
    let {
            channelId: t,
            baseChannelId: s,
            channelViewSource: b = 'Split View'
        } = e, R = (0, r.e7)([g.Z], () => g.Z.getChannel(t)), j = (0, r.e7)([x.Z], () => x.Z.getGuild(null == R ? void 0 : R.getGuildId())), L = (0, m.ZP)(R);
    (function (e) {
        let t = (0, r.e7)([T.Z], () => null != e && !l().isEmpty(T.Z.getVoiceStatesForChannel(e.id)));
        a.useEffect(() => {
            t && null != e && (o.Z.dispatch({
                type: 'SIDEBAR_CLOSE',
                baseChannelId: e.parent_id
            }), (0, C.ad)(e, { source: S.on.VOICE_AUTO_OPEN }));
        }, [
            t,
            e
        ]);
    }(R));
    let P = a.useRef(!1);
    if (a.useEffect(() => {
            if (null == R || P.current)
                return;
            P.current = !0;
            let e = (0, h.K)(g.Z.getChannel(R.id), !0);
            (0, u.yw)(Z.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, u.$H)(R.id),
                channel_view: b
            }), (0, p.a)(Z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: R.id });
        }, [
            R,
            b
        ]), null == R || null == j)
        return null;
    let O = (0, i.jsx)(N.Z, {
        channel: R,
        baseChannelId: s
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                channel: R,
                draftType: I.d.ChannelMessage
            }),
            (0, i.jsx)(v.ZP, {
                toolbar: O,
                'aria-label': A.Z.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
                children: (0, E.ud)({
                    channel: R,
                    channelName: L,
                    guild: j,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let {default: e} = await n.e('40157').then(n.bind(n, 422200));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                channel: R
                            });
                        });
                    },
                    handleClick: function () {
                        if (null != R)
                            (0, C.Kh)(R.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: M.chat,
                children: (0, i.jsx)(_.Z, {
                    channel: R,
                    guild: j,
                    chatInputType: f.I.SIDEBAR
                }, t)
            })
        ]
    });
}
