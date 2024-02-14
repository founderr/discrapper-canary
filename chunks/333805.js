"use strict";
n.r(e), n.d(e, {
  default: function() {
    return i
  }
});
var i, r = n("872717"),
  a = n("49111"),
  s = n("782340");
i = class extends r.default.V6OrEarlierAPIError {
  constructor(t, e) {
    super(t, e, null != e ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
      statusPageURL: a.Links.STATUS,
      details: "".concat(e)
    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
      statusPageURL: a.Links.STATUS
    }))
  }
}