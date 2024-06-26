"use strict";
n.d(t, {
  Z: function() {
    return R
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(780384),
  l = n(481060),
  u = n(2052),
  _ = n(410030),
  c = n(100527),
  d = n(906732),
  E = n(98278),
  I = n(197115),
  T = n(626135),
  h = n(74538),
  f = n(706667),
  S = n(409673),
  N = n(981631),
  A = n(474936),
  m = n(689938),
  O = n(439316),
  p = n(538100);

function R(e) {
  var t;
  let {
    onClose: s,
    closePopout: R,
    sound: g,
    channel: C
  } = e, v = (0, _.ZP)(), [L, D] = r.useState(!1), {
    location: M
  } = (0, u.O)(), P = r.useMemo(() => ({
    ...M,
    section: N.jXE.SOUNDBOARD_SOUND_PICKER
  }), [M]), {
    analyticsLocations: y
  } = (0, d.ZP)(c.Z.PREMIUM_UPSELL), {
    previewSound: U
  } = (0, f.Z)(g, null !== (t = null == C ? void 0 : C.id) && void 0 !== t ? t : null), b = (0, S.K_)({
    sound: g,
    previewSound: U,
    tooltipPosition: "left"
  }), G = (0, a.ap)(v) ? n(537381) : n(341048);
  r.useEffect(() => {
    T.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
      type: A.cd.SOUND_PICKER_SOUND_CLICKED,
      is_external: !0,
      location: {
        ...P,
        object: N.qAy.SOUNDBOARD_SOUND
      },
      location_stack: y,
      sku_id: h.ZP.getSkuIdForPremiumType(A.p9.TIER_2)
    })
  }, [y, P]);
  let w = r.useCallback(() => {
    T.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
      location_section: N.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL
    }), (0, E.z)(), R()
  }, [R]);
  return (0, i.jsxs)("div", {
    className: o()(p.premiumPromo, O.container),
    children: [(0, i.jsx)(l.Clickable, {
      className: p.premiumPromoClose,
      onClick: s,
      children: m.Z.Messages.CLOSE
    }), (0, i.jsx)("img", {
      "aria-hidden": !0,
      alt: "",
      className: o()(p.premiumPromoImage, p.premiumPromoImageSmaller, O.image),
      src: G
    }), (0, i.jsx)(l.Heading, {
      variant: "heading-lg/normal",
      color: "header-primary",
      className: p.premiumPromoTitle,
      children: m.Z.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
    }), (0, i.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.premiumPromoDescription,
      children: m.Z.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
        onClick: w
      })
    }), (0, i.jsxs)("div", {
      className: O.buttonContainer,
      children: [(0, i.jsx)("div", {
        className: O.previewButtonContainer,
        children: b
      }), (0, i.jsx)(I.Z, {
        subscriptionTier: A.Si.TIER_2,
        submitting: L,
        premiumModalAnalyticsLocation: {
          section: N.jXE.SOUNDBOARD_SOUND_PICKER,
          object: N.qAy.BUTTON_CTA
        },
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.GREEN,
        onClick: () => {
          D(!0)
        },
        onSubscribeModalClose: e => {
          D(!1), e && s()
        }
      })]
    })]
  })
}