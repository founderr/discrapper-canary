"use strict";
n.r(t), n.d(t, {
  UserProfileCustomStatusBubble: function() {
    return T
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("920906"),
  l = n("442837"),
  u = n("846519"),
  d = n("481060"),
  _ = n("788307"),
  c = n("607070"),
  E = n("228168"),
  I = n("660762");

function T(e) {
  let {
    statusActivity: t,
    profileType: n,
    hasEntered: s = !0,
    animate: T = !0
  } = e, f = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion), [S, h] = r.useState(!1), [A, m] = r.useState(!0), [N] = r.useState(() => new u.Timeout), p = r.useRef(null), O = r.useRef(null), C = r.useRef(null), R = r.useRef(null), g = r.useRef(null), {
    emoji: L
  } = null != t ? t : {}, v = null != L, D = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, M = null != D && D.length > 0, y = v || M;
  r.useLayoutEffect(() => {
    if (null == g.current) return;
    let e = Math.floor(g.current.getBoundingClientRect().height);
    if (h(v && !M || e <= 18), s) {
      var t, n, i, r;
      O.current = null !== (i = null === (t = p.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, R.current = null !== (r = null === (n = C.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [s, v, M]);
  let [P, U] = (0, o.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    config: {
      clamp: !0,
      immediate: f,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => N.stop(), [N]), !y) return null;
  let b = e => {
      var t, n;
      e ? U({
        maxHeight: "".concat(Math.min(null !== (t = O.current) && void 0 !== t ? t : 144, 144), "px"),
        delay: 300
      }) : U({
        maxHeight: "".concat(Math.min(null !== (n = R.current) && void 0 !== n ? n : 36, 36), "px"),
        delay: 0
      });
      N.start(e ? 300 : 150, () => {
        m(!e)
      })
    },
    G = () => v ? (0, i.jsx)(_.ActivityEmoji, {
      className: M ? I.statusEmojiInline : I.statusEmojiOnly,
      emoji: L,
      animate: T,
      hideTooltip: !1,
      tooltipDelay: E.USER_PROFILE_TOOLTIP_DELAY
    }) : null,
    w = () => M ? (0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: I.statusText,
      children: D
    }) : null,
    k = n === E.UserProfileTypes.BITE_SIZE ? I.biteSize : I.fullSize,
    B = a()(I.statusBubbleOuter, k, {
      [I.statusBubbleShape]: S && !M && v || !S,
      [I.statusBubbleSingleLineWithTextShape]: S && M
    }),
    V = a()(I.statusBubble, {
      [I.statusBubbleShape]: S && !M && v || !S,
      [I.statusBubbleSingleLineWithTextShape]: S && M,
      [I.statusBubbleEmojiOnlyPadding]: v && !M,
      [I.statusBubbleWithTextPadding]: M,
      [I.statusBubbleWithTextMinWidth]: M,
      [I.statusBubbleCopyStatusCursor]: y
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: a()(I.invisibleContainer, k),
      children: (0, i.jsx)("div", {
        className: B,
        children: (0, i.jsxs)("span", {
          className: V,
          children: [(0, i.jsxs)("div", {
            className: a()(I.content, I.clamp, I.placeholderWidth, k),
            ref: C,
            children: [G(), w()]
          }), (0, i.jsxs)("div", {
            className: a()(I.content, I.unclamp, I.placeholderWidth, I.incorporeal, k),
            ref: p,
            children: [G(), w()]
          })]
        })
      })
    }), (0, i.jsx)("div", {
      className: a()(I.visibleContainer, k),
      children: (0, i.jsx)("div", {
        tabIndex: 0,
        className: B,
        onFocus: () => b(!0),
        onBlur: () => b(!1),
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: (0, i.jsx)("span", {
          className: V,
          children: (() => {
            let e = a()(I.content, {
              [I.clamp]: A,
              [I.unclamp]: !A,
              [I.singleLineAlign]: S
            });
            return (0, i.jsxs)(o.animated.div, {
              style: P,
              className: e,
              ref: g,
              children: [G(), w()]
            })
          })()
        })
      })
    })]
  })
}