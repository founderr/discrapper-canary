n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(456692);
function c(e) {
    let { alt: t, ...n } = e,
        [r, o] = a.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r &&
                (0, i.jsx)(l.Spinner, {
                    type: l.Spinner.Type.LOW_MOTION,
                    className: u.loader
                }),
            (0, i.jsx)('img', {
                ...n,
                alt: t,
                onLoad: () => o(!1)
            })
        ]
    });
}
function d(e) {
    let { src: t, backgroundSrc: n, alt: r, aspectRatio: a, className: o, imageChildClassName: l, ...d } = e;
    return (0, i.jsxs)('div', {
        className: s()(u.container, o),
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: r,
                className: u.backgroundImage
            }),
            (0, i.jsx)('div', { className: u.backgroundImageFilter }),
            (0, i.jsx)('div', {
                style: { aspectRatio: a },
                className: u.imageContainer,
                children: (0, i.jsx)(c, {
                    src: t,
                    alt: r,
                    className: s()(u.image, l),
                    ...d
                })
            })
        ]
    });
}
