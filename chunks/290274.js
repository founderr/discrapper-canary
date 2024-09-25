n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(960870),
    _ = n(848966),
    E = n(689938),
    f = n(676411);
function h(e) {
    let { user: t, activity: n, entry: r, display: o, className: h, onSelect: p, onClose: m, onRequestOpen: I } = e,
        [T, g] = a.useState(!1),
        { analyticsLocations: S } = (0, c.ZP)(u.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        A = (0, d.Z)({
            display: o,
            user: t,
            activity: n,
            entry: r,
            analyticsLocations: S
        }),
        v = (0, _.Z)({
            entry: r,
            activity: n,
            user: t,
            display: o,
            onClose: m,
            onAction: A,
            isMenuOpen: T
        });
    return 0 === v.length || t.bot
        ? null
        : (0, i.jsx)(l.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  A({ action: 'OPEN_MENU' }), g(!0), null == I || I();
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(l.Menu, {
                      navId: 'content-inventory-context',
                      onClose: () => {
                          t(), g(!1);
                      },
                      'aria-label': E.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
                      onSelect: p,
                      children: (0, i.jsx)(l.MenuGroup, { children: v })
                  });
              },
              children: (e) =>
                  (0, i.jsx)(l.Clickable, {
                      ...e,
                      onContextMenu: (t) => {
                          t.preventDefault(), e.onClick(t);
                      },
                      className: s()(f.contextMenu, h),
                      children: (0, i.jsx)(l.MoreHorizontalIcon, {
                          color: l.tokens.colors.INTERACTIVE_NORMAL,
                          size: 'xs'
                      })
                  })
          });
}
