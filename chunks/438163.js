"use strict";
n.r(t), n.d(t, {
  UserProfileCustomStatusBubble: function() {
    return E
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("596454"),
  u = n("788307"),
  d = n("393903"),
  _ = n("228168"),
  c = n("336428");

function E(e) {
  let {
    statusActivity: t,
    profileType: n,
    animate: a = !0,
    hideTooltip: E = !1
  } = e, [I, T] = r.useState(1), {
    emoji: f
  } = null != t ? t : {}, S = null != f, h = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, A = null != h && h.length > 0, m = S || A, N = r.useCallback(e => {
    var t;
    if (null == e) return;
    let n = e.getBoundingClientRect(),
      i = parseFloat(null !== (t = window.getComputedStyle(e).getPropertyValue("line-height")) && void 0 !== t ? t : "0"),
      r = n.height;
    i > 0 && r > 0 && T(Math.floor(r / i))
  }, []), p = (0, d.useResizeObserver)(N);
  if (r.useLayoutEffect(() => {
      setTimeout(() => {
        N(p.current)
      }, 200)
    }, [p, N]), !m) return null;
  let O = () => S ? A ? (0, i.jsx)(l.default, {
      className: c.statusEmojiInline,
      emojiId: f.id,
      emojiName: f.name,
      animated: !!f.animated
    }) : (0, i.jsx)(u.ActivityEmoji, {
      className: c.statusEmojiOnly,
      emoji: f,
      animate: a,
      hideTooltip: E
    }) : null,
    C = () => A ? (0, i.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: c.statusText,
      children: h
    }) : null,
    R = () => {
      let e = s()({
        [c.content]: S && !A || I < 2,
        [c.contentOverflow]: I >= 2
      });
      return (0, i.jsxs)("div", {
        className: e,
        ref: p,
        children: [O(), C()]
      })
    },
    g = s()(c.positionStyle, {
      [c.biteSize]: n === _.UserProfileTypes.BITE_SIZE,
      [c.fullSize]: n === _.UserProfileTypes.FULL_SIZE
    }),
    L = s()(c.statusBubbleOuter, {
      [c.statusBubbleShape]: I <= 1 && !A && S || I > 1,
      [c.statusBubbleSingleLineWithTextShape]: 1 === I && A,
      [c.biteSize]: n === _.UserProfileTypes.BITE_SIZE,
      [c.fullSize]: n === _.UserProfileTypes.FULL_SIZE
    }),
    v = s()(c.statusBubble, {
      [c.statusBubbleShape]: I <= 1 && !A && S || I > 1,
      [c.statusBubbleSingleLineWithTextShape]: I <= 1 && A,
      [c.statusBubbleEmojiOnlyPadding]: S && !A,
      [c.statusBubbleWithTextPadding]: A,
      [c.statusBubbleWithTextMinWidth]: A,
      [c.statusBubbleCopyStatusCursor]: m
    });
  if (n === _.UserProfileTypes.FULL_SIZE) return (0, i.jsx)("div", {
    className: g,
    children: (0, i.jsx)("div", {
      className: L,
      children: (0, i.jsx)("span", {
        className: v,
        children: R()
      })
    })
  });
  let D = s()({
    [c.statusBubbleEmojiOnlyBottomMargin]: S && !A,
    [c.statusBubbleMultiLineBottomMargin]: I > 1 && A
  });
  return (0, i.jsx)("div", {
    className: D,
    children: (0, i.jsx)("div", {
      className: g,
      children: (0, i.jsx)("div", {
        className: L,
        children: (0, i.jsx)("span", {
          className: v,
          children: R()
        })
      })
    })
  })
}