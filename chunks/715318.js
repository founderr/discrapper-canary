n.d(a, {
    Z: function () {
        return c;
    }
});
var t = n(735250);
n(470079);
var o = n(481060),
    i = n(239091),
    l = n(299206),
    r = n(326103),
    s = n(689938);
function c(e) {
    let { applicationId: a, className: c, viewId: d } = e,
        u = (0, r.v)('GameProfileOverflowMenu'),
        m = (0, l.Z)({
            id: a,
            label: s.Z.Messages.COPY_ID_APPLICATION
        }),
        p = u
            ? (0, t.jsx)(o.MenuItem, {
                  id: 'game-profile-something-wrong',
                  label: s.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                  action: () =>
                      (0, o.openModalLazy)(async () => {
                          let { GameProfileFeedbackModal: e } = await n.e('1011').then(n.bind(n, 943350));
                          return (n) =>
                              (0, t.jsx)(e, {
                                  applicationId: a,
                                  viewId: d,
                                  ...n
                              });
                      })
              })
            : null;
    return null == m && null == p
        ? null
        : (0, t.jsx)(o.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, t.jsx)(o.Menu, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, i.Zy)(), a();
                      },
                      'aria-label': s.Z.Messages.GAME_PROFILE_VIEW_MORE,
                      onSelect: () => {},
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)(o.MenuGroup, { children: m }), (0, t.jsx)(o.MenuGroup, { children: p })]
                      })
                  });
              },
              children: (e) =>
                  (0, t.jsx)(o.Tooltip, {
                      text: s.Z.Messages.MORE,
                      children: (a) =>
                          (0, t.jsx)(o.Clickable, {
                              className: c,
                              ...a,
                              ...e,
                              children: (0, t.jsx)(o.MoreHorizontalIcon, {
                                  size: 'xs',
                                  color: o.tokens.colors.WHITE
                              })
                          })
                  })
          });
}
