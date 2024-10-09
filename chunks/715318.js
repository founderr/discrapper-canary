a.d(n, {
    Z: function () {
        return c;
    }
});
var t = a(735250);
a(470079);
var r = a(481060),
    s = a(239091),
    i = a(299206),
    o = a(858042),
    l = a(689938);
function c(e) {
    let { applicationId: n, className: a, viewId: c } = e,
        d = (0, i.Z)({
            id: n,
            label: l.Z.Messages.COPY_ID_APPLICATION
        }),
        u = (0, o.M)({
            applicationId: n,
            viewId: c
        });
    return null == d && null == u
        ? null
        : (0, t.jsx)(r.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, t.jsx)(r.Menu, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, s.Zy)(), n();
                      },
                      'aria-label': l.Z.Messages.GAME_PROFILE_VIEW_MORE,
                      onSelect: () => {},
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)(r.MenuGroup, { children: d }), (0, t.jsx)(r.MenuGroup, { children: u })]
                      })
                  });
              },
              children: (e) =>
                  (0, t.jsx)(r.Tooltip, {
                      text: l.Z.Messages.MORE,
                      children: (n) =>
                          (0, t.jsx)(r.Clickable, {
                              className: a,
                              ...n,
                              ...e,
                              children: (0, t.jsx)(r.MoreHorizontalIcon, {
                                  size: 'xs',
                                  color: r.tokens.colors.WHITE
                              })
                          })
                  })
          });
}
