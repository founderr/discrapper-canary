t.d(n, {
    Z: function () {
        return c;
    }
});
var a = t(735250);
t(470079);
var r = t(481060),
    s = t(239091),
    o = t(299206),
    i = t(326103),
    l = t(689938);
function c(e) {
    let { applicationId: n, className: c } = e,
        d = (0, i.v)('GameProfileOverflowMenu'),
        u = (0, o.Z)({
            id: n,
            label: l.Z.Messages.COPY_ID_APPLICATION
        }),
        _ = d
            ? (0, a.jsx)(r.MenuItem, {
                  id: 'game-profile-something-wrong',
                  label: l.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let { GameProfileFeedbackModal: e } = await t.e('1011').then(t.bind(t, 943350));
                          return (t) =>
                              (0, a.jsx)(e, {
                                  applicationId: n,
                                  ...t
                              });
                      })
              })
            : null;
    return null == u && null == _
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
                          children: [(0, a.jsx)(r.MenuGroup, { children: u }), (0, a.jsx)(r.MenuGroup, { children: _ })]
                      })
                  });
              },
              children: (e) =>
                  (0, a.jsx)(r.Tooltip, {
                      text: l.Z.Messages.MORE,
                      children: (n) =>
                          (0, a.jsx)(r.Clickable, {
                              className: c,
                              ...n,
                              ...e,
                              children: (0, a.jsx)(r.MoreHorizontalIcon, { size: 'xs' })
                          })
                  })
          });
}
