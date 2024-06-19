s.r(n), s.d(n, {
  default: function() {
    return U
  }
}), s(47120);
var a = s(735250),
  t = s(470079),
  o = s(481060),
  c = s(230711),
  i = s(2052),
  l = s(906732),
  r = s(174609),
  O = s(626135),
  C = s(790527),
  I = s(940165),
  _ = s(474936),
  M = s(981631),
  T = s(871465),
  d = s(689938),
  N = s(517853);

function U(e) {
  let {
    onClose: n,
    ...U
  } = e, S = (0, i.O)(), {
    analyticsLocations: E
  } = (0, l.ZP)(), [u, A] = t.useState(!1);
  t.useEffect(() => {
    if (!u) O.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
      type: _.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: S.location,
      location_stack: E
    }), A(!0)
  }, [S.location, E, u]);
  let L = (0, T.LB)(!1);
  return (0, a.jsx)(C.Z, {
    type: _.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
    artContainerClassName: N.image,
    artURL: s(98165),
    title: d.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    glowUp: d.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    body: d.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_DESCRIPTION,
    showEnhancedUpsell: !0,
    analyticsLocation: {
      section: M.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    },
    enableArtBoxShadow: !1,
    onSubscribeClick: r.Z,
    secondaryCTA: d.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
    onSecondaryClick: () => {
      n(), c.Z.open(M.oAB.PREMIUM)
    },
    onClose: n,
    ...U,
    children: (0, a.jsx)(o.FormItem, {
      title: d.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_LABEL,
      className: N.optionsContainerWrapper,
      children: (0, a.jsx)("div", {
        className: N.optionsContainer,
        children: L.map((e, n) => {
          let s = e.value;
          return s === T.YC.CLASSIC ? null : (0, a.jsx)(I.Z, {
            label: e.label,
            soundpack: s,
            description: e.description,
            location: "upsellModal"
          }, n)
        })
      })
    })
  })
}