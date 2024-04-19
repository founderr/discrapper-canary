"use strict";
a.r(t), a("47120"), a("653041");
var n = a("496929"),
  s = a("16084"),
  l = a("558381"),
  i = a("115130"),
  r = a("106976"),
  o = a("695103"),
  u = a("996106"),
  d = a("334288"),
  c = a("186901"),
  f = a("981631");
async function E(e, t) {
  let a = t.filter(e => e.type === f.SKUTypes.SUBSCRIPTION_GROUP),
    n = await Promise.all(a.map(async t => await (0, r.fetchAllSubscriptionListingsDataForApplication)(e, t.id))),
    s = [];
  return n.forEach(e => {
    if (null == e) return null;
    let a = e.subscription_listings;
    if (null == a) return null;
    let n = [];
    a.forEach(e => {
      e.subscription_plans.forEach(a => {
        var s;
        let l = null == a ? void 0 : a.price,
          i = t.find(e => e.id === a.sku_id);
        if (null == i) return;
        let r = {
          id: a.sku_id,
          name: i.name,
          type: i.type,
          price: {
            amount: l,
            currency: f.CurrencyCodes.USD
          },
          application_id: e.application_id,
          flags: e.sku_flags,
          release_date: null !== (s = i.release_date) && void 0 !== s ? s : null
        };
        n.push(r)
      })
    }), n.filter(e => (null == e ? void 0 : e.price) != null).forEach(e => s.push(e))
  }), s
}
async function h(e) {
  let {
    socket: t
  } = e;
  (0, d.validateTransportType)(t.transport);
  let a = t.application.id;
  if (null == a) throw new u.default({
    errorCode: f.RPCErrors.INVALID_COMMAND
  }, "No application.");
  if (o.default.inTestModeForApplication(a) || i.default.inDevModeForApplication(a)) {
    let e = await s.fetchTestSKUsForApplication(a, !1),
      t = await E(a, e);
    return [...e.filter(e => null != e.price), ...t]
  }
  let n = await l.fetchAllStoreListingsForApplication(a),
    r = n.filter(e => e.sku.type !== f.SKUTypes.SUBSCRIPTION_GROUP).map(e => e.sku).filter(e => null != e.price);
  return [...r, ...await E(a, n.map(e => e.sku))]
}

function _(e) {
  let {
    socket: t
  } = e;
  (0, d.validateTransportType)(t.transport);
  let a = t.application.id;
  if (null == a) throw new u.default({
    errorCode: f.RPCErrors.INVALID_COMMAND
  }, "No application.");
  return n.fetchUserEntitlementsForApplication(a)
}
t.default = {
  [f.RPCCommands.GET_SKUS]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    handler: h
  },
  [f.RPCCommands.GET_ENTITLEMENTS]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    handler: _
  },
  [f.RPCCommands.GET_SKUS_EMBEDDED]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    handler: async e => ({
      skus: await h(e)
    })
  },
  [f.RPCCommands.GET_ENTITLEMENTS_EMBEDDED]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    handler: async e => ({
      entitlements: await _(e)
    })
  }
}