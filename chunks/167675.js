t.d(n, {
  Z: function() {
    return c
  }
}), t(47120);
var i = t(735250);
t(470079);
var l = t(442837),
  r = t(481060),
  a = t(740492),
  u = t(27584),
  o = t(295510),
  s = t(394059),
  d = t(65154),
  E = t(689938);

function c(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
    [t, c, I] = (0, u.Z)(e, n),
    T = (0, l.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return t ? (0, i.jsx)(r.MenuCheckboxItem, {
    id: "self-video-hide",
    label: E.Z.Messages.SHOW_SELF_VIDEO,
    checked: !c,
    action: () => {
      if (T || c) return I(!c);
      (0, r.openModal)(e => (0, i.jsx)(o.Z, {
        ...e,
        type: s.K.VIDEO,
        onConfirm: () => I(!c)
      }))
    }
  }) : null
}