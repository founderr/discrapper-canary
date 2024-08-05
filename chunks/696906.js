t(789020);
var r = t(735250),
  i = t(470079),
  o = t(512722),
  l = t.n(o),
  u = t(442837),
  a = t(570140),
  s = t(821849),
  c = t(906732),
  d = t(887706),
  _ = t(728345),
  f = t(724870),
  E = t(594174),
  I = t(509545),
  g = t(55563),
  p = t(551428),
  S = t(630388),
  C = t(270144),
  T = t(171246),
  m = t(689011),
  A = t(714441),
  N = t(981631),
  h = t(689938);
n.Z = e => {
  var n;
  let t, {
  guildId: o,
  groupListingId: v,
  analyticsLocation: L,
  showBenefitsFirst: R,
  skuId: M,
  onComplete: O,
  forcesTransitionToGuild: b
} = e,
D = (0, u.e7)([g.Z], () => null != M ? g.Z.get(M) : void 0, [M]),
U = (0, u.e7)([p.Z], () => null != M ? p.Z.getForSKU(M) : void 0, [M]),
Z = (0, u.e7)([I.Z], () => null != M ? I.Z.getForSKU(M) : void 0, [M]),
P = null != Z ? Z[0] : void 0,
y = null == D ? void 0 : D.applicationId,
x = (null == U ? void 0 : U.published) === !0 && null != D && (0, S.yE)(D.flags, N.l4R.AVAILABLE),
G = null == P ? void 0 : P.skuId,
{
  data: w
} = (0, _.I)(y),
j = (0, C._k)(v, {
  includeSoftDeleted: !0
}).map(e => e.subscription_plans[0].id),
{
  analyticsLocations: F
} = (0, c.ZP)(),
{
  activeSubscription: B,
  activeEntitlement: k
} = (0, C.F5)(y, o),
H = (0, C.CR)(y, o),
W = (0, d.Z)(),
V = null != D && (0, T.KW)(D.flags),
Y = null != k && k.userId === (null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
K = null == k || Y,
z = null == k || j.length > 1,
q = null != o || H.length > 0,
J = V && Y,
X = null != P && null != w && K && z && (q || V) && !J;
  return K ? q ? J && null != P && (t = h.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
tierName: P.name
  })) : t = h.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : t = h.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, i.useEffect(() => {
x && null != G && W && !(I.Z.isFetchingForSKU(G) || I.Z.isLoadedForSKU(G)) && a.Z.wait(() => {
  (0, s.GZ)(G);
});
  }, [
x,
G,
W
  ]), {
openModal: i.useCallback(() => {
  l()(null != w, 'No application'), l()(null != P, 'No subscription plan'), l()(x, 'Cannot purchase this unpublished plan');
  let e = () => {
    (0, f.h)({
      activeSubscription: B,
      analyticsSubscriptionType: N.NYc.APPLICATION,
      analyticsLocations: F,
      analyticsLocation: L,
      renderHeader: (e, n, t) => (0, r.jsx)(m.t, {
        step: t,
        onClose: () => n(!1)
      }),
      initialPlanId: P.id,
      skuId: P.skuId,
      guildId: o,
      eligibleApplicationSubscriptionGuilds: H,
      planGroup: j,
      applicationId: w.id,
      showBenefitsFirst: R,
      onComplete: O,
      forcesTransitionToGuild: b
    });
  };
  !q && V ? (0, A.i)({
    applicationName: w.name,
    onConfirm: e,
    onCancel: () => {}
  }) : e();
}, [
  x,
  P,
  j,
  w,
  o,
  q,
  V,
  F,
  L,
  B,
  R,
  H,
  O,
  b
]),
canOpenModal: X,
cannotOpenReason: t
  };
};