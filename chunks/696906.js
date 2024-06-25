t(789020);
var i = t(735250),
  a = t(470079),
  r = t(512722),
  o = t.n(r),
  l = t(442837),
  s = t(570140),
  c = t(821849),
  d = t(906732),
  u = t(887706),
  _ = t(724870),
  p = t(594174),
  m = t(509545),
  I = t(55563),
  f = t(551428),
  g = t(630388),
  h = t(270144),
  C = t(171246),
  v = t(689011),
  E = t(714441),
  x = t(981631),
  b = t(689938);
n.Z = e => {
  var n;
  let t, {
      guildId: r,
      groupListingId: A,
      analyticsLocation: P,
      showBenefitsFirst: T,
      skuId: R,
      onComplete: N,
      forcesTransitionToGuild: S
    } = e,
    L = (0, l.e7)([I.Z], () => null != R ? I.Z.get(R) : void 0, [R]),
    O = (0, l.e7)([f.Z], () => null != R ? f.Z.getForSKU(R) : void 0, [R]),
    j = (0, l.e7)([m.Z], () => null != R ? m.Z.getForSKU(R) : void 0, [R]),
    y = null != j ? j[0] : void 0,
    D = null == L ? void 0 : L.applicationId,
    Z = (null == O ? void 0 : O.published) === !0 && null != L && (0, g.yE)(L.flags, x.l4R.AVAILABLE),
    M = null == y ? void 0 : y.skuId,
    B = (0, h.IX)(D),
    k = (0, h._k)(A, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: w
    } = (0, d.ZP)(),
    {
      activeSubscription: G,
      activeEntitlement: H
    } = (0, h.F5)(D, r),
    U = (0, h.CR)(D, r),
    F = (0, u.Z)(),
    Y = null != L && (0, C.KW)(L.flags),
    W = null != H && H.userId === (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
    V = null == H || W,
    z = null == H || k.length > 1,
    K = null != r || U.length > 0,
    q = Y && W,
    J = null != y && null != B && V && z && (K || Y) && !q;
  return V ? K ? q && null != y && (t = b.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: y.name
  })) : t = b.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : t = b.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, a.useEffect(() => {
    Z && null != M && F && !(m.Z.isFetchingForSKU(M) || m.Z.isLoadedForSKU(M)) && s.Z.wait(() => {
      (0, c.GZ)(M)
    })
  }, [Z, M, F]), {
    openModal: a.useCallback(() => {
      o()(null != B, "No application"), o()(null != y, "No subscription plan"), o()(Z, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, _.h)({
          activeSubscription: G,
          analyticsSubscriptionType: x.NYc.APPLICATION,
          analyticsLocations: w,
          analyticsLocation: P,
          renderHeader: (e, n, t) => (0, i.jsx)(v.t, {
            step: t,
            onClose: () => n(!1)
          }),
          initialPlanId: y.id,
          skuId: y.skuId,
          guildId: r,
          eligibleApplicationSubscriptionGuilds: U,
          planGroup: k,
          applicationId: B.id,
          showBenefitsFirst: T,
          onComplete: N,
          forcesTransitionToGuild: S
        })
      };
      !K && Y ? (0, E.i)({
        applicationName: B.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [Z, y, k, B, r, K, Y, w, P, G, T, U, N, S]),
    canOpenModal: J,
    cannotOpenReason: t
  }
}