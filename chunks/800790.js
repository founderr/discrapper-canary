var a = r(292403),
    n = r(539339),
    _ = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!a(e)) return n(e);
    var t = [];
    for (var r in Object(e)) _.call(e, r) && 'constructor' != r && t.push(r);
    return t;
};
