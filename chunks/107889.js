"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("481060"),
  r = s("727637"),
  o = s("100527"),
  n = s("906732"),
  u = s("680295"),
  d = s("785717"),
  c = s("318661"),
  f = s("484404"),
  S = s("747074"),
  m = s("293259"),
  E = s("228168"),
  I = s("689938"),
  T = s("420867");

function N(e) {
  let {
    user: t,
    guildId: s,
    channelId: N,
    messageId: x,
    roleId: A,
    friendToken: _,
    transitionState: p,
    sourceAnalyticsLocations: v = [],
    onClose: h
  } = e, {
    analyticsLocations: U
  } = (0, n.default)([...v, o.default.SIMPLIFIED_PROFILE_MODAL]), C = (0, c.default)(t.id, s), j = l.createRef(), y = (0, r.default)(j);
  return (0, a.jsx)(n.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)(d.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: s,
      channelId: N,
      messageId: x,
      roleId: A,
      children: (0, a.jsxs)(i.ModalRoot, {
        transitionState: p,
        className: T.root,
        hideShadow: !0,
        "aria-label": I.default.Messages.USER_PROFILE_MODAL,
        children: [(0, a.jsxs)("div", {
          ref: j,
          children: [(0, a.jsx)(S.default, {
            user: t,
            profileType: E.UserProfileTypes.MODAL,
            children: (0, a.jsx)(m.default, {
              className: T.header,
              displayProfile: C,
              user: t,
              friendToken: _,
              onClose: h,
              isStreaming: !1,
              guildId: s,
              channelId: N,
              hasProfileEffect: (null == C ? void 0 : C.profileEffectId) != null
            })
          }), (0, a.jsxs)(S.default.Inner, {
            children: [p === i.ModalTransitionState.ENTERED && (0, a.jsx)(f.default, {
              onTooltipClose: h
            }), (0, a.jsx)("div", {
              className: T.body
            })]
          })]
        }), (null == C ? void 0 : C.profileEffectId) != null && (0, a.jsx)(u.default, {
          profileEffectId: null == C ? void 0 : C.profileEffectId,
          bannerAdjustment: 0,
          isHovering: y
        })]
      })
    })
  })
}