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
    p = n(82915);
t.Z = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: r, withGuildIcon: f } = e,
        m = (0, o.Wu)([s.Z], () => r.map((e) => s.Z.getChannel(e)).filter(u.lm), [r]),
        g = (0, o.e7)([c.ZP], () => {
            let e = m[m.length - 1];
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
                    className: a()(p.spineBorder, { [p.spineBorderWithGuildIcon]: f }),
                    style: { bottom: 24 + g }
                }),
                m.map((e, t) =>
                    (0, i.jsx)(
                        d.Z,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: l === e.id,
                            isLast: t === m.length - 1,
                            withGuildIcon: f
                        },
                        e.id
                    )
                )
            ]
        })
    });
});
