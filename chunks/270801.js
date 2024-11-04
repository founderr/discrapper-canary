var i = n(200651);
n(192379);
var l = n(481060),
    r = n(313201),
    s = n(388032),
    a = n(780735);
let o = () =>
    n
        .e('39248')
        .then(n.t.bind(n, 48603, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
t.Z = (e) => {
    let t = (0, r.Dt)();
    return (0, i.jsxs)(l.ModalRoot, {
        ...e,
        transitionState: e.transitionState,
        'aria-labelledby': t,
        children: [
            (0, i.jsx)('div', {
                className: a.animationContainer,
                children: (0, i.jsx)(l.LottieAnimation, {
                    importData: o,
                    className: a.animationMiddle
                })
            }),
            (0, i.jsx)(l.ModalContent, {
                children: (0, i.jsxs)('div', {
                    className: a.container,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-xl/semibold',
                            className: a.header,
                            id: t,
                            children: s.intl.format(s.t.z9qozM, { guildName: e.guildName })
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: s.intl.string(s.t.nwpqyc)
                        }),
                        (0, i.jsx)(l.Button, {
                            className: a.button,
                            onClick: () => {
                                e.onAccept(), e.onClose();
                            },
                            children: s.intl.string(s.t.NuzmOD)
                        })
                    ]
                })
            })
        ]
    });
};
