n.d(t, {
    M: function () {
        return o;
    }
});
var r = n(200651),
    i = n(481060),
    a = n(326103),
    s = n(689938);
function o(e) {
    let { applicationId: t, viewId: o, showOutdatedInfoOption: l = !0 } = e,
        u = (0, a.v)('GameProfileOverflowMenu');
    return null != t && u
        ? (0, r.jsx)(i.MenuItem, {
              id: 'game-profile-something-wrong',
              label: s.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
              action: () =>
                  (0, i.openModalLazy)(async () => {
                      let { default: e } = await n.e('46923').then(n.bind(n, 55396));
                      return (n) =>
                          (0, r.jsx)(e, {
                              showOutdatedInfoOption: l,
                              applicationId: t,
                              viewId: o,
                              ...n
                          });
                  })
          })
        : null;
}
