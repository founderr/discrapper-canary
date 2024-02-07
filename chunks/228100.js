"use strict";
t.r(A), t.d(A, {
  default: function() {
    return i
  }
}), t("222007");
var a = t("884691"),
  l = t("446674"),
  n = t("448993"),
  s = t("651057"),
  r = t("299285");

function i(e, A) {
  let t = (0, l.useStateFromStores)([r.default], () => r.default.getGuildApplication(e, A)),
    [i, o] = a.useState(null == t),
    [d, u] = a.useState(),
    [c, f] = a.useState(!1),
    g = a.useCallback(async () => {
      if (null == t && null != e) {
        f(!0), o(!0);
        try {
          await s.default.getApplicationsForGuild(e, {
            type: A,
            includeTeam: !0
          })
        } catch (e) {
          u(new n.APIError(e))
        } finally {
          o(!1)
        }
      }
    }, [t, A, e]);
  return a.useEffect(() => {
    !c && g()
  }, [c, g]), {
    application: t,
    error: d,
    loading: i
  }
}