var n = a(735250),
  t = a(470079),
  l = a(481060),
  r = a(246364),
  i = a(689938);
s.Z = function(e) {
  let {
    className: s,
    sortOrder: a,
    onSortChange: o
  } = e, c = t.useMemo(() => [{
    value: r.Nw.TIMESTAMP_DESC,
    label: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
  }, {
    value: r.Nw.TIMESTAMP_ASC,
    label: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
  }], []);
  return (0, n.jsx)(l.SingleSelect, {
    className: s,
    onChange: o,
    value: a,
    options: c
  })
}