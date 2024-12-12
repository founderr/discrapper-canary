r.d(n, {
    N: function () {
        return o;
    }
});
var i = r(503461),
    a = r(190313);
function s(e, n, r) {
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
class o {
    get prefix() {
        return this.table.prefix;
    }
    withoutLogging() {
        return new o(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e) {
        return this.table.get([e]);
    }
    getMany(e) {
        return this.table.getMany([], e);
    }
    getRange(e, n, r) {
        return this.table.getRange([e], [n], r);
    }
    getKvEntries() {
        return this.table.getKvEntries();
    }
    getMapEntries() {
        return this.table.getMapEntries();
    }
    getIds() {
        return this.table.getChildIds([]);
    }
    getParentId(e) {
        return this.table.getParentId([null, e]);
    }
    put(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Sn.Replace;
        return this.table.put(
            {
                key: [e],
                data: n,
                generation: null
            },
            r
        );
    }
    delete(e) {
        return 0 == arguments.length ? this.table.delete() : this.table.delete([e]);
    }
    transaction(e, n) {
        return this.table.transaction((n) => e(new l(n)), n);
    }
    upgradeTransaction(e) {
        return new l(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    constructor(e, n, r, i = !0) {
        s(this, 'originalPrefix', void 0), s(this, 'table', void 0), (this.originalPrefix = e), (this.table = new a.i([e], n, r, i));
    }
}
class l {
    static fromDatabaseTransaction(e, n, r) {
        return new l(new a.E(e, n, r));
    }
    put(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Sn.Replace;
        this.transaction.put(
            {
                key: [e],
                data: n,
                generation: null
            },
            r
        );
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e]);
    }
    constructor(e) {
        s(this, 'transaction', void 0), (this.transaction = e);
    }
}
