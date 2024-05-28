"use strict";
n.r(t), n.d(t, {
  useGetTrialPurchaseEligibility: function() {
    return i
  }
}), n("47120");
var s = n("470079"),
  a = n("295141");
let i = () => {
  let [e, t] = s.useState(!1), [n, i] = s.useState(null);
  return {
    loading: e,
    error: n,
    getTrialPurchaseEligibility: s.useCallback(async (e, n, s) => {
      t(!0), i(null);
      try {
        return await (0, a.getGuildRoleSubscriptionTrialEligibility)(e, n, s)
      } catch (e) {
        i(e)
      } finally {
        t(!1)
      }
    }, [])
  }
}