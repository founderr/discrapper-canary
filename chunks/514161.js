n.d(t, {
    Ux: function () {
        return o;
    },
    pT: function () {
        return s;
    },
    yC: function () {
        return i;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    l = n(879137);
function o(e) {
    let { text: t, children: n } = e;
    return (0, a.jsxs)('div', {
        className: l.valueProp,
        children: [
            (0, a.jsx)('div', {
                className: l.valuePropIconContainer,
                children: n
            }),
            (0, a.jsx)(r.Text, {
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
function s(e) {
    let { title: t, bulletPoints: n, icon: o } = e;
    return (0, a.jsxs)('div', {
        className: l.bulletedValueProp,
        children: [
            (0, a.jsx)('div', {
                className: l.valuePropIconContainer,
                children: o
            }),
            (0, a.jsxs)('div', {
                className: l.bulletPointsContainer,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, a.jsx)('div', {
                        className: l.bulletPoints,
                        children: n.map((e) =>
                            (0, a.jsxs)(
                                'div',
                                {
                                    className: l.bulletPoint,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: '\u2022'
                                        }),
                                        (0, a.jsx)(r.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            className: l.bulletPointText,
                                            children: e
                                        })
                                    ]
                                },
                                e
                            )
                        )
                    })
                ]
            })
        ]
    });
}
function i(e) {
    let { children: t } = e;
    return (0, a.jsx)('div', {
        className: l.valuePropContainer,
        children: t
    });
}
