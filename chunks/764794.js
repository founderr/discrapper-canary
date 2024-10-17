n(47120);
var r = n(735250),
    i = n(470079),
    a = n(981729),
    s = n(780384),
    o = n(351773),
    l = n(410030),
    u = n(100527),
    c = n(906732),
    d = n(790368),
    _ = n(704440),
    E = n(632583),
    f = n(626135),
    h = n(443603),
    p = n(981631),
    I = n(474936),
    m = n(689938),
    T = n(933283);
t.Z = i.memo(function (e) {
    let { disabled: t, referralsRemaining: n, channel: S, isResending: g } = e,
        { enabled: A } = d.Z.useExperiment({ location: 'ec41f5_1' }, { autoTrackExposure: !0 }),
        N = A ? m.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : g ? m.Z.Messages.SHARE_NITRO_RESEND_TOOLTIP : m.Z.Messages.SHARE_NITRO_TOOLTIP,
        R = A ? m.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : void 0,
        [O, v] = i.useState(!1),
        [C, L] = i.useState(!1),
        D = (0, o.Z)(null, () => L(!1)),
        { analyticsLocations: y } = (0, c.ZP)(u.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        b = S.isDM() && void 0 !== S.recipients ? S.recipients[0] : null,
        M = (0, l.ZP)();
    return t
        ? null
        : (0, r.jsxs)('div', {
              ref: D,
              className: T.buttonContainer,
              children: [
                  (0, r.jsx)(_.Z, {
                      shouldShowPopout: C,
                      referralsRemaining: n,
                      channel: S,
                      onClose: () => L(!1),
                      isResending: g
                  }),
                  (0, r.jsx)(a.u, {
                      text: N,
                      shouldShow: !C,
                      'aria-label': null != R ? R : N.toString(),
                      children: (e) =>
                          (0, r.jsx)('div', {
                              onMouseEnter: () => {
                                  !C &&
                                      !O &&
                                      (v(!0),
                                      f.default.track(p.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: y,
                                          step: I.fz.BADGE_TOOLTIP_VIEWED,
                                          other_user_id: Number(b)
                                      }));
                              },
                              onMouseLeave: () => {
                                  v(!1);
                              },
                              children: (0, r.jsx)(h.Z, {
                                  ...e,
                                  innerClassName: T.button,
                                  isActive: C,
                                  'aria-label': null != R ? R : N.toString(),
                                  'aria-haspopup': 'dialog',
                                  onClick: () => {
                                      L((e) => !e),
                                          f.default.track(p.rMx.SHARE_NITRO_FLOW_STEPS, {
                                              location_stack: y,
                                              step: I.fz.BADGE_CLICKED,
                                              other_user_id: Number(b)
                                          });
                                  },
                                  children: (0, r.jsx)(E.Z, {
                                      referralsRemaining: n,
                                      hovered: O,
                                      isResending: g,
                                      shouldShowBirthdayUX: A,
                                      isLightTheme: (0, s.ap)(M)
                                  })
                              })
                          })
                  })
              ]
          });
});
