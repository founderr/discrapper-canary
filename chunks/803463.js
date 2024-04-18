"use strict";
t.r(s), t.d(s, {
  default: function() {
    return d
  }
});
var n = t("735250");
t("470079");
var a = t("481060"),
  i = t("905661"),
  o = t("302945"),
  l = t("474936"),
  r = t("981631"),
  u = t("689938"),
  c = t("758108");

function d(e) {
  let {
    transitionState: s,
    onClose: d
  } = e;
  return (0, n.jsxs)(a.ModalRoot, {
    transitionState: s,
    children: [(0, n.jsx)("img", {
      className: c.image,
      src: t("279360"),
      alt: ""
    }), (0, n.jsx)(a.ModalCloseButton, {
      className: c.close,
      onClick: d
    }), (0, n.jsxs)("div", {
      className: c.container,
      children: [(0, n.jsx)(a.Heading, {
        className: c.title,
        variant: "heading-xl/bold",
        children: u.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_TITLE
      }), (0, n.jsx)(o.default, {
        forceShow: !0,
        className: c.usersContainer,
        premiumUpsellType: l.PremiumUpsellTypes.STREAM_QUALITY_UPSELL
      }), (0, n.jsx)(a.Text, {
        className: c.description,
        variant: "text-sm/medium",
        children: u.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_BODY
      })]
    }), (0, n.jsx)(i.default, {
      onClose: d,
      section: r.AnalyticsSections.PREMIUM_PERKS_DEMO_UPSELL_MODAL
    })]
  })
}