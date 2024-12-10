n.d(t, {
    Z: function () {
        return v;
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
    h = n(382405),
    m = n(386019),
    g = n(228168),
    E = n(249942);
function v(e) {
    let { user: t, entry: n, profileGuildId: i, className: v, onClose: I, hideContextMenu: T = !1 } = e,
        { analyticsLocations: b } = (0, o.ZP)(s.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: S } = (0, _.z)(),
        { interactionSource: y, interactionSourceId: A } = (0, c.Xo)(),
        N = (0, u.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: b
        });
    return null != S && (0, l.Rh)(n)
        ? (0, r.jsx)(o.Gt, {
              value: b,
              children: (0, r.jsx)(p.Z, {
                  sourceType: g.n_.ACTIVITY,
                  user: t,
                  children: (0, r.jsx)(d.Z, {
                      user: t,
                      guildId: i,
                      profileType: S,
                      sourceId: n.id,
                      entry: n,
                      sourceType: g.n_.ACTIVITY,
                      children: () =>
                          (0, r.jsx)(f.Z, {
                              user: t,
                              className: E.toolbarContainer,
                              interactionSourceId: n.id,
                              sourceType: g.n_.ACTIVITY,
                              onShowToolbar: () => N({ action: 'HOVER_ACTIVITY_CARD' }),
                              renderMoreButtonPopout: T
                                  ? void 0
                                  : (e) =>
                                        (0, r.jsx)(m.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: I,
                                            children: e
                                        }),
                              children: (0, r.jsx)(h.Z, {
                                  entry: n,
                                  user: t,
                                  onClose: I,
                                  className: a()(v, { [E.hoisted]: y === g.n_.ACTIVITY && A === n.id })
                              })
                          })
                  })
              })
          })
        : null;
}
