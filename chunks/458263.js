t.d(n, {
  o: function() {
    return L
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  s = t(693789),
  r = t(260034),
  a = t(993365),
  o = t(481060),
  u = t(230711),
  c = t(197115),
  d = t(504983),
  _ = t(594174),
  I = t(74538),
  E = t(981631),
  C = t(921944),
  m = t(474936),
  N = t(526761),
  S = t(689938),
  T = t(695983);

function L(e) {
  var n;
  let {
    onClose: t,
    markAsDismissed: L
  } = e, R = (0, l.e7)([_.default], () => _.default.getCurrentUser());
  let h = (n = null == R ? void 0 : R.premiumType) === m.p9.TIER_2 ? S.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == n ? S.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : S.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
    f = I.ZP.canUseCustomCallSounds(R);
  return (0, i.jsxs)(d.Z, {
    isShown: !0,
    type: d.Y.PREMIUM,
    className: T.upsellOuter,
    backgroundClassName: T.upsellInner,
    children: [null != L ? (0, i.jsx)(o.Clickable, {
      className: T.close,
      onClick: () => null == L ? void 0 : L(C.L.DISMISS),
      "aria-label": S.Z.Messages.CLOSE,
      children: (0, i.jsx)(o.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: T.closeIcon
      })
    }) : null, (0, i.jsxs)("div", {
      className: T.upsellTitle,
      children: [(0, i.jsx)(o.NitroWheelIcon, {
        size: "sm",
        color: "currentColor",
        className: T.nitroWheel
      }), (0, i.jsx)(r.X, {
        variant: "heading-sm/bold",
        children: S.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
      })]
    }), (0, i.jsx)(a.x, {
      variant: "text-sm/normal",
      children: h
    }), f ? (0, i.jsx)(s.zx, {
      onClick: function() {
        u.Z.open(E.oAB.VOICE, N.GA), null == t || t(), null == L || L(C.L.PRIMARY)
      },
      children: S.Z.Messages.CHECK_IT_OUT
    }) : (0, i.jsx)(c.Z, {
      buttonText: S.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
      subscriptionTier: m.Si.TIER_2,
      premiumModalAnalyticsLocation: {
        section: E.jXE.SOUNDBOARD_SOUND_PICKER,
        object: E.qAy.BUTTON_CTA
      },
      color: s.zx.Colors.GREEN,
      onSubscribeModalClose: () => null == L ? void 0 : L(C.L.PRIMARY)
    })]
  })
}