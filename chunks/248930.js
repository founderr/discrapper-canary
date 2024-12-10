n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(100527),
    o = n(906732),
    l = n(26033),
    u = n(960870),
    c = n(510659),
    d = n(287954),
    f = n(660579),
    _ = n(652853),
    p = n(64621),
    h = n(582123),
    m = n(382405),
    g = n(386019),
    E = n(228168),
    v = n(249942);
function I(e) {
    let { user: t, entry: n, profileGuildId: i, className: I, onClose: T, hideContextMenu: b = !1 } = e,
        { analyticsLocations: S } = (0, o.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: y } = (0, _.z)(),
        { interactionSource: A, interactionSourceId: N } = (0, c.Xo)(),
        C = (0, u.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: S
        });
    return null != y && (0, l.Rh)(n)
        ? (0, r.jsx)(o.Gt, {
              value: S,
              children: (0, r.jsx)(p.Z, {
                  sourceType: E.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(h.Z, {
                      user: t,
                      onClose: T,
                      children: (e) => {
                          let { onAutoDismiss: s } = e;
                          return (0, r.jsx)(d.Z, {
                              user: t,
                              guildId: i,
                              profileType: y,
                              sourceId: n.id,
                              entry: n,
                              sourceType: E.n_.ACTIVITY,
                              children: () =>
                                  (0, r.jsx)(f.Z, {
                                      user: t,
                                      className: v.toolbarContainer,
                                      interactionSourceId: n.id,
                                      sourceType: E.n_.ACTIVITY,
                                      onShowToolbar: () => C({ action: 'HOVER_ACTIVITY_CARD' }),
                                      renderMoreButtonPopout: b
                                          ? void 0
                                          : (e) =>
                                                (0, r.jsx)(g.Z, {
                                                    display: 'recent',
                                                    entry: n,
                                                    user: t,
                                                    onClose: T,
                                                    onRequestOpen: s,
                                                    children: e
                                                }),
                                      children: (0, r.jsx)(m.Z, {
                                          entry: n,
                                          user: t,
                                          onClose: T,
                                          className: a()(I, { [v.hoisted]: A === E.n_.ACTIVITY && N === n.id })
                                      })
                                  })
                          });
                      }
                  })
              })
          })
        : null;
}
