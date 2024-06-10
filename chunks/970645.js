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
    var e;
    let {
      body: t
    } = await l.HTTP.get({
      url: o.Endpoints.CHECKOUT_RECOVERY
    }), n = (null == t ? void 0 : t.is_eligible) === !0, u = !1;
    n && (u = (0, r.isUserInCheckoutRecoveryNagbarExperiment)()), n && u && !i.default.hasFetchedPaymentSources && await (0, s.fetchPaymentSources)();
    let d = null !== (e = i.default.paymentSources) && void 0 !== e ? e : {},
      c = n && u && 0 !== Object.keys(d).length;
    a.default.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH",
      isEligibleForNagbar: c
    })
  } catch (e) {
    a.default.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH",
      isEligibleForNagbar: !1
    })
  }
}