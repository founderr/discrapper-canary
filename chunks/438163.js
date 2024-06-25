"use strict";
n.d(t, {
  J: function() {
    return g
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(846519),
  _ = n(955623),
  c = n(481060),
  d = n(788307),
  E = n(727637),
  I = n(607070),
  T = n(100527),
  h = n(906732),
  S = n(594174),
  f = n(751009),
  N = n(785717),
  A = n(825801),
  m = n(228168),
  O = n(689938),
  R = n(739550);
let p = "text-sm/medium";

function g(e) {
  let {
    user: t,
    statusActivity: s,
    profileType: g,
    hasEntered: C = !0,
    animate: v = !0,
    onClose: L
  } = e, {
    modifyStatusEnabled: D
  } = (0, f.K)({
    location: "UserProfileCustomStatusBubble"
  }), {
    analyticsLocations: M
  } = (0, h.ZP)(T.Z.PROFILE_CUSTOM_STATUS), {
    trackUserProfileAction: P
  } = (0, N.KZ)(), y = (0, l.e7)([S.default], () => S.default.getCurrentUser()), U = t.id === (null == y ? void 0 : y.id), b = (0, l.e7)([I.Z], () => I.Z.useReducedMotion), [G, w] = r.useState(!0), [B] = r.useState(() => new u.V7), x = r.useRef(null), k = r.useRef(null), V = r.useRef(null), Z = r.useRef(null), H = r.useRef(null), F = (0, E.Z)(H), Y = (null == s ? void 0 : s.state) != null && "" !== s.state ? s.state : null, j = null != Y && Y.length > 0, {
    emoji: W
  } = null != s ? s : {}, K = null != W, z = K && !j, q = K || j, X = U && !q && D, Q = U && q && D, [J, $] = r.useState(z);
  r.useLayoutEffect(() => {
    if (null == x.current || z) return;
    let e = Math.floor(x.current.getBoundingClientRect().height);
    if ($(z || e <= 18), C) {
      var t, n, i, r;
      k.current = null !== (i = null === (t = x.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, Z.current = null !== (r = null === (n = V.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [C, z]);
  let [ee, et] = (0, a.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    config: {
      clamp: !0,
      immediate: b,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => B.stop(), [B]), !q && !X) return null;
  let en = e => {
      var t, n;
      if (!J) {
        e ? et({
          maxHeight: "".concat(Math.min(null !== (t = k.current) && void 0 !== t ? t : 144, 144), "px"),
          delay: 300
        }) : et({
          maxHeight: "".concat(Math.min(null !== (n = Z.current) && void 0 !== n ? n : 36, 36), "px"),
          delay: 0
        });
        B.start(e ? 300 : 150, () => {
          w(!e)
        })
      }
    },
    ei = () => Q ? (0, i.jsxs)("div", {
      className: R.editIcon,
      children: [(0, i.jsx)("div", {
        className: o()(R.editGradient, z && R.editGradientEmojiOnly)
      }), (0, i.jsx)(c.Clickable, {
        className: o()(R.editClickable, z && R.editClickableEmojiOnly),
        onClick: ea,
        children: (0, i.jsx)(_.v, {
          size: "xs"
        })
      })]
    }) : null,
    er = () => K ? (0, i.jsx)(d.I, {
      className: j ? R.statusEmojiInline : R.statusEmojiOnly,
      emoji: W,
      animate: v,
      hideTooltip: !1,
      tooltipDelay: m.vB
    }) : null,
    es = () => j ? (0, i.jsx)(c.Text, {
      variant: p,
      className: R.statusText,
      children: Y
    }) : null,
    eo = () => (0, i.jsxs)("div", {
      className: R.content,
      children: [(0, i.jsx)(c.CirclePlusIcon, {
        className: R.addStatusIcon,
        colorClass: R.addStatusIconColor
      }), (0, i.jsx)(c.Text, {
        variant: p,
        className: R.addStatusPrompt,
        children: O.Z.Messages.USER_SETTINGS_ADD_STATUS
      })]
    }),
    ea = () => {
      P({
        action: "PRESS_SET_CUSTOM_STATUS"
      }), null == L || L(), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("47484")]).then(n.bind(n, 211065));
        return t => (0, i.jsx)(e, {
          ...t,
          sourceAnalyticsLocations: M
        })
      })
    },
    el = {
      [R.biteSize]: g === m.y0.BITE_SIZE,
      [R.fullSize]: g === m.y0.FULL_SIZE,
      [R.panel]: g === m.y0.PANEL
    },
    eu = o()(R.statusBubbleOuter, el, {
      [R.statusBubbleShape]: !j && K || !J,
      [R.statusBubbleSingleLineWithTextShape]: J && j || X,
      [R.statusBubbleOuterAddStatusCursor]: X
    }),
    e_ = o()(R.statusBubble, {
      [R.statusBubbleShape]: !j && K || !J,
      [R.statusBubbleSingleLineWithTextShape]: J && j || X,
      [R.statusBubbleEmojiOnlyPadding]: z,
      [R.statusBubbleWithTextPadding]: j || X,
      [R.statusBubbleWithTextMinWidth]: j,
      [R.statusBubbleCopyStatusCursor]: q
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(R.invisibleContainer, el),
      children: (0, i.jsx)("div", {
        className: eu,
        children: (0, i.jsxs)("span", {
          className: e_,
          children: [X && eo(), q && (0, i.jsxs)("div", {
            className: o()(R.content, R.clamp, R.placeholderWidth, {
              [R.panel]: g === m.y0.PANEL
            }),
            ref: V,
            children: [er(), es()]
          }), q && (0, i.jsxs)("div", {
            className: o()(R.content, R.unclamp, R.placeholderWidth, R.incorporeal, {
              [R.panel]: g === m.y0.PANEL
            }),
            ref: x,
            children: [er(), es()]
          })]
        })
      })
    }), (0, i.jsxs)("div", {
      className: o()(R.visibleContainer, el),
      ref: H,
      children: [(0, i.jsx)(A.Z, {
        isHovering: F,
        location: "UserProfileCustomStatusBubble",
        className: R.reactReplyBar
      }), (0, i.jsx)(c.Clickable, {
        tabIndex: 0,
        className: eu,
        onFocus: () => en(!0),
        onBlur: () => en(!1),
        onMouseEnter: () => en(!0),
        onMouseLeave: () => en(!1),
        onClick: X ? ea : void 0,
        children: (0, i.jsxs)("span", {
          className: e_,
          children: [X && eo(), q && (() => {
            let e = o()(R.content, {
              [R.clamp]: G,
              [R.unclamp]: !G,
              [R.singleLineAlign]: J
            });
            return (0, i.jsxs)(a.animated.div, {
              style: ee,
              className: e,
              children: [ei(), er(), es()]
            })
          })()]
        })
      })]
    })]
  })
}