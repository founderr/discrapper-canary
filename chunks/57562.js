n.d(t, {
  D: function() {
    return d
  },
  T: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(570140),
  r = n(955204),
  l = n(510273),
  o = n(689938);

function c(e) {
  i.Z.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let n = (0, r.oX)(e);
  if (null != n)(0, a.showToast)((0, a.createToast)(o.Z.Messages.POGGERMODE_ACHIEVEMENTS, a.ToastType.CUSTOM, {
    position: a.ToastPosition.BOTTOM,
    component: (0, s.jsx)(l.Z, {
      achievement: n,
      unlocked: t
    }),
    duration: 6e3
  }))
}