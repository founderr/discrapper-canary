"use strict";
n.d(t, {
  Z: function() {
    return S
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
  f = n(35801);

function S(e) {
  var t, n;
  let {
    onDismiss: r
  } = e, S = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), A = h.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2, N = (0, _.N)(), m = (0, u.Ng)(), O = (null == N ? void 0 : N.subscription_trial) != null || null != m, p = {
    object: I.qAy.BUTTON_CTA,
    section: I.jXE.SUPER_REACTION_PICKER
  };
  return (0, i.jsxs)("div", {
    className: f.wrapper,
    children: [(0, i.jsx)(a.Clickable, {
      onClick: r,
      className: f.closeButton,
      "aria-label": h.Z.Messages.DISMISS,
      children: (0, i.jsx)(a.CloseSmallIcon, {
        size: "md",
        color: "currentColor"
      })
    }), (0, i.jsxs)("div", {
      className: f.content,
      children: [(0, i.jsx)("div", {
        className: f.contentFill,
        children: (0, i.jsx)(E.Z, {
          className: s()(f.banner, {
            [f.hasTrialOffer]: O
          }),
          src: "https://cdn.discordapp.com/attachments/955557117622886410/1085270553759322153/super-reactions-launch.mp4",
          loop: !0,
          autoPlay: !S,
          muted: !0,
          controls: !0
        })
      }), O ? (0, i.jsx)(c.ZP, {
        type: T.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
        subscriptionTier: null !== (n = null == N ? void 0 : null === (t = N.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : T.Si.TIER_2,
        headingText: h.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
        analyticsLocationObject: p,
        discountOffer: m,
        trialOffer: N,
        children: A
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: f.header,
          children: [(0, i.jsx)(a.NitroWheelIcon, {
            size: "custom",
            color: "currentColor",
            className: f.nitroWheel,
            width: 32,
            height: 32
          }), (0, i.jsx)(a.Heading, {
            className: f.headerText,
            variant: "heading-xl/bold",
            children: h.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
          })]
        }), (0, i.jsx)(a.Text, {
          className: f.subheaderText,
          variant: "text-md/normal",
          children: A
        }), (0, i.jsx)("div", {
          className: f.ctaActionWrapper,
          children: (0, i.jsx)(d.Z, {
            subscriptionTier: T.Si.TIER_2,
            buttonText: h.Z.Messages.UNLOCK_WITH_NITRO
          })
        })]
      })]
    })]
  })
}