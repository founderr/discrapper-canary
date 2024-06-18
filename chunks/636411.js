"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(607070),
  u = n(104494),
  _ = n(639119),
  c = n(165583),
  d = n(197115),
  E = n(810090),
  I = n(981631),
  T = n(474936),
  h = n(689938),
  S = n(35801);

function f(e) {
  var t, n;
  let {
    onDismiss: r
  } = e, f = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), N = h.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, A = (0, _.N)(), m = (0, u.Ng)(), O = (null == A ? void 0 : A.subscription_trial) != null || null != m, R = {
    object: I.qAy.BUTTON_CTA,
    section: I.jXE.SUPER_REACTION_PICKER
  };
  return (0, i.jsxs)("div", {
    className: S.wrapper,
    children: [(0, i.jsx)(a.Clickable, {
      onClick: r,
      className: S.closeButton,
      "aria-label": h.Z.Messages.DISMISS,
      children: (0, i.jsx)(a.CloseSmallIcon, {
        size: "md",
        color: "currentColor"
      })
    }), (0, i.jsxs)("div", {
      className: S.content,
      children: [(0, i.jsx)("div", {
        className: S.contentFill,
        children: (0, i.jsx)(E.Z, {
          className: s()(S.banner, {
            [S.hasTrialOffer]: O
          }),
          src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
          loop: !0,
          autoPlay: !f,
          muted: !0,
          controls: !0
        })
      }), O ? (0, i.jsx)(c.ZP, {
        type: T.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
        subscriptionTier: null !== (n = null == A ? void 0 : null === (t = A.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : T.Si.TIER_2,
        headingText: h.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
        analyticsLocationObject: R,
        discountOffer: m,
        trialOffer: A,
        children: N
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: S.header,
          children: [(0, i.jsx)(a.NitroWheelIcon, {
            size: "custom",
            color: "currentColor",
            className: S.nitroWheel,
            width: 32,
            height: 32
          }), (0, i.jsx)(a.Heading, {
            className: S.headerText,
            variant: "heading-xl/bold",
            children: h.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
          })]
        }), (0, i.jsx)(a.Text, {
          className: S.subheaderText,
          variant: "text-md/normal",
          children: N
        }), (0, i.jsx)("div", {
          className: S.ctaActionWrapper,
          children: (0, i.jsx)(d.Z, {
            subscriptionTier: T.Si.TIER_2,
            buttonText: h.Z.Messages.UNLOCK_WITH_NITRO
          })
        })]
      })]
    })]
  })
}