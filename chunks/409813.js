n.d(t, {
    Ck: function () {
        return a;
    },
    DJ: function () {
        return T;
    },
    dZ: function () {
        return c;
    },
    h8: function () {
        return E;
    },
    ly: function () {
        return I;
    }
}),
    n(47120),
    n(411104);
var E,
    r,
    u = n(192379),
    i = n(881052),
    S = n(710845),
    _ = n(122289),
    o = n(45572),
    A = n(689938);
let l = new S.Z('PaymentSteps');
((r = E || (E = {})).PAYMENT_TYPE = 'payment_type'), (r.CREDIT_CARD_INFORMATION = 'credit_card_information'), (r.PAYPAL_INFORMATION = 'paypal_information'), (r.VENMO_INFORMATION = 'venmo_information'), (r.SOFORT_INFORMATION = 'sofort_information'), (r.PRZELEWY24_INFORMATION = 'przelewy24_information'), (r.EPS_INFORMATION = 'eps_information'), (r.IDEAL_INFORMATION = 'ideal_information'), (r.CASH_APP_INFORMATION = 'cash_app_information'), (r.PAYMENT_REQUEST_INFORMATION = 'payment_request_information'), (r.ADDRESS = 'address'), (r.AWAITING_AUTHENTICATION = 'awaiting_authentication'), (r.SKU_SELECT = 'sku_select'), (r.PLAN_SELECT = 'plan_select'), (r.PREMIUM_UPSELL = 'premium_upsell'), (r.PREMIUM_GUILD_UPSELL = 'premium_guild_upsell'), (r.REVIEW = 'review'), (r.CONFIRM = 'confirm'), (r.CLAIM_FREE_SKU = 'claim_free_sku'), (r.SKU_PREVIEW = 'sku_preview'), (r.LOADING_PAYMENT_SOURCES = 'loading_payment_sources'), (r.SHOP = 'shop'), (r.PROMOTION_INFO = 'promotion_info'), (r.AWAITING_PURCHASE_TOKEN_AUTH = 'awaiting_purchase_token_auth'), (r.BENEFITS = 'benefits'), (r.WHAT_YOU_LOSE = 'what_you_lose'), (r.ADD_PAYMENT_STEPS = 'add_payment_steps'), (r.AWAITING_BROWSER_CHECKOUT = 'awaiting_browser_checkout'), (r.GIFT_CUSTOMIZATION = 'gift_customization');
let a = new Set(['credit_card_information', 'payment_request_information', 'paypal_information', 'venmo_information', 'cash_app_information', 'address', 'claim_free_sku', 'sku_preview', 'premium_upsell', 'sofort_information', 'przelewy24_information']);
function T(e) {
    switch (e) {
        case 'plan_select':
            return A.Z.Messages.BILLING_STEP_SELECT_PLAN;
        case 'payment_type':
        case 'add_payment_steps':
            return A.Z.Messages.BILLING_STEP_PAYMENT;
        case 'awaiting_purchase_token_auth':
        case 'review':
            return A.Z.Messages.BILLING_STEP_REVIEW;
        case 'shop':
            return A.Z.Messages.BILLING_STEP_SHOP;
        case 'payment_request_information':
            return A.Z.Messages.BILLING_STEP_PAYMENT_INFO;
        case 'credit_card_information':
            return A.Z.Messages.PAYMENT_SOURCE_INFORMATION;
        case 'address':
            return A.Z.Messages.BILLING_ADDRESS;
        case 'paypal_information':
            return A.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
        case 'venmo_information':
            return A.Z.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
        case 'sofort_information':
            return A.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
        case 'przelewy24_information':
            return A.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
        case 'cash_app_information':
            return A.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS;
        case 'gift_customization':
            return A.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER;
    }
    throw Error('Unexpected step: '.concat(e));
}
function I(e) {
    if (null != e) {
        if (!(e instanceof i.HF)) throw (l.error(e), (0, _.q2)(e), Error('Unexpected error type'));
        if (e.hasCardError()) return 'credit_card_information';
        if (e.hasAddressError()) return 'address';
    }
    return null;
}
function c(e, t, n) {
    u.useEffect(() => {
        null != e && 'review' !== e && t !== o.A.WAITING && t !== o.A.COMPLETED && n(o.A.WAITING);
    }, [e, t, n]);
}
