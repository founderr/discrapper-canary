n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(634241);

function l(e) {
  let {
onClick: t,
Icon: n,
'aria-label': l
  } = e, r = (0, a.useToken)(a.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), o = (0, i.jsx)(n, {
color: r.hex(),
size: 'custom',
width: 16,
height: 16
  });
  return null == t ? (0, i.jsx)('div', {
className: s.container,
'aria-label': l,
children: o
  }) : (0, i.jsx)(a.Tooltip, {
text: l,
children: e => (0, i.jsx)(a.Clickable, {
  className: s.container,
  ...e,
  onClick: t,
  children: o
})
  });
}