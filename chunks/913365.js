"use strict";
n.r(t), n.d(t, {
  Avatar: function() {
    return N
  },
  AnimatedAvatar: function() {
    return O
  }
}), n("70102"), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("907002"),
  l = n("227645"),
  u = n("709749"),
  c = n("391010"),
  d = n("414055"),
  p = n("587974"),
  h = n("158998"),
  f = n("52904"),
  E = n("49111"),
  _ = n("573135"),
  m = n("782340"),
  S = n("579910");
let g = {
  tension: 1200,
  friction: 70
};

function T(e) {
  let {
    size: t,
    isMobile: n,
    isTyping: r,
    ...s
  } = e, a = (0, f.getAvatarSpecs)(t), o = a.status * (n && !r ? f.MOBILE_HEIGHT_RATIO : 1), l = a.status * (r ? f.TYPING_WIDTH_RATIO : 1), u = r ? (a.status * f.TYPING_WIDTH_RATIO - a.status) / 2 : 0, c = a.size - a.status - u - a.offset, d = a.size - o - a.offset;
  return (0, i.jsx)("rect", {
    x: c,
    y: d,
    width: l,
    height: o,
    fill: "transparent",
    "aria-hidden": !0,
    ...s
  })
}

function I(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = (0, c.getStatusSize)(e.status, t, n, i),
    s = (i ? e.size - (r.width / 2 + e.status / 2) : e.size - r.width) - e.offset;
  return {
    ...r,
    x: s,
    y: e.size - r.height - e.offset
  }
}

function v(e, t, n, r) {
  let s = I(n, r, t, !1),
    a = (0, c.getStatusBackdropOpacity)(r, e);
  if (!t) {
    let t = s.height / 2 + n.stroke,
      r = s.x + n.status / 2;
    return (0, i.jsx)("circle", {
      style: {
        opacity: a
      },
      fill: e,
      r: t,
      cx: r,
      cy: r
    })
  }
  let o = s.height + 2 * n.stroke,
    l = s.width + 2 * n.stroke,
    u = s.x - n.stroke,
    d = s.y - n.stroke;
  return (0, i.jsx)("rect", {
    fill: e,
    height: o,
    width: l,
    style: {
      opacity: a
    },
    x: u,
    y: d,
    rx: n.stroke
  })
}

function C(e) {
  let {
    status: t,
    isMobile: n,
    isTyping: i,
    size: r
  } = e, s = n && !i && t === E.StatusTypes.ONLINE, a = (0, f.getAvatarSpecs)(r);
  return {
    ... function(e, t, n) {
      let {
        size: i,
        status: r,
        stroke: s,
        offset: a
      } = e, o = n ? r * f.TYPING_WIDTH_RATIO : r, l = t ? r * f.MOBILE_HEIGHT_RATIO : r;
      return {
        avatarCutoutX: i - o + (o - r) / 2 - s - a,
        avatarCutoutY: i - l - s - a,
        avatarCutoutWidth: o + 2 * s,
        avatarCutoutHeight: l + 2 * s,
        avatarCutoutRadius: t ? (l + 2 * s) * f.CUTOUT_BORDER_RADIUS : (r + 2 * s) / 2
      }
    }(a, s, i),
    ...(0, c.getStatusValues)({
      status: t,
      size: a.status,
      isMobile: s,
      isTyping: i,
      topOffset: 2,
      leftOffset: 6
    })
  }
}

function A(e) {
  let {
    children: t,
    size: n,
    onClick: r,
    onMouseDown: s,
    onKeyDown: o,
    onContextMenu: u,
    onMouseEnter: c,
    onMouseLeave: d,
    className: E,
    tabIndex: g,
    ariaLabel: T,
    ariaHidden: I,
    status: v,
    isMobile: C = !1,
    isTyping: A = !1,
    avatarDecoration: R,
    typingOffset: N,
    specs: y
  } = e, O = {
    width: (0, f.getAvatarSize)(n),
    height: (0, f.getAvatarSize)(n)
  }, D = null == T || I ? void 0 : function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t ? m.default.Messages.LABEL_WITH_ONLINE_STATUS.format({
      label: e,
      status: (0, h.humanizeStatus)(t, n)
    }) : e
  }(T, v, C), b = y.size * _.DECORATION_TO_AVATAR_RATIO, P = function(e, t, n, i) {
    if (null == e) return null;
    if (i) switch (t) {
      case f.AvatarSizes.SIZE_16:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_16;
      case f.AvatarSizes.SIZE_20:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_20;
      case f.AvatarSizes.SIZE_24:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_24;
      case f.AvatarSizes.SIZE_32:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_32;
      case f.AvatarSizes.SIZE_40:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_40;
      case f.AvatarSizes.SIZE_56:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_56;
      case f.AvatarSizes.SIZE_80:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_80;
      case f.AvatarSizes.SIZE_120:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_120
    }
    if (n) switch (t) {
      case f.AvatarSizes.SIZE_16:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_16;
      case f.AvatarSizes.SIZE_20:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_20;
      case f.AvatarSizes.SIZE_24:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_24;
      case f.AvatarSizes.SIZE_32:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_32;
      case f.AvatarSizes.SIZE_40:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_40;
      case f.AvatarSizes.SIZE_56:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_56;
      case f.AvatarSizes.SIZE_80:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_80;
      case f.AvatarSizes.SIZE_120:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_120
    }
    switch (t) {
      case f.AvatarSizes.SIZE_16:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_16;
      case f.AvatarSizes.SIZE_20:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_20;
      case f.AvatarSizes.SIZE_24:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_24;
      case f.AvatarSizes.SIZE_32:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_32;
      case f.AvatarSizes.SIZE_40:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_40;
      case f.AvatarSizes.SIZE_56:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_56;
      case f.AvatarSizes.SIZE_80:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_80;
      case f.AvatarSizes.SIZE_120:
        return p.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_120
    }
    return null
  }(v, n, C, A), L = null != R && (0, i.jsx)("svg", {
    width: b + N,
    height: b,
    viewBox: "0 0 ".concat(b + N, " ").concat(b),
    className: S.avatarDecoration,
    "aria-hidden": !0,
    children: (0, i.jsx)("foreignObject", {
      x: 0,
      y: 0,
      width: b,
      height: b,
      mask: null != P ? "url(#".concat(P, ")") : void 0,
      children: (0, i.jsx)("div", {
        className: S.avatarStack,
        children: (0, i.jsx)("img", {
          className: S.avatar,
          src: R,
          alt: " ",
          "aria-hidden": !0
        })
      })
    })
  });
  return null != r || null != s ? (0, i.jsxs)(l.Clickable, {
    className: a(S.wrapper, S.pointer, E),
    style: O,
    onClick: r,
    tabIndex: g,
    onContextMenu: u,
    onMouseDown: s,
    onKeyDown: o,
    onMouseEnter: null != c ? c : void 0,
    onMouseLeave: null != d ? d : void 0,
    "aria-label": D,
    "aria-hidden": I,
    children: [t, L]
  }) : (0, i.jsxs)("div", {
    className: a(S.wrapper, E),
    style: O,
    onContextMenu: null != u ? u : void 0,
    onMouseEnter: null != c ? c : void 0,
    onMouseLeave: null != d ? d : void 0,
    role: "img",
    "aria-label": D,
    "aria-hidden": I,
    children: [t, L]
  })
}

function R(e) {
  let {
    src: t,
    isSpeaking: n
  } = e;
  return (0, i.jsxs)("div", {
    className: S.avatarStack,
    children: [(0, i.jsx)("img", {
      src: null != t ? t : void 0,
      alt: " ",
      className: S.avatar,
      "aria-hidden": !0
    }), n && (0, i.jsx)("div", {
      className: S.avatarSpeaking
    })]
  })
}

function N(e) {
  let {
    src: t,
    status: n,
    size: r,
    statusColor: s,
    isMobile: o = !1,
    isTyping: l = !1,
    typingIndicatorRef: _,
    isSpeaking: m = !1,
    statusTooltip: g = !1,
    statusBackdropColor: T,
    "aria-hidden": C = !1,
    "aria-label": N
  } = e, y = n !== E.StatusTypes.UNKNOWN ? n : null, O = (0, f.getAvatarSpecs)(r), D = null != y ? Math.ceil((O.status * f.TYPING_WIDTH_RATIO - O.status) / 2) : 0, b = O.size + D, P = (0, c.useStatusFillColor)(y, s);
  return (0, i.jsx)(A, {
    ...e,
    ariaLabel: N,
    ariaHidden: C,
    status: y,
    specs: O,
    typingOffset: D,
    children: (0, i.jsxs)("svg", {
      width: b,
      height: b,
      viewBox: "0 0 ".concat(b, " ").concat(b),
      className: a(S.mask, S.svg),
      "aria-hidden": !0,
      children: [(0, i.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: O.size,
        height: O.size,
        mask: "url(#".concat(function(e, t, n, i) {
          if (null == e) return p.MaskIDs.AVATAR_DEFAULT;
          if (i) switch (t) {
            case f.AvatarSizes.SIZE_16:
              return p.MaskIDs.AVATAR_STATUS_TYPING_16;
            case f.AvatarSizes.SIZE_20:
              return p.MaskIDs.AVATAR_STATUS_TYPING_20;
            case f.AvatarSizes.SIZE_24:
              return p.MaskIDs.AVATAR_STATUS_TYPING_24;
            case f.AvatarSizes.SIZE_32:
              return p.MaskIDs.AVATAR_STATUS_TYPING_32;
            case f.AvatarSizes.SIZE_40:
              return p.MaskIDs.AVATAR_STATUS_TYPING_40;
            case f.AvatarSizes.SIZE_48:
              return p.MaskIDs.AVATAR_STATUS_TYPING_48;
            case f.AvatarSizes.SIZE_56:
              return p.MaskIDs.AVATAR_STATUS_TYPING_56;
            case f.AvatarSizes.SIZE_80:
              return p.MaskIDs.AVATAR_STATUS_TYPING_80;
            case f.AvatarSizes.SIZE_120:
              return p.MaskIDs.AVATAR_STATUS_TYPING_120
          }
          if (e === E.StatusTypes.ONLINE && n) switch (t) {
            case f.AvatarSizes.SIZE_16:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_16;
            case f.AvatarSizes.SIZE_20:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_20;
            case f.AvatarSizes.SIZE_24:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_24;
            case f.AvatarSizes.SIZE_32:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_32;
            case f.AvatarSizes.SIZE_40:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_40;
            case f.AvatarSizes.SIZE_48:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_48;
            case f.AvatarSizes.SIZE_56:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_56;
            case f.AvatarSizes.SIZE_80:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_80;
            case f.AvatarSizes.SIZE_120:
              return p.MaskIDs.AVATAR_STATUS_MOBILE_120
          }
          switch (t) {
            case f.AvatarSizes.SIZE_16:
              return p.MaskIDs.AVATAR_STATUS_ROUND_16;
            case f.AvatarSizes.SIZE_20:
              return p.MaskIDs.AVATAR_STATUS_ROUND_20;
            case f.AvatarSizes.SIZE_24:
              return p.MaskIDs.AVATAR_STATUS_ROUND_24;
            case f.AvatarSizes.SIZE_32:
              return p.MaskIDs.AVATAR_STATUS_ROUND_32;
            case f.AvatarSizes.SIZE_40:
              return p.MaskIDs.AVATAR_STATUS_ROUND_40;
            case f.AvatarSizes.SIZE_48:
              return p.MaskIDs.AVATAR_STATUS_ROUND_48;
            case f.AvatarSizes.SIZE_56:
              return p.MaskIDs.AVATAR_STATUS_ROUND_56;
            case f.AvatarSizes.SIZE_80:
              return p.MaskIDs.AVATAR_STATUS_ROUND_80;
            case f.AvatarSizes.SIZE_120:
              return p.MaskIDs.AVATAR_STATUS_ROUND_120
          }
          throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
        }(y, r, o, l), ")"),
        children: (0, i.jsx)(R, {
          src: t,
          isSpeaking: m
        })
      }), null != y ? (0, i.jsx)(d.Tooltip, {
        text: g ? (0, h.humanizeStatus)(y) : null,
        "aria-label": !1,
        position: "top",
        spacing: 5 + 1.5 * O.stroke,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [null != T && v(T, o, O, y), (0, i.jsx)("rect", {
            ...e,
            ...I(O, y, o, l),
            fill: P,
            mask: "url(#".concat((0, c.getStatusMask)(y, o, l), ")"),
            className: S.pointerEvents
          }), l ? (0, i.jsx)(u.Dots, {
            ref: _,
            dotRadius: O.status / 4,
            x: O.size - 1.375 * O.status - O.offset,
            y: O.size - O.status / 1.333 - O.offset
          }) : null]
        })
      }) : null]
    })
  })
}

function y(e) {
  let {
    fromIsMobile: t = !0,
    fromStatus: n,
    fromColor: s,
    isMobile: l = !1,
    isTyping: p = !1,
    typingIndicatorRef: E,
    isSpeaking: _ = !1,
    size: m,
    src: I,
    status: N,
    statusColor: y,
    statusTooltip: O = !1,
    statusBackdropColor: D,
    "aria-hidden": b = !1,
    "aria-label": P
  } = e, L = (0, c.useStatusFillColor)(N, y), M = r.useId(), U = r.useId(), [w] = r.useState(() => ({
    fill: s,
    ...C({
      size: m,
      status: n,
      isMobile: t,
      isTyping: !1
    })
  })), k = r.useMemo(() => ({
    fill: L,
    ...C({
      size: m,
      status: N,
      isMobile: l,
      isTyping: p
    })
  }), [L, m, N, l, p]), {
    avatarCutoutX: G,
    avatarCutoutY: x,
    avatarCutoutWidth: F,
    avatarCutoutHeight: V,
    avatarCutoutRadius: B,
    fill: H,
    ...j
  } = (0, o.useSpring)({
    immediate: !document.hasFocus(),
    config: g,
    from: w,
    to: k
  }), Y = (0, f.getAvatarSize)(m), W = (0, f.getAvatarSpecs)(m), K = W.status * f.TYPING_WIDTH_RATIO, z = W.status * f.MOBILE_HEIGHT_RATIO, q = null != N ? (W.status * f.TYPING_WIDTH_RATIO - W.status) / 2 : 0, Q = W.size - W.status - q - W.offset, X = W.size - z - W.offset, Z = W.size + Math.ceil(q);
  return (0, i.jsx)(A, {
    ...e,
    ariaLabel: P,
    ariaHidden: b,
    typingOffset: q,
    specs: W,
    children: (0, i.jsxs)("svg", {
      width: Z,
      height: Z,
      viewBox: "0 0 ".concat(Z, " ").concat(Z),
      className: a(S.mask, S.svg),
      "aria-hidden": !0,
      children: [(0, i.jsxs)("mask", {
        id: M,
        width: Y,
        height: Y,
        children: [(0, i.jsx)("circle", {
          cx: Y / 2,
          cy: Y / 2,
          r: Y / 2,
          fill: "white"
        }), (0, i.jsx)(o.animated.rect, {
          color: "black",
          x: G,
          y: x,
          width: F,
          height: V,
          rx: B,
          ry: B
        })]
      }), (0, i.jsx)("foreignObject", {
        className: S.foreignObject,
        x: 0,
        y: 0,
        width: Y,
        height: Y,
        mask: "url(#".concat(M, ")"),
        children: (0, i.jsx)(R, {
          src: I,
          isSpeaking: _
        })
      }), (0, i.jsx)(d.Tooltip, {
        text: O ? (0, h.humanizeStatus)(N) : null,
        "aria-label": !1,
        position: "top",
        spacing: function(e, t, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return 5 - (n && !i ? 0 : .5 * e) + 1.5 * t
        }(W.status, W.stroke, l, p),
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [null != D && v(D, l, W, N), (0, i.jsxs)("svg", {
            x: Q,
            y: X,
            width: K,
            height: z,
            viewBox: "0 0 ".concat(K, " ").concat(z),
            className: O ? S.cursorDefault : void 0,
            children: [(0, c.renderStatusMask)(j, W.status, U), (0, i.jsx)(o.animated.rect, {
              fill: H,
              width: K,
              height: z,
              mask: "url(#".concat(U, ")")
            }), (0, i.jsx)(u.Dots, {
              ref: E,
              dotRadius: W.status / 4,
              x: .15 * K,
              y: .5 * z,
              hide: !p
            })]
          }), (0, i.jsx)(T, {
            size: m,
            isMobile: l,
            isTyping: p,
            className: S.pointerEvents,
            ...e
          })]
        })
      })]
    })
  })
}
let O = r.memo(function(e) {
  var t, n, s, a, o;
  let {
    statusColor: l,
    status: u,
    ...d
  } = e, {
    isMobile: p = !1,
    isTyping: h = !1
  } = d, f = r.useRef(u), _ = r.useRef(p), m = (0, c.useStatusFillColor)(u, l), S = r.useRef(m), g = r.useRef(!1);
  let T = g.current || (t = h, n = u, s = f.current, a = p, o = _.current, null != s && null != n && (!!t || n !== s || n === E.StatusTypes.ONLINE && a !== o || !1));
  return r.useLayoutEffect(() => {
    g.current = T, f.current = u, _.current = p, S.current = m
  }, [u, p, m, T]), null != u && null != f.current && T ? (0, i.jsx)(y, {
    ...d,
    status: u,
    statusColor: m,
    fromStatus: f.current,
    fromIsMobile: _.current,
    fromColor: S.current
  }) : (0, i.jsx)(N, {
    ...d,
    status: u,
    statusColor: m
  })
})