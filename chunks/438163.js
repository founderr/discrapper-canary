"use strict";
n.d(t, {
  J: function() {
    return T
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(846519),
  _ = n(481060),
  c = n(788307),
  d = n(607070),
  E = n(228168),
  I = n(739550);

function T(e) {
  let {
    statusActivity: t,
    profileType: n,
    hasEntered: s = !0,
    animate: T = !0
  } = e, h = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), [S, f] = r.useState(!0), [N] = r.useState(() => new u.V7), A = r.useRef(null), m = r.useRef(null), O = r.useRef(null), R = r.useRef(null), p = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, g = null != p && p.length > 0, {
    emoji: C
  } = null != t ? t : {}, v = null != C, L = v && !g, D = v || g, [M, P] = r.useState(L);
  r.useLayoutEffect(() => {
    if (null == A.current || L) return;
    let e = Math.floor(A.current.getBoundingClientRect().height);
    if (P(L || e <= 18), s) {
      var t, n, i, r;
      m.current = null !== (i = null === (t = A.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, R.current = null !== (r = null === (n = O.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [s, L]);
  let [y, U] = (0, a.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    config: {
      clamp: !0,
      immediate: h,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => N.stop(), [N]), !D) return null;
  let b = e => {
      var t, n;
      if (!M) {
        e ? U({
          maxHeight: "".concat(Math.min(null !== (t = m.current) && void 0 !== t ? t : 144, 144), "px"),
          delay: 300
        }) : U({
          maxHeight: "".concat(Math.min(null !== (n = R.current) && void 0 !== n ? n : 36, 36), "px"),
          delay: 0
        });
        N.start(e ? 300 : 150, () => {
          f(!e)
        })
      }
    },
    G = () => v ? (0, i.jsx)(c.I, {
      className: g ? I.statusEmojiInline : I.statusEmojiOnly,
      emoji: C,
      animate: T,
      hideTooltip: !1,
      tooltipDelay: E.vB
    }) : null,
    w = () => g ? (0, i.jsx)(_.Text, {
      variant: "text-sm/medium",
      className: I.statusText,
      children: p
    }) : null,
    k = {
      [I.biteSize]: n === E.y0.BITE_SIZE,
      [I.fullSize]: n === E.y0.FULL_SIZE,
      [I.panel]: n === E.y0.PANEL
    },
    B = o()(I.statusBubbleOuter, k, {
      [I.statusBubbleShape]: !g && v || !M,
      [I.statusBubbleSingleLineWithTextShape]: M && g
    }),
    x = o()(I.statusBubble, {
      [I.statusBubbleShape]: !g && v || !M,
      [I.statusBubbleSingleLineWithTextShape]: M && g,
      [I.statusBubbleEmojiOnlyPadding]: L,
      [I.statusBubbleWithTextPadding]: g,
      [I.statusBubbleWithTextMinWidth]: g,
      [I.statusBubbleCopyStatusCursor]: D
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(I.invisibleContainer, k),
      children: (0, i.jsx)("div", {
        className: B,
        children: (0, i.jsxs)("span", {
          className: x,
          children: [(0, i.jsxs)("div", {
            className: o()(I.content, I.clamp, I.placeholderWidth, {
              [I.panel]: n === E.y0.PANEL
            }),
            ref: O,
            children: [G(), w()]
          }), (0, i.jsxs)("div", {
            className: o()(I.content, I.unclamp, I.placeholderWidth, I.incorporeal, {
              [I.panel]: n === E.y0.PANEL
            }),
            ref: A,
            children: [G(), w()]
          })]
        })
      })
    }), (0, i.jsx)("div", {
      className: o()(I.visibleContainer, k),
      children: (0, i.jsx)("div", {
        tabIndex: 0,
        className: B,
        onFocus: () => b(!0),
        onBlur: () => b(!1),
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: (0, i.jsx)("span", {
          className: x,
          children: (() => {
            let e = o()(I.content, {
              [I.clamp]: S,
              [I.unclamp]: !S,
              [I.singleLineAlign]: M
            });
            return (0, i.jsxs)(a.animated.div, {
              style: y,
              className: e,
              children: [G(), w()]
            })
          })()
        })
      })
    })]
  })
}