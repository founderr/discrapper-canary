o(789020);
var t = o(735250),
  i = o(470079),
  a = o(512722),
  r = o.n(a),
  l = o(442837),
  c = o(570140),
  d = o(821849),
  s = o(906732),
  u = o(887706),
  f = o(728345),
  _ = o(724870),
  m = o(594174),
  p = o(509545),
  I = o(55563),
  h = o(551428),
  b = o(630388),
  C = o(270144),
  g = o(171246),
  v = o(689011),
  y = o(714441),
  B = o(981631),
  x = o(689938);
n.Z = e => {
  var n;
  let o, {
  guildId: a,
  groupListingId: S,
  analyticsLocation: M,
  showBenefitsFirst: w,
  skuId: T,
  onComplete: L,
  forcesTransitionToGuild: G
} = e,
N = (0, l.e7)([I.Z], () => null != T ? I.Z.get(T) : void 0, [T]),
k = (0, l.e7)([h.Z], () => null != T ? h.Z.getForSKU(T) : void 0, [T]),
O = (0, l.e7)([p.Z], () => null != T ? p.Z.getForSKU(T) : void 0, [T]),
j = null != O ? O[0] : void 0,
A = null == N ? void 0 : N.applicationId,
Z = (null == k ? void 0 : k.published) === !0 && null != N && (0, b.yE)(N.flags, B.l4R.AVAILABLE),
E = null == j ? void 0 : j.skuId,
{
  data: R
} = (0, f.I)(A),
P = (0, C._k)(S, {
  includeSoftDeleted: !0
}).map(e => e.subscription_plans[0].id),
{
  analyticsLocations: U
} = (0, s.ZP)(),
{
  activeSubscription: F,
  activeEntitlement: D
} = (0, C.F5)(A, a),
W = (0, C.CR)(A, a),
H = (0, u.Z)(),
V = null != N && (0, g.KW)(N.flags),
z = null != D && D.userId === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
K = null == D || z,
Y = null == D || P.length > 1,
q = null != a || W.length > 0,
J = V && z,
X = null != j && null != R && K && Y && (q || V) && !J;
  return K ? q ? J && null != j && (o = x.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
tierName: j.name
  })) : o = x.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : o = x.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, i.useEffect(() => {
Z && null != E && H && !(p.Z.isFetchingForSKU(E) || p.Z.isLoadedForSKU(E)) && c.Z.wait(() => {
  (0, d.GZ)(E);
});
  }, [
Z,
E,
H
  ]), {
openModal: i.useCallback(() => {
  r()(null != R, 'No application'), r()(null != j, 'No subscription plan'), r()(Z, 'Cannot purchase this unpublished plan');
  let e = () => {
    (0, _.h)({
      activeSubscription: F,
      analyticsSubscriptionType: B.NYc.APPLICATION,
      analyticsLocations: U,
      analyticsLocation: M,
      renderHeader: (e, n, o) => (0, t.jsx)(v.t, {
        step: o,
        onClose: () => n(!1)
      }),
      initialPlanId: j.id,
      skuId: j.skuId,
      guildId: a,
      eligibleApplicationSubscriptionGuilds: W,
      planGroup: P,
      applicationId: R.id,
      showBenefitsFirst: w,
      onComplete: L,
      forcesTransitionToGuild: G
    });
  };
  !q && V ? (0, y.i)({
    applicationName: R.name,
    onConfirm: e,
    onCancel: () => {}
  }) : e();
}, [
  Z,
  j,
  P,
  R,
  a,
  q,
  V,
  U,
  M,
  F,
  w,
  W,
  L,
  G
]),
canOpenModal: X,
cannotOpenReason: o
  };
};