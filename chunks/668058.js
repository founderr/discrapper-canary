n.d(t, {
  $: function() {
    return l
  }
}), n(47120);
var s = n(470079),
  i = n(881052);

function l(e) {
  let {
    onError: t,
    onSuccess: n,
    report: l
  } = e, [a, r] = s.useState(!1);
  return {
    reportFalsePositive: s.useCallback(async () => {
      if (!a) {
        r(!0);
        try {
          await l(), null == n || n()
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          r(!1)
        }
      }
    }, [a, t, n, l]),
    isReportFalsePositiveLoading: a
  }
}