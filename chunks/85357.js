function n(e, n) {
    return function (r) {
        return null != r && r[e] === n && (void 0 !== n || e in Object(r));
    };
}
e.exports = n;
