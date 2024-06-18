"use strict";
n.d(t, {
  Z: function() {
    return N
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(100527),
  u = n(906732),
  _ = n(849522),
  c = n(639119),
  d = n(594174),
  E = n(74538),
  I = n(694320),
  T = n(981631),
  h = n(474936),
  S = n(689938),
  f = n(471991);

function N(e) {
  var t, n, r, N;
  let {
    type: A,
    textValue: m,
    maxCharacterCount: O,
    showRemainingCharsAfterCount: R,
    className: p
  } = e, g = (0, o.e7)([d.default], () => E.ZP.canUseIncreasedMessageLength(d.default.getCurrentUser())), C = (0, _.Z)(), v = null != O ? O : C, L = null !== (N = null != R ? R : O) && void 0 !== N ? N : C / 10, D = m.length, M = null != A.upsellLongMessages && (null != D ? D : 0) > T.J6R && g, P = null != A.upsellLongMessages && !g, y = (null === (n = (0, c.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === h.Si.TIER_2, U = v - D, b = U > L, G = U < 0 && y, w = 0 === U ? S.Z.Messages.CHARACTER_COUNT_AT_LIMIT : U > 0 ? S.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
    count: U
  }) : S.Z.Messages.CHARACTER_COUNT_OVER_LIMIT, {
    analyticsLocations: k
  } = (0, u.ZP)(l.Z.CHARACTER_COUNT);
  return M && U >= 0 || !b || P && !b ? (0, i.jsx)(u.Gt, {
    value: k,
    children: (0, i.jsxs)("div", {
      className: s()(p, f.characterCount, {
        [f.error]: U < 0
      }),
      children: [(0, i.jsxs)("div", {
        className: f.flairContainer,
        children: [M && U >= 0 ? (0, i.jsx)(a.Tooltip, {
          text: S.Z.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
            maxLength: v
          }),
          position: "top",
          children: e => (0, i.jsx)(a.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: f.premiumFlair,
            ...e
          })
        }) : null, b || G ? null : (0, i.jsx)(a.Tooltip, {
          text: w,
          position: "top",
          children: e => (0, i.jsx)("span", {
            "aria-hidden": !0,
            ...e,
            children: U
          })
        })]
      }), (0, i.jsx)(a.HiddenVisually, {
        children: S.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
          count: U
        })
      }), P && !b ? (0, i.jsx)(I.Z, {
        className: f.upsell,
        iconOnly: (null === (r = A.upsellLongMessages) || void 0 === r ? void 0 : r.iconOnly) || !1,
        remaining: U
      }) : null]
    })
  }) : null
}