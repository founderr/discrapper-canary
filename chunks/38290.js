"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("77078"),
  r = n("857171"),
  o = n("339524"),
  u = n("782340"),
  d = n("301773"),
  c = n("1065");
let f = [{
  name: "Custom Upload",
  extensions: ["jpg", "jpeg", "png", "gif", "webp"]
}];

function m(e) {
  let {
    onCustomUpload: t,
    customUploadFilters: n = f
  } = e, {
    dragRef: i,
    hover: m
  } = (0, o.default)({
    onDrop: t
  }), p = {
    color: s.ButtonColors.CUSTOM,
    hover: s.ButtonHovers.DEFAULT
  };
  return (0, l.jsx)("div", {
    ref: i,
    className: d.clickContainer,
    children: (0, l.jsxs)(r.default, {
      onChange: e => {
        var n, l;
        let i = null === (l = e.currentTarget) || void 0 === l ? void 0 : null === (n = l.files) || void 0 === n ? void 0 : n[0];
        t(i), e.currentTarget.value = ""
      },
      multiple: !1,
      filters: n,
      "aria-label": u.default.Messages.EXPRESSION_PICKER_UPLOAD_ARIA,
      className: a(d.clickable, {
        [d.clickableActive]: m
      }),
      ...p,
      children: [(0, l.jsx)(s.Text, {
        variant: "text-xs/semibold",
        className: a(d.tag, {
          [d.tagActive]: m
        }),
        children: u.default.Messages.EXPRESSION_PICKER_UPLOAD_IMAGE_TAG
      }), (0, l.jsxs)("div", {
        className: d.uploadContainer,
        children: [(0, l.jsx)("div", {
          className: a(c.icon, d.addFileButtonIcon),
          "aria-hidden": !0
        }), (0, l.jsx)(s.Text, {
          className: d.description,
          color: "header-primary",
          variant: "text-sm/medium",
          children: u.default.Messages.EXPRESSION_PICKER_UPLOAD_DESCRIPTION
        })]
      })]
    })
  })
}