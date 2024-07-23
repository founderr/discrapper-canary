s.d(t, {
  U: function() {
return c;
  }
});
var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  o = s(481060),
  i = s(689938),
  l = s(613616);
let c = e => {
  let {
className: t,
isPartiallyPurchased: s
  } = e;
  return s ? (0, n.jsx)(o.Tooltip, {
tooltipClassName: l.partiallyOwnedDisclaimer,
position: 'top',
align: 'left',
text: i.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
children: e => (0, n.jsxs)('div', {
  className: a()(l.partialOwnStateContainer, t),
  ...e,
  children: [
    (0, n.jsx)('span', {
      className: l.iconWrapper,
      children: (0, n.jsx)(o.CircleInformationIcon, {
        size: 'md',
        color: 'currentColor',
        className: l.infoIcon
      })
    }),
    (0, n.jsx)(o.Text, {
      variant: 'text-md/semibold',
      children: i.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
    })
  ]
})
  }) : (0, n.jsx)(o.Text, {
variant: 'text-md/semibold',
className: t,
children: i.Z.Messages.COLLECTIBLES_ALREADY_OWNED
  });
};