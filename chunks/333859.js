t.d(s, {
  c: function() {
    return m
  }
});
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(570140),
  o = t(37234),
  c = t(100527),
  E = t(906732),
  d = t(327943),
  _ = t(539873),
  T = t(197115),
  S = t(626135),
  u = t(981631),
  I = t(474936),
  N = t(689938),
  A = t(152593),
  C = t(331651);
let O = () => {
    r.Z.dispatch({
      type: "APP_ICON_EDITOR_OPEN"
    }), (0, o.xf)()
  },
  m = () => {
    let {
      analyticsLocations: e
    } = (0, E.ZP)(c.Z.USER_SETTINGS), s = (0, a.e7)([d.Z], () => d.Z.isUpsellPreview);
    return i.useEffect(() => {
      s && S.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
        type: I.cd.APP_ICON_UPSELL,
        location_stack: e
      })
    }, []), (0, n.jsxs)("div", {
      className: A.selectionGroup,
      children: [(0, n.jsx)(_.Z, {
        disabled: s,
        renderCTAButtons: () => (0, n.jsxs)("div", {
          className: A.tryItOutButtons,
          children: [(0, n.jsx)(l.Button, {
            color: s ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
            onClick: () => O(),
            children: N.Z.Messages.APP_ICON_PREVIEW_TITLE
          }), s ? (0, n.jsx)(T.Z, {
            subscriptionTier: I.Si.TIER_2,
            buttonText: N.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          }) : null]
        })
      }), (0, n.jsx)(l.FormDivider, {
        className: C.marginTop20
      })]
    })
  }