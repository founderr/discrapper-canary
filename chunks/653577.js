n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(362721),
    u = n(12498),
    d = n(111028),
    h = n(454585),
    p = n(626135),
    f = n(981631),
    _ = n(689938),
    m = n(447871),
    g = n(554034);
function C(e) {
    let { channel: t, connected: n, hovered: r, subtitle: C, onClick: I, enableHangStatus: E, allowChannelTopic: N } = e,
        S = (0, s.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        v = null != S && S.length > 0,
        x = (0, c.Z)(t, !0),
        T = (!E || !!N) && x,
        Z = null != C && C.length > 0;
    l.useEffect(() => {
        v &&
            p.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id
            });
    }, [t.id, v, t.guild_id]);
    let b = (0, o.useRedesignIconContext)().enabled ? 12 : 14;
    if (null == t.guild_id) return null;
    let A = a()(m.statusDiv, n && T ? m.hoverable : null);
    if (v)
        return (0, i.jsx)(o.Clickable, {
            className: A,
            onClick: T ? I : void 0,
            children: (0, i.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: a()(m.statusText, g.markup),
                children: (0, i.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(S, !0, { channelId: t.id }) })
            })
        });
    if (n && T && (!Z || r))
        return (0, i.jsxs)(o.Clickable, {
            className: A,
            onClick: I,
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    className: m.statusText,
                    children: _.Z.Messages.VOICE_CHANNEL_SET_STATUS
                }),
                (0, i.jsx)(o.PencilIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: m.pencilIcon,
                    width: b,
                    height: b
                })
            ]
        });
    if (Z) return (0, i.jsx)(d.Z, { children: C });
    return null;
}
