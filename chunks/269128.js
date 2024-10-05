var o = t(735250);
t(470079);
var r = t(120356),
    a = t.n(r),
    i = t(772848),
    c = t(841261);
let l = (0, i.Z)();
n.Z = (e) => {
    let { open: n, className: t, withHighlight: r = !1 } = e;
    return (0, o.jsxs)('svg', {
        width: '18',
        height: '18',
        className: a()(c.button, t, {
            [c.open]: n,
            [c.withHighlight]: r
        }),
        children: [
            r &&
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
                        stroke: r ? 'url(#'.concat(l, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, o.jsx)('path', {
                        stroke: r ? 'url(#'.concat(l, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
