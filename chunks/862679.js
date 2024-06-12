"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("873546"),
  i = n("442837"),
  r = n("481060"),
  o = n("433355"),
  u = n("373791"),
  d = n("705130");
t.default = l.memo(function(e) {
  let {
    message: t,
    subtitle: n,
    countdown: c,
    buttonText: f,
    buttonColor: h,
    buttonSubmitting: m,
    onButtonClick: p,
    imageSrc: E,
    animationSrc: g,
    secondaryButtonText: C,
    onSecondaryButtonClick: S,
    children: _,
    useReducedMotion: T = !1
  } = e, I = (0, i.useStateFromStores)([o.default], () => o.default.getState().isMembersOpen);
  if (s.isMobile && I) return null;
  if (null == t) return (0, a.jsx)(a.Fragment, {
    children: l.Children.only(_)
  });
  let A = null;
  return null != E ? A = (0, a.jsx)("img", {
    alt: "",
    src: E,
    className: d.image
  }) : null != g && (A = (0, a.jsx)(r.LottieAnimation, {
    importData: g,
    shouldAnimate: !T,
    className: d.animation
  })), (0, a.jsxs)("div", {
    className: d.wrapper,
    children: [(0, a.jsxs)("div", {
      className: d.content,
      children: [A, (0, a.jsxs)("div", {
        className: d.text,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: d.title,
          children: t
        }), null != n && (0, a.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: n
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: d.buttonContainer,
      children: [null != C && (0, a.jsx)(r.Button, {
        className: d.button,
        size: r.Button.Sizes.SMALL,
        onClick: S,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        submitting: m,
        children: C
      }), null != f && (0, a.jsx)(r.Button, {
        className: d.button,
        innerClassName: d.innerButton,
        size: r.Button.Sizes.SMALL,
        onClick: p,
        submitting: m,
        color: null != h ? h : r.Button.Colors.PRIMARY,
        children: f
      })]
    }), null != c && (0, a.jsx)(u.default, {
      className: d.countdown,
      deadline: c
    })]
  })
})