"use strict";
n.r(t), n.d(t, {
  useGetTrialPurchaseEligibility: function() {
    return s
  }
}), n("47120");
var i = n("470079"),
  a = n("295141");
let s = () => {
  let [e, t] = i.useState(!1), [n, s] = i.useState(null);
  return {
    loading: e,
    error: n,
    getTrialPurchaseEligibility: i.useCallback(async (e, n, i) => {
      t(!0), s(null);
      try {
        return await (0, a.getGuildRoleSubscriptionTrialEligibility)(e, n, i)
      } catch (e) {
        s(e)
      } finally {
        t(!1)
      }
    }, [])
  }
}