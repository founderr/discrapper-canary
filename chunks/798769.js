n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(607070),
    u = n(409813),
    c = n(669079),
    d = n(170579),
    _ = n(616030),
    f = n(474936),
    C = n(689938),
    L = n(251300);
function m(e) {
    let { currentStep: t, className: n, purchaseState: l, premiumType: m, useWinterTheme: T = !1, onClose: E, hideCloseButton: S, showTrialBadge: p, showDiscountBadge: N, isGift: h, giftRecipient: A } = e,
        g = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        R = T ? f.nL.WINTER : f.nL.DEFAULT;
    return h && (0, c.pO)(A) && t !== u.h8.CONFIRM
        ? (0, i.jsxs)(s.ModalHeader, {
              className: L.modalHeaderCustomGift,
              separator: !1,
              children: [
                  (0, i.jsx)('div', {
                      className: L.giftNitroInfo,
                      children: (0, i.jsx)(s.Heading, {
                          variant: 'heading-lg/semibold',
                          children: (() => {
                              switch (t) {
                                  case u.h8.PLAN_SELECT:
                                      return m === f.p9.TIER_0 ? C.Z.Messages.GIFT_NITRO_TIER_0 : C.Z.Messages.GIFT_NITRO_ACTION;
                                  case u.h8.ADD_PAYMENT_STEPS:
                                      return C.Z.Messages.PAYMENT_METHOD_SELECTION;
                                  case u.h8.REVIEW:
                                      return C.Z.Messages.GIFT_PURCHASE_REVIEW;
                                  default:
                                      return C.Z.Messages.GIFT_NITRO_ACTION;
                              }
                          })()
                      })
                  }),
                  (0, i.jsx)(s.ModalCloseButton, {
                      onClick: E,
                      className: L.closeButton
                  })
              ]
          })
        : (0, i.jsx)(s.ModalHeader, {
              className: a()(L.modalHeader, n),
              separator: !1,
              children: (0, i.jsx)(d.Z, {
                  hideCloseOnFullScreen: !0,
                  hideCloseButton: S,
                  shouldShowPrice: !0,
                  upgradeToPremiumType: m,
                  renderAnimation: () =>
                      m === f.p9.TIER_0
                          ? (0, i.jsx)(_.zC, {
                                className: L.headerAnimation,
                                currentStep: t,
                                purchaseState: l,
                                pause: g
                            })
                          : m === f.p9.TIER_1
                            ? (0, i.jsx)(_.tK, {
                                  className: L.headerAnimation,
                                  currentStep: t,
                                  purchaseState: l,
                                  pause: g
                              })
                            : (0, i.jsx)(_.Bk, {
                                  className: L.headerAnimation,
                                  currentStep: t,
                                  purchaseState: l,
                                  pause: g
                              }),
                  plan: null,
                  isGift: !1,
                  className: L.header,
                  onClose: E,
                  headerTheme: R,
                  showTrialBadge: p,
                  showDiscountBadge: N
              })
          });
}
