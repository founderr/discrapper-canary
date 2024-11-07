var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(261441);
t.Z = (e) => {
    let { icon: t, iconClassName: n, header: r, description: o } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)('div', {
                className: l.circle,
                children: (0, i.jsx)(t, {
                    className: a()(l.icon, n),
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-md/bold',
                        className: l.header,
                        children: (0, i.jsx)(s.HeadingLevel, { children: r })
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: o
                    })
                ]
            })
        ]
    });
};
