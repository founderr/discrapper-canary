"use strict";
n.r(t);
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("481060"),
  l = n("814550"),
  o = n("246364"),
  c = n("700833"),
  d = n("689938"),
  u = n("17359");
t.default = function(e) {
  let {
    addFormField: t,
    guild: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s()(u.spacingContainer, u.leftRailIconContainer, u.backgroundContainer),
    children: [(0, a.jsx)("div", {
      className: u.iconContainer,
      children: (0, a.jsx)(l.default, {
        width: 18,
        height: 20,
        className: u.icon
      })
    }), (0, a.jsxs)(i.FormSection, {
      children: [(0, a.jsx)(i.FormTitle, {
        tag: "h3",
        className: u.leftRailIconContainerTitle,
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
      }), (0, a.jsx)(i.FormText, {
        className: u.leftRailIconContainerDescription,
        type: i.FormText.Types.DESCRIPTION,
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
      }), (0, a.jsx)(i.Button, {
        onClick: () => (0, c.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t, n),
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
      })]
    })]
  })
}