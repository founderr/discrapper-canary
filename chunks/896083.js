"use strict";
s.r(t), s.d(t, {
  useGetTrialPurchaseEligibility: function() {
    return l
  }
}), s("47120");
var n = s("470079"),
  i = s("295141");
let l = () => {
  let [e, t] = n.useState(!1), [s, l] = n.useState(null);
  return {
    loading: e,
    error: s,
    getTrialPurchaseEligibility: n.useCallback(async (e, s, n) => {
      t(!0), l(null);
      try {
        return await (0, i.getGuildRoleSubscriptionTrialEligibility)(e, s, n)
      } catch (e) {
        l(e)
      } finally {
        t(!1)
      }
    }, [])
  }
}