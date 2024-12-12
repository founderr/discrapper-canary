r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(47120);
class a {
    toJS() {
        return { ...this };
    }
    set(e, n) {
        let r = this,
            i = r[e];
        return n instanceof Date && i instanceof Date && n.getTime() === i.getTime()
            ? this
            : i !== n
              ? new this.constructor({
                    ...this,
                    [e]: n
                })
              : this;
    }
    merge(e) {
        let n = this,
            r = null;
        for (let i in e) {
            if (!e.hasOwnProperty(i)) continue;
            let a = n[i],
                s = e[i];
            if (!(s instanceof Date) || !(a instanceof Date) || s.getTime() !== a.getTime()) a !== s && (null == r && (r = { ...this }), (r[i] = e[i]));
        }
        return null != r ? new this.constructor(r) : this;
    }
    update(e, n, r) {
        null == r && ((r = n), (n = void 0));
        let i = this,
            s = i[e];
        return s instanceof a || (s instanceof Array ? (s = [...s]) : s instanceof Object && (s = { ...s })), void 0 === s && (s = n), this.set(e, r(s));
    }
}
