"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return f
  },
  getLocalizedPricingBannerStrings: function() {
    return E
  },
  getLocalizedPricingNotice: function() {
    return I
  }
}), n("47120"), n("653041");
var a = n("217986"),
  r = n("133080"),
  s = n("63063"),
  l = n("937615"),
  i = n("981631"),
  u = n("231338"),
  o = n("689938");
let d = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
  c = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
  f = {
    [i.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [i.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [i.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
    [i.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [i.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [i.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
    [i.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [i.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [i.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
    [i.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [i.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [i.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [i.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
    [i.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
    [i.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [i.PaymentSourceTypes.APPLE]: () => o.default.Messages.PAYMENT_SOURCE_APPLE
  },
  _ = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
  I = (e, t, n, a) => {
    if (null == e) return "";
    let s = (0, r.getI18NCountryName)(e);
    if (t === u.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: s
    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return a ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: s
    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: s
    })
  },
  E = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: a = !1,
      userLocale: I
    } = e, {
      countryCode: E,
      amount: P,
      currency: A,
      paymentSourceTypes: C
    } = t, N = 0 !== C.length, T = S(E), m = (0, l.formatPrice)(P, A, {
      style: "currency",
      currency: A,
      currencyDisplay: "symbol",
      localeOverride: T
    }), O = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: A.toUpperCase(),
      localizedPriceWithCurrencySymbol: m
    });
    if (c.has(A) && (O = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: m
      })), d.has(A) && (O = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase(),
        localizedPriceWithCurrencySymbol: m
      })), null != n && !n.hasPremiumNitroMonthly && (O = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase()
      })), A === u.CurrencyCodes.EUR && (O = a ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, r.getI18NCountryName)(E),
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      })), N) {
      let e = _.filter(e => C.includes(e)),
        t = [...e, ...C.filter(e => !_.includes(e))].slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      C.length >= 3 && t.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let n = new Intl.ListFormat(I, {
        style: "short",
        type: "conjunction"
      });
      O = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: n.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, r.getI18NCountryName)(E)
      }),
      localizedPricingBannerBody: O,
      localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: N ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  S = e => {
    let t = a.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }