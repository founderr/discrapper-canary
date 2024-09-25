n.d(t, {
    Z: function () {
        return d;
    }
});
var r,
    i = n(653041);
var a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(433517),
    u = n(570140);
function c(e, t, n) {
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
class d extends (r = s.ZP.Store) {
    static clearAll() {
        d.allStores.forEach((e) => e.clear());
    }
    get persistKey() {
        return ''.concat(this.getClass().displayName, '-snapshot');
    }
    clear() {
        l.K.remove(this.persistKey);
    }
    save() {
        l.K.set(this.persistKey, this.takeSnapshot());
    }
    readSnapshot(e) {
        let t = l.K.get(this.persistKey);
        return null == t || t.version !== e ? null : t.data;
    }
    getClass() {
        return this.constructor;
    }
    constructor(e, t) {
        super(
            u.Z,
            {
                ...e,
                CLEAR_CACHES: () => (this.clear(), !1),
                WRITE_CACHES: () => (this.save(), !1)
            },
            t
        ),
            o()(null != this.getClass().displayName, 'Snapshot stores need a display name'),
            o()(!('CLEAR_CACHES' in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"),
            o()(!('WRITE_CACHES' in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"),
            d.allStores.push(this);
    }
}
c(d, 'allStores', []);
