n.d(t, {
  Gv: function() {
    return p
  },
  Wo: function() {
    return E
  },
  vB: function() {
    return f
  }
}), n(47120), n(653041);
var r = n(217986),
  a = n(133080),
  s = n(63063),
  l = n(937615),
  i = n(981631),
  o = n(231338),
  u = n(689938);
let c = new Set([o.pK.ARS, o.pK.CLP, o.pK.COP]),
  d = new Set([o.pK.USD, o.pK.JPY]),
  E = {
    [i.HeQ.CARD]: () => u.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
    [i.HeQ.PAYPAL]: () => u.Z.Messages.PAYMENT_SOURCE_PAYPAL,
    [i.HeQ.SOFORT]: () => u.Z.Messages.PAYMENT_SOURCE_SOFORT,
    [i.HeQ.GIROPAY]: () => u.Z.Messages.PAYMENT_SOURCE_GIROPAY,
    [i.HeQ.PRZELEWY24]: () => u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24,
    [i.HeQ.PAYSAFE_CARD]: () => u.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
    [i.HeQ.GCASH]: () => u.Z.Messages.PAYMENT_SOURCE_GCASH,
    [i.HeQ.GRABPAY_MY]: () => u.Z.Messages.PAYMENT_SOURCE_GRABPAY,
    [i.HeQ.MOMO_WALLET]: () => u.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
    [i.HeQ.VENMO]: () => u.Z.Messages.PAYMENT_SOURCE_VENMO,
    [i.HeQ.KAKAOPAY]: () => u.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
    [i.HeQ.GOPAY_WALLET]: () => u.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
    [i.HeQ.BANCONTACT]: () => u.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
    [i.HeQ.EPS]: () => u.Z.Messages.PAYMENT_SOURCE_EPS,
    [i.HeQ.IDEAL]: () => u.Z.Messages.PAYMENT_SOURCE_IDEAL,
    [i.HeQ.CASH_APP]: () => u.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
    [i.HeQ.APPLE]: () => u.Z.Messages.PAYMENT_SOURCE_APPLE
  },
  h = [i.HeQ.EPS, i.HeQ.BANCONTACT, i.HeQ.IDEAL, i.HeQ.SOFORT, i.HeQ.GIROPAY, i.HeQ.SEPA_DEBIT, i.HeQ.PAYSAFE_CARD],
  p = (e, t, n, r) => {
    if (null == e) return "";
    let s = (0, a.q9)(e);
    if (t === o.pK.EUR) return n ? u.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
      country: s
    }) : u.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
      currencyISOCode: t.toUpperCase()
    });
    return r ? u.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
      countryName: s
    }) : u.Z.Messages.LOCALIZED_PRICING_NOTICE.format({
      country: s
    })
  },
  f = e => {
    let {
      localizedPricingPromo: t,
      subscription: n,
      forceSingleLine: r = !1,
      userLocale: p
    } = e, {
      countryCode: f,
      amount: _,
      currency: A,
      paymentSourceTypes: O
    } = t, N = 0 !== O.length, I = C(f), S = (0, l.T4)(_, A, {
      style: "currency",
      currency: A,
      currencyDisplay: "symbol",
      localeOverride: I
    }), P = u.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
      helpCenterLink: s.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
      currencyISOCode: A.toUpperCase(),
      localizedPriceWithCurrencySymbol: S
    });
    if (d.has(A) && (P = u.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
        helpCenterLink: s.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
        localizedPriceWithCurrencySymbol: S
      })), c.has(A) && (P = u.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
        helpCenterLink: s.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase(),
        localizedPriceWithCurrencySymbol: S
      })), null != n && !n.hasPremiumNitroMonthly && (P = u.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
        helpCenterLink: s.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
        currencyISOCode: A.toUpperCase()
      })), A === o.pK.EUR && (P = r ? u.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
        country: (0, a.q9)(f),
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: s.Z.getArticleURL(i.BhN.LOCALIZED_PRICING)
      }) : u.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
        currencyISOCode: A.toUpperCase(),
        helpCenterLink: s.Z.getArticleURL(i.BhN.LOCALIZED_PRICING)
      })), N) {
      let e = h.filter(e => O.includes(e)),
        t = [...e, ...O.filter(e => !h.includes(e))].slice(0, 2).map(e => {
          var t, n;
          return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.call(E)) && void 0 !== n ? n : u.Z.Messages.PAYMENT_SOURCE_UNKNOWN
        });
      O.length >= 3 && t.push(u.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
      let n = new Intl.ListFormat(p, {
        style: "short",
        type: "conjunction"
      });
      P = u.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
        helpCenterLink: s.Z.getArticleURL(i.BhN.LOCALIZED_PRICING),
        paymentMethods: n.format(t)
      })
    }
    return {
      localizedPricingBannerHeader: u.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
        country: (0, a.q9)(f)
      }),
      localizedPricingBannerBody: P,
      localizedPricingBannerLinkOnly: u.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
        helpCenterLink: s.Z.getArticleURL(i.BhN.LOCALIZED_PRICING)
      }),
      localizedPricingBannerSubNotif: N ? void 0 : u.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
    }
  },
  C = e => {
    let t = r.Z.find(t => t.alpha2 === e);
    return null == t ? void 0 : t.localeForICU
  }