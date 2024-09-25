n.d(t, {
    Q: function () {
        return a;
    },
    l: function () {
        return i;
    }
});
var r = n(47120);
function i(e, t) {
    return ''.concat(e, ':').concat(t);
}
function a(e) {
    let t = e.split(':');
    if (2 !== t.length) return null;
    let [n, r] = t;
    return {
        applicationId: n,
        skuId: r
    };
}
