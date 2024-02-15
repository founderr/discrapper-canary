"use strict";
n.r(t), n.d(t, {
  useGetTrialPurchaseEligibility: function() {
    return s
  }
}), n("222007");
var l = n("884691"),
  a = n("719726");
let s = () => {
  let [e, t] = l.useState(!1), [n, s] = l.useState(null), i = l.useCallback(async (e, n, l) => {
    t(!0), s(null);
    try {
      let t = await (0, a.getGuildRoleSubscriptionTrialEligibility)(e, n, l);
      return t
    } catch (e) {
      s(e)
    } finally {
      t(!1)
    }
  }, []);
  return {
    loading: e,
    error: n,
    getTrialPurchaseEligibility: i
  }
}