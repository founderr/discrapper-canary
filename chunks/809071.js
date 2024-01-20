"use strict";
n.r(t), n.d(t, {
  updateSubscriptionInvoicePreview: function() {
    return f
  },
  useSubscriptionInvoicePreview: function() {
    return S
  },
  useGetSubscriptionInvoice: function() {
    return T
  },
  getItemUnitPriceWithDiscount: function() {
    return p
  }
}), n("222007");
var i = n("884691"),
  r = n("446674"),
  u = n("872717"),
  o = n("448993"),
  l = n("195358"),
  a = n("521012"),
  s = n("719923"),
  c = n("49111");
async function d(e) {
  let {
    items: t,
    paymentSourceId: n,
    trialId: i,
    code: r,
    applyEntitlements: a = !1,
    currency: d,
    renewal: f,
    metadata: E
  } = e;
  t = (0, s.coerceExistingItemsToNewItemInterval)(t);
  let _ = {
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
    trial_id: i,
    code: r,
    apply_entitlements: a,
    currency: d,
    renewal: f,
    metadata: E
  };
  try {
    let e = await u.default.post({
      url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
      body: _,
      oldFormErrors: !0
    });
    return l.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new o.BillingError(e)
  }
}
async function f(e) {
  let {
    subscriptionId: t,
    items: n,
    paymentSourceId: i,
    renewal: r,
    currency: a,
    applyEntitlements: d = !1,
    analyticsLocations: f,
    analyticsLocation: E
  } = e;
  null != n && (n = (0, s.coerceExistingItemsToNewItemInterval)(n));
  let _ = {
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
    payment_source_id: i,
    renewal: r,
    apply_entitlements: d,
    currency: a
  };
  try {
    let e = await u.default.patch({
      url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
      query: {
        location: E,
        location_stack: f
      },
      body: _,
      oldFormErrors: !0
    });
    return l.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new o.BillingError(e)
  }
}
async function E(e) {
  let {
    subscriptionId: t,
    preventFetch: n
  } = e;
  if (n) return null;
  let i = await u.default.get({
    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
    oldFormErrors: !0
  });
  return l.default.createInvoiceFromServer(i.body)
}

function _(e, t) {
  let {
    preventFetch: n = !1
  } = e, [u, o] = (0, i.useState)(null), [l, s] = (0, i.useState)(null), c = (0, r.useStateFromStores)([a.default], () => a.default.getSubscriptions());
  return (0, i.useEffect)(() => {
    let e = !1;
    async function i() {
      try {
        s(null), o(null);
        let n = await t();
        !e && o(n)
      } catch (t) {
        !e && s(t)
      }
    }
    return !n && i(), () => {
      e = !0
    }
  }, [n, t, c]), [u, l]
}

function S(e) {
  if ("subscriptionId" in e && null == e.subscriptionId) {
    let {
      subscriptionId: t,
      ...n
    } = e;
    e = n
  }
  let t = (0, i.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
  return _(e, t)
}

function T(e) {
  let t = (0, i.useCallback)(() => E(e), [JSON.stringify(e)]);
  return _(e, t)
}

function p(e) {
  let t = e.subscriptionPlanPrice;
  return e.discounts.forEach(n => {
    let i = n.amount / e.quantity;
    t -= i
  }), t
}