"use strict";
n.r(t), n.d(t, {
  Avatar: function() {
    return N
  },
  AnimatedAvatar: function() {
    return D
  }
}), n("70102"), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("907002"),
  l = n("227645"),
  u = n("709749"),
  d = n("391010"),
  c = n("414055"),
  f = n("587974"),
  _ = n("158998"),
  h = n("52904"),
  g = n("49111"),
  m = n("573135"),
  E = n("782340"),
  p = n("881775");
let v = {
  tension: 1200,
  friction: 70
};

function S(e) {
  let {
    size: t,
    isMobile: n,
    isTyping: s,
    ...r
  } = e, a = (0, h.getAvatarSpecs)(t), o = a.status * (n && !s ? h.MOBILE_HEIGHT_RATIO : 1), l = a.status * (s ? h.TYPING_WIDTH_RATIO : 1), u = s ? (a.status * h.TYPING_WIDTH_RATIO - a.status) / 2 : 0, d = a.size - a.status - u - a.offset, c = a.size - o - a.offset;
  return (0, i.jsx)("rect", {
    x: d,
    y: c,
    width: l,
    height: o,
    fill: "transparent",
    "aria-hidden": !0,
    ...r
  })
}

function T(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = (0, d.getStatusSize)(e.status, t, n, i),
    r = (i ? e.size - (s.width / 2 + e.status / 2) : e.size - s.width) - e.offset;
  return {
    ...s,
    x: r,
    y: e.size - s.height - e.offset
  }
}

function I(e, t, n, s) {
  let r = T(n, s, t, !1),
    a = (0, d.getStatusBackdropOpacity)(s, e);
  if (!t) {
    let t = r.height / 2 + n.stroke,
      s = r.x + n.status / 2;
    return (0, i.jsx)("circle", {
      style: {
        opacity: a
      },
      fill: e,
      r: t,
      cx: s,
      cy: s
    })
  }
  let o = r.height + 2 * n.stroke,
    l = r.width + 2 * n.stroke,
    u = r.x - n.stroke,
    c = r.y - n.stroke;
  return (0, i.jsx)("rect", {
    fill: e,
    height: o,
    width: l,
    style: {
      opacity: a
    },
    x: u,
    y: c,
    rx: n.stroke
  })
}

function C(e) {
  let {
    status: t,
    isMobile: n,
    isTyping: i,
    size: s
  } = e, r = n && !i && t === g.StatusTypes.ONLINE, a = (0, h.getAvatarSpecs)(s);
  return {
    ... function(e, t, n) {
      let {
        size: i,
        status: s,
        stroke: r,
        offset: a
      } = e, o = n ? s * h.TYPING_WIDTH_RATIO : s, l = t ? s * h.MOBILE_HEIGHT_RATIO : s;
      return {
        avatarCutoutX: i - o + (o - s) / 2 - r - a,
        avatarCutoutY: i - l - r - a,
        avatarCutoutWidth: o + 2 * r,
        avatarCutoutHeight: l + 2 * r,
        avatarCutoutRadius: t ? (l + 2 * r) * h.CUTOUT_BORDER_RADIUS : (s + 2 * r) / 2
      }
    }(a, r, i),
    ...(0, d.getStatusValues)({
      status: t,
      size: a.status,
      isMobile: r,
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
    onClick: s,
    onMouseDown: r,
    onKeyDown: o,
    onContextMenu: u,
    onMouseEnter: d,
    onMouseLeave: c,
    className: g,
    tabIndex: v,
    ariaLabel: S,
    ariaHidden: T,
    status: I,
    isMobile: C = !1,
    isTyping: A = !1,
    avatarDecoration: y,
    typingOffset: N,
    specs: R
  } = e, D = {
    width: (0, h.getAvatarSize)(n),
    height: (0, h.getAvatarSize)(n)
  }, O = null == S || T ? void 0 : function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t ? E.default.Messages.LABEL_WITH_ONLINE_STATUS.format({
      label: e,
      status: (0, _.humanizeStatus)(t, n)
    }) : e
  }(S, I, C), P = R.size * m.DECORATION_TO_AVATAR_RATIO, b = function(e, t, n, i) {
    if (null == e) return null;
    if (i) switch (t) {
      case h.AvatarSizes.SIZE_16:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_16;
      case h.AvatarSizes.SIZE_20:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_20;
      case h.AvatarSizes.SIZE_24:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_24;
      case h.AvatarSizes.SIZE_32:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_32;
      case h.AvatarSizes.SIZE_40:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_40;
      case h.AvatarSizes.SIZE_56:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_56;
      case h.AvatarSizes.SIZE_80:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_80;
      case h.AvatarSizes.SIZE_120:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_120
    }
    if (n) switch (t) {
      case h.AvatarSizes.SIZE_16:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_16;
      case h.AvatarSizes.SIZE_20:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_20;
      case h.AvatarSizes.SIZE_24:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_24;
      case h.AvatarSizes.SIZE_32:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_32;
      case h.AvatarSizes.SIZE_40:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_40;
      case h.AvatarSizes.SIZE_56:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_56;
      case h.AvatarSizes.SIZE_80:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_80;
      case h.AvatarSizes.SIZE_120:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_120
    }
    switch (t) {
      case h.AvatarSizes.SIZE_16:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_16;
      case h.AvatarSizes.SIZE_20:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_20;
      case h.AvatarSizes.SIZE_24:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_24;
      case h.AvatarSizes.SIZE_32:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_32;
      case h.AvatarSizes.SIZE_40:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_40;
      case h.AvatarSizes.SIZE_56:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_56;
      case h.AvatarSizes.SIZE_80:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_80;
      case h.AvatarSizes.SIZE_120:
        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_120
    }
    return null
  }(I, n, C, A), L = null != y && (0, i.jsx)("svg", {
    width: P + N,
    height: P,
    viewBox: "0 0 ".concat(P + N, " ").concat(P),
    className: p.avatarDecoration,
    "aria-hidden": !0,
    children: (0, i.jsx)("foreignObject", {
      x: 0,
      y: 0,
      width: P,
      height: P,
      mask: null != b ? "url(#".concat(b, ")") : void 0,
      children: (0, i.jsx)("div", {
        className: p.avatarStack,
        children: (0, i.jsx)("img", {
          className: p.avatar,
          src: y,
          alt: " ",
          "aria-hidden": !0
        })
      })
    })
  });
  return null != s || null != r ? (0, i.jsxs)(l.Clickable, {
    className: a(p.wrapper, p.pointer, g),
    style: D,
    onClick: s,
    tabIndex: v,
    onContextMenu: u,
    onMouseDown: r,
    onKeyDown: o,
    onMouseEnter: null != d ? d : void 0,
    onMouseLeave: null != c ? c : void 0,
    "aria-label": O,
    "aria-hidden": T,
    children: [t, L]
  }) : (0, i.jsxs)("div", {
    className: a(p.wrapper, g),
    style: D,
    onContextMenu: null != u ? u : void 0,
    onMouseEnter: null != d ? d : void 0,
    onMouseLeave: null != c ? c : void 0,
    role: "img",
    "aria-label": O,
    "aria-hidden": T,
    children: [t, L]
  })
}

function y(e) {
  let {
    src: t,
    isSpeaking: n
  } = e;
  return (0, i.jsxs)("div", {
    className: p.avatarStack,
    children: [(0, i.jsx)("img", {
      src: null != t ? t : void 0,
      alt: " ",
      className: p.avatar,
      "aria-hidden": !0
    }), n && (0, i.jsx)("div", {
      className: p.avatarSpeaking
    })]
  })
}

function N(e) {
  let {
    src: t,
    status: n,
    size: s,
    statusColor: r,
    isMobile: o = !1,
    isTyping: l = !1,
    typingIndicatorRef: m,
    isSpeaking: E = !1,
    statusTooltip: v = !1,
    statusBackdropColor: S,
    "aria-hidden": C = !1,
    "aria-label": N
  } = e, R = n !== g.StatusTypes.UNKNOWN ? n : null, D = (0, h.getAvatarSpecs)(s), O = null != R ? Math.ceil((D.status * h.TYPING_WIDTH_RATIO - D.status) / 2) : 0, P = D.size + O, b = (0, d.useStatusFillColor)(R, r);
  return (0, i.jsx)(A, {
    ...e,
    ariaLabel: N,
    ariaHidden: C,
    status: R,
    specs: D,
    typingOffset: O,
    children: (0, i.jsxs)("svg", {
      width: P,
      height: P,
      viewBox: "0 0 ".concat(P, " ").concat(P),
      className: a(p.mask, p.svg),
      "aria-hidden": !0,
      children: [(0, i.jsx)("foreignObject", {
        x: 0,
        y: 0,
        width: D.size,
        height: D.size,
        mask: "url(#".concat(function(e, t, n, i) {
          if (null == e) return f.MaskIDs.AVATAR_DEFAULT;
          if (i) switch (t) {
            case h.AvatarSizes.SIZE_16:
              return f.MaskIDs.AVATAR_STATUS_TYPING_16;
            case h.AvatarSizes.SIZE_20:
              return f.MaskIDs.AVATAR_STATUS_TYPING_20;
            case h.AvatarSizes.SIZE_24:
              return f.MaskIDs.AVATAR_STATUS_TYPING_24;
            case h.AvatarSizes.SIZE_32:
              return f.MaskIDs.AVATAR_STATUS_TYPING_32;
            case h.AvatarSizes.SIZE_40:
              return f.MaskIDs.AVATAR_STATUS_TYPING_40;
            case h.AvatarSizes.SIZE_48:
              return f.MaskIDs.AVATAR_STATUS_TYPING_48;
            case h.AvatarSizes.SIZE_56:
              return f.MaskIDs.AVATAR_STATUS_TYPING_56;
            case h.AvatarSizes.SIZE_80:
              return f.MaskIDs.AVATAR_STATUS_TYPING_80;
            case h.AvatarSizes.SIZE_120:
              return f.MaskIDs.AVATAR_STATUS_TYPING_120
          }
          if (e === g.StatusTypes.ONLINE && n) switch (t) {
            case h.AvatarSizes.SIZE_16:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_16;
            case h.AvatarSizes.SIZE_20:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_20;
            case h.AvatarSizes.SIZE_24:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_24;
            case h.AvatarSizes.SIZE_32:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_32;
            case h.AvatarSizes.SIZE_40:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_40;
            case h.AvatarSizes.SIZE_48:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_48;
            case h.AvatarSizes.SIZE_56:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_56;
            case h.AvatarSizes.SIZE_80:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_80;
            case h.AvatarSizes.SIZE_120:
              return f.MaskIDs.AVATAR_STATUS_MOBILE_120
          }
          switch (t) {
            case h.AvatarSizes.SIZE_16:
              return f.MaskIDs.AVATAR_STATUS_ROUND_16;
            case h.AvatarSizes.SIZE_20:
              return f.MaskIDs.AVATAR_STATUS_ROUND_20;
            case h.AvatarSizes.SIZE_24:
              return f.MaskIDs.AVATAR_STATUS_ROUND_24;
            case h.AvatarSizes.SIZE_32:
              return f.MaskIDs.AVATAR_STATUS_ROUND_32;
            case h.AvatarSizes.SIZE_40:
              return f.MaskIDs.AVATAR_STATUS_ROUND_40;
            case h.AvatarSizes.SIZE_48:
              return f.MaskIDs.AVATAR_STATUS_ROUND_48;
            case h.AvatarSizes.SIZE_56:
              return f.MaskIDs.AVATAR_STATUS_ROUND_56;
            case h.AvatarSizes.SIZE_80:
              return f.MaskIDs.AVATAR_STATUS_ROUND_80;
            case h.AvatarSizes.SIZE_120:
              return f.MaskIDs.AVATAR_STATUS_ROUND_120
          }
          throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
        }(R, s, o, l), ")"),
        children: (0, i.jsx)(y, {
          src: t,
          isSpeaking: E
        })
      }), null != R ? (0, i.jsx)(c.Tooltip, {
        text: v ? (0, _.humanizeStatus)(R) : null,
        "aria-label": !1,
        position: "top",
        spacing: 5 + 1.5 * D.stroke,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [null != S && I(S, o, D, R), (0, i.jsx)("rect", {
            ...e,
            ...T(D, R, o, l),
            fill: b,
            mask: "url(#".concat((0, d.getStatusMask)(R, o, l), ")"),
            className: p.pointerEvents
          }), l ? (0, i.jsx)(u.Dots, {
            ref: m,
            dotRadius: D.status / 4,
            x: D.size - 1.375 * D.status - D.offset,
            y: D.size - D.status / 1.333 - D.offset
          }) : null]
        })
      }) : null]
    })
  })
}

function R(e) {
  let {
    fromIsMobile: t = !0,
    fromStatus: n,
    fromColor: r,
    isMobile: l = !1,
    isTyping: f = !1,
    typingIndicatorRef: g,
    isSpeaking: m = !1,
    size: E,
    src: T,
    status: N,
    statusColor: R,
    statusTooltip: D = !1,
    statusBackdropColor: O,
    "aria-hidden": P = !1,
    "aria-label": b
  } = e, L = (0, d.useStatusFillColor)(N, R), M = s.useId(), U = s.useId(), [w] = s.useState(() => ({
    fill: r,
    ...C({
      size: E,
      status: n,
      isMobile: t,
      isTyping: !1
    })
  })), k = s.useMemo(() => ({
    fill: L,
    ...C({
      size: E,
      status: N,
      isMobile: l,
      isTyping: f
    })
  }), [L, E, N, l, f]), {
    avatarCutoutX: V,
    avatarCutoutY: G,
    avatarCutoutWidth: F,
    avatarCutoutHeight: x,
    avatarCutoutRadius: B,
    fill: H,
    ...Y
  } = (0, o.useSpring)({
    immediate: !document.hasFocus(),
    config: v,
    from: w,
    to: k
  }), j = (0, h.getAvatarSize)(E), W = (0, h.getAvatarSpecs)(E), K = W.status * h.TYPING_WIDTH_RATIO, z = W.status * h.MOBILE_HEIGHT_RATIO, q = null != N ? (W.status * h.TYPING_WIDTH_RATIO - W.status) / 2 : 0, X = W.size - W.status - q - W.offset, Q = W.size - z - W.offset, Z = W.size + Math.ceil(q);
  return (0, i.jsx)(A, {
    ...e,
    ariaLabel: b,
    ariaHidden: P,
    typingOffset: q,
    specs: W,
    children: (0, i.jsxs)("svg", {
      width: Z,
      height: Z,
      viewBox: "0 0 ".concat(Z, " ").concat(Z),
      className: a(p.mask, p.svg),
      "aria-hidden": !0,
      children: [(0, i.jsxs)("mask", {
        id: M,
        width: j,
        height: j,
        children: [(0, i.jsx)("circle", {
          cx: j / 2,
          cy: j / 2,
          r: j / 2,
          fill: "white"
        }), (0, i.jsx)(o.animated.rect, {
          color: "black",
          x: V,
          y: G,
          width: F,
          height: x,
          rx: B,
          ry: B
        })]
      }), (0, i.jsx)("foreignObject", {
        className: p.foreignObject,
        x: 0,
        y: 0,
        width: j,
        height: j,
        mask: "url(#".concat(M, ")"),
        children: (0, i.jsx)(y, {
          src: T,
          isSpeaking: m
        })
      }), (0, i.jsx)(c.Tooltip, {
        text: D ? (0, _.humanizeStatus)(N) : null,
        "aria-label": !1,
        position: "top",
        spacing: function(e, t, n) {
          let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return 5 - (n && !i ? 0 : .5 * e) + 1.5 * t
        }(W.status, W.stroke, l, f),
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [null != O && I(O, l, W, N), (0, i.jsxs)("svg", {
            x: X,
            y: Q,
            width: K,
            height: z,
            viewBox: "0 0 ".concat(K, " ").concat(z),
            className: D ? p.cursorDefault : void 0,
            children: [(0, d.renderStatusMask)(Y, W.status, U), (0, i.jsx)(o.animated.rect, {
              fill: H,
              width: K,
              height: z,
              mask: "url(#".concat(U, ")")
            }), (0, i.jsx)(u.Dots, {
              ref: g,
              dotRadius: W.status / 4,
              x: .15 * K,
              y: .5 * z,
              hide: !f
            })]
          }), (0, i.jsx)(S, {
            size: E,
            isMobile: l,
            isTyping: f,
            className: p.pointerEvents,
            ...e
          })]
        })
      })]
    })
  })
}
let D = s.memo(function(e) {
  var t, n, r, a, o;
  let {
    statusColor: l,
    status: u,
    ...c
  } = e, {
    isMobile: f = !1,
    isTyping: _ = !1
  } = c, h = s.useRef(u), m = s.useRef(f), E = (0, d.useStatusFillColor)(u, l), p = s.useRef(E), v = s.useRef(!1);
  let S = v.current || (t = _, n = u, r = h.current, a = f, o = m.current, null != r && null != n && (!!t || n !== r || n === g.StatusTypes.ONLINE && a !== o || !1));
  return s.useLayoutEffect(() => {
    v.current = S, h.current = u, m.current = f, p.current = E
  }, [u, f, E, S]), null != u && null != h.current && S ? (0, i.jsx)(R, {
    ...c,
    status: u,
    statusColor: E,
    fromStatus: h.current,
    fromIsMobile: m.current,
    fromColor: p.current
  }) : (0, i.jsx)(N, {
    ...c,
    status: u,
    statusColor: E
  })
})