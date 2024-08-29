n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(27144),
    d = n(318134),
    _ = n(848966),
    E = n(689938),
    f = n(139665);
function h(e) {
    let { user: t, activity: n, entry: a, display: h, className: p, onSelect: I, onClose: m, onRequestOpen: T } = e,
        [g, S] = i.useState(!1),
        { newActivityCardsEnabled: A } = (0, c.z)({ location: 'UserProfileActivityContextMenu' }),
        { analyticsLocations: N } = (0, u.ZP)(l.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        { onAction: O } = (0, d.Z)({
            display: h,
            user: t,
            activity: n,
            entry: a,
            analyticsLocations: N
        }),
        R = (0, _.Z)({
            entry: a,
            activity: n,
            user: t,
            display: h,
            onClose: m,
            onAction: O,
            isMenuOpen: g
        });
    return !A || 0 === R.length || t.bot
        ? null
        : (0, r.jsx)(o.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  O({ action: 'OPEN_MENU' }), S(!0), null == T || T();
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.Menu, {
                      navId: 'content-inventory-context',
                      onClose: () => {
                          t(), S(!1);
                      },
                      'aria-label': E.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
                      onSelect: I,
                      children: (0, r.jsx)(o.MenuGroup, { children: R })
                  });
              },
              children: (e) =>
                  (0, r.jsx)(o.Clickable, {
                      ...e,
                      onContextMenu: (t) => {
                          t.preventDefault(), e.onClick(t);
                      },
                      className: s()(f.contextMenu, p),
                      children: (0, r.jsx)(o.MoreHorizontalIcon, {
                          color: o.tokens.colors.INTERACTIVE_NORMAL,
                          size: 'xs'
                      })
                  })
          });
}
