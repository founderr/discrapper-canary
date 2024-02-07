"use strict";
n.r(e), n.d(e, {
  updateSubscriptionInvoicePreview: function() {
    return f
  },
  useSubscriptionInvoicePreview: function() {
    return h
  },
  useGetSubscriptionInvoice: function() {
    return S
  },
  getItemUnitPriceWithDiscount: function() {
    return p
  }
}), n("222007");
var r = n("884691"),
  i = n("446674"),
  u = n("872717"),
  o = n("448993"),
  a = n("195358"),
  s = n("521012"),
  l = n("719923"),
  c = n("49111");
async function d(t) {
  let {
    items: e,
    paymentSourceId: n,
    trialId: r,
    code: i,
    applyEntitlements: s = !1,
    currency: d,
    renewal: f,
    metadata: E
  } = t;
  e = (0, l.coerceExistingItemsToNewItemInterval)(e);
  let _ = {
    items: e.map(t => {
      let {
        planId: e,
        ...n
      } = t;
      return {
        ...n,
        plan_id: e
      }
    }),
    payment_source_id: n,
    trial_id: r,
    code: i,
    apply_entitlements: s,
    currency: d,
    renewal: f,
    metadata: E
  };
  try {
    let t = await u.default.post({
      url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
      body: _,
      oldFormErrors: !0
    });
    return a.default.createInvoiceFromServer(t.body)
  } catch (t) {
    throw new o.BillingError(t)
  }
}
async function f(t) {
  let {
    subscriptionId: e,
    items: n,
    paymentSourceId: r,
    renewal: i,
    currency: s,
    applyEntitlements: d = !1,
    analyticsLocations: f,
    analyticsLocation: E
  } = t;
  null != n && (n = (0, l.coerceExistingItemsToNewItemInterval)(n));
  let _ = {
    items: null == n ? void 0 : n.map(t => {
      let {
        planId: e,
        ...n
      } = t;
      return {
        ...n,
        plan_id: e
      }
    }),
    payment_source_id: r,
    renewal: i,
    apply_entitlements: d,
    currency: s
  };
  try {
    let t = await u.default.patch({
      url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(e),
      query: {
        location: E,
        location_stack: f
      },
      body: _,
      oldFormErrors: !0
    });
    return a.default.createInvoiceFromServer(t.body)
  } catch (t) {
    throw new o.BillingError(t)
  }
}
async function E(t) {
  let {
    subscriptionId: e,
    preventFetch: n
  } = t;
  if (n) return null;
  let r = await u.default.get({
    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(e),
    oldFormErrors: !0
  });
  return a.default.createInvoiceFromServer(r.body)
}

function _(t, e) {
  let {
    preventFetch: n = !1
  } = t, [u, o] = (0, r.useState)(null), [a, l] = (0, r.useState)(null), c = (0, i.useStateFromStores)([s.default], () => s.default.getSubscriptions());
  return (0, r.useEffect)(() => {
    let t = !1;
    async function r() {
      try {
        l(null), o(null);
        let n = await e();
        !t && o(n)
      } catch (e) {
        !t && l(e)
      }
    }
    return !n && r(), () => {
      t = !0
    }
  }, [n, e, c]), [u, a]
}

function h(t) {
  if ("subscriptionId" in t && null == t.subscriptionId) {
    let {
      subscriptionId: e,
      ...n
    } = t;
    t = n
  }
  let e = (0, r.useCallback)(() => "subscriptionId" in t ? f(t) : "items" in t ? d(t) : null, [JSON.stringify(t)]);
  return _(t, e)
}

function S(t) {
  let e = (0, r.useCallback)(() => E(t), [JSON.stringify(t)]);
  return _(t, e)
}

function p(t) {
  let e = t.subscriptionPlanPrice;
  return t.discounts.forEach(n => {
    let r = n.amount / t.quantity;
    e -= r
  }), e
}