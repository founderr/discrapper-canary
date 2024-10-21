n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(689938),
    l = n(541584);
function r(e) {
    let { onClose: t, guildName: n } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)('div', {
                className: l.iconContainer,
                children: (0, i.jsx)(s.ClockWarningIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: l.icon,
                    width: 20,
                    height: 20
                })
            }),
            (0, i.jsxs)('div', {
                className: l.header,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        className: l.headerText,
                        children: a.Z.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: a.Z.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format({ guildName: n })
                    }),
                    (0, i.jsx)(s.Button, {
                        onClick: t,
                        className: l.button,
                        children: a.Z.Messages.OKAY
                    })
                ]
            })
        ]
    });
}
