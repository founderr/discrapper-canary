"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("394846"),
  i = n("446674"),
  r = n("77078"),
  o = n("982108"),
  u = n("91551"),
  d = n("491605"),
  c = n("139388"),
  f = s.memo(function(e) {
    let {
      message: t,
      subtitle: n,
      countdown: f,
      buttonText: h,
      buttonColor: C,
      buttonSubmitting: p,
      onButtonClick: E,
      imageSrc: m,
      animationSrc: g,
      secondaryButtonText: _,
      onSecondaryButtonClick: S,
      children: T,
      useReducedMotion: A = !1
    } = e, M = (0, i.useStateFromStores)([o.default], () => o.default.getState().isMembersOpen);
    if (l.isMobile && M) return null;
    if (null == t) return (0, a.jsx)(a.Fragment, {
      children: s.Children.only(T)
    });
    let I = null;
    return null != m ? I = (0, a.jsx)("img", {
      alt: "",
      src: m,
      className: c.image
    }) : null != g && (I = (0, a.jsx)(d.default, {
      importData: g,
      shouldAnimate: !A,
      className: c.animation
    })), (0, a.jsxs)("div", {
      className: c.wrapper,
      children: [(0, a.jsxs)("div", {
        className: c.content,
        children: [I, (0, a.jsxs)("div", {
          className: c.text,
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            className: c.title,
            children: t
          }), null != n && (0, a.jsx)(r.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            children: n
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: c.buttonContainer,
        children: [null != _ && (0, a.jsx)(r.Button, {
          className: c.button,
          size: r.Button.Sizes.SMALL,
          onClick: S,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          submitting: p,
          children: _
        }), null != h && (0, a.jsx)(r.Button, {
          className: c.button,
          size: r.Button.Sizes.SMALL,
          onClick: E,
          submitting: p,
          color: null != C ? C : r.Button.Colors.PRIMARY,
          children: h
        })]
      }), null != f && (0, a.jsx)(u.default, {
        className: c.countdown,
        deadline: f
      })]
    })
  })