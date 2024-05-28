"use strict";
n.r(t), n.d(t, {
  COLLAPSED_PAYMENT_BREADCRUMB_STEPS: function() {
    return _
  },
  Step: function() {
    return r
  },
  errorToStep: function() {
    return c
  },
  getLabelForStep: function() {
    return d
  },
  usePurchaseStateForStep: function() {
    return A
  }
}), n("47120"), n("411104");
var r, u, i = n("470079"),
  a = n("881052"),
  l = n("710845"),
  o = n("122289"),
  s = n("45572"),
  E = n("689938");
let S = new l.default("PaymentSteps");
(u = r || (r = {})).PAYMENT_TYPE = "payment_type", u.CREDIT_CARD_INFORMATION = "credit_card_information", u.PAYPAL_INFORMATION = "paypal_information", u.VENMO_INFORMATION = "venmo_information", u.SOFORT_INFORMATION = "sofort_information", u.PRZELEWY24_INFORMATION = "przelewy24_information", u.EPS_INFORMATION = "eps_information", u.IDEAL_INFORMATION = "ideal_information", u.CASH_APP_INFORMATION = "cash_app_information", u.PAYMENT_REQUEST_INFORMATION = "payment_request_information", u.ADDRESS = "address", u.AWAITING_AUTHENTICATION = "awaiting_authentication", u.SKU_SELECT = "sku_select", u.PLAN_SELECT = "plan_select", u.PREMIUM_UPSELL = "premium_upsell", u.PREMIUM_GUILD_UPSELL = "premium_guild_upsell", u.REVIEW = "review", u.CONFIRM = "confirm", u.CLAIM_FREE_SKU = "claim_free_sku", u.SKU_PREVIEW = "sku_preview", u.LOADING_PAYMENT_SOURCES = "loading_payment_sources", u.SHOP = "shop", u.PROMOTION_INFO = "promotion_info", u.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth", u.BENEFITS = "benefits", u.WHAT_YOU_LOSE = "what_you_lose", u.ADD_PAYMENT_STEPS = "add_payment_steps", u.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout", u.GIFT_CUSTOMIZATION = "gift_customization";
let _ = new Set(["credit_card_information", "payment_request_information", "paypal_information", "venmo_information", "cash_app_information", "address", "claim_free_sku", "sku_preview", "premium_upsell", "sofort_information", "przelewy24_information"]);

function d(e) {
  switch (e) {
    case "plan_select":
      return E.default.Messages.BILLING_STEP_SELECT_PLAN;
    case "payment_type":
    case "add_payment_steps":
      return E.default.Messages.BILLING_STEP_PAYMENT;
    case "awaiting_purchase_token_auth":
    case "review":
      return E.default.Messages.BILLING_STEP_REVIEW;
    case "shop":
      return E.default.Messages.BILLING_STEP_SHOP;
    case "payment_request_information":
      return E.default.Messages.BILLING_STEP_PAYMENT_INFO;
    case "credit_card_information":
      return E.default.Messages.PAYMENT_SOURCE_INFORMATION;
    case "address":
      return E.default.Messages.BILLING_ADDRESS;
    case "paypal_information":
      return E.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
    case "venmo_information":
      return E.default.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
    case "sofort_information":
      return E.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
    case "przelewy24_information":
      return E.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
    case "cash_app_information":
      return E.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_DETAILS;
    case "gift_customization":
      return E.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER
  }
  throw Error("Unexpected step: ".concat(e))
}

function c(e) {
  if (null != e) {
    if (!(e instanceof a.BillingError)) throw S.error(e), (0, o.captureBillingException)(e), Error("Unexpected error type");
    if (e.hasCardError()) return "credit_card_information";
    if (e.hasAddressError()) return "address"
  }
  return null
}

function A(e, t, n) {
  i.useEffect(() => {
    null != e && "review" !== e && t !== s.PurchaseState.WAITING && t !== s.PurchaseState.COMPLETED && n(s.PurchaseState.WAITING)
  }, [e, t, n])
}