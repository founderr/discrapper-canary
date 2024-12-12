(n.publicEncrypt = r(739134)),
    (n.privateDecrypt = r(385203)),
    (n.privateEncrypt = function (e, r) {
        return n.publicEncrypt(e, r, !0);
    }),
    (n.publicDecrypt = function (e, r) {
        return n.privateDecrypt(e, r, !0);
    });
