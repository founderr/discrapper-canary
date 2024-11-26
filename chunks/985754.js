n.d(t, {
    Gv: function () {
        return h;
    },
    Wo: function () {
        return m;
    },
    vB: function () {
        return A;
    }
}),
    n(47120),
    n(653041);
var a = n(217986),
    r = n(133080),
    l = n(63063),
    i = n(937615),
    o = n(981631),
    s = n(231338),
    c = n(388032);
let u = new Set([s.pK.ARS, s.pK.CLP, s.pK.COP]),
    d = new Set([s.pK.USD, s.pK.JPY]),
    m = {
        [o.HeQ.CARD]: () => c.intl.string(c.t['ei5/p6']),
        [o.HeQ.PAYPAL]: () => c.intl.string(c.t['2dgEq6']),
        [o.HeQ.SOFORT]: () => c.intl.string(c.t['edKX//']),
        [o.HeQ.GIROPAY]: () => c.intl.string(c.t['y+0MQU']),
        [o.HeQ.PRZELEWY24]: () => c.intl.string(c.t.u25uLy),
        [o.HeQ.PAYSAFE_CARD]: () => c.intl.string(c.t.boznHB),
        [o.HeQ.GCASH]: () => c.intl.string(c.t.PjehcH),
        [o.HeQ.GRABPAY_MY]: () => c.intl.string(c.t.T5davL),
        [o.HeQ.MOMO_WALLET]: () => c.intl.string(c.t.J0A1Vl),
        [o.HeQ.VENMO]: () => c.intl.string(c.t.jYOezc),
        [o.HeQ.KAKAOPAY]: () => c.intl.string(c.t.CSVexs),
        [o.HeQ.GOPAY_WALLET]: () => c.intl.string(c.t['43J8JC']),
        [o.HeQ.BANCONTACT]: () => c.intl.string(c.t['1ITkfn']),
        [o.HeQ.EPS]: () => c.intl.string(c.t['5BSDU1']),
        [o.HeQ.IDEAL]: () => c.intl.string(c.t.nSbwqK),
        [o.HeQ.CASH_APP]: () => c.intl.string(c.t['+rbTmJ']),
        [o.HeQ.APPLE]: () => c.intl.string(c.t.RFi12t)
    },
    p = [o.HeQ.EPS, o.HeQ.BANCONTACT, o.HeQ.IDEAL, o.HeQ.SOFORT, o.HeQ.GIROPAY, o.HeQ.SEPA_DEBIT, o.HeQ.PAYSAFE_CARD],
    h = (e, t, n, a) => {
        if (null == e) return '';
        let l = (0, r.q9)(e);
        if (t === s.pK.EUR) return n ? c.intl.formatToPlainString(c.t['+5bXbW'], { country: l }) : c.intl.formatToPlainString(c.t['0jblPj'], { currencyISOCode: t.toUpperCase() });
        return a ? c.intl.formatToPlainString(c.t['dBFL//'], { countryName: l }) : c.intl.formatToPlainString(c.t.RJ4939, { country: l });
    },
    A = (e) => {
        let { localizedPricingPromo: t, subscription: n, forceSingleLine: a = !1, userLocale: h } = e,
            { countryCode: A, amount: N, currency: f, paymentSourceTypes: y } = t,
            _ = 0 !== y.length,
            P = E(A),
            b = (0, i.T4)(N, f, {
                style: 'currency',
                currency: f,
                currencyDisplay: 'symbol',
                localeOverride: P
            }),
            g = c.intl.format(c.t['4cHbQ0'], {
                helpCenterLink: l.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                currencyISOCode: f.toUpperCase(),
                localizedPriceWithCurrencySymbol: b
            });
        if (
            (d.has(f) &&
                (g = c.intl.format(c.t['5kvQMz'], {
                    helpCenterLink: l.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    localizedPriceWithCurrencySymbol: b
                })),
            u.has(f) &&
                (g = c.intl.format(c.t.BrYPGh, {
                    helpCenterLink: l.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    currencyISOCode: f.toUpperCase(),
                    localizedPriceWithCurrencySymbol: b
                })),
            null != n &&
                !n.hasPremiumNitroMonthly &&
                (g = c.intl.format(c.t.xnD0NT, {
                    helpCenterLink: l.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                    currencyISOCode: f.toUpperCase()
                })),
            f === s.pK.EUR &&
                (g = a
                    ? c.intl.format(c.t.o60rUF, {
                          country: (0, r.q9)(A),
                          currencyISOCode: f.toUpperCase(),
                          helpCenterLink: l.Z.getArticleURL(o.BhN.LOCALIZED_PRICING)
                      })
                    : c.intl.format(c.t['N1xw/f'], {
                          currencyISOCode: f.toUpperCase(),
                          helpCenterLink: l.Z.getArticleURL(o.BhN.LOCALIZED_PRICING)
                      })),
            _)
        ) {
            let e = p.filter((e) => y.includes(e)),
                t = [...e, ...y.filter((e) => !p.includes(e))].slice(0, 2).map((e) => {
                    var t, n;
                    return null !== (n = null === (t = m[e]) || void 0 === t ? void 0 : t.call(m)) && void 0 !== n ? n : c.intl.string(c.t.jdPblp);
                });
            y.length >= 3 && t.push(c.intl.string(c.t.Tp5NkZ));
            let n = new Intl.ListFormat(h, {
                style: 'short',
                type: 'conjunction'
            });
            g = c.intl.format(c.t.QqRQPj, {
                helpCenterLink: l.Z.getArticleURL(o.BhN.LOCALIZED_PRICING),
                paymentMethods: n.format(t)
            });
        }
        return {
            localizedPricingBannerHeader: c.intl.formatToPlainString(c.t.BuFSam, { country: (0, r.q9)(A) }),
            localizedPricingBannerBody: g,
            localizedPricingBannerLinkOnly: c.intl.format(c.t.XufWPj, { helpCenterLink: l.Z.getArticleURL(o.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: _ ? void 0 : c.intl.string(c.t.YDdBe3)
        };
    },
    E = (e) => {
        let t = a.Z.find((t) => t.alpha2 === e);
        return null == t ? void 0 : t.localeForICU;
    };
