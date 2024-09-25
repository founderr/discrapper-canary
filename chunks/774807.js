var r,
    i = n(47120);
var a = n(442837),
    o = n(570140);
n(57132);
var s = n(455199),
    l = n(70956),
    u = n(709054),
    c = n(497089);
function d(e, t, n) {
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
let _ = 90 * l.Z.Millis.DAY,
    E = {
        tab: null,
        localItemAcks: {},
        hasNewMentions: !1,
        isDataStale: !1,
        isRefreshing: !1
    };
function f(e) {
    let t = {};
    for (let [n, r] of Object.entries(e)) Date.now() - r < _ && (t[n] = r);
    return t;
}
class h extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(s.Z), null != e)) {
            var t;
            ((E = e).localItemAcks = f(null !== (t = E.localItemAcks) && void 0 !== t ? t : {})), (E.isDataStale = !0);
        }
    }
    getState() {
        return E;
    }
    getTab() {
        var e;
        return null !== (e = E.tab) && void 0 !== e ? e : c.b1.ForYou;
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != E.localItemAcks[e.local_id] || u.default.age(e.id) > _);
    }
    hasNewMentions() {
        return E.hasNewMentions;
    }
    isDataStale() {
        return E.isDataStale;
    }
    isRefreshing() {
        return E.isRefreshing;
    }
    shouldReload() {
        return E.hasNewMentions || E.isDataStale || E.isRefreshing;
    }
}
function p(e) {
    let { message: t } = e;
}
function m() {
    (E.hasNewMentions = !1), (E.isDataStale = !1), (E.isRefreshing = !1);
}
function I(e) {
    E = {
        ...E,
        tab: e.tab
    };
}
function T(e) {
    let { localIds: t } = e;
    t.forEach((e) => {
        E = {
            ...E,
            localItemAcks: {
                ...E.localItemAcks,
                [e]: Date.now()
            }
        };
    });
}
function g() {
    E.isRefreshing = !0;
}
d(h, 'displayName', 'NotificationCenterStore'),
    d(h, 'persistKey', 'NotificationCenterStore'),
    (t.Z = new h(o.Z, {
        MESSAGE_CREATE: p,
        NOTIFICATION_CENTER_SET_TAB: I,
        NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: T,
        NOTIFICATION_CENTER_REFRESH: g,
        LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: m,
        LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: m
    }));
