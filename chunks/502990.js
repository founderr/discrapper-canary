let n;
r.d(t, {
    C: function () {
        return E;
    }
});
var a = r(370336),
    _ = r(263449),
    o = r(151122);
let i = new WeakMap(),
    E = (0, o._I)(() => ({
        name: 'FunctionToString',
        setupOnce() {
            n = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...e) {
                    let t = (0, a.HK)(this),
                        r = i.has((0, _.s3)()) && void 0 !== t ? t : this;
                    return n.apply(r, e);
                };
            } catch (e) {}
        },
        setup(e) {
            i.set(e, !0);
        }
    }));
