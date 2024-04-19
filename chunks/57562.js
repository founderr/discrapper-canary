"use strict";
a.r(t), a.d(t, {
  showAchievementToast: function() {
    return d
  },
  unlockAchievement: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("955204"),
  r = a("510273"),
  o = a("689938");

function u(e) {
  l.default.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let a = (0, i.getPoggermodeAchievementData)(e);
  null != a && (0, s.showToast)((0, s.createToast)(o.default.Messages.POGGERMODE_ACHIEVEMENTS, s.ToastType.CUSTOM, {
    position: s.ToastPosition.BOTTOM,
    component: (0, n.jsx)(r.default, {
      achievement: a,
      unlocked: t
    }),
    duration: 6e3
  }))
}