"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return f
  },
  getLocalizedPricingBannerStrings: function() {
    return P
  },
  getLocalizedPricingNotice: function() {
    return A
  }
}), n("47120"), n("653041");
var r = n("217986"),
  a = n("133080"),
  u = n("63063"),
  s = n("937615"),
  i = n("981631"),
  l = n("231338"),
  c = n("689938");
let d = new Set([l.CurrencyCodes.ARS, l.CurrencyCodes.CLP, l.CurrencyCodes.COP]),
  o = new Set([l.CurrencyCodes.USD, l.CurrencyCodes.JPY]),
  f = {
    [i.PaymentSourceTypes.CARD]: () => c.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [i.PaymentSourceTypes.PAYPAL]: () => c.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [i.PaymentSourceTypes.SOFORT]: () => c.default.Messages.PAYMENT_SOURCE_SOFORT,
    [i.PaymentSourceTypes.GIROPAY]: () => c.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [i.PaymentSourceTypes.PRZELEWY24]: () => c.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => c.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [i.PaymentSourceTypes.GCASH]: () => c.default.Messages.PAYMENT_SOURCE_GCASH,
    [i.PaymentSourceTypes.GRABPAY_MY]: () => c.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [i.PaymentSourceTypes.MOMO_WALLET]: () => c.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [i.PaymentSourceTypes.VENMO]: () => c.default.Messages.PAYMENT_SOURCE_VENMO,
    [i.PaymentSourceTypes.KAKAOPAY]: () => c.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [i.PaymentSourceTypes.GOPAY_WALLET]: () => c.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [i.PaymentSourceTypes.BANCONTACT]: () => c.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [i.PaymentSourceTypes.EPS]: () => c.default.Messages.PAYMENT_SOURCE_EPS,
    [i.PaymentSourceTypes.IDEAL]: () => c.default.Messages.PAYMENT_SOURCE_IDEAL,
    [i.PaymentSourceTypes.CASH_APP]: () => c.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [i.PaymentSourceTypes.APPLE]: () => c.default.Messages.PAYMENT_SOURCE_APPLE
  },
  E = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
  A = (e, t, n, r) => {
    if (null == e) return "";
    let u = (0, a.getI18NCountryName)(e);
    if (t === l.CurrencyCodes.EUR) return n ? c.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: u
    }) : c.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return r ? c.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: u
    }) : c.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: u
    })
  },
  P = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: r = !1,
      userLocale: A
    } = e, {
      countryCode: P,
      amount: _,
      currency: C,
      paymentSourceTypes: O
    } = t, I = 0 !== O.length, p = S(P), N = (0, s.formatPrice)(_, C, {
      style: "currency",
      currency: C,
      currencyDisplay: "symbol",
      localeOverride: p
    }), m = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: u.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: C.toUpperCase(),
      localizedPriceWithCurrencySymbol: N
    });
    if (o.has(C) && (m = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: u.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: N
      })), d.has(C) && (m = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: u.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: C.toUpperCase(),
        localizedPriceWithCurrencySymbol: N
      })), null != n && !n.hasPremiumNitroMonthly && (m = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: u.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: C.toUpperCase()
      })), C === l.CurrencyCodes.EUR && (m = r ? c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, a.getI18NCountryName)(P),
        currencyISOCode: C.toUpperCase(),
        helpCenterLink: u.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }) : c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: C.toUpperCase(),
        helpCenterLink: u.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      })), I) {
      let e = E.filter(e => O.includes(e)),
        t = [...e, ...O.filter(e => !E.includes(e))].slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : c.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      O.length >= 3 && t.push(c.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let n = new Intl.ListFormat(A, {
        style: "short",
        type: "conjunction"
      });
      m = c.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: u.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: n.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: c.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, a.getI18NCountryName)(P)
      }),
      localizedPricingBannerBody: m,
      localizedPricingBannerLinkOnly: c.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: u.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: I ? void 0 : c.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  S = e => {
    let t = r.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }