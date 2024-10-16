let n;
r.d(t, {
    C: function () {
        return i;
    }
});
var a = r(370336),
    _ = r(263449),
    o = r(151122);
let E = new WeakMap(),
    i = (0, o._I)(() => ({
        name: 'FunctionToString',
        setupOnce() {
            n = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...e) {
                    let t = (0, a.HK)(this),
                        r = E.has((0, _.s3)()) && void 0 !== t ? t : this;
                    return n.apply(r, e);
                };
            } catch (e) {}
        },
        setup(e) {
            E.set(e, !0);
        }
    }));
