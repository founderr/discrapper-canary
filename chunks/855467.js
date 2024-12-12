var i = r(108381),
    a = r(957578).Buffer;
function s(e) {
    var n = a.allocUnsafe(4);
    return n.writeUInt32BE(e, 0), n;
}
e.exports = function (e, n) {
    for (var r, o = a.alloc(0), l = 0; o.length < n; ) (r = s(l++)), (o = a.concat([o, i('sha1').update(e).update(r).digest()]));
    return o.slice(0, n);
};
