"use strict";
a.r(t), a.d(t, {
  DECO_SKU_ID: function() {
    return C
  },
  default: function() {
    return N
  }
});
var s = a("735250");
a("470079");
var o = a("990547"),
  r = a("442837"),
  l = a("481060"),
  d = a("37234"),
  i = a("100527"),
  n = a("906732"),
  u = a("213609"),
  c = a("204418"),
  _ = a("1585"),
  m = a("223143"),
  I = a("300284"),
  M = a("158776"),
  p = a("594174"),
  A = a("153124"),
  f = a("741245"),
  v = a("474936"),
  D = a("689938"),
  x = a("461268");
let C = "1225876188074082374";

function E(e) {
  let {
    user: t,
    deco: a
  } = e, o = (0, r.useStateFromStores)([M.default], () => M.default.getStatus(t.id));
  return (0, s.jsxs)("div", {
    className: x.avatarBackground,
    children: [(0, s.jsx)(c.default, {
      user: t,
      guildId: void 0,
      avatarDecorationOverride: a,
      status: o,
      className: x.avatar
    }), (0, s.jsx)("div", {
      className: x.rect
    }), (0, s.jsx)("div", {
      className: x.rect
    }), (0, s.jsx)("div", {
      className: x.bottomOverlay
    })]
  })
}

function N(e) {
  var t;
  let {
    transitionState: a,
    onClose: c
  } = e, M = (0, A.useUID)(), {
    theme: N
  } = (0, l.useThemeContext)(), R = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
    purchases: T
  } = (0, m.useFetchPurchases)(), h = null === (t = T.get(C)) || void 0 === t ? void 0 : t.items, O = void 0 !== h ? h[0] : void 0, {
    analyticsLocations: L
  } = (0, n.default)(i.default.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL), S = (0, I.default)({
    analyticsLocations: L
  });
  return (0, u.default)({
    type: o.ImpressionTypes.MODAL,
    name: o.ImpressionNames.APRIL_PREMIUM_MARKETING_DECO_CLAIMED_MODAL,
    properties: {
      location_stack: L
    }
  }), (0, s.jsxs)(l.ModalRoot, {
    transitionState: a,
    "aria-labelledby": M,
    className: x.container,
    children: [void 0 !== R && (0, s.jsx)(E, {
      user: R,
      deco: O
    }), (0, s.jsxs)(l.ModalContent, {
      className: x.content,
      children: [(0, s.jsx)(f.default, {
        theme: N,
        premiumType: v.PremiumTypes.TIER_2,
        type: f.default.Types.PREMIUM_ACTIVATED
      }), (0, s.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        className: x.bodyText,
        children: D.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_CLAIM_DECO_MODAL_BODY.format()
      })]
    }), (0, s.jsx)(l.ModalFooter, {
      children: (0, s.jsx)(l.Button, {
        look: l.Button.Looks.FILLED,
        color: l.Button.Colors.BRAND,
        onClick: () => {
          c(), (0, d.popLayer)(), S(), (0, _.openAvatarDecorationModal)({
            initialSelectedDecoration: O,
            analyticsLocations: L
          })
        },
        children: D.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      })
    })]
  })
}