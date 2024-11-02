e.d(n, {
    Z: function () {
        return c;
    }
});
var i = e(200651),
    r = e(192379),
    a = e(481060),
    s = e(511010),
    o = e(126743),
    l = e(444812);
function c(t) {
    let { headerText: n, secondaryHeaderText: e, descriptionText: c, infoRows: d, onDismissAndStay: u, onDismissAndLeave: _, leaveButtonText: x, stayButtonText: m, transitionState: h, impression: f } = t;
    return (0, i.jsxs)(a.ModalRoot, {
        transitionState: h,
        impression: f,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: o.headerImage,
                src: l
            }),
            (0, i.jsxs)(a.ModalHeader, {
                separator: !1,
                className: o.header,
                children: [
                    (0, i.jsxs)(a.Heading, {
                        variant: 'heading-lg/bold',
                        className: o.title,
                        children: [
                            n,
                            null != e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)('br', {}), e]
                                })
                        ]
                    }),
                    null != c &&
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: c
                        })
                ]
            }),
            (0, i.jsxs)(a.ModalContent, {
                className: o.content,
                children: [
                    (0, i.jsx)('div', {
                        className: o.infoGroup,
                        children: d.map((t, n) =>
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: o.infoRow,
                                            children: [
                                                t.icon,
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-md/medium',
                                                    children: t.text
                                                })
                                            ]
                                        }),
                                        n < d.length - 1 && (0, i.jsx)(s.Z, {})
                                    ]
                                },
                                n
                            )
                        )
                    }),
                    (0, i.jsxs)('div', {
                        className: o.buttonGroup,
                        children: [
                            (0, i.jsx)(a.Button, {
                                type: 'submit',
                                color: a.Button.Colors.BRAND,
                                size: a.Button.Sizes.MEDIUM,
                                onClick: _,
                                children: x
                            }),
                            (0, i.jsx)(a.Button, {
                                color: a.Button.Colors.PRIMARY,
                                onClick: u,
                                children: m
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
