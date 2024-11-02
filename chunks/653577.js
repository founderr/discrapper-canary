n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(362721),
    u = n(12498),
    d = n(111028),
    h = n(454585),
    p = n(626135),
    f = n(981631),
    m = n(388032),
    g = n(447871),
    C = n(554034);
function _(e) {
    let { channel: t, connected: n, hovered: r, subtitle: _, onClick: x, enableHangStatus: v, allowChannelTopic: I } = e,
        b = (0, o.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        N = null != b && b.length > 0,
        E = (0, c.Z)(t, !0),
        S = (!v || !!I) && E,
        Z = null != _ && _.length > 0;
    l.useEffect(() => {
        N &&
            p.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id
            });
    }, [t.id, N, t.guild_id]);
    let y = (0, s.useRedesignIconContext)().enabled ? 12 : 14;
    if (null == t.guild_id) return null;
    let T = a()(g.statusDiv, n && S ? g.hoverable : null);
    if (N)
        return (0, i.jsx)(s.Clickable, {
            className: T,
            onClick: S ? x : void 0,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-xs/medium',
                className: a()(g.statusText, C.markup),
                children: (0, i.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(b, !0, { channelId: t.id }) })
            })
        });
    if (n && S && (!Z || r))
        return (0, i.jsxs)(s.Clickable, {
            className: T,
            onClick: x,
            children: [
                (0, i.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    className: g.statusText,
                    children: m.intl.string(m.t.Mgpxi4)
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
    if (Z) return (0, i.jsx)(d.Z, { children: _ });
    return null;
}
