"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("824385"),
  l = n("481060"),
  u = n("40851"),
  d = n("906732"),
  _ = n("78839"),
  c = n("267642"),
  E = n("879892"),
  I = n("981631"),
  T = n("689938"),
  f = n("658088");
t.default = e => {
  let {
    analyticsLocation: t,
    analyticsSourceLocation: n,
    guild: s,
    buttonText: S,
    targetBoostedGuildTier: h,
    onClose: A = () => {},
    closeLayer: m = () => {},
    pauseAnimation: N = !1,
    applicationId: p,
    handleSubscribeModalClose: O,
    withHighlight: C = !1,
    ...R
  } = e, {
    analyticsLocations: g
  } = (0, d.default)(), L = (0, u.useAppContext)() === I.AppContext.POPOUT, [v, D] = r.useState(!1), M = null != h ? Math.max((0, c.getNumberOfAppliedBoostsNeededForTier)(s, h), 1) : 1, y = (0, c.generateBlockGuildSubscriptionPurchasesNode)(), P = async () => {
    D(!0), await (0, E.addAppliedGuildBoosts)({
      analyticsLocations: g,
      analyticsLocation: t,
      analyticsSourceLocation: n,
      guild: s,
      numberOfBoostsToAdd: M,
      onClose: A,
      closeLayer: m,
      inPopout: L,
      applicationId: p,
      handleSubscribeModalClose: O
    }), D(!1)
  }, U = _.default.getPremiumTypeSubscription(), b = (0, i.jsx)("span", {
    children: null != S ? S : T.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
  });
  return ((null == U ? void 0 : U.isPausedOrPausePending) && (b = (0, i.jsxs)("div", {
    className: f.pausedButton,
    children: [(0, i.jsx)(o.LockIcon, {
      className: f.lockIcon,
      width: 16,
      height: 16
    }), " ", b]
  }), R.disabled = !0), null != y) ? (0, i.jsx)(l.Tooltip, {
    text: y,
    "aria-label": !1,
    children: e => (0, i.jsx)(l.ShinyButton, {
      ...e,
      disabled: !0,
      size: l.Button.Sizes.SMALL,
      pauseAnimation: N,
      ...R,
      children: b
    })
  }) : (0, i.jsx)(l.ShinyButton, {
    size: l.Button.Sizes.SMALL,
    ...R,
    className: a()(R.className, {
      [f.buttonHighlighted]: C
    }),
    submitting: v,
    onClick: P,
    pauseAnimation: N,
    children: b
  })
}