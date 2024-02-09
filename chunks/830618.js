"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("446674"),
  r = n("77078"),
  o = n("812204"),
  u = n("685665"),
  d = n("217535"),
  c = n("917247"),
  f = n("697218"),
  p = n("216422"),
  m = n("719923"),
  h = n("30278"),
  E = n("49111"),
  S = n("646718"),
  g = n("782340"),
  C = n("789539");

function T(e) {
  var t, n, i, T;
  let {
    type: v,
    textValue: I,
    maxCharacterCount: _,
    showRemainingCharsAfterCount: y,
    className: A
  } = e, N = (0, s.useStateFromStores)([f.default], () => m.default.canUseIncreasedMessageLength(f.default.getCurrentUser())), x = (0, d.default)(), O = null != _ ? _ : x, R = null !== (T = null != y ? y : _) && void 0 !== T ? T : x / 10, M = I.length, L = null != v.upsellLongMessages && (null != M ? M : 0) > E.MAX_MESSAGE_LENGTH && N, P = null != v.upsellLongMessages && !N, b = (null === (n = (0, c.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.PremiumSubscriptionSKUs.TIER_2, j = O - M, U = j > R, D = j < 0 && b, k = 0 === j ? g.default.Messages.CHARACTER_COUNT_AT_LIMIT : j > 0 ? g.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
    count: j
  }) : g.default.Messages.CHARACTER_COUNT_OVER_LIMIT, {
    AnalyticsLocationProvider: w
  } = (0, u.default)(o.default.CHARACTER_COUNT), F = L && j >= 0 || !U || P && !U;
  return F ? (0, l.jsx)(w, {
    children: (0, l.jsxs)("div", {
      className: a(A, C.characterCount, {
        [C.error]: j < 0
      }),
      children: [(0, l.jsxs)("div", {
        className: C.flairContainer,
        children: [L && j >= 0 ? (0, l.jsx)(r.Tooltip, {
          text: g.default.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
            maxLength: O
          }),
          position: "top",
          children: e => (0, l.jsx)(p.default, {
            className: C.premiumFlair,
            ...e
          })
        }) : null, U || D ? null : (0, l.jsx)(r.Tooltip, {
          text: k,
          position: "top",
          children: e => (0, l.jsx)("span", {
            "aria-hidden": !0,
            ...e,
            children: j
          })
        })]
      }), (0, l.jsx)(r.HiddenVisually, {
        children: g.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
          count: j
        })
      }), P && !U ? (0, l.jsx)(h.default, {
        className: C.upsell,
        iconOnly: (null === (i = v.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
        remaining: j
      }) : null]
    })
  }) : null
}