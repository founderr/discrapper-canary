"use strict";
n.r(t), n.d(t, {
  BadgeShapes: function() {
    return u
  },
  getBadgeWidthForValue: function() {
    return o
  },
  getBadgeCountString: function() {
    return c
  },
  NumberBadge: function() {
    return d
  },
  TextBadge: function() {
    return f
  },
  PremiumBadge: function() {
    return E
  },
  IconBadge: function() {
    return h
  },
  CircleBadge: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  r = n.n(a);
n("77078");
var s = n("20606");
n("782340");
var i = n("227940");
let u = {
  ROUND: i.baseShapeRound,
  ROUND_LEFT: i.baseShapeRoundLeft,
  ROUND_RIGHT: i.baseShapeRoundRight,
  SQUARE: ""
};

function o(e) {
  return e < 10 ? 16 : e < 100 ? 22 : 30
}

function c(e) {
  return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
}
let d = e => {
    let {
      count: t,
      color: n = s.default.STATUS_DANGER,
      disableColor: a = !1,
      shape: d = u.ROUND,
      className: f,
      style: E,
      ...h
    } = e;
    return (0, l.jsx)("div", {
      className: r(f, i.numberBadge, d),
      style: {
        backgroundColor: a ? void 0 : n,
        width: o(t),
        paddingRight: function(e) {
          switch (e) {
            case 1:
            case 4:
            case 6:
              return 1;
            default:
              return
          }
        }(t),
        ...E
      },
      ...h,
      children: c(t)
    })
  },
  f = e => {
    let {
      text: t,
      className: n,
      color: a = s.default.STATUS_DANGER,
      shape: o = u.ROUND,
      disableColor: c = !1,
      style: d,
      ...f
    } = e;
    return (0, l.jsx)("div", {
      className: r(n, i.textBadge, o),
      style: {
        backgroundColor: c ? void 0 : a,
        ...d
      },
      ...f,
      children: t
    })
  },
  E = e => {
    let {
      text: t,
      className: n,
      ...a
    } = e;
    return (0, l.jsx)(f, {
      className: r(i.premiumBadge, n),
      text: t,
      ...a
    })
  },
  h = e => {
    let {
      icon: t,
      className: n,
      color: a = s.default.STATUS_DANGER,
      shape: o = u.ROUND,
      disableColor: c = !1,
      style: d
    } = e;
    return (0, l.jsx)("div", {
      className: r(n, i.iconBadge, o),
      style: {
        backgroundColor: c ? void 0 : a,
        ...d
      },
      children: (0, l.jsx)(t, {
        className: i.icon
      })
    })
  },
  g = e => {
    let {
      className: t,
      color: n = s.default.INTERACTIVE_ACTIVE,
      shape: a = u.ROUND,
      disableColor: o = !1,
      style: c,
      ...d
    } = e;
    return (0, l.jsx)("div", {
      className: r(t, i.circleBadge, a),
      style: {
        backgroundColor: o ? void 0 : n,
        ...c
      },
      ...d
    })
  }