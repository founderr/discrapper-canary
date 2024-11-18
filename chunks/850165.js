e.d(n, {
    Z: function () {
        return s;
    }
});
var r = e(200651);
e(192379);
var i = e(481060),
    o = e(324394);
function s(t) {
    let { heroImageSrc: n, heroImageAlt: e, children: s, header: a, description: c } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: e,
                className: o.heroImage
            }),
            (0, r.jsxs)(i.ModalContent, {
                className: o.body,
                children: [
                    (0, r.jsxs)('div', {
                        className: o.textContainer,
                        children: [
                            (0, r.jsx)(i.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: a
                            }),
                            null != c &&
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    className: o.description,
                                    children: c
                                })
                        ]
                    }),
                    s
                ]
            })
        ]
    });
}
