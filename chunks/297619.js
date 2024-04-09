"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("803997"),
  a = n.n(r),
  s = n("481060"),
  l = n("814550"),
  o = n("246364"),
  u = n("700833"),
  c = n("689938"),
  d = n("482249");
t.default = function(e) {
  let {
    addFormField: t,
    guild: n
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(d.spacingContainer, d.leftRailIconContainer, d.backgroundContainer),
    children: [(0, i.jsx)("div", {
      className: d.iconContainer,
      children: (0, i.jsx)(l.default, {
        width: 18,
        height: 20,
        className: d.icon
      })
    }), (0, i.jsxs)(s.FormSection, {
      children: [(0, i.jsx)(s.FormTitle, {
        tag: "h3",
        className: d.leftRailIconContainerTitle,
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
      }), (0, i.jsx)(s.FormText, {
        className: d.leftRailIconContainerDescription,
        type: s.FormText.Types.DESCRIPTION,
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
      }), (0, i.jsx)(s.Button, {
        onClick: () => (0, u.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t, n),
        children: c.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
      })]
    })]
  })
}