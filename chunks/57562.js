"use strict";
s.r(t), s.d(t, {
  showAchievementToast: function() {
    return d
  },
  unlockAchievement: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("570140"),
  i = s("955204"),
  r = s("510273"),
  u = s("689938");

function o(e) {
  l.default.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let s = (0, i.getPoggermodeAchievementData)(e);
  null != s && (0, n.showToast)((0, n.createToast)(u.default.Messages.POGGERMODE_ACHIEVEMENTS, n.ToastType.CUSTOM, {
    position: n.ToastPosition.BOTTOM,
    component: (0, a.jsx)(r.default, {
      achievement: s,
      unlocked: t
    }),
    duration: 6e3
  }))
}