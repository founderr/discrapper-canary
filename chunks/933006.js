"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("735250");
n("470079");
var i = n("481060"),
  r = n("905661"),
  a = n("940165"),
  o = n("981631"),
  u = n("677804");

function l(e) {
  let {
    transitionState: t,
    onClose: l
  } = e;
  return (0, s.jsxs)(i.ModalRoot, {
    transitionState: t,
    children: [(0, s.jsx)(i.ModalCloseButton, {
      className: u.close,
      onClick: l
    }), (0, s.jsx)("img", {
      alt: "",
      src: n("98165"),
      className: u.image
    }), (0, s.jsxs)("div", {
      className: u.bodyContainer,
      children: [(0, s.jsx)(i.Heading, {
        variant: "heading-xl/bold",
        className: u.heading,
        children: "Hear that? Set the tone with custom notification sounds!"
      }), (0, s.jsx)(i.FormItem, {
        title: "Try it out!",
        className: u.optionsContainerWrapper,
        children: (0, s.jsxs)("div", {
          className: u.optionsContainer,
          children: [(0, s.jsx)(a.default, {
            showGradient: !0
          }), (0, s.jsx)(a.default, {
            showGradient: !1
          }), (0, s.jsx)(a.default, {
            showGradient: !1
          }), (0, s.jsx)(a.default, {
            showGradient: !1
          })]
        })
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/normal",
        className: u.description,
        children: "Access custom notification sounds, HD streaming, personalized profile, and more with Nitro."
      })]
    }), (0, s.jsx)(r.default, {
      onClose: l,
      section: o.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    })]
  })
}