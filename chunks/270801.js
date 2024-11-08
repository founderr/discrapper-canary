var i = n(200651);
n(192379);
var l = n(481060),
    a = n(313201),
    r = n(388032),
    s = n(789200);
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
    return (0, i.jsxs)(l.ModalRoot, {
        ...e,
        transitionState: e.transitionState,
        'aria-labelledby': t,
        children: [
            (0, i.jsx)('div', {
                className: s.animationContainer,
                children: (0, i.jsx)(l.LottieAnimation, {
                    importData: o,
                    className: s.animationMiddle
                })
            }),
            (0, i.jsx)(l.ModalContent, {
                children: (0, i.jsxs)('div', {
                    className: s.container,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-xl/semibold',
                            className: s.header,
                            id: t,
                            children: r.intl.format(r.t.z9qozM, { guildName: e.guildName })
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: r.intl.string(r.t.nwpqyc)
                        }),
                        (0, i.jsx)(l.Button, {
                            className: s.button,
                            onClick: () => {
                                e.onAccept(), e.onClose();
                            },
                            children: r.intl.string(r.t.NuzmOD)
                        })
                    ]
                })
            })
        ]
    });
};
