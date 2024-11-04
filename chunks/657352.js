var i = n(200651);
n(192379);
var l = n(481060),
    r = n(388032),
    s = n(583694);
t.Z = (e) => {
    let { guild: t, onClose: a } = e;
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: s.image,
                src: n(238980)
            }),
            (0, i.jsxs)('div', {
                className: s.content,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: r.intl.format(r.t.THgVCA, { guild: t.name })
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: r.intl.string(r.t['1yq3nJ'])
                    }),
                    (0, i.jsx)('div', {
                        className: s.buttonContainer,
                        children: (0, i.jsx)(l.Button, {
                            onClick: a,
                            children: r.intl.string(r.t.hLw0wc)
                        })
                    })
                ]
            })
        ]
    });
};
