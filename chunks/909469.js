"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return f
  },
  getLocalizedPricingNotice: function() {
    return _
  },
  getLocalizedPricingBannerStrings: function() {
    return p
  }
}), n("222007"), n("424973");
var r = n("592861"),
  i = n("988415"),
  l = n("701909"),
  o = n("153160"),
  s = n("49111"),
  u = n("843455"),
  a = n("782340");
let c = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
  d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
  f = {
    [s.PaymentSourceTypes.CARD]: () => a.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [s.PaymentSourceTypes.PAYPAL]: () => a.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [s.PaymentSourceTypes.SOFORT]: () => a.default.Messages.PAYMENT_SOURCE_SOFORT,
    [s.PaymentSourceTypes.GIROPAY]: () => a.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [s.PaymentSourceTypes.PRZELEWY24]: () => a.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [s.PaymentSourceTypes.PAYSAFE_CARD]: () => a.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [s.PaymentSourceTypes.GCASH]: () => a.default.Messages.PAYMENT_SOURCE_GCASH,
    [s.PaymentSourceTypes.GRABPAY_MY]: () => a.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [s.PaymentSourceTypes.MOMO_WALLET]: () => a.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [s.PaymentSourceTypes.VENMO]: () => a.default.Messages.PAYMENT_SOURCE_VENMO,
    [s.PaymentSourceTypes.KAKAOPAY]: () => a.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [s.PaymentSourceTypes.GOPAY_WALLET]: () => a.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [s.PaymentSourceTypes.BANCONTACT]: () => a.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [s.PaymentSourceTypes.EPS]: () => a.default.Messages.PAYMENT_SOURCE_EPS,
    [s.PaymentSourceTypes.IDEAL]: () => a.default.Messages.PAYMENT_SOURCE_IDEAL,
    [s.PaymentSourceTypes.CASH_APP]: () => a.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [s.PaymentSourceTypes.APPLE]: () => a.default.Messages.PAYMENT_SOURCE_APPLE
  },
  E = [s.PaymentSourceTypes.EPS, s.PaymentSourceTypes.BANCONTACT, s.PaymentSourceTypes.IDEAL, s.PaymentSourceTypes.SOFORT, s.PaymentSourceTypes.GIROPAY, s.PaymentSourceTypes.SEPA_DEBIT, s.PaymentSourceTypes.PAYSAFE_CARD],
  _ = (e, t, n, r) => {
    if (null == e) return "";
    let l = (0, i.getI18NCountryName)(e);
    if (t === u.CurrencyCodes.EUR) return n ? a.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: l
    }) : a.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return r ? a.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: l
    }) : a.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: l
    })
  },
  p = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: r = !1,
      userLocale: _
    } = e, {
      countryCode: p,
      amount: I,
      currency: A,
      paymentSourceTypes: T
    } = t, R = 0 !== T.length, S = C(p), N = (0, o.formatPrice)(I, A, {
      style: "currency",
      currency: A,
      currencyDisplay: "symbol",
      localeOverride: S
    }), h = a.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: A.toUpperCase(),
      localizedPriceWithCurrencySymbol: N
    });
    if (d.has(A) && (h = a.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: N
      })), c.has(A) && (h = a.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase(),
        localizedPriceWithCurrencySymbol: N
      })), null != n && !n.hasPremiumNitroMonthly && (h = a.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase()
      })), A === u.CurrencyCodes.EUR && (h = r ? a.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, i.getI18NCountryName)(p),
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
      }) : a.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
      })), R) {
      let e = E.filter(e => T.includes(e)),
        t = T.filter(e => !E.includes(e)),
        n = [...e, ...t],
        r = n.slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : a.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      T.length >= 3 && r.push(a.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let i = new Intl.ListFormat(_, {
        style: "short",
        type: "conjunction"
      });
      h = a.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: i.format(r)
      })
    }
    return {
      localizedPricingBannerHeader: a.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, i.getI18NCountryName)(p)
      }),
      localizedPricingBannerBody: h,
      localizedPricingBannerLinkOnly: a.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: l.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: R ? void 0 : a.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  C = e => {
    let t = r.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }