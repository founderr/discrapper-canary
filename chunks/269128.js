var i = t(200651);
t(192379);
var r = t(120356),
    o = t.n(r),
    a = t(772848),
    l = t(718922);
let c = (0, a.Z)();
n.Z = (e) => {
    let { open: n, className: t, withHighlight: r = !1 } = e;
    return (0, i.jsxs)('svg', {
        width: '18',
        height: '18',
        className: o()(l.button, t, {
            [l.open]: n,
            [l.withHighlight]: r
        }),
        children: [
            r &&
                (0, i.jsx)('defs', {
                    children: (0, i.jsxs)('linearGradient', {
                        id: c,
                        x1: '0',
                        y1: '0',
                        x2: '0',
                        y2: '18',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, i.jsx)('stop', {
                                offset: '0',
                                stopColor: '#B473F5'
                            }),
                            (0, i.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E292AA'
                            })
                        ]
                    })
                }),
            (0, i.jsxs)('g', {
                fill: 'none',
                fillRule: 'evenodd',
                children: [
                    (0, i.jsx)('path', { d: 'M0 0h18v18H0' }),
                    (0, i.jsx)('path', {
                        stroke: r ? 'url(#'.concat(c, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, i.jsx)('path', {
                        stroke: r ? 'url(#'.concat(c, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
