r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(392711),
    a = r.n(i);
function s(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
    return a()(e)
        .map((e) => ('null' === e.channel.id ? n[e.channel.id] : [e, n[e.channel.id]]))
        .flattenDeep()
        .filter(r)
        .value();
}
