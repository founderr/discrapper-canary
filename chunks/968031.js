l.r(s), l.d(s, {
  default: function() {
    return u
  }
});
var a = l(735250),
  o = l(470079),
  t = l(442837),
  _ = l(481060),
  E = l(100527),
  i = l(906732),
  n = l(197115),
  r = l(594174),
  T = l(626135),
  M = l(74538),
  S = l(300284),
  L = l(981631),
  c = l(474936),
  d = l(526761),
  p = l(689938),
  U = l(481466);

function u(e) {
  let {
    analyticsLocations: s,
    transitionState: u,
    onClose: I,
    title: R,
    description: P
  } = e, N = (0, t.e7)([r.default], () => r.default.getCurrentUser()), {
    analyticsLocations: m
  } = (0, i.ZP)(s, E.Z.PROFILE_THEME_UPSELL_MODAL);
  o.useEffect(() => {
    T.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
      type: c.cd.PROFILE_THEME_UPSELL_MODAL,
      location_stack: s
    })
  }, [s]);
  let h = (0, S.Z)({
    scrollPosition: d.Y_.TRY_IT_OUT,
    analyticsLocations: m
  });
  return (0, a.jsx)(i.Gt, {
    value: m,
    children: (0, a.jsxs)(_.ModalRoot, {
      className: U.profileThemesUpsellModal,
      "aria-label": null != R ? R : p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
      transitionState: u,
      children: [(0, a.jsxs)(_.ModalHeader, {
        className: U.profileThemesUpsellModalHeader,
        separator: !1,
        children: [(0, a.jsx)(_.Heading, {
          variant: "heading-xl/extrabold",
          className: U.profileThemesUpsellModalTitle,
          children: null != R ? R : p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE
        }), (0, a.jsx)(_.ModalCloseButton, {
          className: U.profileThemesUpsellModalCloseButton,
          onClick: I
        })]
      }), (0, a.jsxs)(_.ModalContent, {
        className: U.profileThemesUpsellModalContent,
        children: [(0, a.jsx)(_.Text, {
          className: U.profileThemesUpsellModalDescription,
          variant: "text-md/normal",
          children: null != P ? P : p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION
        }), (0, a.jsx)("img", {
          className: U.profileThemesUpsellModalExampleImage,
          src: l(299840),
          alt: p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT
        })]
      }), (0, a.jsxs)(_.ModalFooter, {
        className: U.__invalid_profileThemesUpsellModalFooter,
        children: [(0, a.jsx)(n.Z, {
          subscriptionTier: c.Si.TIER_2,
          size: _.Button.Sizes.SMALL,
          buttonText: M.ZP.isPremium(N) ? p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : p.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        }), (0, a.jsx)(_.Button, {
          onClick: () => {
            I(), h()
          },
          color: _.Button.Colors.PRIMARY,
          look: _.Button.Looks.LINK,
          size: _.Button.Sizes.SMALL,
          children: p.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT
        })]
      })]
    })
  })
}