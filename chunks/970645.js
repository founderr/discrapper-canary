n.d(t, {
  o: function() {
    return c
  }
});
var i = n(544891),
  l = n(570140),
  r = n(355467),
  a = n(853872),
  s = n(995598),
  o = n(981631);
async function c() {
  try {
    let {
      body: e
    } = await i.tn.get({
      url: o.ANM.CHECKOUT_RECOVERY
    }), t = (null == e ? void 0 : e.is_eligible) === !0, n = !1;
    t && (n = (0, s.Y)()), t && n && !a.Z.hasFetchedPaymentSources && await (0, r.tZ)();
    let c = t && n;
    l.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH",
      isEligibleForNagbar: c
    })
  } catch (e) {
    l.Z.dispatch({
      type: "CHECKOUT_RECOVERY_STATUS_FETCH",
      isEligibleForNagbar: !1
    })
  }
}