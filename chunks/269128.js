var t = i(735250);
i(470079);
var o = i(120356),
    a = i.n(o),
    r = i(772848),
    l = i(235532);
let s = (0, r.Z)();
n.Z = (e) => {
    let { open: n, className: i, withHighlight: o = !1 } = e;
    return (0, t.jsxs)('svg', {
        width: '18',
        height: '18',
        className: a()(l.button, i, {
            [l.open]: n,
            [l.withHighlight]: o
        }),
        children: [
            o &&
                (0, t.jsx)('defs', {
                    children: (0, t.jsxs)('linearGradient', {
                        id: s,
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
                        stroke: o ? 'url(#'.concat(s, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, t.jsx)('path', {
                        stroke: o ? 'url(#'.concat(s, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
