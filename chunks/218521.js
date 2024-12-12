r.d(n, {
    d: function () {
        return l;
    },
    m: function () {
        return o;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(503461);
function o(e, n) {
    let r = Array.isArray(n) ? [...e, ...n] : [...e, n];
    if (r.length >= 1 && r.length <= s.G2) return r;
    throw Error('combination results in an invalid key that has '.concat(r.length, ' elements: ').concat(JSON.stringify(r)));
}
function l(e, n) {
    let r = Array.isArray(n) ? [...e, ...n] : [...e, n];
    if (r.length <= s.G2) return r;
    throw Error('combination results in an invalid prefix key that has '.concat(r.length, ' elements: ').concat(JSON.stringify(r)));
}
