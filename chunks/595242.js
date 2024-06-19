t.d(s, {
  Z: function() {
    return m
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(570140),
  E = t(355467),
  d = t(179360),
  _ = t(821849),
  T = t(15640),
  S = t(314684),
  u = t(899667),
  I = t(853872),
  N = t(78839),
  A = t(783739),
  C = t(981631),
  O = t(76676);

function m() {
  i.useEffect(() => {
    c.Z.wait(() => {
      E.jg(), E.tZ(), (0, d.X8)(), (0, _.Y2)(null, null, C.JjL.DISCOVERY), (0, d.tH)(!0)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: s
  } = (0, r.cj)([N.ZP], () => ({
    hasFetchedSubscriptions: N.ZP.hasFetchedSubscriptions(),
    premiumSubscription: N.ZP.getPremiumTypeSubscription()
  })), t = (0, T.V)(), a = (0, r.e7)([I.Z], () => I.Z.hasFetchedPaymentSources), m = (0, r.e7)([u.Z], () => u.Z.isFetchingCurrentUserAppliedBoosts);
  return ((0, S.JR)(), e && t && a && !m) ? (0, n.jsxs)("div", {
    className: O.container,
    children: [(0, n.jsx)("div", {
      className: O.background
    }), (0, n.jsx)("div", {
      className: O.content,
      children: (0, n.jsx)(A.Z, {
        premiumSubscription: s
      })
    })]
  }) : (0, n.jsx)("div", {
    className: l()(O.container, O.loading),
    children: (0, n.jsx)(o.Spinner, {})
  })
}