t(789020);
var i = t(735250),
  o = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  s = t(570140),
  u = t(821849),
  d = t(906732),
  c = t(887706),
  p = t(728345),
  f = t(724870),
  m = t(594174),
  h = t(509545),
  I = t(55563),
  _ = t(551428),
  g = t(630388),
  C = t(270144),
  b = t(171246),
  v = t(689011),
  S = t(714441),
  y = t(981631),
  x = t(689938);
n.Z = e => {
  var n;
  let t, {
  guildId: a,
  groupListingId: M,
  analyticsLocation: N,
  showBenefitsFirst: Z,
  skuId: A,
  onComplete: w,
  forcesTransitionToGuild: j
} = e,
L = (0, r.e7)([I.Z], () => null != A ? I.Z.get(A) : void 0, [A]),
R = (0, r.e7)([_.Z], () => null != A ? _.Z.getForSKU(A) : void 0, [A]),
P = (0, r.e7)([h.Z], () => null != A ? h.Z.getForSKU(A) : void 0, [A]),
T = null != P ? P[0] : void 0,
k = null == L ? void 0 : L.applicationId,
E = (null == R ? void 0 : R.published) === !0 && null != L && (0, g.yE)(L.flags, y.l4R.AVAILABLE),
B = null == T ? void 0 : T.skuId,
{
  data: O
} = (0, p.I)(k),
U = (0, C._k)(M, {
  includeSoftDeleted: !0
}).map(e => e.subscription_plans[0].id),
{
  analyticsLocations: D
} = (0, d.ZP)(),
{
  activeSubscription: F,
  activeEntitlement: K
} = (0, C.F5)(k, a),
W = (0, C.CR)(k, a),
G = (0, c.Z)(),
z = null != L && (0, b.KW)(L.flags),
H = null != K && K.userId === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
V = null == K || H,
Y = null == K || U.length > 1,
q = null != a || W.length > 0,
X = z && H,
J = null != T && null != O && V && Y && (q || z) && !X;
  return V ? q ? X && null != T && (t = x.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
tierName: T.name
  })) : t = x.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : t = x.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, o.useEffect(() => {
E && null != B && G && !(h.Z.isFetchingForSKU(B) || h.Z.isLoadedForSKU(B)) && s.Z.wait(() => {
  (0, u.GZ)(B);
});
  }, [
E,
B,
G
  ]), {
openModal: o.useCallback(() => {
  l()(null != O, 'No application'), l()(null != T, 'No subscription plan'), l()(E, 'Cannot purchase this unpublished plan');
  let e = () => {
    (0, f.h)({
      activeSubscription: F,
      analyticsSubscriptionType: y.NYc.APPLICATION,
      analyticsLocations: D,
      analyticsLocation: N,
      renderHeader: (e, n, t) => (0, i.jsx)(v.t, {
        step: t,
        onClose: () => n(!1)
      }),
      initialPlanId: T.id,
      skuId: T.skuId,
      guildId: a,
      eligibleApplicationSubscriptionGuilds: W,
      planGroup: U,
      applicationId: O.id,
      showBenefitsFirst: Z,
      onComplete: w,
      forcesTransitionToGuild: j
    });
  };
  !q && z ? (0, S.i)({
    applicationName: O.name,
    onConfirm: e,
    onCancel: () => {}
  }) : e();
}, [
  E,
  T,
  U,
  O,
  a,
  q,
  z,
  D,
  N,
  F,
  Z,
  W,
  w,
  j
]),
canOpenModal: J,
cannotOpenReason: t
  };
};