t.d(n, {
    Z: function () {
        return S;
    }
});
var s = t(735250);
t(470079);
var r = t(120356),
    a = t.n(r),
    i = t(442837),
    c = t(481060),
    l = t(607070),
    L = t(409813),
    o = t(669079),
    u = t(170579),
    C = t(616030),
    d = t(474936),
    f = t(689938),
    p = t(251300);
function S(e) {
    let { currentStep: n, className: t, purchaseState: r, premiumType: S, useWinterTheme: h = !1, onClose: T, hideCloseButton: N, showTrialBadge: R, showDiscountBadge: E, isGift: I, giftRecipient: m } = e,
        M = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
        _ = h ? d.nL.WINTER : d.nL.DEFAULT;
    return I && (0, o.pO)(m) && n !== L.h8.CONFIRM
        ? (0, s.jsxs)(c.ModalHeader, {
              className: p.modalHeaderCustomGift,
              separator: !1,
              children: [
                  (0, s.jsx)('div', {
                      className: p.giftNitroInfo,
                      children: (0, s.jsx)(c.Heading, {
                          variant: 'heading-lg/semibold',
                          children: (() => {
                              switch (n) {
                                  case L.h8.PLAN_SELECT:
                                      return S === d.p9.TIER_0 ? f.Z.Messages.GIFT_NITRO_TIER_0 : f.Z.Messages.GIFT_NITRO_ACTION;
                                  case L.h8.ADD_PAYMENT_STEPS:
                                      return f.Z.Messages.PAYMENT_METHOD_SELECTION;
                                  case L.h8.REVIEW:
                                      return f.Z.Messages.GIFT_PURCHASE_REVIEW;
                                  default:
                                      return f.Z.Messages.GIFT_NITRO_ACTION;
                              }
                          })()
                      })
                  }),
                  (0, s.jsx)(c.ModalCloseButton, {
                      onClick: T,
                      className: p.closeButton
                  })
              ]
          })
        : (0, s.jsx)(c.ModalHeader, {
              className: a()(p.modalHeader, t),
              separator: !1,
              children: (0, s.jsx)(u.Z, {
                  hideCloseOnFullScreen: !0,
                  hideCloseButton: N,
                  shouldShowPrice: !0,
                  upgradeToPremiumType: S,
                  renderAnimation: () =>
                      S === d.p9.TIER_0
                          ? (0, s.jsx)(C.zC, {
                                className: p.headerAnimation,
                                currentStep: n,
                                purchaseState: r,
                                pause: M
                            })
                          : S === d.p9.TIER_1
                            ? (0, s.jsx)(C.tK, {
                                  className: p.headerAnimation,
                                  currentStep: n,
                                  purchaseState: r,
                                  pause: M
                              })
                            : (0, s.jsx)(C.Bk, {
                                  className: p.headerAnimation,
                                  currentStep: n,
                                  purchaseState: r,
                                  pause: M
                              }),
                  plan: null,
                  isGift: !1,
                  className: p.header,
                  onClose: T,
                  headerTheme: _,
                  showTrialBadge: R,
                  showDiscountBadge: E
              })
          });
}
