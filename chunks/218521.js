n.d(t, {
    d: function () {
        return s;
    },
    m: function () {
        return o;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(503461);
function o(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length >= 1 && n.length <= a.G2) return n;
    throw Error('combination results in an invalid key that has '.concat(n.length, ' elements: ').concat(JSON.stringify(n)));
}
function s(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length <= a.G2) return n;
    throw Error('combination results in an invalid prefix key that has '.concat(n.length, ' elements: ').concat(JSON.stringify(n)));
}
