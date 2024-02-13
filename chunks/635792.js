"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("77078"),
  u = n("685665"),
  d = n("649844"),
  c = n("393414"),
  f = n("697218"),
  h = n("471671"),
  m = n("181114"),
  p = n("978679"),
  E = n("49111"),
  S = n("782340"),
  g = n("516042"),
  C = function(e) {
    let {
      subscriptionTier: t,
      onClick: n,
      size: s,
      className: C,
      buttonText: _,
      buttonTextClassName: I,
      onSubscribeModalClose: T,
      premiumModalAnalyticsLocation: v,
      disableShine: x,
      giftMessage: N,
      giftRecipient: A,
      ...M
    } = e, R = (0, r.useStateFromStores)([f.default], () => f.default.getCurrentUser()), j = (0, r.useStateFromStores)([h.default], () => h.default.isFocused()), [L, O] = l.useState(!1), {
      analyticsLocations: y
    } = (0, u.default)();
    return (0, a.jsxs)(m.default, {
      pauseAnimation: !j || x,
      size: s,
      className: i(g.giftButton, C),
      onlyShineOnHover: !0,
      innerClassName: g.innerGiftButton,
      color: o.Button.Colors.PRIMARY,
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
      children: [(0, a.jsx)("div", {
        className: i(g.gradientBackground, {
          [g.gradientBackgroundHover]: L
        })
      }), (0, a.jsx)(p.default, {
        className: g.giftIcon
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "none",
        className: i(g.buttonText, I),
        children: null != _ ? _ : S.default.Messages.PREMIUM_GIFTING_BUTTON
      })]
    })
  }