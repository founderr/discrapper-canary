var r = n(200651),
    i = n(192379),
    a = n(397963),
    s = n(987817),
    o = n(259229);
let l = (0, a.iS)((e) =>
    (0, r.jsxs)('div', {
        className: o.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: o.saturation,
                children: (0, r.jsx)(s.Saturation, { ...e })
            }),
            (0, r.jsx)('div', {
                className: o.hue,
                children: (0, r.jsx)(s.Hue, {
                    ...e,
                    direction: 'horizontal'
                })
            })
        ]
    })
);
t.Z = i.memo(l);
