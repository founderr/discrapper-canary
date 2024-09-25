n.d(t, {
    r: function () {
        return c;
    }
});
var s = n(735250);
n(470079);
var r = n(481060),
    i = n(471445),
    a = n(742593),
    o = n(577491);
function l(e) {
    let { channel: t } = e,
        n = (0, i.Th)(t.type);
    return (0, s.jsxs)('div', {
        className: o.channelInfoContainer,
        children: [
            null != n
                ? (0, s.jsx)(n, {
                      color: 'currentColor',
                      size: 'custom',
                      width: 20,
                      height: 20
                  })
                : null,
            (0, s.jsx)(r.Text, {
                className: o.channelInfoText,
                color: 'none',
                variant: 'text-sm/semibold',
                children: t.name
            })
        ]
    });
}
function c(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, s.jsxs)('div', {
        className: o.container,
        children: [
            (0, s.jsx)(a.HZ, {
                className: o.statusContainer,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            (0, s.jsx)(a.Rf, {
                name: n.name,
                description: n.description,
                guildId: n.guild_id
            }),
            null != t && n.channel_id === t.id ? (0, s.jsx)(l, { channel: t }) : null
        ]
    });
}
