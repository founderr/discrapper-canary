var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(641388);
let s = r.forwardRef(function (e, t) {
    let { title: n, subtitle: r, icon: s, style: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                style: o,
                className: l.sectionContainer,
                children: (0, i.jsxs)('div', {
                    className: l.sectionHeader,
                    children: [
                        (0, i.jsxs)('div', {
                            className: l.sectionHeaderTitle,
                            children: [
                                s,
                                (0, i.jsx)(a.Heading, {
                                    variant: 'heading-lg/medium',
                                    color: 'header-primary',
                                    children: n
                                })
                            ]
                        }),
                        null != r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', { className: l.sectionHeaderSpacer }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: r
                                    })
                                ]
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', { ref: t })
        ]
    });
});
t.Z = r.memo(s);
