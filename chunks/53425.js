var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(592125),
    c = n(938475),
    u = n(823379),
    d = n(734190),
    h = n(388032),
    p = n(139293);
t.Z = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: r, withGuildIcon: m } = e,
        f = (0, o.Wu)([s.Z], () => r.map((e) => s.Z.getChannel(e)).filter(u.lm), [r]),
        g = (0, o.e7)([c.ZP], () => {
            let e = f[f.length - 1];
            if (null == e) return 0;
            let t = c.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, i.jsx)('li', {
        className: p.container,
        children: (0, i.jsxs)('ul', {
            role: 'group',
            'aria-label': h.intl.formatToPlainString(h.t.EiyIi4, { channelName: t.name }),
            children: [
                (0, i.jsx)('div', {
                    className: a()(p.spineBorder, { [p.spineBorderWithGuildIcon]: m }),
                    style: { bottom: 24 + g }
                }),
                f.map((e, t) =>
                    (0, i.jsx)(
                        d.Z,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: l === e.id,
                            isLast: t === f.length - 1,
                            withGuildIcon: m
                        },
                        e.id
                    )
                )
            ]
        })
    });
});
