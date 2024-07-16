var l = n(735250),
  a = n(470079),
  i = n(120356),
  s = n.n(i),
  r = n(974674),
  c = n(438784),
  o = n(481060),
  u = n(806519),
  d = n(3682),
  _ = n(976249);
let f = {},
  E = 1 / 4;

function h(e) {
  let {
height: t,
fillColor: n
  } = e;
  return (0, l.jsx)('div', {
style: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: t / 2,
  backgroundColor: n,
  height: t,
  width: t * d.jR
},
children: (0, l.jsx)(c.b, {
  className: _.dots,
  dotRadius: t * E
})
  });
}

function S(e) {
  let {
isTyping: t,
statusCoords: n,
status: a
  } = e, i = (0, o.useStatusFillColor)(o.StatusTypes.ONLINE);
  return t ? (0, l.jsx)('div', {
style: {
  position: 'absolute',
  top: n.y,
  left: n.x
},
children: (0, l.jsx)(h, {
  height: n.height,
  fillColor: i
})
  }) : null != a ? (0, l.jsx)(o.Status, {
size: n.height,
status: a,
style: {
  position: 'absolute',
  top: n.y,
  left: n.x
}
  }) : null;
}

function g(e) {
  let {
src: t,
size: n
  } = e;
  return (0, l.jsx)('img', {
className: _.circularImage,
src: t,
alt: '',
width: n,
height: n
  });
}
let I = {
  [o.AvatarSizes.SIZE_16]: {
default: u.QS.DIAGONAL_FACEPILE_16,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
status: u.QS.DIAGONAL_FACEPILE_STATUS_16
  },
  [o.AvatarSizes.SIZE_20]: {
default: u.QS.DIAGONAL_FACEPILE_20,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
status: u.QS.DIAGONAL_FACEPILE_STATUS_20
  },
  [o.AvatarSizes.SIZE_24]: {
default: u.QS.DIAGONAL_FACEPILE_24,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
status: u.QS.DIAGONAL_FACEPILE_STATUS_24
  },
  [o.AvatarSizes.SIZE_32]: {
default: u.QS.DIAGONAL_FACEPILE_32,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
status: u.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [o.AvatarSizes.SIZE_40]: {
default: u.QS.DIAGONAL_FACEPILE_32,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
status: u.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [o.AvatarSizes.SIZE_48]: {
default: u.QS.DIAGONAL_FACEPILE_40,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
status: u.QS.DIAGONAL_FACEPILE_STATUS_40
  },
  [o.AvatarSizes.SIZE_56]: {
default: u.QS.DIAGONAL_FACEPILE_56,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
status: u.QS.DIAGONAL_FACEPILE_STATUS_56
  },
  [o.AvatarSizes.SIZE_80]: {
default: u.QS.DIAGONAL_FACEPILE_80,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
status: u.QS.DIAGONAL_FACEPILE_STATUS_80
  },
  [o.AvatarSizes.SIZE_120]: {
default: u.QS.DIAGONAL_FACEPILE_120,
typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
status: u.QS.DIAGONAL_FACEPILE_STATUS_120
  }
};
t.Z = function(e) {
  var t, n, i;
  let {
backSrc: c,
frontSrc: E,
size: h,
isTyping: A,
status: p,
style: m,
className: C,
...L
  } = e, {
size: b
  } = o.AvatarSizeSpecs[h], {
statusCoords: N,
frontAvatarOffsetPx: T,
frontAvatarSizePx: Z,
backAvatarSizePx: y
  } = a.useMemo(() => {
var e;
let t = ''.concat(b, '-').concat(A);
return null !== (e = f[t]) && void 0 !== e ? e : function(e, t, n) {
  let l = o.AvatarSizeSpecs[e],
    a = l.size / (d.z3 + d.o),
    i = a * d.z3,
    s = a * d.o,
    c = {
      statusCoords: (0, r.Vq)(l, o.StatusTypes.ONLINE, !1, t),
      frontAvatarSizePx: i,
      backAvatarSizePx: a,
      frontAvatarOffsetPx: s,
      frontAvatarCenter: s + i / 2
    };
  return f[n] = c, c;
}(h, A, t);
  }, [
b,
A,
h
  ]);
  let x = (t = null != p, n = A, i = h, n ? I[i].typing : t ? I[i].status : I[i].default);
  return (0, l.jsxs)('div', {
style: {
  width: b,
  height: b,
  ...m
},
'aria-label': L['aria-label'],
'aria-hidden': L['aria-hidden'],
className: s()(_.container, C),
children: [
  (0, l.jsxs)(u.ZP, {
    mask: x,
    height: b,
    width: b,
    children: [
      (0, l.jsx)('img', {
        src: c,
        alt: '',
        width: y,
        height: y
      }),
      (0, l.jsx)('div', {
        style: {
          position: 'absolute',
          top: T,
          left: T
        },
        children: (0, l.jsx)(g, {
          src: E,
          size: Z,
          isTyping: A,
          status: p
        })
      })
    ]
  }),
  (0, l.jsx)(S, {
    statusCoords: N,
    status: p,
    isTyping: A
  })
]
  });
};