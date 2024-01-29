"use strict";
n.r(t), n.d(t, {
  updateSubscriptionInvoicePreview: function() {
    return f
  },
  useSubscriptionInvoicePreview: function() {
    return m
  },
  useGetSubscriptionInvoice: function() {
    return E
  },
  getItemUnitPriceWithDiscount: function() {
    return I
  }
}), n("222007");
var l = n("884691"),
  i = n("446674"),
  s = n("872717"),
  r = n("448993"),
  o = n("195358"),
  a = n("521012"),
  u = n("719923"),
  d = n("49111");
async function c(e) {
  let {
    items: t,
    paymentSourceId: n,
    trialId: l,
    code: i,
    applyEntitlements: a = !1,
    currency: c,
    renewal: f,
    metadata: p
  } = e;
  t = (0, u.coerceExistingItemsToNewItemInterval)(t);
  let h = {
    items: t.map(e => {
      let {
        planId: t,
        ...n
      } = e;
      return {
        ...n,
        plan_id: t
      }
    }),
    payment_source_id: n,
    trial_id: l,
    code: i,
    apply_entitlements: a,
    currency: c,
    renewal: f,
    metadata: p
  };
  try {
    let e = await s.default.post({
      url: d.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
      body: h,
      oldFormErrors: !0
    });
    return o.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new r.BillingError(e)
  }
}
async function f(e) {
  let {
    subscriptionId: t,
    items: n,
    paymentSourceId: l,
    renewal: i,
    currency: a,
    applyEntitlements: c = !1,
    analyticsLocations: f,
    analyticsLocation: p
  } = e;
  null != n && (n = (0, u.coerceExistingItemsToNewItemInterval)(n));
  let h = {
    items: null == n ? void 0 : n.map(e => {
      let {
        planId: t,
        ...n
      } = e;
      return {
        ...n,
        plan_id: t
      }
    }),
    payment_source_id: l,
    renewal: i,
    apply_entitlements: c,
    currency: a
  };
  try {
    let e = await s.default.patch({
      url: d.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
      query: {
        location: p,
        location_stack: f
      },
      body: h,
      oldFormErrors: !0
    });
    return o.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new r.BillingError(e)
  }
}
async function p(e) {
  let {
    subscriptionId: t,
    preventFetch: n
  } = e;
  if (n) return null;
  let l = await s.default.get({
    url: d.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
    oldFormErrors: !0
  });
  return o.default.createInvoiceFromServer(l.body)
}

function h(e, t) {
  let {
    preventFetch: n = !1
  } = e, [s, r] = (0, l.useState)(null), [o, u] = (0, l.useState)(null), d = (0, i.useStateFromStores)([a.default], () => a.default.getSubscriptions());
  return (0, l.useEffect)(() => {
    let e = !1;
    async function l() {
      try {
        u(null), r(null);
        let n = await t();
        !e && r(n)
      } catch (t) {
        !e && u(t)
      }
    }
    return !n && l(), () => {
      e = !0
    }
  }, [n, t, d]), [s, o]
}

function m(e) {
  if ("subscriptionId" in e && null == e.subscriptionId) {
    let {
      subscriptionId: t,
      ...n
    } = e;
    e = n
  }
  let t = (0, l.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? c(e) : null, [JSON.stringify(e)]);
  return h(e, t)
}

function E(e) {
  let t = (0, l.useCallback)(() => p(e), [JSON.stringify(e)]);
  return h(e, t)
}

function I(e) {
  let t = e.subscriptionPlanPrice;
  return e.discounts.forEach(n => {
    let l = n.amount / e.quantity;
    t -= l
  }), t
}