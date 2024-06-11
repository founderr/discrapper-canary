"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return f
  },
  getLocalizedPricingBannerStrings: function() {
    return P
  },
  getLocalizedPricingNotice: function() {
    return E
  }
}), n("47120"), n("653041");
var s = n("217986"),
  r = n("133080"),
  a = n("63063"),
  l = n("937615"),
  u = n("981631"),
  i = n("231338"),
  o = n("689938");
let c = new Set([i.CurrencyCodes.ARS, i.CurrencyCodes.CLP, i.CurrencyCodes.COP]),
  d = new Set([i.CurrencyCodes.USD, i.CurrencyCodes.JPY]),
  f = {
    [u.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [u.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [u.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
    [u.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [u.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [u.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [u.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
    [u.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [u.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [u.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
    [u.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [u.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [u.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [u.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
    [u.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
    [u.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [u.PaymentSourceTypes.APPLE]: () => o.default.Messages.PAYMENT_SOURCE_APPLE
  },
  C = [u.PaymentSourceTypes.EPS, u.PaymentSourceTypes.BANCONTACT, u.PaymentSourceTypes.IDEAL, u.PaymentSourceTypes.SOFORT, u.PaymentSourceTypes.GIROPAY, u.PaymentSourceTypes.SEPA_DEBIT, u.PaymentSourceTypes.PAYSAFE_CARD],
  E = (e, t, n, s) => {
    if (null == e) return "";
    let a = (0, r.getI18NCountryName)(e);
    if (t === i.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: a
    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return s ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: a
    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: a
    })
  },
  P = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: s = !1,
      userLocale: E
    } = e, {
      countryCode: P,
      amount: S,
      currency: m,
      paymentSourceTypes: N
    } = t, p = 0 !== N.length, _ = A(P), I = (0, l.formatPrice)(S, m, {
      style: "currency",
      currency: m,
      currencyDisplay: "symbol",
      localeOverride: _
    }), O = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: m.toUpperCase(),
      localizedPriceWithCurrencySymbol: I
    });
    if (d.has(m) && (O = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: I
      })), c.has(m) && (O = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: m.toUpperCase(),
        localizedPriceWithCurrencySymbol: I
      })), null != n && !n.hasPremiumNitroMonthly && (O = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: m.toUpperCase()
      })), m === i.CurrencyCodes.EUR && (O = s ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, r.getI18NCountryName)(P),
        currencyISOCode: m.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING)
      }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: m.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING)
      })), p) {
      let e = C.filter(e => N.includes(e)),
        t = [...e, ...N.filter(e => !C.includes(e))].slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      N.length >= 3 && t.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let n = new Intl.ListFormat(E, {
        style: "short",
        type: "conjunction"
      });
      O = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: n.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, r.getI18NCountryName)(P)
      }),
      localizedPricingBannerBody: O,
      localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: a.default.getArticleURL(u.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: p ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  A = e => {
    let t = s.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }