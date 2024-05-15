"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  l = a("481060"),
  s = a("814550"),
  o = a("246364"),
  c = a("700833"),
  d = a("689938"),
  u = a("17359");
t.default = function(e) {
  let {
    addFormField: t,
    guild: a
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(u.spacingContainer, u.leftRailIconContainer, u.backgroundContainer),
    children: [(0, n.jsx)("div", {
      className: u.iconContainer,
      children: (0, n.jsx)(s.default, {
        width: 18,
        height: 20,
        className: u.icon
      })
    }), (0, n.jsxs)(l.FormSection, {
      children: [(0, n.jsx)(l.FormTitle, {
        tag: "h3",
        className: u.leftRailIconContainerTitle,
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
      }), (0, n.jsx)(l.FormText, {
        className: u.leftRailIconContainerDescription,
        type: l.FormText.Types.DESCRIPTION,
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
      }), (0, n.jsx)(l.Button, {
        onClick: () => (0, c.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t, a),
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
      })]
    })]
  })
}