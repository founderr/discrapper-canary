"use strict";
n.r(t), n.d(t, {
  openIAPPurchaseModal: function() {
    return L
  },
  openSKUPaymentModal: function() {
    return D
  }
}), n("411104");
var s = n("735250");
n("470079");
var l = n("512722"),
  a = n.n(l),
  i = n("481060"),
  r = n("570140"),
  o = n("355467"),
  u = n("341382"),
  d = n("401131"),
  c = n("16084"),
  E = n("558381"),
  f = n("821849"),
  _ = n("15640"),
  T = n("724870"),
  I = n("87484"),
  m = n("928518"),
  N = n("367207"),
  p = n("106976"),
  S = n("689011"),
  C = n("594174"),
  A = n("853872"),
  h = n("78839"),
  g = n("55563"),
  M = n("74538"),
  O = n("981631");

function R(e, t) {
  let {
    applicationId: n,
    id: s
  } = e;
  return c.purchaseSKU(n, s).then(e => {
    let {
      entitlements: l
    } = e;
    return (0, d.openPurchaseConfirmationModal)(n, s, l, {
      context: t
    })
  })
}

function v() {
  let e = m.default.getWindow(O.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return null == e || e.closed ? i.DEFAULT_MODAL_CONTEXT : i.POPOUT_MODAL_CONTEXT
}
async function L(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: l,
    openPremiumPaymentModal: i,
    analyticsLocations: r,
    analyticsLocationObject: o,
    context: d
  } = e, c = g.default.get(n);
  if (null == c) {
    let e = (await (0, E.fetchAllStoreListingsForApplication)(t)).find(e => e.sku.id === n);
    a()(null != e, "Could not find store listing for sku"), e.sku.type === O.SKUTypes.SUBSCRIPTION_GROUP && await (0, p.fetchAllSubscriptionListingsDataForApplication)(t, e.id)
  }
  c = null != c ? c : g.default.get(n), a()(null != c && c.applicationId === t, "SKU must belong to application"), c.type === O.SKUTypes.SUBSCRIPTION && !(0, _.getSubscriptionPlansLoaded)([c.id]) && await (0, f.fetchSubscriptionPlansForSKU)(c.id);
  let m = v(),
    A = C.default.getCurrentUser();
  if (c.premium) {
    if (M.default.canInstallPremiumApplications(A)) return R(c, d);
    await u.openModal(d), await

    function(e, t, n, s, l) {
      let a = h.default.getPremiumSubscription(),
        i = {
          id: e.id,
          applicationId: e.applicationId
        };
      if (null != a) {
        let e = M.default.getClosestUpgrade(a.planId);
        if (null == e) return Promise.reject(Error("Could not find premium upgrade."));
        let t = {
          initialPlanId: e,
          followupSKUInfo: i,
          analyticsLocations: s,
          analyticsObject: n
        };
        switch (l) {
          case O.AppContext.APP:
            return N.default.openPremiumPaymentModalInApp(t);
          case O.AppContext.OVERLAY:
            return N.default.openPremiumPaymentModalInOverlay(t);
          default:
            throw Error("Unexpected app context: ".concat(l))
        }
      }
      return t()
    }(c, i, o, r, d), await R(c, d)
  } else {
    if (c.type !== O.SKUTypes.SUBSCRIPTION) return new Promise(async (e, s) => {
      await (0, I.default)({
        applicationId: t,
        skuId: n,
        analyticsLocationObject: o,
        analyticsLocations: r,
        contextKey: m,
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

    function(e, t, n, l, a) {
      return (0, T.openActivityApplicationPaymentModal)({
        applicationId: e,
        skuId: t,
        initialPlanId: n,
        analyticsLocationObject: l,
        analyticsLocations: a,
        renderHeader: (e, t, n) => (0, s.jsx)(S.PurchaseHeader, {
          step: n,
          onClose: () => t(!1)
        })
      })
    }(t, n, l, o, r)
  }
}
let P = {
  isIAP: !1,
  context: O.AppContext.APP,
  promotionId: null,
  isGift: !1
};

function D(e, t, l) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    u = Promise.resolve();
  !A.default.hasFetchedPaymentSources && (u = o.fetchPaymentSources());
  let {
    isIAP: d,
    context: c,
    promotionId: E,
    isGift: f
  } = {
    ...P,
    ...a
  }, _ = v();
  return u.then(() => new Promise((a, o) => {
    r.default.dispatch({
      type: "SKU_PURCHASE_MODAL_OPEN",
      applicationId: e,
      skuId: t,
      isIAP: d,
      isGift: f,
      analyticsLocation: l,
      promotionId: E,
      context: c,
      resolve: a,
      reject: o
    }), (0, i.openModalLazy)(async () => {
      let {
        default: l
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("58625"), n.e("14720"), n.e("62511"), n.e("61247"), n.e("20177"), n.e("12464")]).then(n.bind(n, "282574"));
      return n => {
        let {
          onClose: a,
          ...i
        } = n;
        return (0, s.jsx)(l, {
          ...i,
          onClose: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            r.default.dispatch({
              type: "SKU_PURCHASE_MODAL_CLOSE",
              error: e
            }), a()
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