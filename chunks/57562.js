n.d(t, {
  D: function() {
    return d
  },
  T: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  a = n(570140),
  l = n(955204),
  r = n(510273),
  c = n(689938);

function o(e) {
  a.Z.dispatch({
    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
    achievementId: e
  })
}

function d(e, t) {
  let n = (0, l.oX)(e);
  if (null != n)(0, i.showToast)((0, i.createToast)(c.Z.Messages.POGGERMODE_ACHIEVEMENTS, i.ToastType.CUSTOM, {
    position: i.ToastPosition.BOTTOM,
    component: (0, s.jsx)(r.Z, {
      achievement: n,
      unlocked: t
    }),
    duration: 6e3
  }))
}