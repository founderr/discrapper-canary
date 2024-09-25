var r = n(47120);
function i(e, t, n) {
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
class a extends Map {
    set(e, t) {
        return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t);
    }
    constructor(e) {
        super(), i(this, 'maxSize', void 0), (this.maxSize = e);
    }
}
t.Z = a;
