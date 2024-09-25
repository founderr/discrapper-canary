n.d(t, {
    $E: function () {
        return u;
    },
    Ky: function () {
        return s;
    },
    RF: function () {
        return l;
    }
});
var r = n(47120);
let i = {};
function a(e, t) {
    return ''.concat(e, ':').concat(t);
}
function o(e) {
    let [t, n] = e.split(':');
    return [t, n];
}
function s(e, t) {
    return i[a(e, t)];
}
function l(e, t, n) {
    let r = a(e, t);
    i[r] = {
        ...i[r],
        ...n
    };
}
function u(e) {
    for (let t in i) {
        let [n, r] = o(t);
        e(n, r, i[t]);
    }
    i = {};
}
