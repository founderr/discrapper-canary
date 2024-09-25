var r,
    i = n(47120);
var a = n(653041);
var o = n(442837),
    s = n(570140);
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
let u = 259200000,
    c = 57600000,
    d = 1000,
    _ = () => ({
        itemImpressions: [],
        hidden: !1
    }),
    E = _(),
    f = new Set(),
    h = new Set(),
    p = 0,
    m = !1,
    I = !1,
    T = 1000;
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < p) return;
    E.itemImpressions.length > d && (E.itemImpressions = []);
    let t = 0,
        n = Date.now() - u;
    for (let e = 0; e < E.itemImpressions.length; e++) {
        let [r, i] = E.itemImpressions[e];
        if (i < n) t = e + 1;
        else break;
    }
    t > 0 && (E.itemImpressions = E.itemImpressions.slice(t));
    let r = I ? T : c,
        i = new Set(),
        a = new Set(),
        o = Date.now() - r,
        s = null;
    for (let [e, t] of E.itemImpressions) t < o ? i.add(e) : null == s && (s = t + r), a.add(e);
    (f = i), (h = a), (p = null != s ? s : 1 / 0), (m = !0);
}
function S(e) {
    let { itemIds: t } = e;
    !m && g();
    let n = Date.now(),
        r = !1;
    for (let e of t) !h.has(e) && (E.itemImpressions.push([e, n]), (r = !0));
    return g(r), r;
}
function A() {
    (E.itemImpressions = []), g(!0);
}
function v() {
    return console.log('Item impressions:', E.itemImpressions), !1;
}
function N() {
    I = !I;
}
function O() {
    E.hidden = !E.hidden;
}
class R extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        E = {
            ...E,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return E;
    }
    getImpressionCappedItemIds() {
        return g(), f;
    }
    getDebugFastImpressionCappingEnabled() {
        return I;
    }
    get hidden() {
        return E.hidden;
    }
    reset() {
        E = _();
    }
}
l(R, 'displayName', 'ContentInventoryPersistedStore'),
    l(R, 'persistKey', 'ContentInventoryPersistedStore'),
    (t.Z = new R(s.Z, {
        CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: S,
        CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: A,
        CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: v,
        CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: N,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: O
    }));
