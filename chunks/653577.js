n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(362721),
    u = n(12498),
    d = n(111028),
    h = n(454585),
    p = n(626135),
    m = n(981631),
    f = n(388032),
    g = n(316249),
    C = n(665162);
function _(e) {
    let { channel: t, connected: n, hovered: r, subtitle: _, onClick: v, enableHangStatus: x, allowChannelTopic: I } = e,
        b = (0, a.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        E = null != b && b.length > 0,
        S = (0, c.ZP)(t, !0),
        Z = (!x || !!I) && S,
        N = null != _ && _.length > 0;
    l.useEffect(() => {
        E &&
            p.default.track(m.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id
            });
    }, [t.id, E, t.guild_id]);
    let y = (0, s.useRedesignIconContext)().enabled ? 12 : 14;
    if (null == t.guild_id) return null;
    let T = o()(g.statusDiv, n && Z ? g.hoverable : null);
    if (E)
        return (0, i.jsx)(s.Clickable, {
            className: T,
            onClick: Z ? v : void 0,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-xs/medium',
                className: o()(g.statusText, C.markup),
                children: (0, i.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(b, !0, { channelId: t.id }) })
            })
        });
    if (n && Z && (!N || r))
        return (0, i.jsxs)(s.Clickable, {
            className: T,
            onClick: v,
            children: [
                (0, i.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    className: g.statusText,
                    children: f.intl.string(f.t.Mgpxi4)
                }),
                (0, i.jsx)(s.PencilIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: g.pencilIcon,
                    width: y,
                    height: y
                })
            ]
        });
    if (N) return (0, i.jsx)(d.Z, { children: _ });
    return null;
}
