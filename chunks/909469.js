"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return _
  },
  getLocalizedPricingNotice: function() {
    return E
  },
  getLocalizedPricingBannerStrings: function() {
    return C
  }
}), n("222007"), n("424973");
var r = n("592861"),
  s = n("988415"),
  i = n("701909"),
  a = n("153160"),
  l = n("49111"),
  o = n("843455"),
  u = n("782340");
let c = new Set([o.CurrencyCodes.ARS, o.CurrencyCodes.CLP, o.CurrencyCodes.COP]),
  d = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
  _ = {
    [l.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [l.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [l.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
    [l.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [l.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [l.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [l.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
    [l.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [l.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [l.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
    [l.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [l.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [l.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [l.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
    [l.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
    [l.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [l.PaymentSourceTypes.APPLE]: () => u.default.Messages.PAYMENT_SOURCE_APPLE
  },
  f = [l.PaymentSourceTypes.EPS, l.PaymentSourceTypes.BANCONTACT, l.PaymentSourceTypes.IDEAL, l.PaymentSourceTypes.SOFORT, l.PaymentSourceTypes.GIROPAY, l.PaymentSourceTypes.SEPA_DEBIT, l.PaymentSourceTypes.PAYSAFE_CARD],
  E = (e, t, n, r) => {
    if (null == e) return "";
    let i = (0, s.getI18NCountryName)(e);
    if (t === o.CurrencyCodes.EUR) return n ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: i
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return r ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: i
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: i
    })
  },
  C = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: r = !1,
      userLocale: E
    } = e, {
      countryCode: C,
      amount: h,
      currency: p,
      paymentSourceTypes: A
    } = t, R = 0 !== A.length, N = I(C), T = (0, a.formatPrice)(h, p, {
      style: "currency",
      currency: p,
      currencyDisplay: "symbol",
      localeOverride: N
    }), m = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: p.toUpperCase(),
      localizedPriceWithCurrencySymbol: T
    });
    if (d.has(p) && (m = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: T
      })), c.has(p) && (m = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: p.toUpperCase(),
        localizedPriceWithCurrencySymbol: T
      })), null != n && !n.hasPremiumNitroMonthly && (m = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: p.toUpperCase()
      })), p === o.CurrencyCodes.EUR && (m = r ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, s.getI18NCountryName)(C),
        currencyISOCode: p.toUpperCase(),
        helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: p.toUpperCase(),
        helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      })), R) {
      let e = f.filter(e => A.includes(e)),
        t = A.filter(e => !f.includes(e)),
        n = [...e, ...t],
        r = n.slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.call(_)) && void 0 !== n ? n : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      A.length >= 3 && r.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let s = new Intl.ListFormat(E, {
        style: "short",
        type: "conjunction"
      });
      m = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: s.format(r)
      })
    }
    return {
      localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, s.getI18NCountryName)(C)
      }),
      localizedPricingBannerBody: m,
      localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: i.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: R ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  I = e => {
    let t = r.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }