s.r(n);
var t = s(735250);
s(470079);
var o = s(442837),
    a = s(481060),
    l = s(87051),
    i = s(9156),
    d = s(621600),
    c = s(689938),
    r = s(898944);
n.default = (e) => {
    let { onClose: n, channelId: s, transitionState: u } = e,
        I = (0, o.e7)([i.ZP], () => i.ZP.isChannelMuted(null, s));
    return (0, t.jsxs)(a.ModalRoot, {
        transitionState: u,
        size: a.ModalSize.SMALL,
        'aria-label': c.Z.Messages.MUTE_APP_NOTIFICATIONS,
        children: [
            (0, t.jsx)(a.ModalCloseButton, {
                className: r.closeButton,
                onClick: n
            }),
            (0, t.jsxs)(a.ModalContent, {
                className: r.content,
                children: [
                    (0, t.jsx)('div', {
                        className: r.iconContainer,
                        children: I ? (0, t.jsx)(a.BellSlashIcon, { size: 'md' }) : (0, t.jsx)(a.BellIcon, { size: 'md' })
                    }),
                    (0, t.jsx)(a.Heading, {
                        className: r.heading,
                        variant: 'heading-xl/bold',
                        children: I ? c.Z.Messages.UNMUTE_APP_NOTIFICATIONS : c.Z.Messages.MUTE_APP_NOTIFICATIONS
                    }),
                    (0, t.jsx)(a.Text, {
                        className: r.infoText,
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        children: I ? c.Z.Messages.UNMUTE_APP_NOTIFICIATIONS_INFO : c.Z.Messages.MUTE_APP_NOTIFICIATIONS_INFO
                    }),
                    (0, t.jsx)(a.Button, {
                        className: r.button,
                        color: I ? a.Button.Colors.PRIMARY : a.Button.Colors.RED,
                        onClick: () => {
                            l.Z.updateChannelOverrideSettings(null, s, { muted: !I }, I ? d.ZB.Unmuted : d.ZB.Muted), n();
                        },
                        children: I ? c.Z.Messages.UNMUTE : c.Z.Messages.MUTE
                    })
                ]
            })
        ]
    });
};
