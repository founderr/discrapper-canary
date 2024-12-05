n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(369566),
    a = n(565640),
    s = n(151545),
    o = n(744802),
    l = n(493043);
function u(e) {
    let { user: t, currentUser: n, profileGuildId: u, className: c, onClose: d } = e,
        {
            live: [f],
            recent: [_],
            stream: p
        } = (0, i.Z)(t.id),
        h = (0, a.Z)(t.id, 'UserProfileFeaturedActivity'),
        m = t.id === n.id ? _ : h;
    return null != p
        ? (0, r.jsx)(l.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: p,
              profileGuildId: u,
              className: c,
              onClose: d
          })
        : null != f
          ? (0, r.jsx)(s.Z, {
                user: t,
                currentUser: n,
                activity: f,
                profileGuildId: u,
                className: c,
                onClose: d
            })
          : null != m
            ? (0, r.jsx)(o.Z, {
                  location: 'UserProfileFeaturedActivity',
                  user: t,
                  currentUser: n,
                  entry: m,
                  profileGuildId: u,
                  className: c,
                  onClose: d
              })
            : null;
}
