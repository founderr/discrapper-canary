var l = n(735250),
  i = n(470079),
  s = n(873546),
  a = n(442837),
  r = n(481060),
  o = n(433355),
  c = n(373791),
  u = n(96413);
t.Z = i.memo(function(e) {
  let {
    message: t,
    subtitle: n,
    countdown: d,
    buttonText: h,
    buttonColor: m,
    buttonSubmitting: p,
    onButtonClick: E,
    imageSrc: g,
    animationSrc: f,
    secondaryButtonText: C,
    onSecondaryButtonClick: _,
    children: I,
    useReducedMotion: x = !1
  } = e, T = (0, a.e7)([o.ZP], () => o.ZP.getState().isMembersOpen);
  if (s.tq && T) return null;
  if (null == t) return (0, l.jsx)(l.Fragment, {
    children: i.Children.only(I)
  });
  let N = null;
  return null != g ? N = (0, l.jsx)("img", {
    alt: "",
    src: g,
    className: u.image
  }) : null != f && (N = (0, l.jsx)(r.LottieAnimation, {
    importData: f,
    shouldAnimate: !x,
    className: u.animation
  })), (0, l.jsxs)("div", {
    className: u.wrapper,
    children: [(0, l.jsxs)("div", {
      className: u.content,
      children: [N, (0, l.jsxs)("div", {
        className: u.text,
        children: [(0, l.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: u.title,
          children: t
        }), null != n && (0, l.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: n
        })]
      })]
    }), (0, l.jsxs)("div", {
      className: u.buttonContainer,
      children: [null != C && (0, l.jsx)(r.Button, {
        className: u.button,
        size: r.Button.Sizes.SMALL,
        onClick: _,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        submitting: p,
        children: C
      }), null != h && (0, l.jsx)(r.Button, {
        className: u.button,
        innerClassName: u.innerButton,
        size: r.Button.Sizes.SMALL,
        onClick: E,
        submitting: p,
        color: null != m ? m : r.Button.Colors.PRIMARY,
        children: h
      })]
    }), null != d && (0, l.jsx)(c.Z, {
      className: u.countdown,
      deadline: d
    })]
  })
})