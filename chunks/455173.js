var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(292556),
  u = n(812206);
class d extends(a = r.ZP.Store) {}
l = "UserAchievementStore", (i = "displayName") in(s = d) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l;
new d(o.Z, {
  USER_ACHIEVEMENT_UPDATE: function(e) {
    let {
      userAchievement: t
    } = e, {
      application_id: n,
      achievement: s,
      percent_complete: i
    } = t;
    if (100 === i && null != s) {
      let e = u.Z.getApplication(n),
        t = null != e ? e.getIconURL(64) : null;
      c.default.showNotification(t, s.name, s.description, {
        notif_type: "USER_ACHIEVEMENT_UPDATE"
      }, {
        omitViewTracking: !0
      })
    }
  }
})