"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("519794"),
  s = n("393900"),
  i = n("981913"),
  r = n("782340");

function u(e) {
  let {
    popoutWindowAlwaysOnTop: t,
    onToggleStayOnTop: n,
    ...u
  } = e, o = t ? r.default.Messages.POPOUT_REMOVE_FROM_TOP : r.default.Messages.POPOUT_STAY_ON_TOP, d = t ? s.default : a.default;
  return (0, l.jsx)(i.default, {
    onClick: () => n(!t),
    label: o,
    iconComponent: d,
    ...u
  })
}