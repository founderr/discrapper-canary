var r = n(957578).Buffer;
function i(e, t, n) {
    var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
    return (e._prev = r.concat([e._prev.slice(1), r.from([n ? t : i])])), i;
}
t.encrypt = function (e, t, n) {
    for (var a = t.length, o = r.allocUnsafe(a), s = -1; ++s < a; ) o[s] = i(e, t[s], n);
    return o;
};
