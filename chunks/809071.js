"use strict";
n.r(t), n.d(t, {
  updateSubscriptionInvoicePreview: function() {
    return f
  },
  useSubscriptionInvoicePreview: function() {
    return _
  },
  useGetSubscriptionInvoice: function() {
    return p
  },
  getItemUnitPriceWithDiscount: function() {
    return m
  }
}), n("222007");
var s = n("884691"),
  r = n("446674"),
  l = n("872717"),
  a = n("448993"),
  i = n("195358"),
  o = n("521012"),
  u = n("719923"),
  c = n("49111");
async function d(e) {
  let {
    items: t,
    paymentSourceId: n,
    trialId: s,
    code: r,
    applyEntitlements: o = !1,
    currency: d,
    renewal: f,
    metadata: h
  } = e;
  t = (0, u.coerceExistingItemsToNewItemInterval)(t);
  let E = {
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
    trial_id: s,
    code: r,
    apply_entitlements: o,
    currency: d,
    renewal: f,
    metadata: h
  };
  try {
    let e = await l.default.post({
      url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
      body: E,
      oldFormErrors: !0
    });
    return i.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new a.BillingError(e)
  }
}
async function f(e) {
  let {
    subscriptionId: t,
    items: n,
    paymentSourceId: s,
    renewal: r,
    currency: o,
    applyEntitlements: d = !1,
    analyticsLocations: f,
    analyticsLocation: h
  } = e;
  null != n && (n = (0, u.coerceExistingItemsToNewItemInterval)(n));
  let E = {
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
    payment_source_id: s,
    renewal: r,
    apply_entitlements: d,
    currency: o
  };
  try {
    let e = await l.default.patch({
      url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
      query: {
        location: h,
        location_stack: f
      },
      body: E,
      oldFormErrors: !0
    });
    return i.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new a.BillingError(e)
  }
}
async function h(e) {
  let {
    subscriptionId: t,
    preventFetch: n
  } = e;
  if (n) return null;
  let s = await l.default.get({
    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
    oldFormErrors: !0
  });
  return i.default.createInvoiceFromServer(s.body)
}

function E(e, t) {
  let {
    preventFetch: n = !1
  } = e, [l, a] = (0, s.useState)(null), [i, u] = (0, s.useState)(null), c = (0, r.useStateFromStores)([o.default], () => o.default.getSubscriptions());
  return (0, s.useEffect)(() => {
    let e = !1;
    async function s() {
      try {
        u(null), a(null);
        let n = await t();
        !e && a(n)
      } catch (t) {
        !e && u(t)
      }
    }
    return !n && s(), () => {
      e = !0
    }
  }, [n, t, c]), [l, i]
}

function _(e) {
  if ("subscriptionId" in e && null == e.subscriptionId) {
    let {
      subscriptionId: t,
      ...n
    } = e;
    e = n
  }
  let t = (0, s.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
  return E(e, t)
}

function p(e) {
  let t = (0, s.useCallback)(() => h(e), [JSON.stringify(e)]);
  return E(e, t)
}

function m(e) {
  let t = e.subscriptionPlanPrice;
  return e.discounts.forEach(n => {
    let s = n.amount / e.quantity;
    t -= s
  }), t
}