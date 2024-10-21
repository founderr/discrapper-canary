n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(481060),
    l = n(670044),
    r = n(28391),
    o = n(526761),
    c = n(689938),
    u = n(915383);
function d(e) {
    return (
        s.useEffect(() => e.onChannelChange(), [e.channel.id]),
        (0, i.jsxs)('div', {
            className: u.notice,
            children: [
                (0, i.jsx)(l.Z, { id: e.channel.id }),
                (0, i.jsx)('div', {
                    className: u.info,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        children: c.Z.Messages.UNREAD_NOTIFICATION_SETTING_NOTICE
                    })
                }),
                (0, i.jsxs)('div', {
                    className: u.buttons,
                    children: [
                        (0, i.jsxs)(a.Button, {
                            size: a.Button.Sizes.TINY,
                            look: a.Button.Looks.FILLED,
                            color: a.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.buttonInner,
                            onClick: () => (0, r.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ALL_MESSAGES),
                            children: [
                                (0, i.jsx)(a.CheckmarkLargeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    style: { marginRight: 4 }
                                }),
                                c.Z.Messages.YES_TEXT
                            ]
                        }),
                        (0, i.jsx)(a.Button, {
                            style: { marginLeft: 8 },
                            size: a.Button.Sizes.TINY,
                            look: a.Button.Looks.FILLED,
                            color: a.Button.Colors.PRIMARY,
                            className: u.button,
                            innerClassName: u.buttonInner,
                            onClick: () => (0, r.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ONLY_MENTIONS),
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(a.XSmallIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        style: { marginRight: 4 }
                                    }),
                                    c.Z.Messages.NO_TEXT
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    );
}
