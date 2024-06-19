var a = i(735250),
  n = i(470079),
  l = i(120356),
  s = i.n(l),
  r = i(974674),
  d = i(438784),
  u = i(481060),
  c = i(806519),
  o = i(525049),
  A = i(542398);
let I = {},
  S = 1 / 4;

function E(e) {
  let {
    height: t,
    fillColor: i
  } = e;
  return (0, a.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: t / 2,
      backgroundColor: i,
      height: t,
      width: t * o.jR
    },
    children: (0, a.jsx)(d.b, {
      className: A.dots,
      dotRadius: t * S
    })
  })
}

function _(e) {
  let {
    isTyping: t,
    statusCoords: i,
    status: n
  } = e, l = (0, u.useStatusFillColor)(u.StatusTypes.ONLINE);
  return t ? (0, a.jsx)("div", {
    style: {
      position: "absolute",
      top: i.y,
      left: i.x
    },
    children: (0, a.jsx)(E, {
      height: i.height,
      fillColor: l
    })
  }) : null != n ? (0, a.jsx)(u.Status, {
    size: i.height,
    status: n,
    style: {
      position: "absolute",
      top: i.y,
      left: i.x
    }
  }) : null
}

function g(e) {
  let {
    src: t,
    size: i
  } = e;
  return (0, a.jsx)("img", {
    className: A.circularImage,
    src: t,
    alt: "",
    width: i,
    height: i
  })
}
let L = {
  [u.AvatarSizes.SIZE_16]: {
    default: c.QS.DIAGONAL_FACEPILE_16,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_16,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_16
  },
  [u.AvatarSizes.SIZE_20]: {
    default: c.QS.DIAGONAL_FACEPILE_20,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_20,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_20
  },
  [u.AvatarSizes.SIZE_24]: {
    default: c.QS.DIAGONAL_FACEPILE_24,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_24,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_24
  },
  [u.AvatarSizes.SIZE_32]: {
    default: c.QS.DIAGONAL_FACEPILE_32,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [u.AvatarSizes.SIZE_40]: {
    default: c.QS.DIAGONAL_FACEPILE_32,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [u.AvatarSizes.SIZE_48]: {
    default: c.QS.DIAGONAL_FACEPILE_40,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_40,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_40
  },
  [u.AvatarSizes.SIZE_56]: {
    default: c.QS.DIAGONAL_FACEPILE_56,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_56,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_56
  },
  [u.AvatarSizes.SIZE_80]: {
    default: c.QS.DIAGONAL_FACEPILE_80,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_80,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_80
  },
  [u.AvatarSizes.SIZE_120]: {
    default: c.QS.DIAGONAL_FACEPILE_120,
    typing: c.QS.DIAGONAL_FACEPILE_TYPING_120,
    status: c.QS.DIAGONAL_FACEPILE_STATUS_120
  }
};
t.Z = function(e) {
  var t, i, l;
  let {
    backSrc: d,
    frontSrc: S,
    size: E,
    isTyping: f,
    status: h,
    style: p,
    className: N,
    ...b
  } = e, {
    size: T
  } = u.AvatarSizeSpecs[E], {
    statusCoords: x,
    frontAvatarOffsetPx: C,
    frontAvatarSizePx: F,
    backAvatarSizePx: m
  } = n.useMemo(() => {
    var e;
    let t = "".concat(T, "-").concat(f);
    return null !== (e = I[t]) && void 0 !== e ? e : function(e, t, i) {
      let a = u.AvatarSizeSpecs[e],
        n = a.size / (o.z3 + o.o),
        l = n * o.z3,
        s = n * o.o,
        d = {
          statusCoords: (0, r.Vq)(a, u.StatusTypes.ONLINE, !1, t),
          frontAvatarSizePx: l,
          backAvatarSizePx: n,
          frontAvatarOffsetPx: s,
          frontAvatarCenter: s + l / 2
        };
      return I[i] = d, d
    }(E, f, t)
  }, [T, f, E]);
  let y = (t = null != h, i = f, l = E, i ? L[l].typing : t ? L[l].status : L[l].default);
  return (0, a.jsxs)("div", {
    style: {
      width: T,
      height: T,
      ...p
    },
    "aria-label": b["aria-label"],
    "aria-hidden": b["aria-hidden"],
    className: s()(A.container, N),
    children: [(0, a.jsxs)(c.ZP, {
      mask: y,
      height: T,
      width: T,
      children: [(0, a.jsx)("img", {
        src: d,
        alt: "",
        width: m,
        height: m
      }), (0, a.jsx)("div", {
        style: {
          position: "absolute",
          top: C,
          left: C
        },
        children: (0, a.jsx)(g, {
          src: S,
          size: F,
          isTyping: f,
          status: h
        })
      })]
    }), (0, a.jsx)(_, {
      statusCoords: x,
      status: h,
      isTyping: f
    })]
  })
}