t.r(i);
var n = t(200651);
t(192379);
var a = t(481060),
    l = t(230711),
    o = t(187819),
    s = t(181211),
    r = t(188879),
    c = t(981631),
    d = t(726985),
    u = t(388032),
    m = t(280322),
    h = t(170143);
i.default = (e) => {
    let { transitionState: i, onClose: t, classificationId: p, source: x } = e,
        f = (0, s.Z)(),
        g = (0, o._p)({ location: 'classification-detail-modal' }),
        v = () => {
            t(), g ? l.Z.open(c.oAB.ACCOUNT, d.s6.PRIVACY_AND_SAFETY_STANDING) : l.Z.open(c.oAB.PRIVACY_AND_SAFETY, d.s6.PRIVACY_ACCOUNT_STANDING);
        };
    return (0, n.jsxs)(a.ModalRoot, {
        className: m.modalRoot,
        transitionState: i,
        children: [
            (0, n.jsxs)('div', {
                className: m.modalHeader,
                children: [
                    (0, n.jsx)('img', {
                        className: m.image,
                        src: h,
                        alt: ''
                    }),
                    (0, n.jsx)(a.ModalCloseButton, {
                        className: m.modalClose,
                        onClick: t
                    })
                ]
            }),
            (0, n.jsx)(a.ModalContent, {
                className: m.modalContent,
                children: f
                    ? (0, n.jsx)(a.Spinner, {})
                    : (0, n.jsx)(r.Z, {
                          classificationId: p,
                          source: x,
                          onError: v
                      })
            }),
            (0, n.jsx)(a.ModalFooter, {
                children: (0, n.jsx)(a.Button, {
                    className: m.__invalid_button,
                    type: 'button',
                    color: a.Button.Colors.BRAND,
                    onClick: v,
                    children: u.intl.string(u.t.elrEjI)
                })
            })
        ]
    });
};
