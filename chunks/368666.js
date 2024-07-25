n.d(t, {
  eE: function() {
return E;
  },
  jZ: function() {
return a;
  }
});
var i, a, s = n(735250);
n(470079);
var r = n(120356),
  l = n.n(r),
  o = n(692547),
  c = n(481060),
  u = n(689938),
  d = n(404422);
(i = a || (a = {})).RED = 'RED', i.GRAY = 'GRAY';
let _ = {
LARGE: d.liveLarge,
SMALL: d.liveSmall
  },
  E = {
[c.BadgeShapes.ROUND]: d.liveShapeRound,
[c.BadgeShapes.ROUND_LEFT]: d.liveShapeRoundLeft,
[c.BadgeShapes.ROUND_RIGHT]: d.liveShapeRoundRight,
[c.BadgeShapes.SQUARE]: ''
  };

function I(e) {
  let {
className: t,
style: n,
shape: i = c.BadgeShapes.ROUND,
look: a = 'RED',
size: r = _.LARGE
  } = e;
  return 'RED' === a ? (0, s.jsx)(c.TextBadge, {
text: u.Z.Messages.LIVE,
className: l()(t, d.live, r),
color: o.Z.unsafe_rawColors.RED_400.css,
shape: E[i],
style: n
  }) : (0, s.jsx)(c.TextBadge, {
text: u.Z.Messages.LIVE,
className: l()(t, d.live, r, d.grey),
disableColor: !0,
shape: E[i],
style: n
  });
}
I.Looks = a, I.Sizes = _, t.ZP = I;