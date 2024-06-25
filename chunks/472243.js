"use strict";
n.d(t, {
  Z: function() {
    return A
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
  f = n(689938),
  S = n(471991);

function A(e) {
  var t, n, r, A;
  let {
    type: N,
    textValue: m,
    maxCharacterCount: O,
    showRemainingCharsAfterCount: p,
    className: R
  } = e, g = (0, o.e7)([d.default], () => E.ZP.canUseIncreasedMessageLength(d.default.getCurrentUser())), C = (0, _.Z)(), v = null != O ? O : C, L = null !== (A = null != p ? p : O) && void 0 !== A ? A : C / 10, D = m.length, M = null != N.upsellLongMessages && (null != D ? D : 0) > T.J6R && g, P = null != N.upsellLongMessages && !g, y = (null === (n = (0, c.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === h.Si.TIER_2, U = v - D, b = U > L, G = U < 0 && y, w = 0 === U ? f.Z.Messages.CHARACTER_COUNT_AT_LIMIT : U > 0 ? f.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
    count: U
  }) : f.Z.Messages.CHARACTER_COUNT_OVER_LIMIT, {
    analyticsLocations: x
  } = (0, u.ZP)(l.Z.CHARACTER_COUNT);
  return M && U >= 0 || !b || P && !b ? (0, i.jsx)(u.Gt, {
    value: x,
    children: (0, i.jsxs)("div", {
      className: s()(R, S.characterCount, {
        [S.error]: U < 0
      }),
      children: [(0, i.jsxs)("div", {
        className: S.flairContainer,
        children: [M && U >= 0 ? (0, i.jsx)(a.Tooltip, {
          text: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
            maxLength: v
          }),
          position: "top",
          children: e => (0, i.jsx)(a.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: S.premiumFlair,
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
        children: f.Z.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
          count: U
        })
      }), P && !b ? (0, i.jsx)(I.Z, {
        className: S.upsell,
        iconOnly: (null === (r = N.upsellLongMessages) || void 0 === r ? void 0 : r.iconOnly) || !1,
        remaining: U
      }) : null]
    })
  }) : null
}