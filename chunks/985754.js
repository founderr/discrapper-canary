"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return f
  },
  getLocalizedPricingBannerStrings: function() {
    return S
  },
  getLocalizedPricingNotice: function() {
    return P
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
  P = (e, t, n, a) => {
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
  S = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: a = !1,
      userLocale: P
    } = e, {
      countryCode: S,
      amount: E,
      currency: p,
      paymentSourceTypes: C
    } = t, I = 0 !== C.length, m = A(S), T = (0, l.formatPrice)(E, p, {
      style: "currency",
      currency: p,
      currencyDisplay: "symbol",
      localeOverride: m
    }), N = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: p.toUpperCase(),
      localizedPriceWithCurrencySymbol: T
    });
    if (c.has(p) && (N = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: T
      })), d.has(p) && (N = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: p.toUpperCase(),
        localizedPriceWithCurrencySymbol: T
      })), null != n && !n.hasPremiumNitroMonthly && (N = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: p.toUpperCase()
      })), p === u.CurrencyCodes.EUR && (N = a ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, r.getI18NCountryName)(S),
        currencyISOCode: p.toUpperCase(),
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: p.toUpperCase(),
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      })), I) {
      let e = _.filter(e => C.includes(e)),
        t = [...e, ...C.filter(e => !_.includes(e))].slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      C.length >= 3 && t.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let n = new Intl.ListFormat(P, {
        style: "short",
        type: "conjunction"
      });
      N = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: n.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, r.getI18NCountryName)(S)
      }),
      localizedPricingBannerBody: N,
      localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: I ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  A = e => {
    let t = a.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }