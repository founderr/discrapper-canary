n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(627341);
var i = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    r = n(278074),
    l = n(481060),
    o = n(409813),
    c = n(689938),
    u = n(73913);
function d(e) {
    let { step: t, onClose: n } = e,
        a = (0, r.EQ)(t)
            .with(o.h8.REVIEW, () => c.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER)
            .with(o.h8.ADD_PAYMENT_STEPS, () => c.Z.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE)
            .with(o.h8.GIFT_CUSTOMIZATION, () => c.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER)
            .with(o.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => c.Z.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING)
            .with(o.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == a
        ? null
        : (0, i.jsxs)(l.ModalHeader, {
              className: s()(u.headerContainerGift),
              separator: t !== o.h8.CONFIRM,
              children: [
                  (0, i.jsx)(l.Heading, {
                      variant: 'heading-lg/semibold',
                      children: a
                  }),
                  (0, i.jsx)(l.ModalCloseButton, {
                      onClick: n,
                      className: u.closeButtonGift
                  })
              ]
          });
}
