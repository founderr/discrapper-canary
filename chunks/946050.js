n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(670044),
    s = n(28391),
    o = n(526761),
    c = n(388032),
    u = n(915383);
function d(e) {
    return (
        l.useEffect(() => e.onChannelChange(), [e.channel.id]),
        (0, i.jsxs)('div', {
            className: u.notice,
            children: [
                (0, i.jsx)(a.Z, { id: e.channel.id }),
                (0, i.jsx)('div', {
                    className: u.info,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        children: c.intl.string(c.t.abvB5O)
                    })
                }),
                (0, i.jsxs)('div', {
                    className: u.buttons,
                    children: [
                        (0, i.jsxs)(r.Button, {
                            size: r.Button.Sizes.TINY,
                            look: r.Button.Looks.FILLED,
                            color: r.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.buttonInner,
                            onClick: () => (0, s.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ALL_MESSAGES),
                            children: [
                                (0, i.jsx)(r.CheckmarkLargeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    style: { marginRight: 4 }
                                }),
                                c.intl.string(c.t.p89ACg)
                            ]
                        }),
                        (0, i.jsx)(r.Button, {
                            style: { marginLeft: 8 },
                            size: r.Button.Sizes.TINY,
                            look: r.Button.Looks.FILLED,
                            color: r.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.buttonInner,
                            onClick: () => (0, s.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ONLY_MENTIONS),
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(r.XSmallIcon, {
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
