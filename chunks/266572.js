"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("544891"),
  l = a("846519"),
  i = a("481060"),
  r = a("496929"),
  o = a("115130"),
  u = a("812206"),
  d = a("594174"),
  c = a("580130"),
  f = a("695103"),
  E = a("70956"),
  h = a("998502"),
  _ = a("996106"),
  C = a("186901"),
  m = a("981631");
let S = 10 * E.default.Millis.SECOND;
t.default = {
  [m.RPCCommands.VALIDATE_APPLICATION]: {
    scope: C.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t
      } = e, s = t.application.id;
      try {
        if (null == s) throw new _.default({
          errorCode: m.RPCErrors.INVALID_COMMAND
        }, "No application.");
        let e = u.default.getApplication(s);
        if (null == e) throw new _.default({
          errorCode: m.RPCErrors.INVALID_ENTITLEMENT
        }, "SKU does not exist.");
        let t = e.primarySkuId;
        if (null == t) throw new _.default({
          errorCode: m.RPCErrors.INVALID_ENTITLEMENT
        }, "SKU does not exist.");
        return Promise.race([(function(e, t) {
          let a = c.default.isEntitledToSku(d.default.getCurrentUser(), e, t);
          return null != a ? Promise.resolve(a) : (0, r.fetchUserEntitlementsForApplication)(t).then(() => !0 === c.default.isEntitledToSku(d.default.getCurrentUser(), e, t))
        })(t, e.id).then(e => {
          if (!e) throw new _.default({
            errorCode: m.RPCErrors.INVALID_ENTITLEMENT
          }, "User does not have entitlement.")
        }), (0, l.timeoutPromise)(S).then(() => {
          throw new _.default({
            errorCode: m.RPCErrors.INVALID_ENTITLEMENT
          }, "Timed out fetching entitlement.")
        })])
      } catch (e) {
        throw e.code === m.RPCErrors.INVALID_ENTITLEMENT && (h.default.focus(null, !0), (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("48748")]).then(a.bind(a, "52004"));
          return t => (0, n.jsx)(e, {
            ...t,
            applicationId: s
          })
        })), e
      }
    }
  },
  [m.RPCCommands.GET_ENTITLEMENT_TICKET]: {
    scope: C.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        socket: t
      } = e, l = t.application.id;
      if (null == l) throw new _.default({
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return s.HTTP.post({
        url: m.Endpoints.ENTITLEMENT_TICKET(l),
        body: {
          test_mode: f.default.inTestModeForApplication(l) || o.default.inDevModeForApplication(l)
        },
        retries: 3,
        oldFormErrors: !0
      }).then(e => {
        let {
          body: t
        } = e;
        return t
      }).catch(e => {
        throw h.default.focus(null, !0), (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("48748")]).then(a.bind(a, "52004"));
          return t => (0, n.jsx)(e, {
            ...t,
            applicationId: l
          })
        }), e
      })
    }
  }
}