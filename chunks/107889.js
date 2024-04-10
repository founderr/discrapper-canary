"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
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
  m = s("747074"),
  I = s("740021"),
  T = s("228168"),
  p = s("981631"),
  N = s("689938"),
  x = s("420867");

function A(e) {
  let {
    user: t,
    guildId: s,
    channelId: A,
    messageId: v,
    roleId: _,
    friendToken: h,
    transitionState: C,
    sourceAnalyticsLocations: U = [],
    onClose: j
  } = e, {
    analyticsLocations: R
  } = (0, u.default)([...U, r.default.SIMPLIFIED_PROFILE_MODAL]), P = (0, S.default)(t.id, s), M = (0, i.useStateFromStores)([c.default], () => c.default.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== p.ActivityTypes.CUSTOM_STATUS
  })), y = l.createRef(), g = (0, o.default)(y);
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: R,
    children: (0, a.jsx)(f.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: s,
      channelId: A,
      messageId: v,
      roleId: _,
      children: (0, a.jsxs)(n.ModalRoot, {
        transitionState: C,
        className: x.root,
        hideShadow: !0,
        "aria-label": N.default.Messages.USER_PROFILE_MODAL,
        children: [(0, a.jsx)("div", {
          ref: y,
          children: (0, a.jsxs)(m.default, {
            user: t,
            profileType: T.UserProfileTypes.MODAL,
            children: [(0, a.jsx)(I.default, {
              className: x.header,
              user: t,
              displayProfile: P,
              activity: M,
              friendToken: h,
              onClose: j
            }), (0, a.jsxs)(m.default.Inner, {
              children: [C === n.ModalTransitionState.ENTERED && (0, a.jsx)(E.default, {
                onTooltipClose: j
              }), (0, a.jsx)("div", {
                className: x.body
              })]
            })]
          })
        }), (null == P ? void 0 : P.profileEffectId) != null && (0, a.jsx)(d.default, {
          profileEffectId: null == P ? void 0 : P.profileEffectId,
          bannerAdjustment: 0,
          isHovering: g
        })]
      })
    })
  })
}