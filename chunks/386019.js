r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(100527),
    u = r(906732),
    c = r(960870),
    d = r(848966),
    f = r(388032);
function _(e) {
    let { children: n, user: r, activity: i, entry: _, display: h, onSelect: p, onClose: m } = e,
        [g, E] = s.useState(!1),
        { analyticsLocations: v } = (0, u.ZP)(l.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        I = (0, c.Z)({
            display: h,
            user: r,
            activity: i,
            entry: _,
            analyticsLocations: v
        }),
        T = (0, d.Z)({
            entry: _,
            activity: i,
            user: r,
            display: h,
            onClose: m,
            onAction: I,
            isMenuOpen: g
        });
    return 0 === T.length || r.bot
        ? null
        : (0, a.jsx)(o.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  I({ action: 'OPEN_MENU' }), E(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, a.jsx)(o.Menu, {
                      navId: 'content-inventory-context',
                      onClose: () => {
                          n(), E(!1);
                      },
                      'aria-label': f.intl.string(f.t.PlAQz8),
                      onSelect: p,
                      children: (0, a.jsx)(o.MenuGroup, { children: T })
                  });
              },
              children: n
          });
}
