n.d(t, {
  Z: function() {
return E;
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(442837),
  a = n(481060),
  s = n(740492),
  o = n(27584),
  d = n(295510),
  I = n(394059),
  c = n(65154),
  l = n(689938);

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
[n, E, u] = (0, o.Z)(e, t),
T = (0, r.e7)([s.ZP], () => s.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, i.jsx)(a.MenuCheckboxItem, {
id: 'self-video-hide',
label: l.Z.Messages.SHOW_SELF_VIDEO,
checked: !E,
action: () => {
  if (T || E)
    return u(!E);
  (0, a.openModal)(e => (0, i.jsx)(d.Z, {
    ...e,
    type: I.K.VIDEO,
    onConfirm: () => u(!E)
  }));
}
  }) : null;
}