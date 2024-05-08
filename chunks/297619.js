"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  E = s("481060"),
  l = s("814550"),
  _ = s("246364"),
  r = s("700833"),
  u = s("689938"),
  o = s("17359");
t.default = function(e) {
  let {
    addFormField: t,
    guild: s
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(o.spacingContainer, o.leftRailIconContainer, o.backgroundContainer),
    children: [(0, a.jsx)("div", {
      className: o.iconContainer,
      children: (0, a.jsx)(l.default, {
        width: 18,
        height: 20,
        className: o.icon
      })
    }), (0, a.jsxs)(E.FormSection, {
      children: [(0, a.jsx)(E.FormTitle, {
        tag: "h3",
        className: o.leftRailIconContainerTitle,
        children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
      }), (0, a.jsx)(E.FormText, {
        className: o.leftRailIconContainerDescription,
        type: E.FormText.Types.DESCRIPTION,
        children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
      }), (0, a.jsx)(E.Button, {
        onClick: () => (0, r.openEmptyFormFieldModal)(_.VerificationFormFieldTypes.TERMS, t, s),
        children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
      })]
    })]
  })
}