"use strict";
n.r(t), n.d(t, {
  useLoadStoreListingDetails: function() {
    return h
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  u = n("442837"),
  i = n("481060"),
  o = n("16084"),
  s = n("558381"),
  r = n("821849"),
  d = n("106976"),
  c = n("488915"),
  p = n("171246"),
  m = n("509545"),
  f = n("55563"),
  S = n("147496"),
  C = n("519896"),
  v = n("981631");
let E = "useLoadStoreListingDetailsNotReadyModal";

function h(e) {
  let [t, n] = a.useState(!1);
  a.useEffect(() => {
    null != e && ((0, o.fetchSKU)(e), (0, s.fetchStoreListingForSku)(e), (0, r.fetchSubscriptionPlansForSKU)(e))
  }, [e]);
  let h = (0, u.useStateFromStores)([f.default], () => null != e ? f.default.get(e) : void 0, [e]),
    N = (0, u.useStateFromStores)([m.default], () => null != e ? m.default.getForSKU(e) : void 0, [e]),
    g = a.useMemo(() => null != N ? N.map(e => e.id)[0] : void 0, [N]);
  a.useEffect(() => {
    null != g && (0, d.fetchSubscriptionListingForPlan)(g)
  }, [g]);
  let y = null == h ? void 0 : h.applicationId,
    T = (0, u.useStateFromStores)([c.default], () => null != y ? c.default.getSubscriptionGroupListingForApplication(y) : null, [y]),
    I = a.useCallback(() => {
      if ((null == h ? void 0 : h.applicationId) == null || (null == h ? void 0 : h.id) == null || (null == T ? void 0 : T.id) == null || (null == T ? void 0 : T.sku_flags) == null) return null;
      (0, i.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, l.jsx)(C.SubscriptionDetailsModal, {
          appId: h.applicationId,
          groupListingId: T.id,
          groupListingType: (0, p.isApplicationUserSubscription)(T.sku_flags) ? "user" : "guild",
          onClose: t,
          skuId: h.id,
          transitionState: n
        })
      })
    }, [null == h ? void 0 : h.applicationId, null == h ? void 0 : h.id, null == T ? void 0 : T.id, null == T ? void 0 : T.sku_flags]),
    x = a.useCallback(() => {
      if (null == h) return null;
      (0, i.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, l.jsx)(S.ItemDetailsModal, {
          appId: h.applicationId,
          skuId: h.id,
          onClose: t,
          transitionState: n
        })
      })
    }, [h]),
    O = null == h || null != h && h.type === v.SKUTypes.SUBSCRIPTION && null == T,
    j = a.useCallback(() => {
      n(!0), (0, i.openModal)(() => (0, l.jsx)(i.Spinner, {}), {
        modalKey: E
      })
    }, []);
  if (a.useEffect(() => {
      t && !O && ((0, i.closeModal)(E), n(!1), h.type === v.SKUTypes.SUBSCRIPTION ? I() : x())
    }, [O, t, I, x, null == h ? void 0 : h.type]), null != e && (null == h || h.available)) return O ? j : h.type === v.SKUTypes.SUBSCRIPTION ? I : x
}