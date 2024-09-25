var r = n(650359),
    i = n(546745);
function a(e, t, n) {
    if (i()) return Reflect.construct.apply(null, arguments);
    var a = [null];
    a.push.apply(a, t);
    var o = new (e.bind.apply(e, a))();
    return n && r(o, n.prototype), o;
}
(e.exports = a), (e.exports.__esModule = !0), (e.exports.default = e.exports);
