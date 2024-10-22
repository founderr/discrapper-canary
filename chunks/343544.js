s.d(n, {
    Z: function () {
        return c;
    }
});
var t = s(200651),
    a = s(192379),
    o = s(481060),
    r = s(511010),
    _ = s(126743),
    i = s(444812);
function c(e) {
    let { headerText: n, secondaryHeaderText: s, descriptionText: c, infoRows: d, onDismissAndStay: l, onDismissAndLeave: E, leaveButtonText: u, stayButtonText: N, transitionState: R, impression: M } = e;
    return (0, t.jsxs)(o.ModalRoot, {
        transitionState: R,
        impression: M,
        children: [
            (0, t.jsx)('img', {
                alt: '',
                className: _.headerImage,
                src: i
            }),
            (0, t.jsxs)(o.ModalHeader, {
                separator: !1,
                className: _.header,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: 'heading-lg/bold',
                        className: _.title,
                        children: [
                            n,
                            null != s &&
                                (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)('br', {}), s]
                                })
                        ]
                    }),
                    null != c &&
                        (0, t.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: c
                        })
                ]
            }),
            (0, t.jsxs)(o.ModalContent, {
                className: _.content,
                children: [
                    (0, t.jsx)('div', {
                        className: _.infoGroup,
                        children: d.map((e, n) =>
                            (0, t.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, t.jsxs)('div', {
                                            className: _.infoRow,
                                            children: [
                                                e.icon,
                                                (0, t.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        n < d.length - 1 && (0, t.jsx)(r.Z, {})
                                    ]
                                },
                                n
                            )
                        )
                    }),
                    (0, t.jsxs)('div', {
                        className: _.buttonGroup,
                        children: [
                            (0, t.jsx)(o.Button, {
                                type: 'submit',
                                color: o.Button.Colors.BRAND,
                                size: o.Button.Sizes.MEDIUM,
                                onClick: E,
                                children: u
                            }),
                            (0, t.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: l,
                                children: N
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
