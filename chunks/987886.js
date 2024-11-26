r.d(t, {
    B: function () {
        return n;
    }
});
let a = r(899517).n;
function n() {
    let e = a.chrome,
        t = e && e.app && e.app.runtime,
        r = 'history' in a && !!a.history.pushState && !!a.history.replaceState;
    return !t && r;
}
