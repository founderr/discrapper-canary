"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(981729),
  o = n(780384),
  a = n(351773),
  l = n(410030),
  u = n(100527),
  _ = n(906732),
  c = n(790368),
  d = n(704440),
  E = n(147915),
  I = n(632583),
  T = n(626135),
  h = n(981631),
  f = n(474936),
  S = n(689938),
  A = n(573809);
t.Z = r.memo(function(e) {
  let {
    disabled: t,
    referralsRemaining: n,
    channel: N,
    isResending: m
  } = e, {
    enabled: O
  } = c.Z.useExperiment({
    location: "ec41f5_1"
  }, {
    autoTrackExposure: !0
  }), p = O ? S.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : m ? S.Z.Messages.SHARE_NITRO_RESEND_TOOLTIP : S.Z.Messages.SHARE_NITRO_TOOLTIP, R = O ? S.Z.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null, [g, C] = r.useState(!1), [v, L] = r.useState(!1), D = (0, a.Z)(null, () => L(!1)), {
    analyticsLocations: M
  } = (0, _.ZP)(u.Z.REFERRAL_TRIALS_COMPOSER_BUTTON), P = N.isDM() && void 0 !== N.recipients ? N.recipients[0] : null, y = (0, l.ZP)();
  return t ? null : (0, i.jsxs)("div", {
    ref: D,
    className: A.buttonContainer,
    children: [(0, i.jsx)(d.Z, {
      shouldShowPopout: v,
      referralsRemaining: n,
      channel: N,
      onClose: () => L(!1),
      isResending: m
    }), (0, i.jsx)(s.u, {
      text: p,
      shouldShow: !v,
      "aria-label": null != R ? R : p,
      children: e => (0, i.jsx)("div", {
        onMouseEnter: () => {
          !v && !g && (C(!0), T.default.track(h.rMx.SHARE_NITRO_FLOW_STEPS, {
            location_stack: M,
            step: f.fz.BADGE_TOOLTIP_VIEWED,
            other_user_id: Number(P)
          }))
        },
        onMouseLeave: () => {
          C(!1)
        },
        children: (0, i.jsx)(E.Z, {
          ...e,
          innerClassName: A.button,
          isActive: v,
          "aria-label": null != R ? R : p,
          "aria-haspopup": "dialog",
          onClick: () => {
            L(e => !e), T.default.track(h.rMx.SHARE_NITRO_FLOW_STEPS, {
              location_stack: M,
              step: f.fz.BADGE_CLICKED,
              other_user_id: Number(P)
            })
          },
          children: (0, i.jsx)(I.Z, {
            referralsRemaining: n,
            hovered: g,
            isResending: m,
            shouldShowBirthdayUX: O,
            isLightTheme: (0, o.ap)(y)
          })
        })
      })
    })]
  })
})