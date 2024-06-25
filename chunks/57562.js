s.d(t, {
  D: function() {
    return E
  },
  T: function() {
    return c
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(570140),
  r = s(955204),
  l = s(510273),
  o = s(689938);

function c(e) {
  i.Z.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function E(e, t) {
  let s = (0, r.oX)(e);
  if (null != s)(0, a.showToast)((0, a.createToast)(o.Z.Messages.POGGERMODE_ACHIEVEMENTS, a.ToastType.CUSTOM, {
    position: a.ToastPosition.BOTTOM,
    component: (0, n.jsx)(l.Z, {
      achievement: s,
      unlocked: t
    }),
    duration: 6e3
  }))
}