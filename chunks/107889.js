"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  o = s("727637"),
  r = s("100527"),
  u = s("906732"),
  d = s("680295"),
  c = s("158776"),
  f = s("785717"),
  S = s("318661"),
  E = s("484404"),
  m = s("502762"),
  I = s("806926"),
  T = s("740021"),
  p = s("228168"),
  _ = s("981631"),
  N = s("689938"),
  A = s("420867");

function x(e) {
  let {
    user: t,
    guildId: s,
    channelId: x,
    messageId: v,
    roleId: U,
    friendToken: h,
    initialSection: C,
    autoFocusNote: R,
    transitionState: P,
    sourceAnalyticsLocations: M = [],
    onClose: j
  } = e, {
    analyticsLocations: g
  } = (0, u.default)([...M, r.default.SIMPLIFIED_PROFILE_MODAL]), y = (0, S.default)(t.id, s), O = (0, i.useStateFromStores)([c.default], () => c.default.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== _.ActivityTypes.CUSTOM_STATUS
  })), D = l.createRef(), F = (0, o.default)(D);
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: g,
    children: (0, a.jsx)(f.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: s,
      channelId: x,
      messageId: v,
      roleId: U,
      children: (0, a.jsxs)(n.ModalRoot, {
        transitionState: P,
        className: A.root,
        hideShadow: !0,
        "aria-label": N.default.Messages.USER_PROFILE_MODAL,
        children: [(0, a.jsx)("div", {
          ref: D,
          children: (0, a.jsxs)(m.default, {
            user: t,
            profileType: p.UserProfileTypes.MODAL,
            children: [(0, a.jsx)(T.default, {
              className: A.header,
              user: t,
              displayProfile: y,
              activity: O,
              friendToken: h,
              onClose: j
            }), (0, a.jsxs)(m.default.Inner, {
              children: [P === n.ModalTransitionState.ENTERED && (0, a.jsx)(E.default, {
                onTooltipClose: j
              }), (0, a.jsx)("div", {
                className: A.body,
                children: (0, a.jsx)(I.default, {
                  user: t,
                  displayProfile: y,
                  initialSection: C,
                  autoFocusNote: R,
                  onClose: j
                })
              })]
            })]
          })
        }), (null == y ? void 0 : y.profileEffectId) != null && (0, a.jsx)(d.default, {
          profileEffectId: null == y ? void 0 : y.profileEffectId,
          bannerAdjustment: 0,
          isHovering: F
        })]
      })
    })
  })
}