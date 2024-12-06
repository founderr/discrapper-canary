n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(561308),
    s = n(369566),
    o = n(565640),
    l = n(151545),
    u = n(744802),
    c = n(493043);
function d(e) {
    let { user: t, currentUser: n, profileGuildId: d, className: f, onClose: _ } = e,
        { live: p, recent: h, stream: m } = (0, s.Z)(t.id),
        [g] = p,
        E = t.id === n.id,
        v = (0, o.Z)(t.id, 'UserProfileFeaturedActivity'),
        I = i.useMemo(() => (E ? h.find(a.Ae) : v), [E, h, v]);
    return null != m
        ? (0, r.jsx)(c.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: m,
              profileGuildId: d,
              className: f,
              onClose: _
          })
        : null != g
          ? (0, r.jsx)(l.Z, {
                user: t,
                currentUser: n,
                activity: g,
                profileGuildId: d,
                className: f,
                onClose: _
            })
          : null != I
            ? (0, r.jsx)(u.Z, {
                  location: 'UserProfileFeaturedActivity',
                  user: t,
                  currentUser: n,
                  entry: I,
                  profileGuildId: d,
                  className: f,
                  onClose: _
              })
            : null;
}
