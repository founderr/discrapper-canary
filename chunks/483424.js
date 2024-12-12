r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(561308),
    l = r(369566),
    u = r(565640),
    c = r(151545),
    d = r(744802),
    f = r(493043);
function _(e) {
    let { user: n, currentUser: r, profileGuildId: i, className: _, onClose: h } = e,
        { live: p, recent: m, stream: g } = (0, l.Z)(n.id),
        [E] = p,
        v = n.id === r.id,
        I = (0, u.Z)(n.id, 'UserProfileFeaturedActivity'),
        T = s.useMemo(() => (v ? m.find(o.Ae) : I), [v, m, I]);
    return null != g
        ? (0, a.jsx)(f.Z, {
              location: 'UserProfileFeaturedActivity',
              user: n,
              currentUser: r,
              stream: g,
              profileGuildId: i,
              className: _,
              onClose: h
          })
        : null != E
          ? (0, a.jsx)(c.Z, {
                user: n,
                currentUser: r,
                activity: E,
                profileGuildId: i,
                className: _,
                onClose: h
            })
          : null != T
            ? (0, a.jsx)(d.Z, {
                  location: 'UserProfileFeaturedActivity',
                  user: n,
                  currentUser: r,
                  entry: T,
                  profileGuildId: i,
                  className: _,
                  onClose: h
              })
            : null;
}
