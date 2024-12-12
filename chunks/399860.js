r.d(n, {
    gw: function () {
        return s;
    },
    rE: function () {
        return o;
    },
    tk: function () {
        return l;
    }
});
var i = r(47120);
var a = r(911969);
function s(e, n) {
    return e === a.yU.CHAT ? '/' + n : n;
}
r(895924);
function o(e, n) {
    return ''.concat(e, ':').concat(n);
}
function l(e) {
    return Object.fromEntries(e.map((e) => [o(e.id, e.type), e]));
}
function u(e, n) {
    let r = {};
    for (let [i, a] of Object.entries(e)) n.includes(a.type) && (r[i] = a);
    return r;
}
