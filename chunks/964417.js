var i = r(650359),
    a = r(546745);
function s(e, n, r) {
    if (a()) return Reflect.construct.apply(null, arguments);
    var s = [null];
    s.push.apply(s, n);
    var o = new (e.bind.apply(e, s))();
    return r && i(o, r.prototype), o;
}
(e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);
