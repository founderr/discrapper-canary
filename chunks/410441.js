n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(423875),
  s = n(481060),
  l = n(908841),
  r = n(689938),
  o = n(634241);
let c = {
  [a.p.PROVIDER_UNSPECIFIED]: null,
  [a.p.SPOTIFY]: {
getLabel: () => r.Z.Messages.SPOTIFY,
Icon: l.Z
  }
};

function d(e) {
  var t;
  let {
onClick: n,
provider: a,
'aria-label': l
  } = e, r = (0, s.useToken)(s.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), {
Icon: d,
getLabel: u
  } = null !== (t = c[a]) && void 0 !== t ? t : {};
  if (null == d)
return null;
  let h = null != l ? l : null == u ? void 0 : u(),
p = (0, i.jsx)(d, {
  color: r.hex(),
  width: 16,
  height: 16
});
  return null == n ? (0, i.jsx)('div', {
className: o.container,
'aria-label': h,
children: p
  }) : (0, i.jsx)(s.Tooltip, {
text: h,
children: e => (0, i.jsx)(s.Clickable, {
  className: o.container,
  ...e,
  onClick: n,
  children: p
})
  });
}