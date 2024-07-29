var s = n(735250);
n(470079);
var a = n(120356),
  o = n.n(a),
  i = n(481060),
  r = n(689938),
  u = n(665567);
t.Z = function(e) {
  let {
className: t,
color: n = 'header-primary',
textOpacity: a = 0.9,
bgOpacity: l = 0.4
  } = e;
  return (0, s.jsxs)(i.Text, {
variant: 'text-xxs/medium',
color: n,
className: o()(u.promotedTag, t),
children: [
  (0, s.jsx)('span', {
    className: u.promotedTagBackground,
    style: {
      opacity: l
    }
  }),
  (0, s.jsx)('span', {
    style: {
      opacity: a
    },
    children: r.Z.Messages.QUESTS_PROMOTED
  })
]
  });
};