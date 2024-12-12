function i(e) {
    let n = document.createElement('a');
    return (n.href = e), n.hostname;
}
function a(e) {
    let n = document.createElement('a');
    return (n.href = e), n.protocol;
}
r.d(n, {
    E: function () {
        return a;
    },
    F: function () {
        return i;
    }
});
