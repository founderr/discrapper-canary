n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(627341);
var i = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    r = n(278074),
    l = n(481060),
    o = n(109213),
    c = n(409813),
    u = n(474936),
    d = n(689938),
    _ = n(73913);
function E(e) {
    let { step: t, onClose: n, giftingOrigin: a } = e,
        { enabled: E } = o.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        I = (0, r.EQ)(t)
            .with(c.h8.REVIEW, () => d.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER)
            .with(c.h8.ADD_PAYMENT_STEPS, () => d.Z.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE)
            .with(c.h8.GIFT_CUSTOMIZATION, () => (E && a === u.Wt.DM_CHANNEL ? d.Z.Messages.GIFT_COLLECTIBLES_MODAL_HEADER : d.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER))
            .with(c.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => d.Z.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING)
            .with(c.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == I
        ? null
        : (0, i.jsxs)(l.ModalHeader, {
              className: s()(_.headerContainerGift),
              separator: t !== c.h8.CONFIRM,
              children: [
                  (0, i.jsx)(l.Heading, {
                      variant: 'heading-lg/semibold',
                      children: I
                  }),
                  (0, i.jsx)(l.ModalCloseButton, {
                      onClick: n,
                      className: _.closeButtonGift
                  })
              ]
          });
}
