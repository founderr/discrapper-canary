"use strict";
i.r(t), i.d(t, {
  isAutomaticApprovalFormField: function() {
    return l
  },
  isManualApprovalFormField: function() {
    return o
  },
  isValidFormResponse: function() {
    return a
  }
});
var n = i("823379"),
  r = i("246364"),
  s = i("592286");
let a = e => {
  let {
    required: t,
    response: i,
    field_type: s
  } = e;
  if (!t) return !0;
  if (null == i) return !1;
  switch (s) {
    case r.VerificationFormFieldTypes.TERMS:
    case r.VerificationFormFieldTypes.VERIFICATION:
      return !!i;
    case r.VerificationFormFieldTypes.TEXT_INPUT:
    case r.VerificationFormFieldTypes.PARAGRAPH:
      return "string" == typeof i && "" !== i.trim();
    case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return "number" == typeof i;
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