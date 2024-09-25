n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
var i = n(251625);
function a(e, t, n) {
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
class o {
    keys() {
        return this.cachedKeys(this.version);
    }
    values() {
        return this.cachedValues(this.version);
    }
    entries() {
        return this.cachedEntries(this.version);
    }
    size() {
        return this.data.size;
    }
    get(e) {
        return this.data.get(e);
    }
    set(e, t) {
        this.data.get(e) !== t && (this.data.set(e, t), this.version++);
    }
    delete(e) {
        let t = this.data.delete(e);
        return t && this.version++, t;
    }
    clear() {
        0 !== this.data.size && (this.data.clear(), this.version++);
    }
    constructor() {
        a(this, 'version', 0), a(this, 'data', new Map()), a(this, 'cachedValues', void 0), a(this, 'cachedKeys', void 0), a(this, 'cachedEntries', void 0), (this.cachedValues = (0, i.oH)((e) => Array.from(this.data.values()))), (this.cachedKeys = (0, i.oH)((e) => Array.from(this.data.keys()))), (this.cachedEntries = (0, i.oH)((e) => Array.from(this.data.entries())));
    }
}
