t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(627341);
var s = t(735250);
t(470079);
var a = t(120356),
    l = t.n(a),
    r = t(278074),
    i = t(481060),
    o = t(409813),
    d = t(689938),
    c = t(73913);
function u(e) {
    let { step: n, onClose: t } = e,
        a = (0, r.EQ)(n)
            .with(o.h8.REVIEW, () => d.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER)
            .with(o.h8.ADD_PAYMENT_STEPS, () => d.Z.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE)
            .with(o.h8.GIFT_CUSTOMIZATION, () => d.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER)
            .with(o.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => d.Z.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING)
            .with(o.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == a
        ? null
        : (0, s.jsxs)(i.ModalHeader, {
              className: l()(c.headerContainerGift),
              separator: n !== o.h8.CONFIRM,
              children: [
                  (0, s.jsx)(i.Heading, {
                      variant: 'heading-lg/semibold',
                      children: a
                  }),
                  (0, s.jsx)(i.ModalCloseButton, {
                      onClick: t,
                      className: c.closeButtonGift
                  })
              ]
          });
}
