"use strict";
n.r(t), n.d(t, {
  SafetyWarningBanner: function() {
    return h
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("432710"),
  i = n("77078"),
  r = n("155084"),
  o = n("945330"),
  u = n("217736"),
  d = n("782340"),
  c = n("860657"),
  f = n("145680");

function h(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: h,
    warningType: C,
    header: p,
    description: m,
    onDismiss: E,
    primaryButtonText: g,
    secondaryButtonText: S,
    primaryButtonColor: _,
    secondaryButtonColor: T,
    onPrimaryButtonClick: A,
    onSecondaryButtonClick: M
  } = e;
  a.useEffect(() => {
    r.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, []);
  let I = a.useCallback(() => {
    null == E || E(), (0, u.trackCtaEvent)({
      channelId: t,
      warningId: n,
      senderId: h,
      warningType: C,
      cta: u.CtaEventTypes.USER_BANNER_DISMISS
    })
  }, [E, t, n, h, C]);
  return (0, s.jsxs)("div", {
    className: c.strangerDangerBanner,
    children: [(0, s.jsxs)("div", {
      className: c.shieldAndHeading,
      children: [(0, s.jsx)("img", {
        className: c.safetyShieldIcon,
        src: f,
        alt: ""
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: p
        }), (0, s.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-primary",
          children: m
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: c.buttons,
      children: [(0, s.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: _,
        "aria-label": g,
        onClick: A,
        className: c.ctaButton,
        children: g
      }), (0, s.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: T,
        className: c.ctaButton,
        "aria-label": S,
        onClick: M,
        children: S
      })]
    }), (0, s.jsx)(i.Clickable, {
      className: c.closeButton,
      onClick: I,
      role: "button",
      "aria-label": d.default.Messages.DISMISS,
      children: (0, s.jsx)(o.default, {
        width: 24,
        height: 24,
        className: c.closeButton
      })
    })]
  })
}