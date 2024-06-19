t.d(A, {
  Z: function() {
    return o
  }
}), t(47120);
var n = t(470079),
  a = t(442837),
  s = t(881052),
  r = t(728345),
  l = t(812206);

function o(e, A) {
  let t = (0, a.e7)([l.Z], () => l.Z.getGuildApplication(e, A)),
    [o, i] = n.useState(null == t),
    [d, c] = n.useState(),
    [u, C] = n.useState(!1),
    g = n.useCallback(async () => {
      if (null == t && null != e) {
        C(!0), i(!0);
        try {
          await r.Z.getApplicationsForGuild(e, {
            type: A,
            includeTeam: !0
          })
        } catch (e) {
          c(new s.Hx(e))
        } finally {
          i(!1)
        }
      }
    }, [t, A, e]);
  return n.useEffect(() => {
    !u && g()
  }, [u, g]), {
    application: t,
    error: d,
    loading: o
  }
}