t.d(n, {
  Z: function() {
    return E
  }
}), t(47120);
var i = t(735250);
t(470079);
var r = t(442837),
  l = t(481060),
  u = t(740492),
  a = t(27584),
  o = t(295510),
  s = t(394059),
  d = t(65154),
  c = t(689938);

function E(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
    [t, E, _] = (0, a.Z)(e, n),
    I = (0, r.e7)([u.ZP], () => u.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return t ? (0, i.jsx)(l.MenuCheckboxItem, {
    id: "self-video-hide",
    label: c.Z.Messages.SHOW_SELF_VIDEO,
    checked: !E,
    action: () => {
      if (I || E) return _(!E);
      (0, l.openModal)(e => (0, i.jsx)(o.Z, {
        ...e,
        type: s.K.VIDEO,
        onConfirm: () => _(!E)
      }))
    }
  }) : null
}