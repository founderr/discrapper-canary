n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(581883);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
        bogoPromotion: null
    };
}
let u = l(),
    c = !1,
    d = null,
    f = !1,
    _ = null,
    h = [],
    p = null;
function m() {
    let e = null;
    for (let t of h) (null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
    return e;
}
function g() {
    var e, t, n;
    p = null !== (n = null === (t = s.Z.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null;
}
class E extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (u = e), this.waitFor(s.Z), this.syncWith([s.Z], g);
    }
    get outboundPromotions() {
        return h;
    }
    get lastSeenOutboundPromotionStartDate() {
        return u.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return p;
    }
    get lastFetchedActivePromotions() {
        return _;
    }
    get isFetchingActiveOutboundPromotions() {
        return f;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return u.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return u.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return u.bogoPromotion;
    }
    get isFetchingActiveBogoPromotion() {
        return c;
    }
    get lastFetchedActiveBogoPromotion() {
        return d;
    }
    getState() {
        return u;
    }
}
o(E, 'displayName', 'PromotionsStore'),
    o(E, 'persistKey', 'PromotionsPersistedStore'),
    (t.Z = new E(a.Z, {
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function (e) {
            let { activeOutboundPromotions: t, consumedInboundPromotionId: n } = e;
            (h = t), (_ = Date.now()), (f = !1), !u.hasFetchedConsumedInboundPromotionId && ((u.hasFetchedConsumedInboundPromotionId = !0), (u.consumedInboundPromotionId = n));
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function () {
            f = !0;
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function () {
            (h = []), (f = !1);
        },
        ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
            let { activePromotion: t } = e;
            (u.bogoPromotion = t), (d = Date.now()), (c = !1);
        },
        ACTIVE_BOGO_PROMOTION_FETCH: function () {
            c = !0;
        },
        ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
            (u.bogoPromotion = null), (c = !1);
        },
        OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
            if (0 === h.length) return !1;
            let e = m();
            null != e && (p = e);
        },
        OUTBOUND_PROMOTIONS_SEEN: function () {
            if (0 === h.length) return !1;
            let e = m();
            null != e && ((p = e), (u.lastSeenOutboundPromotionStartDate = e));
        },
        LOGOUT: function () {
            (u = l()), (f = !1), (_ = null), (c = !1), (d = null), (h = []);
        }
    }));
