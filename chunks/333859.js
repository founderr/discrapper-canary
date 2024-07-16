t.d(s, {
  c: function() {
return h;
  }
});
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(570140),
  l = t(37234),
  c = t(100527),
  d = t(906732),
  _ = t(327943),
  E = t(539873),
  u = t(197115),
  T = t(626135),
  I = t(981631),
  S = t(474936),
  N = t(689938),
  C = t(245732),
  m = t(549856);
let A = () => {
o.Z.dispatch({
  type: 'APP_ICON_EDITOR_OPEN'
}), (0, l.xf)();
  },
  h = () => {
let {
  analyticsLocations: e
} = (0, d.ZP)(c.Z.USER_SETTINGS), s = (0, i.e7)([_.Z], () => _.Z.isUpsellPreview);
return a.useEffect(() => {
  s && T.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
    type: S.cd.APP_ICON_UPSELL,
    location_stack: e
  });
}, []), (0, n.jsxs)('div', {
  className: C.selectionGroup,
  children: [
    (0, n.jsx)(E.Z, {
      disabled: s,
      renderCTAButtons: () => (0, n.jsxs)('div', {
        className: C.tryItOutButtons,
        children: [
          (0, n.jsx)(r.Button, {
            color: s ? r.Button.Colors.PRIMARY : r.Button.Colors.BRAND,
            onClick: () => A(),
            children: N.Z.Messages.APP_ICON_PREVIEW_TITLE
          }),
          s ? (0, n.jsx)(u.Z, {
            subscriptionTier: S.Si.TIER_2,
            buttonText: N.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          }) : null
        ]
      })
    }),
    (0, n.jsx)(r.FormDivider, {
      className: m.marginTop20
    })
  ]
});
  };