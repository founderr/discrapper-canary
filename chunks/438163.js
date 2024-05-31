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
  } = e, f = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion), [S, h] = r.useState(!0), [A] = r.useState(() => new u.Timeout), m = r.useRef(null), N = r.useRef(null), p = r.useRef(null), O = r.useRef(null), C = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, R = null != C && C.length > 0, {
    emoji: g
  } = null != t ? t : {}, L = null != g, v = L && !R, D = L || R, [M, y] = r.useState(v);
  r.useLayoutEffect(() => {
    if (null == m.current || v) return;
    let e = Math.floor(m.current.getBoundingClientRect().height);
    if (y(v || e <= 18), s) {
      var t, n, i, r;
      N.current = null !== (i = null === (t = m.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, O.current = null !== (r = null === (n = p.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [s, v]);
  let [P, U] = (0, o.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    config: {
      clamp: !0,
      immediate: f,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => A.stop(), [A]), !D) return null;
  let b = e => {
      var t, n;
      if (!M) {
        e ? U({
          maxHeight: "".concat(Math.min(null !== (t = N.current) && void 0 !== t ? t : 144, 144), "px"),
          delay: 300
        }) : U({
          maxHeight: "".concat(Math.min(null !== (n = O.current) && void 0 !== n ? n : 36, 36), "px"),
          delay: 0
        });
        A.start(e ? 300 : 150, () => {
          h(!e)
        })
      }
    },
    G = () => L ? (0, i.jsx)(_.ActivityEmoji, {
      className: R ? I.statusEmojiInline : I.statusEmojiOnly,
      emoji: g,
      animate: T,
      hideTooltip: !1,
      tooltipDelay: E.USER_PROFILE_TOOLTIP_DELAY
    }) : null,
    w = () => R ? (0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: I.statusText,
      children: C
    }) : null,
    k = {
      [I.biteSize]: n === E.UserProfileTypes.BITE_SIZE,
      [I.fullSize]: n === E.UserProfileTypes.FULL_SIZE,
      [I.panel]: n === E.UserProfileTypes.PANEL
    },
    B = a()(I.statusBubbleOuter, k, {
      [I.statusBubbleShape]: !R && L || !M,
      [I.statusBubbleSingleLineWithTextShape]: M && R
    }),
    V = a()(I.statusBubble, {
      [I.statusBubbleShape]: !R && L || !M,
      [I.statusBubbleSingleLineWithTextShape]: M && R,
      [I.statusBubbleEmojiOnlyPadding]: v,
      [I.statusBubbleWithTextPadding]: R,
      [I.statusBubbleWithTextMinWidth]: R,
      [I.statusBubbleCopyStatusCursor]: D
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
            ref: p,
            children: [G(), w()]
          }), (0, i.jsxs)("div", {
            className: a()(I.content, I.unclamp, I.placeholderWidth, I.incorporeal, k),
            ref: m,
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
              [I.clamp]: S,
              [I.unclamp]: !S,
              [I.singleLineAlign]: M
            });
            return (0, i.jsxs)(o.animated.div, {
              style: P,
              className: e,
              children: [G(), w()]
            })
          })()
        })
      })
    })]
  })
}