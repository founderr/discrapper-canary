var i = r(957578).Buffer,
    a = r(257693);
function s(e, n, r) {
    var s = n.length,
        o = a(n, e._cache);
    return (e._cache = e._cache.slice(s)), (e._prev = i.concat([e._prev, r ? n : o])), o;
}
n.encrypt = function (e, n, r) {
    for (var a, o = i.allocUnsafe(0); n.length; )
        if ((0 === e._cache.length && ((e._cache = e._cipher.encryptBlock(e._prev)), (e._prev = i.allocUnsafe(0))), e._cache.length <= n.length)) (a = e._cache.length), (o = i.concat([o, s(e, n.slice(0, a), r)])), (n = n.slice(a));
        else {
            o = i.concat([o, s(e, n, r)]);
            break;
        }
    return o;
};
