n.r(i);
var t = n(735250);
n(470079);
var a = n(481060),
    l = n(230711),
    s = n(187819),
    o = n(181211),
    r = n(188879),
    c = n(981631),
    d = n(726985),
    m = n(689938),
    u = n(105548),
    _ = n(170143);
i.default = (e) => {
    let { transitionState: i, onClose: n, classificationId: h, source: A } = e,
        p = (0, o.Z)(),
        I = (0, s._p)({ location: 'classification-detail-modal' }),
        x = () => {
            n(), I ? l.Z.open(c.oAB.ACCOUNT, d.s6.PRIVACY_AND_SAFETY_STANDING) : l.Z.open(c.oAB.PRIVACY_AND_SAFETY, d.s6.PRIVACY_ACCOUNT_STANDING);
        };
    return (0, t.jsxs)(a.ModalRoot, {
        className: u.modalRoot,
        transitionState: i,
        children: [
            (0, t.jsxs)('div', {
                className: u.modalHeader,
                children: [
                    (0, t.jsx)('img', {
                        className: u.image,
                        src: _,
                        alt: ''
                    }),
                    (0, t.jsx)(a.ModalCloseButton, {
                        className: u.modalClose,
                        onClick: n
                    })
                ]
            }),
            (0, t.jsx)(a.ModalContent, {
                className: u.modalContent,
                children: p
                    ? (0, t.jsx)(a.Spinner, {})
                    : (0, t.jsx)(r.Z, {
                          classificationId: h,
                          source: A,
                          onError: x
                      })
            }),
            (0, t.jsx)(a.ModalFooter, {
                children: (0, t.jsx)(a.Button, {
                    className: u.__invalid_button,
                    type: 'button',
                    color: a.Button.Colors.BRAND,
                    onClick: x,
                    children: m.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2
                })
            })
        ]
    });
};
