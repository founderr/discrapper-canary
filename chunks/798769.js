n.d(t, {
    Z: function () {
        return L;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    u = n(409813),
    c = n(669079),
    d = n(170579),
    f = n(616030),
    C = n(474936),
    _ = n(388032),
    m = n(251300);
function L(e) {
    let { currentStep: t, className: n, purchaseState: l, premiumType: L, useWinterTheme: S = !1, onClose: p, hideCloseButton: T, showTrialBadge: E, showDiscountBadge: h, isGift: N, giftRecipient: g } = e,
        A = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        v = S ? C.nL.WINTER : C.nL.DEFAULT;
    return N && (0, c.pO)(g) && t !== u.h8.CONFIRM
        ? (0, i.jsxs)(o.ModalHeader, {
              className: m.modalHeaderCustomGift,
              separator: !1,
              children: [
                  (0, i.jsx)('div', {
                      className: m.giftNitroInfo,
                      children: (0, i.jsx)(o.Heading, {
                          variant: 'heading-lg/semibold',
                          children: (() => {
                              switch (t) {
                                  case u.h8.PLAN_SELECT:
                                      return L === C.p9.TIER_0 ? _.intl.string(_.t.rk4Uu7) : _.intl.string(_.t['7YWj6+']);
                                  case u.h8.ADD_PAYMENT_STEPS:
                                      return _.intl.string(_.t.vHqbJC);
                                  case u.h8.REVIEW:
                                      return _.intl.string(_.t.wKaVLC);
                                  default:
                                      return _.intl.string(_.t['7YWj6+']);
                              }
                          })()
                      })
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                      onClick: p,
                      className: m.closeButton
                  })
              ]
          })
        : (0, i.jsx)(o.ModalHeader, {
              className: r()(m.modalHeader, n),
              separator: !1,
              children: (0, i.jsx)(d.Z, {
                  hideCloseOnFullScreen: !0,
                  hideCloseButton: T,
                  shouldShowPrice: !0,
                  upgradeToPremiumType: L,
                  renderAnimation: () =>
                      L === C.p9.TIER_0
                          ? (0, i.jsx)(f.zC, {
                                className: m.headerAnimation,
                                currentStep: t,
                                purchaseState: l,
                                pause: A
                            })
                          : L === C.p9.TIER_1
                            ? (0, i.jsx)(f.tK, {
                                  className: m.headerAnimation,
                                  currentStep: t,
                                  purchaseState: l,
                                  pause: A
                              })
                            : (0, i.jsx)(f.Bk, {
                                  className: m.headerAnimation,
                                  currentStep: t,
                                  purchaseState: l,
                                  pause: A
                              }),
                  plan: null,
                  isGift: !1,
                  className: m.header,
                  onClose: p,
                  headerTheme: v,
                  showTrialBadge: E,
                  showDiscountBadge: h
              })
          });
}
