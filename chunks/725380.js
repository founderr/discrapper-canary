r.d(n, {
    $E: function () {
        return c;
    },
    Ky: function () {
        return l;
    },
    RF: function () {
        return u;
    }
});
var i = r(47120);
let a = {};
function s(e, n) {
    return ''.concat(e, ':').concat(n);
}
function o(e) {
    let [n, r] = e.split(':');
    return [n, r];
}
function l(e, n) {
    return a[s(e, n)];
}
function u(e, n, r) {
    let i = s(e, n);
    a[i] = {
        ...a[i],
        ...r
    };
}
function c(e) {
    for (let n in a) {
        let [r, i] = o(n);
        e(r, i, a[n]);
    }
    a = {};
}
