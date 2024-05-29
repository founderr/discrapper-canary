"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var r = n("470079"),
  u = n("399606"),
  i = n("16084"),
  l = n("881052"),
  a = n("855775"),
  o = n("55563"),
  s = n("474936");

function E(e) {
  let {
    applicationId: t,
    skuIDs: n,
    currentPaymentSourceId: E,
    isGift: S
  } = e, _ = r.useMemo(() => n.filter(e => !s.ACTIVE_PREMIUM_SKUS.includes(e)), [JSON.stringify(n)]), d = (0, u.useStateFromStores)([o.default], () => _.every(e => !o.default.isFetching(e) && null != o.default.get(e))), {
    previewErrorsById: c,
    setErrorById: A
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
  }(), f = (0, u.useStateFromStoresObject)([o.default], () => {
    let e = {};
    for (let n of _) {
      var t;
      e[n] = null !== (t = o.default.get(n)) && void 0 !== t ? t : void 0
    }
    return e
  }, [_]);
  r.useEffect(() => {
    for (let e of _) !o.default.isFetching(e) && null == o.default.get(e) && (0, i.fetchPublishedSKU)(t, e)
  }, [t, _]);
  let T = (0, u.useStateFromStoresObject)([a.default], () => {
    let e = {};
    for (let n of _) {
      var t;
      e[n] = null !== (t = a.default.getPricesForSku(n)) && void 0 !== t ? t : void 0
    }
    return e
  }, [_]);
  return r.useEffect(() => {
    for (let e of _) !a.default.isFetchingSKU(e) && (0, i.fetchPurchasePreview)(t, e, E, {
      isGift: S
    }).catch(t => {
      t instanceof l.BillingError && A(e, t)
    })
  }, [t, _, E, S, A]), {
    hasFetchedSkus: d,
    skusById: f,
    skuPricePreviewsById: T,
    previewErrorsById: c
  }
}