n.d(t, {
  Z: function() {
return d;
  },
  a: function() {
return i;
  }
});
var r, i, a = n(735250);
n(470079);
var s = n(481060),
  o = n(239091),
  l = n(180335),
  u = n(848966),
  c = n(689938);

function d(e) {
  let {
user: t,
activity: n,
entry: r,
display: i,
className: d,
onSelect: _
  } = e, E = (0, l.Bq)({
activity: n,
user: t
  }), f = (0, u.Z)({
entry: null != r ? r : E,
activity: n,
user: t,
display: i
  });
  return 0 === f.length ? null : (0, a.jsx)(s.Popout, {
align: 'top',
position: 'right',
disablePointerEvents: !1,
renderPopout: () => (0, a.jsx)(s.Menu, {
  navId: 'content-inventory-context',
  onClose: o.Zy,
  'aria-label': c.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
  onSelect: _,
  children: (0, a.jsx)(s.MenuGroup, {
    children: f
  })
}),
children: e => (0, a.jsx)('div', {
  ...e,
  className: d,
  children: (0, a.jsx)(s.MoreHorizontalIcon, {
    color: s.tokens.colors.HEADER_PRIMARY,
    size: 'xs'
  })
})
  });
}
(r = i || (i = {})).LIVE = 'live', r.RECENT = 'recent';