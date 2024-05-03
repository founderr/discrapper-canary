"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("481060"),
  l = a("814550"),
  o = a("246364"),
  c = a("700833"),
  d = a("689938"),
  u = a("915580");
t.default = function(e) {
  let {
    addFormField: t,
    guild: a
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(u.spacingContainer, u.leftRailIconContainer, u.backgroundContainer),
    children: [(0, n.jsx)("div", {
      className: u.iconContainer,
      children: (0, n.jsx)(l.default, {
        width: 18,
        height: 20,
        className: u.icon
      })
    }), (0, n.jsxs)(s.FormSection, {
      children: [(0, n.jsx)(s.FormTitle, {
        tag: "h3",
        className: u.leftRailIconContainerTitle,
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
      }), (0, n.jsx)(s.FormText, {
        className: u.leftRailIconContainerDescription,
        type: s.FormText.Types.DESCRIPTION,
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
      }), (0, n.jsx)(s.Button, {
        onClick: () => (0, c.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t, a),
        children: d.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
      })]
    })]
  })
}