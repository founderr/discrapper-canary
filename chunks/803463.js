"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  i = s("905661"),
  o = s("302945"),
  r = s("474936"),
  u = s("981631"),
  l = s("689938"),
  c = s("758108");

function d(e) {
  let {
    transitionState: t,
    onClose: d
  } = e;
  return (0, n.jsxs)(a.ModalRoot, {
    transitionState: t,
    children: [(0, n.jsx)("img", {
      className: c.image,
      src: s("279360"),
      alt: ""
    }), (0, n.jsx)(a.ModalCloseButton, {
      className: c.close,
      onClick: d
    }), (0, n.jsxs)("div", {
      className: c.container,
      children: [(0, n.jsx)(a.Heading, {
        className: c.title,
        variant: "heading-xl/bold",
        children: l.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_TITLE
      }), (0, n.jsx)(o.default, {
        forceShow: !0,
        className: c.usersContainer,
        premiumUpsellType: r.PremiumUpsellTypes.STREAM_QUALITY_UPSELL
      }), (0, n.jsx)(a.Text, {
        className: c.description,
        variant: "text-sm/medium",
        children: l.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_BODY
      })]
    }), (0, n.jsx)(i.default, {
      onClose: d,
      section: u.AnalyticsSections.PREMIUM_PERKS_DEMO_UPSELL_MODAL
    })]
  })
}