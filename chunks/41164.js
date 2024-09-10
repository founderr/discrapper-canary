n.r(i);
var t = n(735250);
n(470079);
var a = n(481060),
    l = n(230711),
    s = n(181211),
    o = n(188879),
    r = n(981631),
    c = n(726985),
    d = n(689938),
    m = n(105548),
    u = n(170143);
i.default = (e) => {
    let { transitionState: i, onClose: n, classificationId: _, source: h } = e,
        A = (0, s.Z)(),
        p = () => {
            n(), l.Z.open(r.oAB.PRIVACY_AND_SAFETY, c.s6.PRIVACY_ACCOUNT_STANDING);
        };
    return (0, t.jsxs)(a.ModalRoot, {
        className: m.modalRoot,
        transitionState: i,
        children: [
            (0, t.jsxs)('div', {
                className: m.modalHeader,
                children: [
                    (0, t.jsx)('img', {
                        className: m.image,
                        src: u,
                        alt: ''
                    }),
                    (0, t.jsx)(a.ModalCloseButton, {
                        className: m.modalClose,
                        onClick: n
                    })
                ]
            }),
            (0, t.jsx)(a.ModalContent, {
                className: m.modalContent,
                children: A
                    ? (0, t.jsx)(a.Spinner, {})
                    : (0, t.jsx)(o.Z, {
                          classificationId: _,
                          source: h,
                          onError: p
                      })
            }),
            (0, t.jsx)(a.ModalFooter, {
                children: (0, t.jsx)(a.Button, {
                    className: m.__invalid_button,
                    type: 'button',
                    color: a.Button.Colors.BRAND,
                    onClick: p,
                    children: d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2
                })
            })
        ]
    });
};
