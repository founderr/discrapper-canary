var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(772848),
    a = n(841261);
let c = (0, l.Z)();
i.Z = (e) => {
    let { open: i, className: n, withHighlight: o = !1 } = e;
    return (0, t.jsxs)('svg', {
        width: '18',
        height: '18',
        className: r()(a.button, n, {
            [a.open]: i,
            [a.withHighlight]: o
        }),
        children: [
            o &&
                (0, t.jsx)('defs', {
                    children: (0, t.jsxs)('linearGradient', {
                        id: c,
                        x1: '0',
                        y1: '0',
                        x2: '0',
                        y2: '18',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, t.jsx)('stop', {
                                offset: '0',
                                stopColor: '#B473F5'
                            }),
                            (0, t.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E292AA'
                            })
                        ]
                    })
                }),
            (0, t.jsxs)('g', {
                fill: 'none',
                fillRule: 'evenodd',
                children: [
                    (0, t.jsx)('path', { d: 'M0 0h18v18H0' }),
                    (0, t.jsx)('path', {
                        stroke: o ? 'url(#'.concat(c, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, t.jsx)('path', {
                        stroke: o ? 'url(#'.concat(c, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
