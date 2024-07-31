var s = n(735250),
  r = n(470079),
  a = n(481060),
  o = n(377171),
  i = n(689938),
  u = n(484779);
t.Z = r.forwardRef(function(e, t) {
  let {
isInventory: n,
style: r
  } = e;
  return (0, s.jsxs)('div', {
ref: t,
className: u.desktopTooltip,
style: {
  marginTop: n ? 8 : 0,
  ...r
},
children: [
  (0, s.jsx)(a.CircleInformationIcon, {
    size: 'custom',
    className: u.infoIcon,
    height: n ? 16 : 12,
    width: n ? 16 : 12,
    color: n ? o.Z.TEXT_MUTED : o.Z.WHITE
  }),
  (0, s.jsx)(a.Text, {
    color: n ? 'text-muted' : 'always-white',
    variant: n ? 'text-xs/normal' : 'text-xxs/normal',
    children: i.Z.Messages.QUESTS_PROGRESS_WEB_TIP
  })
]
  });
});