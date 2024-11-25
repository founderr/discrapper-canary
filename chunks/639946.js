n.d(t, {
    r: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(471445),
    l = n(742593),
    a = n(180483);
function o(e) {
    let { channel: t } = e,
        n = (0, s.Th)(t.type);
    return (0, i.jsxs)('div', {
        className: a.channelInfoContainer,
        children: [
            null != n
                ? (0, i.jsx)(n, {
                      color: 'currentColor',
                      size: 'custom',
                      width: 20,
                      height: 20
                  })
                : null,
            (0, i.jsx)(r.Text, {
                className: a.channelInfoText,
                color: 'none',
                variant: 'text-sm/semibold',
                children: t.name
            })
        ]
    });
}
function c(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, i.jsxs)('div', {
        className: a.container,
        children: [
            (0, i.jsx)(l.HZ, {
                className: a.statusContainer,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            (0, i.jsx)(l.Rf, {
                name: n.name,
                description: n.description,
                guildId: n.guild_id
            }),
            null != t && n.channel_id === t.id ? (0, i.jsx)(o, { channel: t }) : null
        ]
    });
}
