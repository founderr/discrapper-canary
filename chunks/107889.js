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
  m = s("747074"),
  I = s("740021"),
  T = s("228168"),
  p = s("981631"),
  N = s("689938"),
  A = s("420867");

function x(e) {
  let {
    user: t,
    guildId: s,
    channelId: x,
    messageId: _,
    roleId: v,
    friendToken: C,
    transitionState: h,
    sourceAnalyticsLocations: U = [],
    onClose: R
  } = e, {
    analyticsLocations: j
  } = (0, u.default)([...U, r.default.SIMPLIFIED_PROFILE_MODAL]), M = (0, S.default)(t.id, s), P = (0, i.useStateFromStores)([c.default], () => c.default.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== p.ActivityTypes.CUSTOM_STATUS
  })), y = l.createRef(), O = (0, o.default)(y);
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: j,
    children: (0, a.jsx)(f.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_MODAL",
      userId: t.id,
      guildId: s,
      channelId: x,
      messageId: _,
      roleId: v,
      children: (0, a.jsxs)(n.ModalRoot, {
        transitionState: h,
        className: A.root,
        hideShadow: !0,
        "aria-label": N.default.Messages.USER_PROFILE_MODAL,
        children: [(0, a.jsxs)("div", {
          ref: y,
          children: [(0, a.jsx)(m.default, {
            user: t,
            profileType: T.UserProfileTypes.MODAL,
            children: (0, a.jsx)(I.default, {
              className: A.header,
              user: t,
              displayProfile: M,
              activity: P,
              friendToken: C,
              onClose: R
            })
          }), (0, a.jsxs)(m.default.Inner, {
            children: [h === n.ModalTransitionState.ENTERED && (0, a.jsx)(E.default, {
              onTooltipClose: R
            }), (0, a.jsx)("div", {
              className: A.body
            })]
          })]
        }), (null == M ? void 0 : M.profileEffectId) != null && (0, a.jsx)(d.default, {
          profileEffectId: null == M ? void 0 : M.profileEffectId,
          bannerAdjustment: 0,
          isHovering: O
        })]
      })
    })
  })
}