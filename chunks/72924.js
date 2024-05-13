"use strict";
n.r(t), n.d(t, {
  openIAPPurchaseModal: function() {
    return C
  },
  openSKUPaymentModal: function() {
    return h
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("481060"),
  r = n("570140"),
  o = n("355467"),
  u = n("558381"),
  d = n("821849"),
  c = n("15640"),
  E = n("724870"),
  f = n("87484"),
  _ = n("928518"),
  T = n("106976"),
  I = n("689011"),
  m = n("853872"),
  N = n("55563"),
  p = n("981631");

function S() {
  let e = _.default.getWindow(p.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return null == e || e.closed ? i.DEFAULT_MODAL_CONTEXT : i.POPOUT_MODAL_CONTEXT
}
async function C(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: a,
    analyticsLocations: i,
    analyticsLocationObject: r
  } = e, o = N.default.get(n);
  if (null == o) {
    let e = (await (0, u.fetchAllStoreListingsForApplication)(t)).find(e => e.sku.id === n);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === p.SKUTypes.SUBSCRIPTION_GROUP && await (0, T.fetchAllSubscriptionListingsDataForApplication)(t, e.id)
  }
  o = null != o ? o : N.default.get(n), l()(null != o && o.applicationId === t, "SKU must belong to application"), o.type === p.SKUTypes.SUBSCRIPTION && !(0, c.getSubscriptionPlansLoaded)([o.id]) && await (0, d.fetchSubscriptionPlansForSKU)(o.id);
  let _ = S();
  if (o.type !== p.SKUTypes.SUBSCRIPTION) return new Promise((e, s) => {
    (0, f.default)({
      applicationId: t,
      skuId: n,
      analyticsLocationObject: r,
      analyticsLocations: i,
      contextKey: _,
      onComplete: t => {
        var n;
        e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : [])
      },
      onClose: e => {
        !e && s()
      }
    })
  });
  await

  function(e, t, n, a, l) {
    return (0, E.openActivityApplicationPaymentModal)({
      applicationId: e,
      skuId: t,
      initialPlanId: n,
      analyticsLocationObject: a,
      analyticsLocations: l,
      renderHeader: (e, t, n) => (0, s.jsx)(I.PurchaseHeader, {
        step: n,
        onClose: () => t(!1)
      })
    })
  }(t, n, a, r, i)
}
let A = {
  isIAP: !1,
  context: p.AppContext.APP,
  promotionId: null,
  isGift: !1
};

function h(e, t, a) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    u = Promise.resolve();
  !m.default.hasFetchedPaymentSources && (u = o.fetchPaymentSources());
  let {
    isIAP: d,
    context: c,
    promotionId: E,
    isGift: f
  } = {
    ...A,
    ...l
  }, _ = S();
  return u.then(() => new Promise((l, o) => {
    r.default.dispatch({
      type: "SKU_PURCHASE_MODAL_OPEN",
      applicationId: e,
      skuId: t,
      isIAP: d,
      isGift: f,
      analyticsLocation: a,
      promotionId: E,
      context: c,
      resolve: l,
      reject: o
    }), (0, i.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("440"), n.e("62511"), n.e("20177"), n.e("83385")]).then(n.bind(n, "282574"));
      return n => {
        let {
          onClose: l,
          ...i
        } = n;
        return (0, s.jsx)(a, {
          ...i,
          onClose: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            r.default.dispatch({
              type: "SKU_PURCHASE_MODAL_CLOSE",
              error: e
            }), l()
          },
          applicationId: e,
          skuId: t,
          appContext: c
        })
      }
    }, {
      contextKey: _
    })
  }))
}