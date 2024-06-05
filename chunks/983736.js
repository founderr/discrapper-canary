"use strict";
n.r(t), n.d(t, {
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
var a = n("823379"),
  r = n("246364"),
  s = n("592286");
let i = e => {
  let {
    required: t,
    response: n,
    field_type: s
  } = e;
  if (!t) return !0;
  if (null == n) return !1;
  switch (s) {
    case r.VerificationFormFieldTypes.TERMS:
    case r.VerificationFormFieldTypes.VERIFICATION:
      return !!n;
    case r.VerificationFormFieldTypes.TEXT_INPUT:
    case r.VerificationFormFieldTypes.PARAGRAPH:
      return "string" == typeof n && "" !== n.trim();
    case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return "number" == typeof n;
    default:
      return (0, a.assertNever)(s)
  }
};

function l(e) {
  return s.AUTOMATIC_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}

function o(e) {
  return s.MANUAL_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}