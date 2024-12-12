var i = r(880051),
    a = r(173472),
    s = Object.prototype.hasOwnProperty;
function o(e) {
    if (!(0, i.Z)(e)) return (0, a.Z)(e);
    var n = [];
    for (var r in Object(e)) s.call(e, r) && 'constructor' != r && n.push(r);
    return n;
}
n.Z = o;
