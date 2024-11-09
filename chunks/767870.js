s.d(t, {
    Z: function () {
        return f;
    }
});
var n = s(200651),
    r = s(120356),
    i = s.n(r),
    o = s(927359),
    a = s(325767),
    l = s(823188),
    c = s(860553);
let d = 'premium_tier_gradient',
    u = 'smaller_sparkle_gradient';
function p(e) {
    let { width: t = 14, height: s = 15, color: r = 'white', foreground: i, ...o } = e;
    return (0, n.jsxs)('svg', {
        ...(0, a.Z)({ ...o }),
        preserveAspectRatio: 'none',
        width: t,
        height: s,
        viewBox: '0 0 14 15',
        className: i,
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, n.jsx)('defs', {
                children: (0, n.jsxs)('linearGradient', {
                    id: d,
                    x1: '0%',
                    y1: '0%',
                    x2: '100%',
                    y2: '0%',
                    children: [
                        (0, n.jsx)('stop', {
                            offset: '0%',
                            stopColor: '#8547C6'
                        }),
                        (0, n.jsx)('stop', {
                            offset: '50%',
                            stopColor: '#B845C1'
                        }),
                        (0, n.jsx)('stop', {
                            offset: '100%',
                            stopColor: '#AB5D8A'
                        })
                    ]
                })
            }),
            (0, n.jsxs)('linearGradient', {
                id: u,
                x1: '-4.95474',
                y1: '5.44067',
                x2: '11.2384',
                y2: '8.58386',
                gradientUnits: 'userSpaceOnUse',
                children: [
                    (0, n.jsx)('stop', { stopColor: '#8547C6' }),
                    (0, n.jsx)('stop', {
                        offset: '0.52899',
                        stopColor: '#B845C1'
                    }),
                    (0, n.jsx)('stop', {
                        offset: '1',
                        stopColor: '#AB5D8A'
                    })
                ]
            }),
            (0, n.jsx)('path', {
                d: 'M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z',
                fill: r
            })
        ]
    });
}
function f(e) {
    let { className: t, endsAt: s, messageStyle: r, upperCase: a, showSparkles: f } = e,
        x = (0, o.Z)(s, r);
    return (
        a && x.toUpperCase(),
        (0, n.jsxs)('div', {
            className: i()(t, c.countDown),
            children: [
                f
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(p, {
                                  foreground: c.sparkleStar1,
                                  color: 'url(#'.concat(u, ')')
                              }),
                              (0, n.jsx)(p, {
                                  foreground: c.sparkleStar2,
                                  color: 'url(#'.concat(d, ')')
                              })
                          ]
                      })
                    : null,
                (0, n.jsx)(l.mn, {
                    text: x,
                    colorOptions: l.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                })
            ]
        })
    );
}
