"use strict";
a.r(t), a("411104"), a("47120");
var n = a("72924"),
  s = a("100527"),
  l = a("367207"),
  i = a("996106"),
  r = a("452426"),
  o = a("561205"),
  u = a("334288"),
  d = a("852926"),
  c = a("186901"),
  f = a("981631"),
  E = a("474936");
let h = [s.default.RPC];

function _(e) {
  if (null == e) return {
    lock: f.NOOP_NULL,
    context: f.AppContext.APP
  };
  let t = (0, d.unlockOverlay)(e);
  return {
    lock: t.lock,
    context: t.context
  }
}

function C(e, t) {
  let a = {
    subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: h,
    analyticsObject: t
  };
  switch (e) {
    case f.AppContext.APP:
      return l.default.openPremiumPaymentModalInApp(a);
    case f.AppContext.OVERLAY:
      return l.default.openPremiumPaymentModalInOverlay(a);
    default:
      throw Error("Unexpected app context: ".concat(e))
  }
}
t.default = {
  [f.RPCCommands.START_PURCHASE]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    validation: e => (0, r.default)(e).required().keys({
      sku_id: e.string().required(),
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          sku_id: a,
          pid: s
        }
      } = e;
      (0, u.validateTransportType)(t.transport);
      let l = t.application.id;
      if (null == l) throw new i.default({
        errorCode: f.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r,
        context: d
      } = _(t.transport !== c.TransportTypes.POST_MESSAGE ? s : null);
      if (null == (0, o.default)()) throw new i.default({
        errorCode: f.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel");
      let E = {
        page: f.AnalyticsPages.IN_APP
      };
      return (async () => {
        try {
          let e = await (0, n.openIAPPurchaseModal)({
            applicationId: l,
            skuId: a,
            openPremiumPaymentModal: () => C(d, E),
            analyticsLocations: h,
            analyticsLocationObject: E,
            context: d
          });
          return r(), e
        } catch (e) {
          if (r(), null != e) {
            let t = "";
            throw t = "object" == typeof e && "message" in e && "string" == typeof e.message ? e.message : "string" == typeof e ? e : JSON.stringify(e), new i.default({
              errorCode: f.RPCErrors.PURCHASE_ERROR
            }, t)
          }
          throw new i.default({
            errorCode: f.RPCErrors.PURCHASE_CANCELED
          }, "Purchase was canceled by the user.")
        }
      })()
    }
  },
  [f.RPCCommands.START_PREMIUM_PURCHASE]: {
    [c.RPC_SCOPE_CONFIG.ANY]: [c.RPC_AUTHENTICATED_SCOPE, c.RPC_LOCAL_SCOPE],
    validation: e => (0, r.default)(e).keys({
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          pid: a
        }
      } = e;
      if ((0, u.validateTransportType)(t.transport), null == t.application.id) throw new i.default({
        errorCode: f.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let {
        lock: n,
        context: s
      } = _(t.transport !== c.TransportTypes.POST_MESSAGE ? a : null);
      return C(s, {
        page: f.AnalyticsPages.IN_APP
      }).then(() => {
        n()
      }, e => {
        if (n(), null != e) throw new i.default({
          errorCode: f.RPCErrors.PURCHASE_ERROR
        }, e);
        throw new i.default({
          errorCode: f.RPCErrors.PURCHASE_CANCELED
        }, "Purchase was canceled by the user.")
      })
    }
  }
}