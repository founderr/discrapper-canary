"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var i = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  a = n("607070"),
  u = n("122890"),
  o = n("285952"),
  r = n("300395"),
  c = n("142749");

function d(e) {
  let {
    purchaseState: t,
    currentStep: n,
    onClose: d
  } = e, [S, p] = (0, u.usePaymentModalAnimationScene)({
    purchaseState: t,
    currentStep: n,
    initialScene: r.PremiumPaymentGuildAnimation.Scenes.ENTRY,
    purchaseScene: r.PremiumPaymentGuildAnimation.Scenes.STARS,
    errorScene: r.PremiumPaymentGuildAnimation.Scenes.ERROR,
    successScene: r.PremiumPaymentGuildAnimation.Scenes.SUCCESS
  }), m = (0, l.useStateFromStores)([a.default], () => a.default.useReducedMotion);
  return (0, i.jsxs)(s.ModalHeader, {
    align: o.default.Align.START,
    className: c.header,
    separator: !1,
    children: [(0, i.jsx)(r.PremiumPaymentGuildAnimation, {
      className: c.animation,
      nextScene: S,
      onScenePlay: e => p(r.PremiumPaymentGuildAnimation.getNextScene(e)),
      pauseWhileUnfocused: !1,
      pause: m
    }), (0, i.jsx)("div", {
      className: c.headerTitle
    }), (0, i.jsx)(s.ModalCloseButton, {
      onClick: d,
      className: c.closeButton
    })]
  })
}