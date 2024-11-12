n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(960870),
    d = n(848966),
    f = n(388032),
    _ = n(676411);
function p(e) {
    let { user: t, activity: n, entry: a, display: p, className: h, onSelect: m, onClose: g, onRequestOpen: E } = e,
        [v, I] = i.useState(!1),
        { analyticsLocations: b } = (0, u.ZP)(l.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        S = (0, c.Z)({
            display: p,
            user: t,
            activity: n,
            entry: a,
            analyticsLocations: b
        }),
        T = (0, d.Z)({
            entry: a,
            activity: n,
            user: t,
            display: p,
            onClose: g,
            onAction: S,
            isMenuOpen: v
        });
    return 0 === T.length || t.bot
        ? null
        : (0, r.jsx)(o.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  S({ action: 'OPEN_MENU' }), I(!0), null == E || E();
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.Menu, {
                      navId: 'content-inventory-context',
                      onClose: () => {
                          t(), I(!1);
                      },
                      'aria-label': f.intl.string(f.t.PlAQz8),
                      onSelect: m,
                      children: (0, r.jsx)(o.MenuGroup, { children: T })
                  });
              },
              children: (e) =>
                  (0, r.jsx)(o.Clickable, {
                      ...e,
                      onContextMenu: (t) => {
                          t.preventDefault(), e.onClick(t);
                      },
                      className: s()(_.contextMenu, h),
                      children: (0, r.jsx)(o.MoreHorizontalIcon, {
                          color: o.tokens.colors.INTERACTIVE_NORMAL,
                          size: 'xs'
                      })
                  })
          });
}
