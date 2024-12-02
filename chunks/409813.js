n.d(t, {
    Ck: function () {
        return f;
    },
    DJ: function () {
        return _;
    },
    dZ: function () {
        return h;
    },
    h8: function () {
        return r;
    },
    ly: function () {
        return p;
    }
}),
    n(47120),
    n(411104);
var r,
    i,
    a = n(192379),
    s = n(881052),
    o = n(710845),
    l = n(122289),
    u = n(45572),
    c = n(388032);
let d = new o.Z('PaymentSteps');
((i = r || (r = {})).PAYMENT_TYPE = 'payment_type'), (i.CREDIT_CARD_INFORMATION = 'credit_card_information'), (i.PAYPAL_INFORMATION = 'paypal_information'), (i.VENMO_INFORMATION = 'venmo_information'), (i.PRZELEWY24_INFORMATION = 'przelewy24_information'), (i.EPS_INFORMATION = 'eps_information'), (i.IDEAL_INFORMATION = 'ideal_information'), (i.CASH_APP_INFORMATION = 'cash_app_information'), (i.PAYMENT_REQUEST_INFORMATION = 'payment_request_information'), (i.ADDRESS = 'address'), (i.AWAITING_AUTHENTICATION = 'awaiting_authentication'), (i.SKU_SELECT = 'sku_select'), (i.PLAN_SELECT = 'plan_select'), (i.PREMIUM_UPSELL = 'premium_upsell'), (i.PREMIUM_GUILD_UPSELL = 'premium_guild_upsell'), (i.REVIEW = 'review'), (i.CONFIRM = 'confirm'), (i.CLAIM_FREE_SKU = 'claim_free_sku'), (i.SKU_PREVIEW = 'sku_preview'), (i.LOADING_PAYMENT_SOURCES = 'loading_payment_sources'), (i.SHOP = 'shop'), (i.PROMOTION_INFO = 'promotion_info'), (i.AWAITING_PURCHASE_TOKEN_AUTH = 'awaiting_purchase_token_auth'), (i.BENEFITS = 'benefits'), (i.WHAT_YOU_LOSE = 'what_you_lose'), (i.ADD_PAYMENT_STEPS = 'add_payment_steps'), (i.ATTEMPT_GOOGLE_PAY = 'attempt_google_pay'), (i.AWAITING_BROWSER_CHECKOUT = 'awaiting_browser_checkout'), (i.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY = 'awaiting_browser_checkout_google_pay'), (i.GIFT_CUSTOMIZATION = 'gift_customization'), (i.SELECT_FREE_SKU = 'select_free_sku');
let f = new Set(['credit_card_information', 'payment_request_information', 'paypal_information', 'venmo_information', 'cash_app_information', 'address', 'claim_free_sku', 'sku_preview', 'premium_upsell', 'przelewy24_information']);
function _(e) {
    switch (e) {
        case 'plan_select':
            return c.intl.string(c.t['r+SebW']);
        case 'payment_type':
        case 'add_payment_steps':
            return c.intl.string(c.t.Sb6wIy);
        case 'awaiting_purchase_token_auth':
        case 'review':
            return c.intl.string(c.t.QBnNHh);
        case 'shop':
            return c.intl.string(c.t.xj9ooa);
        case 'payment_request_information':
            return c.intl.string(c.t.DDPRXl);
        case 'credit_card_information':
            return c.intl.string(c.t.yMPCXF);
        case 'address':
            return c.intl.string(c.t['50Auo6']);
        case 'paypal_information':
            return c.intl.string(c.t.RVHDnJ);
        case 'venmo_information':
            return c.intl.string(c.t.bzQdwc);
        case 'przelewy24_information':
            return c.intl.string(c.t.BW0R4u);
        case 'cash_app_information':
            return c.intl.string(c.t.Gz1fyM);
        case 'gift_customization':
            return c.intl.string(c.t.R0vK0N);
    }
    throw Error('Unexpected step: '.concat(e));
}
function p(e) {
    if (null != e) {
        if (!(e instanceof s.HF)) throw (d.error(e), (0, l.q2)(e), Error('Unexpected error type'));
        if (e.hasCardError()) return 'credit_card_information';
        if (e.hasAddressError()) return 'address';
    }
    return null;
}
function h(e, t, n) {
    a.useEffect(() => {
        null != e && 'review' !== e && t !== u.A.WAITING && t !== u.A.COMPLETED && n(u.A.WAITING);
    }, [e, t, n]);
}
