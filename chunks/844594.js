n.r(i), n.d(i, {
  default: function() {
    return p
  }
});
var a = n(735250),
  s = n(470079),
  r = n(481060),
  t = n(197115),
  l = n(25373),
  o = n(318661),
  u = n(721987),
  c = n(153124),
  d = n(626135),
  v = n(981631),
  m = n(486324),
  I = n(474936),
  A = n(689938),
  E = n(495598);

function p(e) {
  let {
    user: i,
    guildId: n,
    transitionState: p,
    imageSrc: f,
    uploadType: T,
    onSubscribe: Z,
    onClose: h
  } = e, P = (0, c.Dt)(), N = (0, o.ZP)(i.id, n), {
    primaryColor: _,
    secondaryColor: x
  } = (0, u.Z)({
    user: i,
    displayProfile: N,
    pendingAvatar: T === m.pC.AVATAR ? f : void 0,
    isPreview: !0
  });
  return s.useEffect(() => {
    d.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
      type: I.cd.ANIMATED_AVATAR_PREVIEW_GIF_MODAL
    })
  }, []), (0, a.jsxs)(r.ModalRoot, {
    className: E.modalRoot,
    transitionState: p,
    size: r.ModalSize.SMALL,
    "aria-labelledby": P,
    hideShadow: !0,
    children: [(0, a.jsx)(l.Z, {
      user: i,
      canUsePremiumCustomization: !0,
      disabledInputs: !0,
      pendingAvatar: T === m.pC.AVATAR ? f : void 0,
      pendingBanner: T === m.pC.BANNER ? f : void 0,
      pendingThemeColors: [_, x]
    }), (0, a.jsxs)("div", {
      className: E.upsellSection,
      children: [(0, a.jsx)(r.Text, {
        className: E.joinText,
        variant: "text-sm/normal",
        children: T === m.pC.AVATAR ? A.Z.Messages.PREMIUM_PREVIEW_JOIN_AVATAR : A.Z.Messages.PREMIUM_PREVIEW_JOIN_BANNER
      }), (0, a.jsx)(t.Z, {
        buttonText: A.Z.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
        subscriptionTier: I.Si.TIER_2,
        className: E.premiumSubscribeButton,
        size: r.Button.Sizes.SMALL,
        premiumModalAnalyticsLocation: {
          section: v.jXE.SETTINGS_EDIT_PROFILE,
          object: v.qAy.BUTTON_CTA
        },
        onSubscribeModalClose: e => {
          e && (null == Z || Z(), h())
        }
      }), (0, a.jsx)(r.Button, {
        onClick: h,
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.FILLED,
        children: A.Z.Messages.PREMIUM_PREVIEW_EXIT
      })]
    })]
  })
}