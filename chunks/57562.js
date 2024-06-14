"use strict";
s.r(t), s.d(t, {
  showAchievementToast: function() {
    return d
  },
  unlockAchievement: function() {
    return u
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("570140"),
  i = s("955204"),
  r = s("510273"),
  o = s("689938");

function u(e) {
  l.default.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let s = (0, i.getPoggermodeAchievementData)(e);
  null != s && (0, a.showToast)((0, a.createToast)(o.default.Messages.POGGERMODE_ACHIEVEMENTS, a.ToastType.CUSTOM, {
    position: a.ToastPosition.BOTTOM,
    component: (0, n.jsx)(r.default, {
      achievement: s,
      unlocked: t
    }),
    duration: 6e3
  }))
}