var i,
    a = r(47120);
var s = r(653041);
var o = r(442837),
    l = r(570140),
    u = r(162461);
function c(e, n, r) {
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
let d = 2592000000,
    f = 2048,
    _ = () => ({
        itemImpressions: [],
        hidden: !1
    }),
    h = _(),
    p = new Set(),
    m = new Set(),
    g = 0,
    E = !1,
    v = !1,
    I = 1000;
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < g) return;
    let n = 0,
        r = Date.now() - d;
    for (let e = 0; e < h.itemImpressions.length; e++) {
        let [i, a] = h.itemImpressions[e];
        if (a < r) n = e + 1;
        else break;
    }
    n > 0 && (h.itemImpressions = h.itemImpressions.slice(n)), h.itemImpressions.length > f && (h.itemImpressions = h.itemImpressions.slice(-f));
    let { impressionAge: i } = (0, u.m6)('ContentInventoryPersistedStore.updateImpressionCaches'),
        a = v ? I : i,
        s = new Set(),
        o = new Set(),
        l = Date.now() - a,
        c = null;
    for (let [e, n] of h.itemImpressions) n < l ? s.add(e) : null == c && (c = n + a), o.add(e);
    (p = s), (m = o), (g = null != c ? c : 1 / 0), (E = !0);
}
function b(e) {
    let { itemIds: n } = e;
    !E && T();
    let r = Date.now(),
        i = !1;
    for (let e of n) !m.has(e) && (h.itemImpressions.push([e, r]), (i = !0));
    return T(i), i;
}
function y() {
    (h.itemImpressions = []), T(!0);
}
function S() {
    return console.log('Item impressions:', h.itemImpressions), !1;
}
function A() {
    v = !v;
}
function N() {
    h.hidden = !h.hidden;
}
class C extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        h = {
            ...h,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return h;
    }
    getImpressionCappedItemIds() {
        return T(), p;
    }
    getDebugFastImpressionCappingEnabled() {
        return v;
    }
    get hidden() {
        return h.hidden;
    }
    reset() {
        h = _();
    }
}
c(C, 'displayName', 'ContentInventoryPersistedStore'),
    c(C, 'persistKey', 'ContentInventoryPersistedStore'),
    (n.Z = new C(l.Z, {
        CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: b,
        CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: y,
        CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: S,
        CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: A,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: N
    }));
