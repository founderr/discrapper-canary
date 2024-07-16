n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(17845),
  o = n(622548);

function c(e) {
  let {
title: t,
description: n,
onScroll: s,
backgroundImageUrl: c,
button: d,
children: u,
bannerContainerClassName: _
  } = e;
  return (0, i.jsxs)(r.AdvancedScroller, {
onScroll: s,
className: a()(o.container, o.background),
children: [
  (0, i.jsx)(l.Z, {
    title: t,
    description: n,
    backgroundImageUrl: c,
    button: d,
    className: _
  }),
  (0, i.jsx)('section', {
    className: a()(o.contentContainer, o.gradient),
    children: (0, i.jsx)('div', {
      className: a()(o.content),
      children: u
    })
  })
]
  });
}