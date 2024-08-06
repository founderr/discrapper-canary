n.d(t, {
  M: function() {
return f;
  }
});
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(481060),
  o = n(285050),
  c = n(981631),
  u = n(689938),
  d = n(511811),
  h = n(452670),
  p = n(275024);

function _() {
  return (0, i.jsx)('div', {
className: a()(h.row, h.rowGuildName),
children: (0, i.jsxs)(s.Text, {
  variant: 'text-sm/semibold',
  className: a()(h.guildNameText, h.guildNameTextLimitedSize, d.tooltipText),
  children: [
    (0, i.jsx)(s.CheckmarkSmallBoldIcon, {
      color: 'currentColor',
      size: 'sm'
    }),
    u.Z.Messages.USER_PROFILE_REACTION_SENT
  ]
})
  });
}
let f = l.memo(function(e) {
  let {
'aria-label': t = !1,
children: n
  } = e, r = function() {
let {
  reactSent: e,
  clearReactSent: t
} = (0, o.e)();
return l.useEffect(() => {
  if (e) {
    let e = setTimeout(() => {
      t();
    }, 1500);
    return () => {
      t(), clearTimeout(e);
    };
  }
}, [
  e,
  t
]), e;
  }();
  return (0, i.jsx)(s.Tooltip, {
forceOpen: r,
color: s.TooltipColors.BRAND,
hideOnClick: !0,
spacing: 20,
position: 'right',
align: 'center',
text: (0, i.jsx)(_, {}),
'aria-label': t,
tooltipClassName: p.listItemTooltip,
children: e => (0, i.jsx)('div', {
  ...e,
  onMouseEnter: c.dG4,
  onMouseLeave: c.dG4,
  children: n
})
  });
});