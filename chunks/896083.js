t.d(n, {
  F: function() {
    return s
  }
}), t(47120);
var i = t(470079),
  l = t(295141);
let s = () => {
  let [e, n] = i.useState(!1), [t, s] = i.useState(null);
  return {
    loading: e,
    error: t,
    getTrialPurchaseEligibility: i.useCallback(async (e, t, i) => {
      n(!0), s(null);
      try {
        return await (0, l.LB)(e, t, i)
      } catch (e) {
        s(e)
      } finally {
        n(!1)
      }
    }, [])
  }
}