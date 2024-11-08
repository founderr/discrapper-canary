t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    l = t(120356),
    o = t.n(l),
    u = t(481060),
    a = t(154328);
function s(e) {
    let { alt: n, ...t } = e,
        [l, o] = r.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                (0, i.jsx)(u.Spinner, {
                    type: u.Spinner.Type.LOW_MOTION,
                    className: a.loader
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
        className: o()(a.container, u),
        children: [
            (0, i.jsx)('img', {
                src: t,
                alt: r,
                className: a.backgroundImage
            }),
            (0, i.jsx)('div', { className: a.backgroundImageFilter }),
            (0, i.jsx)('div', {
                style: { aspectRatio: l },
                className: a.imageContainer,
                children: (0, i.jsx)(s, {
                    src: n,
                    alt: r,
                    className: o()(a.image, c),
                    ...d
                })
            })
        ]
    });
}
