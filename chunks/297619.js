"use strict";
i.r(t);
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("481060"),
  l = i("814550"),
  o = i("246364"),
  u = i("700833"),
  c = i("689938"),
  d = i("482249");
t.default = function(e) {
  let {
    addFormField: t,
    guild: i
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(d.spacingContainer, d.leftRailIconContainer, d.backgroundContainer),
    children: [(0, n.jsx)("div", {
      className: d.iconContainer,
      children: (0, n.jsx)(l.default, {
        width: 18,
        height: 20,
        className: d.icon
      })
    }), (0, n.jsxs)(a.FormSection, {
      children: [(0, n.jsx)(a.FormTitle, {
        tag: "h3",
        className: d.leftRailIconContainerTitle,
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
      }), (0, n.jsx)(a.FormText, {
        className: d.leftRailIconContainerDescription,
        type: a.FormText.Types.DESCRIPTION,
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
      }), (0, n.jsx)(a.Button, {
        onClick: () => (0, u.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t, i),
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
      })]
    })]
  })
}