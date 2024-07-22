var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(974674),
  o = n(438784),
  c = n(481060),
  d = n(806519),
  u = n(3682),
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
  width: t * u.jR
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
let C = {
  [c.AvatarSizes.SIZE_16]: {
default: d.QS.DIAGONAL_FACEPILE_16,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_16,
status: d.QS.DIAGONAL_FACEPILE_STATUS_16
  },
  [c.AvatarSizes.SIZE_20]: {
default: d.QS.DIAGONAL_FACEPILE_20,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_20,
status: d.QS.DIAGONAL_FACEPILE_STATUS_20
  },
  [c.AvatarSizes.SIZE_24]: {
default: d.QS.DIAGONAL_FACEPILE_24,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_24,
status: d.QS.DIAGONAL_FACEPILE_STATUS_24
  },
  [c.AvatarSizes.SIZE_32]: {
default: d.QS.DIAGONAL_FACEPILE_32,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_32,
status: d.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [c.AvatarSizes.SIZE_40]: {
default: d.QS.DIAGONAL_FACEPILE_32,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_32,
status: d.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [c.AvatarSizes.SIZE_48]: {
default: d.QS.DIAGONAL_FACEPILE_40,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_40,
status: d.QS.DIAGONAL_FACEPILE_STATUS_40
  },
  [c.AvatarSizes.SIZE_56]: {
default: d.QS.DIAGONAL_FACEPILE_56,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_56,
status: d.QS.DIAGONAL_FACEPILE_STATUS_56
  },
  [c.AvatarSizes.SIZE_80]: {
default: d.QS.DIAGONAL_FACEPILE_80,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_80,
status: d.QS.DIAGONAL_FACEPILE_STATUS_80
  },
  [c.AvatarSizes.SIZE_120]: {
default: d.QS.DIAGONAL_FACEPILE_120,
typing: d.QS.DIAGONAL_FACEPILE_TYPING_120,
status: d.QS.DIAGONAL_FACEPILE_STATUS_120
  }
};
t.Z = function(e) {
  var t, n, s;
  let {
backSrc: o,
frontSrc: m,
size: _,
isTyping: g,
status: I,
style: x,
className: T,
...v
  } = e, {
size: N
  } = c.AvatarSizeSpecs[_], {
statusCoords: S,
frontAvatarOffsetPx: Z,
frontAvatarSizePx: A,
backAvatarSizePx: M
  } = a.useMemo(() => {
var e;
let t = ''.concat(N, '-').concat(g);
return null !== (e = p[t]) && void 0 !== e ? e : function(e, t, n) {
  let i = c.AvatarSizeSpecs[e],
    a = i.size / (u.z3 + u.o),
    s = a * u.z3,
    l = a * u.o,
    o = {
      statusCoords: (0, r.Vq)(i, c.StatusTypes.ONLINE, !1, t),
      frontAvatarSizePx: s,
      backAvatarSizePx: a,
      frontAvatarOffsetPx: l,
      frontAvatarCenter: l + s / 2
    };
  return p[n] = o, o;
}(_, g, t);
  }, [
N,
g,
_
  ]);
  let b = (t = null != I, n = g, s = _, n ? C[s].typing : t ? C[s].status : C[s].default);
  return (0, i.jsxs)('div', {
style: {
  width: N,
  height: N,
  ...x
},
'aria-label': v['aria-label'],
'aria-hidden': v['aria-hidden'],
className: l()(h.container, T),
children: [
  (0, i.jsxs)(d.ZP, {
    mask: b,
    height: N,
    width: N,
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
          isTyping: g,
          status: I
        })
      })
    ]
  }),
  (0, i.jsx)(f, {
    statusCoords: S,
    status: I,
    isTyping: g
  })
]
  });
};