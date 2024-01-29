"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  s = n("394846"),
  a = n("77078"),
  o = n("570697"),
  u = n("782340"),
  d = n("56438");

function c(e) {
  let {
    children: t,
    className: n,
    layoutClassName: l,
    profilePreview: c,
    previewTitle: f
  } = e, E = () => (0, i.jsx)(o.default, {
    title: null != f ? f : u.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
    className: d.preview,
    children: c
  });
  return (0, i.jsx)("div", {
    className: n,
    children: (0, i.jsxs)(a.FormSection, {
      className: d.profileCustomizationSection,
      children: [s.isMobile && E(), (0, i.jsxs)("div", {
        className: r(d.baseLayout, l),
        children: [t, !s.isMobile && E()]
      })]
    })
  })
}