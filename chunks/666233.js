"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("442837"),
  i = s("594174"),
  n = s("318010"),
  r = s("246364"),
  u = s("489813"),
  o = s("186078"),
  d = s("73880"),
  c = s("196345"),
  E = s("707592"),
  I = s("689938");
t.default = function(e) {
  let {
    formFields: t,
    user: s,
    showRequirements: T = !0
  } = e;
  return null == (0, l.useStateFromStores)([i.default], () => null != s ? s : i.default.getCurrentUser()) ? null : (0, a.jsxs)(a.Fragment, {
    children: [T && (0, a.jsx)(u.RequirementRenderer, {
      icon: n.default,
      text: I.default.Messages.MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
      meetsRequirement: !0
    }), t.map((e, t) => (function(e, t) {
      switch (e.field_type) {
        case r.VerificationFormFieldTypes.TERMS:
          return (0, a.jsx)(c.DisabledTermsRequirementFormField, {
            formField: e
          }, t);
        case r.VerificationFormFieldTypes.TEXT_INPUT:
          return (0, a.jsx)(E.DisabledTextInputFormField, {
            formField: e
          }, t);
        case r.VerificationFormFieldTypes.PARAGRAPH:
          return (0, a.jsx)(d.DisabledParagraphFormField, {
            formField: e
          }, t);
        case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
          return (0, a.jsx)(o.DisabledMultipleChoiceFormField, {
            formField: e
          }, t)
      }
    })(e, t))]
  })
}