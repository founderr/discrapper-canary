var a,
    n = r(54640);
var _ = (a = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + a : '';
e.exports = function (e) {
    return !!_ && _ in e;
};
