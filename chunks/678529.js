function r(e, n) {
    return function (r) {
        return null != r && r[e] === n && (void 0 !== n || e in Object(r));
    };
}
n.Z = r;
