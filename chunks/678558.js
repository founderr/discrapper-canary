"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(40851),
  u = n(906732),
  _ = n(78839),
  c = n(267642),
  d = n(879892),
  E = n(981631),
  I = n(689938),
  T = n(320315);
t.Z = e => {
  let {
    analyticsLocation: t,
    analyticsSourceLocation: n,
    guild: s,
    buttonText: h,
    targetBoostedGuildTier: f,
    onClose: S = () => {},
    closeLayer: A = () => {},
    pauseAnimation: N = !1,
    applicationId: m,
    handleSubscribeModalClose: O,
    withHighlight: R = !1,
    ...p
  } = e, {
    analyticsLocations: g
  } = (0, u.ZP)(), C = (0, l.bp)() === E.IlC.POPOUT, [v, L] = r.useState(!1), D = null != f ? Math.max((0, c.KK)(s, f), 1) : 1, M = (0, c.aq)(), P = async () => {
    L(!0), await (0, d.u)({
      analyticsLocations: g,
      analyticsLocation: t,
      analyticsSourceLocation: n,
      guild: s,
      numberOfBoostsToAdd: D,
      onClose: S,
      closeLayer: A,
      inPopout: C,
      applicationId: m,
      handleSubscribeModalClose: O
    }), L(!1)
  }, y = _.ZP.getPremiumTypeSubscription(), U = (0, i.jsx)("span", {
    children: null != h ? h : I.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
  });
  return ((null == y ? void 0 : y.isPausedOrPausePending) && (U = (0, i.jsxs)("div", {
    className: T.pausedButton,
    children: [(0, i.jsx)(a.LockIcon, {
      size: "xs",
      className: T.lockIcon
    }), " ", U]
  }), p.disabled = !0), null != M) ? (0, i.jsx)(a.Tooltip, {
    text: M,
    "aria-label": !1,
    children: e => (0, i.jsx)(a.ShinyButton, {
      ...e,
      disabled: !0,
      size: a.Button.Sizes.SMALL,
      pauseAnimation: N,
      ...p,
      children: U
    })
  }) : (0, i.jsx)(a.ShinyButton, {
    size: a.Button.Sizes.SMALL,
    ...p,
    className: o()(p.className, {
      [T.buttonHighlighted]: R
    }),
    submitting: v,
    onClick: P,
    pauseAnimation: N,
    children: U
  })
}