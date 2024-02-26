"use strict";
n.r(t), n.d(t, {
  SafetyWarningBanner: function() {
    return h
  }
});
var a = n("37983"),
  s = n("884691"),
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
    description: E,
    onDismiss: m,
    primaryButtonText: g,
    secondaryButtonText: _,
    primaryButtonColor: S,
    secondaryButtonColor: T,
    onPrimaryButtonClick: A,
    onSecondaryButtonClick: M
  } = e;
  s.useEffect(() => {
    r.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, []);
  let I = s.useCallback(() => {
    null == m || m(), (0, u.trackCtaEvent)({
      channelId: t,
      warningId: n,
      senderId: h,
      warningType: C,
      cta: u.CtaEventTypes.DISMISS
    })
  }, [m, t, n, h, C]);
  return (0, a.jsxs)("div", {
    className: c.strangerDangerBanner,
    children: [(0, a.jsxs)("div", {
      className: c.shieldAndHeading,
      children: [(0, a.jsx)("img", {
        className: c.safetyShieldIcon,
        src: f,
        alt: ""
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: p
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-primary",
          children: E
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: c.buttons,
      children: [(0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: S,
        "aria-label": g,
        onClick: A,
        className: c.ctaButton,
        children: g
      }), (0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        color: T,
        className: c.ctaButton,
        "aria-label": _,
        onClick: M,
        children: _
      })]
    }), (0, a.jsx)(i.Clickable, {
      className: c.closeButton,
      onClick: I,
      role: "button",
      "aria-label": d.default.Messages.DISMISS,
      children: (0, a.jsx)(o.default, {
        width: 24,
        height: 24,
        className: c.closeButton
      })
    })]
  })
}