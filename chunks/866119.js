function i(e, n) {
    let r = 0,
        i = Math.min(e.length, n.length);
    for (let a = 0; a < i; a++) r |= e.charCodeAt(a) ^ n.charCodeAt(a);
    return 0 === r && e.length === n.length;
}
r.d(n, {
    y: function () {
        return i;
    }
});
