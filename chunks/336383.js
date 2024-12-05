var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(906732),
    u = n(785717),
    c = n(456644),
    d = n(502762),
    f = n(652853),
    _ = n(171368),
    p = n(228168),
    h = n(388032),
    m = n(249942);
t.Z = i.forwardRef(function (e, t) {
    let { children: n, className: i, onAction: a, onClose: g, ...E } = e,
        { profileType: v } = (0, f.z)(),
        { analyticsLocations: I } = (0, l.ZP)(),
        { context: T } = (0, u.KZ)(),
        { recentActivityEnabled: b } = (0, c.i)({
            location: 'UserProfileActivityCardContainer',
            autoTrackExposure: !1
        });
    return v !== p.y0.FULL_SIZE && (null == T ? void 0 : T.userId) != null && b
        ? (0, r.jsx)(o.Clickable, {
              className: m.clickableContainer,
              'aria-label': h.intl.string(h.t.pD1L1t),
              onClick: () => {
                  null == a || a({ action: 'PRESS_CARD' }),
                      (0, _.openUserProfileModal)({
                          section: p.oh.ACTIVITY,
                          sourceAnalyticsLocations: I,
                          ...T
                      }),
                      null == g || g();
              },
              children: (0, r.jsx)(d.Z.Overlay, {
                  ref: t,
                  className: s()(m.card, i),
                  ...E,
                  children: n
              })
          })
        : (0, r.jsx)(d.Z.Overlay, {
              ref: t,
              className: s()(m.card, i),
              ...E,
              children: n
          });
});
