var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(772848),
    l = n(841261);
let s = (0, a.Z)();
t.Z = (e) => {
    let { open: t, className: n, withHighlight: i = !1 } = e;
    return (0, r.jsxs)('svg', {
        width: '18',
        height: '18',
        className: o()(l.button, n, {
            [l.open]: t,
            [l.withHighlight]: i
        }),
        children: [
            i &&
                (0, r.jsx)('defs', {
                    children: (0, r.jsxs)('linearGradient', {
                        id: s,
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
                        stroke: i ? 'url(#'.concat(s, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, r.jsx)('path', {
                        stroke: i ? 'url(#'.concat(s, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
