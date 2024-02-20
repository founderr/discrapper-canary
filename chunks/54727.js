"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var r = n("987317"),
  s = n("713726"),
  i = n("754493"),
  l = n("293137"),
  o = n("981913"),
  u = n("782340");

function d(e) {
  let {
    centerButton: t = !1,
    channel: n,
    onClick: d,
    ...c
  } = e, f = t ? o.CenterControlButton : o.default, h = n.isBroadcastChannel(), p = (0, i.useIsBroadcastingInChannel)(n.id);
  return (0, a.jsx)(f, {
    ...c,
    onClick: () => {
      p && (0, s.stopBroadcast)(), r.default.disconnect(), null == d || d()
    },
    iconComponent: l.default,
    label: p ? u.default.Messages.STOP_BROADCASTING : h ? u.default.Messages.LEAVE_BROADCAST : u.default.Messages.DISCONNECT_SELF
  })
}