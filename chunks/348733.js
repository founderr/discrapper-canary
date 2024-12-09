var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(261435),
    c = n(237997),
    d = n(438015),
    u = n(981631),
    h = n(544690);
class p extends s.Component {
    render() {
        let { keybind: e, notifications: t, position: n, locked: s } = this.props;
        if (n === u._vf.DISABLED) return null;
        let r = -1;
        return (0, i.jsx)('div', {
            className: a()(h.container, h[n]),
            children: t.map((t) =>
                s && t.status === u._1z.TIMED_OUT
                    ? null
                    : ((r += 1),
                      (0, i.jsx)(
                          d.Z,
                          {
                              index: r,
                              zIndex: 100 - r,
                              position: n,
                              notification: t,
                              keybind: e,
                              locked: s
                          },
                          t.id
                      ))
            )
        });
    }
}
t.Z = l.ZP.connectStores([o.Z, c.Z], () => ({
    notifications: o.Z.getNotifications(),
    position: c.Z.getNotificationPositionMode()
}))(p);
