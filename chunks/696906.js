n(789020);
var i = n(735250),
  l = n(470079),
  a = n(512722),
  s = n.n(a),
  o = n(442837),
  r = n(570140),
  u = n(821849),
  c = n(906732),
  d = n(887706),
  C = n(724870),
  p = n(594174),
  I = n(509545),
  T = n(55563),
  h = n(551428),
  L = n(630388),
  S = n(270144),
  E = n(171246),
  N = n(689011),
  f = n(714441),
  A = n(981631),
  _ = n(689938);
t.Z = e => {
  var t;
  let n, {
      guildId: a,
      groupListingId: O,
      analyticsLocation: v,
      showBenefitsFirst: R,
      skuId: g,
      onComplete: P,
      forcesTransitionToGuild: Z
    } = e,
    m = (0, o.e7)([T.Z], () => null != g ? T.Z.get(g) : void 0, [g]),
    b = (0, o.e7)([h.Z], () => null != g ? h.Z.getForSKU(g) : void 0, [g]),
    F = (0, o.e7)([I.Z], () => null != g ? I.Z.getForSKU(g) : void 0, [g]),
    w = null != F ? F[0] : void 0,
    y = null == m ? void 0 : m.applicationId,
    D = (null == b ? void 0 : b.published) === !0 && null != m && (0, L.yE)(m.flags, A.l4R.AVAILABLE),
    M = null == w ? void 0 : w.skuId,
    x = (0, S.IX)(y),
    j = (0, S._k)(O, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: H
    } = (0, c.ZP)(),
    {
      activeSubscription: U,
      activeEntitlement: k
    } = (0, S.F5)(y, a),
    B = (0, S.CR)(y, a),
    G = (0, d.Z)(),
    Y = null != m && (0, E.KW)(m.flags),
    K = null != k && k.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    V = null == k || K,
    z = null == k || j.length > 1,
    W = null != a || B.length > 0,
    q = Y && K,
    X = null != w && null != x && V && z && (W || Y) && !q;
  return V ? W ? q && null != w && (n = _.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: w.name
  })) : n = _.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = _.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, l.useEffect(() => {
    D && null != M && G && !(I.Z.isFetchingForSKU(M) || I.Z.isLoadedForSKU(M)) && r.Z.wait(() => {
      (0, u.GZ)(M)
    })
  }, [D, M, G]), {
    openModal: l.useCallback(() => {
      s()(null != x, "No application"), s()(null != w, "No subscription plan"), s()(D, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, C.h)({
          activeSubscription: U,
          analyticsSubscriptionType: A.NYc.APPLICATION,
          analyticsLocations: H,
          analyticsLocation: v,
          renderHeader: (e, t, n) => (0, i.jsx)(N.t, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: w.id,
          skuId: w.skuId,
          guildId: a,
          eligibleApplicationSubscriptionGuilds: B,
          planGroup: j,
          applicationId: x.id,
          showBenefitsFirst: R,
          onComplete: P,
          forcesTransitionToGuild: Z
        })
      };
      !W && Y ? (0, f.i)({
        applicationName: x.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [D, w, j, x, a, W, Y, H, v, U, R, B, P, Z]),
    canOpenModal: X,
    cannotOpenReason: n
  }
}