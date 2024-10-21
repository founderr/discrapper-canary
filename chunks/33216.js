n.d(t, {
    c: function () {
        return i;
    }
});
var r = n(158082);
function i(e) {
    let [t, n] = (0, r.zk)(a(e.value), a(e.defaultValue) || '', e.onChange);
    return {
        value: t,
        setValue: n
    };
}
function a(e) {
    if (null != e) return e.toString();
}
