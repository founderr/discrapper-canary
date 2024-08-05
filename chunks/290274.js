n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(180335),
  l = n(27144),
  u = n(848966),
  c = n(689938),
  d = n(692184);

function _(e) {
  let {
user: t,
activity: n,
entry: i,
display: _,
className: E,
onSelect: f,
onClose: h,
onRequestOpen: p
  } = e, {
pastActivityEnabled: m
  } = (0, l.z)({
location: 'UserProfileActivityContextMenu'
  }), I = (0, o.Bq)({
activity: n,
user: t
  }), T = (0, u.Z)({
entry: null != i ? i : I,
activity: n,
user: t,
display: _,
onClose: h
  });
  return !m || 0 === T.length || t.bot ? null : (0, r.jsx)(s.Popout, {
align: 'top',
position: 'right',
disablePointerEvents: !1,
onRequestOpen: p,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(s.Menu, {
    navId: 'content-inventory-context',
    onClose: t,
    'aria-label': c.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
    onSelect: f,
    children: (0, r.jsx)(s.MenuGroup, {
      children: T
    })
  });
},
children: e => (0, r.jsx)(s.Clickable, {
  ...e,
  className: a()(d.contextMenu, E),
  children: (0, r.jsx)(s.MoreHorizontalIcon, {
    color: s.tokens.colors.HEADER_PRIMARY,
    size: 'xs'
  })
})
  });
}