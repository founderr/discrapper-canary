"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
});
var s = a("735250");
a("470079");
var o = a("442837"),
  r = a("481060"),
  d = a("37234"),
  l = a("100527"),
  i = a("906732"),
  u = a("204418"),
  n = a("1585"),
  c = a("223143"),
  m = a("300284"),
  v = a("158776"),
  _ = a("594174"),
  f = a("153124"),
  x = a("741245"),
  I = a("474936"),
  A = a("689938"),
  M = a("425593");

function h(e) {
  let {
    user: t,
    deco: a
  } = e, r = (0, o.useStateFromStores)([v.default], () => v.default.getStatus(t.id));
  return (0, s.jsxs)("div", {
    className: M.avatarBackground,
    children: [(0, s.jsx)(u.default, {
      user: t,
      guildId: void 0,
      avatarDecorationOverride: a,
      status: r,
      className: M.avatar
    }), (0, s.jsx)("div", {
      className: M.rect
    }), (0, s.jsx)("div", {
      className: M.rect
    }), (0, s.jsx)("div", {
      className: M.bottomOverlay
    })]
  })
}

function p(e) {
  var t;
  let {
    transitionState: a,
    onClose: u
  } = e, v = (0, f.useUID)(), {
    theme: p
  } = (0, r.useThemeContext)(), N = (0, o.useStateFromStores)([_.default], () => _.default.getCurrentUser()), {
    purchases: T
  } = (0, c.useFetchPurchases)(), C = null === (t = T.get("1225876188074082374")) || void 0 === t ? void 0 : t.items, R = void 0 !== C ? C[0] : void 0, {
    analyticsLocations: j
  } = (0, i.default)(l.default.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL), D = (0, m.default)({
    analyticsLocations: j
  });
  return (0, s.jsxs)(r.ModalRoot, {
    transitionState: a,
    "aria-labelledby": v,
    className: M.container,
    children: [void 0 !== N && (0, s.jsx)(h, {
      user: N,
      deco: R
    }), (0, s.jsxs)(r.ModalContent, {
      className: M.content,
      children: [(0, s.jsx)(x.default, {
        theme: p,
        premiumType: I.PremiumTypes.TIER_2,
        type: x.default.Types.PREMIUM_ACTIVATED
      }), (0, s.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        className: M.bodyText,
        children: A.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_CLAIM_DECO_MODAL_BODY.format()
      })]
    }), (0, s.jsx)(r.ModalFooter, {
      children: (0, s.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        color: r.Button.Colors.BRAND,
        onClick: () => {
          u(), (0, d.popLayer)(), D(), (0, n.openAvatarDecorationModal)({
            initialSelectedDecoration: R,
            analyticsLocations: j
          })
        },
        children: A.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      })
    })]
  })
}