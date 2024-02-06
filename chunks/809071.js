"use strict";
n.r(t), n.d(t, {
  updateSubscriptionInvoicePreview: function() {
    return f
  },
  useSubscriptionInvoicePreview: function() {
    return _
  },
  useGetSubscriptionInvoice: function() {
    return T
  },
  getItemUnitPriceWithDiscount: function() {
    return S
  }
}), n("222007");
var r = n("884691"),
  a = n("446674"),
  i = n("872717"),
  u = n("448993"),
  l = n("195358"),
  o = n("521012"),
  s = n("719923"),
  c = n("49111");
async function d(e) {
  let {
    items: t,
    paymentSourceId: n,
    trialId: r,
    code: a,
    applyEntitlements: o = !1,
    currency: d,
    renewal: f,
    metadata: E
  } = e;
  t = (0, s.coerceExistingItemsToNewItemInterval)(t);
  let p = {
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
    trial_id: r,
    code: a,
    apply_entitlements: o,
    currency: d,
    renewal: f,
    metadata: E
  };
  try {
    let e = await i.default.post({
      url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
      body: p,
      oldFormErrors: !0
    });
    return l.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new u.BillingError(e)
  }
}
async function f(e) {
  let {
    subscriptionId: t,
    items: n,
    paymentSourceId: r,
    renewal: a,
    currency: o,
    applyEntitlements: d = !1,
    analyticsLocations: f,
    analyticsLocation: E
  } = e;
  null != n && (n = (0, s.coerceExistingItemsToNewItemInterval)(n));
  let p = {
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
    payment_source_id: r,
    renewal: a,
    apply_entitlements: d,
    currency: o
  };
  try {
    let e = await i.default.patch({
      url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
      query: {
        location: E,
        location_stack: f
      },
      body: p,
      oldFormErrors: !0
    });
    return l.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new u.BillingError(e)
  }
}
async function E(e) {
  let {
    subscriptionId: t,
    preventFetch: n
  } = e;
  if (n) return null;
  let r = await i.default.get({
    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
    oldFormErrors: !0
  });
  return l.default.createInvoiceFromServer(r.body)
}

function p(e, t) {
  let {
    preventFetch: n = !1
  } = e, [i, u] = (0, r.useState)(null), [l, s] = (0, r.useState)(null), c = (0, a.useStateFromStores)([o.default], () => o.default.getSubscriptions());
  return (0, r.useEffect)(() => {
    let e = !1;
    async function r() {
      try {
        s(null), u(null);
        let n = await t();
        !e && u(n)
      } catch (t) {
        !e && s(t)
      }
    }
    return !n && r(), () => {
      e = !0
    }
  }, [n, t, c]), [i, l]
}

function _(e) {
  if ("subscriptionId" in e && null == e.subscriptionId) {
    let {
      subscriptionId: t,
      ...n
    } = e;
    e = n
  }
  let t = (0, r.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
  return p(e, t)
}

function T(e) {
  let t = (0, r.useCallback)(() => E(e), [JSON.stringify(e)]);
  return p(e, t)
}

function S(e) {
  let t = e.subscriptionPlanPrice;
  return e.discounts.forEach(n => {
    let r = n.amount / e.quantity;
    t -= r
  }), t
}