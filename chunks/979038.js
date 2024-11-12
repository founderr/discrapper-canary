n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(200651);
n(192379);
var i = n(620662),
    a = n(841784),
    s = n(834353),
    o = n(802856),
    l = n(420660),
    u = n(374129),
    c = n(639351),
    d = n(103479),
    f = n(191764),
    _ = n(238607),
    p = n(414402),
    h = n(934393),
    m = n(715547),
    g = n(981631);
function E(e) {
    let { user: t, currentUser: n, activity: E, onAction: v, onClose: I } = e;
    return (0, o.Z)(E)
        ? (0, r.jsx)(h.Z, {
              platformType: g.ABu.XBOX,
              icon: () => (0, r.jsx)(c.Z, {}),
              onAction: v
          })
        : (0, s.Z)(E)
          ? (0, r.jsx)(h.Z, {
                platformType: g.ABu.PLAYSTATION,
                icon: () => (0, r.jsx)(u.Z, {}),
                onAction: v
            })
          : (0, l.Z)(E)
            ? (0, r.jsx)(m.Z, {
                  activity: E,
                  onAction: v
              })
            : (0, i.Z)(E, g.xjy.JOIN) || (0, a.Z)(E)
              ? (0, r.jsx)(_.Z, {
                    user: t,
                    currentUser: n,
                    activity: E,
                    onAction: v,
                    onClose: I
                })
              : (null == E ? void 0 : E.type) === g.IIU.HANG_STATUS
                ? (0, r.jsx)(f.Z, {
                      user: t,
                      activity: E,
                      onAction: v,
                      onClose: I
                  })
                : (null == E ? void 0 : E.buttons) != null && (null == E ? void 0 : E.buttons.length) >= 1
                  ? (0, r.jsx)(d.Z, {
                        user: t,
                        activity: E,
                        onAction: v
                    })
                  : (0, i.Z)(E, g.xjy.INSTANCE)
                    ? (0, r.jsx)(p.Z, {
                          user: t,
                          activity: E,
                          onAction: v
                      })
                    : null;
}
