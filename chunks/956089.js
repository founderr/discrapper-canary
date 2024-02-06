"use strict";
n.r(t), n.d(t, {
  BadgeShapes: function() {
    return a
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
    return _
  },
  CircleBadge: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  o = n.n(r);
n("77078");
var s = n("20606");
n("782340");
var l = n("444036");
let a = {
  ROUND: l.baseShapeRound,
  ROUND_LEFT: l.baseShapeRoundLeft,
  ROUND_RIGHT: l.baseShapeRoundRight,
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
      color: n = s.default.STATUS_DANGER,
      disableColor: r = !1,
      shape: d = a.ROUND,
      className: f,
      style: E,
      ..._
    } = e;
    return (0, i.jsx)("div", {
      className: o(f, l.numberBadge, d),
      style: {
        backgroundColor: r ? void 0 : n,
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
      ..._,
      children: c(t)
    })
  },
  f = e => {
    let {
      text: t,
      className: n,
      color: r = s.default.STATUS_DANGER,
      shape: u = a.ROUND,
      disableColor: c = !1,
      style: d,
      ...f
    } = e;
    return (0, i.jsx)("div", {
      className: o(n, l.textBadge, u),
      style: {
        backgroundColor: c ? void 0 : r,
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
      ...r
    } = e;
    return (0, i.jsx)(f, {
      className: o(l.premiumBadge, n),
      text: t,
      ...r
    })
  },
  _ = e => {
    let {
      icon: t,
      className: n,
      color: r = s.default.STATUS_DANGER,
      shape: u = a.ROUND,
      disableColor: c = !1,
      style: d
    } = e;
    return (0, i.jsx)("div", {
      className: o(n, l.iconBadge, u),
      style: {
        backgroundColor: c ? void 0 : r,
        ...d
      },
      children: (0, i.jsx)(t, {
        className: l.icon
      })
    })
  },
  I = e => {
    let {
      className: t,
      color: n = s.default.INTERACTIVE_ACTIVE,
      shape: r = a.ROUND,
      disableColor: u = !1,
      style: c,
      ...d
    } = e;
    return (0, i.jsx)("div", {
      className: o(t, l.circleBadge, r),
      style: {
        backgroundColor: u ? void 0 : n,
        ...c
      },
      ...d
    })
  }