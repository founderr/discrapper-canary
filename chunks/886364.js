var i = n(200651);
n(192379);
t.Z = (e) => {
    let { id: t, startColor: n, stopColor: r, color: l, stop: a } = e;
    return (0, i.jsxs)('linearGradient', {
        id: t,
        children: [
            (0, i.jsx)('stop', {
                offset: '0',
                stopColor: n
            }),
            (0, i.jsx)('stop', {
                offset: a,
                stopColor: r
            }),
            (0, i.jsx)('stop', {
                offset: a,
                stopColor: l
            }),
            (0, i.jsx)('stop', {
                offset: '1',
                stopColor: l
            })
        ]
    });
};
