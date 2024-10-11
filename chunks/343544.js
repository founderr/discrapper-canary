t.d(n, {
    Z: function () {
        return c;
    }
});
var s = t(735250),
    a = t(470079),
    o = t(481060),
    r = t(511010),
    _ = t(126743),
    i = t(444812);
function c(e) {
    let { headerText: n, secondaryHeaderText: t, descriptionText: c, infoRows: d, onDismissAndStay: l, onDismissAndLeave: E, leaveButtonText: u, stayButtonText: N, transitionState: M } = e;
    return (0, s.jsxs)(o.ModalRoot, {
        transitionState: M,
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: _.headerImage,
                src: i
            }),
            (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                className: _.header,
                children: [
                    (0, s.jsxs)(o.Heading, {
                        variant: 'heading-lg/bold',
                        className: _.title,
                        children: [
                            n,
                            null != t &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)('br', {}), t]
                                })
                        ]
                    }),
                    null != c &&
                        (0, s.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: c
                        })
                ]
            }),
            (0, s.jsxs)(o.ModalContent, {
                className: _.content,
                children: [
                    (0, s.jsx)('div', {
                        className: _.infoGroup,
                        children: d.map((e, n) =>
                            (0, s.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: _.infoRow,
                                            children: [
                                                e.icon,
                                                (0, s.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        n < d.length - 1 && (0, s.jsx)(r.Z, {})
                                    ]
                                },
                                n
                            )
                        )
                    }),
                    (0, s.jsxs)('div', {
                        className: _.buttonGroup,
                        children: [
                            (0, s.jsx)(o.Button, {
                                type: 'submit',
                                color: o.Button.Colors.BRAND,
                                size: o.Button.Sizes.MEDIUM,
                                onClick: E,
                                children: u
                            }),
                            (0, s.jsx)(o.Button, {
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
