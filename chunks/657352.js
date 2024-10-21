var i = n(200651);
n(192379);
var s = n(481060),
    a = n(689938),
    l = n(583694);
t.Z = (e) => {
    let { guild: t, onClose: r } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: l.image,
                src: n(238980)
            }),
            (0, i.jsxs)('div', {
                className: l.content,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        children: a.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_HEADER.format({ guild: t.name })
                    }),
                    (0, i.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: a.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_BODY
                    }),
                    (0, i.jsx)('div', {
                        className: l.buttonContainer,
                        children: (0, i.jsx)(s.Button, {
                            onClick: r,
                            children: a.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_BUTTON
                        })
                    })
                ]
            })
        ]
    });
};
