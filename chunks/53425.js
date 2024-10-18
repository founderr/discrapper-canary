var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(592125),
    c = n(938475),
    u = n(823379),
    d = n(734190),
    h = n(689938),
    p = n(82915);
t.Z = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: r, withGuildIcon: f } = e,
        m = (0, s.Wu)([o.Z], () => r.map((e) => o.Z.getChannel(e)).filter(u.lm), [r]),
        _ = (0, s.e7)([c.ZP], () => {
            let e = m[m.length - 1];
            if (null == e) return 0;
            let t = c.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, i.jsx)('li', {
        className: p.container,
        children: (0, i.jsxs)('ul', {
            role: 'group',
            'aria-label': h.Z.Messages.THREAD_GROUP_A11Y_LABEL.format({ channelName: t.name }),
            children: [
                (0, i.jsx)('div', {
                    className: a()(p.spineBorder, { [p.spineBorderWithGuildIcon]: f }),
                    style: { bottom: 24 + _ }
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
