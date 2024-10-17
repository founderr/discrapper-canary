t.d(a, {
    Gv: function () {
        return A;
    },
    Wo: function () {
        return E;
    },
    vB: function () {
        return m;
    }
}),
    t(47120),
    t(653041);
var n = t(217986),
    s = t(133080),
    r = t(63063),
    l = t(937615),
    o = t(981631),
    i = t(231338),
    c = t(689938);
let u = new Set([i.pK.ARS, i.pK.CLP, i.pK.COP]),
    d = new Set([i.pK.USD, i.pK.JPY]),
    E = {
        [o.HeQ.CARD]: () => c.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
        [o.HeQ.PAYPAL]: () => c.Z.Messages.PAYMENT_SOURCE_PAYPAL,
        [o.HeQ.SOFORT]: () => c.Z.Messages.PAYMENT_SOURCE_SOFORT,
        [o.HeQ.GIROPAY]: () => c.Z.Messages.PAYMENT_SOURCE_GIROPAY,
        [o.HeQ.PRZELEWY24]: () => c.Z.Messages.PAYMENT_SOURCE_PRZELEWY24,
        [o.HeQ.PAYSAFE_CARD]: () => c.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
        [o.HeQ.GCASH]: () => c.Z.Messages.PAYMENT_SOURCE_GCASH,
        [o.HeQ.GRABPAY_MY]: () => c.Z.Messages.PAYMENT_SOURCE_GRABPAY,
        [o.HeQ.MOMO_WALLET]: () => c.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
        [o.HeQ.VENMO]: () => c.Z.Messages.PAYMENT_SOURCE_VENMO,
        [o.HeQ.KAKAOPAY]: () => c.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
        [o.HeQ.GOPAY_WALLET]: () => c.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
        [o.HeQ.BANCONTACT]: () => c.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
        [o.HeQ.EPS]: () => c.Z.Messages.PAYMENT_SOURCE_EPS,
        [o.HeQ.IDEAL]: () => c.Z.Messages.PAYMENT_SOURCE_IDEAL,
        [o.HeQ.CASH_APP]: () => c.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
        [o.HeQ.APPLE]: () => c.Z.Messages.PAYMENT_SOURCE_APPLE
    },
    _ = [o.HeQ.EPS, o.HeQ.BANCONTACT, o.HeQ.IDEAL, o.HeQ.SOFORT, o.HeQ.GIROPAY, o.HeQ.SEPA_DEBIT, o.HeQ.PAYSAFE_CARD],
    A = (e, a, t, n) => {
        if (null == e) return '';
        let r = (0, s.q9)(e);
        if (a === i.pK.EUR) return t ? c.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({ country: r }) : c.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({ currencyISOCode: a.toUpperCase() });
        return n ? c.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({ countryName: r }) : c.Z.Messages.LOCALIZED_PRICING_NOTICE.format({ country: r });
    },
    m = (e) => {
        let { localizedPricingPromo: a, subscription: t, forceSingleLine: n = !1, userLocale: A } = e,
            { countryCode: m, amount: p, currency: h, paymentSourceTypes: C } = a,
            I = 0 !== C.length,
            T = N(m),
            P = (0, l.T4)(p, h, {
                style: 'currency',
                currency: h,
                currencyDisplay: 'symbol',
                localeOverride: T
            }),
            S = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                helpCenterLink: r.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                currencyISOCode: h.toUpperCase(),
                localizedPriceWithCurrencySymbol: P
            });
        if (
            (d.has(h) &&
                (S = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                    helpCenterLink: r.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: P
                })),
            u.has(h) &&
                (S = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                    helpCenterLink: r.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    currencyISOCode: h.toUpperCase(),
                    localizedPriceWithCurrencySymbol: P
                })),
            null != t &&
                !t.hasPremiumNitroMonthly &&
                (S = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                    helpCenterLink: r.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    currencyISOCode: h.toUpperCase()
                })),
            h === i.pK.EUR &&
                (S = n
                    ? c.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                          country: (0, s.q9)(m),
                          currencyISOCode: h.toUpperCase(),
                          helpCenterLink: r.Z.getArticleURL(o.BhN.LOCALIZED_PRICING)
                      })
                    : c.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                          currencyISOCode: h.toUpperCase(),
                          helpCenterLink: r.Z.getArticleURL(o.BhN.LOCALIZED_PRICING)
                      })),
            I)
        ) {
            let e = _.filter((e) => C.includes(e)),
                a = [...e, ...C.filter((e) => !_.includes(e))].slice(0, 2).map((e) => {
                    var a, t;
                    return null !== (t = null === (a = E[e]) || void 0 === a ? void 0 : a.call(E)) && void 0 !== t ? t : c.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
                });
            C.length >= 3 && a.push(c.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
            let t = new Intl.ListFormat(A, {
                style: 'short',
                type: 'conjunction'
            });
            S = c.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                helpCenterLink: r.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                paymentMethods: t.format(a)
            });
        }
        return {
            localizedPricingBannerHeader: c.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({ country: (0, s.q9)(m) }),
            localizedPricingBannerBody: S,
            localizedPricingBannerLinkOnly: c.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({ helpCenterLink: r.Z.getArticleURL(o.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: I ? void 0 : c.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
        };
    },
    N = (e) => {
        let a = n.Z.find((a) => a.alpha2 === e);
        return null == a ? void 0 : a.localeForICU;
    };
