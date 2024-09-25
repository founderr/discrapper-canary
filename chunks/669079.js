n.d(t, {
    Bg: function () {
        return F;
    },
    E5: function () {
        return en;
    },
    Fp: function () {
        return H;
    },
    JT: function () {
        return et;
    },
    L2: function () {
        return Q;
    },
    MY: function () {
        return k;
    },
    Nz: function () {
        return j;
    },
    Q_: function () {
        return Y;
    },
    TO: function () {
        return z;
    },
    Z0: function () {
        return Z;
    },
    bT: function () {
        return W;
    },
    dM: function () {
        return K;
    },
    dQ: function () {
        return q;
    },
    e$: function () {
        return J;
    },
    iM: function () {
        return $;
    },
    pO: function () {
        return B;
    },
    xr: function () {
        return r;
    },
    z2: function () {
        return ee;
    }
});
var r,
    i = n(47120);
var a = n(757143);
var o = n(627341);
var s = n(278074),
    l = n(873546),
    u = n(442837),
    c = n(34756),
    d = n(100159),
    _ = n(912788),
    E = n(594174),
    f = n(626135),
    h = n(823379),
    p = n(74538),
    m = n(226951),
    I = n(73346),
    T = n(981631),
    g = n(474936),
    S = n(689938);
let A = ['discordapp.com/gifts', 'discord.com/gifts'],
    v = 3,
    N = m.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
    O = [N, ...A.map((e) => m.Z.escape(e))].join('|'),
    R = RegExp('(?: |^|https?://)(?:'.concat(O, ')/([a-z0-9-]+)'), 'gi'),
    C = [...['discord.com/billing/promotions', 'promos.discord.gg'].map((e) => m.Z.escape(e))].join('|'),
    y = RegExp('(?: |^|https?://)(?:'.concat(C, ')/([a-z0-9-]+)'), 'gi'),
    b = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789',
    L = (e, t) =>
        Array(t)
            .fill(void 0)
            .map(() => '['.concat(b, ']{').concat(e, '}'))
            .join('-?'),
    D = L(4, 4),
    M = L(4, 6),
    P = L(5, 3),
    U = 'WUMP-?',
    w = [D, M, P, '[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}'].join('|'),
    x = new RegExp('^('.concat(U, ')?(').concat(w, ')$')),
    G = '-';
!(function (e) {
    (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.CUSTOM_STYLE = 1)] = 'CUSTOM_STYLE'), (e[(e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] = 'CUSTOM_MESSAGE_EMOJI_SOUNDBOARD');
})(r || (r = {}));
let k = (e, t) => (l.tq || l.Em ? 0 : null != e || t ? 2 : 1),
    B = (e) => 0 !== k(e);
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(e, ':')
        .concat(null != t ? t : '', ':')
        .concat(null != n ? n : '');
}
function Z(e) {
    let [t, n, r] = e.split(':');
    return {
        skuId: t,
        subscriptionPlanId: '' === n ? null : n,
        giftStyle: '' !== r && null != r ? Number.parseInt(r) : void 0
    };
}
function V(e) {
    return e.replace(/[^A-Za-z0-9]/g, '');
}
let H = (e) => (null == e ? void 0 : e.type) === T.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === T.hBH.GIFT,
    Y = (e) => {
        let t;
        if (null == e) return [];
        let n = new Set();
        for (; null != (t = R.exec(e)) && n.size < v; ) n.add(V(t[1]));
        for (; null != (t = y.exec(e)) && n.size < v; ) n.add(V(t[1]));
        return Array.from(n);
    };
function j() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? (e = '/'.concat(t)) : ((n = location.host), (e = '/gifts/'.concat(t))), ''.concat(location.protocol, '//').concat(n).concat(e);
}
async function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (
            await (0, I.Kb)({
                url: T.ANM.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: t,
                    with_subscription_plan: n
                },
                oldFormErrors: !0
            })
        ).body;
        return (
            f.default.track(
                T.rMx.GIFT_CODE_RESOLVED,
                {
                    resolved: !0,
                    gift_code: r.code,
                    gift_code_max_uses: r.max_uses,
                    sku_id: r.store_listing.sku.id,
                    sku_type: r.store_listing.sku.type,
                    application_id: r.store_listing.sku.application_id,
                    store_title: r.store_listing.sku.name
                },
                { flush: !0 }
            ),
            r
        );
    } catch (t) {
        throw (
            (f.default.track(T.rMx.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }),
            new c.Z(t))
        );
    }
}
function K(e, t) {
    f.default.track(T.rMx.GIFT_CODE_COPIED, {
        ...(0, d.Z)(t, !1, !1),
        ...e.analyticsData
    });
}
function z(e, t, n, r, i, a, o) {
    return null == n && (r || i || null == e) ? (!o || a || r || i ? (r && (t.isSubscription || null != e) ? T.wZ8.SUCCESS : T.wZ8.CONFIRM) : T.wZ8.OPEN) : T.wZ8.ERROR;
}
function q(e, t, n) {
    switch (e) {
        case T.wZ8.ERROR:
            return S.Z.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
        case T.wZ8.SUCCESS:
            return t.isSubscription ? S.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({ skuName: n.name }) : S.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
        case T.wZ8.CONFIRM:
        default:
            return t.isSubscription ? S.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({ skuName: n.name }) : S.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM;
    }
}
function Q(e, t, n) {
    switch (e) {
        case T.wZ8.ERROR:
            return S.Z.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
        case T.wZ8.SUCCESS:
            if (__OVERLAY__) return S.Z.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
            if (t.isSubscription) return S.Z.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
            return S.Z.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
        case T.wZ8.OPEN:
            return S.Z.Messages.GIFT_OPEN_PROMPT;
        case T.wZ8.CONFIRM:
        default:
            if (null != n && n) return S.Z.Messages.GIFT_CODE_AUTH_ACCEPT;
            if (null != t.giftStyle) return t.isClaimed ? S.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : S.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
            return t.isSubscription ? S.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : S.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM;
    }
}
function X(e) {
    return (0, s.EQ)(e)
        .with(
            {
                interval: g.rV.MONTH,
                premiumSubscriptionType: g.p9.TIER_2
            },
            () => S.Z.Messages.PREMIUM_FEATURES_TIER_2.format({ timeInterval: S.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH })
        )
        .with(
            {
                interval: g.rV.YEAR,
                premiumSubscriptionType: g.p9.TIER_2
            },
            () => S.Z.Messages.PREMIUM_FEATURES_TIER_2.format({ timeInterval: S.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR })
        )
        .with(
            {
                interval: g.rV.MONTH,
                premiumSubscriptionType: g.p9.TIER_1
            },
            () => S.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({ intervalCount: e.intervalCount })
        )
        .with(
            {
                interval: g.rV.YEAR,
                premiumSubscriptionType: g.p9.TIER_1
            },
            () => S.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({ intervalCount: e.intervalCount })
        )
        .otherwise(() => S.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC);
}
function $(e) {
    let { step: t, sku: n, libraryApplication: r, error: i, accepted: a, accepting: o, onGoToLibrary: s, subscriptionPlan: l = null } = e;
    switch (t) {
        case T.wZ8.ERROR:
            return J(r, i, a, o, s);
        case T.wZ8.SUCCESS:
            if (null != l) return X(l);
            return S.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({ skuName: n.name });
        case T.wZ8.CONFIRM:
        default:
            if (null != l)
                return (l.interval === g.rV.MONTH ? S.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : S.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM).format({
                    skuName: n.name,
                    intervalCount: l.intervalCount
                });
            return S.Z.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({ skuName: n.name });
    }
}
function J(e, t, n, r, i) {
    let a = n || r ? void 0 : e,
        o = S.Z.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({ onGoToLibrary: i });
    return null != a ? o : null == t ? null : er(t, E.default.getCurrentUser());
}
function ee(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map((e) => n.getLibraryApplication(r, e, !0)).filter(h.lm);
    return a.length === i.length ? a[0] : null;
}
function et(e) {
    let t = e.trim().split('/').pop().match(x);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(RegExp(G, 'g'), '');
}
let en = (e, t) =>
    (0, u.e7)([_.Z], () => {
        if (null == e || !t) return null;
        let n = _.Z.getGiftCode(e);
        return null == n || '' === n ? null : n;
    });
function er(e, t) {
    switch (e.code) {
        case T.evJ.INVALID_GIFT_SELF_REDEMPTION:
            return S.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
        case T.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return S.Z.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
        case T.evJ.INVALID_GIFT_REDEMPTION_OWNED:
            return S.Z.Messages.GIFT_ERROR_OWNED;
        case T.evJ.UNKNOWN_GIFT_CODE:
            return S.Z.Messages.GIFT_CONFIRMATION_BODY_INVALID;
        case T.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return S.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({ planName: (0, p.M5)(t, g.p9.TIER_2) ? S.Z.Messages.PREMIUM_TIER_2 : S.Z.Messages.PREMIUM_TIER_1 });
        case T.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return S.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
        case T.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return S.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
        case T.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return S.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
        case T.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return S.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
        default:
            return S.Z.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR;
    }
}
