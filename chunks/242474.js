var i = r(764900),
    a = r(170088),
    s = r(689118),
    o = r(957578).Buffer,
    l = {
        'des-ede3-cbc': a.CBC.instantiate(a.EDE),
        'des-ede3': a.EDE,
        'des-ede-cbc': a.CBC.instantiate(a.EDE),
        'des-ede': a.EDE,
        'des-cbc': a.CBC.instantiate(a.DES),
        'des-ecb': a.DES
    };
function u(e) {
    i.call(this);
    var n,
        r = e.mode.toLowerCase(),
        a = l[r];
    n = e.decrypt ? 'decrypt' : 'encrypt';
    var s = e.key;
    !o.isBuffer(s) && (s = o.from(s)), ('des-ede' === r || 'des-ede-cbc' === r) && (s = o.concat([s, s.slice(0, 8)]));
    var u = e.iv;
    !o.isBuffer(u) && (u = o.from(u)),
        (this._des = a.create({
            key: s,
            iv: u,
            type: n
        }));
}
(l.des = l['des-cbc']),
    (l.des3 = l['des-ede3-cbc']),
    (e.exports = u),
    s(u, i),
    (u.prototype._update = function (e) {
        return o.from(this._des.update(e));
    }),
    (u.prototype._final = function () {
        return o.from(this._des.final());
    });
