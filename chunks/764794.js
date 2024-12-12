var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(981729),
    l = r(780384),
    u = r(351773),
    c = r(410030),
    d = r(100527),
    f = r(906732),
    _ = r(790368),
    h = r(704440),
    p = r(632583),
    m = r(626135),
    g = r(443603),
    E = r(981631),
    v = r(474936),
    I = r(388032),
    T = r(553796);
function b(e) {
    let { disabled: n, referralsRemaining: r, channel: i, isResending: b } = e,
        { enabled: y } = _.Z.useExperiment({ location: 'ec41f5_1' }, { autoTrackExposure: !0 }),
        S = y ? I.intl.format(I.t.z5AIsr, {}) : b ? I.intl.string(I.t.zzfBQk) : I.intl.string(I.t.ziPEBg),
        A = y ? I.intl.string(I.t.nKUZur) : void 0,
        [N, C] = s.useState(!1),
        [R, O] = s.useState(!1),
        D = (0, u.Z)(null, () => O(!1)),
        { analyticsLocations: L } = (0, f.ZP)(d.Z.REFERRAL_TRIALS_COMPOSER_BUTTON),
        x = i.isDM() && void 0 !== i.recipients ? i.recipients[0] : null,
        w = (0, c.ZP)();
    function P() {
        O((e) => !e);
    }
    return n
        ? null
        : (0, a.jsxs)('div', {
              ref: D,
              className: T.buttonContainer,
              children: [
                  (0, a.jsx)(h.Z, {
                      shouldShowPopout: R,
                      referralsRemaining: r,
                      channel: i,
                      onClose: () => O(!1),
                      isResending: b
                  }),
                  (0, a.jsx)(o.u, {
                      text: S,
                      shouldShow: !R,
                      'aria-label': null != A ? A : S.toString(),
                      children: (e) =>
                          (0, a.jsx)('div', {
                              onMouseEnter: () => {
                                  !R &&
                                      !N &&
                                      (C(!0),
                                      m.default.track(E.rMx.SHARE_NITRO_FLOW_STEPS, {
                                          location_stack: L,
                                          step: v.fz.BADGE_TOOLTIP_VIEWED,
                                          other_user_id: Number(x)
                                      }));
                              },
                              onMouseLeave: () => {
                                  C(!1);
                              },
                              children: (0, a.jsx)(g.Z, {
                                  ...e,
                                  innerClassName: T.button,
                                  isActive: R,
                                  'aria-label': null != A ? A : S.toString(),
                                  'aria-haspopup': 'dialog',
                                  onClick: () => {
                                      P(),
                                          m.default.track(E.rMx.SHARE_NITRO_FLOW_STEPS, {
                                              location_stack: L,
                                              step: v.fz.BADGE_CLICKED,
                                              other_user_id: Number(x)
                                          });
                                  },
                                  children: (0, a.jsx)(p.Z, {
                                      referralsRemaining: r,
                                      hovered: N,
                                      isResending: b,
                                      shouldShowBirthdayUX: y,
                                      isLightTheme: (0, l.ap)(w)
                                  })
                              })
                          })
                  })
              ]
          });
}
n.Z = s.memo(b);
