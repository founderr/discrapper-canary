n.d(t, {
  F: function() {
    return l
  }
}), n(47120);
var s = n(470079),
  i = n(295141);
let l = () => {
  let [e, t] = s.useState(!1), [n, l] = s.useState(null);
  return {
    loading: e,
    error: n,
    getTrialPurchaseEligibility: s.useCallback(async (e, n, s) => {
      t(!0), l(null);
      try {
        return await (0, i.LB)(e, n, s)
      } catch (e) {
        l(e)
      } finally {
        t(!1)
      }
    }, [])
  }
}