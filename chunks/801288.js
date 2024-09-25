n.d(t, {
    L: function () {
        return l;
    }
});
var r = n(627494);
var i = n(757143);
var a = n(503461),
    o = n(190313);
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
class l {
    get prefix() {
        return this.table.prefix;
    }
    withoutLogging() {
        return new l(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e) {
        return this.table.get([e]);
    }
    getMany(e) {
        return this.table.getMany([], e);
    }
    getRange(e, t, n) {
        return this.table.getRange([e], [t], n);
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
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Sn.Replace;
        return this.transaction((n) => n.put(e, t), ''.concat(this.prefix, ' put'));
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Sn.Replace;
        return this.transaction((n) => n.putAll(e, t), ''.concat(this.prefix, ' putAll'));
    }
    replaceAll(e) {
        return this.transaction((t) => t.replaceAll(e), ''.concat(this.prefix, ' replaceAll'));
    }
    delete(e) {
        return this.transaction((t) => t.delete(e), ''.concat(this.prefix, ' delete'));
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new u(t)), t);
    }
    upgradeTransaction(e) {
        return new u(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    static cell(e, t) {
        return {
            key: [e.id],
            data: e,
            generation: t
        };
    }
    constructor(e, t, n, r = !0) {
        s(this, 'originalPrefix', void 0), s(this, 'table', void 0), (this.originalPrefix = e), (this.table = new o.i([e], t, n, r));
    }
}
class u {
    static fromDatabaseTransaction(e, t, n) {
        return new u(new o.E(e, t, n));
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Sn.Replace;
        return this.transaction.put(l.cell(e, null), t);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Sn.Replace;
        return this.transaction.putAll(
            e.map((e) => l.cell(e, null)),
            t
        );
    }
    replaceAll(e) {
        this.delete(), this.putAll(e);
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete([]) : this.transaction.delete([e]);
    }
    constructor(e) {
        s(this, 'transaction', void 0), (this.transaction = e);
    }
}
