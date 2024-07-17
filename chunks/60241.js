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
src: t,
alt: n,
text: s,
className: o,
onClick: l
  } = e;
  return null == t ? null : (null == s || '' === s) && null == l ? (0, r.jsx)('img', {
alt: n,
src: t,
className: o
  }) : null == s || '' === s ? (0, r.jsx)(i.Clickable, {
className: a.clickable,
onClick: l,
children: (0, r.jsx)('img', {
  alt: n,
  src: t,
  className: o
})
  }) : null == l ? (0, r.jsx)(i.TooltipContainer, {
text: s,
'aria-label': !1,
children: (0, r.jsx)('img', {
  alt: n,
  src: t,
  className: o
})
  }) : (0, r.jsx)(i.TooltipContainer, {
text: s,
'aria-label': !1,
children: (0, r.jsx)(i.Clickable, {
  className: a.clickable,
  onClick: l,
  children: (0, r.jsx)('img', {
    alt: n,
    src: t,
    className: o
  })
})
  });
}