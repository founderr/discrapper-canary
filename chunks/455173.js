"use strict";
n.r(t);
var a, s, i, l, r = n("442837"),
  o = n("570140"),
  u = n("292556"),
  d = n("812206");
class c extends(l = r.default.Store) {}
i = "UserAchievementStore", (s = "displayName") in(a = c) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i;
new c(o.default, {
  USER_ACHIEVEMENT_UPDATE: function(e) {
    let {
      userAchievement: t
    } = e, {
      application_id: n,
      achievement: a,
      percent_complete: s
    } = t;
    if (100 === s && null != a) {
      let e = d.default.getApplication(n),
        t = null != e ? e.getIconURL(64) : null;
      u.default.showNotification(t, a.name, a.description, {
        notif_type: "USER_ACHIEVEMENT_UPDATE"
      }, {
        omitViewTracking: !0
      })
    }
  }
})