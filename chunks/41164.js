i.r(t);
var n = i(200651);
i(192379);
var a = i(481060),
    l = i(230711),
    o = i(187819),
    s = i(181211),
    r = i(188879),
    c = i(981631),
    d = i(726985),
    u = i(388032),
    m = i(280322),
    h = i(170143);
t.default = (e) => {
    let { transitionState: t, onClose: i, classificationId: p, source: x } = e,
        f = (0, s.Z)(),
        g = (0, o._p)({ location: 'classification-detail-modal' }),
        v = () => {
            i(), g ? l.Z.open(c.oAB.ACCOUNT, d.s6.PRIVACY_AND_SAFETY_STANDING) : l.Z.open(c.oAB.PRIVACY_AND_SAFETY, d.s6.PRIVACY_ACCOUNT_STANDING);
        };
    return (0, n.jsxs)(a.ModalRoot, {
        className: m.modalRoot,
        transitionState: t,
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
                        onClick: i
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
                          onError: v,
                          onClose: v
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
