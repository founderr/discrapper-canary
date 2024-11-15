var o = t(200651);
t(192379);
var n = t(120356),
    a = t.n(n),
    i = t(772848),
    s = t(718922);
let l = (0, i.Z)();
r.Z = (e) => {
    let { open: r, className: t, withHighlight: n = !1 } = e;
    return (0, o.jsxs)('svg', {
        width: '18',
        height: '18',
        className: a()(s.button, t, {
            [s.open]: r,
            [s.withHighlight]: n
        }),
        children: [
            n &&
                (0, o.jsx)('defs', {
                    children: (0, o.jsxs)('linearGradient', {
                        id: l,
                        x1: '0',
                        y1: '0',
                        x2: '0',
                        y2: '18',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, o.jsx)('stop', {
                                offset: '0',
                                stopColor: '#B473F5'
                            }),
                            (0, o.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E292AA'
                            })
                        ]
                    })
                }),
            (0, o.jsxs)('g', {
                fill: 'none',
                fillRule: 'evenodd',
                children: [
                    (0, o.jsx)('path', { d: 'M0 0h18v18H0' }),
                    (0, o.jsx)('path', {
                        stroke: n ? 'url(#'.concat(l, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, o.jsx)('path', {
                        stroke: n ? 'url(#'.concat(l, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
