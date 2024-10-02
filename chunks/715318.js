a.d(n, {
    Z: function () {
        return c;
    }
});
var t = a(735250);
a(470079);
var i = a(481060),
    o = a(239091),
    r = a(299206),
    l = a(326103),
    s = a(689938);
function c(e) {
    let { applicationId: n, className: c, viewId: d } = e,
        u = (0, l.v)('GameProfileOverflowMenu'),
        m = (0, r.Z)({
            id: n,
            label: s.Z.Messages.COPY_ID_APPLICATION
        }),
        p = u
            ? (0, t.jsx)(i.MenuItem, {
                  id: 'game-profile-something-wrong',
                  label: s.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                  action: () =>
                      (0, i.openModalLazy)(async () => {
                          let { GameProfileFeedbackModal: e } = await a.e('1011').then(a.bind(a, 943350));
                          return (a) =>
                              (0, t.jsx)(e, {
                                  applicationId: n,
                                  viewId: d,
                                  ...a
                              });
                      })
              })
            : null;
    return null == m && null == p
        ? null
        : (0, t.jsx)(i.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, t.jsx)(i.Menu, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, o.Zy)(), n();
                      },
                      'aria-label': s.Z.Messages.GAME_PROFILE_VIEW_MORE,
                      onSelect: () => {},
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)(i.MenuGroup, { children: m }), (0, t.jsx)(i.MenuGroup, { children: p })]
                      })
                  });
              },
              children: (e) =>
                  (0, t.jsx)(i.Tooltip, {
                      text: s.Z.Messages.MORE,
                      children: (n) =>
                          (0, t.jsx)(i.Clickable, {
                              className: c,
                              ...n,
                              ...e,
                              children: (0, t.jsx)(i.MoreHorizontalIcon, {
                                  size: 'xs',
                                  color: i.tokens.colors.WHITE
                              })
                          })
                  })
          });
}
