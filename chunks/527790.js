n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(100527),
    a = n(906732),
    s = n(26033),
    o = n(194811),
    l = n(582123),
    u = n(382405),
    c = n(670451);
function d(e) {
    let { user: t, entry: n, className: d, onClose: f, hideContextMenu: _ = !1 } = e,
        { analyticsLocations: p } = (0, a.ZP)(i.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, s.Rh)(n)
        ? (0, r.jsx)(a.Gt, {
              value: p,
              children: (0, r.jsx)(l.Z, {
                  user: t,
                  onClose: f,
                  children: (e) => {
                      let { onAutoDismiss: i } = e;
                      return (0, r.jsx)(u.Z, {
                          entry: n,
                          user: t,
                          className: d,
                          onClose: f,
                          header: (0, r.jsx)(o.Z, {
                              contextMenu: _
                                  ? null
                                  : (0, r.jsx)(c.Z, {
                                        display: 'recent',
                                        entry: n,
                                        user: t,
                                        onClose: f,
                                        onRequestOpen: i
                                    })
                          })
                      });
                  }
              })
          })
        : null;
}
