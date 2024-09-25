n.d(t, {
    Ck: function () {
        return E;
    },
    DJ: function () {
        return f;
    },
    dZ: function () {
        return p;
    },
    h8: function () {
        return r;
    },
    ly: function () {
        return h;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(470079),
    s = n(881052),
    l = n(710845),
    u = n(122289),
    c = n(45572),
    d = n(689938);
let _ = new l.Z('PaymentSteps');
!(function (e) {
    (e.PAYMENT_TYPE = 'payment_type'), (e.CREDIT_CARD_INFORMATION = 'credit_card_information'), (e.PAYPAL_INFORMATION = 'paypal_information'), (e.VENMO_INFORMATION = 'venmo_information'), (e.SOFORT_INFORMATION = 'sofort_information'), (e.PRZELEWY24_INFORMATION = 'przelewy24_information'), (e.EPS_INFORMATION = 'eps_information'), (e.IDEAL_INFORMATION = 'ideal_information'), (e.CASH_APP_INFORMATION = 'cash_app_information'), (e.PAYMENT_REQUEST_INFORMATION = 'payment_request_information'), (e.ADDRESS = 'address'), (e.AWAITING_AUTHENTICATION = 'awaiting_authentication'), (e.SKU_SELECT = 'sku_select'), (e.PLAN_SELECT = 'plan_select'), (e.PREMIUM_UPSELL = 'premium_upsell'), (e.PREMIUM_GUILD_UPSELL = 'premium_guild_upsell'), (e.REVIEW = 'review'), (e.CONFIRM = 'confirm'), (e.CLAIM_FREE_SKU = 'claim_free_sku'), (e.SKU_PREVIEW = 'sku_preview'), (e.LOADING_PAYMENT_SOURCES = 'loading_payment_sources'), (e.SHOP = 'shop'), (e.PROMOTION_INFO = 'promotion_info'), (e.AWAITING_PURCHASE_TOKEN_AUTH = 'awaiting_purchase_token_auth'), (e.BENEFITS = 'benefits'), (e.WHAT_YOU_LOSE = 'what_you_lose'), (e.ADD_PAYMENT_STEPS = 'add_payment_steps'), (e.AWAITING_BROWSER_CHECKOUT = 'awaiting_browser_checkout'), (e.GIFT_CUSTOMIZATION = 'gift_customization');
})(r || (r = {}));
let E = new Set(['credit_card_information', 'payment_request_information', 'paypal_information', 'venmo_information', 'cash_app_information', 'address', 'claim_free_sku', 'sku_preview', 'premium_upsell', 'sofort_information', 'przelewy24_information']);
function f(e) {
    switch (e) {
        case 'plan_select':
            return d.Z.Messages.BILLING_STEP_SELECT_PLAN;
        case 'payment_type':
        case 'add_payment_steps':
            return d.Z.Messages.BILLING_STEP_PAYMENT;
        case 'awaiting_purchase_token_auth':
        case 'review':
            return d.Z.Messages.BILLING_STEP_REVIEW;
        case 'shop':
            return d.Z.Messages.BILLING_STEP_SHOP;
        case 'payment_request_information':
            return d.Z.Messages.BILLING_STEP_PAYMENT_INFO;
        case 'credit_card_information':
            return d.Z.Messages.PAYMENT_SOURCE_INFORMATION;
        case 'address':
            return d.Z.Messages.BILLING_ADDRESS;
        case 'paypal_information':
            return d.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
        case 'venmo_information':
            return d.Z.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
        case 'sofort_information':
            return d.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
        case 'przelewy24_information':
            return d.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
        case 'cash_app_information':
            return d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS;
        case 'gift_customization':
            return d.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER;
    }
    throw Error('Unexpected step: '.concat(e));
}
function h(e) {
    if (null != e) {
        if (!(e instanceof s.HF)) throw (_.error(e), (0, u.q2)(e), Error('Unexpected error type'));
        if (e.hasCardError()) return 'credit_card_information';
        if (e.hasAddressError()) return 'address';
    }
    return null;
}
function p(e, t, n) {
    o.useEffect(() => {
        null != e && 'review' !== e && t !== c.A.WAITING && t !== c.A.COMPLETED && n(c.A.WAITING);
    }, [e, t, n]);
}
