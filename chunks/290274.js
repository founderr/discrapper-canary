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
    _ = n(249942);
function p(e) {
    let { user: t, activity: n, entry: a, display: p, className: h, onSelect: m, onClose: g, onRequestOpen: E } = e,
        [v, I] = i.useState(!1),
        { analyticsLocations: T } = (0, u.ZP)(l.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        b = (0, c.Z)({
            display: p,
            user: t,
            activity: n,
            entry: a,
            analyticsLocations: T
        }),
        S = (0, d.Z)({
            entry: a,
            activity: n,
            user: t,
            display: p,
            onClose: g,
            onAction: b,
            isMenuOpen: v
        });
    return 0 === S.length || t.bot
        ? null
        : (0, r.jsx)(o.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  b({ action: 'OPEN_MENU' }), I(!0), null == E || E();
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
                      children: (0, r.jsx)(o.MenuGroup, { children: S })
                  });
              },
              children: (e) =>
                  (0, r.jsx)(o.Tooltip, {
                      text: f.intl.string(f.t.UKOtz8),
                      children: (t) =>
                          (0, r.jsx)(o.Clickable, {
                              ...t,
                              ...e,
                              onClick: (n) => {
                                  var r;
                                  n.stopPropagation(), null === (r = t.onClick) || void 0 === r || r.call(t), e.onClick(n);
                              },
                              onContextMenu: (n) => {
                                  var r;
                                  n.preventDefault(), null === (r = t.onClick) || void 0 === r || r.call(t), e.onClick(n);
                              },
                              className: s()(_.contextMenu, h),
                              children: (0, r.jsx)(o.MoreHorizontalIcon, {
                                  color: o.tokens.colors.INTERACTIVE_NORMAL,
                                  size: 'xs'
                              })
                          })
                  })
          });
}
