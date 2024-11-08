n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(670044),
    s = n(28391),
    o = n(526761),
    c = n(388032),
    d = n(54086);
function u(e) {
    return (
        l.useEffect(() => e.onChannelChange(), [e.channel.id]),
        (0, i.jsxs)('div', {
            className: d.notice,
            children: [
                (0, i.jsx)(r.Z, { id: e.channel.id }),
                (0, i.jsx)('div', {
                    className: d.info,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        children: c.intl.string(c.t.abvB5O)
                    })
                }),
                (0, i.jsxs)('div', {
                    className: d.buttons,
                    children: [
                        (0, i.jsxs)(a.Button, {
                            size: a.Button.Sizes.TINY,
                            look: a.Button.Looks.FILLED,
                            color: a.Button.Colors.PRIMARY,
                            className: d.button,
                            innerClassName: d.buttonInner,
                            onClick: () => (0, s.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ALL_MESSAGES),
                            children: [
                                (0, i.jsx)(a.CheckmarkLargeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    style: { marginRight: 4 }
                                }),
                                c.intl.string(c.t.p89ACg)
                            ]
                        }),
                        (0, i.jsx)(a.Button, {
                            style: { marginLeft: 8 },
                            size: a.Button.Sizes.TINY,
                            look: a.Button.Looks.FILLED,
                            color: a.Button.Colors.PRIMARY,
                            className: d.button,
                            innerClassName: d.buttonInner,
                            onClick: () => (0, s.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ONLY_MENTIONS),
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(a.XSmallIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        style: { marginRight: 4 }
                                    }),
                                    c.intl.string(c.t.gm1Ven)
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    );
}
