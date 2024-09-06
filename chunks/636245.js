var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(442837),
    r = n(922482),
    o = n(979651),
    c = n(915863),
    u = n(689938),
    d = n(275778);
t.Z = (e) => {
    let { guildId: t, channelId: n, color: s, look: h, isProfile: m, onAction: p } = e,
        _ = (0, l.e7)([o.Z], () => o.Z.isInChannel(n), [n]);
    return (0, i.jsx)(
        c.Z,
        {
            className: a()(d.button, { [d.popout]: !m }),
            color: s,
            look: h,
            disabled: _,
            onClick: () => {
                null == p || p(), r.AC(t, n);
            },
            fullWidth: !0,
            children: u.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
        },
        'stage'
    );
};
