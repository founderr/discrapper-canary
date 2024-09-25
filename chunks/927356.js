i.d(t, {
    Z: function () {
        return u;
    }
});
var n = i(735250),
    a = i(470079),
    r = i(120356),
    s = i.n(r),
    o = i(481060),
    l = i(689938),
    c = i(202371),
    d = i(902294);
function u(e) {
    let { heading: t = l.Z.Messages.APP_DIRECTORY_ERROR_HEADING, body: i = l.Z.Messages.APP_DIRECTORY_ERROR_BODY, className: r } = e;
    return (0, n.jsxs)('div', {
        className: s()(c.container, r),
        children: [
            (0, n.jsx)('img', {
                className: c.image,
                src: d,
                alt: l.Z.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
            }),
            (0, n.jsxs)(a.Fragment, {
                children: [
                    (0, n.jsx)(o.Heading, {
                        className: c.header,
                        variant: 'heading-xl/semibold',
                        children: t
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: i
                    })
                ]
            })
        ]
    });
}
