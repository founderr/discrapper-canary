var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(581883);
function l(e, t, n) {
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
function u() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
        bogoPromotion: null
    };
}
let c = u(),
    d = !1,
    _ = null;
function E() {
    d = !0;
}
function f() {
    (c.bogoPromotion = null), (d = !1);
}
function h(e) {
    let { activePromotion: t } = e;
    (c.bogoPromotion = t), (_ = Date.now()), (d = !1);
}
let p = !1,
    m = null,
    I = [],
    T = null;
function g(e) {
    let { activeOutboundPromotions: t, consumedInboundPromotionId: n } = e;
    (I = t), (m = Date.now()), (p = !1), !c.hasFetchedConsumedInboundPromotionId && ((c.hasFetchedConsumedInboundPromotionId = !0), (c.consumedInboundPromotionId = n));
}
function S() {
    p = !0;
}
function A() {
    (I = []), (p = !1);
}
function v() {
    let e = null;
    for (let t of I) (null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
    return e;
}
function N() {
    if (0 === I.length) return !1;
    let e = v();
    null != e && (T = e);
}
function O() {
    if (0 === I.length) return !1;
    let e = v();
    null != e && ((T = e), (c.lastSeenOutboundPromotionStartDate = e));
}
function R() {
    (c = u()), (p = !1), (m = null), (d = !1), (_ = null), (I = []);
}
function C() {
    var e, t, n;
    T = null !== (n = null === (t = s.Z.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null;
}
class y extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (c = e), this.waitFor(s.Z), this.syncWith([s.Z], C);
    }
    get outboundPromotions() {
        return I;
    }
    get lastSeenOutboundPromotionStartDate() {
        return c.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return T;
    }
    get lastFetchedActivePromotions() {
        return m;
    }
    get isFetchingActiveOutboundPromotions() {
        return p;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return c.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return c.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return c.bogoPromotion;
    }
    get isFetchingActiveBogoPromotion() {
        return d;
    }
    get lastFetchedActiveBogoPromotion() {
        return _;
    }
    getState() {
        return c;
    }
}
l(y, 'displayName', 'PromotionsStore'),
    l(y, 'persistKey', 'PromotionsPersistedStore'),
    (t.Z = new y(o.Z, {
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: g,
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH: S,
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: A,
        ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: h,
        ACTIVE_BOGO_PROMOTION_FETCH: E,
        ACTIVE_BOGO_PROMOTION_FETCH_FAIL: f,
        OUTBOUND_PROMOTION_NOTICE_DISMISS: N,
        OUTBOUND_PROMOTIONS_SEEN: O,
        LOGOUT: R
    }));
