"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return E
  },
  getLocalizedPricingNotice: function() {
    return _
  },
  getLocalizedPricingBannerStrings: function() {
    return T
  }
}), n("222007"), n("424973");
var s = n("592861"),
  l = n("988415"),
  a = n("701909"),
  i = n("153160"),
  r = n("49111"),
  o = n("843455"),
  u = n("782340");
let d = new Set([o.CurrencyCodes.ARS, o.CurrencyCodes.CLP, o.CurrencyCodes.COP]),
  c = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
  E = {
    [r.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [r.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
    [r.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
    [r.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
    [r.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [r.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [r.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
    [r.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
    [r.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [r.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
    [r.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [r.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [r.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
    [r.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
    [r.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
    [r.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [r.PaymentSourceTypes.APPLE]: () => u.default.Messages.PAYMENT_SOURCE_APPLE
  },
  f = [r.PaymentSourceTypes.EPS, r.PaymentSourceTypes.BANCONTACT, r.PaymentSourceTypes.IDEAL, r.PaymentSourceTypes.SOFORT, r.PaymentSourceTypes.GIROPAY, r.PaymentSourceTypes.SEPA_DEBIT, r.PaymentSourceTypes.PAYSAFE_CARD],
  _ = (e, t, n, s) => {
    if (null == e) return "";
    let a = (0, l.getI18NCountryName)(e);
    if (t === o.CurrencyCodes.EUR) return n ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: a
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return s ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: a
    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: a
    })
  },
  T = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: s = !1,
      userLocale: _
    } = e, {
      countryCode: T,
      amount: m,
      currency: N,
      paymentSourceTypes: p
    } = t, A = 0 !== p.length, S = I(T), C = (0, i.formatPrice)(m, N, {
      style: "currency",
      currency: N,
      currencyDisplay: "symbol",
      localeOverride: S
    }), h = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: a.default.getArticleURL(r.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: N.toUpperCase(),
      localizedPriceWithCurrencySymbol: C
    });
    if (c.has(N) && (h = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: a.default.getArticleURL(r.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: C
      })), d.has(N) && (h = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: a.default.getArticleURL(r.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: N.toUpperCase(),
        localizedPriceWithCurrencySymbol: C
      })), null != n && !n.hasPremiumNitroMonthly && (h = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: a.default.getArticleURL(r.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: N.toUpperCase()
      })), N === o.CurrencyCodes.EUR && (h = s ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, l.getI18NCountryName)(T),
        currencyISOCode: N.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(r.HelpdeskArticles.LOCALIZED_PRICING)
      }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: N.toUpperCase(),
        helpCenterLink: a.default.getArticleURL(r.HelpdeskArticles.LOCALIZED_PRICING)
      })), A) {
      let e = f.filter(e => p.includes(e)),
        t = p.filter(e => !f.includes(e)),
        n = [...e, ...t],
        s = n.slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.call(E)) && void 0 !== n ? n : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      p.length >= 3 && s.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let l = new Intl.ListFormat(_, {
        style: "short",
        type: "conjunction"
      });
      h = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: a.default.getArticleURL(r.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: l.format(s)
      })
    }
    return {
      localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, l.getI18NCountryName)(T)
      }),
      localizedPricingBannerBody: h,
      localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: a.default.getArticleURL(r.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: A ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  I = e => {
    let t = s.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }