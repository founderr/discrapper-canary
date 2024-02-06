"use strict";
t.r(A), t.d(A, {
  default: function() {
    return o
  }
}), t("222007");
var a = t("884691"),
  n = t("446674"),
  l = t("448993"),
  r = t("651057"),
  s = t("299285");

function o(e, A) {
  let t = (0, n.useStateFromStores)([s.default], () => s.default.getGuildApplication(e, A)),
    [o, i] = a.useState(null == t),
    [d, u] = a.useState(),
    [c, f] = a.useState(!1),
    C = a.useCallback(async () => {
      if (null == t && null != e) {
        f(!0), i(!0);
        try {
          await r.default.getApplicationsForGuild(e, {
            type: A,
            includeTeam: !0
          })
        } catch (e) {
          u(new l.APIError(e))
        } finally {
          i(!1)
        }
      }
    }, [t, A, e]);
  return a.useEffect(() => {
    !c && C()
  }, [c, C]), {
    application: t,
    error: d,
    loading: o
  }
}