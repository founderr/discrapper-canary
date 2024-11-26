n.d(e, {
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
        return r;
    },
    ly: function () {
        return I;
    }
}),
    n(47120),
    n(411104);
var r,
    E,
    i = n(192379),
    u = n(881052),
    S = n(710845),
    o = n(122289),
    _ = n(45572),
    l = n(388032);
let A = new S.Z('PaymentSteps');
((E = r || (r = {})).PAYMENT_TYPE = 'payment_type'), (E.CREDIT_CARD_INFORMATION = 'credit_card_information'), (E.PAYPAL_INFORMATION = 'paypal_information'), (E.VENMO_INFORMATION = 'venmo_information'), (E.PRZELEWY24_INFORMATION = 'przelewy24_information'), (E.EPS_INFORMATION = 'eps_information'), (E.IDEAL_INFORMATION = 'ideal_information'), (E.CASH_APP_INFORMATION = 'cash_app_information'), (E.PAYMENT_REQUEST_INFORMATION = 'payment_request_information'), (E.ADDRESS = 'address'), (E.AWAITING_AUTHENTICATION = 'awaiting_authentication'), (E.SKU_SELECT = 'sku_select'), (E.PLAN_SELECT = 'plan_select'), (E.PREMIUM_UPSELL = 'premium_upsell'), (E.PREMIUM_GUILD_UPSELL = 'premium_guild_upsell'), (E.REVIEW = 'review'), (E.CONFIRM = 'confirm'), (E.CLAIM_FREE_SKU = 'claim_free_sku'), (E.SKU_PREVIEW = 'sku_preview'), (E.LOADING_PAYMENT_SOURCES = 'loading_payment_sources'), (E.SHOP = 'shop'), (E.PROMOTION_INFO = 'promotion_info'), (E.AWAITING_PURCHASE_TOKEN_AUTH = 'awaiting_purchase_token_auth'), (E.BENEFITS = 'benefits'), (E.WHAT_YOU_LOSE = 'what_you_lose'), (E.ADD_PAYMENT_STEPS = 'add_payment_steps'), (E.ATTEMPT_GOOGLE_PAY = 'attempt_google_pay'), (E.AWAITING_BROWSER_CHECKOUT = 'awaiting_browser_checkout'), (E.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = 'awaiting_browser_checkout_google_pay'), (E.GIFT_CUSTOMIZATION = 'gift_customization');
let a = new Set(['credit_card_information', 'payment_request_information', 'paypal_information', 'venmo_information', 'cash_app_information', 'address', 'claim_free_sku', 'sku_preview', 'premium_upsell', 'przelewy24_information']);
function T(t) {
    switch (t) {
        case 'plan_select':
            return l.intl.string(l.t['r+SebW']);
        case 'payment_type':
        case 'add_payment_steps':
            return l.intl.string(l.t.Sb6wIy);
        case 'awaiting_purchase_token_auth':
        case 'review':
            return l.intl.string(l.t.QBnNHh);
        case 'shop':
            return l.intl.string(l.t.xj9ooa);
        case 'payment_request_information':
            return l.intl.string(l.t.DDPRXl);
        case 'credit_card_information':
            return l.intl.string(l.t.yMPCXF);
        case 'address':
            return l.intl.string(l.t['50Auo6']);
        case 'paypal_information':
            return l.intl.string(l.t.RVHDnJ);
        case 'venmo_information':
            return l.intl.string(l.t.bzQdwc);
        case 'przelewy24_information':
            return l.intl.string(l.t.BW0R4u);
        case 'cash_app_information':
            return l.intl.string(l.t.Gz1fyM);
        case 'gift_customization':
            return l.intl.string(l.t.R0vK0N);
    }
    throw Error('Unexpected step: '.concat(t));
}
function I(t) {
    if (null != t) {
        if (!(t instanceof u.HF)) throw (A.error(t), (0, o.q2)(t), Error('Unexpected error type'));
        if (t.hasCardError()) return 'credit_card_information';
        if (t.hasAddressError()) return 'address';
    }
    return null;
}
function c(t, e, n) {
    i.useEffect(() => {
        null != t && 'review' !== t && e !== _.A.WAITING && e !== _.A.COMPLETED && n(_.A.WAITING);
    }, [t, e, n]);
}
