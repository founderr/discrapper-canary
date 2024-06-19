a.r(n), a.d(n, {
  default: function() {
    return g
  }
});
var s = a(735250),
  i = a(470079),
  l = a(481060),
  t = a(197115),
  r = a(589266),
  o = a(318661),
  d = a(721987),
  c = a(153124),
  u = a(626135),
  m = a(981631),
  p = a(486324),
  h = a(474936),
  I = a(689938),
  R = a(495598);

function g(e) {
  let {
    user: n,
    guildId: a,
    transitionState: g,
    imageSrc: A,
    uploadType: E,
    onSubscribe: x,
    onClose: f
  } = e, M = (0, c.Dt)(), v = (0, o.ZP)(n.id, a), {
    primaryColor: N,
    secondaryColor: b
  } = (0, d.Z)({
    user: n,
    displayProfile: v,
    pendingAvatar: E === p.pC.AVATAR ? A : void 0,
    isPreview: !0
  });
  return i.useEffect(() => {
    u.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
      type: h.cd.ANIMATED_AVATAR_PREVIEW_GIF_MODAL
    })
  }, []), (0, s.jsxs)(l.ModalRoot, {
    className: R.modalRoot,
    transitionState: g,
    size: l.ModalSize.SMALL,
    "aria-labelledby": M,
    hideShadow: !0,
    children: [(0, s.jsx)(r.Z, {
      location: "PremiumProfilePreviewModal",
      user: n,
      canUsePremiumCustomization: !0,
      disabledInputs: !0,
      pendingAvatar: E === p.pC.AVATAR ? A : void 0,
      pendingBanner: E === p.pC.BANNER ? A : void 0,
      pendingThemeColors: [N, b],
      onAvatarChange: m.dG4,
      onBannerChange: m.dG4
    }), (0, s.jsxs)("div", {
      className: R.upsellSection,
      children: [(0, s.jsx)(l.Text, {
        className: R.joinText,
        variant: "text-sm/normal",
        children: E === p.pC.AVATAR ? I.Z.Messages.PREMIUM_PREVIEW_JOIN_AVATAR : I.Z.Messages.PREMIUM_PREVIEW_JOIN_BANNER
      }), (0, s.jsx)(t.Z, {
        buttonText: I.Z.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
        subscriptionTier: h.Si.TIER_2,
        className: R.premiumSubscribeButton,
        size: l.Button.Sizes.SMALL,
        premiumModalAnalyticsLocation: {
          section: m.jXE.SETTINGS_EDIT_PROFILE,
          object: m.qAy.BUTTON_CTA
        },
        onSubscribeModalClose: e => {
          e && (null == x || x(), f())
        }
      }), (0, s.jsx)(l.Button, {
        onClick: f,
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.FILLED,
        children: I.Z.Messages.PREMIUM_PREVIEW_EXIT
      })]
    })]
  })
}