"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var r = n("987317"),
  i = n("713726"),
  s = n("754493"),
  l = n("293137"),
  u = n("981913"),
  o = n("782340");

function d(e) {
  let {
    centerButton: t = !1,
    channel: n,
    onClick: d,
    ...c
  } = e, f = t ? u.CenterControlButton : u.default, h = n.isBroadcastChannel(), p = (0, s.useIsBroadcastingInChannel)(n.id);
  return (0, a.jsx)(f, {
    ...c,
    onClick: () => {
      p && (0, i.stopBroadcast)(), r.default.disconnect(), null == d || d()
    },
    iconComponent: l.default,
    label: p ? o.default.Messages.STOP_BROADCASTING : h ? o.default.Messages.LEAVE_BROADCAST : o.default.Messages.DISCONNECT_SELF
  })
}