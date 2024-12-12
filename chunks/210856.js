var i = r(957578).Buffer;
function a(e, n, r) {
    var a = e._cipher.encryptBlock(e._prev)[0] ^ n;
    return (e._prev = i.concat([e._prev.slice(1), i.from([r ? n : a])])), a;
}
n.encrypt = function (e, n, r) {
    for (var s = n.length, o = i.allocUnsafe(s), l = -1; ++l < s; ) o[l] = a(e, n[l], r);
    return o;
};
