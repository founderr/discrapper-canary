n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(215339),
    a = n(447564),
    o = n(63063),
    s = n(739566),
    c = n(942951),
    u = n(834129),
    d = n(981631),
    m = n(388032),
    h = n(116264);
function f(e) {
    let { compact: t, message: f, channel: p } = e,
        _ = (0, s.ZP)(f),
        g = (0, c.l)({
            user: f.author,
            channelId: f.channel_id,
            guildId: p.guild_id,
            messageId: f.id
        })(_),
        E = (0, l.j)('HDStreamingUpgradedMessage'),
        C = () => {
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 447564));
                    return (t) =>
                        (0, i.jsx)(e, {
                            channel: p,
                            ...t
                        });
                },
                { modalKey: a.HD_STREAMING_POTION_MODAL_KEY }
            );
        },
        I = E ? C : o.Z.getArticleURL(d.BhN.HD_STREAMING_POTION);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: h.parentContainer,
                children: (0, i.jsx)(u.Z, {
                    iconNode: (0, i.jsx)(r.PotionIcon, { size: 'sm' }),
                    timestamp: f.timestamp,
                    compact: t,
                    children: m.intl.format(m.t['u0qJ4+'], {
                        actorName: _.nick,
                        actorHook: g
                    })
                })
            }),
            (0, i.jsxs)(r.Clickable, {
                onClick: () => {
                    E ? C() : window.open(o.Z.getArticleURL(d.BhN.HD_STREAMING_POTION), '_blank');
                },
                className: h.embed,
                children: [
                    (0, i.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/content/002329228bcca963cd89792b8c6cb0a6586ddc3dfd8b331742a319057eabd2a7.png',
                        alt: m.intl.string(m.t.N6rchI)
                    }),
                    (0, i.jsxs)('div', {
                        className: h.text,
                        children: [
                            (0, i.jsx)(r.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: h.title,
                                children: m.intl.string(m.t['Fh/mk5'])
                            }),
                            (0, i.jsx)(r.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: m.intl.format(m.t['bmGF+f'], { helpCenterLink: I })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
