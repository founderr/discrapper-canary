var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(581883);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function c() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
        bogoPromotion: null
    };
}
let d = c(),
    f = !1,
    _ = null;
function h() {
    f = !0;
}
function p() {
    (d.bogoPromotion = null), (f = !1);
}
function m(e) {
    let { activePromotion: n } = e;
    (d.bogoPromotion = n), (_ = Date.now()), (f = !1);
}
let g = !1,
    E = null,
    v = [],
    I = null;
function T(e) {
    let { activeOutboundPromotions: n, consumedInboundPromotionId: r } = e;
    (v = n), (E = Date.now()), (g = !1), !d.hasFetchedConsumedInboundPromotionId && ((d.hasFetchedConsumedInboundPromotionId = !0), (d.consumedInboundPromotionId = r));
}
function b() {
    g = !0;
}
function y() {
    (v = []), (g = !1);
}
function S() {
    let e = null;
    for (let n of v) (null == e || new Date(n.startDate) > new Date(e)) && (e = n.startDate);
    return e;
}
function A() {
    if (0 === v.length) return !1;
    let e = S();
    null != e && (I = e);
}
function N() {
    if (0 === v.length) return !1;
    let e = S();
    null != e && ((I = e), (d.lastSeenOutboundPromotionStartDate = e));
}
function C() {
    (d = c()), (g = !1), (E = null), (f = !1), (_ = null), (v = []);
}
function R() {
    var e, n, r;
    I = null !== (r = null === (n = l.Z.settings.userContent) || void 0 === n ? void 0 : null === (e = n.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== r ? r : null;
}
class O extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (d = e), this.waitFor(l.Z), this.syncWith([l.Z], R);
    }
    get outboundPromotions() {
        return v;
    }
    get lastSeenOutboundPromotionStartDate() {
        return d.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return I;
    }
    get lastFetchedActivePromotions() {
        return E;
    }
    get isFetchingActiveOutboundPromotions() {
        return g;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return d.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return d.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return d.bogoPromotion;
    }
    get isFetchingActiveBogoPromotion() {
        return f;
    }
    get lastFetchedActiveBogoPromotion() {
        return _;
    }
    getState() {
        return d;
    }
}
u(O, 'displayName', 'PromotionsStore'),
    u(O, 'persistKey', 'PromotionsPersistedStore'),
    (n.Z = new O(o.Z, {
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: T,
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH: b,
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: y,
        ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: m,
        ACTIVE_BOGO_PROMOTION_FETCH: h,
        ACTIVE_BOGO_PROMOTION_FETCH_FAIL: p,
        OUTBOUND_PROMOTION_NOTICE_DISMISS: A,
        OUTBOUND_PROMOTIONS_SEEN: N,
        LOGOUT: C
    }));
