"use strict";
var n, s;

function l(e) {
  if (null != e) {
    if (e.hasCardError()) return "credit_card_information";
    if (e.hasAddressError()) return "address"
  }
  return null
}
a.r(t), a.d(t, {
  Steps: function() {
    return n
  },
  errorToStep: function() {
    return l
  }
}), (s = n || (n = {})).SELECT_PLAN = "select_plan", s.PAYMENT_TYPE = "payment_type", s.PAYPAL = "paypal", s.PAYPAL_ADDRESS = "paypal_address", s.PAYMENT_REQUEST_INFO = "payment_request_info", s.CREDIT_CARD_INFORMATION = "credit_card_information", s.ADDRESS = "address", s.REVIEW = "review", s.CONFIRM = "confirm", s.AWAITING_AUTHENTICATION = "awaiting_authentication", s.VENMO = "venmo", s.VENMO_ADDRESS = "venmo_address"