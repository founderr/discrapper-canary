"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
});
var s = a("735250");
a("470079");
var o = a("442837"),
  r = a("481060"),
  u = a("37234"),
  l = a("100527"),
  n = a("906732"),
  i = a("204418"),
  c = a("1585"),
  d = a("223143"),
  h = a("300284"),
  f = a("158776"),
  g = a("594174"),
  m = a("153124"),
  A = a("741245"),
  P = a("474936"),
  b = a("689938"),
  p = a("425593");

function S(e) {
  let {
    user: t,
    deco: a
  } = e, r = (0, o.useStateFromStores)([f.default], () => f.default.getStatus(t.id));
  return (0, s.jsxs)("div", {
    className: p.avatarBackground,
    children: [(0, s.jsx)(i.default, {
      user: t,
      guildId: void 0,
      avatarDecorationOverride: a,
      status: r,
      className: p.avatar
    }), (0, s.jsx)("div", {
      className: p.rect
    }), (0, s.jsx)("div", {
      className: p.rect
    }), (0, s.jsx)("div", {
      className: p.bottomOverlay
    })]
  })
}

function v(e) {
  var t;
  let {
    transitionState: a,
    onClose: i
  } = e, f = (0, m.useUID)(), {
    theme: v
  } = (0, r.useThemeContext)(), x = (0, o.useStateFromStores)([g.default], () => g.default.getCurrentUser()), {
    purchases: E
  } = (0, d.useFetchPurchases)(), I = null === (t = E.get("1225876188074082374")) || void 0 === t ? void 0 : t.items, F = void 0 !== I ? I[0] : void 0, {
    analyticsLocations: D
  } = (0, n.default)(l.default.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL), T = (0, h.default)({
    analyticsLocations: D
  });
  return (0, s.jsxs)(r.ModalRoot, {
    transitionState: a,
    "aria-labelledby": f,
    className: p.container,
    children: [void 0 !== x && (0, s.jsx)(S, {
      user: x,
      deco: F
    }), (0, s.jsxs)(r.ModalContent, {
      className: p.content,
      children: [(0, s.jsx)(A.default, {
        theme: v,
        premiumType: P.PremiumTypes.TIER_2,
        type: A.default.Types.PREMIUM_ACTIVATED
      }), (0, s.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        className: p.bodyText,
        children: b.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_CLAIM_DECO_MODAL_BODY.format()
      })]
    }), (0, s.jsx)(r.ModalFooter, {
      children: (0, s.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        color: r.Button.Colors.BRAND,
        onClick: () => {
          i(), (0, u.popLayer)(), T(), (0, c.openAvatarDecorationModal)({
            initialSelectedDecoration: F,
            analyticsLocations: D
          })
        },
        children: b.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      })
    })]
  })
}