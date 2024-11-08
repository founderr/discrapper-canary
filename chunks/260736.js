n.d(t, {
    Z: function () {
        return d;
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
    u = n(216969);
function d(e) {
    let { compact: t, message: d, channel: m } = e,
        h = (0, a.ZP)(d),
        f = (0, o.l)({
            user: d.author,
            channelId: d.channel_id,
            guildId: m.guild_id,
            messageId: d.id
        })(h);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: u.parentContainer,
                children: (0, i.jsx)(s.Z, {
                    timestamp: d.timestamp,
                    compact: t,
                    children: c.intl.format(c.t['u0qJ4+'], {
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
                className: u.embed,
                children: [
                    (0, i.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/content/002329228bcca963cd89792b8c6cb0a6586ddc3dfd8b331742a319057eabd2a7.png',
                        alt: c.intl.string(c.t.N6rchI)
                    }),
                    (0, i.jsxs)('div', {
                        className: u.text,
                        children: [
                            (0, i.jsx)(r.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: u.title,
                                children: c.intl.string(c.t['Fh/mk5'])
                            }),
                            (0, i.jsx)(r.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: c.intl.format(c.t['bmGF+f'], {
                                    helpCenterLink: () => {
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
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
