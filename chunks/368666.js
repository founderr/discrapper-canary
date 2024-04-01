"use strict";
n.r(t), n.d(t, {
  LiveIndicatorLooks: function() {
    return l
  },
  LiveIndicatorShapes: function() {
    return f
  }
});
var s, l, a = n("735250");
n("470079");
var i = n("803997"),
  r = n.n(i),
  o = n("692547"),
  u = n("26290"),
  d = n("689938"),
  c = n("146894");
(s = l || (l = {})).RED = "RED", s.GRAY = "GRAY";
let E = {
    LARGE: c.liveLarge,
    SMALL: c.liveSmall
  },
  f = {
    [u.BadgeShapes.ROUND]: c.liveShapeRound,
    [u.BadgeShapes.ROUND_LEFT]: c.liveShapeRoundLeft,
    [u.BadgeShapes.ROUND_RIGHT]: c.liveShapeRoundRight,
    [u.BadgeShapes.SQUARE]: ""
  };

function _(e) {
  let {
    className: t,
    style: n,
    shape: s = u.BadgeShapes.ROUND,
    look: l = "RED",
    size: i = E.LARGE
  } = e;
  return "RED" === l ? (0, a.jsx)(u.TextBadge, {
    text: d.default.Messages.LIVE,
    className: r()(t, c.live, i),
    color: o.default.unsafe_rawColors.RED_400.css,
    shape: f[s],
    style: n
  }) : (0, a.jsx)(u.TextBadge, {
    text: d.default.Messages.LIVE,
    className: r()(t, c.live, i, c.grey),
    disableColor: !0,
    shape: f[s],
    style: n
  })
}
_.Looks = l, _.Sizes = E, t.default = _