"use strict";
n.d(t, {
  Z: function() {
    return D
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
  f = n(676035),
  S = n(314897),
  N = n(158776),
  A = n(751009),
  m = n(785717),
  O = n(825801),
  p = n(228168),
  R = n(981631),
  g = n(689938),
  C = n(739550);
let v = "text-sm/medium";

function L(e) {
  let {
    statusActivity: t,
    profileType: s,
    canModifyStatus: f = !1,
    hasEntered: S = !0,
    animate: N = !0,
    onClose: A
  } = e, {
    analyticsLocations: R
  } = (0, h.ZP)(T.Z.PROFILE_CUSTOM_STATUS), {
    trackUserProfileAction: L
  } = (0, m.KZ)(), D = (0, l.e7)([I.Z], () => I.Z.useReducedMotion), [M, P] = r.useState(!0), [y] = r.useState(() => new u.V7), U = r.useRef(null), b = r.useRef(null), G = r.useRef(null), w = r.useRef(null), x = r.useRef(null), B = (0, E.Z)(x), {
    emoji: k,
    state: V
  } = null != t ? t : {}, Z = null != V && "" !== V ? V : null, H = null != Z && Z.length > 0, F = null != k, Y = F && !H, j = F || H, W = f && !j, K = f && j, [z, q] = r.useState(Y);
  r.useLayoutEffect(() => {
    if (null == U.current || Y) return;
    let e = Math.floor(U.current.getBoundingClientRect().height);
    if (q(Y || e <= 18), S) {
      var t, n, i, r;
      b.current = null !== (i = null === (t = U.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, w.current = null !== (r = null === (n = G.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [S, Y]);
  let [{
    maxHeight: X,
    editIconOpacity: Q
  }, J] = (0, a.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    editIconOpacity: 0,
    config: {
      clamp: !0,
      immediate: D,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => y.stop(), [y]), !j && !W) return null;
  let $ = e => {
      var t, n;
      if (e) {
        let e = Math.min(null !== (t = b.current) && void 0 !== t ? t : 144, 144);
        J({
          maxHeight: "".concat(e, "px"),
          editIconOpacity: 1,
          delay: 300
        })
      } else {
        let e = Math.min(null !== (n = w.current) && void 0 !== n ? n : 36, 36);
        J({
          maxHeight: "".concat(e, "px"),
          editIconOpacity: 0,
          delay: 0
        })
      }
      y.start(e ? 300 : 150, () => {
        P(!e)
      })
    },
    ee = () => K ? (0, i.jsxs)(a.animated.div, {
      style: {
        opacity: Q
      },
      className: C.editIcon,
      children: [(0, i.jsx)("div", {
        className: o()(C.editGradient, Y && C.editGradientEmojiOnly)
      }), (0, i.jsx)(c.Clickable, {
        className: o()(C.editClickable, Y && C.editClickableEmojiOnly),
        onClick: er,
        children: (0, i.jsx)(_.v, {
          size: "xs"
        })
      })]
    }) : null,
    et = () => F ? (0, i.jsx)(d.I, {
      className: H ? C.statusEmojiInline : C.statusEmojiOnly,
      emoji: k,
      animate: N,
      hideTooltip: !1,
      tooltipDelay: p.vB
    }) : null,
    en = () => H ? (0, i.jsx)(c.Text, {
      variant: v,
      className: C.statusText,
      children: Z
    }) : null,
    ei = () => (0, i.jsxs)("div", {
      className: C.content,
      children: [(0, i.jsx)(c.CirclePlusIcon, {
        className: C.addStatusIcon,
        colorClass: C.addStatusIconColor
      }), (0, i.jsx)(c.Text, {
        variant: v,
        className: C.addStatusPrompt,
        children: g.Z.Messages.USER_SETTINGS_ADD_STATUS
      })]
    }),
    er = () => {
      L({
        action: "PRESS_SET_CUSTOM_STATUS"
      }), null == A || A(), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("51714").then(n.bind(n, 211065));
        return t => (0, i.jsx)(e, {
          ...t,
          sourceAnalyticsLocations: R
        })
      })
    },
    es = {
      [C.biteSize]: s === p.y0.BITE_SIZE,
      [C.fullSize]: s === p.y0.FULL_SIZE,
      [C.panel]: s === p.y0.PANEL
    },
    eo = o()(C.statusBubbleOuter, es, {
      [C.statusBubbleShape]: !H && F || !z,
      [C.statusBubbleSingleLineWithTextShape]: z && H || W,
      [C.statusBubbleOuterAddStatusCursor]: W
    }),
    ea = o()(C.statusBubble, {
      [C.statusBubbleShape]: !H && F || !z,
      [C.statusBubbleSingleLineWithTextShape]: z && H || W,
      [C.statusBubbleEmojiOnlyPadding]: Y,
      [C.statusBubbleWithTextPadding]: H || W,
      [C.statusBubbleWithTextMinWidth]: H,
      [C.statusBubbleCopyStatusCursor]: j
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(C.invisibleContainer, es),
      children: (0, i.jsx)("div", {
        className: eo,
        children: (0, i.jsxs)("span", {
          className: ea,
          children: [W && ei(), j && (0, i.jsxs)("div", {
            className: o()(C.content, C.clamp, C.placeholderWidth, {
              [C.panel]: s === p.y0.PANEL
            }),
            ref: G,
            children: [et(), en()]
          }), j && (0, i.jsxs)("div", {
            className: o()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, {
              [C.panel]: s === p.y0.PANEL
            }),
            ref: U,
            children: [et(), en()]
          })]
        })
      })
    }), (0, i.jsxs)("div", {
      className: o()(C.visibleContainer, es),
      ref: x,
      children: [(0, i.jsx)(O.Z, {
        isHovering: B,
        location: "UserProfileCustomStatusBubble",
        className: C.reactReplyBar
      }), (0, i.jsx)(c.Clickable, {
        tabIndex: 0,
        className: eo,
        onFocus: () => $(!0),
        onBlur: e => {
          !e.currentTarget.contains(e.relatedTarget) && $(!1)
        },
        onMouseEnter: () => $(!0),
        onMouseLeave: () => $(!1),
        onClick: W ? er : void 0,
        children: (0, i.jsxs)("span", {
          className: ea,
          children: [W && ei(), j && (() => {
            let e = o()(C.content, {
              [C.clamp]: M,
              [C.unclamp]: !M,
              [C.singleLineAlign]: z
            });
            return (0, i.jsxs)(a.animated.div, {
              style: {
                maxHeight: X
              },
              className: e,
              children: [ee(), et(), en()]
            })
          })()]
        })
      })]
    })]
  })
}

function D(e) {
  let {
    user: t,
    ...n
  } = e, r = (0, l.e7)([S.default], () => S.default.getId() === t.id), s = (0, f.a)(), o = (0, l.e7)([N.Z], () => N.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t === R.IIU.CUSTOM_STATUS
  })), {
    modifyStatusEnabled: a
  } = (0, A.K)({
    location: "UserProfileCustomStatusBubble"
  }), u = r && a;
  return (0, i.jsx)(L, {
    canModifyStatus: u,
    statusActivity: u ? s : o,
    ...n
  })
}