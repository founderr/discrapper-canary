n.d(t, {
    gw: function () {
        return a;
    },
    rE: function () {
        return o;
    },
    tk: function () {
        return s;
    }
});
var r = n(47120);
var i = n(911969);
function a(e, t) {
    return e === i.yU.CHAT ? '/' + t : t;
}
n(895924);
function o(e, t) {
    return ''.concat(e, ':').concat(t);
}
function s(e) {
    return Object.fromEntries(e.map((e) => [o(e.id, e.type), e]));
}
function l(e, t) {
    let n = {};
    for (let [r, i] of Object.entries(e)) t.includes(i.type) && (n[r] = i);
    return n;
}
