r.d(n, {
    c: function () {
        return a;
    }
});
var i = r(239700);
function a(e) {
    let [n, r] = (0, i.zk)(s(e.value), s(e.defaultValue) || '', e.onChange);
    return {
        value: n,
        setValue: r
    };
}
function s(e) {
    if (null != e) return e.toString();
}
