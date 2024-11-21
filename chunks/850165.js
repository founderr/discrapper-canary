e.d(n, {
    Z: function () {
        return s;
    }
});
var o = e(200651);
e(192379);
var r = e(481060),
    i = e(248296);
function s(t) {
    let { heroImageSrc: n, heroImageAlt: e, children: s, header: a, description: c } = t;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('img', {
                src: n,
                alt: e,
                className: i.heroImage
            }),
            (0, o.jsxs)(r.ModalContent, {
                className: i.body,
                children: [
                    (0, o.jsxs)('div', {
                        className: i.textContainer,
                        children: [
                            (0, o.jsx)(r.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: a
                            }),
                            null != c &&
                                (0, o.jsx)(r.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-secondary',
                                    className: i.description,
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
