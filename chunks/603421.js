var a, r;
function l(e) {
    if (null != e) {
        if (e.hasCardError()) return 'credit_card_information';
        if (e.hasAddressError()) return 'address';
    }
    return null;
}
n.d(t, {
    Rg: function () {
        return a;
    },
    ly: function () {
        return l;
    }
}),
    ((r = a || (a = {})).SELECT_PLAN = 'select_plan'),
    (r.PAYMENT_TYPE = 'payment_type'),
    (r.PAYPAL = 'paypal'),
    (r.PAYPAL_ADDRESS = 'paypal_address'),
    (r.PAYMENT_REQUEST_INFO = 'payment_request_info'),
    (r.CREDIT_CARD_INFORMATION = 'credit_card_information'),
    (r.ADDRESS = 'address'),
    (r.REVIEW = 'review'),
    (r.CONFIRM = 'confirm'),
    (r.AWAITING_AUTHENTICATION = 'awaiting_authentication'),
    (r.VENMO = 'venmo'),
    (r.VENMO_ADDRESS = 'venmo_address');
