"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var s = n("735250");
n("470079");
var r = n("442837"),
  a = n("481060"),
  l = n("607070"),
  u = n("122890"),
  i = n("285952"),
  o = n("300395"),
  c = n("882139");

function d(e) {
  let {
    purchaseState: t,
    currentStep: n,
    onClose: d
  } = e, [f, C] = (0, u.usePaymentModalAnimationScene)({
    purchaseState: t,
    currentStep: n,
    initialScene: o.PremiumPaymentGuildAnimation.Scenes.ENTRY,
    purchaseScene: o.PremiumPaymentGuildAnimation.Scenes.STARS,
    errorScene: o.PremiumPaymentGuildAnimation.Scenes.ERROR,
    successScene: o.PremiumPaymentGuildAnimation.Scenes.SUCCESS
  }), E = (0, r.useStateFromStores)([l.default], () => l.default.useReducedMotion);
  return (0, s.jsxs)(a.ModalHeader, {
    align: i.default.Align.START,
    className: c.header,
    separator: !1,
    children: [(0, s.jsx)(o.PremiumPaymentGuildAnimation, {
      className: c.animation,
      nextScene: f,
      onScenePlay: e => C(o.PremiumPaymentGuildAnimation.getNextScene(e)),
      pauseWhileUnfocused: !1,
      pause: E
    }), (0, s.jsx)("div", {
      className: c.headerTitle
    }), (0, s.jsx)(a.ModalCloseButton, {
      onClick: d,
      className: c.closeButton
    })]
  })
}