var n,
    a = r(54640);
var _ = (n = /[^.]+$/.exec((a && a.keys && a.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + n : '';
e.exports = function (e) {
    return !!_ && _ in e;
};
