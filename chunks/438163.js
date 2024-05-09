"use strict";
n.r(t), n.d(t, {
  UserProfileCustomStatusBubble: function() {
    return c
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("788307"),
  u = n("393903"),
  d = n("228168"),
  _ = n("660762");

function c(e) {
  let {
    statusActivity: t,
    profileType: n,
    animate: a = !0
  } = e, [c, E] = r.useState(1), {
    emoji: I
  } = null != t ? t : {}, T = null != I, f = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, S = null != f && f.length > 0, h = T || S, A = r.useCallback(e => {
    var t;
    if (null == e) return;
    let n = e.getBoundingClientRect(),
      i = parseFloat(null !== (t = window.getComputedStyle(e).getPropertyValue("line-height")) && void 0 !== t ? t : "0"),
      r = n.height;
    i > 0 && r > 0 && E(Math.floor(r / i))
  }, []), m = (0, u.useResizeObserver)(A);
  if (r.useLayoutEffect(() => {
      setTimeout(() => {
        A(m.current)
      }, 200)
    }, [m, A]), !h) return null;
  let N = () => T ? (0, i.jsx)(l.ActivityEmoji, {
      className: S ? _.statusEmojiInline : _.statusEmojiOnly,
      emoji: I,
      animate: a,
      hideTooltip: !1,
      tooltipDelay: d.USER_PROFILE_TOOLTIP_DELAY
    }) : null,
    p = () => S ? (0, i.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: _.statusText,
      children: f
    }) : null,
    O = () => (0, i.jsxs)("div", {
      className: _.contentOverflow,
      ref: m,
      children: [N(), p()]
    }),
    R = n === d.UserProfileTypes.BITE_SIZE ? _.biteSize : _.fullSize,
    C = s()(_.statusBubbleOuter, {
      [_.statusBubbleShape]: c <= 1 && !S && T || c > 1,
      [_.statusBubbleSingleLineWithTextShape]: 1 === c && S,
      [_.biteSize]: n === d.UserProfileTypes.BITE_SIZE,
      [_.fullSize]: n === d.UserProfileTypes.FULL_SIZE
    }),
    g = s()(_.statusBubble, {
      [_.statusBubbleShape]: c <= 1 && !S && T || c > 1,
      [_.statusBubbleSingleLineWithTextShape]: c <= 1 && S,
      [_.statusBubbleEmojiOnlyPadding]: T && !S,
      [_.statusBubbleWithTextPadding]: S,
      [_.statusBubbleWithTextMinWidth]: S,
      [_.statusBubbleCopyStatusCursor]: h
    });
  return (0, i.jsxs)("div", {
    children: [n === d.UserProfileTypes.BITE_SIZE ? (0, i.jsx)("div", {
      className: s()(_.invisibleContainer, R),
      children: (0, i.jsx)("div", {
        className: C,
        children: (0, i.jsx)("span", {
          className: g,
          children: O()
        })
      })
    }) : null, (0, i.jsx)("div", {
      className: s()(_.visibleContainer, R),
      children: (0, i.jsx)("div", {
        className: C,
        children: (0, i.jsx)("span", {
          className: g,
          children: O()
        })
      })
    })]
  })
}