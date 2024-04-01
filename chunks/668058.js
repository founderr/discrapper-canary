"use strict";
n.r(t), n.d(t, {
  useExplicitMediaActions: function() {
    return a
  }
}), n("47120");
var s = n("470079"),
  l = n("881052");

function a(e) {
  let {
    onError: t,
    onSuccess: n,
    report: a
  } = e, [i, r] = s.useState(!1);
  return {
    reportFalsePositive: s.useCallback(async () => {
      if (!i) {
        r(!0);
        try {
          await a(), null == n || n()
        } catch (n) {
          let e = new l.APIError(n);
          null == t || t(e)
        } finally {
          r(!1)
        }
      }
    }, [i, t, n, a]),
    isReportFalsePositiveLoading: i
  }
}