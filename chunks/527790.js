r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(100527),
    s = r(906732),
    o = r(26033),
    l = r(194811),
    u = r(382405),
    c = r(670451);
function d(e) {
    let { user: n, entry: r, className: d, onClose: f, hideContextMenu: _ = !1 } = e,
        { analyticsLocations: h } = (0, s.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, o.Rh)(r)
        ? (0, i.jsx)(s.Gt, {
              value: h,
              children: (0, i.jsx)(u.Z, {
                  entry: r,
                  user: n,
                  className: d,
                  onClose: f,
                  header: (0, i.jsx)(l.Z, {
                      contextMenu: _
                          ? null
                          : (0, i.jsx)(c.Z, {
                                display: 'recent',
                                entry: r,
                                user: n,
                                onClose: f
                            })
                  })
              })
          })
        : null;
}
