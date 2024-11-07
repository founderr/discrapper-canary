n.d(t, {
    $: function () {
        return f;
    },
    R: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(186325),
    c = n(388032),
    d = n(86901);
((r = i || (i = {})).WANDERING_CUBES = 'wanderingCubes'), (r.CHASING_DOTS = 'chasingDots'), (r.PULSING_ELLIPSIS = 'pulsingEllipsis'), (r.SPINNING_CIRCLE = 'spinningCircle'), (r.SPINNING_CIRCLE_SIMPLE = 'spinningCircleSimple'), (r.LOW_MOTION = 'lowMotion');
function f(e) {
    let { type: t = 'wanderingCubes', animated: n = !0, className: r, itemClassName: i, 'aria-label': o, ...f } = e,
        { reducedMotion: _ } = s.useContext(u.S),
        h = _.enabled
            ? (function (e) {
                  switch (e) {
                      case 'wanderingCubes':
                      case 'chasingDots':
                          return 'lowMotion';
                      default:
                          return e;
                  }
              })(t)
            : t;
    if (((o = null != o ? o : c.intl.string(c.t.ZTNur6)), 'spinningCircle' === h || 'spinningCircleSimple' === h))
        return (0, a.jsx)('div', {
            className: l()(d.spinner, d[h], r, { [d.stopAnimation]: !n }),
            role: 'img',
            'aria-label': o,
            ...f,
            children: (0, a.jsx)('div', {
                className: d.spinningCircleInner,
                children: (0, a.jsxs)('svg', {
                    className: d.circular,
                    viewBox: '25 25 50 50',
                    children: [
                        'spinningCircle' === h &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('circle', {
                                        className: l()(d.path, d.path3, i),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    }),
                                    (0, a.jsx)('circle', {
                                        className: l()(d.path, d.path2, i),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    })
                                ]
                            }),
                        (0, a.jsx)('circle', {
                            className: l()(d.path, i),
                            cx: '50',
                            cy: '50',
                            r: '20'
                        })
                    ]
                })
            })
        });
    let p = l()(d.item, i);
    return (0, a.jsx)('span', {
        className: l()(d.spinner, r, { [d.stopAnimation]: !n }),
        role: 'img',
        'aria-label': o,
        ...f,
        children: (0, a.jsxs)('span', {
            className: l()(d.inner, d[h]),
            children: [(0, a.jsx)('span', { className: p }), (0, a.jsx)('span', { className: p }), 'pulsingEllipsis' === h || 'lowMotion' === h ? (0, a.jsx)('span', { className: p }) : null]
        })
    });
}
f.Type = i;
