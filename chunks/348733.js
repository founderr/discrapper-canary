"use strict";
var i = n(735250),
  s = n(470079),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  r = n(215569),
  c = n(261435),
  d = n(237997),
  u = n(438015),
  h = n(981631),
  p = n(538113);
class f extends s.Component {
  render() {
    let {
      keybind: e,
      notifications: t,
      position: n,
      locked: s
    } = this.props;
    if (n === h._vf.DISABLED) return null;
    let l = -1;
    return (0, i.jsx)(r.W, {
      component: "div",
      className: o()(p.container, p[n]),
      children: t.map(t => s && t.status === h._1z.TIMED_OUT ? null : (l += 1, (0, i.jsx)(u.Z, {
        index: l,
        zIndex: 100 - l,
        position: n,
        notification: t,
        keybind: e,
        locked: s
      }, t.id)))
    })
  }
}
t.Z = a.ZP.connectStores([c.Z, d.Z], () => ({
  notifications: c.Z.getNotifications(),
  position: d.Z.getNotificationPositionMode()
}))(f)