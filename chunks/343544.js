n.d(t, {
    Z: function () {
        return u;
    }
});
var a = n(200651),
    i = n(192379),
    s = n(120356),
    r = n.n(s),
    o = n(481060),
    l = n(511010),
    c = n(126743),
    d = n(444812);
function u(e) {
    let { headerText: t, secondaryHeaderText: n, descriptionText: s, infoRows: u, onDismissAndStay: x, onDismissAndLeave: m, leaveButtonText: _, stayButtonText: h, transitionState: f, impression: g } = e;
    return (0, a.jsxs)(o.ModalRoot, {
        transitionState: f,
        impression: g,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                className: c.headerImage,
                src: d
            }),
            (0, a.jsxs)(o.ModalHeader, {
                separator: !1,
                className: c.header,
                children: [
                    (0, a.jsxs)(o.Heading, {
                        variant: 'heading-lg/bold',
                        className: c.title,
                        children: [
                            t,
                            null != n &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)('br', {}), n]
                                })
                        ]
                    }),
                    null != s &&
                        (0, a.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: s
                        })
                ]
            }),
            (0, a.jsxs)(o.ModalContent, {
                className: c.content,
                children: [
                    (0, a.jsx)('div', {
                        className: c.infoGroup,
                        children: u.map((e, t) =>
                            (0, a.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: r()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, a.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < u.length - 1 && (0, a.jsx)(l.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, a.jsxs)('div', {
                        className: c.buttonGroup,
                        children: [
                            (0, a.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: x,
                                children: h
                            }),
                            (0, a.jsx)(o.Button, {
                                color: o.Button.Colors.BRAND,
                                size: o.Button.Sizes.MEDIUM,
                                onClick: m,
                                className: c.leave,
                                children: _
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
