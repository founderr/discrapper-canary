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
    o = n(527790),
    l = n(493043);
function u(e) {
    let { user: t, currentUser: n, className: u, onClose: c } = e,
        {
            live: [d],
            recent: [f],
            stream: _
        } = (0, i.Z)(t.id),
        p = (0, a.Z)(t.id, 'UserProfileFeaturedActivity'),
        h = t.id === n.id ? f : p;
    return null != _
        ? (0, r.jsx)(l.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: _,
              className: u,
              onClose: c
          })
        : null != d
          ? (0, r.jsx)(s.Z, {
                user: t,
                currentUser: n,
                activity: d,
                className: u,
                onClose: c
            })
          : null != h
            ? (0, r.jsx)(o.Z, {
                  user: t,
                  entry: h,
                  className: u,
                  onClose: c
              })
            : null;
}
