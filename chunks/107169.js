n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(871499),
  a = n(689938);

function r(e) {
  let {
    popoutWindowAlwaysOnTop: t,
    onToggleStayOnTop: n,
    ...r
  } = e, o = t ? a.Z.Messages.POPOUT_REMOVE_FROM_TOP : a.Z.Messages.POPOUT_STAY_ON_TOP, c = t ? i.PinUprightSlashIcon : i.PinUprightIcon;
  return (0, l.jsx)(s.Z, {
    onClick: () => n(!t),
    label: o,
    iconComponent: c,
    ...r
  })
}