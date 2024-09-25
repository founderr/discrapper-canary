n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(70956),
    s = n(709054),
    l = n(27144),
    u = n(369566),
    c = n(151545),
    d = n(527790),
    _ = n(304042);
function E(e) {
    let { user: t, currentUser: n, className: r, onClose: E } = e,
        { live: f, recent: h, stream: p } = (0, u.Z)(t.id),
        [m] = f,
        { mostRecentActivityEnabled: I } = (0, l.z)({ location: 'UserProfileFeaturedActivity' }),
        T = a.useMemo(() => h.find((e) => s.default.age(e.id) / o.Z.Millis.HOUR < 24), [h]);
    return null != p
        ? (0, i.jsx)(_.Z, {
              user: t,
              currentUser: n,
              stream: p,
              className: r,
              onClose: E
          })
        : null != m
          ? (0, i.jsx)(c.Z, {
                user: t,
                currentUser: n,
                activity: m,
                className: r,
                onClose: E
            })
          : I && null != T
            ? (0, i.jsx)(d.Z, {
                  user: t,
                  entry: T,
                  className: r,
                  onClose: E
              })
            : null;
}
