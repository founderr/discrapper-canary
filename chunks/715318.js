n.d(t, {
    Z: function () {
        return c;
    }
});
var a = n(735250);
n(470079);
var r = n(481060),
    s = n(239091),
    i = n(299206),
    o = n(858042),
    l = n(689938);
function c(e) {
    let { applicationId: t, className: n, viewId: c } = e,
        d = (0, i.Z)({
            id: t,
            label: l.Z.Messages.COPY_ID_APPLICATION
        }),
        u = (0, o.M)({
            applicationId: t,
            viewId: c
        });
    return null == d && null == u
        ? null
        : (0, a.jsx)(r.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(r.Menu, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, s.Zy)(), t();
                      },
                      'aria-label': l.Z.Messages.GAME_PROFILE_VIEW_MORE,
                      onSelect: () => {},
                      children: (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(r.MenuGroup, { children: d }), (0, a.jsx)(r.MenuGroup, { children: u })]
                      })
                  });
              },
              children: (e) =>
                  (0, a.jsx)(r.Tooltip, {
                      text: l.Z.Messages.MORE,
                      children: (t) =>
                          (0, a.jsx)(r.Clickable, {
                              className: n,
                              ...t,
                              ...e,
                              children: (0, a.jsx)(r.MoreHorizontalIcon, {
                                  size: 'xs',
                                  color: r.tokens.colors.WHITE
                              })
                          })
                  })
          });
}
