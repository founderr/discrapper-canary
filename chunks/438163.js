"use strict";
n.r(t), n.d(t, {
  UserProfileCustomStatusBubble: function() {
    return f
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
  c = n("393903"),
  E = n("607070"),
  I = n("228168"),
  T = n("660762");

function f(e) {
  let {
    statusActivity: t,
    profileType: n,
    transitionState: s,
    animate: f = !0
  } = e, S = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion), [h, A] = r.useState(1), [m, N] = r.useState(!0), [p] = r.useState(() => new u.Timeout), O = r.useRef(null), C = r.useRef(null), R = r.useRef(null), g = r.useRef(null), {
    emoji: L
  } = null != t ? t : {}, v = null != L, D = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, M = null != D && D.length > 0, y = v || M, P = r.useCallback(() => {
    var e;
    if (null == U.current || n === I.UserProfileTypes.FULL_SIZE) return;
    let t = U.current.getBoundingClientRect(),
      i = parseFloat(null !== (e = window.getComputedStyle(U.current).getPropertyValue("line-height")) && void 0 !== e ? e : "0"),
      r = t.height;
    i > 0 && r > 0 && A(Math.floor(r / i))
  }, [n]), U = (0, c.useResizeObserver)(P);
  r.useLayoutEffect(() => {
    (n !== I.UserProfileTypes.FULL_SIZE || s === d.ModalTransitionState.ENTERED) && (! function() {
      if (null != O.current && null == C.current) {
        let e = O.current.getBoundingClientRect();
        C.current = e.height
      }
      if (null != R.current && null == g.current) {
        let e = R.current.getBoundingClientRect();
        g.current = e.height
      }
    }(), P())
  }, [U, P, p, n, s]);
  let [b, G] = (0, o.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    config: {
      clamp: !0,
      immediate: S,
      duration: 150
    }
  })), w = e => {
    var t, n;
    e ? G({
      maxHeight: "".concat(Math.min(null !== (t = C.current) && void 0 !== t ? t : 144, 144), "px"),
      delay: 300
    }) : G({
      maxHeight: "".concat(Math.min(null !== (n = g.current) && void 0 !== n ? n : 36, 36), "px"),
      delay: 0
    });
    p.start(e ? 300 : 150, () => {
      N(!e)
    })
  };
  if (r.useEffect(() => () => p.stop(), [p]), !y) return null;
  let k = () => v ? (0, i.jsx)(_.ActivityEmoji, {
      className: M ? T.statusEmojiInline : T.statusEmojiOnly,
      emoji: L,
      animate: f,
      hideTooltip: !1,
      tooltipDelay: I.USER_PROFILE_TOOLTIP_DELAY
    }) : null,
    B = () => M ? (0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: T.statusText,
      children: D
    }) : null,
    V = n === I.UserProfileTypes.BITE_SIZE ? T.biteSize : T.fullSize,
    x = a()(T.statusBubbleOuter, {
      [T.statusBubbleShape]: h <= 1 && !M && v || h > 1,
      [T.statusBubbleSingleLineWithTextShape]: 1 === h && M,
      [T.biteSize]: n === I.UserProfileTypes.BITE_SIZE,
      [T.fullSize]: n === I.UserProfileTypes.FULL_SIZE
    }),
    F = a()(T.statusBubble, {
      [T.statusBubbleShape]: h <= 1 && !M && v || h > 1,
      [T.statusBubbleSingleLineWithTextShape]: h <= 1 && M,
      [T.statusBubbleEmojiOnlyPadding]: v && !M,
      [T.statusBubbleWithTextPadding]: M,
      [T.statusBubbleWithTextMinWidth]: M,
      [T.statusBubbleCopyStatusCursor]: y
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: a()(T.invisibleContainer, V),
      children: (0, i.jsx)("div", {
        className: x,
        children: (0, i.jsxs)("span", {
          className: F,
          children: [(() => {
            let e = a()(T.content, T.clamp, T.placeholderWidth, {
              [T.biteSize]: n === I.UserProfileTypes.BITE_SIZE,
              [T.fullSize]: n === I.UserProfileTypes.FULL_SIZE
            });
            return (0, i.jsxs)("div", {
              className: e,
              ref: R,
              children: [k(), B()]
            })
          })(), (() => {
            let e = a()(T.content, T.unclamp, T.placeholderWidth, T.incorporeal, {
              [T.biteSize]: n === I.UserProfileTypes.BITE_SIZE,
              [T.fullSize]: n === I.UserProfileTypes.FULL_SIZE
            });
            return (0, i.jsxs)("div", {
              className: e,
              ref: O,
              children: [k(), B()]
            })
          })()]
        })
      })
    }), (0, i.jsx)("div", {
      className: a()(T.visibleContainer, V),
      children: (0, i.jsx)("div", {
        tabIndex: 0,
        className: x,
        onFocus: () => w(!0),
        onBlur: () => w(!1),
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: (0, i.jsx)("span", {
          className: F,
          children: (() => {
            let e = a()(T.content, {
              [T.clamp]: m,
              [T.unclamp]: !m
            });
            return (0, i.jsx)(o.animated.div, {
              style: b,
              className: a()(T.content, e),
              children: (0, i.jsxs)("div", {
                ref: U,
                children: [k(), B()]
              })
            })
          })()
        })
      })
    })]
  })
}