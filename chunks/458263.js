n.d(t, {
  o: function() {
    return S
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(693789),
  a = n(260034),
  r = n(993365),
  o = n(481060),
  c = n(230711),
  u = n(197115),
  d = n(504983),
  E = n(594174),
  _ = n(74538),
  I = n(981631),
  T = n(921944),
  m = n(474936),
  N = n(526761),
  h = n(689938),
  C = n(695983);

function S(e) {
  var t;
  let {
    onClose: n,
    markAsDismissed: S
  } = e, A = (0, i.e7)([E.default], () => E.default.getCurrentUser());
  let g = (t = null == A ? void 0 : A.premiumType) === m.p9.TIER_2 ? h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
    p = _.ZP.canUseCustomCallSounds(A);
  return (0, s.jsxs)(d.Z, {
    isShown: !0,
    type: d.Y.PREMIUM,
    className: C.upsellOuter,
    backgroundClassName: C.upsellInner,
    children: [null != S ? (0, s.jsx)(o.Clickable, {
      className: C.close,
      onClick: () => null == S ? void 0 : S(T.L.DISMISS),
      "aria-label": h.Z.Messages.CLOSE,
      children: (0, s.jsx)(o.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: C.closeIcon
      })
    }) : null, (0, s.jsxs)("div", {
      className: C.upsellTitle,
      children: [(0, s.jsx)(o.NitroWheelIcon, {
        size: "sm",
        color: "currentColor",
        className: C.nitroWheel
      }), (0, s.jsx)(a.X, {
        variant: "heading-sm/bold",
        children: h.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
      })]
    }), (0, s.jsx)(r.x, {
      variant: "text-sm/normal",
      children: g
    }), p ? (0, s.jsx)(l.zx, {
      onClick: function() {
        c.Z.open(I.oAB.VOICE, N.GA), null == n || n(), null == S || S(T.L.PRIMARY)
      },
      children: h.Z.Messages.CHECK_IT_OUT
    }) : (0, s.jsx)(u.Z, {
      buttonText: h.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
      subscriptionTier: m.Si.TIER_2,
      premiumModalAnalyticsLocation: {
        section: I.jXE.SOUNDBOARD_SOUND_PICKER,
        object: I.qAy.BUTTON_CTA
      },
      color: l.zx.Colors.GREEN,
      onSubscribeModalClose: () => null == S ? void 0 : S(T.L.PRIMARY)
    })]
  })
}