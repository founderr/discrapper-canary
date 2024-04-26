"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("481060"),
  l = n("814550"),
  o = n("246364"),
  u = n("700833"),
  c = n("689938"),
  d = n("915580");
t.default = function(e) {
  let {
    addFormField: t,
    guild: n
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(d.spacingContainer, d.leftRailIconContainer, d.backgroundContainer),
    children: [(0, i.jsx)("div", {
      className: d.iconContainer,
      children: (0, i.jsx)(l.default, {
        width: 18,
        height: 20,
        className: d.icon
      })
    }), (0, i.jsxs)(a.FormSection, {
      children: [(0, i.jsx)(a.FormTitle, {
        tag: "h3",
        className: d.leftRailIconContainerTitle,
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
      }), (0, i.jsx)(a.FormText, {
        className: d.leftRailIconContainerDescription,
        type: a.FormText.Types.DESCRIPTION,
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
      }), (0, i.jsx)(a.Button, {
        onClick: () => (0, u.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t, n),
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
      })]
    })]
  })
}