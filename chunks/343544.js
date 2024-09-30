t.d(n, {
    Z: function () {
        return l;
    }
});
var s = t(735250),
    a = t(470079),
    o = t(481060),
    r = t(511010),
    i = t(126743),
    _ = t(444812);
function l(e) {
    let { headerText: n, secondaryHeaderText: t, descriptionText: l, infoRows: d, onDismissAndStay: c, onDismissAndLeave: u, leaveButtonText: E, stayButtonText: N, transitionState: M } = e;
    return (0, s.jsxs)(o.ModalRoot, {
        transitionState: M,
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: i.headerImage,
                src: _
            }),
            (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                className: i.header,
                children: [
                    (0, s.jsxs)(o.Heading, {
                        variant: 'heading-lg/bold',
                        className: i.title,
                        children: [
                            n,
                            null != t &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)('br', {}), t]
                                })
                        ]
                    }),
                    null != l &&
                        (0, s.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: l
                        })
                ]
            }),
            (0, s.jsxs)(o.ModalContent, {
                className: i.content,
                children: [
                    (0, s.jsx)('div', {
                        className: i.infoGroup,
                        children: d.map((e, n) =>
                            (0, s.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: i.infoRow,
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
                        className: i.buttonGroup,
                        children: [
                            (0, s.jsx)(o.Button, {
                                type: 'submit',
                                color: o.Button.Colors.BRAND,
                                size: o.Button.Sizes.MEDIUM,
                                onClick: u,
                                children: E
                            }),
                            (0, s.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: c,
                                children: N
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
