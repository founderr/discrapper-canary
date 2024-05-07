"use strict";
t.r(A), t.d(A, {
  default: function() {
    return o
  }
}), t("47120");
var a = t("470079"),
  l = t("442837"),
  s = t("881052"),
  n = t("728345"),
  r = t("812206");

function o(e, A) {
  let t = (0, l.useStateFromStores)([r.default], () => r.default.getGuildApplication(e, A)),
    [o, i] = a.useState(null == t),
    [d, u] = a.useState(),
    [c, C] = a.useState(!1),
    f = a.useCallback(async () => {
      if (null == t && null != e) {
        C(!0), i(!0);
        try {
          await n.default.getApplicationsForGuild(e, {
            type: A,
            includeTeam: !0
          })
        } catch (e) {
          u(new s.APIError(e))
        } finally {
          i(!1)
        }
      }
    }, [t, A, e]);
  return a.useEffect(() => {
    !c && f()
  }, [c, f]), {
    application: t,
    error: d,
    loading: o
  }
}