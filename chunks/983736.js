"use strict";
a.r(t), a.d(t, {
  isAutomaticApprovalFormField: function() {
    return s
  },
  isManualApprovalFormField: function() {
    return o
  },
  isValidFormResponse: function() {
    return l
  }
});
var n = a("823379"),
  r = a("246364"),
  i = a("592286");
let l = e => {
  let {
    required: t,
    response: a,
    field_type: i
  } = e;
  if (!t) return !0;
  if (null == a) return !1;
  switch (i) {
    case r.VerificationFormFieldTypes.TERMS:
    case r.VerificationFormFieldTypes.VERIFICATION:
      return !!a;
    case r.VerificationFormFieldTypes.TEXT_INPUT:
    case r.VerificationFormFieldTypes.PARAGRAPH:
      return "string" == typeof a && "" !== a.trim();
    case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return "number" == typeof a;
    default:
      return (0, n.assertNever)(i)
  }
};

function s(e) {
  return i.AUTOMATIC_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}

function o(e) {
  return i.MANUAL_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}