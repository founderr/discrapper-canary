n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(27144),
  l = n(848966),
  u = n(689938),
  c = n(692184);

function d(e) {
  let {
user: t,
activity: n,
entry: i,
display: d,
className: _,
onSelect: E,
onClose: f,
onRequestOpen: h
  } = e, {
pastActivityEnabled: p
  } = (0, o.z)({
location: 'UserProfileActivityContextMenu'
  }), m = (0, l.Z)({
entry: i,
activity: n,
user: t,
display: d,
onClose: f
  });
  return !p || 0 === m.length || t.bot ? null : (0, r.jsx)(s.Popout, {
align: 'top',
position: 'right',
disablePointerEvents: !1,
onRequestOpen: h,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(s.Menu, {
    navId: 'content-inventory-context',
    onClose: t,
    'aria-label': u.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
    onSelect: E,
    children: (0, r.jsx)(s.MenuGroup, {
      children: m
    })
  });
},
children: e => (0, r.jsx)(s.Clickable, {
  ...e,
  className: a()(c.contextMenu, _),
  children: (0, r.jsx)(s.MoreHorizontalIcon, {
    color: s.tokens.colors.HEADER_PRIMARY,
    size: 'xs'
  })
})
  });
}