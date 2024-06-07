"use strict";
s.r(t), s.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return f
  },
  getLocalizedPricingBannerStrings: function() {
    return p
  },
  getLocalizedPricingNotice: function() {
    return E
  }
}), s("47120"), s("653041");
var n = s("217986"),
  a = s("133080"),
  r = s("63063"),
  i = s("937615"),
  l = s("981631"),
  u = s("231338"),
  o = s("689938");
let c = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
  d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
  f = {
    [l.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [l.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [l.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
    [l.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [l.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [l.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [l.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
    [l.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [l.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [l.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
    [l.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [l.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [l.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [l.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
    [l.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
    [l.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [l.PaymentSourceTypes.APPLE]: () => o.default.Messages.PAYMENT_SOURCE_APPLE
  },
  C = [l.PaymentSourceTypes.EPS, l.PaymentSourceTypes.BANCONTACT, l.PaymentSourceTypes.IDEAL, l.PaymentSourceTypes.SOFORT, l.PaymentSourceTypes.GIROPAY, l.PaymentSourceTypes.SEPA_DEBIT, l.PaymentSourceTypes.PAYSAFE_CARD],
  E = (e, t, s, n) => {
    if (null == e) return "";
    let r = (0, a.getI18NCountryName)(e);
    if (t === u.CurrencyCodes.EUR) return s ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: r
    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return n ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: r
    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: r
    })
  },
  p = e => {
    let {
      localizedPricingPromo: t,
      subscription: s,
      forceSingleLine: n = !1,
      userLocale: E
    } = e, {
      countryCode: p,
      amount: A,
      currency: _,
      paymentSourceTypes: P
    } = t, h = 0 !== P.length, N = m(p), y = (0, i.formatPrice)(A, _, {
      style: "currency",
      currency: _,
      currencyDisplay: "symbol",
      localeOverride: N
    }), S = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: _.toUpperCase(),
      localizedPriceWithCurrencySymbol: y
    });
    if (d.has(_) && (S = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: y
      })), c.has(_) && (S = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: _.toUpperCase(),
        localizedPriceWithCurrencySymbol: y
      })), null != s && !s.hasPremiumNitroMonthly && (S = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: _.toUpperCase()
      })), _ === u.CurrencyCodes.EUR && (S = n ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, a.getI18NCountryName)(p),
        currencyISOCode: _.toUpperCase(),
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: _.toUpperCase(),
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      })), h) {
      let e = C.filter(e => P.includes(e)),
        t = [...e, ...P.filter(e => !C.includes(e))].slice(0, 2).map(e => {
          var t, s;
          return null !== (s = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== s ? s : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      P.length >= 3 && t.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let s = new Intl.ListFormat(E, {
        style: "short",
        type: "conjunction"
      });
      S = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: s.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, a.getI18NCountryName)(p)
      }),
      localizedPricingBannerBody: S,
      localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: h ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  m = e => {
    let t = n.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }