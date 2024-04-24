"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("718017"),
  r = a("35148"),
  o = a("266685"),
  u = a("602365");
t.default = function(e) {
  let {
    expandedContentHeight: t,
    expandedContentRef: a,
    expansionSpring: s,
    isExpanded: d,
    isExpansionAnimationComplete: c,
    isQuestBarVisible: f,
    isQuestAccepted: E,
    isQuestCompleted: h,
    isVisibilityAnimationAtRest: _,
    onCtxMenuOpened: C,
    onCtxMenuClosed: m,
    onCtxMenuSelection: S,
    onFocus: I,
    onBlur: p,
    onMouseEnter: T,
    onMouseLeave: g,
    quest: A,
    useReducedMotion: N,
    visibilitySpring: v
  } = e;
  return (0, n.jsx)(i.animated.div, {
    "aria-hidden": !f,
    className: l()(u.wrapper, {
      [u.wrapperInvisible]: !f,
      [u.wrapperVisible]: f && _
    }),
    style: {
      color: A.config.colors.secondary,
      height: v.to({
        range: [0, 1],
        output: [0, h && d ? t : 40]
      })
    },
    children: (0, n.jsxs)(i.animated.div, {
      onMouseLeave: g,
      onMouseEnter: T,
      onFocus: () => I(),
      onBlur: p,
      className: l()(u.contentWrapper, {
        [u.contentWrapperExpanded]: d,
        [u.contentWrapperAccepted]: E
      }),
      style: {
        backgroundImage: E ? "linear-gradient(90deg, ".concat(A.config.colors.primary, ", ").concat(A.config.colors.secondary, ")") : void 0,
        height: s.to({
          range: [0, 1],
          output: [40, E ? t : 240]
        }),
        transform: v.to({
          range: [0, 1],
          output: [100, 0]
        }).to(e => "translateY(".concat(e, "%)"))
      },
      children: [(0, n.jsx)(r.default, {
        className: u.content,
        expansionSpring: s,
        isExpanded: d,
        isExpansionAnimationComplete: c,
        quest: A,
        useReducedMotion: N
      }), (0, n.jsx)(o.default, {
        className: u.content,
        onCtxMenuOpen: C,
        onCtxMenuClose: m,
        onCtxMenuSelect: S,
        isExpanded: d,
        isExpansionAnimationComplete: c,
        quest: A,
        useReducedMotion: N,
        ref: a
      })]
    })
  })
}