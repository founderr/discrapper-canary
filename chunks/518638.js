n.d(t, {
    A2: function () {
        return S;
    },
    BU: function () {
        return A;
    },
    Pz: function () {
        return p;
    },
    Qf: function () {
        return R;
    },
    X_: function () {
        return m;
    },
    ZC: function () {
        return N;
    },
    kr: function () {
        return I;
    },
    t8: function () {
        return g;
    },
    tq: function () {
        return v;
    }
});
var r = n(789020);
var i = n(757143);
var a = n(544891),
    o = n(780384),
    s = n(706454),
    l = n(78839),
    u = n(295226),
    c = n(630388),
    d = n(358085),
    _ = n(1844),
    E = n(474936),
    f = n(981631);
let h = '{code}';
function p(e, t) {
    let n = (0, o.wj)(t) ? 'logo-dark' : 'logo-light',
        r = window.GLOBAL_ENV.CDN_HOST,
        i = '?size=256';
    return null != r ? ''.concat(location.protocol, '//').concat(r, '/promotions/').concat(e, '/').concat(n).concat(i) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(n).concat(i);
}
function m(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date,
        outboundRedemptionEndDate: e.outbound_redemption_end_date,
        outboundTitle: e.outbound_title,
        outboundRedemptionModalBody: e.outbound_redemption_modal_body,
        outboundRedemptionPageLink: e.outbound_redemption_page_link,
        outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
        outboundTermsAndConditions: e.outbound_terms_and_conditions,
        flags: e.flags
    };
}
function I(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date
    };
}
function T(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: m(e.promotion)
    };
}
async function g() {
    return (
        await a.tn.get({
            url: f.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: s.default.locale },
            oldFormErrors: !0
        })
    ).body.map(T);
}
async function S(e) {
    return T((await a.tn.post({ url: f.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e) })).body);
}
function A(e, t) {
    return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(h, encodeURIComponent(e)) : t.outboundRedemptionPageLink;
}
function v() {
    let e = _.Z.lastSeenOutboundPromotionStartDate,
        t = _.Z.outboundPromotions,
        n = _.Z.consumedInboundPromotionId,
        r = t.filter((e) => {
            let { id: t, flags: r } = e;
            return t !== n && !(0, c.yE)(r, E.TD.SUPPRESS_NOTIFICATION);
        }),
        i =
            null == e
                ? r
                : r.filter((t) => {
                      let { startDate: n } = t;
                      return new Date(n) > new Date(e);
                  }),
        a = _.Z.lastDismissedOutboundPromotionStartDate,
        o = l.ZP.getPremiumTypeSubscription(),
        s = (null == o ? void 0 : o.trialId) != null,
        d = u.Z.hasAnyUnexpiredOffer(),
        f = s || d ? i.filter((e) => O(e)) : i;
    return (
        0 !== f.length &&
        (null == a ||
            f.some((e) => {
                let { startDate: t } = e;
                return new Date(t) > new Date(a);
            }))
    );
}
function N(e) {
    return !(0, d.isIOS)() || !(0, c.yE)(e.flags, E.TD.IS_BLOCKED_IOS);
}
function O(e) {
    return (0, c.yE)(e.flags, E.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS);
}
function R(e, t) {
    return null != t[e.id] || O(e);
}
