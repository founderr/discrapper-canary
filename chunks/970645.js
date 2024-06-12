"use strict";
n.r(t), n.d(t, {
  fetchCheckoutRecovery: function() {
    return u
  }
});
var l = n("544891"),
  a = n("570140"),
  s = n("355467"),
  i = n("853872"),
  r = n("995598"),
  o = n("981631");
async function u() {
  try {
    let {
      body: e
    } = await l.HTTP.get({
      url: o.Endpoints.CHECKOUT_RECOVERY
    }), t = (null == e ? void 0 : e.is_eligible) === !0, n = !1;
    t && (n = (0, r.isUserInCheckoutRecoveryNagbarExperiment)()), t && n && !i.default.hasFetchedPaymentSources && await (0, s.fetchPaymentSources)();
    let u = t && n;
    a.default.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH",
      isEligibleForNagbar: u
    })
  } catch (e) {
    a.default.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH",
      isEligibleForNagbar: !1
    })
  }
}