n.d(t, {
  Z: function() {
return c;
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(442837),
  a = n(481060),
  o = n(740492),
  s = n(27584),
  u = n(295510),
  l = n(394059),
  d = n(65154),
  E = n(689938);

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
[n, c, I] = (0, s.Z)(e, t),
_ = (0, r.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, i.jsx)(a.MenuCheckboxItem, {
id: 'self-video-hide',
label: E.Z.Messages.SHOW_SELF_VIDEO,
checked: !c,
action: () => {
  if (_ || c)
    return I(!c);
  (0, a.openModal)(e => (0, i.jsx)(u.Z, {
    ...e,
    type: l.K.VIDEO,
    onConfirm: () => I(!c)
  }));
}
  }) : null;
}