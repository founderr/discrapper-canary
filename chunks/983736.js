"use strict";
a.r(t), a.d(t, {
  isAutomaticApprovalFormField: function() {
    return l
  },
  isManualApprovalFormField: function() {
    return o
  },
  isValidFormResponse: function() {
    return i
  }
});
var n = a("823379"),
  r = a("246364"),
  s = a("592286");
let i = e => {
  let {
    required: t,
    response: a,
    field_type: s
  } = e;
  if (!t) return !0;
  if (null == a) return !1;
  switch (s) {
    case r.VerificationFormFieldTypes.TERMS:
    case r.VerificationFormFieldTypes.VERIFICATION:
      return !!a;
    case r.VerificationFormFieldTypes.TEXT_INPUT:
    case r.VerificationFormFieldTypes.PARAGRAPH:
      return "string" == typeof a && "" !== a.trim();
    case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return "number" == typeof a;
    default:
      return (0, n.assertNever)(s)
  }
};

function l(e) {
  return s.AUTOMATIC_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}

function o(e) {
  return s.MANUAL_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}