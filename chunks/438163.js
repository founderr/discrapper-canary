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
  _ = n("336428");

function c(e) {
  let {
    statusActivity: t,
    profileType: n,
    animate: a = !0,
    hideTooltip: c = !1
  } = e, [E, I] = r.useState(1), {
    emoji: T
  } = null != t ? t : {}, f = null != T, S = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, h = null != S && S.length > 0, A = f || h, m = r.useCallback(e => {
    var t;
    if (null == e) return;
    let n = e.getBoundingClientRect(),
      i = parseFloat(null !== (t = window.getComputedStyle(e).getPropertyValue("line-height")) && void 0 !== t ? t : "0"),
      r = n.height;
    i > 0 && r > 0 && I(Math.floor(r / i))
  }, []), N = (0, u.useResizeObserver)(m);
  if (r.useLayoutEffect(() => {
      setTimeout(() => {
        m(N.current)
      }, 200)
    }, [N, m]), !A) return null;
  let p = () => f ? (0, i.jsx)(l.ActivityEmoji, {
      className: h ? _.statusEmojiInline : _.statusEmojiOnly,
      emoji: T,
      animate: a,
      hideTooltip: c
    }) : null,
    O = () => h ? (0, i.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: _.statusText,
      children: S
    }) : null,
    R = () => (0, i.jsxs)("div", {
      className: _.contentOverflow,
      ref: N,
      children: [p(), O()]
    }),
    C = n === d.UserProfileTypes.BITE_SIZE ? _.biteSize : _.fullSize,
    g = s()(_.statusBubbleOuter, {
      [_.statusBubbleShape]: E <= 1 && !h && f || E > 1,
      [_.statusBubbleSingleLineWithTextShape]: 1 === E && h,
      [_.biteSize]: n === d.UserProfileTypes.BITE_SIZE,
      [_.fullSize]: n === d.UserProfileTypes.FULL_SIZE
    }),
    L = s()(_.statusBubble, {
      [_.statusBubbleShape]: E <= 1 && !h && f || E > 1,
      [_.statusBubbleSingleLineWithTextShape]: E <= 1 && h,
      [_.statusBubbleEmojiOnlyPadding]: f && !h,
      [_.statusBubbleWithTextPadding]: h,
      [_.statusBubbleWithTextMinWidth]: h,
      [_.statusBubbleCopyStatusCursor]: A
    });
  return (0, i.jsxs)("div", {
    children: [n === d.UserProfileTypes.BITE_SIZE ? (0, i.jsx)("div", {
      className: s()(_.invisibleContainer, C),
      children: (0, i.jsx)("div", {
        className: g,
        children: (0, i.jsx)("span", {
          className: L,
          children: R()
        })
      })
    }) : null, (0, i.jsx)("div", {
      className: s()(_.visibleContainer, C),
      children: (0, i.jsx)("div", {
        className: g,
        children: (0, i.jsx)("span", {
          className: L,
          children: R()
        })
      })
    })]
  })
}