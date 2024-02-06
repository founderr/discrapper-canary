"use strict";
n.r(t), n.d(t, {
  BadgeShapes: function() {
    return s
  },
  getBadgeWidthForValue: function() {
    return u
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
    return p
  },
  CircleBadge: function() {
    return h
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l);
n("77078");
var o = n("20606");
n("782340");
var a = n("444036");
let s = {
  ROUND: a.baseShapeRound,
  ROUND_LEFT: a.baseShapeRoundLeft,
  ROUND_RIGHT: a.baseShapeRoundRight,
  SQUARE: ""
};

function u(e) {
  return e < 10 ? 16 : e < 100 ? 22 : 30
}

function c(e) {
  return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
}
let d = e => {
    let {
      count: t,
      color: n = o.default.STATUS_DANGER,
      disableColor: l = !1,
      shape: d = s.ROUND,
      className: f,
      style: E,
      ...p
    } = e;
    return (0, i.jsx)("div", {
      className: r(f, a.numberBadge, d),
      style: {
        backgroundColor: l ? void 0 : n,
        width: u(t),
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
      ...p,
      children: c(t)
    })
  },
  f = e => {
    let {
      text: t,
      className: n,
      color: l = o.default.STATUS_DANGER,
      shape: u = s.ROUND,
      disableColor: c = !1,
      style: d,
      ...f
    } = e;
    return (0, i.jsx)("div", {
      className: r(n, a.textBadge, u),
      style: {
        backgroundColor: c ? void 0 : l,
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
      ...l
    } = e;
    return (0, i.jsx)(f, {
      className: r(a.premiumBadge, n),
      text: t,
      ...l
    })
  },
  p = e => {
    let {
      icon: t,
      className: n,
      color: l = o.default.STATUS_DANGER,
      shape: u = s.ROUND,
      disableColor: c = !1,
      style: d
    } = e;
    return (0, i.jsx)("div", {
      className: r(n, a.iconBadge, u),
      style: {
        backgroundColor: c ? void 0 : l,
        ...d
      },
      children: (0, i.jsx)(t, {
        className: a.icon
      })
    })
  },
  h = e => {
    let {
      className: t,
      color: n = o.default.INTERACTIVE_ACTIVE,
      shape: l = s.ROUND,
      disableColor: u = !1,
      style: c,
      ...d
    } = e;
    return (0, i.jsx)("div", {
      className: r(t, a.circleBadge, l),
      style: {
        backgroundColor: u ? void 0 : n,
        ...c
      },
      ...d
    })
  }