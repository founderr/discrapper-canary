r.d(t, {
    V: function () {
        return n;
    }
});
let a = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];
function n(e) {
    return 'warn' === e ? 'warning' : a.includes(e) ? e : 'log';
}
