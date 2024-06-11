"use strict";
a.r(t);
var i = a("735250"),
  s = a("470079"),
  n = a("120356"),
  l = a.n(n),
  r = a("974674"),
  d = a("438784"),
  u = a("481060"),
  o = a("806519"),
  c = a("525049"),
  I = a("135775");
let A = {},
  _ = 1 / 4;

function E(e) {
  let {
    height: t,
    fillColor: a
  } = e;
  return (0, i.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: t / 2,
      backgroundColor: a,
      height: t,
      width: t * c.DIAGONAL_FACEPILE_TYPING_WIDTH_TO_HEIGHT_RATIO
    },
    children: (0, i.jsx)(d.Dots, {
      className: I.dots,
      dotRadius: t * _
    })
  })
}

function f(e) {
  let {
    isTyping: t,
    statusCoords: a,
    status: s
  } = e, n = (0, u.useStatusFillColor)(u.StatusTypes.ONLINE);
  return t ? (0, i.jsx)("div", {
    style: {
      position: "absolute",
      top: a.y,
      left: a.x
    },
    children: (0, i.jsx)(E, {
      height: a.height,
      fillColor: n
    })
  }) : null != s ? (0, i.jsx)(u.Status, {
    size: a.height,
    status: s,
    style: {
      position: "absolute",
      top: a.y,
      left: a.x
    }
  }) : null
}

function S(e) {
  let {
    src: t,
    size: a
  } = e;
  return (0, i.jsx)("img", {
    className: I.circularImage,
    src: t,
    alt: "",
    width: a,
    height: a
  })
}
let L = {
  [u.AvatarSizes.SIZE_16]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_16,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_16,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_16
  },
  [u.AvatarSizes.SIZE_20]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_20,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_20,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_20
  },
  [u.AvatarSizes.SIZE_24]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_24,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_24,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_24
  },
  [u.AvatarSizes.SIZE_32]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_32,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_32,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_32
  },
  [u.AvatarSizes.SIZE_40]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_32,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_32,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_32
  },
  [u.AvatarSizes.SIZE_48]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_40,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_40,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_40
  },
  [u.AvatarSizes.SIZE_56]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_56,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_56,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_56
  },
  [u.AvatarSizes.SIZE_80]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_80,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_80,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_80
  },
  [u.AvatarSizes.SIZE_120]: {
    default: o.MaskIDs.DIAGONAL_FACEPILE_120,
    typing: o.MaskIDs.DIAGONAL_FACEPILE_TYPING_120,
    status: o.MaskIDs.DIAGONAL_FACEPILE_STATUS_120
  }
};
t.default = function(e) {
  var t, a, n;
  let {
    backSrc: d,
    frontSrc: _,
    size: E,
    isTyping: h,
    status: g,
    style: p,
    className: D,
    ...N
  } = e, {
    size: T
  } = u.AvatarSizeSpecs[E], {
    statusCoords: F,
    frontAvatarOffsetPx: C,
    frontAvatarSizePx: b,
    backAvatarSizePx: m
  } = s.useMemo(() => {
    var e;
    let t = "".concat(T, "-").concat(h);
    return null !== (e = A[t]) && void 0 !== e ? e : function(e, t, a) {
      let i = u.AvatarSizeSpecs[e],
        s = i.size / (c.DIAGONAL_FACEPILE_AVATAR_PROPORTION + c.DIAGONAL_FACEPILE_MASK_OFFSET),
        n = s * c.DIAGONAL_FACEPILE_AVATAR_PROPORTION,
        l = s * c.DIAGONAL_FACEPILE_MASK_OFFSET,
        d = {
          statusCoords: (0, r.getStatusCoords)(i, u.StatusTypes.ONLINE, !1, t),
          frontAvatarSizePx: n,
          backAvatarSizePx: s,
          frontAvatarOffsetPx: l,
          frontAvatarCenter: l + n / 2
        };
      return A[a] = d, d
    }(E, h, t)
  }, [T, h, E]);
  let G = (t = null != g, a = h, n = E, a ? L[n].typing : t ? L[n].status : L[n].default);
  return (0, i.jsxs)("div", {
    style: {
      width: T,
      height: T,
      ...p
    },
    "aria-label": N["aria-label"],
    "aria-hidden": N["aria-hidden"],
    className: l()(I.container, D),
    children: [(0, i.jsxs)(o.default, {
      mask: G,
      height: T,
      width: T,
      children: [(0, i.jsx)("img", {
        src: d,
        alt: "",
        width: m,
        height: m
      }), (0, i.jsx)("div", {
        style: {
          position: "absolute",
          top: C,
          left: C
        },
        children: (0, i.jsx)(S, {
          src: _,
          size: b,
          isTyping: h,
          status: g
        })
      })]
    }), (0, i.jsx)(f, {
      statusCoords: F,
      status: g,
      isTyping: h
    })]
  })
}