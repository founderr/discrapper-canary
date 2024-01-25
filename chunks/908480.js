"use strict";
a.r(t), a.d(t, {
  useExplicitMediaActions: function() {
    return i
  }
}), a("222007");
var s = a("884691"),
  l = a("448993");

function i(e) {
  let {
    onError: t,
    onSuccess: a,
    report: i
  } = e, [n, o] = s.useState(!1), d = s.useCallback(async () => {
    if (!n) {
      o(!0);
      try {
        await i(), null == a || a()
      } catch (a) {
        let e = new l.APIError(a);
        null == t || t(e)
      } finally {
        o(!1)
      }
    }
  }, [n, t, a, i]);
  return {
    reportFalsePositive: d,
    isReportFalsePositiveLoading: n
  }
}