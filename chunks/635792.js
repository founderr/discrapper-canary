"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("685665"),
  d = n("649844"),
  c = n("393414"),
  f = n("697218"),
  h = n("471671"),
  m = n("181114"),
  p = n("978679"),
  E = n("49111"),
  g = n("782340"),
  C = n("455701"),
  S = function(e) {
    let {
      subscriptionTier: t,
      onClick: n,
      size: s,
      className: S,
      buttonText: _,
      buttonTextClassName: I,
      onSubscribeModalClose: T,
      premiumModalAnalyticsLocation: v,
      disableShine: x,
      giftMessage: N,
      giftRecipient: A,
      ...M
    } = e, R = (0, r.useStateFromStores)([f.default], () => f.default.getCurrentUser()), j = (0, r.useStateFromStores)([h.default], () => h.default.isFocused()), [L, O] = a.useState(!1), {
      analyticsLocations: y
    } = (0, o.default)();
    return (0, l.jsxs)(m.default, {
      pauseAnimation: !j || x,
      size: s,
      className: i(C.giftButton, S),
      onlyShineOnHover: !0,
      innerClassName: C.innerGiftButton,
      color: u.Button.Colors.PRIMARY,
      onClick: e => {
        if (e.preventDefault(), null == R) {
          (0, c.transitionTo)(E.Routes.LOGIN);
          return
        }
        null == n || n(e), (0, d.default)({
          isGift: !0,
          subscriptionTier: t,
          analyticsLocations: y,
          analyticsObject: {
            object: E.AnalyticsObjects.BUTTON_CTA,
            objectType: E.AnalyticsObjectTypes.GIFT,
            ...v
          },
          onClose: T,
          giftMessage: N,
          giftRecipient: A
        })
      },
      onMouseEnter: () => O(!0),
      onMouseLeave: () => O(!1),
      ...M,
      children: [(0, l.jsx)("div", {
        className: i(C.gradientBackground, {
          [C.gradientBackgroundHover]: L
        })
      }), (0, l.jsx)(p.default, {
        className: C.giftIcon
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "none",
        className: i(C.buttonText, I),
        children: null != _ ? _ : g.default.Messages.PREMIUM_GIFTING_BUTTON
      })]
    })
  }