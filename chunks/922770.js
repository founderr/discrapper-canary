n.d(t, {
    $: function () {
        return _;
    },
    R: function () {
        return r;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(186325),
    u = n(689938),
    c = n(987454);
function d(e) {
    switch (e) {
        case 'wanderingCubes':
        case 'chasingDots':
            return 'lowMotion';
        default:
            return e;
    }
}
function _(e) {
    let { type: t = 'wanderingCubes', animated: n = !0, className: r, itemClassName: o, 'aria-label': _, ...E } = e,
        { reducedMotion: f } = a.useContext(l.S),
        h = f.enabled ? d(t) : t;
    if (((_ = null != _ ? _ : u.Z.Messages.LOADING), 'spinningCircle' === h || 'spinningCircleSimple' === h))
        return (0, i.jsx)('div', {
            className: s()(c.spinner, c[h], r, { [c.stopAnimation]: !n }),
            role: 'img',
            'aria-label': _,
            ...E,
            children: (0, i.jsx)('div', {
                className: c.spinningCircleInner,
                children: (0, i.jsxs)('svg', {
                    className: c.circular,
                    viewBox: '25 25 50 50',
                    children: [
                        'spinningCircle' === h &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('circle', {
                                        className: s()(c.path, c.path3, o),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    }),
                                    (0, i.jsx)('circle', {
                                        className: s()(c.path, c.path2, o),
                                        cx: '50',
                                        cy: '50',
                                        r: '20'
                                    })
                                ]
                            }),
                        (0, i.jsx)('circle', {
                            className: s()(c.path, o),
                            cx: '50',
                            cy: '50',
                            r: '20'
                        })
                    ]
                })
            })
        });
    let p = s()(c.item, o);
    return (0, i.jsx)('span', {
        className: s()(c.spinner, r, { [c.stopAnimation]: !n }),
        role: 'img',
        'aria-label': _,
        ...E,
        children: (0, i.jsxs)('span', {
            className: s()(c.inner, c[h]),
            children: [(0, i.jsx)('span', { className: p }), (0, i.jsx)('span', { className: p }), 'pulsingEllipsis' === h || 'lowMotion' === h ? (0, i.jsx)('span', { className: p }) : null]
        })
    });
}
!(function (e) {
    (e.WANDERING_CUBES = 'wanderingCubes'), (e.CHASING_DOTS = 'chasingDots'), (e.PULSING_ELLIPSIS = 'pulsingEllipsis'), (e.SPINNING_CIRCLE = 'spinningCircle'), (e.SPINNING_CIRCLE_SIMPLE = 'spinningCircleSimple'), (e.LOW_MOTION = 'lowMotion');
})(r || (r = {})),
    (_.Type = r);
