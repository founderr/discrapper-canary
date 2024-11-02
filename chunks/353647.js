n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(180335);
let c = new Map(),
    d = new Set(),
    f = null,
    _ = !1,
    h = !1;
function p() {
    (c = new Map()), (d = new Set()), (f = null), (_ = !1);
}
class m extends (r = o.ZP.Store) {
    getMatchingOutboxEntry(e) {
        let { activity: t, userId: n } = e,
            r = c.get(n);
        if (null != r && null != t) return (0, u.vu)(r.entries, t);
    }
    getUserOutbox(e) {
        return c.get(e);
    }
    isFetchingUserOutbox(e) {
        return d.has(e);
    }
    get deleteOutboxEntryError() {
        return f;
    }
    get isDeletingEntryHistory() {
        return _;
    }
    get hasInitialized() {
        return h;
    }
}
(s = 'ContentInventoryOutboxStore'),
    (a = 'displayName') in (i = m)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new m(l.Z, {
        CONNECTION_OPEN: function () {
            p(), (h = !0);
        },
        LOGOUT: function () {
            p();
        },
        CONTENT_INVENTORY_FETCH_OUTBOX_START: function (e) {
            let { userId: t } = e;
            d.add(t);
        },
        CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: function (e) {
            let { outbox: t, userId: n } = e;
            c.set(n, {
                ...t,
                lastFetched: Date.now()
            }),
                d.delete(n);
        },
        CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: function (e) {
            let { userId: t } = e;
            d.delete(t);
        },
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: function () {
            (f = null), (_ = !0);
        },
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function (e) {
            let { entry: t, userId: n } = e;
            f = null;
            let r = c.get(n);
            if (null == r) return !1;
            let i = r.entries.filter((e) => e.id !== t.id);
            c.set(n, {
                ...r,
                entries: i
            }),
                (_ = !1);
        },
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function (e) {
            let { error: t } = e;
            (f = t), (_ = !1);
        },
        CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function () {
            (f = null), (_ = !1);
        }
    }));
