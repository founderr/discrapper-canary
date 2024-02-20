"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  i = n("758710"),
  l = n("981913"),
  o = n("782340"),
  u = n("936609");

function d(e) {
  let {
    popoutOpen: t,
    onClosePopout: n,
    onOpenPopout: r,
    ...d
  } = e, c = t ? o.default.Messages.POPOUT_RETURN : o.default.Messages.POPOUT_PLAYER;
  return (0, a.jsx)(l.default, {
    label: c,
    onClick: t ? n : r,
    iconComponent: i.default,
    iconClassName: s({
      [u.popIn]: t
    }),
    ...d
  })
}