t.d(s, {
  Z: function() {
    return D
  }
});
var n = t(735250),
  i = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  o = t(570140),
  c = t(232567),
  E = t(809206),
  d = t(497321),
  _ = t(634894),
  T = t(100527),
  S = t(906732),
  u = t(475977),
  I = t(957730),
  N = t(296810),
  A = t(935147),
  C = t(25373),
  O = t(246946),
  m = t(25990),
  h = t(594174),
  g = t(74538),
  R = t(695346),
  M = t(265159),
  x = t(532495);

function D() {
  let e = (0, r.e7)([h.default], () => {
    let e = h.default.getCurrentUser();
    return l()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  });
  i.useEffect(() => {
    (0, c.In)(e.id)
  }, [e.id]);
  let s = (0, r.e7)([O.Z], () => O.Z.hidePersonalInformation),
    {
      pendingBio: t,
      ...a
    } = (0, r.cj)([m.Z], () => m.Z.getAllPending()),
    D = R.dN.useSetting() && null != t ? I.ZP.parse(void 0, t).content : t,
    p = g.ZP.canUsePremiumProfileCustomization(e),
    {
      analyticsLocations: L
    } = (0, S.ZP)(T.Z.PROFILE);
  i.useEffect(() => () => o.Z.wait(E.W3), []);
  let P = "UserSettingsProfileCustomization";
  return ((0, _.j)({
    location: P + " auto on",
    autoTrackExposure: !0
  }), (0, _.j)({
    location: P + " auto off",
    autoTrackExposure: !1
  }), s) ? (0, n.jsx)(d.Z, {}) : (0, n.jsxs)(S.Gt, {
    value: L,
    children: [(0, n.jsx)(u.Z, {}), (0, n.jsx)(N.Z, {
      profilePreview: (0, n.jsx)(C.Z, {
        user: e,
        canUsePremiumCustomization: p,
        onUpsellClick: M.Z,
        pendingBio: D,
        ...a
      }),
      children: (0, n.jsx)(x.Z, {})
    }), !p && (0, n.jsx)(A.Z, {
      user: e
    })]
  })
}