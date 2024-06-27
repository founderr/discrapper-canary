"use strict";
var i = n(735250),
  r = n(470079),
  s = n(996146),
  o = n(481060),
  a = n(100527),
  l = n(906732),
  u = n(963249),
  _ = n(147915),
  c = n(51144),
  d = n(981631),
  E = n(474936),
  I = n(689938),
  T = n(573809);
t.Z = r.memo(function(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    analyticsLocations: r
  } = (0, l.ZP)(a.Z.GIFT_BUTTON), h = (0, c.Ft)(n), {
    Component: f,
    events: S,
    play: A
  } = (0, s.$)();
  if (t) return null;
  let N = () => (0, u.Z)({
    isGift: !0,
    giftRecipient: null === h ? void 0 : h,
    initialPlanId: null,
    subscriptionTier: E.Si.TIER_2,
    analyticsLocations: r,
    analyticsObject: {
      page: n.isPrivate() ? d.ZY5.DM_CHANNEL : d.ZY5.GUILD_CHANNEL,
      section: d.jXE.CHANNEL_TEXT_AREA,
      object: d.qAy.BUTTON_ICON,
      objectType: d.Qqv.GIFT
    }
  });
  return (0, i.jsx)(o.Tooltip, {
    text: I.Z.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
    children: e => (0, i.jsx)(_.Z, {
      ...e,
      innerClassName: T.button,
      isActive: !1,
      "aria-label": I.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
      "aria-haspopup": "dialog",
      onClick: () => {
        N(), A()
      },
      ...S,
      children: (0, i.jsx)(f, {
        color: "currentColor"
      })
    })
  })
})