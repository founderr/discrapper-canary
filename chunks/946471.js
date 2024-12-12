function a(e, t) {
    let r = t && t.getDsn(),
        a = t && t.getOptions().tunnel;
    return (
        (function (e, t) {
            return !!t && e.includes(t.host);
        })(e, r) ||
        (function (e, t) {
            return !!t && n(e) === n(t);
        })(e, a)
    );
}
r.d(t, {
    W: function () {
        return a;
    }
});
function n(e) {
    return '/' === e[e.length - 1] ? e.slice(0, -1) : e;
}
