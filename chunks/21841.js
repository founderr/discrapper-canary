function n(e, n) {
    if (!e) throw Error(n || 'Assertion failed');
}
(e.exports = n),
    (n.equal = function (e, n, r) {
        if (e != n) throw Error(r || 'Assertion failed: ' + e + ' != ' + n);
    });
