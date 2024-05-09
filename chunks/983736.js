"use strict";
s.r(t), s.d(t, {
  isAutomaticApprovalFormField: function() {
    return l
  },
  isManualApprovalFormField: function() {
    return _
  },
  isValidFormResponse: function() {
    return E
  }
});
var a = s("823379"),
  n = s("246364"),
  i = s("592286");
let E = e => {
  let {
    required: t,
    response: s,
    field_type: i
  } = e;
  if (!t) return !0;
  if (null == s) return !1;
  switch (i) {
    case n.VerificationFormFieldTypes.TERMS:
    case n.VerificationFormFieldTypes.VERIFICATION:
      return !!s;
    case n.VerificationFormFieldTypes.TEXT_INPUT:
    case n.VerificationFormFieldTypes.PARAGRAPH:
      return "string" == typeof s && "" !== s.trim();
    case n.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return "number" == typeof s;
    default:
      return (0, a.assertNever)(i)
  }
};

function l(e) {
  return i.AUTOMATIC_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}

function _(e) {
  return i.MANUAL_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}