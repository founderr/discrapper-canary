var n = r(200651);
r(192379);
var o = r(120356),
    i = r.n(o),
    a = r(772848),
    s = r(363969);
let c = (0, a.Z)();
t.Z = (e) => {
    let { open: t, className: r, withHighlight: o = !1 } = e;
    return (0, n.jsxs)('svg', {
        width: '18',
        height: '18',
        className: i()(s.button, r, {
            [s.open]: t,
            [s.withHighlight]: o
        }),
        children: [
            o &&
                (0, n.jsx)('defs', {
                    children: (0, n.jsxs)('linearGradient', {
                        id: c,
                        x1: '0',
                        y1: '0',
                        x2: '0',
                        y2: '18',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, n.jsx)('stop', {
                                offset: '0',
                                stopColor: '#B473F5'
                            }),
                            (0, n.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E292AA'
                            })
                        ]
                    })
                }),
            (0, n.jsxs)('g', {
                fill: 'none',
                fillRule: 'evenodd',
                children: [
                    (0, n.jsx)('path', { d: 'M0 0h18v18H0' }),
                    (0, n.jsx)('path', {
                        stroke: o ? 'url(#'.concat(c, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, n.jsx)('path', {
                        stroke: o ? 'url(#'.concat(c, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
