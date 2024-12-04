n.d(t, {
    TB: function () {
        return S;
    },
    VY: function () {
        return y;
    },
    ZP: function () {
        return E;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(442837),
    o = n(481060),
    C = n(16084),
    d = n(987209),
    u = n(179118),
    c = n(912788),
    p = n(509545),
    x = n(55563),
    h = n(74538),
    f = n(741245),
    _ = n(474936),
    j = n(981631),
    L = n(388032),
    m = n(307862);
function g(e) {
    var t, n;
    let l,
        { planId: s, startingPremiumSubscriptionPlanId: o, paymentSourceType: C } = e,
        [d, u] = (0, a.Wu)([p.Z], () => [p.Z.get(o), p.Z.get(s)]);
    if ((r()(null != d && null != u, 'Missing startingPlan or newPlan'), (t = o), (n = s), _.Y1.indexOf(t) < _.Y1.indexOf(n)))
        switch (s) {
            case _.Xh.PREMIUM_MONTH_TIER_1:
                (l = L.intl.string(L.t.knvOV1)), j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) && (l = L.intl.format(L.t.o6hBiY, {}));
                break;
            case _.Xh.PREMIUM_MONTH_TIER_2:
                (l = L.intl.string(L.t.f8Dqur)), j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) && (l = L.intl.format(L.t.A4THYm, {}));
                break;
            case _.Xh.PREMIUM_YEAR_TIER_1:
                (l = L.intl.string(L.t.YZd5r6)), j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) && (l = L.intl.format(L.t.MHAxpK, {}));
                break;
            case _.Xh.PREMIUM_YEAR_TIER_2:
                (l = L.intl.formatToPlainString(L.t['M/Lknp'], { numFreeGuildSubscriptions: _.cb })), j.X7u.has(null != C ? C : j.HeQ.UNKNOWN) && (l = L.intl.format(L.t.mULxLS, { numFreeGuildSubscriptions: _.cb }));
                break;
            case _.Xh.PREMIUM_3_MONTH_TIER_2:
            case _.Xh.PREMIUM_6_MONTH_TIER_2:
                l = L.intl.string(L.t.aaCoW1);
                break;
            case _.Xh.PREMIUM_MONTH_TIER_0:
            case _.Xh.PREMIUM_YEAR_TIER_0:
                l = L.intl.string(L.t['XEoQ7+']);
                break;
            default:
                throw Error('Unexpected planId: '.concat(s));
        }
    else if (d.skuId === _.Si.TIER_2 && u.skuId === _.Si.TIER_1) l = L.intl.string(L.t.PNX4ND);
    else
        switch (u.skuId) {
            case _.Si.TIER_0:
                l = L.intl.string(L.t['XEoQ7+']);
                break;
            case _.Si.TIER_1:
                l = L.intl.string(L.t.nLI1Ki);
                break;
            case _.Si.TIER_2:
                l = 1 !== d.intervalCount ? L.intl.string(L.t.qSZZVF) : L.intl.string(L.t.RNjcNj);
                break;
            default:
                throw Error('Unexpected skuId: '.concat(u.skuId));
        }
    return (0, i.jsx)('div', {
        className: m.text,
        children: l
    });
}
function E(e) {
    let t,
        n,
        { planId: s, enableNoPaymentTrial: d, startingPremiumSubscriptionPlanId: u, onClose: c, followupSKUInfo: E, isDowngrade: S, hideClose: y, postSuccessGuild: M, paymentSourceType: Z } = e,
        { theme: I } = (0, o.useThemeContext)(),
        v = (0, a.e7)([x.Z], () => (null != E ? x.Z.get(E.id) : null));
    l.useEffect(() => {
        if (null == E || null != v) return;
        let { applicationId: e, id: t } = E;
        (0, C.$N)(e, t).catch(j.VqG);
    }, [E, v]);
    let P = (e) => {
        if (e.skuId === _.Si.TIER_0) return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN) ? L.intl.format(L.t.o6hBiY, {}) : L.intl.string(L.t['AGf/yc']);
        if (e.skuId === _.Si.TIER_1) return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN) ? L.intl.format(L.t.o6hBiY, {}) : L.intl.string(L.t.knvOV1);
        return j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN) ? L.intl.format(L.t.A4THYm, {}) : d ? L.intl.string(L.t['g52y/v']) : L.intl.string(L.t.aTUr3d);
    };
    if (null != v)
        t = (0, i.jsx)('div', {
            className: m.text,
            children: L.intl.format(L.t.tsQOs7, { skuName: v.name })
        });
    else if (null != u)
        t = (0, i.jsx)(g, {
            planId: s,
            startingPremiumSubscriptionPlanId: u
        });
    else if (null != M) {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: m.text,
                        children: P(e)
                    }),
                    (0, i.jsx)('div', {
                        className: m.text,
                        children: L.intl.format(L.t['6aZ0NT'], { guildName: M.name })
                    })
                ]
            }));
    } else {
        let e = p.Z.get(s);
        r()(null != e, 'Missing plan'),
            (t = (0, i.jsx)('div', {
                className: m.text,
                children: P(e)
            }));
    }
    let T = h.ZP.getPremiumType(s);
    return (
        r()(null != T, 'premium type should not be null in purchase confirmation'),
        (n = null != v ? L.intl.formatToPlainString(L.t['1qGgm5'], { skuName: v.name }) : S ? L.intl.string(L.t.QJ9EyM) : null != M ? L.intl.string(L.t.ta3cXV) : L.intl.string(L.t.TkTvBw)),
        (0, i.jsxs)('div', {
            className: m.confirmation,
            children: [
                (0, i.jsx)(f.C, {
                    className: m.banner,
                    theme: I,
                    premiumType: T,
                    type: j.X7u.has(null != Z ? Z : j.HeQ.UNKNOWN) ? f.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? f.C.Types.PREMIUM_UPDATED : f.C.Types.PREMIUM_ACTIVATED
                }),
                t,
                y
                    ? null
                    : (0, i.jsx)(o.Button, {
                          onClick: c,
                          children: n
                      })
            ]
        })
    );
}
function S(e) {
    let { planId: t, onClose: n } = e,
        { giftRecipient: l, selectedGiftStyle: s, hasSentMessage: o, giftMessageError: C, isSendingMessage: x } = (0, d.wD)(),
        h = (0, a.e7)([p.Z], () => p.Z.get(t));
    r()(null != h, 'Missing plan');
    let f = (0, a.e7)([c.Z], () => c.Z.getGiftCode(h.skuId));
    return (0, i.jsx)(u.Z, {
        giftCode: f,
        subscriptionPlan: h,
        onClose: n,
        selectedGiftStyle: s,
        hasSentMessage: o,
        giftRecipient: l,
        giftMessageError: C,
        isSendingMessage: x
    });
}
function y() {
    return (0, i.jsxs)('div', {
        className: m.redirectConfirmation,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/bold',
                children: L.intl.string(L.t.Xtf9wM)
            }),
            (0, i.jsxs)('div', {
                className: m.redirectBody,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: L.intl.string(L.t.bIVRSU)
                    }),
                    (0, i.jsx)('br', {}),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: L.intl.string(L.t['0UJqOz'])
                    })
                ]
            })
        ]
    });
}
