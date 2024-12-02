var r = o(200651);
o(192379);
var n = o(120356),
    a = o.n(n),
    i = o(772848),
    s = o(363969);
let d = (0, i.Z)();
t.Z = (e) => {
    let { open: t, className: o, withHighlight: n = !1 } = e;
    return (0, r.jsxs)('svg', {
        width: '18',
        height: '18',
        className: a()(s.button, o, {
            [s.open]: t,
            [s.withHighlight]: n
        }),
        children: [
            n &&
                (0, r.jsx)('defs', {
                    children: (0, r.jsxs)('linearGradient', {
                        id: d,
                        x1: '0',
                        y1: '0',
                        x2: '0',
                        y2: '18',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, r.jsx)('stop', {
                                offset: '0',
                                stopColor: '#B473F5'
                            }),
                            (0, r.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E292AA'
                            })
                        ]
                    })
                }),
            (0, r.jsxs)('g', {
                fill: 'none',
                fillRule: 'evenodd',
                children: [
                    (0, r.jsx)('path', { d: 'M0 0h18v18H0' }),
                    (0, r.jsx)('path', {
                        stroke: n ? 'url(#'.concat(d, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, r.jsx)('path', {
                        stroke: n ? 'url(#'.concat(d, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
