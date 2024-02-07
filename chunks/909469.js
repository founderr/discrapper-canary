"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return f
  },
  getLocalizedPricingNotice: function() {
    return _
  },
  getLocalizedPricingBannerStrings: function() {
    return E
  }
}), n("222007"), n("424973");
var s = n("592861"),
  r = n("988415"),
  a = n("701909"),
  l = n("153160"),
  i = n("49111"),
  u = n("843455"),
  c = n("782340");
let o = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
  d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
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
  m = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
  _ = (e, t, n, s) => {
    if (null == e) return "";
    let a = (0, r.getI18NCountryName)(e);
    if (t === u.CurrencyCodes.EUR) return n ? c.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: a
    }) : c.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return s ? c.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: a
    }) : c.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: a
    })
  },
  E = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: s = !1,
      userLocale: _
    } = e, {
      countryCode: E,
      amount: p,
      currency: S,
      paymentSourceTypes: P
    } = t, N = 0 !== P.length, T = I(E), C = (0, l.formatPrice)(p, S, {
      style: "currency",
      currency: S,
      currencyDisplay: "symbol",
      localeOverride: T
    }), A = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: S.toUpperCase(),
      localizedPriceWithCurrencySymbol: C
    });
    if (d.has(S) && (A = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: C
      })), o.has(S) && (A = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: S.toUpperCase(),
        localizedPriceWithCurrencySymbol: C
      })), null != n && !n.hasPremiumNitroMonthly && (A = c.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: S.toUpperCase()
      })), S === u.CurrencyCodes.EUR && (A = s ? c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, r.getI18NCountryName)(E),
        currencyISOCode: S.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }) : c.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: S.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      })), N) {
      let e = m.filter(e => P.includes(e)),
        t = P.filter(e => !m.includes(e)),
        n = [...e, ...t],
        s = n.slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : c.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      P.length >= 3 && s.push(c.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let r = new Intl.ListFormat(_, {
        style: "short",
        type: "conjunction"
      });
      A = c.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: r.format(s)
      })
    }
    return {
      localizedPricingBannerHeader: c.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, r.getI18NCountryName)(E)
      }),
      localizedPricingBannerBody: A,
      localizedPricingBannerLinkOnly: c.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: N ? void 0 : c.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  I = e => {
    let t = s.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }