"use strict";
n.r(t), n.d(t, {
  useLoadStoreListingDetails: function() {
    return T
  }
});
var l = n("735250"),
  a = n("470079"),
  u = n("442837"),
  i = n("481060"),
  s = n("16084"),
  o = n("558381"),
  r = n("821849"),
  d = n("106976"),
  c = n("488915"),
  p = n("171246"),
  m = n("509545"),
  f = n("55563"),
  S = n("551428"),
  C = n("937615"),
  v = n("147496"),
  E = n("519896"),
  N = n("981631"),
  h = n("689938");

function T(e) {
  a.useEffect(() => {
    null != e && ((0, s.fetchSKU)(e), (0, r.fetchSubscriptionPlansForSKU)(e), (0, o.fetchStoreListingForSku)(e))
  }, [e]);
  let t = (0, u.useStateFromStores)([f.default], () => null != e ? f.default.get(e) : void 0, [e]),
    n = (0, u.useStateFromStores)([m.default], () => null != e ? m.default.getForSKU(e) : void 0, [e]),
    T = a.useMemo(() => null != n ? n.map(e => e.id)[0] : void 0, [n]),
    I = (0, u.useStateFromStores)([S.default], () => null != e ? S.default.getForSKU(e) : void 0, [e]);
  a.useEffect(() => {
    null != T && (0, d.fetchSubscriptionListingForPlan)(T)
  }, [T]);
  let g = null == t ? void 0 : t.applicationId,
    y = (0, u.useStateFromStores)([c.default], () => null != g ? c.default.getSubscriptionGroupListingForApplication(g) : null, [g]),
    x = a.useCallback(() => {
      if ((null == t ? void 0 : t.applicationId) == null || (null == t ? void 0 : t.id) == null || (null == y ? void 0 : y.id) == null || (null == y ? void 0 : y.sku_flags) == null) return null;
      (0, i.openModal)(e => {
        let {
          onClose: n,
          transitionState: a
        } = e;
        return (0, l.jsx)(E.SubscriptionDetailsModal, {
          appId: t.applicationId,
          groupListingId: y.id,
          groupListingType: (0, p.isApplicationUserSubscription)(y.sku_flags) ? "user" : "guild",
          onClose: n,
          skuId: t.id,
          transitionState: a
        })
      })
    }, [null == t ? void 0 : t.applicationId, null == t ? void 0 : t.id, null == y ? void 0 : y.id, null == y ? void 0 : y.sku_flags]),
    O = a.useCallback(() => {
      if (null == t) return null;
      (0, i.openModal)(e => {
        let {
          onClose: n,
          transitionState: a
        } = e;
        return (0, l.jsx)(v.ItemDetailsModal, {
          appId: t.applicationId,
          skuId: t.id,
          onClose: n,
          transitionState: a
        })
      })
    }, [t]);
  if (!(null == t || null == I || null != t && t.type === N.SKUTypes.SUBSCRIPTION && null == y)) {
    if (null == e || null != t && !t.available) return {
      disabled: !0,
      label: h.default.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
    };
    if (t.type === N.SKUTypes.SUBSCRIPTION) {
      if (null == n || 0 === n.length) return {
        disabled: !0,
        label: h.default.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
      };
      let e = n[0];
      return {
        disabled: !1,
        label: h.default.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
          skuName: t.name,
          price: (0, C.formatPrice)(e.price, e.currency)
        }),
        onClick: x
      }
    }
    return null == t.price ? {
      disabled: !0,
      label: h.default.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
    } : {
      disabled: !1,
      label: h.default.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
        skuName: t.name,
        price: (0, C.formatPrice)(t.price.amount, t.price.currency)
      }),
      onClick: O
    }
  }
}