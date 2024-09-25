n.d(t, {
    Z: function () {
        return u;
    },
    a: function () {
        return l;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(626135),
    o = n(435749);
let s = new Map();
function l(e, t) {
    !s.has(e) && s.set(e, []);
    let { default: r } = n(15379),
        i = r(e, t);
    if (null != i) {
        var a;
        null === (a = s.get(e)) || void 0 === a || a.push(i);
    }
}
function u() {
    if (!(0, o.A)()) {
        s.clear();
        return;
    }
    let { default: e } = n(672513);
    for (let [t, n] of s) a.default.track(t, e(t, n));
    s.clear();
}
