(n.encrypt = function (e, n) {
    return e._cipher.encryptBlock(n);
}),
    (n.decrypt = function (e, n) {
        return e._cipher.decryptBlock(n);
    });
