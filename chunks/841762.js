e.d(n, {
    Z: function () {
        return d;
    }
}),
    e(47120);
var a = e(200651),
    i = e(192379),
    r = e(120356),
    o = e.n(r),
    l = e(481060),
    c = e(542508);
function s(t) {
    let { alt: n, ...e } = t,
        [r, o] = i.useState(!0);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            r &&
                (0, a.jsx)(l.Spinner, {
                    type: l.Spinner.Type.LOW_MOTION,
                    className: c.loader
                }),
            (0, a.jsx)('img', {
                ...e,
                alt: n,
                onLoad: () => o(!1)
            })
        ]
    });
}
function d(t) {
    let { src: n, backgroundSrc: e, alt: i, aspectRatio: r, className: l, imageChildClassName: d, ...u } = t;
    return (0, a.jsxs)('div', {
        className: o()(c.container, l),
        children: [
            (0, a.jsx)('img', {
                src: e,
                alt: i,
                className: c.backgroundImage
            }),
            (0, a.jsx)('div', { className: c.backgroundImageFilter }),
            (0, a.jsx)('div', {
                style: { aspectRatio: r },
                className: c.imageContainer,
                children: (0, a.jsx)(s, {
                    src: n,
                    alt: i,
                    className: o()(c.image, d),
                    ...u
                })
            })
        ]
    });
}
