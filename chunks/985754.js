"use strict";
n.r(t), n.d(t, {
  PAYMENT_SOURCE_NAMES: function() {
    return C
  },
  getLocalizedPricingBannerStrings: function() {
    return f
  },
  getLocalizedPricingNotice: function() {
    return _
  }
}), n("47120"), n("653041");
var s = n("217986"),
  a = n("133080"),
  r = n("63063"),
  i = n("937615"),
  l = n("981631"),
  u = n("231338"),
  o = n("689938");
let d = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
  c = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
  C = {
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
  E = [l.PaymentSourceTypes.EPS, l.PaymentSourceTypes.BANCONTACT, l.PaymentSourceTypes.IDEAL, l.PaymentSourceTypes.SOFORT, l.PaymentSourceTypes.GIROPAY, l.PaymentSourceTypes.SEPA_DEBIT, l.PaymentSourceTypes.PAYSAFE_CARD],
  _ = (e, t, n, s) => {
    if (null == e) return "";
    let r = (0, a.getI18NCountryName)(e);
    if (t === u.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: r
    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return s ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: r
    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: r
    })
  },
  f = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: s = !1,
      userLocale: _
    } = e, {
      countryCode: f,
      amount: p,
      currency: m,
      paymentSourceTypes: h
    } = t, N = 0 !== h.length, P = A(f), I = (0, i.formatPrice)(p, m, {
      style: "currency",
      currency: m,
      currencyDisplay: "symbol",
      localeOverride: P
    }), R = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
      currencyISOCode: m.toUpperCase(),
      localizedPriceWithCurrencySymbol: I
    });
    if (c.has(m) && (R = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: I
      })), d.has(m) && (R = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: m.toUpperCase(),
        localizedPriceWithCurrencySymbol: I
      })), null != n && !n.hasPremiumNitroMonthly && (R = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        currencyISOCode: m.toUpperCase()
      })), m === u.CurrencyCodes.EUR && (R = s ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, a.getI18NCountryName)(f),
        currencyISOCode: m.toUpperCase(),
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: m.toUpperCase(),
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      })), N) {
      let e = E.filter(e => h.includes(e)),
        t = [...e, ...h.filter(e => !E.includes(e))].slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = C[e]) || void 0 === t ? void 0 : t.call(C)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      h.length >= 3 && t.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let n = new Intl.ListFormat(_, {
        style: "short",
        type: "conjunction"
      });
      R = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
        paymentMethods: n.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, a.getI18NCountryName)(f)
      }),
      localizedPricingBannerBody: R,
      localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: r.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: N ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  A = e => {
    let t = s.default.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }