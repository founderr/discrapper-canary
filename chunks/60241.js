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
  o = n(43205),
  l = n(652853),
  u = n(228168),
  c = n(689938),
  d = n(692184);

function _(e) {
  let {
src: t,
size: n = 'large',
alt: i,
tooltipText: _,
onClick: E
  } = e, {
profileType: f
  } = (0, l.z)(), h = f === u.y0.FULL_SIZE ? 64 : 48, p = f === u.y0.FULL_SIZE ? 30 : 20, m = 'large' === n ? h : p, I = 'small' === n ? d.smallImage : void 0;
  return null == E ? (0, r.jsx)(s.Tooltip, {
text: _,
children: e => (0, r.jsx)(o.f, {
  ...e,
  src: 'function' == typeof t ? t(m) : t,
  alt: null != i ? i : c.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
  size: m,
  className: a()(I, d.imagePosition),
  constrain: 'width'
})
  }) : (0, r.jsx)(s.Tooltip, {
text: _,
children: e => (0, r.jsx)(s.Clickable, {
  ...e,
  className: a()(d.clickable, d.imagePosition),
  onClick: E,
  children: (0, r.jsx)(o.f, {
    src: 'function' == typeof t ? t(m) : t,
    alt: null != i ? i : c.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
    size: m,
    className: I,
    constrain: 'width'
  })
})
  });
}