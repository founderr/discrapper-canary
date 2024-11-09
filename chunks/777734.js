var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(641388);
let s = r.forwardRef(function (e, t) {
    let { title: n, subtitle: r, icon: s, style: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                style: o,
                className: a.sectionContainer,
                children: (0, i.jsxs)('div', {
                    className: a.sectionHeader,
                    children: [
                        (0, i.jsxs)('div', {
                            className: a.sectionHeaderTitle,
                            children: [
                                s,
                                (0, i.jsx)(l.Heading, {
                                    variant: 'heading-lg/medium',
                                    color: 'header-primary',
                                    children: n
                                })
                            ]
                        }),
                        null != r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', { className: a.sectionHeaderSpacer }),
                                    (0, i.jsx)(l.Text, {
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
