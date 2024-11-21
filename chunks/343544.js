n.d(t, {
    Z: function () {
        return _;
    }
});
var a = n(200651),
    i = n(192379),
    o = n(120356),
    s = n.n(o),
    r = n(481060),
    l = n(511010),
    d = n(922611),
    c = n(126743),
    u = n(444812);
function _(e) {
    let { headerText: t, secondaryHeaderText: n, descriptionText: o, infoRows: _, onDismissAndStay: m, onDismissAndLeave: x, leaveButtonText: h, stayButtonText: g, transitionState: f, impression: j } = e,
        p = (0, d.Do)({ location: 'blocked_user_warning_modal' });
    return (0, a.jsxs)(r.ModalRoot, {
        transitionState: f,
        impression: j,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                className: c.headerImage,
                src: u
            }),
            (0, a.jsxs)(r.ModalHeader, {
                separator: !1,
                className: c.header,
                children: [
                    (0, a.jsxs)(r.Heading, {
                        variant: p ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: p ? 'header-primary' : void 0,
                        className: c.title,
                        children: [
                            t,
                            null != n &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)('br', {}), n]
                                })
                        ]
                    }),
                    null != o &&
                        (0, a.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: o
                        })
                ]
            }),
            (0, a.jsxs)(r.ModalContent, {
                className: c.content,
                children: [
                    (0, a.jsx)('div', {
                        className: c.infoGroup,
                        children: _.map((e, t) =>
                            (0, a.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: s()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, a.jsx)(r.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < _.length - 1 && (0, a.jsx)(l.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, a.jsxs)('div', {
                        className: c.buttonGroup,
                        children: [
                            (0, a.jsx)(r.Button, {
                                color: r.Button.Colors.PRIMARY,
                                onClick: m,
                                children: g
                            }),
                            (0, a.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                size: r.Button.Sizes.MEDIUM,
                                onClick: x,
                                className: c.leave,
                                children: h
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
