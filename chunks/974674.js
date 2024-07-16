n.d(t, {
  Vq: function() {
return S;
  },
  Xo: function() {
return y;
  },
  qE: function() {
return R;
  }
}), n(411104), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(338545),
  l = n(1561),
  u = n(438784),
  c = n(696826),
  d = n(981729),
  _ = n(806519),
  E = n(51144),
  f = n(182294),
  h = n(981631),
  p = n(419061),
  m = n(689938),
  I = n(498591);
let T = {
  tension: 1200,
  friction: 70
};

function g(e) {
  let {
size: t,
isMobile: n,
isTyping: i,
...a
  } = e, s = (0, f.UC)(t), o = s.status * (n && !i ? f.EW : 1), l = s.status * (i ? f.D6 : 1), u = i ? (s.status * f.D6 - s.status) / 2 : 0, c = s.size - s.status - u - s.offset, d = s.size - o - s.offset;
  return (0, r.jsx)('rect', {
x: c,
y: d,
width: l,
height: o,
fill: 'transparent',
'aria-hidden': !0,
...a
  });
}

function S(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
i = (0, c.W5)(e.status, t, n, r),
a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
  return {
...i,
x: a,
y: e.size - i.height - e.offset
  };
}

function A(e, t, n, i) {
  let a = S(n, i, t, !1),
s = (0, c.lm)(i, e);
  if (!t) {
let t = a.height / 2 + n.stroke,
  i = a.x + n.status / 2;
return (0, r.jsx)('circle', {
  style: {
    opacity: s
  },
  fill: e,
  r: t,
  cx: i,
  cy: i
});
  }
  let o = a.height + 2 * n.stroke,
l = a.width + 2 * n.stroke,
u = a.x - n.stroke,
d = a.y - n.stroke;
  return (0, r.jsx)('rect', {
fill: e,
height: o,
width: l,
style: {
  opacity: s
},
x: u,
y: d,
rx: n.stroke
  });
}

function N(e) {
  let {
status: t,
isMobile: n,
isTyping: r,
size: i
  } = e, a = n && !r && t === h.Skl.ONLINE, s = (0, f.UC)(i);
  return {
... function(e, t, n) {
  let {
    size: r,
    status: i,
    stroke: a,
    offset: s
  } = e, o = n ? i * f.D6 : i, l = t ? i * f.EW : i;
  return {
    avatarCutoutX: r - o + (o - i) / 2 - a - s,
    avatarCutoutY: r - l - a - s,
    avatarCutoutWidth: o + 2 * a,
    avatarCutoutHeight: l + 2 * a,
    avatarCutoutRadius: t ? (l + 2 * a) * f.ZC : (i + 2 * a) / 2
  };
}(s, a, r),
...(0, c.Dk)({
  status: t,
  size: s.status,
  isMobile: a,
  isTyping: r,
  topOffset: 2,
  leftOffset: 6
})
  };
}

function v(e) {
  let {
children: t,
size: n,
onClick: i,
onMouseDown: a,
onKeyDown: o,
onContextMenu: u,
onMouseEnter: c,
onMouseLeave: d,
className: h,
tabIndex: T,
ariaLabel: g,
ariaHidden: S,
status: A,
isMobile: N = !1,
isTyping: v = !1,
avatarDecoration: O,
typingOffset: R,
specs: C
  } = e, y = {
width: (0, f.px)(n),
height: (0, f.px)(n)
  }, D = null == g || S ? void 0 : function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
return null != t ? m.Z.Messages.LABEL_WITH_ONLINE_STATUS.format({
  label: e,
  status: (0, E.u5)(t, n)
}) : e;
  }(g, A, N), L = C.size * p.hs, b = function(e, t, n, r) {
if (null == e)
  return null;
if (r)
  switch (t) {
    case f.EF.SIZE_16:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_16;
    case f.EF.SIZE_20:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_20;
    case f.EF.SIZE_24:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_24;
    case f.EF.SIZE_32:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_32;
    case f.EF.SIZE_40:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_40;
    case f.EF.SIZE_56:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_56;
    case f.EF.SIZE_80:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_80;
    case f.EF.SIZE_120:
      return _.QS.AVATAR_DECORATION_STATUS_TYPING_120;
  }
if (n)
  switch (t) {
    case f.EF.SIZE_16:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
    case f.EF.SIZE_20:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
    case f.EF.SIZE_24:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
    case f.EF.SIZE_32:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
    case f.EF.SIZE_40:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
    case f.EF.SIZE_56:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
    case f.EF.SIZE_80:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
    case f.EF.SIZE_120:
      return _.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
  }
switch (t) {
  case f.EF.SIZE_16:
    return _.QS.AVATAR_DECORATION_STATUS_ROUND_16;
  case f.EF.SIZE_20:
    return _.QS.AVATAR_DECORATION_STATUS_ROUND_20;
  case f.EF.SIZE_24:
    return _.QS.AVATAR_DECORATION_STATUS_ROUND_24;
  case f.EF.SIZE_32:
    return _.QS.AVATAR_DECORATION_STATUS_ROUND_32;
  case f.EF.SIZE_40:
    return _.QS.AVATAR_DECORATION_STATUS_ROUND_40;
  case f.EF.SIZE_56:
    return _.QS.AVATAR_DECORATION_STATUS_ROUND_56;
  case f.EF.SIZE_80:
    return _.QS.AVATAR_DECORATION_STATUS_ROUND_80;
  case f.EF.SIZE_120:
    return _.QS.AVATAR_DECORATION_STATUS_ROUND_120;
}
return null;
  }(A, n, N, v), M = null != O && (0, r.jsx)('svg', {
width: L + R,
height: L,
viewBox: '0 0 '.concat(L + R, ' ').concat(L),
className: I.avatarDecoration,
'aria-hidden': !0,
children: (0, r.jsx)('foreignObject', {
  x: 0,
  y: 0,
  width: L,
  height: L,
  mask: null != b ? 'url(#'.concat(b, ')') : void 0,
  children: (0, r.jsx)('div', {
    className: I.avatarStack,
    children: (0, r.jsx)('img', {
      className: I.avatar,
      src: O,
      alt: ' ',
      'aria-hidden': !0
    })
  })
})
  });
  return null != i || null != a ? (0, r.jsxs)(l.P, {
className: s()(I.wrapper, I.pointer, h),
style: y,
onClick: i,
tabIndex: T,
onContextMenu: u,
onMouseDown: a,
onKeyDown: o,
onMouseEnter: null != c ? c : void 0,
onMouseLeave: null != d ? d : void 0,
'aria-label': D,
'aria-hidden': S,
children: [
  t,
  M
]
  }) : (0, r.jsxs)('div', {
className: s()(I.wrapper, h),
style: y,
onContextMenu: null != u ? u : void 0,
onMouseEnter: null != c ? c : void 0,
onMouseLeave: null != d ? d : void 0,
role: 'img',
'aria-label': D,
'aria-hidden': S,
children: [
  t,
  M
]
  });
}

function O(e) {
  let {
src: t,
isSpeaking: n,
className: i
  } = e;
  return (0, r.jsxs)('div', {
className: s()(I.avatarStack, i),
children: [
  (0, r.jsx)('img', {
    src: null != t ? t : void 0,
    alt: ' ',
    className: I.avatar,
    'aria-hidden': !0
  }),
  n && (0, r.jsx)('div', {
    className: I.avatarSpeaking
  })
]
  }, t);
}

function R(e) {
  let {
src: t,
status: n,
size: i,
statusColor: a,
isMobile: o = !1,
isTyping: l = !1,
typingIndicatorRef: p,
isSpeaking: m = !1,
statusTooltip: T = !1,
statusTooltipDelay: g,
statusBackdropColor: N,
'aria-hidden': R = !1,
'aria-label': C,
imageClassName: y
  } = e, D = n !== h.Skl.UNKNOWN ? n : null, L = (0, f.UC)(i), b = null != D ? Math.ceil((L.status * f.D6 - L.status) / 2) : 0, M = L.size + b, P = (0, c.vj)(D, a);
  return (0, r.jsx)(v, {
...e,
ariaLabel: C,
ariaHidden: R,
status: D,
specs: L,
typingOffset: b,
children: (0, r.jsxs)('svg', {
  width: M,
  height: M,
  viewBox: '0 0 '.concat(M, ' ').concat(M),
  className: s()(I.mask, I.svg),
  'aria-hidden': !0,
  children: [
    (0, r.jsx)('foreignObject', {
      x: 0,
      y: 0,
      width: L.size,
      height: L.size,
      mask: 'url(#'.concat(function(e, t, n, r) {
        if (null == e)
          return _.QS.AVATAR_DEFAULT;
        if (r)
          switch (t) {
            case f.EF.SIZE_16:
              return _.QS.AVATAR_STATUS_TYPING_16;
            case f.EF.SIZE_20:
              return _.QS.AVATAR_STATUS_TYPING_20;
            case f.EF.SIZE_24:
              return _.QS.AVATAR_STATUS_TYPING_24;
            case f.EF.SIZE_32:
              return _.QS.AVATAR_STATUS_TYPING_32;
            case f.EF.SIZE_40:
              return _.QS.AVATAR_STATUS_TYPING_40;
            case f.EF.SIZE_48:
              return _.QS.AVATAR_STATUS_TYPING_48;
            case f.EF.SIZE_56:
              return _.QS.AVATAR_STATUS_TYPING_56;
            case f.EF.SIZE_80:
              return _.QS.AVATAR_STATUS_TYPING_80;
            case f.EF.SIZE_120:
              return _.QS.AVATAR_STATUS_TYPING_120;
          }
        if (e === h.Skl.ONLINE && n)
          switch (t) {
            case f.EF.SIZE_16:
              return _.QS.AVATAR_STATUS_MOBILE_16;
            case f.EF.SIZE_20:
              return _.QS.AVATAR_STATUS_MOBILE_20;
            case f.EF.SIZE_24:
              return _.QS.AVATAR_STATUS_MOBILE_24;
            case f.EF.SIZE_32:
              return _.QS.AVATAR_STATUS_MOBILE_32;
            case f.EF.SIZE_40:
              return _.QS.AVATAR_STATUS_MOBILE_40;
            case f.EF.SIZE_48:
              return _.QS.AVATAR_STATUS_MOBILE_48;
            case f.EF.SIZE_56:
              return _.QS.AVATAR_STATUS_MOBILE_56;
            case f.EF.SIZE_80:
              return _.QS.AVATAR_STATUS_MOBILE_80;
            case f.EF.SIZE_120:
              return _.QS.AVATAR_STATUS_MOBILE_120;
          }
        switch (t) {
          case f.EF.SIZE_16:
            return _.QS.AVATAR_STATUS_ROUND_16;
          case f.EF.SIZE_20:
            return _.QS.AVATAR_STATUS_ROUND_20;
          case f.EF.SIZE_24:
            return _.QS.AVATAR_STATUS_ROUND_24;
          case f.EF.SIZE_32:
            return _.QS.AVATAR_STATUS_ROUND_32;
          case f.EF.SIZE_40:
            return _.QS.AVATAR_STATUS_ROUND_40;
          case f.EF.SIZE_48:
            return _.QS.AVATAR_STATUS_ROUND_48;
          case f.EF.SIZE_56:
            return _.QS.AVATAR_STATUS_ROUND_56;
          case f.EF.SIZE_80:
            return _.QS.AVATAR_STATUS_ROUND_80;
          case f.EF.SIZE_120:
            return _.QS.AVATAR_STATUS_ROUND_120;
        }
        throw Error('getMaskId(): Unsupported type, size: '.concat(t, ', status: ').concat(e, ', isMobile: ').concat(n ? 'true' : 'false'));
      }(D, i, o, l), ')'),
      children: (0, r.jsx)(O, {
        src: t,
        isSpeaking: m,
        className: y
      })
    }),
    null != D && null != N ? A(N, o, L, D) : null,
    null != D ? (0, r.jsx)(d.u, {
      text: T ? (0, E.u5)(D) : null,
      'aria-label': !1,
      position: 'top',
      spacing: 5 + 1.5 * L.stroke,
      delay: g,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('rect', {
            ...e,
            ...S(L, D, o, l),
            fill: P,
            mask: 'url(#'.concat((0, c.rs)(D, o, l), ')'),
            className: I.pointerEvents
          }),
          l ? (0, r.jsx)(u.b, {
            ref: p,
            dotRadius: L.status / 4,
            x: L.size - 1.375 * L.status - L.offset,
            y: L.size - L.status / 1.333 - L.offset
          }) : null
        ]
      })
    }) : null
  ]
})
  });
}

function C(e) {
  let {
fromIsMobile: t = !0,
fromStatus: n,
fromColor: a,
isMobile: l = !1,
isTyping: _ = !1,
typingIndicatorRef: h,
isSpeaking: p = !1,
size: m,
src: S,
status: R,
statusColor: C,
statusTooltip: y = !1,
statusTooltipDelay: D,
statusBackdropColor: L,
'aria-hidden': b = !1,
'aria-label': M,
imageClassName: P
  } = e, U = (0, c.vj)(R, C), w = i.useId(), x = i.useId(), [G] = i.useState(() => ({
fill: a,
...N({
  size: m,
  status: n,
  isMobile: t,
  isTyping: !1
})
  })), k = i.useMemo(() => ({
fill: U,
...N({
  size: m,
  status: R,
  isMobile: l,
  isTyping: _
})
  }), [
U,
m,
R,
l,
_
  ]), {
avatarCutoutX: B,
avatarCutoutY: F,
avatarCutoutWidth: V,
avatarCutoutHeight: H,
avatarCutoutRadius: Z,
fill: Y,
...j
  } = (0, o.useSpring)({
immediate: !document.hasFocus(),
config: T,
from: G,
to: k
  }), W = (0, f.px)(m), K = (0, f.UC)(m), z = K.status * f.D6, q = K.status * f.EW, Q = null != R ? (K.status * f.D6 - K.status) / 2 : 0, X = K.size - K.status - Q - K.offset, $ = K.size - q - K.offset, J = K.size + Math.ceil(Q);
  return (0, r.jsx)(v, {
...e,
ariaLabel: M,
ariaHidden: b,
typingOffset: Q,
specs: K,
children: (0, r.jsxs)('svg', {
  width: J,
  height: J,
  viewBox: '0 0 '.concat(J, ' ').concat(J),
  className: s()(I.mask, I.svg),
  'aria-hidden': !0,
  children: [
    (0, r.jsxs)('mask', {
      id: w,
      width: W,
      height: W,
      children: [
        (0, r.jsx)('circle', {
          cx: W / 2,
          cy: W / 2,
          r: W / 2,
          fill: 'white'
        }),
        (0, r.jsx)(o.animated.rect, {
          color: 'black',
          x: B,
          y: F,
          width: V,
          height: H,
          rx: Z,
          ry: Z
        })
      ]
    }),
    (0, r.jsx)('foreignObject', {
      className: I.__invalid_foreignObject,
      x: 0,
      y: 0,
      width: W,
      height: W,
      mask: 'url(#'.concat(w, ')'),
      children: (0, r.jsx)(O, {
        src: S,
        isSpeaking: p,
        className: P
      })
    }),
    null != L && A(L, l, K, R),
    (0, r.jsx)(d.u, {
      text: y ? (0, E.u5)(R) : null,
      'aria-label': !1,
      position: 'top',
      spacing: function(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
      }(K.status, K.stroke, l, _),
      delay: D,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsxs)('svg', {
            x: X,
            y: $,
            width: z,
            height: q,
            viewBox: '0 0 '.concat(z, ' ').concat(q),
            className: y ? I.cursorDefault : void 0,
            children: [
              (0, c.vP)(j, K.status, x),
              (0, r.jsx)(o.animated.rect, {
                fill: Y,
                width: z,
                height: q,
                mask: 'url(#'.concat(x, ')')
              }),
              (0, r.jsx)(u.b, {
                ref: h,
                dotRadius: K.status / 4,
                x: 0.15 * z,
                y: 0.5 * q,
                hide: !_
              })
            ]
          }),
          (0, r.jsx)(g, {
            size: m,
            isMobile: l,
            isTyping: _,
            className: I.pointerEvents,
            ...e
          })
        ]
      })
    })
  ]
})
  });
}
let y = i.memo(function(e) {
  var t, n, a, s, o;
  let {
statusColor: l,
status: u,
...d
  } = e, {
isMobile: _ = !1,
isTyping: E = !1
  } = d, f = i.useRef(u), p = i.useRef(_), m = (0, c.vj)(u, l), I = i.useRef(m), T = i.useRef(!1);
  let g = T.current || (t = E, n = u, a = f.current, s = _, o = p.current, null != a && null != n && (!!t || n !== a || n === h.Skl.ONLINE && s !== o || !1));
  return i.useLayoutEffect(() => {
T.current = g, f.current = u, p.current = _, I.current = m;
  }, [
u,
_,
m,
g
  ]), null != u && null != f.current && g ? (0, r.jsx)(C, {
...d,
status: u,
statusColor: m,
fromStatus: f.current,
fromIsMobile: p.current,
fromColor: I.current
  }) : (0, r.jsx)(R, {
...d,
status: u,
statusColor: m
  });
});