"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  r = s("905661"),
  u = s("940165"),
  i = s("981631"),
  l = s("677804");

function E(e) {
  let {
    transitionState: t,
    onClose: E
  } = e;
  return (0, a.jsxs)(n.ModalRoot, {
    transitionState: t,
    children: [(0, a.jsx)(n.ModalCloseButton, {
      className: l.close,
      onClick: E
    }), (0, a.jsx)("img", {
      alt: "",
      src: s("98165"),
      className: l.image
    }), (0, a.jsxs)("div", {
      className: l.bodyContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-xl/bold",
        className: l.heading,
        children: "Hear that? Set the tone with custom notification sounds!"
      }), (0, a.jsx)(n.FormItem, {
        title: "Try it out!",
        className: l.optionsContainerWrapper,
        children: (0, a.jsxs)("div", {
          className: l.optionsContainer,
          children: [(0, a.jsx)(u.default, {
            showGradient: !0
          }), (0, a.jsx)(u.default, {
            showGradient: !1
          }), (0, a.jsx)(u.default, {
            showGradient: !1
          }), (0, a.jsx)(u.default, {
            showGradient: !1
          })]
        })
      }), (0, a.jsx)(n.Text, {
        variant: "text-xs/normal",
        className: l.description,
        children: "Access custom notification sounds, HD streaming, personalized profile, and more with Nitro."
      })]
    }), (0, a.jsx)(r.default, {
      onClose: E,
      section: i.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    })]
  })
}