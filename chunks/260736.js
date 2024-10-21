n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(739566),
    r = n(942951),
    l = n(834129),
    o = n(689938),
    c = n(116264);
function u(e) {
    let { compact: t, message: n, channel: u } = e,
        d = (0, s.ZP)(n),
        _ = (0, r.l)({
            user: n.author,
            channelId: n.channel_id,
            guildId: u.guild_id,
            messageId: n.id
        })(d);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Z, {
                timestamp: n.timestamp,
                compact: t,
                iconNode: (0, i.jsx)(a.HdIcon, {
                    size: 'md',
                    colorClass: 'currentColor',
                    className: c.icon
                }),
                children: (0, i.jsx)('div', {
                    className: c.parentContainer,
                    children: o.Z.Messages.SYSTEM_MESSAGE_CONSUMABLE_HD_STREAMING_STARTED.format({
                        actorName: d.nick,
                        actorHook: _
                    })
                })
            }),
            (0, i.jsxs)(a.Clickable, {
                className: c.embed,
                children: [
                    (0, i.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/shop/images/potion.png',
                        alt: o.Z.Messages.SYSTEM_MESSAGE_CONSUMABLE_HD_STREAMING_IMG_ALT
                    }),
                    (0, i.jsxs)('div', {
                        className: c.text,
                        children: [
                            (0, i.jsx)(a.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: c.title,
                                children: o.Z.Messages.SYSTEM_MESSAGE_CONSUMABLE_HD_STREAMING_EMBED_TITLE
                            }),
                            (0, i.jsx)(a.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: o.Z.Messages.SYSTEM_MESSAGE_CONSUMABLE_HD_STREAMING_EMBED_BODY
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
