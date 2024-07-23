n.d(t, {
  Cg: function() {
return i;
  },
  Y0: function() {
return C;
  },
  YA: function() {
return M;
  },
  hz: function() {
return D;
  },
  mz: function() {
return L;
  },
  ol: function() {
return b;
  },
  xB: function() {
return y;
  }
});
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(338545),
  c = n(990547),
  d = n(748780),
  _ = n(186325),
  E = n(693789),
  f = n(507274),
  h = n(84735),
  p = n(337033),
  m = n(788698),
  I = n(742746),
  T = n(147479),
  g = n(481060),
  S = n(285952),
  A = n(602091),
  N = n(231338),
  v = n(689938),
  O = n(229292);
(r = i || (i = {})).SMALL = 'small', r.MEDIUM = 'medium', r.LARGE = 'large', r.DYNAMIC = 'dynamic';
let R = Object.freeze({
  small: O.small,
  medium: O.medium,
  large: O.large,
  dynamic: null
});

function C(e) {
  var t;
  let {
transitionState: n,
children: r,
size: i = 'small',
role: o = 'dialog',
className: E,
fullscreenOnMobile: p = !0,
hideShadow: m = !1,
onAnimationEnd: I = N.dG,
returnRef: T,
...S
  } = e, v = n === A.Dv.ENTERING || n === A.Dv.ENTERED, {
reducedMotion: C
  } = s.useContext(_.S), y = (0, g.useSpring)({
opacity: v ? 1 : 0,
transform: v || C.enabled ? 'scale(1)' : 'scale(0.7)',
config: {
  duration: v ? 300 : 100,
  easing: v ? d.Z.Easing.inOut(d.Z.Easing.back()) : d.Z.Easing.quad,
  clamp: !0
},
onRest: I
  }, 'animate-always'), D = s.useRef(null), L = null != S['aria-label'], b = null != S['aria-labelledby'], M = s.useId(), P = null !== (t = S['aria-labelledby']) && void 0 !== t ? t : M, U = s.useMemo(() => ({
headerId: P,
headerIdIsManaged: b
  }), [
P,
b
  ]);
  return (0, a.jsx)(A.zM.Provider, {
value: U,
children: (0, a.jsx)(f.V, {
  className: O.focusLock,
  role: o,
  returnRef: T,
  impressionType: c.ImpressionTypes.MODAL,
  'aria-labelledby': L ? void 0 : U.headerId,
  ...S,
  children: (0, a.jsx)(u.animated.div, {
    className: l()(E, O.root, R[i], {
      [O.fullscreenOnMobile]: p,
      [O.rootWithShadow]: !m
    }),
    ref: D,
    style: y,
    children: (0, a.jsx)(h.J, {
      containerRef: D,
      children: r
    })
  })
})
  });
}

function y(e) {
  var t, n, r, i, o;
  let {
headerId: u,
headerIdIsManaged: c
  } = s.useContext(A.zM);
  return (0, a.jsx)(S.Z, {
grow: 0,
shrink: 0,
direction: null !== (t = e.direction) && void 0 !== t ? t : S.Z.Direction.HORIZONTAL,
justify: null !== (n = e.justify) && void 0 !== n ? n : S.Z.Justify.START,
align: null !== (r = e.align) && void 0 !== r ? r : S.Z.Align.CENTER,
wrap: null !== (i = e.wrap) && void 0 !== i ? i : S.Z.Wrap.NO_WRAP,
className: l()(O.header, e.className, {
  [O.separator]: null === (o = e.separator) || void 0 === o || o
}),
id: c ? void 0 : u,
children: e.children
  });
}

function D(e) {
  let {
className: t,
children: n,
scrollerRef: r,
scrollbarType: i,
...s
  } = e, o = function(e) {
switch (null != e ? e : 'thin') {
  case 'auto':
    return T.yW;
  case 'none':
    return T.xV;
  default:
    return T.h2;
}
  }(i);
  return (0, a.jsx)(o, {
className: l()(O.content, t),
ref: r,
...s,
children: (0, a.jsx)(p.y, {
  children: n
})
  });
}

function L(e) {
  var t, n, r, i, s;
  return (0, a.jsx)(S.Z, {
grow: 0,
shrink: 0,
direction: null !== (t = e.direction) && void 0 !== t ? t : S.Z.Direction.HORIZONTAL_REVERSE,
justify: null !== (n = e.justify) && void 0 !== n ? n : S.Z.Justify.START,
align: null !== (r = e.align) && void 0 !== r ? r : S.Z.Align.STRETCH,
wrap: null !== (i = e.wrap) && void 0 !== i ? i : S.Z.Wrap.NO_WRAP,
className: l()(O.footer, e.className, {
  [O.footerSeparator]: null === (s = e.separator) || void 0 === s || s
}),
children: (0, a.jsx)(p.y, {
  children: e.children
})
  });
}

function b(e) {
  return (0, a.jsx)(E.zx, {
focusProps: e.focusProps,
'aria-label': v.Z.Messages.CLOSE,
look: E.zx.Looks.BLANK,
size: E.zx.Sizes.NONE,
onClick: e.onClick,
innerClassName: l()(e.innerClassName, {
  [O.closeWithCircleBackground]: e.withCircleBackground
}),
className: l()(e.className, {
  [O.hideOnFullscreen]: e.hideOnFullscreen,
  [O.close]: !e.withCircleBackground
}),
children: (0, a.jsx)(m.F, {
  size: 'md',
  color: 'currentColor',
  className: l()(e.innerClassName, O.closeIcon)
})
  });
}

function M(e) {
  let {
className: t,
scrollerRef: n,
...r
  } = e;
  return (0, a.jsx)(I.Tv, {
className: t,
ref: n,
...r
  });
}