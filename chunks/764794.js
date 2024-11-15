n(47120);
var r = n(200651),
    i = n(192379),
    a = n(981729),
    s = n(780384),
    o = n(351773),
    l = n(410030),
    u = n(100527),
    c = n(906732),
    d = n(790368),
    f = n(704440),
    _ = n(632583),
    p = n(626135),
    h = n(443603),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(482133);
t.Z = i.memo(function (e) {
    let { disabled: t, referralsRemaining: n, channel: b, isResending: I } = e,
        { enabled: S } = d.Z.useExperiment({ location: 'ec41f5_1' }, { autoTrackExposure: !0 }),
        T = S ? E.intl.format(E.t.z5AIsr, {}) : I ? E.intl.string(E.t.zzfBQk) : E.intl.string(E.t.ziPEBg),
        y = S ? E.intl.string(E.t.nKUZur) : void 0,
        [A, N] = i.useState(!1),
        [C, R] = i.useState(!1),
        O = (0, o.Z)(null, () => R(!1)),
        { analyticsLocations: D } = (0, c.ZP)(u.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        L = b.isDM() && void 0 !== b.recipients ? b.recipients[0] : null,
        x = (0, l.ZP)();
    return t
        ? null
        : (0, r.jsxs)('div', {
              ref: O,
              className: v.buttonContainer,
              children: [
                  (0, r.jsx)(f.Z, {
                      shouldShowPopout: C,
                      referralsRemaining: n,
                      channel: b,
                      onClose: () => R(!1),
                      isResending: I
                  }),
                  (0, r.jsx)(a.u, {
                      text: T,
                      shouldShow: !C,
                      'aria-label': null != y ? y : T.toString(),
                      children: (e) =>
                          (0, r.jsx)('div', {
                              onMouseEnter: () => {
                                  !C &&
                                      !A &&
                                      (N(!0),
                                      p.default.track(m.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: D,
                                          step: g.fz.BADGE_TOOLTIP_VIEWED,
                                          other_user_id: Number(L)
                                      }));
                              },
                              onMouseLeave: () => {
                                  N(!1);
                              },
                              children: (0, r.jsx)(h.Z, {
                                  ...e,
                                  innerClassName: v.button,
                                  isActive: C,
                                  'aria-label': null != y ? y : T.toString(),
                                  'aria-haspopup': 'dialog',
                                  onClick: () => {
                                      R((e) => !e),
                                          p.default.track(m.rMx.SHARE_NITRO_FLOW_STEPS, {
                                              location_stack: D,
                                              step: g.fz.BADGE_CLICKED,
                                              other_user_id: Number(L)
                                          });
                                  },
                                  children: (0, r.jsx)(_.Z, {
                                      referralsRemaining: n,
                                      hovered: A,
                                      isResending: I,
                                      shouldShowBirthdayUX: S,
                                      isLightTheme: (0, s.ap)(x)
                                  })
                              })
                          })
                  })
              ]
          });
});
