r.d(n, {
    UC: function () {
        return c;
    },
    YP: function () {
        return u;
    },
    c: function () {
        return l;
    }
});
var i = r(47120);
let a = new WeakMap(),
    s = new WeakMap();
function o(e, n) {
    e.forEach((e) => {
        var r;
        let i = null === (r = s.get(n)) || void 0 === r ? void 0 : r.get(e.target);
        null != i && i.call(null, e);
    });
}
function l(e) {
    let n = a.get(e);
    return null == n && ((n = new IntersectionObserver(o, e)), a.set(e, n), s.set(n, new WeakMap())), n;
}
function u(e, n, r) {
    var i;
    let a = null !== (i = s.get(e)) && void 0 !== i ? i : new WeakMap();
    !a.has(n) && e.observe(n), a.set(n, r), s.set(e, a);
}
function c(e, n) {
    var r;
    let i = null !== (r = s.get(e)) && void 0 !== r ? r : new WeakMap();
    i.has(n) && (i.delete(n), e.unobserve(n), s.set(e, i));
}
