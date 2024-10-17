var n, s;
function r(e) {
    if (null != e) {
        if (e.hasCardError()) return 'credit_card_information';
        if (e.hasAddressError()) return 'address';
    }
    return null;
}
t.d(a, {
    Rg: function () {
        return n;
    },
    ly: function () {
        return r;
    }
}),
    ((s = n || (n = {})).SELECT_PLAN = 'select_plan'),
    (s.PAYMENT_TYPE = 'payment_type'),
    (s.PAYPAL = 'paypal'),
    (s.PAYPAL_ADDRESS = 'paypal_address'),
    (s.PAYMENT_REQUEST_INFO = 'payment_request_info'),
    (s.CREDIT_CARD_INFORMATION = 'credit_card_information'),
    (s.ADDRESS = 'address'),
    (s.REVIEW = 'review'),
    (s.CONFIRM = 'confirm'),
    (s.AWAITING_AUTHENTICATION = 'awaiting_authentication'),
    (s.VENMO = 'venmo'),
    (s.VENMO_ADDRESS = 'venmo_address');
