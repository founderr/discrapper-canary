n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(215339),
    a = n(461195),
    o = n(447564),
    s = n(63063),
    c = n(739566),
    u = n(942951),
    d = n(834129),
    m = n(981631),
    h = n(388032),
    f = n(116264);
function p(e) {
    let { compact: t, message: p, channel: _ } = e,
        g = (0, c.ZP)(p),
        E = (0, u.l)({
            user: p.author,
            channelId: p.channel_id,
            guildId: _.guild_id,
            messageId: p.id
        })(g),
        C = (0, l.j)('HDStreamingUpgradedMessage'),
        I = () => {
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 447564));
                    return (t) =>
                        (0, i.jsx)(e, {
                            channel: _,
                            ...t
                        });
                },
                { modalKey: o.HD_STREAMING_POTION_MODAL_KEY }
            );
        },
        x = C ? I : s.Z.getArticleURL(m.BhN.HD_STREAMING_POTION);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: f.parentContainer,
                children: (0, i.jsx)(d.Z, {
                    iconNode: (0, i.jsx)(r.PotionIcon, { size: 'sm' }),
                    timestamp: p.timestamp,
                    compact: t,
                    children: h.intl.format(h.t['u0qJ4+'], {
                        actorName: g.nick,
                        actorHook: E
                    })
                })
            }),
            (0, i.jsxs)(r.Clickable, {
                onClick: () => {
                    C ? I() : window.open(s.Z.getArticleURL(m.BhN.HD_STREAMING_POTION), '_blank');
                },
                className: f.embed,
                children: [
                    (0, i.jsx)(a.Z, {}),
                    (0, i.jsxs)('div', {
                        className: f.text,
                        children: [
                            (0, i.jsx)(r.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/semibold',
                                className: f.title,
                                children: h.intl.string(h.t['Fh/mk5'])
                            }),
                            (0, i.jsx)(r.Text, {
                                color: 'text-primary',
                                variant: 'text-xs/normal',
                                children: h.intl.format(h.t['bmGF+f'], { helpCenterLink: x })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
