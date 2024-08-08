t.d(n, {
  I: function() {
return I;
  }
});
var l = t(735250),
  r = t(470079),
  i = t(442837),
  a = t(481060),
  o = t(16084),
  s = t(558381),
  c = t(821849),
  u = t(106976),
  d = t(488915),
  m = t(171246),
  f = t(509545),
  _ = t(55563),
  p = t(551428),
  C = t(937615),
  v = t(147496),
  h = t(519896),
  E = t(981631),
  x = t(689938);

function I(e) {
  r.useEffect(() => {
if (null != e)
  (0, o.jU)(e), (0, c.GZ)(e), (0, s.km)(e);
  }, [e]);
  let n = (0, i.e7)([_.Z], () => null != e ? _.Z.get(e) : void 0, [e]),
t = (0, i.e7)([f.Z], () => null != e ? f.Z.getForSKU(e) : void 0, [e]),
I = r.useMemo(() => null != t ? t.map(e => e.id)[0] : void 0, [t]),
T = (0, i.e7)([p.Z], () => null != e ? p.Z.getForSKU(e) : void 0, [e]);
  r.useEffect(() => {
if (null != I)
  (0, u.vY)(I);
  }, [I]);
  let g = null == n ? void 0 : n.applicationId,
N = (0, i.e7)([d.Z], () => null != g ? d.Z.getSubscriptionGroupListingForApplication(g) : null, [g]),
S = r.useCallback(() => {
  if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == N ? void 0 : N.id) == null || (null == N ? void 0 : N.sku_flags) == null)
    return null;
  (0, a.openModal)(e => {
    let {
      onClose: t,
      transitionState: r
    } = e;
    return (0, l.jsx)(h.SubscriptionDetailsModal, {
      appId: n.applicationId,
      groupListingId: N.id,
      groupListingType: (0, m.KW)(N.sku_flags) ? 'user' : 'guild',
      onClose: t,
      skuId: n.id,
      transitionState: r
    });
  });
}, [
  null == n ? void 0 : n.applicationId,
  null == n ? void 0 : n.id,
  null == N ? void 0 : N.id,
  null == N ? void 0 : N.sku_flags
]),
b = r.useCallback(() => {
  if (null == n)
    return null;
  (0, a.openModal)(e => {
    let {
      onClose: t,
      transitionState: r
    } = e;
    return (0, l.jsx)(v.ItemDetailsModal, {
      appId: n.applicationId,
      skuId: n.id,
      onClose: t,
      transitionState: r
    });
  });
}, [n]);
  if (null != n && null != T && (null == n || n.type !== E.epS.SUBSCRIPTION || null != N)) {
if (null == e || null != n && !n.available)
  return {
    disabled: !0,
    label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
  };
if (n.type === E.epS.SUBSCRIPTION) {
  if (null == t || 0 === t.length)
    return {
      disabled: !0,
      label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
    };
  let e = t[0];
  return {
    disabled: !1,
    label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
      skuName: n.name,
      price: (0, C.T4)(e.price, e.currency)
    }),
    onClick: S
  };
}
return null == n.price ? {
  disabled: !0,
  label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
} : {
  disabled: !1,
  label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
    skuName: n.name,
    price: (0, C.T4)(n.price.amount, n.price.currency)
  }),
  onClick: b
};
  }
}