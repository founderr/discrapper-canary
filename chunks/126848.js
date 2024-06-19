n.d(t, {
  Z: function() {
    return x
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(650032),
  a = n(104494),
  c = n(639119),
  d = n(655525),
  u = n(52188),
  h = n(248042),
  m = n(924540),
  p = n(351402),
  b = n(170671),
  f = n(474936),
  S = n(751008);

function x(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: x
    } = e,
    v = (0, c.N)(),
    g = (0, a.Ng)(),
    N = (0, h.Vi)(),
    j = (0, r.e7)([p.Z], () => p.Z.isLocalizedPromoEnabled) && null == v && null == n,
    {
      enabled: C
    } = o._.useExperiment({
      location: "UserSettingsPremiumLabel"
    }, {
      autoTrackExposure: !1
    }),
    T = C && (null == v ? void 0 : v.trial_id) === f.a7;
  return t = N ? (0, i.jsx)(d.Z, {}) : null != g ? (0, i.jsx)(m.GN, {
    isTabSelected: x,
    userDiscount: g,
    includesAmountOff: !1
  }) : null == v || T ? null != n ? n : j ? (0, i.jsx)(u.k, {
    entryPoint: u.U.SettingsMenu
  }) : (0, i.jsx)(b.Z, {
    isSelected: x
  }) : (0, i.jsx)(m.$H, {
    isTabSelected: x,
    trialOffer: v
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(S.premiumLabel, {
        [S.selected]: (x || j) && !N
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(S.background, {
        [S.auPromo]: j && !x,
        [S.auPromoSelected]: j && x,
        [S.selectedBackground]: !j && !N && x
      })
    })]
  })
}