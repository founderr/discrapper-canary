var i,
    a = r(47120);
var s = r(653041);
var o = r(442837),
    l = r(570140);
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
let c = 2592000000,
    d = 57600000,
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
        r = Date.now() - c;
    for (let e = 0; e < h.itemImpressions.length; e++) {
        let [i, a] = h.itemImpressions[e];
        if (a < r) n = e + 1;
        else break;
    }
    n > 0 && (h.itemImpressions = h.itemImpressions.slice(n)), h.itemImpressions.length > f && (h.itemImpressions = h.itemImpressions.slice(-f));
    let i = v ? I : d,
        a = new Set(),
        s = new Set(),
        o = Date.now() - i,
        l = null;
    for (let [e, n] of h.itemImpressions) n < o ? a.add(e) : null == l && (l = n + i), s.add(e);
    (p = a), (m = s), (g = null != l ? l : 1 / 0), (E = !0);
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
u(C, 'displayName', 'ContentInventoryPersistedStore'),
    u(C, 'persistKey', 'ContentInventoryPersistedStore'),
    (n.Z = new C(l.Z, {
        CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: b,
        CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: y,
        CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: S,
        CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: A,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: N
    }));
