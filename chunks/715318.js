t.d(n, {
    Z: function () {
        return c;
    }
});
var a = t(200651);
t(192379);
var r = t(481060),
    s = t(239091),
    i = t(299206),
    o = t(858042),
    l = t(689938);
function c(e) {
    let { applicationId: n, className: t, viewId: c } = e,
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
        : (0, a.jsx)(r.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, a.jsx)(r.Menu, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, s.Zy)(), n();
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
                      children: (n) =>
                          (0, a.jsx)(r.Clickable, {
                              className: t,
                              ...n,
                              ...e,
                              children: (0, a.jsx)(r.MoreHorizontalIcon, {
                                  size: 'xs',
                                  color: r.tokens.colors.WHITE
                              })
                          })
                  })
          });
}
