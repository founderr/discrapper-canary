n.d(t, {
    Ux: function () {
        return o;
    },
    pT: function () {
        return l;
    },
    yC: function () {
        return c;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    s = n(879137);
function o(e) {
    let { text: t, children: n } = e;
    return (0, a.jsxs)('div', {
        className: s.valueProp,
        children: [
            (0, a.jsx)('div', {
                className: s.valuePropIconContainer,
                children: n
            }),
            (0, a.jsx)(r.Text, {
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
function l(e) {
    let { title: t, bulletPoints: n, icon: o } = e;
    return (0, a.jsxs)('div', {
        className: s.bulletedValueProp,
        children: [
            (0, a.jsx)('div', {
                className: s.valuePropIconContainer,
                children: o
            }),
            (0, a.jsxs)('div', {
                className: s.bulletPointsContainer,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, a.jsx)('div', {
                        className: s.bulletPoints,
                        children: n.map((e) =>
                            (0, a.jsxs)(
                                'div',
                                {
                                    className: s.bulletPoint,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: '\u2022'
                                        }),
                                        (0, a.jsx)(r.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            className: s.bulletPointText,
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
function c(e) {
    let { children: t } = e;
    return (0, a.jsx)('div', {
        className: s.valuePropContainer,
        children: t
    });
}
