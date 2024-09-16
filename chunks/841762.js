t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var i = t(735250),
    r = t(470079),
    l = t(120356),
    o = t.n(l),
    u = t(481060),
    s = t(456692);
function a(e) {
    let { alt: n, ...t } = e,
        [l, o] = r.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                (0, i.jsx)(u.Spinner, {
                    type: u.Spinner.Type.LOW_MOTION,
                    className: s.loader
                }),
            (0, i.jsx)('img', {
                ...t,
                alt: n,
                onLoad: () => o(!1)
            })
        ]
    });
}
function c(e) {
    let { src: n, backgroundSrc: t, alt: r, aspectRatio: l, className: u, imageChildClassName: c, ...d } = e;
    return (0, i.jsxs)('div', {
        className: o()(s.container, u),
        children: [
            (0, i.jsx)('img', {
                src: t,
                alt: r,
                className: s.backgroundImage
            }),
            (0, i.jsx)('div', { className: s.backgroundImageFilter }),
            (0, i.jsx)('div', {
                style: { aspectRatio: l },
                className: s.imageContainer,
                children: (0, i.jsx)(a, {
                    src: n,
                    alt: r,
                    className: o()(s.image, c),
                    ...d
                })
            })
        ]
    });
}
