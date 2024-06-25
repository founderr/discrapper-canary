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
  f = n(594174),
  S = n(751009),
  A = n(785717),
  N = n(825801),
  m = n(228168),
  O = n(689938),
  p = n(739550);
let R = "text-sm/medium";

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
  } = (0, S.K)({
    location: "UserProfileCustomStatusBubble"
  }), {
    analyticsLocations: M
  } = (0, h.ZP)(T.Z.PROFILE_CUSTOM_STATUS), {
    trackUserProfileAction: P
  } = (0, A.KZ)(), y = (0, l.e7)([f.default], () => f.default.getCurrentUser()), U = t.id === (null == y ? void 0 : y.id), b = (0, l.e7)([I.Z], () => I.Z.useReducedMotion), [G, w] = r.useState(!0), [x] = r.useState(() => new u.V7), B = r.useRef(null), k = r.useRef(null), V = r.useRef(null), Z = r.useRef(null), H = r.useRef(null), F = (0, E.Z)(H), Y = (null == s ? void 0 : s.state) != null && "" !== s.state ? s.state : null, j = null != Y && Y.length > 0, {
    emoji: W
  } = null != s ? s : {}, K = null != W, z = K && !j, q = K || j, X = U && !q && D, Q = U && q && D, [J, $] = r.useState(z);
  r.useLayoutEffect(() => {
    if (null == B.current || z) return;
    let e = Math.floor(B.current.getBoundingClientRect().height);
    if ($(z || e <= 18), C) {
      var t, n, i, r;
      k.current = null !== (i = null === (t = B.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, Z.current = null !== (r = null === (n = V.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [C, z]);
  let [{
    maxHeight: ee,
    editIconOpacity: et
  }, en] = (0, a.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    editIconOpacity: 0,
    config: {
      clamp: !0,
      immediate: b,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => x.stop(), [x]), !q && !X) return null;
  let ei = e => {
      var t, n;
      if (e) {
        let e = Math.min(null !== (t = k.current) && void 0 !== t ? t : 144, 144);
        en({
          maxHeight: "".concat(e, "px"),
          editIconOpacity: 1,
          delay: 300
        })
      } else {
        let e = Math.min(null !== (n = Z.current) && void 0 !== n ? n : 36, 36);
        en({
          maxHeight: "".concat(e, "px"),
          editIconOpacity: 0,
          delay: 0
        })
      }
      x.start(e ? 300 : 150, () => {
        w(!e)
      })
    },
    er = () => Q ? (0, i.jsxs)(a.animated.div, {
      style: {
        opacity: et
      },
      className: p.editIcon,
      children: [(0, i.jsx)("div", {
        className: o()(p.editGradient, z && p.editGradientEmojiOnly)
      }), (0, i.jsx)(c.Clickable, {
        className: o()(p.editClickable, z && p.editClickableEmojiOnly),
        onClick: el,
        children: (0, i.jsx)(_.v, {
          size: "xs"
        })
      })]
    }) : null,
    es = () => K ? (0, i.jsx)(d.I, {
      className: j ? p.statusEmojiInline : p.statusEmojiOnly,
      emoji: W,
      animate: v,
      hideTooltip: !1,
      tooltipDelay: m.vB
    }) : null,
    eo = () => j ? (0, i.jsx)(c.Text, {
      variant: R,
      className: p.statusText,
      children: Y
    }) : null,
    ea = () => (0, i.jsxs)("div", {
      className: p.content,
      children: [(0, i.jsx)(c.CirclePlusIcon, {
        className: p.addStatusIcon,
        colorClass: p.addStatusIconColor
      }), (0, i.jsx)(c.Text, {
        variant: R,
        className: p.addStatusPrompt,
        children: O.Z.Messages.USER_SETTINGS_ADD_STATUS
      })]
    }),
    el = () => {
      P({
        action: "PRESS_SET_CUSTOM_STATUS"
      }), null == L || L(), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("51714").then(n.bind(n, 211065));
        return t => (0, i.jsx)(e, {
          ...t,
          sourceAnalyticsLocations: M
        })
      })
    },
    eu = {
      [p.biteSize]: g === m.y0.BITE_SIZE,
      [p.fullSize]: g === m.y0.FULL_SIZE,
      [p.panel]: g === m.y0.PANEL
    },
    e_ = o()(p.statusBubbleOuter, eu, {
      [p.statusBubbleShape]: !j && K || !J,
      [p.statusBubbleSingleLineWithTextShape]: J && j || X,
      [p.statusBubbleOuterAddStatusCursor]: X
    }),
    ec = o()(p.statusBubble, {
      [p.statusBubbleShape]: !j && K || !J,
      [p.statusBubbleSingleLineWithTextShape]: J && j || X,
      [p.statusBubbleEmojiOnlyPadding]: z,
      [p.statusBubbleWithTextPadding]: j || X,
      [p.statusBubbleWithTextMinWidth]: j,
      [p.statusBubbleCopyStatusCursor]: q
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(p.invisibleContainer, eu),
      children: (0, i.jsx)("div", {
        className: e_,
        children: (0, i.jsxs)("span", {
          className: ec,
          children: [X && ea(), q && (0, i.jsxs)("div", {
            className: o()(p.content, p.clamp, p.placeholderWidth, {
              [p.panel]: g === m.y0.PANEL
            }),
            ref: V,
            children: [es(), eo()]
          }), q && (0, i.jsxs)("div", {
            className: o()(p.content, p.unclamp, p.placeholderWidth, p.incorporeal, {
              [p.panel]: g === m.y0.PANEL
            }),
            ref: B,
            children: [es(), eo()]
          })]
        })
      })
    }), (0, i.jsxs)("div", {
      className: o()(p.visibleContainer, eu),
      ref: H,
      children: [(0, i.jsx)(N.Z, {
        isHovering: F,
        location: "UserProfileCustomStatusBubble",
        className: p.reactReplyBar
      }), (0, i.jsx)(c.Clickable, {
        tabIndex: 0,
        className: e_,
        onFocus: () => ei(!0),
        onBlur: e => {
          !e.currentTarget.contains(e.relatedTarget) && ei(!1)
        },
        onMouseEnter: () => ei(!0),
        onMouseLeave: () => ei(!1),
        onClick: X ? el : void 0,
        children: (0, i.jsxs)("span", {
          className: ec,
          children: [X && ea(), q && (() => {
            let e = o()(p.content, {
              [p.clamp]: G,
              [p.unclamp]: !G,
              [p.singleLineAlign]: J
            });
            return (0, i.jsxs)(a.animated.div, {
              style: {
                maxHeight: ee
              },
              className: e,
              children: [er(), es(), eo()]
            })
          })()]
        })
      })]
    })]
  })
}