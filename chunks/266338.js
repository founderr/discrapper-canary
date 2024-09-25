n.d(t, {
    UC: function () {
        return u;
    },
    YP: function () {
        return l;
    },
    c: function () {
        return s;
    }
});
var r = n(47120);
let i = new WeakMap(),
    a = new WeakMap();
function o(e, t) {
    e.forEach((e) => {
        var n;
        let r = null === (n = a.get(t)) || void 0 === n ? void 0 : n.get(e.target);
        null != r && r.call(null, e);
    });
}
function s(e) {
    let t = i.get(e);
    return null == t && ((t = new IntersectionObserver(o, e)), i.set(e, t), a.set(t, new WeakMap())), t;
}
function l(e, t, n) {
    var r;
    let i = null !== (r = a.get(e)) && void 0 !== r ? r : new WeakMap();
    !i.has(t) && e.observe(t), i.set(t, n), a.set(e, i);
}
function u(e, t) {
    var n;
    let r = null !== (n = a.get(e)) && void 0 !== n ? n : new WeakMap();
    r.has(t) && (r.delete(t), e.unobserve(t), a.set(e, r));
}
