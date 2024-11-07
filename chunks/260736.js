n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(447564),
    a = n(739566),
    o = n(942951),
    s = n(834129),
    c = n(388032),
    d = n(116264);
function u(e) {
    let { compact: t, message: u, channel: m } = e,
        h = (0, a.ZP)(u),
        f = (0, o.l)({
            user: u.author,
            channelId: u.channel_id,
            guildId: m.guild_id,
            messageId: u.id
        })(h);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Z, {
                timestamp: u.timestamp,
                compact: t,
                children: (0, i.jsx)('div', {
                    className: d.parentContainer,
                    children: c.intl.format(c.t['5bYXjo'], {
                        actorName: h.nick,
                        actorHook: f
                    })
                })
            }),
            (0, i.jsxs)(r.Clickable, {
                onClick: () => {
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 447564));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    channel: m,
                                    ...t
                                });
                        },
                        { modalKey: l.HD_STREAMING_POTION_MODAL_KEY }
                    );
                },
                className: d.embed,
                children: [
                    (0, i.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/shop/images/potion.png',
                        alt: c.intl.string(c.t.N6rchI)
                    }),
                    (0, i.jsxs)('div', {
                        className: d.text,
                        children: [
                            (0, i.jsx)(r.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: d.title,
                                children: c.intl.string(c.t.AeU3uL)
                            }),
                            (0, i.jsx)(r.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: c.intl.string(c.t['UoHq/f'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
