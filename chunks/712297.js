"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120");
var r = n("470079"),
  u = n("399606"),
  i = n("16084"),
  l = n("881052"),
  a = n("128069"),
  o = n("855775"),
  s = n("55563"),
  E = n("474936");

function S(e) {
  let {
    applicationId: t,
    skuIDs: n,
    currentPaymentSourceId: S,
    isGift: _
  } = e, d = r.useMemo(() => n.filter(e => !E.ACTIVE_PREMIUM_SKUS.includes(e)), [JSON.stringify(n)]), c = (0, u.useStateFromStores)([s.default], () => d.every(e => !s.default.isFetching(e) && null != s.default.get(e))), {
    previewErrorsById: A,
    setErrorById: T
  } = function() {
    let [e, t] = r.useState({});
    return {
      previewErrorsById: e,
      setErrorById: r.useCallback((e, n) => {
        t(t => ({
          ...t,
          [e]: n
        }))
      }, [t])
    }
  }(), f = (0, u.useStateFromStoresObject)([s.default], () => {
    let e = {};
    for (let n of d) {
      var t;
      e[n] = null !== (t = s.default.get(n)) && void 0 !== t ? t : void 0
    }
    return e
  }, [d]);
  r.useEffect(() => {
    for (let e of d) !s.default.isFetching(e) && null == s.default.get(e) && (0, i.fetchPublishedSKU)(t, e)
  }, [t, d]);
  let I = (0, u.useStateFromStoresObject)([o.default], () => {
    let e = {};
    for (let n of d) {
      var t;
      e[n] = null !== (t = o.default.getPricesForSku(n)) && void 0 !== t ? t : void 0
    }
    return e
  }, [d]);
  return r.useEffect(() => {
    for (let e of d) !o.default.isFetchingSKU(e) && (0, i.fetchPurchasePreview)(t, e, S, {
      isGift: _
    }).catch(t => {
      t instanceof l.BillingError && (t.code === a.ErrorCodes.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === a.ErrorCodes.BILLING_BUNDLE_PARTIALLY_OWNED) && T(e, t)
    })
  }, [t, d, S, _, T]), {
    hasFetchedSkus: c,
    skusById: f,
    skuPricePreviewsById: I,
    previewErrorsById: A
  }
}