n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(442837),
  a = n(481060),
  o = n(740492),
  s = n(27584),
  u = n(295510),
  d = n(394059),
  l = n(65154),
  E = n(689938);

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Yn.DEFAULT,
[n, _, c] = (0, s.Z)(e, t),
I = (0, r.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, i.jsx)(a.MenuCheckboxItem, {
id: 'self-video-hide',
label: E.Z.Messages.SHOW_SELF_VIDEO,
checked: !_,
action: () => {
  if (I || _)
    return c(!_);
  (0, a.openModal)(e => (0, i.jsx)(u.Z, {
    ...e,
    type: d.K.VIDEO,
    onConfirm: () => c(!_)
  }));
}
  }) : null;
}