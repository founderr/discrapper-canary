var o = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(772848),
    c = n(841261);
let d = (0, a.Z)();
t.Z = (e) => {
    let { open: t, className: n, withHighlight: r = !1 } = e;
    return (0, o.jsxs)('svg', {
        width: '18',
        height: '18',
        className: i()(c.button, n, {
            [c.open]: t,
            [c.withHighlight]: r
        }),
        children: [
            r &&
                (0, o.jsx)('defs', {
                    children: (0, o.jsxs)('linearGradient', {
                        id: d,
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
                        stroke: r ? 'url(#'.concat(d, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, o.jsx)('path', {
                        stroke: r ? 'url(#'.concat(d, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
