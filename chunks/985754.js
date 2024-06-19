t.d(n, {
  Gv: function() {
    return N
  },
  Wo: function() {
    return E
  },
  vB: function() {
    return _
  }
}), t(47120), t(653041);
var r = t(217986),
  s = t(133080),
  l = t(63063),
  o = t(937615),
  a = t(981631),
  i = t(231338),
  u = t(689938);
let c = new Set([i.pK.ARS, i.pK.CLP, i.pK.COP]),
  d = new Set([i.pK.USD, i.pK.JPY]),
  E = {
    [a.HeQ.CARD]: () => u.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [a.HeQ.PAYPAL]: () => u.Z.Messages.PAYMENT_SOURCE_PAYPAL,
    [a.HeQ.SOFORT]: () => u.Z.Messages.PAYMENT_SOURCE_SOFORT,
    [a.HeQ.GIROPAY]: () => u.Z.Messages.PAYMENT_SOURCE_GIROPAY,
    [a.HeQ.PRZELEWY24]: () => u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [a.HeQ.PAYSAFE_CARD]: () => u.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [a.HeQ.GCASH]: () => u.Z.Messages.PAYMENT_SOURCE_GCASH,
    [a.HeQ.GRABPAY_MY]: () => u.Z.Messages.PAYMENT_SOURCE_GRABPAY,
    [a.HeQ.MOMO_WALLET]: () => u.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [a.HeQ.VENMO]: () => u.Z.Messages.PAYMENT_SOURCE_VENMO,
    [a.HeQ.KAKAOPAY]: () => u.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [a.HeQ.GOPAY_WALLET]: () => u.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [a.HeQ.BANCONTACT]: () => u.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
    [a.HeQ.EPS]: () => u.Z.Messages.PAYMENT_SOURCE_EPS,
    [a.HeQ.IDEAL]: () => u.Z.Messages.PAYMENT_SOURCE_IDEAL,
    [a.HeQ.CASH_APP]: () => u.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [a.HeQ.APPLE]: () => u.Z.Messages.PAYMENT_SOURCE_APPLE
  },
  C = [a.HeQ.EPS, a.HeQ.BANCONTACT, a.HeQ.IDEAL, a.HeQ.SOFORT, a.HeQ.GIROPAY, a.HeQ.SEPA_DEBIT, a.HeQ.PAYSAFE_CARD],
  N = (e, n, t, r) => {
    if (null == e) return "";
    let l = (0, s.q9)(e);
    if (n === i.pK.EUR) return t ? u.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: l
    }) : u.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: n.toUpperCase()
    });
    return r ? u.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: l
    }) : u.Z.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: l
    })
  },
  _ = e => {
    let {
      localizedPricingPromo: n,
      subscription: t,
      forceSingleLine: r = !1,
      userLocale: N
    } = e, {
      countryCode: _,
      amount: O,
      currency: f,
      paymentSourceTypes: I
    } = n, R = 0 !== I.length, P = A(_), M = (0, o.T4)(O, f, {
      style: "currency",
      currency: f,
      currencyDisplay: "symbol",
      localeOverride: P
    }), p = u.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: l.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
      currencyISOCode: f.toUpperCase(),
      localizedPriceWithCurrencySymbol: M
    });
    if (d.has(f) && (p = u.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: l.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: M
      })), c.has(f) && (p = u.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: l.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
        currencyISOCode: f.toUpperCase(),
        localizedPriceWithCurrencySymbol: M
      })), null != t && !t.hasPremiumNitroMonthly && (p = u.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: l.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
        currencyISOCode: f.toUpperCase()
      })), f === i.pK.EUR && (p = r ? u.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, s.q9)(_),
        currencyISOCode: f.toUpperCase(),
        helpCenterLink: l.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
      }) : u.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: f.toUpperCase(),
        helpCenterLink: l.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
      })), R) {
      let e = C.filter(e => I.includes(e)),
        n = [...e, ...I.filter(e => !C.includes(e))].slice(0, 2).map(e => {
          var n, t;
          return null !== (t = null === (n = E[e]) || void 0 === n ? void 0 : n.call(E)) && void 0 !== t ? t : u.Z.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      I.length >= 3 && n.push(u.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let t = new Intl.ListFormat(N, {
        style: "short",
        type: "conjunction"
      });
      p = u.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: l.Z.getArticleURL(a.BhN.LOCALIZED_PRICING),
        paymentMethods: t.format(n)
      })
    }
    return {
      localizedPricingBannerHeader: u.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, s.q9)(_)
      }),
      localizedPricingBannerBody: p,
      localizedPricingBannerLinkOnly: u.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: l.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: R ? void 0 : u.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  A = e => {
    let n = r.Z.find(n => n.alpha2 === e);
    return null == n ? void 0 : n.localeForICU
  }