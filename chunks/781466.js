var r = n(470079),
    i = n(844303),
    a = n(818966),
    o = function (e) {
        var t = e.onClick,
            n = e.hsl,
            o = (0, i.default)({
                default: {
                    swatches: { marginTop: '20px' },
                    swatch: {
                        boxSizing: 'border-box',
                        width: '20%',
                        paddingRight: '1px',
                        float: 'left'
                    },
                    clear: { clear: 'both' }
                }
            }),
            s = 0.1;
        return r.createElement(
            'div',
            { style: o.swatches },
            r.createElement(
                'div',
                { style: o.swatch },
                r.createElement(a.Z, {
                    hsl: n,
                    offset: '.80',
                    active: Math.abs(n.l - 0.8) < s && Math.abs(n.s - 0.5) < s,
                    onClick: t,
                    first: !0
                })
            ),
            r.createElement(
                'div',
                { style: o.swatch },
                r.createElement(a.Z, {
                    hsl: n,
                    offset: '.65',
                    active: Math.abs(n.l - 0.65) < s && Math.abs(n.s - 0.5) < s,
                    onClick: t
                })
            ),
            r.createElement(
                'div',
                { style: o.swatch },
                r.createElement(a.Z, {
                    hsl: n,
                    offset: '.50',
                    active: Math.abs(n.l - 0.5) < s && Math.abs(n.s - 0.5) < s,
                    onClick: t
                })
            ),
            r.createElement(
                'div',
                { style: o.swatch },
                r.createElement(a.Z, {
                    hsl: n,
                    offset: '.35',
                    active: Math.abs(n.l - 0.35) < s && Math.abs(n.s - 0.5) < s,
                    onClick: t
                })
            ),
            r.createElement(
                'div',
                { style: o.swatch },
                r.createElement(a.Z, {
                    hsl: n,
                    offset: '.20',
                    active: Math.abs(n.l - 0.2) < s && Math.abs(n.s - 0.5) < s,
                    onClick: t,
                    last: !0
                })
            ),
            r.createElement('div', { style: o.clear })
        );
    };
t.Z = o;
