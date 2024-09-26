var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(981729),
    s = n(780384),
    l = n(351773),
    u = n(410030),
    c = n(100527),
    d = n(906732),
    _ = n(790368),
    E = n(704440),
    f = n(632583),
    h = n(626135),
    p = n(443603),
    m = n(981631),
    I = n(474936),
    T = n(689938),
    g = n(933283);
function S(e) {
    let { disabled: t, referralsRemaining: n, channel: r, isResending: S } = e,
        { enabled: A } = _.Z.useExperiment({ location: 'ec41f5_1' }, { autoTrackExposure: !0 }),
        v = A ? T.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : S ? T.Z.Messages.SHARE_NITRO_RESEND_TOOLTIP : T.Z.Messages.SHARE_NITRO_TOOLTIP,
        N = A ? T.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null,
        [O, R] = a.useState(!1),
        [C, y] = a.useState(!1),
        L = (0, l.Z)(null, () => y(!1)),
        { analyticsLocations: b } = (0, d.ZP)(c.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        D = r.isDM() && void 0 !== r.recipients ? r.recipients[0] : null,
        M = (0, u.ZP)();
    function P() {
        y((e) => !e);
    }
    return t
        ? null
        : (0, i.jsxs)('div', {
              ref: L,
              className: g.buttonContainer,
              children: [
                  (0, i.jsx)(E.Z, {
                      shouldShowPopout: C,
                      referralsRemaining: n,
                      channel: r,
                      onClose: () => y(!1),
                      isResending: S
                  }),
                  (0, i.jsx)(o.u, {
                      text: v,
                      shouldShow: !C,
                      'aria-label': null != N ? N : v,
                      children: (e) =>
                          (0, i.jsx)('div', {
                              onMouseEnter: () => {
                                  !C &&
                                      !O &&
                                      (R(!0),
                                      h.default.track(m.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: b,
                                          step: I.fz.BADGE_TOOLTIP_VIEWED,
                                          other_user_id: Number(D)
                                      }));
                              },
                              onMouseLeave: () => {
                                  R(!1);
                              },
                              children: (0, i.jsx)(p.Z, {
                                  ...e,
                                  innerClassName: g.button,
                                  isActive: C,
                                  'aria-label': null != N ? N : v,
                                  'aria-haspopup': 'dialog',
                                  onClick: () => {
                                      P(),
                                          h.default.track(m.rMx.SHARE_NITRO_FLOW_STEPS, {
                                              location_stack: b,
                                              step: I.fz.BADGE_CLICKED,
                                              other_user_id: Number(D)
                                          });
                                  },
                                  children: (0, i.jsx)(f.Z, {
                                      referralsRemaining: n,
                                      hovered: O,
                                      isResending: S,
                                      shouldShowBirthdayUX: A,
                                      isLightTheme: (0, s.ap)(M)
                                  })
                              })
                          })
                  })
              ]
          });
}
t.Z = a.memo(S);
