r.d(n, {
    Z: function () {
        return c;
    },
    a: function () {
        return u;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(626135),
    o = r(435749);
let l = new Map();
function u(e, n) {
    !l.has(e) && l.set(e, []);
    let { default: i } = r(15379),
        a = i(e, n);
    if (null != a) {
        var s;
        null === (s = l.get(e)) || void 0 === s || s.push(a);
    }
}
function c() {
    if (!(0, o.A)()) {
        l.clear();
        return;
    }
    let { default: e } = r(672513);
    for (let [n, r] of l) s.default.track(n, e(n, r));
    l.clear();
}
