"use strict";
n.r(t), n.d(t, {
  StatusTypes: function() {
    return d.StatusTypes
  },
  useStatusFillColor: function() {
    return E
  },
  getStatusBackdropOpacity: function() {
    return _
  },
  getStatusBackdropColor: function() {
    return m
  },
  getStatusValues: function() {
    return T
  },
  renderStatusMask: function() {
    return I
  },
  AnimatedStatus: function() {
    return v
  },
  getStatusMask: function() {
    return C
  },
  getStatusSize: function() {
    return A
  },
  Status: function() {
    return R
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("907002"),
  l = n("819855"),
  u = n("449918"),
  c = n("587974"),
  d = n("49111"),
  p = n("52904"),
  h = n("143820");
let f = {
  tension: 600,
  friction: 70
};

function E(e, t) {
  let n = (0, u.useColorValue)(function(e) {
      switch (e) {
        case d.StatusTypes.ONLINE:
          return d.Color.GREEN_360;
        case d.StatusTypes.IDLE:
          return d.Color.YELLOW_300;
        case d.StatusTypes.DND:
          return d.Color.RED_400;
        case d.StatusTypes.STREAMING:
          return d.Color.TWITCH;
        case d.StatusTypes.INVISIBLE:
        case d.StatusTypes.UNKNOWN:
        case d.StatusTypes.OFFLINE:
        default:
          return d.Color.PRIMARY_400
      }
    }(e)).hex,
    i = (0, u.useDesaturatedColorString)(null != t ? t : n);
  return null != i ? i : void 0
}

function _(e, t) {
  return t === p.StatusBackdropColors.WHITE && e === d.StatusTypes.IDLE ? p.StatusBackdropOpacity.HIGH : p.StatusBackdropOpacity.LOW
}

function m(e) {
  return (0, l.isThemeDark)(e) ? p.StatusBackdropColors.BLACK : p.StatusBackdropColors.WHITE
}

function S(e, t, n, i) {
  return "scale(".concat(t, ") translate(").concat(.5625 * e + i, " ").concat(.75 * e + n, ")")
}

function g(e, t, n) {
  return "".concat(.5625 * e + n, "px ").concat(.75 * e + t, "px")
}

function T(e) {
  let {
    size: t,
    status: n,
    isMobile: i,
    isTyping: r,
    topOffset: s = 0,
    leftOffset: a = 0
  } = e, o = s / 8 * t, l = a / 8 * t;
  if (r) return {
    bgRadius: .5 * t,
    bgY: .25 * t + o,
    bgX: 0,
    bgHeight: t,
    bgWidth: t * p.TYPING_WIDTH_RATIO,
    cutoutX: .5 * t + l,
    cutoutY: .75 * t + o,
    cutoutWidth: 0,
    cutoutHeight: 0,
    cutoutRadius: 0,
    polygonScale: S(t, 0, o, l),
    polygonOrigin: g(t, o, l),
    dotY: .75 * t + o,
    dotX: .5 * t + l,
    dotRadius: 0
  };
  switch (n) {
    case d.StatusTypes.ONLINE:
      if (i) return {
        bgRadius: t * p.MOBILE_HEIGHT_RATIO * p.MOBILE_ICON_RADIUS,
        bgY: 0,
        bgX: l,
        bgHeight: t * p.MOBILE_HEIGHT_RATIO,
        bgWidth: t,
        cutoutX: .125 * t + l,
        cutoutY: .25 * t,
        cutoutWidth: .75 * t,
        cutoutHeight: .75 * t,
        cutoutRadius: 0,
        polygonScale: S(t, 0, o, l),
        polygonOrigin: g(t, o, l),
        dotY: 1.25 * t,
        dotX: .5 * t + l,
        dotRadius: .125 * t
      };
      return {
        bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + o, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: 0, polygonScale: S(t, 0, o, l), polygonOrigin: g(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
      };
    case d.StatusTypes.IDLE:
      return {
        bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: -(.125 * t) + l, cutoutY: .125 * t + o, cutoutWidth: .75 * t, cutoutHeight: .75 * t, cutoutRadius: .375 * t, polygonScale: S(t, 0, o, l), polygonOrigin: g(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
      };
    case d.StatusTypes.DND:
      return {
        bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .125 * t + l, cutoutY: .625 * t + o, cutoutWidth: .75 * t, cutoutHeight: .25 * t, cutoutRadius: .125 * t, polygonScale: S(t, 0, o, l), polygonOrigin: g(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
      };
    case d.StatusTypes.STREAMING:
      return {
        bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + o, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: .25 * t, polygonScale: S(t, 1, o, l), polygonOrigin: g(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
      };
    case d.StatusTypes.INVISIBLE:
    case d.StatusTypes.UNKNOWN:
    case d.StatusTypes.OFFLINE:
    default:
      return {
        bgRadius: .5 * t, bgY: .25 * t + o, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .25 * t + l, cutoutY: .5 * t + o, cutoutWidth: .5 * t, cutoutHeight: .5 * t, cutoutRadius: .25 * t, polygonScale: S(t, 0, o, l), polygonOrigin: g(t, o, l), dotY: .75 * t + o, dotX: .5 * t + l, dotRadius: 0
      }
  }
}

function I(e, t, n) {
  var r;
  let {
    bgRadius: s,
    bgY: a,
    bgX: l,
    bgHeight: u,
    bgWidth: c,
    cutoutX: d,
    cutoutY: p,
    cutoutWidth: h,
    cutoutHeight: f,
    cutoutRadius: E,
    polygonScale: _,
    polygonOrigin: m,
    dotY: S,
    dotX: g,
    dotRadius: T
  } = e;
  return (0, i.jsxs)("mask", {
    id: n,
    children: [(0, i.jsx)(o.animated.rect, {
      x: l,
      y: a,
      width: c,
      height: u,
      rx: s,
      ry: s,
      fill: "white"
    }), (0, i.jsx)(o.animated.rect, {
      x: d,
      y: p,
      width: h,
      height: f,
      rx: E,
      ry: E,
      fill: "black"
    }), (0, i.jsx)(o.animated.polygon, {
      points: (r = t, "-".concat(.216506 * r, ",-").concat(.25 * r, " ").concat(.216506 * r, ",0 -").concat(.216506 * r, ",").concat(.25 * r)),
      fill: "black",
      transform: _,
      style: {
        transformOrigin: m
      }
    }), (0, i.jsx)(o.animated.circle, {
      fill: "black",
      cx: g,
      cy: S,
      r: T
    })]
  })
}

function v(e) {
  let {
    status: t,
    isMobile: n = !1,
    size: s = 8,
    color: l,
    className: u,
    style: c
  } = e, _ = r.useId(), m = t === d.StatusTypes.ONLINE && n, S = r.useMemo(() => T({
    size: s,
    status: t,
    isMobile: m
  }), [s, t, m]), g = (0, o.useSpring)({
    config: f,
    to: S
  }), v = E(t, l), [{
    fill: C
  }] = (0, o.useSpring)({
    config: f,
    fill: v
  }, [v]), A = Math.ceil(s * p.MOBILE_HEIGHT_RATIO);
  return (0, i.jsxs)("svg", {
    width: s,
    height: A,
    viewBox: "0 0 ".concat(s, " ").concat(A),
    className: a(h.mask, u),
    style: c,
    children: [I(g, s, _), (0, i.jsx)(o.animated.rect, {
      x: 0,
      y: 0,
      width: s,
      height: A,
      fill: C,
      mask: "url(#".concat(_, ")")
    })]
  })
}

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (n) return c.default.Masks.STATUS_TYPING;
  switch (e) {
    case d.StatusTypes.IDLE:
      return c.default.Masks.STATUS_IDLE;
    case d.StatusTypes.DND:
      return c.default.Masks.STATUS_DND;
    case d.StatusTypes.STREAMING:
      return c.default.Masks.STATUS_STREAMING;
    case d.StatusTypes.INVISIBLE:
    case d.StatusTypes.UNKNOWN:
    case d.StatusTypes.OFFLINE:
      return c.default.Masks.STATUS_OFFLINE;
    case d.StatusTypes.ONLINE:
    default:
      if (t) return c.default.Masks.STATUS_ONLINE_MOBILE;
      return c.default.Masks.STATUS_ONLINE
  }
}

function A(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return t === d.StatusTypes.ONLINE && n && !i ? {
    width: e,
    height: e * p.MOBILE_HEIGHT_RATIO
  } : {
    width: i ? e * p.TYPING_WIDTH_RATIO : e,
    height: e
  }
}

function R(e) {
  let {
    status: t,
    isMobile: n = !1,
    size: r = 8,
    className: s,
    style: o,
    color: l
  } = e, u = t === d.StatusTypes.ONLINE && n, p = E(t, l);
  return (0, i.jsx)(c.default, {
    mask: C(t, u),
    className: a(h.mask, s),
    style: o,
    ...A(r, t, u),
    children: (0, i.jsx)("div", {
      style: {
        backgroundColor: p
      },
      className: h.status
    })
  })
}