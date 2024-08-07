var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(974674),
  o = n(438784),
  c = n(481060),
  u = n(686546),
  d = n(3682),
  h = n(976249);
let p = {},
  m = 1 / 4;

function _(e) {
  let {
height: t,
fillColor: n
  } = e;
  return (0, i.jsx)('div', {
style: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: t / 2,
  backgroundColor: n,
  height: t,
  width: t * d.jR
},
children: (0, i.jsx)(o.b, {
  className: h.dots,
  dotRadius: t * m
})
  });
}

function f(e) {
  let {
isTyping: t,
statusCoords: n,
status: a
  } = e, s = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
  return t ? (0, i.jsx)('div', {
style: {
  position: 'absolute',
  top: n.y,
  left: n.x
},
children: (0, i.jsx)(_, {
  height: n.height,
  fillColor: s
})
  }) : null != a ? (0, i.jsx)(c.Status, {
size: n.height,
status: a,
style: {
  position: 'absolute',
  top: n.y,
  left: n.x
}
  }) : null;
}

function E(e) {
  let {
src: t,
size: n
  } = e;
  return (0, i.jsx)('img', {
className: h.circularImage,
src: t,
alt: '',
width: n,
height: n
  });
}
let g = {
  [c.AvatarSizes.SIZE_16]: {
default: u.QS.DIAGONAL_FACEPILE_16,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
status: u.QS.DIAGONAL_FACEPILE_STATUS_16
  },
  [c.AvatarSizes.SIZE_20]: {
default: u.QS.DIAGONAL_FACEPILE_20,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
status: u.QS.DIAGONAL_FACEPILE_STATUS_20
  },
  [c.AvatarSizes.SIZE_24]: {
default: u.QS.DIAGONAL_FACEPILE_24,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
status: u.QS.DIAGONAL_FACEPILE_STATUS_24
  },
  [c.AvatarSizes.SIZE_32]: {
default: u.QS.DIAGONAL_FACEPILE_32,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
status: u.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [c.AvatarSizes.SIZE_40]: {
default: u.QS.DIAGONAL_FACEPILE_32,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
status: u.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [c.AvatarSizes.SIZE_48]: {
default: u.QS.DIAGONAL_FACEPILE_40,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
status: u.QS.DIAGONAL_FACEPILE_STATUS_40
  },
  [c.AvatarSizes.SIZE_56]: {
default: u.QS.DIAGONAL_FACEPILE_56,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
status: u.QS.DIAGONAL_FACEPILE_STATUS_56
  },
  [c.AvatarSizes.SIZE_80]: {
default: u.QS.DIAGONAL_FACEPILE_80,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
status: u.QS.DIAGONAL_FACEPILE_STATUS_80
  },
  [c.AvatarSizes.SIZE_120]: {
default: u.QS.DIAGONAL_FACEPILE_120,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
status: u.QS.DIAGONAL_FACEPILE_STATUS_120
  }
};
t.Z = function(e) {
  var t, n, s;
  let {
backSrc: o,
frontSrc: m,
size: _,
isTyping: C,
status: I,
style: x,
className: T,
...N
  } = e, {
size: v
  } = c.AvatarSizeSpecs[_], {
statusCoords: S,
frontAvatarOffsetPx: Z,
frontAvatarSizePx: A,
backAvatarSizePx: M
  } = a.useMemo(() => {
var e;
let t = ''.concat(v, '-').concat(C);
return null !== (e = p[t]) && void 0 !== e ? e : function(e, t, n) {
  let i = c.AvatarSizeSpecs[e],
    a = i.size / (d.z3 + d.o),
    s = a * d.z3,
    l = a * d.o,
    o = {
      statusCoords: (0, r.Vq)(i, c.StatusTypes.ONLINE, !1, t),
      frontAvatarSizePx: s,
      backAvatarSizePx: a,
      frontAvatarOffsetPx: l,
      frontAvatarCenter: l + s / 2
    };
  return p[n] = o, o;
}(_, C, t);
  }, [
v,
C,
_
  ]);
  let b = (t = null != I, n = C, s = _, n ? g[s].typing : t ? g[s].status : g[s].default);
  return (0, i.jsxs)('div', {
style: {
  width: v,
  height: v,
  ...x
},
'aria-label': N['aria-label'],
'aria-hidden': N['aria-hidden'],
className: l()(h.container, T),
children: [
  (0, i.jsxs)(u.ZP, {
    mask: b,
    height: v,
    width: v,
    children: [
      (0, i.jsx)('img', {
        src: o,
        alt: '',
        width: M,
        height: M
      }),
      (0, i.jsx)('div', {
        style: {
          position: 'absolute',
          top: Z,
          left: Z
        },
        children: (0, i.jsx)(E, {
          src: m,
          size: A,
          isTyping: C,
          status: I
        })
      })
    ]
  }),
  (0, i.jsx)(f, {
    statusCoords: S,
    status: I,
    isTyping: C
  })
]
  });
};