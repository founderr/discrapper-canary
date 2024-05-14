"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return p
  },
  getLocalizedPricingBannerStrings: function() {
    return y
  },
  getLocalizedPricingNotice: function() {
    return C
  }
}), n("47120"), n("653041");
var a = n("217986"),
  r = n("133080"),
  s = n("63063"),
  o = n("937615"),
  i = n("981631"),
  l = n("231338"),
  u = n("689938");
let c = new Set([l.CurrencyCodes.ARS, l.CurrencyCodes.CLP, l.CurrencyCodes.COP]),
  d = new Set([l.CurrencyCodes.USD, l.CurrencyCodes.JPY]),
  p = {
    [i.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [i.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [i.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
    [i.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [i.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [i.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
    [i.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [i.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [i.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
    [i.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [i.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [i.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [i.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
    [i.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
    [i.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [i.PaymentSourceTypes.APPLE]: () => u.default.Messages.PAYMENT_SOURCE_APPLE
  },
  f = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
  C = (e, t, n, a) => {
    if (null == e) return "";
    let s = (0, r.getI18NCountryName)(e);
    if (t === l.CurrencyCodes.EUR) return n ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: s
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return a ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: s
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: s
    })
  },
  y = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: a = !1,
      userLocale: C
    } = e, {
      countryCode: y,
      amount: _,
      currency: A,
      paymentSourceTypes: m
    } = t, E = 0 !== m.length, h = P(y), S = (0, o.formatPrice)(_, A, {
      style: "currency",
      currency: A,
      currencyDisplay: "symbol",
      localeOverride: h
    }), N = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: A.toUpperCase(),
      localizedPriceWithCurrencySymbol: S
    });
    if (d.has(A) && (N = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: S
      })), c.has(A) && (N = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase(),
        localizedPriceWithCurrencySymbol: S
      })), null != n && !n.hasPremiumNitroMonthly && (N = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase()
      })), A === l.CurrencyCodes.EUR && (N = a ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, r.getI18NCountryName)(y),
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      })), E) {
      let e = f.filter(e => m.includes(e)),
        t = [...e, ...m.filter(e => !f.includes(e))].slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = p[e]) || void 0 === t ? void 0 : t.call(p)) && void 0 !== n ? n : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      m.length >= 3 && t.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let n = new Intl.ListFormat(C, {
        style: "short",
        type: "conjunction"
      });
      N = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: n.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, r.getI18NCountryName)(y)
      }),
      localizedPricingBannerBody: N,
      localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: s.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: E ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  P = e => {
    let t = a.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }