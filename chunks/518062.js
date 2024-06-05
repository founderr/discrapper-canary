"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("607070"),
  u = n("122890"),
  r = n("285952"),
  o = n("300395"),
  c = n("882139");

function d(e) {
  let {
    purchaseState: t,
    currentStep: n,
    onClose: d
  } = e, [S, p] = (0, u.usePaymentModalAnimationScene)({
    purchaseState: t,
    currentStep: n,
    initialScene: o.PremiumPaymentGuildAnimation.Scenes.ENTRY,
    purchaseScene: o.PremiumPaymentGuildAnimation.Scenes.STARS,
    errorScene: o.PremiumPaymentGuildAnimation.Scenes.ERROR,
    successScene: o.PremiumPaymentGuildAnimation.Scenes.SUCCESS
  }), m = (0, a.useStateFromStores)([i.default], () => i.default.useReducedMotion);
  return (0, l.jsxs)(s.ModalHeader, {
    align: r.default.Align.START,
    className: c.header,
    separator: !1,
    children: [(0, l.jsx)(o.PremiumPaymentGuildAnimation, {
      className: c.animation,
      nextScene: S,
      onScenePlay: e => p(o.PremiumPaymentGuildAnimation.getNextScene(e)),
      pauseWhileUnfocused: !1,
      pause: m
    }), (0, l.jsx)("div", {
      className: c.headerTitle
    }), (0, l.jsx)(s.ModalCloseButton, {
      onClick: d,
      className: c.closeButton
    })]
  })
}