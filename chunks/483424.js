r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(561308),
    l = r(456644),
    u = r(369566),
    c = r(565640),
    d = r(151545),
    f = r(744802),
    _ = r(493043);
function h(e) {
    let { user: n, currentUser: r, profileGuildId: i, className: h, onClose: p } = e,
        { live: m, recent: g, stream: E } = (0, u.Z)(n.id),
        [v] = m,
        { recentActivityEnabled: I } = (0, l.i)({ location: 'UserProfileFeaturedActivity' }),
        T = n.id === r.id,
        b = (0, c.Z)(n.id, 'UserProfileFeaturedActivity'),
        y = s.useMemo(() => (T ? g.find(o.Ae) : b), [T, g, b]);
    return null != E
        ? (0, a.jsx)(_.Z, {
              location: 'UserProfileFeaturedActivity',
              user: n,
              currentUser: r,
              stream: E,
              profileGuildId: i,
              className: h,
              onClose: p
          })
        : null != v
          ? (0, a.jsx)(d.Z, {
                user: n,
                currentUser: r,
                activity: v,
                profileGuildId: i,
                className: h,
                onClose: p
            })
          : I && null != y
            ? (0, a.jsx)(f.Z, {
                  location: 'UserProfileFeaturedActivity',
                  user: n,
                  currentUser: r,
                  entry: y,
                  profileGuildId: i,
                  className: h,
                  onClose: p
              })
            : null;
}
