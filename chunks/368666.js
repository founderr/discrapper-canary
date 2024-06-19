n.d(t, {
  eE: function() {
    return _
  },
  jZ: function() {
    return i
  }
});
var s, i, l = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  o = n(692547),
  c = n(481060),
  u = n(689938),
  d = n(733564);
(s = i || (i = {})).RED = "RED", s.GRAY = "GRAY";
let E = {
    LARGE: d.liveLarge,
    SMALL: d.liveSmall
  },
  _ = {
    [c.BadgeShapes.ROUND]: d.liveShapeRound,
    [c.BadgeShapes.ROUND_LEFT]: d.liveShapeRoundLeft,
    [c.BadgeShapes.ROUND_RIGHT]: d.liveShapeRoundRight,
    [c.BadgeShapes.SQUARE]: ""
  };

function I(e) {
  let {
    className: t,
    style: n,
    shape: s = c.BadgeShapes.ROUND,
    look: i = "RED",
    size: a = E.LARGE
  } = e;
  return "RED" === i ? (0, l.jsx)(c.TextBadge, {
    text: u.Z.Messages.LIVE,
    className: r()(t, d.live, a),
    color: o.Z.unsafe_rawColors.RED_400.css,
    shape: _[s],
    style: n
  }) : (0, l.jsx)(c.TextBadge, {
    text: u.Z.Messages.LIVE,
    className: r()(t, d.live, a, d.grey),
    disableColor: !0,
    shape: _[s],
    style: n
  })
}
I.Looks = i, I.Sizes = E, t.ZP = I