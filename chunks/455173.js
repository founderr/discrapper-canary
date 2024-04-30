"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("570140"),
  u = a("292556"),
  d = a("812206");
class c extends(i = r.default.Store) {}
l = "UserAchievementStore", (s = "displayName") in(n = c) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l;
new c(o.default, {
  USER_ACHIEVEMENT_UPDATE: function(e) {
    let {
      userAchievement: t
    } = e, {
      application_id: a,
      achievement: n,
      percent_complete: s
    } = t;
    if (100 === s && null != n) {
      let e = d.default.getApplication(a),
        t = null != e ? e.getIconURL(64) : null;
      u.default.showNotification(t, n.name, n.description, {
        notif_type: "USER_ACHIEVEMENT_UPDATE"
      }, {
        omitViewTracking: !0
      })
    }
  }
})