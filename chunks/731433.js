"use strict";
s.r(t), s.d(t, {
  DECO_SKU_ID: function() {
    return C
  },
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var i = s("442837"),
  l = s("481060"),
  n = s("37234"),
  r = s("100527"),
  o = s("906732"),
  d = s("204418"),
  u = s("1585"),
  c = s("223143"),
  f = s("300284"),
  p = s("158776"),
  h = s("594174"),
  m = s("153124"),
  I = s("741245"),
  S = s("474936"),
  g = s("689938"),
  E = s("425593");
let C = "1225876188074082374";

function T(e) {
  let {
    user: t,
    deco: s
  } = e, l = (0, i.useStateFromStores)([p.default], () => p.default.getStatus(t.id));
  return (0, a.jsxs)("div", {
    className: E.avatarBackground,
    children: [(0, a.jsx)(d.default, {
      user: t,
      guildId: void 0,
      avatarDecorationOverride: s,
      status: l,
      className: E.avatar
    }), (0, a.jsx)("div", {
      className: E.rect
    }), (0, a.jsx)("div", {
      className: E.rect
    }), (0, a.jsx)("div", {
      className: E.bottomOverlay
    })]
  })
}

function _(e) {
  var t;
  let {
    transitionState: s,
    onClose: d
  } = e, p = (0, m.useUID)(), {
    theme: _
  } = (0, l.useThemeContext)(), v = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()), {
    purchases: A
  } = (0, c.useFetchPurchases)(), M = null === (t = A.get(C)) || void 0 === t ? void 0 : t.items, x = void 0 !== M ? M[0] : void 0, {
    analyticsLocations: R
  } = (0, o.default)(r.default.PREMIUM_SUBSCRIPTION_APRIL_CAMPAIGN_MODAL), N = (0, f.default)({
    analyticsLocations: R
  });
  return (0, a.jsxs)(l.ModalRoot, {
    transitionState: s,
    "aria-labelledby": p,
    className: E.container,
    children: [void 0 !== v && (0, a.jsx)(T, {
      user: v,
      deco: x
    }), (0, a.jsxs)(l.ModalContent, {
      className: E.content,
      children: [(0, a.jsx)(I.default, {
        theme: _,
        premiumType: S.PremiumTypes.TIER_2,
        type: I.default.Types.PREMIUM_ACTIVATED
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        className: E.bodyText,
        children: g.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_CLAIM_DECO_MODAL_BODY.format()
      })]
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsx)(l.Button, {
        look: l.Button.Looks.FILLED,
        color: l.Button.Colors.BRAND,
        onClick: () => {
          d(), (0, n.popLayer)(), N(), (0, u.openAvatarDecorationModal)({
            initialSelectedDecoration: x,
            analyticsLocations: R
          })
        },
        children: g.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      })
    })]
  })
}