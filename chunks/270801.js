var i = n(200651);
n(192379);
var s = n(481060),
    a = n(313201),
    l = n(689938),
    r = n(780735);
let o = () =>
    n
        .e('39248')
        .then(n.t.bind(n, 48603, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
t.Z = (e) => {
    let t = (0, a.Dt)();
    return (0, i.jsxs)(s.ModalRoot, {
        ...e,
        transitionState: e.transitionState,
        'aria-labelledby': t,
        children: [
            (0, i.jsx)('div', {
                className: r.animationContainer,
                children: (0, i.jsx)(s.LottieAnimation, {
                    importData: o,
                    className: r.animationMiddle
                })
            }),
            (0, i.jsx)(s.ModalContent, {
                children: (0, i.jsxs)('div', {
                    className: r.container,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-xl/semibold',
                            className: r.header,
                            id: t,
                            children: l.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format({ guildName: e.guildName })
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: l.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC
                        }),
                        (0, i.jsx)(s.Button, {
                            className: r.button,
                            onClick: () => {
                                e.onAccept(), e.onClose();
                            },
                            children: l.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_CONFIRM
                        })
                    ]
                })
            })
        ]
    });
};
