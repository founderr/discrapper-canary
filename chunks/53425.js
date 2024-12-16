var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(540059),
    u = n(592125),
    d = n(938475),
    h = n(823379),
    p = n(734190),
    m = n(388032),
    f = n(329986);
t.Z = l.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: r, withGuildIcon: g } = e,
        { density: C } = (0, s.useThemeContext)(),
        v = (0, c.Q3)('GuildSidebarThreadList'),
        _ = (0, a.Wu)([u.Z], () => r.map((e) => u.Z.getChannel(e)).filter(h.lm), [r]),
        x = (0, a.e7)([d.ZP], () => {
            let e = _[_.length - 1];
            if (null == e) return 0;
            let t = d.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, i.jsx)('li', {
        className: f.container,
        children: (0, i.jsxs)('ul', {
            role: 'group',
            'aria-label': m.intl.formatToPlainString(m.t.EiyIi4, { channelName: t.name }),
            children: [
                (0, i.jsx)('div', {
                    className: o()(f.spineBorder, { [f.spineBorderWithGuildIcon]: g }),
                    style: { bottom: (v && 'cozy' === C ? 28 : 24) + x }
                }),
                _.map((e, t) =>
                    (0, i.jsx)(
                        p.Z,
                        {
                            thread: e,
                            isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                            isSelectedVoice: l === e.id,
                            isLast: t === _.length - 1,
                            withGuildIcon: g
                        },
                        e.id
                    )
                )
            ]
        })
    });
});
