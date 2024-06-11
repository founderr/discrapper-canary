"use strict";
t.r(A), t.d(A, {
  default: function() {
    return i
  }
}), t("47120");
var a = t("470079"),
  l = t("442837"),
  s = t("881052"),
  r = t("728345"),
  n = t("812206");

function i(e, A) {
  let t = (0, l.useStateFromStores)([n.default], () => n.default.getGuildApplication(e, A)),
    [i, o] = a.useState(null == t),
    [d, u] = a.useState(),
    [c, g] = a.useState(!1),
    f = a.useCallback(async () => {
      if (null == t && null != e) {
        g(!0), o(!0);
        try {
          await r.default.getApplicationsForGuild(e, {
            type: A,
            includeTeam: !0
          })
        } catch (e) {
          u(new s.APIError(e))
        } finally {
          o(!1)
        }
      }
    }, [t, A, e]);
  return a.useEffect(() => {
    !c && f()
  }, [c, f]), {
    application: t,
    error: d,
    loading: i
  }
}