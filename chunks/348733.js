var i = n(735250),
    s = n(470079),
    a = n(120356),
    o = n.n(a),
    r = n(442837),
    l = n(261435),
    c = n(237997),
    d = n(438015),
    u = n(981631),
    h = n(455178);
class p extends s.Component {
    render() {
        let { keybind: e, notifications: t, position: n, locked: s } = this.props;
        if (n === u._vf.DISABLED) return null;
        let a = -1;
        return (0, i.jsx)('div', {
            className: o()(h.container, h[n]),
            children: t.map((t) =>
                s && t.status === u._1z.TIMED_OUT
                    ? null
                    : ((a += 1),
                      (0, i.jsx)(
                          d.Z,
                          {
                              index: a,
                              zIndex: 100 - a,
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
t.Z = r.ZP.connectStores([l.Z, c.Z], () => ({
    notifications: l.Z.getNotifications(),
    position: c.Z.getNotificationPositionMode()
}))(p);
