n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(692184);

function s(e) {
  let {
name: t,
lineClamp: n,
onClick: s
  } = e;
  return null == t ? null : null != s ? (0, r.jsx)(i.Clickable, {
onClick: s,
children: (0, r.jsx)(i.Heading, {
  variant: 'heading-sm/semibold',
  color: 'text-normal',
  lineClamp: n,
  className: a.clickable,
  children: t
})
  }) : (0, r.jsx)(i.Heading, {
variant: 'heading-sm/semibold',
color: 'text-normal',
lineClamp: n,
children: t
  });
}