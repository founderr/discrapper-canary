var i, s, l, a, r = n(442837),
  o = n(570140),
  c = n(292556),
  u = n(812206);
class d extends(a = r.ZP.Store) {}
l = "UserAchievementStore", (s = "displayName") in(i = d) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l;
new d(o.Z, {
  USER_ACHIEVEMENT_UPDATE: function(e) {
    let {
      userAchievement: t
    } = e, {
      application_id: n,
      achievement: i,
      percent_complete: s
    } = t;
    if (100 === s && null != i) {
      let e = u.Z.getApplication(n),
        t = null != e ? e.getIconURL(64) : null;
      c.default.showNotification(t, i.name, i.description, {
        notif_type: "USER_ACHIEVEMENT_UPDATE"
      }, {
        omitViewTracking: !0
      })
    }
  }
})