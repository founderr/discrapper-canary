var i = r(257693);
(n.encrypt = function (e, n) {
    var r = i(n, e._prev);
    return (e._prev = e._cipher.encryptBlock(r)), e._prev;
}),
    (n.decrypt = function (e, n) {
        var r = e._prev;
        return (e._prev = n), i(e._cipher.decryptBlock(n), r);
    });
