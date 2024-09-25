var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    r = n(772848),
    s = n(841261);
let l = (0, r.Z)();
t.Z = (e) => {
    let { open: t, className: n, withHighlight: a = !1 } = e;
    return (0, i.jsxs)('svg', {
        width: '18',
        height: '18',
        className: o()(s.button, n, {
            [s.open]: t,
            [s.withHighlight]: a
        }),
        children: [
            a &&
                (0, i.jsx)('defs', {
                    children: (0, i.jsxs)('linearGradient', {
                        id: l,
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
                        stroke: a ? 'url(#'.concat(l, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, i.jsx)('path', {
                        stroke: a ? 'url(#'.concat(l, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
