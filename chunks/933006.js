"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  r = s("481060"),
  u = s("2052"),
  i = s("906732"),
  l = s("626135"),
  E = s("905661"),
  _ = s("940165"),
  o = s("474936"),
  S = s("981631"),
  M = s("677804");

function d(e) {
  let {
    transitionState: t,
    onClose: d
  } = e, c = (0, u.useAnalyticsContext)(), {
    analyticsLocations: I
  } = (0, i.default)(), [T, N] = n.useState(!1);
  return n.useEffect(() => {
    !T && (l.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: o.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: c.location,
      location_stack: I
    }), N(!0))
  }, [c.location, I, T]), (0, a.jsxs)(r.ModalRoot, {
    transitionState: t,
    children: [(0, a.jsx)(r.ModalCloseButton, {
      className: M.close,
      onClick: d
    }), (0, a.jsx)("img", {
      alt: "",
      src: s("98165"),
      className: M.image
    }), (0, a.jsxs)("div", {
      className: M.bodyContainer,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xl/bold",
        className: M.heading,
        children: "Hear that? Set the tone with custom notification sounds!"
      }), (0, a.jsx)(r.FormItem, {
        title: "Try it out!",
        className: M.optionsContainerWrapper,
        children: (0, a.jsxs)("div", {
          className: M.optionsContainer,
          children: [(0, a.jsx)(_.default, {
            showGradient: !0
          }), (0, a.jsx)(_.default, {
            showGradient: !1
          }), (0, a.jsx)(_.default, {
            showGradient: !1
          }), (0, a.jsx)(_.default, {
            showGradient: !1
          })]
        })
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        className: M.description,
        children: "Access custom notification sounds, HD streaming, personalized profile, and more with Nitro."
      })]
    }), (0, a.jsx)(E.default, {
      onClose: d,
      section: S.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    })]
  })
}