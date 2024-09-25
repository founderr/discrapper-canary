var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(180335);
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
let u = new Map(),
    c = new Set(),
    d = null,
    _ = !1,
    E = !1;
function f(e) {
    let { userId: t } = e;
    c.add(t);
}
function h(e) {
    let { outbox: t, userId: n } = e;
    u.set(n, {
        ...t,
        lastFetched: Date.now()
    }),
        c.delete(n);
}
function p(e) {
    let { userId: t } = e;
    c.delete(t);
}
function m() {
    (d = null), (_ = !0);
}
function I(e) {
    let { entry: t, userId: n } = e;
    d = null;
    let r = u.get(n);
    if (null == r) return !1;
    let i = r.entries.filter((e) => e.id !== t.id);
    u.set(n, {
        ...r,
        entries: i
    }),
        (_ = !1);
}
function T(e) {
    let { error: t } = e;
    (d = t), (_ = !1);
}
function g() {
    (d = null), (_ = !1);
}
function S() {
    (u = new Map()), (c = new Set()), (d = null), (_ = !1);
}
function A() {
    S(), (E = !0);
}
function v() {
    S();
}
class N extends (r = a.ZP.Store) {
    getMatchingOutboxEntry(e) {
        let { activity: t, userId: n } = e,
            r = u.get(n);
        if (null != r && null != t) return (0, s.vu)(r.entries, t);
    }
    getUserOutbox(e) {
        return u.get(e);
    }
    isFetchingUserOutbox(e) {
        return c.has(e);
    }
    get deleteOutboxEntryError() {
        return d;
    }
    get isDeletingEntryHistory() {
        return _;
    }
    get hasInitialized() {
        return E;
    }
}
l(N, 'displayName', 'ContentInventoryOutboxStore'),
    (t.Z = new N(o.Z, {
        CONNECTION_OPEN: A,
        LOGOUT: v,
        CONTENT_INVENTORY_FETCH_OUTBOX_START: f,
        CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: h,
        CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: p,
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: m,
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: I,
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: T,
        CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: g
    }));
