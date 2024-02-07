"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r, s = n("872717"),
  o = n("49111"),
  a = n("782340");
r = class extends s.default.V8APIError {
  constructor(e, t) {
    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
      statusPageURL: o.Links.STATUS,
      details: "".concat(t)
    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
      statusPageURL: o.Links.STATUS
    }))
  }
}