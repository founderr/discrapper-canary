"use strict";
n.r(e), n.d(e, {
  default: function() {
    return r
  }
});
var r, i = n("872717"),
  u = n("49111"),
  o = n("782340");
r = class extends i.default.V6OrEarlierAPIError {
  constructor(t, e) {
    super(t, e, null != e ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
      statusPageURL: u.Links.STATUS,
      details: "".concat(e)
    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
      statusPageURL: u.Links.STATUS
    }))
  }
}