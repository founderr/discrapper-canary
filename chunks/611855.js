var s = n(735250);
n(470079);
var r = n(120356),
  a = n.n(r),
  o = n(481060),
  i = n(689938),
  u = n(665567);
t.Z = function(e) {
  let {
className: t,
color: n = 'header-primary',
textOpacity: r = 0.9,
bgOpacity: l = 0.4
  } = e;
  return (0, s.jsxs)(o.Text, {
variant: 'text-xxs/medium',
color: n,
className: a()(u.promotedTag, t),
children: [
  (0, s.jsx)('span', {
    className: u.promotedTagBackground,
    style: {
      opacity: l
    }
  }),
  (0, s.jsx)('span', {
    style: {
      opacity: r
    },
    children: i.Z.Messages.QUESTS_PROMOTED
  })
]
  });
};