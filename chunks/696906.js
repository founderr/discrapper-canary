t(789020);
var i = t(735250),
  r = t(470079),
  l = t(512722),
  o = t.n(l),
  u = t(442837),
  s = t(570140),
  a = t(821849),
  c = t(906732),
  d = t(887706),
  _ = t(724870),
  f = t(594174),
  E = t(509545),
  I = t(55563),
  g = t(551428),
  S = t(630388),
  p = t(270144),
  m = t(171246),
  C = t(689011),
  T = t(714441),
  N = t(981631),
  A = t(689938);
n.Z = e => {
  var n;
  let t, {
      guildId: l,
      groupListingId: v,
      analyticsLocation: h,
      showBenefitsFirst: R,
      skuId: L,
      onComplete: M,
      forcesTransitionToGuild: O
    } = e,
    Z = (0, u.e7)([I.Z], () => null != L ? I.Z.get(L) : void 0, [L]),
    D = (0, u.e7)([g.Z], () => null != L ? g.Z.getForSKU(L) : void 0, [L]),
    b = (0, u.e7)([E.Z], () => null != L ? E.Z.getForSKU(L) : void 0, [L]),
    P = null != b ? b[0] : void 0,
    x = null == Z ? void 0 : Z.applicationId,
    U = (null == D ? void 0 : D.published) === !0 && null != Z && (0, S.yE)(Z.flags, N.l4R.AVAILABLE),
    G = null == P ? void 0 : P.skuId,
    j = (0, p.IX)(x),
    B = (0, p._k)(v, {
      includeSoftDeleted: !0
    }).map(e => e.subscription_plans[0].id),
    {
      analyticsLocations: y
    } = (0, c.ZP)(),
    {
      activeSubscription: w,
      activeEntitlement: F
    } = (0, p.F5)(x, l),
    k = (0, p.CR)(x, l),
    H = (0, d.Z)(),
    W = null != Z && (0, m.KW)(Z.flags),
    Y = null != F && F.userId === (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
    V = null == F || Y,
    K = null == F || B.length > 1,
    z = null != l || k.length > 0,
    J = W && Y,
    q = null != P && null != j && V && K && (z || W) && !J;
  return V ? z ? J && null != P && (t = A.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
    tierName: P.name
  })) : t = A.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : t = A.Z.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
    U && null != G && H && !(E.Z.isFetchingForSKU(G) || E.Z.isLoadedForSKU(G)) && s.Z.wait(() => {
      (0, a.GZ)(G)
    })
  }, [U, G, H]), {
    openModal: r.useCallback(() => {
      o()(null != j, "No application"), o()(null != P, "No subscription plan"), o()(U, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, _.h)({
          activeSubscription: w,
          analyticsSubscriptionType: N.NYc.APPLICATION,
          analyticsLocations: y,
          analyticsLocation: h,
          renderHeader: (e, n, t) => (0, i.jsx)(C.t, {
            step: t,
            onClose: () => n(!1)
          }),
          initialPlanId: P.id,
          skuId: P.skuId,
          guildId: l,
          eligibleApplicationSubscriptionGuilds: k,
          planGroup: B,
          applicationId: j.id,
          showBenefitsFirst: R,
          onComplete: M,
          forcesTransitionToGuild: O
        })
      };
      !z && W ? (0, T.i)({
        applicationName: j.name,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [U, P, B, j, l, z, W, y, h, w, R, k, M, O]),
    canOpenModal: q,
    cannotOpenReason: t
  }
}