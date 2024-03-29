"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("438784"),
  s = n("481060"),
  i = n("806519"),
  r = n("525049"),
  o = n("486101");
let u = {},
  d = 1 / 3.5;

function c(e) {
  let {
    height: t,
    fillColor: n
  } = e;
  return (0, l.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: t / 2,
      backgroundColor: n,
      height: t,
      width: t * r.DIAGONAL_FACEPILE_TYPING_WIDTH_TO_HEIGHT_RATIO
    },
    children: (0, l.jsx)(a.Dots, {
      dotRadius: t * d
    })
  })
}

function f(e) {
  let {
    isTyping: t,
    statusHeightPx: n,
    statusCenterOffset: a,
    status: i
  } = e, o = (0, s.useStatusFillColor)(s.StatusTypes.ONLINE);
  if (t) {
    let e = n * r.DIAGONAL_FACEPILE_TYPING_WIDTH_TO_HEIGHT_RATIO;
    return (0, l.jsx)("div", {
      style: {
        position: "absolute",
        top: a - n / 2,
        left: a - e / 2
      },
      children: (0, l.jsx)(c, {
        height: n,
        fillColor: o
      })
    })
  }
  if (null != i) {
    let e = a - n / 2;
    return (0, l.jsx)(s.Status, {
      size: n,
      status: i,
      style: {
        position: "absolute",
        top: e,
        left: e
      }
    })
  }
  return null
}

function h(e) {
  let {
    src: t,
    size: n,
    isTyping: a,
    status: s
  } = e, r = (0, l.jsx)("img", {
    className: o.circularImage,
    src: t,
    alt: "",
    width: n,
    height: n
  });
  return a ? (0, l.jsx)(i.default, {
    mask: i.MaskIDs.DIAGONAL_FACEPILE_TYPING_CUTOUT,
    height: n,
    width: n,
    children: r
  }) : null != s ? (0, l.jsx)(i.default, {
    mask: i.MaskIDs.DIAGONAL_FACEPILE_STATUS_CUTOUT,
    height: n,
    width: n,
    children: r
  }) : r
}
t.default = function(e) {
  var t;
  let {
    backSrc: n,
    frontSrc: a,
    size: s,
    status: d,
    isTyping: c,
    style: C,
    ...p
  } = e, {
    statusCenter: m,
    statusHeightPx: g,
    frontAvatarOffsetPx: E,
    frontAvatarSizePx: S,
    backAvatarSizePx: _
  } = null !== (t = u[s]) && void 0 !== t ? t : function(e) {
    let t = e / (r.DIAGONAL_FACEPILE_AVATAR_PROPORTION + r.DIAGONAL_FACEPILE_MASK_OFFSET),
      n = t * r.DIAGONAL_FACEPILE_AVATAR_PROPORTION,
      l = t * r.DIAGONAL_FACEPILE_MASK_OFFSET,
      a = r.DIAGONAL_FACEPILE_STATUS_TO_AVATAR_RATIO * n,
      s = l + n / 2,
      i = {
        statusCenter: s + n * r.DIAGONAL_FACEPILE_MASK_STATUS_OFFSET,
        statusHeightPx: a,
        frontAvatarSizePx: n,
        backAvatarSizePx: t,
        frontAvatarOffsetPx: l,
        frontAvatarCenter: s
      };
    return u[e] = i, i
  }(s);
  return (0, l.jsxs)("div", {
    "aria-label": p["aria-label"],
    "aria-hidden": p["aria-hidden"],
    className: o.container,
    style: {
      width: s,
      height: s,
      ...C
    },
    children: [(0, l.jsx)(i.default, {
      height: _,
      width: _,
      mask: i.MaskIDs.DIAGONAL_FACEPILE_BACK_AVATAR_CUTOUT,
      children: (0, l.jsx)("img", {
        className: o.circularImage,
        src: n,
        alt: "",
        width: _,
        height: _
      })
    }), (0, l.jsx)("div", {
      style: {
        position: "absolute",
        top: E,
        left: E
      },
      children: (0, l.jsx)(h, {
        src: a,
        size: S,
        isTyping: c,
        status: d
      })
    }), (0, l.jsx)(f, {
      status: d,
      isTyping: c,
      statusHeightPx: g,
      statusCenterOffset: m
    })]
  })
}