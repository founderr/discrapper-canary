l.d(n, {
    Z: function () {
        return B;
    }
}), l(653041);
var a = l(735250), r = l(470079), i = l(442837), t = l(481060), s = l(239091), d = l(561472), o = l(36311), c = l(367907), u = l(188471), h = l(541716), m = l(526120), g = l(563534), C = l(736052), x = l(442336), f = l(910611), I = l(41776), Z = l(703656), _ = l(6025), v = l(592125), p = l(703558), N = l(731290), j = l(430824), b = l(375954), E = l(594174), M = l(502568), A = l(933557), S = l(287746), T = l(981631), R = l(689938), P = l(240196);
function B(e) {
    let {
            channelId: n,
            baseChannelId: B,
            channelViewSource: y = 'Split View',
            isResourceChannelView: H
        } = e, k = (0, i.e7)([v.Z], () => v.Z.getChannel(n)), L = (0, i.e7)([j.Z], () => j.Z.getGuild(null == k ? void 0 : k.getGuildId())), w = (0, i.e7)([E.default], () => E.default.getCurrentUser()), D = (0, i.e7)([N.Z], () => N.Z.didAgree(null == k ? void 0 : k.guild_id)), O = (null == w ? void 0 : w.nsfwAllowed) === !0, U = (0, A.ZP)(k), G = (0, i.e7)([I.Z], () => (null == L ? void 0 : L.id) != null && I.Z.isLurking(L.id), [L]), W = (0, C.Z)(n), z = (0, i.e7)([g.Z], () => {
            var e;
            return null === (e = g.Z.getResourceForChannel(null == L ? void 0 : L.id, n)) || void 0 === e ? void 0 : e.title;
        }), F = r.useRef(!1);
    if (r.useEffect(() => {
            null != k && !F.current && (F.current = !0, (0, c.yw)(T.rMx.CHANNEL_OPENED, {
                ...(0, c.$H)(k.id),
                channel_view: y
            }), (0, u.a)(T.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: k.id }));
        }, [
            k,
            y
        ]), null == k || null == L)
        return null;
    let V = [];
    return (!G && V.push((0, a.jsx)(x.Z, { channel: k }, 'notifications')), V.push((0, a.jsx)(M.ZP.Icon, {
        icon: t.CloseSmallIcon,
        tooltip: R.Z.Messages.CLOSE,
        onClick: () => _.Z.closeChannelSidebar(B)
    }, 'close')), !k.isNSFW() || O && D) ? (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(d.Z, {
                channel: k,
                draftType: p.d.ChannelMessage
            }),
            (0, a.jsx)(M.ZP, {
                toolbar: V,
                'aria-label': R.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                children: (0, f.ud)({
                    channel: k,
                    channelName: W ? z : U,
                    guild: L,
                    inSidebar: !0,
                    handleContextMenu: e => {
                        (0, s.jW)(e, async () => {
                            let {default: e} = await l.e('24783').then(l.bind(l, 439635));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                channel: k,
                                guild: L
                            });
                        });
                    },
                    handleClick: () => {
                        let e = b.Z.getMessages(k.id);
                        if (H) {
                            (0, Z.uL)(T.Z5c.CHANNEL(k.guild_id, k.id)), (0, m.C3)(k.guild_id, null);
                            return;
                        }
                        (0, Z.XU)(k.guild_id, k.id, e.jumpTargetId);
                    }
                })
            }),
            (0, a.jsx)('div', {
                className: P.chat,
                children: (0, a.jsx)(S.Z, {
                    channel: k,
                    guild: L,
                    chatInputType: h.I.SIDEBAR
                }, n)
            })
        ]
    }) : (0, a.jsx)(o.Z, { guild: L });
}
