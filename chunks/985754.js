"use strict";
r.r(t), r.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return C
  },
  getLocalizedPricingBannerStrings: function() {
    return _
  },
  getLocalizedPricingNotice: function() {
    return E
  }
}), r("47120"), r("653041");
var s = r("217986"),
  n = r("133080"),
  a = r("63063"),
  l = r("937615"),
  u = r("981631"),
  c = r("231338"),
  i = r("689938");
let o = new Set([c.CurrencyCodes.ARS, c.CurrencyCodes.CLP, c.CurrencyCodes.COP]),
  d = new Set([c.CurrencyCodes.USD, c.CurrencyCodes.JPY]),
  C = {
    [u.PaymentSourceTypes.CARD]: () => i.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [u.PaymentSourceTypes.PAYPAL]: () => i.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [u.PaymentSourceTypes.SOFORT]: () => i.default.Messages.PAYMENT_SOURCE_SOFORT,
    [u.PaymentSourceTypes.GIROPAY]: () => i.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [u.PaymentSourceTypes.PRZELEWY24]: () => i.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [u.PaymentSourceTypes.PAYSAFE_CARD]: () => i.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [u.PaymentSourceTypes.GCASH]: () => i.default.Messages.PAYMENT_SOURCE_GCASH,
    [u.PaymentSourceTypes.GRABPAY_MY]: () => i.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [u.PaymentSourceTypes.MOMO_WALLET]: () => i.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [u.PaymentSourceTypes.VENMO]: () => i.default.Messages.PAYMENT_SOURCE_VENMO,
    [u.PaymentSourceTypes.KAKAOPAY]: () => i.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [u.PaymentSourceTypes.GOPAY_WALLET]: () => i.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [u.PaymentSourceTypes.BANCONTACT]: () => i.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [u.PaymentSourceTypes.EPS]: () => i.default.Messages.PAYMENT_SOURCE_EPS,
    [u.PaymentSourceTypes.IDEAL]: () => i.default.Messages.PAYMENT_SOURCE_IDEAL,
    [u.PaymentSourceTypes.CASH_APP]: () => i.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [u.PaymentSourceTypes.APPLE]: () => i.default.Messages.PAYMENT_SOURCE_APPLE
  },
  f = [u.PaymentSourceTypes.EPS, u.PaymentSourceTypes.BANCONTACT, u.PaymentSourceTypes.IDEAL, u.PaymentSourceTypes.SOFORT, u.PaymentSourceTypes.GIROPAY, u.PaymentSourceTypes.SEPA_DEBIT, u.PaymentSourceTypes.PAYSAFE_CARD],
  E = (e, t, r, s) => {
    if (null == e) return "";
    let a = (0, n.getI18NCountryName)(e);
    if (t === c.CurrencyCodes.EUR) return r ? i.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: a
    }) : i.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return s ? i.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: a
    }) : i.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: a
    })
  },
  _ = e => {
    let {
      localizedPricingPromo: t,
      subscription: r,
      forceSingleLine: s = !1,
      userLocale: E
    } = e, {
      countryCode: _,
      amount: p,
      currency: P,
      paymentSourceTypes: N
    } = t, I = 0 !== N.length, O = A(_), S = (0, l.formatPrice)(p, P, {
      style: "currency",
      currency: P,
      currencyDisplay: "symbol",
      localeOverride: O
    }), R = i.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: P.toUpperCase(),
      localizedPriceWithCurrencySymbol: S
    });
    if (d.has(P) && (R = i.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: S
      })), o.has(P) && (R = i.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: P.toUpperCase(),
        localizedPriceWithCurrencySymbol: S
      })), null != r && !r.hasPremiumNitroMonthly && (R = i.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: P.toUpperCase()
      })), P === c.CurrencyCodes.EUR && (R = s ? i.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, n.getI18NCountryName)(_),
        currencyISOCode: P.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING)
      }) : i.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: P.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING)
      })), I) {
      let e = f.filter(e => N.includes(e)),
        t = [...e, ...N.filter(e => !f.includes(e))].slice(0, 2).map(e => {
          var t, r;
          return null !== (r = null === (t = C[e]) || void 0 === t ? void 0 : t.call(C)) && void 0 !== r ? r : i.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      N.length >= 3 && t.push(i.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let r = new Intl.ListFormat(E, {
        style: "short",
        type: "conjunction"
      });
      R = i.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: r.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: i.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, n.getI18NCountryName)(_)
      }),
      localizedPricingBannerBody: R,
      localizedPricingBannerLinkOnly: i.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: I ? void 0 : i.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  A = e => {
    let t = s.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }