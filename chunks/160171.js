var i = r(390976),
    a = r(690244),
    s = r(781421),
    o = r(815329),
    l = a('%Function.prototype.apply%'),
    u = a('%Function.prototype.call%'),
    c = a('%Reflect.apply%', !0) || i.call(u, l),
    d = r(583584),
    f = a('%Math.max%');
e.exports = function (e) {
    if ('function' != typeof e) throw new o('a function is required');
    var n = c(i, u, arguments);
    return s(n, 1 + f(0, e.length - (arguments.length - 1)), !0);
};
var _ = function () {
    return c(i, l, arguments);
};
d ? d(e.exports, 'apply', { value: _ }) : (e.exports.apply = _);
