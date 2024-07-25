t(789020);
var i = t(735250),
  o = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(442837),
  s = t(570140),
  u = t(821849),
  d = t(906732),
  c = t(887706),
  p = t(728345),
  f = t(724870),
  h = t(594174),
  m = t(509545),
  I = t(55563),
  g = t(551428),
  _ = t(630388),
  C = t(270144),
  b = t(171246),
  v = t(689011),
  S = t(714441),
  x = t(981631),
  y = t(689938);
n.Z = e => {
  var n;
  let t, {
  guildId: l,
  groupListingId: M,
  analyticsLocation: N,
  showBenefitsFirst: w,
  skuId: Z,
  onComplete: A,
  forcesTransitionToGuild: j
} = e,
L = (0, r.e7)([I.Z], () => null != Z ? I.Z.get(Z) : void 0, [Z]),
P = (0, r.e7)([g.Z], () => null != Z ? g.Z.getForSKU(Z) : void 0, [Z]),
k = (0, r.e7)([m.Z], () => null != Z ? m.Z.getForSKU(Z) : void 0, [Z]),
R = null != k ? k[0] : void 0,
T = null == L ? void 0 : L.applicationId,
E = (null == P ? void 0 : P.published) === !0 && null != L && (0, _.yE)(L.flags, x.l4R.AVAILABLE),
B = null == R ? void 0 : R.skuId,
{
  data: U
} = (0, p.I)(T),
O = (0, C._k)(M, {
  includeSoftDeleted: !0
}).map(e => e.subscription_plans[0].id),
{
  analyticsLocations: D
} = (0, d.ZP)(),
{
  activeSubscription: W,
  activeEntitlement: F
} = (0, C.F5)(T, l),
G = (0, C.CR)(T, l),
K = (0, c.Z)(),
z = null != L && (0, b.KW)(L.flags),
H = null != F && F.userId === (null === (n = h.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
V = null == F || H,
Y = null == F || O.length > 1,
q = null != l || G.length > 0,
X = z && H,
J = null != R && null != U && V && Y && (q || z) && !X;
  return V ? q ? X && null != R && (t = y.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
tierName: R.name
  })) : t = y.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : t = y.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, o.useEffect(() => {
E && null != B && K && !(m.Z.isFetchingForSKU(B) || m.Z.isLoadedForSKU(B)) && s.Z.wait(() => {
  (0, u.GZ)(B);
});
  }, [
E,
B,
K
  ]), {
openModal: o.useCallback(() => {
  a()(null != U, 'No application'), a()(null != R, 'No subscription plan'), a()(E, 'Cannot purchase this unpublished plan');
  let e = () => {
    (0, f.h)({
      activeSubscription: W,
      analyticsSubscriptionType: x.NYc.APPLICATION,
      analyticsLocations: D,
      analyticsLocation: N,
      renderHeader: (e, n, t) => (0, i.jsx)(v.t, {
        step: t,
        onClose: () => n(!1)
      }),
      initialPlanId: R.id,
      skuId: R.skuId,
      guildId: l,
      eligibleApplicationSubscriptionGuilds: G,
      planGroup: O,
      applicationId: U.id,
      showBenefitsFirst: w,
      onComplete: A,
      forcesTransitionToGuild: j
    });
  };
  !q && z ? (0, S.i)({
    applicationName: U.name,
    onConfirm: e,
    onCancel: () => {}
  }) : e();
}, [
  E,
  R,
  O,
  U,
  l,
  q,
  z,
  D,
  N,
  W,
  w,
  G,
  A,
  j
]),
canOpenModal: J,
cannotOpenReason: t
  };
};