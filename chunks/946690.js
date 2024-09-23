var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    o = n(290891);
t.Z = (e) => {
    let { icon: t, iconClassName: n, header: a, description: l } = e;
    return (0, s.jsxs)('div', {
        className: o.container,
        children: [
            (0, s.jsx)('div', {
                className: o.circle,
                children: (0, s.jsx)(t, {
                    className: r()(o.icon, n),
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(i.Heading, {
                        variant: 'heading-md/bold',
                        className: o.header,
                        children: (0, s.jsx)(i.HeadingLevel, { children: a })
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: l
                    })
                ]
            })
        ]
    });
};
