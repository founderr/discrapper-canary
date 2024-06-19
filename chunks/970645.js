n.d(t, {
  o: function() {
    return u
  }
});
var l = n(544891),
  i = n(570140),
  s = n(355467),
  r = n(853872),
  a = n(995598),
  o = n(981631);
async function u() {
  try {
    let {
      body: e
    } = await l.tn.get({
      url: o.ANM.CHECKOUT_RECOVERY
    }), t = (null == e ? void 0 : e.is_eligible) === !0, n = !1;
    t && (n = (0, a.Y)()), t && n && !r.Z.hasFetchedPaymentSources && await (0, s.tZ)();
    let u = t && n;
    i.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH",
      isEligibleForNagbar: u
    })
  } catch (e) {
    i.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH",
      isEligibleForNagbar: !1
    })
  }
}