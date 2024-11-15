e.d(n, {
    Z: function () {
        return r;
    }
});
var i = e(200651);
e(192379);
var o = e(481060),
    s = e(324394);
function r(t) {
    let { heroImageSrc: n, heroImageAlt: e, children: r, header: a, description: c } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: e,
                className: s.heroImage
            }),
            (0, i.jsxs)(o.ModalContent, {
                className: s.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: s.textContainer,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: a
                            }),
                            null != c &&
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    className: s.description,
                                    children: c
                                })
                        ]
                    }),
                    r
                ]
            })
        ]
    });
}
