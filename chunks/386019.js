n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    l = n(960870),
    u = n(848966),
    c = n(388032);
function d(e) {
    let { children: t, user: n, activity: d, entry: f, display: _, onSelect: p, onClose: h, onRequestOpen: m } = e,
        [g, E] = i.useState(!1),
        { analyticsLocations: v } = (0, o.ZP)(s.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        I = (0, l.Z)({
            display: _,
            user: n,
            activity: d,
            entry: f,
            analyticsLocations: v
        }),
        T = (0, u.Z)({
            entry: f,
            activity: d,
            user: n,
            display: _,
            onClose: h,
            onAction: I,
            isMenuOpen: g
        });
    return 0 === T.length || n.bot
        ? null
        : (0, r.jsx)(a.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  I({ action: 'OPEN_MENU' }), E(!0), null == m || m();
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.Menu, {
                      navId: 'content-inventory-context',
                      onClose: () => {
                          t(), E(!1);
                      },
                      'aria-label': c.intl.string(c.t.PlAQz8),
                      onSelect: p,
                      children: (0, r.jsx)(a.MenuGroup, { children: T })
                  });
              },
              children: t
          });
}
