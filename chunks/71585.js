n(47120), n(653041);
var r,
    i = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = () => ({
        itemImpressions: [],
        hidden: !1
    }),
    l = o(),
    u = new Set(),
    c = new Set(),
    d = 0,
    f = !1,
    _ = !1;
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (!e && Date.now() < d) return;
    l.itemImpressions.length > 1000 && (l.itemImpressions = []);
    let t = 0,
        n = Date.now() - 259200000;
    for (let e = 0; e < l.itemImpressions.length; e++) {
        let [r, i] = l.itemImpressions[e];
        if (i < n) t = e + 1;
        else break;
    }
    t > 0 && (l.itemImpressions = l.itemImpressions.slice(t));
    let r = _ ? 1000 : 57600000,
        i = new Set(),
        a = new Set(),
        s = Date.now() - r,
        o = null;
    for (let [e, t] of l.itemImpressions) t < s ? i.add(e) : null == o && (o = t + r), a.add(e);
    (u = i), (c = a), (d = null != o ? o : 1 / 0), (f = !0);
}
class p extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l = {
            ...l,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return l;
    }
    getImpressionCappedItemIds() {
        return h(), u;
    }
    getDebugFastImpressionCappingEnabled() {
        return _;
    }
    get hidden() {
        return l.hidden;
    }
    reset() {
        l = o();
    }
}
s(p, 'displayName', 'ContentInventoryPersistedStore'),
    s(p, 'persistKey', 'ContentInventoryPersistedStore'),
    (t.Z = new p(a.Z, {
        CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function (e) {
            let { itemIds: t } = e;
            !f && h();
            let n = Date.now(),
                r = !1;
            for (let e of t) !c.has(e) && (l.itemImpressions.push([e, n]), (r = !0));
            return h(r), r;
        },
        CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function () {
            (l.itemImpressions = []), h(!0);
        },
        CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function () {
            return console.log('Item impressions:', l.itemImpressions), !1;
        },
        CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function () {
            _ = !_;
        },
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function () {
            l.hidden = !l.hidden;
        }
    }));
